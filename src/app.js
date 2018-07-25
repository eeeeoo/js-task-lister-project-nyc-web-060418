const createListForm = document.getElementById("create-list-form")
const listInputField = document.getElementById("new-list-title")
const appContainer = document.getElementById("app-content")

createListForm.addEventListener("submit", createList)

function createList(event){
  event.preventDefault();
  const newListObj = new List(listInputField.value)
  const findListObj = allListObj.find(listObj => listObj.listTitle === listInputField.value)
  const listSelectOptionArea = document.getElementById("parent-list")
  if (appContainer.innerHTML== ""){
    appContainer.innerHTML = findListObj.render()
  } else {
    listSelectOptionArea.innerHTML += `<option value="${findListObj.listTitle}" selected>${findListObj.listTitle}</option>`
  }
  if (document.getElementById("create-task-form")){
    const createTaskForm = document.getElementById("create-task-form")
    createTaskForm.addEventListener("submit", createTask)
  }
  function createTask(event){
    event.preventDefault();
    const taskDescInputField = document.getElementById("new-task-description")
    const taskPriorityInputField = document.getElementById("new-task-priority")
    const newTaskObj = new Task(findListObj.listTitle, taskDescInputField.value,taskPriorityInputField.value)
    const newlistArea = document.createElement("div")
    newlistArea.id = "lists"
    appContainer.appendChild(newlistArea)
    console.log(allListObj)
    // const findTaskObj = allListObj.find(taskObj => taskObj.listTitle === event.target.dataset.title)
    //
    // if (event.target.dataset.title){
    // } else{

      const listArea = document.getElementById("lists")
      listArea.innerHTML += newTaskObj.render()
    // }
  }

}
