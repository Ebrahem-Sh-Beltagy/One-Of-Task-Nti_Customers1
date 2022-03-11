const add =document.querySelector("#add")
// let bigTasks = []
const tableBody = document.querySelector("#tableBody")
const mainHeads =['name', 'address', 'age']


    const writeDataToStorage =()=>{
        localStorage.setItem("customers", JSON.stringify(bigTasks)) 
        
    }
    const readDataFromStorage =()=>{
        try{
            bigTasks= JSON.parse(localStorage.getItem("customers")) ||[]
              
        }
        catch(e){
            console.log(e.message)
            // bigTasks
        }
        return bigTasks
        }

const submitForm = function(e){
    e.preventDefault()
    // console.log(e.target);
    const customers={ id:Date.now()}
    try {
        mainHeads.forEach(head => {
         customers[head]= this.elements[head].value 
         console.log(head);
            
        })
    }
   catch(e){
    console.log(e.message); 
    return []
   }
   const bigTasks= readDataFromStorage() 
    console.log(bigTasks);
    bigTasks.push(customers)
    writeDataToStorage(customers)
    this.reset();
    readDataFromStorage() 
    // window.location.href="index.html"
}
const createMyOwnElement =(parent, htmlElement, txt, classes)=>{
    const myEle = document.createElement(htmlElement)
    parent.appendChild(myEle)
    if(txt) myEle.textContent = txt
    if(classes) myEle.className = classes
    return myEle
}

if(add) add.addEventListener("submit", submitForm)

   const  bigTasksShowAll = ()=>{
    tableBody.innerHTML=""
   const bigTasksShow = readDataFromStorage()
   bigTasksShow.forEach((task, index)=>{
    // const bigTasksShowHead = [""]
   const tr =  createMyOwnElement(tableBody, "tr", null, null)
    createMyOwnElement(tr, "td", index+1, null)
    createMyOwnElement(tr, "td", task.name, null)
    createMyOwnElement(tr, "td", task.address, null)
    createMyOwnElement(tr, "td", task.age, null)
    const actionId = createMyOwnElement(tr, "td", null, null)
    const showBtn =  createMyOwnElement(actionId, "button", "show", "btn btn-primary")
    const editBtn =  createMyOwnElement(actionId, "button", "edit", "btn btn-success me-2")
    const deleteBtn = createMyOwnElement(actionId, "button", "belete", "btn btn-danger ml-2")
    
    deleteBtn.addEventListener("click", ()=>{
        
      const  con=  bigTasksShow.splice(index, 1)
        // console.log(bigTasksShow[index])
        console.log(con)
        writeDataToStorage()
        // window.location.reload()
        bigTasksShowAll()
    })
    })
}
if(tableBody) bigTasksShowAll()
