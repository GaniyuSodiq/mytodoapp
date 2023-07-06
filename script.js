function createTodo(){
    const todos = {
        container : document.createElement('div'),
        todoInput : document.createElement('input'),
        removeButton : document.createElement('button')
    }

    const onpageInput = document.getElementById('new-todo-input').value

    todos.todoInput.value = onpageInput
    todos.removeButton.innerText = 'Remove Todo'
    todos.removeButton.addEventListener('click', () => {
        todos.container.remove()
    })

    todos.container.classList.add('todos-style')

    todos.container.appendChild(todos.todoInput)
    todos.container.appendChild(todos.removeButton)

    const todosBox = document.getElementById('todos')
    todosBox.appendChild(todos.container)

    return todosBox
}

const todoButton = document.getElementById('add-todo-btn')
todoButton.addEventListener('click', () => {     
    createTodo()
})


