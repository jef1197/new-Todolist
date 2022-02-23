/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//Target Buttons\r\nlet addTasklistBtn = document.getElementById('addTaskList');\r\nlet addTaskBtn = document.getElementById('addTaskBtn');\r\n//Targert Container\r\nlet taskListContainer = document.getElementById('taskListContainer');\r\nlet taskContainer = document.getElementById('taskContainer');\r\n\r\n// Holds Task List\r\nlet List = [];\r\n\r\n// Creates new task List\r\nconst addNewTaskList = (name, id, isActive) => {\r\n    let taskArray = [];\r\n    let taskContainer = {className: 'taskContainer', id: id}\r\n    return {name, taskArray, id, isActive, taskContainer}\r\n}\r\n\r\n// Creates New Task\r\nconst addNewTask = (name,date) => {\r\n    return {name, date}\r\n}\r\n\r\n// Adds the new Task list to interface\r\nfunction addToList(listItem) {\r\n    let a = document.createElement(\"a\");\r\n    a.innerHTML = listItem.name;\r\n    a.classList.add(\"column\")\r\n    a.classList.add(\"is-full\")\r\n    a.classList.add(\"task-list-item\")\r\n    a.id = listItem.id;\r\n    if(listItem.isActive){\r\n        a.classList.add(\"isActive\")\r\n    } \r\n    taskListContainer.appendChild(a);\r\n}\r\n\r\n// Adds new Task to interface\r\nfunction addTaskToList(listItem) {\r\n    let label = document.createElement(\"label\");\r\n    // let date = document.createElement(\"p\");\r\n    let div = document.createElement(\"div\");\r\n    let checkBtn = document.createElement('input');\r\n    let checkContainer = document.createElement(\"div\");\r\n    let checkmark = document.createElement(\"label\");\r\n    let deleteBtn = document.createElement('button');\r\n\r\n    checkContainer.classList.add('checkContainer');\r\n    checkContainer.classList.add(\"column\");\r\n    checkContainer.classList.add(\"is-1\");\r\n    checkmark.htmlFor =  \"check-\" + List[listItem.id].taskArray.length + '-' + List[listItem.id].name;\r\n\r\n    checkBtn.type = \"checkbox\";\r\n    checkBtn.classList.add(\"checkboxBtn\");\r\n    checkBtn.id = \"check-\" + List[listItem.id].taskArray.length + '-' + List[listItem.id].name;\r\n\r\n    checkContainer.appendChild(checkBtn)\r\n    checkContainer.appendChild(checkmark)\r\n\r\n    // checkBtn.classList.add(\"level-left\");\r\n\r\n    label.innerHTML = listItem.name;\r\n    label.classList.add(\"column\");\r\n    label.classList.add(\"checkBtn-label\");\r\n    label.htmlFor =  \"check-\" + List[listItem.id].taskArray.length + '-' + List[listItem.id].name;\r\n    // p.classList.add(\"level-left\");\r\n\r\n    // date.innerHTML = \"12/12\";\r\n    // date.classList.add(\"column\");\r\n    // date.classList.add(\"level-item\");\r\n\r\n    deleteBtn.innerHTML = \"Delete\";\r\n    deleteBtn.classList.add(\"column\");\r\n    deleteBtn.classList.add(\"is-1\");\r\n    deleteBtn.classList.add(\"deleteTaskBtn\");\r\n    deleteBtn.classList.add(\"is-hidden-mobile\");\r\n    deleteBtn.id =  \"delete-\" + List[listItem.id].taskArray.length + '-' + List[listItem.id].name;\r\n    // deleteBtn.classList.add(\"level-right\");\r\n\r\n    div.classList.add(\"columns\");\r\n    div.classList.add(\"is-mobile\");\r\n    div.classList.add(\"is-full\");\r\n    div.classList.add(\"task-list\");\r\n    div.classList.add(\"level\");\r\n\r\n    div.appendChild(checkContainer);\r\n    div.appendChild(label);\r\n    div.appendChild(deleteBtn);\r\n\r\n    div.id =('taskList-' + List[listItem.id].taskArray.length + '-' + List[listItem.id].name);\r\n    taskContainer.appendChild(div);\r\n\r\n    return div;\r\n}\r\n\r\n// Display the task for the list\r\nfunction displayTasks(list){\r\n    for(let i = 0; i < list.taskArray.length; i++) {\r\n        // console.log(list.taskArray[i])\r\n        list.taskArray[i].style.display ='';\r\n        // taskContainer.children[i].classList.remove('hidden');\r\n    }\r\n}\r\n\r\n// Hide all task\r\nfunction hideTask(){\r\n    for(let i = 0; i < taskContainer.children.length; i++) {\r\n        taskContainer.children[i].style.display ='none';\r\n        // taskContainer.children[i].classList.add('hidden');\r\n    }\r\n}\r\n\r\n\r\n// Event listner for user click on add Task List btn\r\naddTasklistBtn.addEventListener('click', () => {\r\n    let newListName = document.getElementById('taskListName').value\r\n    if (newListName) {\r\n        let newListItem = addNewTaskList(newListName, List.length, false);\r\n        addToList(newListItem);\r\n        List.push(newListItem);\r\n    }\r\n});\r\n\r\n// Event listner for user click on add Task btn\r\naddTaskBtn.addEventListener('click', () => {\r\n    let newTaskName = document.getElementById('taskName').value\r\n    if (newTaskName) {\r\n        let newListItem = addNewTask(newTaskName);\r\n        for(let i = 0; i < List.length; i++){\r\n            if(List[i].isActive){\r\n                newListItem.id = i;\r\n                List[i].taskArray.push(addTaskToList(newListItem));\r\n            }\r\n        }\r\n    }\r\n    \r\n});\r\n\r\n// Populates default list on load\r\nwindow.onload = (event) => {\r\n    let newListItem = addNewTaskList(\"Today\", List.length, true);\r\n    addToList(newListItem);\r\n    List.push(newListItem);\r\n    newListItem = addNewTaskList(\"Weekly\", List.length, false);\r\n    addToList(newListItem);\r\n    List.push(newListItem);\r\n};\r\n\r\n// Adds event listner to all new list\r\ndocument.addEventListener('click',function(e){\r\n    if(e.target && e.target.classList.contains('task-list-item')){\r\n        if(e.target.classList.contains(\"isActive\")){\r\n            // console.log(e.target.innerHTML)\r\n        } else {\r\n            let targetList = document.getElementsByClassName('isActive');\r\n            let title = document.getElementById('taskTitle');\r\n            targetList[0].classList.remove('isActive');\r\n            title.innerHTML = e.target.innerHTML;\r\n            e.target.classList.add('isActive')\r\n            for(let i = 0; i < List.length; i++){\r\n                List[i].isActive = false;\r\n                if (e.target.id == List[i].id) {\r\n                    List[i].isActive = true;\r\n                    hideTask();\r\n                    displayTasks(List[i]);          \r\n                }\r\n            }\r\n        }\r\n    }\r\n});\r\ndocument.addEventListener('click',function(e){\r\n    if(e.target && e.target.classList.contains('checkboxBtn')){\r\n\r\n        let labelList =document.getElementsByClassName('checkBtn-label')\r\n\r\n        if (e.target.checked){\r\n            for (let i = 0; i < labelList.length; i++){\r\n                if (e.target.id == labelList[i].htmlFor){\r\n                    labelList[i].style.textDecoration = 'line-through'\r\n                    e.target.parentNode.parentNode.style.backgroundColor = 'hsl(204, 93%, 58%)';\r\n                }\r\n            }\r\n        } else {\r\n            for (let i = 0; i < labelList.length; i++){\r\n                if (e.target.id == labelList[i].htmlFor){\r\n                    labelList[i].style.textDecoration = 'none'\r\n                    e.target.parentNode.parentNode.style.backgroundColor = 'white'\r\n                }\r\n            }\r\n        }\r\n    }\r\n});\r\ndocument.addEventListener('click',function(e){\r\n    if(e.target && e.target.classList.contains('deleteTaskBtn')){\r\n    let deleteEl = document.getElementById(e.target.parentNode.id);\r\n    deleteEl.remove(); \r\n    }\r\n});\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    // Functions to open and close a modal\r\n    function openModal($el) {\r\n        $el.classList.add('is-active');\r\n    }\r\n\r\n    function closeModal($el) {\r\n        $el.classList.remove('is-active');\r\n    }\r\n\r\n    function closeAllModals() {\r\n        (document.querySelectorAll('.modal') || []).forEach(($modal) => {\r\n\r\n        closeModal($modal);\r\n    });\r\n    }\r\n\r\n    // Add a click event on buttons to open a specific modal\r\n    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {\r\n        const modal = $trigger.dataset.target;\r\n        const $target = document.getElementById(modal);\r\n        $trigger.addEventListener('click', () => {\r\n        openModal($target);\r\n    });\r\n});\r\n\r\n    // Add a click event on various child elements to close the parent modal\r\n    (document.querySelectorAll('.modal-close, .modal-card-head .delete, .modal-card-body .button, .modal-card-foot .button') || []).forEach(($close) => {\r\n        const $target = $close.closest('.modal');\r\n        $close.addEventListener('click', () => {\r\n            closeModal($target);\r\n    });\r\n});\r\n\r\n    // Add a keyboard event to close all modals\r\n    document.addEventListener('keydown', (event) => {\r\n        const e = event || window.event;\r\n        if (e.keyCode === 27) { // Escape key\r\n            closeAllModals();\r\n        }\r\n    });\r\n});\n\n//# sourceURL=webpack://new-todolist/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;