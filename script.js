
function createTodo(){
    const todos = {
        container : document.createElement('div'),
        todoInput : document.createElement('input'),
        removeButton : document.createElement('button')
    }

    todos.removeButton.innerText = 'Remove Todo'

    todos.container.appendChild(todos.todoInput)
    todos.container.appendChild(todos.removeButton)

    return todos.container
}

function main(){
    const todosBox = document.getElementById('todos')
    todosBox.appendChild(createTodo())
}

const todoButton = document.getElementById('add-todo-btn')

todoButton.addEventListener('click', () => {
    let onpageInput = document.getElementById('new-todo-input').value
    console.log(onpageInput) 
    main()
})


