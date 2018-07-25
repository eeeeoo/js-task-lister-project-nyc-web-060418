class Task extends List {
  // your code here
  constructor(listTitle, description, priorityLevel){
    super(listTitle)
    this.description = description
    this.priorityLevel = priorityLevel
  }

  render(){
    return `
  <div>
    <h2>${this.listTitle}
      <button data-title="${this.listTitle}" class="delete-list">
        X
      </button>
    </h2>
    <ul>
      <li>
        Task: ${this.description}
        <button data-list-title="${this.listTitle}" data-task-name="${this.description}" class="delete-task">
          X
        </button>
        <br>
        Priority: ${this.priorityLevel}
      </li>
    </ul>
  </div>`
  }
}
