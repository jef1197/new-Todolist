//Target Buttons
let addTasklistBtn = document.getElementById('addTaskList');
let addTaskBtn = document.getElementById('addTaskBtn');
//Targert Container
let taskListContainer = document.getElementById('taskListContainer');
let taskContainer = document.getElementById('taskContainer');

let editTaskBtn = document.getElementById('editTask');

// Holds Task List
let List = [];

// Creates new task List
const addNewTaskList = (name, id, isActive) => {
    let taskArray = [];
    let taskContainer = {
        className: 'taskContainer',
        id: id
    }
    return {
        name,
        taskArray,
        id,
        isActive,
        taskContainer
    }
}

// Creates New Task
const addNewTask = (name, date) => {
    return {
        name,
        date
    }
}

// Adds the new Task list to interface
function addToList(listItem) {
    let a = document.createElement("a");
    a.innerHTML = listItem.name;
    a.classList.add("column")
    a.classList.add("is-full")
    a.classList.add("task-list-item")
    a.id = listItem.id;
    if (listItem.isActive) {
        a.classList.add("isActive")
    }
    taskListContainer.appendChild(a);
}

// Adds new Task to interface
function addTaskToList(listItem) {
    let label = document.createElement("label");
    // let date = document.createElement("p");
    let div = document.createElement("div");
    let checkBtn = document.createElement('input');
    let checkContainer = document.createElement("div");
    let checkmark = document.createElement("label");
    let deleteBtn = document.createElement('button');
    let editBtn = document.createElement('button');

    checkContainer.classList.add('checkContainer');
    checkContainer.classList.add("column");
    checkContainer.classList.add("is-1");
    checkmark.htmlFor = "check-" + List[listItem.id].taskArray.length + '-' + List[listItem.id].name;

    checkBtn.type = "checkbox";
    checkBtn.classList.add("checkboxBtn");
    checkBtn.id = "check-" + List[listItem.id].taskArray.length + '-' + List[listItem.id].name;

    checkContainer.appendChild(checkBtn)
    checkContainer.appendChild(checkmark)

    // checkBtn.classList.add("level-left");

    label.innerHTML = listItem.name;
    label.classList.add("column");
    label.classList.add("checkBtn-label");
    label.htmlFor = "check-" + List[listItem.id].taskArray.length + '-' + List[listItem.id].name;
    // p.classList.add("level-left");

    // date.innerHTML = "12/12";
    // date.classList.add("column");
    // date.classList.add("level-item");

    deleteBtn.innerHTML = "Delete";
    deleteBtn.classList.add("column");
    deleteBtn.classList.add("is-2");
    deleteBtn.classList.add("deleteTaskBtn");
    deleteBtn.classList.add("editTaskBtn");
    // deleteBtn.classList.add("is-hidden-mobile");
    deleteBtn.id = "delete-" + List[listItem.id].taskArray.length + '-' + List[listItem.id].name;
    // deleteBtn.classList.add("level-right");

    editBtn.innerHTML = "Edit";
    editBtn.classList.add("column");
    editBtn.classList.add("is-2");
    editBtn.classList.add("editTaskBtn");
    // editBtn.classList.add("is-hidden-mobile");
    editBtn.classList.add("js-modal-trigger");
    editBtn.dataset.target = 'taskListEdit'
    editBtn.id = "edit-" + List[listItem.id].taskArray.length + '-' + List[listItem.id].name;

    div.classList.add("columns");
    div.classList.add("is-mobile");
    div.classList.add("is-full");
    div.classList.add("task-list");
    div.classList.add("level");

    div.appendChild(checkContainer);
    div.appendChild(label);
    div.appendChild(editBtn);
    div.appendChild(deleteBtn);

    div.id = ('taskList-' + List[listItem.id].taskArray.length + '-' + List[listItem.id].name);
    taskContainer.appendChild(div);

    return div;
}

// Display the task for the list
function displayTasks(list) {
    for (let i = 0; i < list.taskArray.length; i++) {
        // console.log(list.taskArray[i])
        list.taskArray[i].style.display = '';
        // taskContainer.children[i].classList.remove('hidden');
    }
}

// Hide all task
function hideTask() {
    for (let i = 0; i < taskContainer.children.length; i++) {
        taskContainer.children[i].style.display = 'none';
        // taskContainer.children[i].classList.add('hidden');
    }
}

// Event listner for user click on add Task List btn
addTasklistBtn.addEventListener('click', () => {
    let newListName = document.getElementById('taskListName').value
    if (newListName) {
        let newListItem = addNewTaskList(newListName, List.length, false);
        addToList(newListItem);
        List.push(newListItem);
    }
});

// Event listner for user click on add Task btn
addTaskBtn.addEventListener('click', () => {
    let newTaskName = document.getElementById('taskName').value
    if (newTaskName) {
        let newListItem = addNewTask(newTaskName);
        for (let i = 0; i < List.length; i++) {
            if (List[i].isActive) {
                newListItem.id = i;
                List[i].taskArray.push(addTaskToList(newListItem));
            }
        }
    }
});

// Populates default list on load
window.onload = (event) => {
    let newListItem = addNewTaskList("Today", List.length, true);
    addToList(newListItem);
    List.push(newListItem);
    newListItem = addNewTaskList("Weekly", List.length, false);
    addToList(newListItem);
    List.push(newListItem);
};

// Adds event listner to all new list
document.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('task-list-item')) {
        if (e.target.classList.contains("isActive")) {
            // console.log(e.target.innerHTML)
        } else {
            let targetList = document.getElementsByClassName('isActive');
            let title = document.getElementById('taskTitle');
            targetList[0].classList.remove('isActive');
            title.innerHTML = e.target.innerHTML;
            e.target.classList.add('isActive')
            for (let i = 0; i < List.length; i++) {
                List[i].isActive = false;
                if (e.target.id == List[i].id) {
                    List[i].isActive = true;
                    hideTask();
                    displayTasks(List[i]);
                }
            }
        }
    }
});

document.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('checkboxBtn')) {

        let labelList = document.getElementsByClassName('checkBtn-label')

        if (e.target.checked) {
            for (let i = 0; i < labelList.length; i++) {
                if (e.target.id == labelList[i].htmlFor) {
                    labelList[i].style.textDecoration = 'line-through'
                    e.target.parentNode.parentNode.style.backgroundColor = 'hsl(204, 93%, 58%)';
                }
            }
        } else {
            for (let i = 0; i < labelList.length; i++) {
                if (e.target.id == labelList[i].htmlFor) {
                    labelList[i].style.textDecoration = 'none'
                    e.target.parentNode.parentNode.style.backgroundColor = 'white'
                }
            }
        }
    }
});

// Delete Task
document.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('deleteTaskBtn')) {
        let deleteEl = document.getElementById(e.target.parentNode.id);
        deleteEl.remove();
    }
});

// Edit Task
document.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('editTaskBtn')) {
        let parentEL = e.target.parentNode;
        const modal = e.target.dataset.target;
        const $target = document.getElementById(modal);
        $target.classList.add('is-active');
        editTaskBtn.addEventListener('click', () => {
            let newTaskName = document.getElementById('taskListEditName').value;
            parentEL.querySelector('.checkBtn-label').innerHTML = newTaskName;
            console.log(parentEL.querySelector('.checkBtn-label').innerHTML);
        });
    }
});




document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
        $el.classList.add('is-active');
    }

    function closeModal($el) {
        $el.classList.remove('is-active');
    }

    function closeAllModals() {
        (document.querySelectorAll('.modal') || []).forEach(($modal) => {
            closeModal($modal);
        });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);
        $trigger.addEventListener('click', () => {
            openModal($target);
        });
    });

    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-close, .modal-card-head .delete, .modal-card-body .button, .modal-card-foot .button') || []).forEach(($close) => {
        const $target = $close.closest('.modal');
        $close.addEventListener('click', () => {
            closeModal($target);
        });
    });

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
        const e = event || window.event;
        if (e.keyCode === 27) { // Escape key
            closeAllModals();
        }
    });
});