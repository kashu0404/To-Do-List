const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderToDo();

function renderToDo() {
    let todoListHTML='';

    for (let i=0; i< todoList.length; i++) {

        const todoObject = todoList[i];
        const name = todoObject.name;
        //same as above with different syntax for dueDate :
        const { dueDate } = todoObject;

        const html = `
            <div class="js-name-input">${name}</div>
            <div class="js-date-input">${dueDate}</div> 
            <button onclick=
                    "todoList.splice(${i},1); renderToDo();localStorage.setItem('todoList',JSON.stringify(todoList));" class="delete-button">
                    Delete</button>
        `;
        todoListHTML += html;
    }

    console.log(todoListHTML);
    document.querySelector('.js-lists').innerHTML = todoListHTML;
}

function addToDo() {

    const jsTask = document.querySelector('.js-task');
    const name = jsTask.value;


    const dateInput = document.querySelector('.js-date');
    const dueDate = dateInput.value;

    todoList.push(
        {name: name,
        dueDate:dueDate}
    )

    localStorage.setItem('todoList',JSON.stringify(todoList));


    // console.log(todoList);

    jsTask.value = '';
    dateInput.value='';

    renderToDo();

}