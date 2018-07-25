const allListObj = []

class List {
  // your code here
  constructor(listTitle){
    this.listTitle = listTitle
    // this.tasks = []
    allListObj.push(this)
  }

  render(){
    return `
  <form id="create-task-form">
    <label for="parent-list">Select List:</label>
    <select id="parent-list">
    <option value="${this.listTitle}" selected>
      ${this.listTitle}
    </option>
    </select>

    <label for="new-task-description">Task Description:</label>
    <input required type="text" id="new-task-description" placeholder="description">

    <label for="new-task-priority">Priority level:</label>
    <input type="text" id="new-task-priority" placeholder="priority">
    <input id="task-submit" type="submit" value="Create New Task">
  </form>
`
  }
}
