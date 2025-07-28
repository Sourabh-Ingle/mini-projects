
// QUE---> SEARCH INDEX OF ANY NUMBER IN ARRAY

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let searchValue = -2;

const searchElement = (search) => {
    let searchIndex = -1;

    arr.forEach(item => {
        if (item === search) {
            searchIndex = arr.indexOf(item);
            console.log(searchIndex)
        }
    })

    console.log(searchIndex)
    return searchIndex
}

let searchIndexValue = searchElement(searchValue);
console.log("index value is : ", searchIndexValue);



//some other approch

// const searchElement = (search) => {
//    return arr.findIndex(item => item === search)
// }
// let searchIndexValue = searchElement(searchValue);
// console.log("index value is : ", searchIndexValue);