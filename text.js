// let buah = ["semangka", "jeruk", "Mangga", "Strawberry", "Nangka", "salak"]
// let arr = [1,2,3,4,5]
// let [buah1, buah2, ...buah3] = buah;
// let [a,b, , ,c] = arr;

// console.log(c)
// console.log(buah3)

// let arr = [5,1,2,31]
// let tmp;

// function arrAscending(params) {
//     return new Promise((resolve, reject ) => {
//         for (let i = 0; i < arr.length; i++) {
//             for (let j = i+1; j < arr.length; j++) {
//                 if (arr[i] > arr[j]) {
//                     tmp = arr[i]
//                     arr[i] = arr[j]
//                     arr[j] = tmp
//                 }
//             }
            
//         }
//         resolve(arr)
//     })
// }

// arrAscending(arr).then((e) => {console.log(e)})

function myst(...params) {
    return params;
}

let a = myst(1,2,3);

console.log(a)