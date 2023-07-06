function createTodo(){

    // CREATE ALL THE HTML ELEMENTS OF EACH TODO & PUT INTO AN OBJECT
    const todos = {
        container : document.createElement('div'),
        todoInput : document.createElement('input'),
        removeButton : document.createElement('button')
    }

    // PUT THE CONTENT OF THE DEFAULT INPUT INTO THE JS CREATED INPUT
    todos.todoInput.value = document.getElementById('new-todo-input').value

    // ADD CLICK EVENT TO THE CREATED JS BUTTON TO REMOVE THE JS CREATED DIV CONTAINER
    todos.removeButton.innerText = 'Remove Todo'
    todos.removeButton.addEventListener('click', () => {
        todos.container.remove()
    })

    // PUT THE JS CREATED INPUT AND BUTTON INTO THE JS CREATED DIV CONTAINER
    todos.container.classList.add('todos-style')
    todos.container.appendChild(todos.todoInput)
    todos.container.appendChild(todos.removeButton)

    // PUT THE JS CREATED DIV INTO THE HTML CREATED DIV 
    const todosBox = document.getElementById('todos')
    todosBox.appendChild(todos.container)

    // GIVE THE MODIFIED HTML CREATED DIV AS OUTPUT OF THIS FUNCTION AND EXIT THE FUNCTION
    console.log(todosBox)
    return todosBox
    
}

const todoButton = document.getElementById('add-todo-btn')
todoButton.addEventListener('click', () => {     
    createTodo()
})


