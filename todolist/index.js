// let searchValue = document.getElementById("search");
// let todoList = document.querySelector(".search-item");


// let list = [];
// let editId = null;

// function showList(arr) {

//     todoList.innerHTML = ``;

//     arr.map(obj => {
//         let { id, text } = obj;

//         let ele = document.createElement("div");
//         ele.className = "card";
//         ele.onclick = function () { handleEditValue(id) }
//         ele.innerHTML = `
//         <p class="todo">${text}</p>
//         <button onclick="handleRemoveBtn(${id})" class="btn">X</button>`
//         todoList.append(ele);
//     })
// }


// function handleRemoveBtn(id) {
//     list = list.filter(obj => obj.id !== id);
//     console.log(list)
//     showList(list);
// }

// // function handleEditValue(id) {
// //     let item = list.find(obj => {
// //         return obj.id === id
// //     })
// //     if (item) {
// //         searchValue.value = item.text;
// //         editedId = id;
// //     }
// // }


// // function updateTodoItem(){
// //     if(editedId !== null){
// //        list= list.map(obj=>{
// //             if(obj.id===editedId){
// //                 return{...obj,text:searchValue.value}
// //             }
// //             return obj;
// //         })

// //         editedId = null; 
// //         searchValue.value = ``;
        
// //         showList(list);
// //     }
// // }




// // function handleSearchResult() {

// //     let textValue=searchValue.value.trim();
// //     if(!textValue)return;

// //     if (editedId !== null) {
// //          updateTodoItem();
// //     } else {
// //         let obj = {
// //             id: Date.now(),
// //             text: textValue,
// //         }

// //         list.unshift(obj);
// //     }


// //    searchValue.value = ``;
// //     showList(list)
// // }

// function handleToDoList(){
//     let text=searchValue.value.trim();
//     if(!text)return;

//     if (editId!==null){  list = list.map(obj => obj.id === editId ? { ...obj, text } : obj);
//         editId=``;
//         searchValue.value = ``;
//         showList(list);
//     }else{
//         let obj={id:Date.now(),text:text}
//         list.unshift(obj);
//         searchValue.value = ``;
//         showList(list);
//     }

// }

let searchValue = document.getElementById("search");
let todoList = document.querySelector(".search-item");

let list = [];
let editId = null; // Track the todo being edited



//edit and creating todolisr logic (edit logic is tricky)
function handleTodo() {
    let text = searchValue.value.trim();
    if (!text) return; // Prevent empty entries

    if (editId !== null) {
        // Editing existing todo
        list = list.map(obj => obj.id === editId ? { ...obj, text } : obj);
        editId = null; // Reset edit tracking
    } else {
        // Adding new todo
        list.unshift({ id: Date.now(), text });
    }

    searchValue.value = ""; // Clear input
    showList();
}

function showList() {
    todoList.innerHTML = "";
    
    list.map(({ id, text }) => {
        let ele = document.createElement("div");
        ele.className = "card";
        ele.innerHTML = `
        <p class="todo">${text}</p>
        <button class="btn" onclick="handleRemove(${id},event)">X</button>`;

        ele.onclick = () => {
            searchValue.value = text;
            editId = id; // Store the ID for editing
        };

        todoList.append(ele);
    });
}

// removing with help of id
function handleRemove(id,e) {
    e.stopPropagation();
    list = list.filter(obj => obj.id !== id);
    showList();
}
