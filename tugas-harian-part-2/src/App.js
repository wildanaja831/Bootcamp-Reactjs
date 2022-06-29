import './App.css';
import React, { useState } from 'react';
// import axios from "axios";
// import Logo from './asset/img/logo.png'


// function App() {
//   const CheckList = (props) =>{
//     return(
//       <div className='checkbox-list'>
//         <input type={'checkbox'} /> Belajar {props.name}
//       </div>
//     )
//   }
//   return (
//     <div className='tugas-10'>
//       <div className='logo'>
//         <img src={Logo} />
//       </div>
//       <h1>THINGS TO DO</h1>
//       <p>During Bootcamp in Jabarcodingcamp</p>
//       <hr/>

//       <div className="checkbox-field">
//         <CheckList name={"Git & CLI"} />
//         <hr/>
//         <CheckList name={"HTML & CSS"} />
//         <hr/>
//         <CheckList name={"Javascript"} />
//         <hr/>
//         <CheckList name={"ReactJS Dasar"} />
//         <hr/>
//         <CheckList name={"ReactJS Advance"} />
//         <hr/>
//       </div>

//       <button href=''>Send</button>
//     </div>
//   );
// }

// let pesertaLomba = [ 'Budi', 'Susi', 'Lala', 'Agung' ]

const List = () => {
  const [pesertaLomba, setPesertaLomba] = useState([
    { nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
    { nama: "Manggis", hargaTotal: 350000, beratTotal: 10000 },
    { nama: "Nangka", hargaTotal: 90000, beratTotal: 2000 },
    { nama: "Durian", hargaTotal: 400000, beratTotal: 5000 },
    { nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000 }
  ])
  const [inputName, setInputName] = useState("")
  const [inputHarga, setInputHarga] = useState("")
  const [inputBerat, setInputBerat] = useState("")
  const [hargaBerat, sethargaBerat] = useState(inputHarga / inputBerat)
  const [currentIndex, setCurrentIndex] = useState(-1)

  const handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    console.log(value)

    switch (name) {
      case "nama":
        setInputName({...inputName, name : value})
        break;
      case "harga":
        setInputName({...inputHarga, name : value})
        break;
      case "berat":
        setInputName({...inputBerat, name : value})
        break;  
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let newData = pesertaLomba

    if (currentIndex === -1) {
      newData = [...pesertaLomba, inputName, inputHarga, inputBerat]
    } else {
      newData[currentIndex] = inputName
    }
    setPesertaLomba(newData)
    setInputName("")
  }

  const handleDelete = (event) => {
    let index = parseInt(event.target.value)
    let deletedItem = pesertaLomba[index]
    let newData = pesertaLomba.filter((e) => { return e !== deletedItem })
    console.log(newData)
    setPesertaLomba(newData)
  }

  const handleEdit = (event) => {
    let index = parseInt(event.target.value)
    let editValue = pesertaLomba[index]
    setInputName(editValue)
    setCurrentIndex(event.target.value)
  }

  return (
    <>
      <h1>Daftar Peserta Lomba</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Harga Total</th>
            <th>Berat Total</th>
            <th>Harga Per KG</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          {
            pesertaLomba.map((val, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{val.inputName}</td>
                  <td>{val.inputHarga}</td>
                  <td>{val.inputBerat}</td>
                  <td>{val.hargaBerat}</td>
                  <td>
                    <button onClick={handleEdit} value={index}>Edit</button>
                    <button onClick={handleDelete} value={index}>Delete</button>
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>


      <h1>Form Peserta</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Masukkan Nama :
        </label>
        <input type="text" value={inputName} onChange={handleChange} name="nama"/>
        <label>
          Masukkan Harga :
        </label>
        <input type="text" value={inputHarga} onChange={handleChange} name="harga"/>
        <label>
          Masukkan Berat :
        </label>
        <input type="text" value={inputBerat} onChange={handleChange} name="berat"/>
        <button>submit</button>
      </form>

    </>
  )
}


// export default List

// const Peserta = () => {
//   const [pesertaLomba, setPesertaLomba] = useState([])
//   const [inputName, setInputName] = useState("")
//   const [currentId, setCurrentId] = useState(null)

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios.get(`http://backendexample.sanbercloud.com/api/contestants`)

//       setPesertaLomba(result.data.map(x => { return { id: x.id, name: x.name } }))
//     }

//     fetchData()
//   }, [])

//   const handleEdit = (event) =>{
//     let idPeserta = event.target.value
//     axios.get(`http://backendexample.sanbercloud.com/api/contestants/${idPeserta}`)
//     .then(res => {
//       let data = res.data
//       setInputName(data.name)
//       setCurrentId(data.id)
//     })
//   }

//   const handleDelete = (event) =>{
//     let idPeserta = parseInt(event.target.value)
//     axios.delete(`http://backendexample.sanbercloud.com/api/contestants/${idPeserta}`)
//     .then(() => {
//       let newPesertaLomba = pesertaLomba.filter(el=> {return el.id !== idPeserta})
//       setPesertaLomba(newPesertaLomba)
//     })
//   }

//   const handleChange = (event) =>{
//     let inputValue = event.target.value
//     setInputName(inputValue)
//   }

//   const handleSubmit = (event) =>{
//     event.preventDefault()

//     if (currentId === null){
//       // untuk create data baru
//       axios.post(`http://backendexample.sanbercloud.com/api/contestants`, {name: inputName})
//       .then(res => {
//           let data = res.data
//           setPesertaLomba([...pesertaLomba, {id: data.id, name: data.name}])
//       })
//     }else{
//       axios.put(`http://backendexample.sanbercloud.com/api/contestants/${currentId}`, {name: inputName})
//       .then(() => {
//           let singlePeserta = pesertaLomba.find(el=> el.id === currentId)
//           singlePeserta.name= inputName
//           setPesertaLomba([...pesertaLomba])
//       })      
//     }
//     setInputName("")
//     setCurrentId(null)
//   }

//   return (
//     <>
//       {pesertaLomba !== null &&
//         (<div style={{ width: "70%", margin: "0 auto", textAlign: "center" }}>
//           <h1>Daftar Peserta Lomba</h1>
//           <table className="peserta-lomba">
//             <thead>
//               <tr>
//                 <th>No</th>
//                 <th>Nama</th>
//               </tr>
//             </thead>
//             <tbody>
//               {
//                 pesertaLomba.map((item, index) => {
//                   return (
//                     <tr key={index}>
//                       <td>{index + 1}</td>
//                       <td>{item.name}</td>
//                       <td>
//                         <button onClick={handleEdit} value={item.id}>Edit</button>
//                         &nbsp;
//                         <button onClick={handleDelete} value={item.id}>Delete</button>
//                       </td>
//                     </tr>
//                   )
//                 })
//               }
//             </tbody>
//           </table>
//         </div>)
//       }

//     </>
//   )
// }

export default List;