

let searchValue = document.getElementById("search");
let dynamicVal = document.getElementsByClassName("search-item")[0];

let userList = [
    {
        username: "sourabh ingle",
        email: "sourabh@gmail.com",
        job: "frontend developer",
    },
    {
        username: "pratik ingle",
        email: "pratik@gmail.com",
        job: "backend developer",
    }, {
        username: "sourabh joshi",
        email: "jayesh@gmail.com",
        job: "backend developer",
    }, {
        username: "sandy ingle",
        email: "sandy@gmail.com",
        job: "devOps developer",
    },
    {
        username: "sanjay varma",
        email: "sanjay@gmail.com",
        job: "Quality analyst",
    },
]

function handleSearchResultObj(userReultList) {

    dynamicVal.innerHTML = ``;

    userReultList.map((obj) => {
        let { username, email, job } = obj;

        let elem = document.createElement("div");
        elem.className = "card"
        elem.innerHTML = `
                <h3 class="title">${username}</h3>
                <p class="email">${email}</p>
                <p class="job">${job}</p>
   `
        dynamicVal.append(elem)
    })
}

handleSearchResultObj(userList);


function handleSearchResult() {
    let searchResult = searchValue.value.toLowerCase();

    //---------return conditions are manually fixed
    // const filteredList = userList.filter(obj => {
    //     return ((obj.job.includes(searchResult)) || (obj.username.includes(searchResult)) || (obj.email.includes(searchResult)))
    // })


    //---------return condition is dynamically fixed , now keys are increase then as well we do not have to look into it
    let searchParams = Object.keys(userList[0]);
    const filteredList = userList.filter(obj => {
        return searchParams.some(key =>
            obj[key] && obj[key].toString().includes(searchResult)
        );
    })

    // if search result not found 
    if (filteredList.length <= 0) {
        dynamicVal.innerHTML=``;
        let noResultFound = document.createElement("div");
        noResultFound.class = "noResult";
        noResultFound.innerHTML = `
             <h1 class="title404">Sorry but , No Such Result Found. </h1>
             `
        dynamicVal.append(noResultFound)
    } else {
        handleSearchResultObj(filteredList);
    }
}