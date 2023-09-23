const todoInput = document.querySelector('todo-input')
const todoButton = document.querySelector('todo-button')
const todoList = document.querySelector('todo-list')


todoButton.addEventListener('click', addTodo)


function addTodo(event) {

    event.preventDefault()

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    const newTodo = document.createElement('li')
    newTodo.innerText = 'hey'
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)

    const completeButton = document.createElement('button')
    completeButton.innerText = '<i class="fas fa-check"></i>'
    completeButton.classList.add("complete-btn")
    todoDiv.appendChild(completeButton)

    const trashButton = document.createElement('button')
    trashButton.innerText = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("complete-btn")
    todoDiv.appendChild(trashButton)

    todoList.appendChild(todoDiv)
} 