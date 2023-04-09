const todoList = ['make dinner', 'wash dishes']; //empty array

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i =0; i<todoList.length; i++) {
        
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;
        todoListHTML  += html;
    } //generating the HTMl
    console.log(todoListHTML);

    document.querySelector(`.js-todo-list`)
        .innerHTML = todoListHTML;
    }

function addTodo() {
    
     const inputElement = document.querySelector(`.js-name-input`)
        const name = inputElement.value;
        

        todoList.push(name);
        console.log(todoList);

        inputElement.value = ``; //todo를 작성하고 add를 누르면 input 박스가 초기화된다.

        renderTodoList();
}

