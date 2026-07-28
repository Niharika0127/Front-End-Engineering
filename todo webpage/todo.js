// // // // (function(){
// // // //     const todos=[];
// // // //     const todocontainer=document.getElementById("todo");
// // // //     const inputtask=document.createElement("input");
// // // //     inputtask.placeholder="Enter task..."
// // // //     inputtask.type="text";
// // // //     const addbtn=document.createElement("button");
// // // //     addbtn.textContent="Add"
// // // //     const todolist=document.createElement("div");
// // // //     todolist.style.border="2px solid black"
// // // //     todocontainer.append(inputtask,addbtn,todolist);

// // // //     function rendertask(task){
// // // //         const todoitem=document.createElement("div");
// // // //         todoitem.style.border="2px solid red";
// // // //         todoitem.style.margin="10px";
// // // //         const p=document.createElement("p");
// // // //         p.textContent=task
// // // //         const deletebtn=document.createElement("button");
// // // //         deletebtn.textContent="Delete";
// // // //         const editbtn=document.createElement("button");
// // // //         editbtn.textContent="Edit";
// // // //         const completebtn=document.createElement("button");
// // // //         completebtnbtn.textContent="Complete";

// // // //         completebtn.addEventListener("click",function(){

// // // //         })



// // // //         editbtn.addEventListener("click",function(){
// // // //             const editinput=document.createElement("input");
// // // //             const savebtn=document.createElement("button");
// // // //             savebtn.textContent="Save";
// // // //             todoitem.prepend(editinput,savebtn);
// // // //             editinput.value=task;
// // // //             editinput.focus();
// // // //             savebtn.addEventListener("click",function(){
// // // //                 const updatedtask=editinput.value;
// // // //                 if(!updatedtask){
// // // //                     return;
// // // //                 }
// // // //                 p.textContent=updatedtask;
// // // //                 const index=todos.indexOf(task);
// // // //                 todos[index]=updatedtask;
// // // //                 console.log(todos);
// // // //             })


// // // //         })
// // // //         deletebtn.addEventListener("click",function(){
// // // //             todoitem.remove();
// // // //             const index=todos.indexOf(task);
// // // //             todos.splice(index,1);
// // // //             console.log(todos);
// // // //         })
// // // //         todoitem.append(p,deletebtn,editbtn);
// // // //         todolist.prepend(todoitem);
// // // //     }

// // // //     function addtodo(){
// // // //         const task=inputtask.value;
// // // //         if(!task){
// // // //             return;
// // // //         }
// // // //         todos.unshift(task);
// // // //         console.log(todos);
// // // //         rendertask(task);
// // // //         inputtask.value="";
// // // //         inputtask.focus();
// // // //     }

// // // //     addbtn.addEventListener("click",addtodo);
// // // //     inputtask.addEventListener("keydown",function(e){
// // // //         // console.log(e);
// // // //         if(e.key==="Enter"){
// // // //             addtodo();
// // // //         }
// // // //     })
// // // // })()

// // // // 

// // // (function () {

// // //     const todos = JSON.parse(localStorage.getItem("todos")) || [];

// // //     const todocontainer = document.getElementById("todo");

// // //     const inputtask = document.createElement("input");
// // //     inputtask.type = "text";
// // //     inputtask.placeholder = "Enter task...";

// // //     const addbtn = document.createElement("button");
// // //     addbtn.textContent = "Add";

// // //     const todolist = document.createElement("div");
// // //     todolist.style.marginTop = "15px";

// // //     todocontainer.append(inputtask, addbtn, todolist);

// // //     function saveTodos() {
// // //         localStorage.setItem("todos", JSON.stringify(todos));
// // //     }
// // //     function renderTask(task) {

// // //         const todoitem = document.createElement("div");
// // //         todoitem.style.border = "2px solid black";
// // //         todoitem.style.padding = "10px";
// // //         todoitem.style.margin = "10px 0";

// // //         const p = document.createElement("p");
// // //         p.textContent = task;
// // //         p.style.display = "inline-block";
// // //         p.style.width = "200px";

// // //         const editbtn = document.createElement("button");
// // //         editbtn.textContent = "Edit";

// // //         const deletebtn = document.createElement("button");
// // //         deletebtn.textContent = "Delete";

// // //         editbtn.addEventListener("click", function () {

// // //             const editinput = document.createElement("input");
// // //             editinput.type = "text";
// // //             editinput.value = task;

// // //             const savebtn = document.createElement("button");
// // //             savebtn.textContent = "Save";

// // //             todoitem.innerHTML = "";
// // //             todoitem.append(editinput, savebtn);

// // //             editinput.focus();

// // //             savebtn.addEventListener("click", function () {

// // //                 const updatedTask = editinput.value.trim();

// // //                 if (updatedTask === "") {
// // //                     alert("Task cannot be empty!");
// // //                     return;
// // //                 }

// // //                 const index = todos.indexOf(task);

// // //                 if (index !== -1) {
// // //                     todos[index] = updatedTask;
// // //                     saveTodos();
// // //                 }

// // //                 task = updatedTask;

// // //                 todoitem.remove();
// // //                 renderTask(updatedTask);
// // //             });

// // //         });

// // //         deletebtn.addEventListener("click", function () {

// // //             const index = todos.indexOf(task);

// // //             if (index !== -1) {
// // //                 todos.splice(index, 1);
// // //                 saveTodos();
// // //             }

// // //             todoitem.remove();

// // //         });

// // //         todoitem.append(p, editbtn, deletebtn);
// // //         todolist.prepend(todoitem);
// // //     }

// // //     function addTodo() {

// // //         const task = inputtask.value.trim();

// // //         if (task === "") {
// // //             alert("Please enter a task!");
// // //             return;
// // //         }

// // //         todos.unshift(task);
// // //         saveTodos();

// // //         renderTask(task);

// // //         inputtask.value = "";
// // //         inputtask.focus();
// // //     }

// // //     addbtn.addEventListener("click", addTodo);

// // //     inputtask.addEventListener("keydown", function (e) {

// // //         if (e.key === "Enter") {
// // //             addTodo();
// // //         }

// // //     });

// // //     todos.slice().reverse().forEach(function (task) {
// // //         renderTask(task);
// // //     });

// // // })();



// // (function () {

// //     // Load tasks from localStorage
// //     const todos = JSON.parse(localStorage.getItem("todos")) || [];

// //     // Main container
// //     const todocontainer = document.getElementById("todo");
// //     todocontainer.className = "todo-container";

// //     // Heading
// //     const heading = document.createElement("h2");
// //     heading.textContent = "📝 My To-Do List";

// //     // Input
// //     const inputtask = document.createElement("input");
// //     inputtask.type = "text";
// //     inputtask.placeholder = "Enter your task...";

// //     // Add button
// //     const addbtn = document.createElement("button");
// //     addbtn.textContent = "Add";

// //     // Input wrapper
// //     const inputBox = document.createElement("div");
// //     inputBox.className = "input-box";
// //     inputBox.append(inputtask, addbtn);

// //     // Task list container
// //     const todolist = document.createElement("div");
// //     todolist.id = "todoList";

// //     // Append all elements
// //     todocontainer.append(heading, inputBox, todolist);

// //     // Save tasks
// //     function saveTodos() {
// //         localStorage.setItem("todos", JSON.stringify(todos));
// //     }

// //     // Render one task
// //     function renderTask(task) {

// //         const todoitem = document.createElement("div");
// //         todoitem.className = "todo-item";

// //         // Task text
// //         const p = document.createElement("p");
// //         p.className = "todo-text";
// //         p.textContent = task;

// //         // Buttons
// //         const editbtn = document.createElement("button");
// //         editbtn.textContent = "Edit";
// //         editbtn.className = "edit-btn";

// //         const deletebtn = document.createElement("button");
// //         deletebtn.textContent = "Delete";
// //         deletebtn.className = "delete-btn";

// //         // Button container
// //         const btnContainer = document.createElement("div");
// //         btnContainer.className = "buttons";
// //         btnContainer.append(editbtn, deletebtn);

// //         // Edit functionality
// //         editbtn.addEventListener("click", function () {

// //             const editinput = document.createElement("input");
// //             editinput.type = "text";
// //             editinput.value = task;
// //             editinput.className = "edit-input";

// //             const savebtn = document.createElement("button");
// //             savebtn.textContent = "Save";
// //             savebtn.className = "save-btn";

// //             // Replace content with edit mode
// //             todoitem.innerHTML = "";
// //             todoitem.append(editinput, savebtn);

// //             editinput.focus();

// //             // Save edited task
// //             savebtn.addEventListener("click", function () {

// //                 const updatedTask = editinput.value.trim();

// //                 if (updatedTask === "") {
// //                     alert("Task cannot be empty!");
// //                     return;
// //                 }

// //                 const index = todos.indexOf(task);

// //                 if (index !== -1) {
// //                     todos[index] = updatedTask;
// //                     saveTodos();
// //                 }

// //                 task = updatedTask;

// //                 // Re-render updated task
// //                 todoitem.remove();
// //                 renderTask(updatedTask);
// //             });
// //         });

// //         // Delete functionality
// //         deletebtn.addEventListener("click", function () {

// //             const index = todos.indexOf(task);

// //             if (index !== -1) {
// //                 todos.splice(index, 1);
// //                 saveTodos();
// //             }

// //             todoitem.remove();
// //         });

// //         // Append elements
// //         todoitem.append(p, btnContainer);

// //         // Add newest task on top
// //         todolist.prepend(todoitem);
// //     }

// //     // Add new task
// //     function addTodo() {

// //         const task = inputtask.value.trim();

// //         if (task === "") {
// //             alert("Please enter a task!");
// //             return;
// //         }

// //         todos.unshift(task);
// //         saveTodos();

// //         renderTask(task);

// //         inputtask.value = "";
// //         inputtask.focus();
// //     }

// //     // Add button click
// //     addbtn.addEventListener("click", addTodo);

// //     // Enter key support
// //     inputtask.addEventListener("keydown", function (e) {

// //         if (e.key === "Enter") {
// //             addTodo();
// //         }
// //     });

// //     // Load saved tasks on page refresh
// //     todos.slice().reverse().forEach(function (task) {
// //         renderTask(task);
// //     });

// // })();

// // ===== Local Storage =====
// let todos = JSON.parse(localStorage.getItem("todos")) || [];

// const taskInput = document.getElementById("taskInput");
// const priority = document.getElementById("priority");
// const dueDate = document.getElementById("dueDate");
// const addBtn = document.getElementById("addBtn");

// const search = document.getElementById("search");

// const todoList = document.getElementById("todoList");

// const totalTasks = document.getElementById("totalTasks");
// const completedTasks = document.getElementById("completedTasks");
// const pendingTasks = document.getElementById("pendingTasks");

// const allBtn = document.getElementById("allBtn");
// const pendingBtn = document.getElementById("pendingBtn");
// const completedBtn = document.getElementById("completedBtn");

// let currentFilter = "all";

// //========================

// function saveTodos() {
//     localStorage.setItem("todos", JSON.stringify(todos));
// }

// //========================

// function updateStats() {

//     totalTasks.textContent = todos.length;

//     const completed = todos.filter(todo => todo.completed).length;

//     completedTasks.textContent = completed;

//     pendingTasks.textContent = todos.length - completed;

// }

// //========================

// function createPriority(priorityLevel) {

//     const span = document.createElement("span");

//     span.textContent = priorityLevel;

//     if (priorityLevel === "High") {

//         span.className = "priority-high";

//     }
//     else if (priorityLevel === "Medium") {

//         span.className = "priority-medium";

//     }
//     else {

//         span.className = "priority-low";

//     }

//     return span;

// }

// //========================

// function renderTodos() {

//     todoList.innerHTML = "";

//     let filtered = todos;

//     if (currentFilter === "pending") {

//         filtered = todos.filter(todo => !todo.completed);

//     }

//     if (currentFilter === "completed") {

//         filtered = todos.filter(todo => todo.completed);

//     }

//     const searchText = search.value.toLowerCase();

//     filtered = filtered.filter(todo =>

//         todo.task.toLowerCase().includes(searchText)

//     );

//     if (filtered.length === 0) {

//         todoList.innerHTML = "<div class='empty'>No Tasks Found</div>";

//         updateStats();

//         return;

//     }

//     filtered.forEach((todo, index) => {

//         const card = document.createElement("div");

//         card.className = "todo-item";

//         if (todo.completed) {

//             card.classList.add("completed");

//         }

//         //-----------------------------------

//         const info = document.createElement("div");

//         info.className = "task-info";

//         //-----------------------------------

//         const title = document.createElement("div");

//         title.className = "task-title";

//         title.textContent = todo.task;

//         //-----------------------------------

//         const meta = document.createElement("div");

//         meta.className = "task-meta";

//         meta.appendChild(createPriority(todo.priority));

//         const date = document.createElement("span");

//         date.textContent = "📅 " + (todo.dueDate || "No Date");

//         meta.appendChild(date);

//         info.append(title, meta);

//         //-----------------------------------

//         const buttons = document.createElement("div");

//         buttons.className = "task-buttons";

//         //-----------------------------------

//         const completeBtn = document.createElement("button");

//         completeBtn.className = "complete-btn";

//         completeBtn.textContent = todo.completed ? "Undo" : "Complete";

//         //-----------------------------------

//         const editBtn = document.createElement("button");

//         editBtn.className = "edit-btn";

//         editBtn.textContent = "Edit";

//         //-----------------------------------

//         const deleteBtn = document.createElement("button");

//         deleteBtn.className = "delete-btn";

//         deleteBtn.textContent = "Delete";

//         //-----------------------------------

//         completeBtn.onclick = () => {

//             todo.completed = !todo.completed;

//             saveTodos();

//             renderTodos();

//         };

//         //-----------------------------------

//         deleteBtn.onclick = () => {

//             todos.splice(index, 1);

//             saveTodos();

//             renderTodos();

//         };

//         //-----------------------------------

//         editBtn.onclick = () => {

//             const input = document.createElement("input");

//             input.value = todo.task;

//             input.className = "edit-input";

//             const save = document.createElement("button");

//             save.textContent = "Save";

//             save.className = "save-btn";

//             info.innerHTML = "";

//             info.append(input, save);

//             save.onclick = () => {

//                 if (input.value.trim() == "") return;

//                 todo.task = input.value.trim();

//                 saveTodos();

//                 renderTodos();

//             };

//         };

//         //-----------------------------------

//         buttons.append(

//             completeBtn,

//             editBtn,

//             deleteBtn

//         );

//         card.append(

//             info,

//             buttons

//         );

//         todoList.append(card);

//     });

//     updateStats();

// }
// // ========================
// // Add Task
// // ========================

// function addTask() {

//     const task = taskInput.value.trim();

//     if (task === "") {

//         alert("Please enter a task!");

//         taskInput.focus();

//         return;

//     }

//     const newTask = {

//         task: task,

//         priority: priority.value,

//         dueDate: dueDate.value,

//         completed: false

//     };

//     todos.unshift(newTask);

//     saveTodos();

//     renderTodos();

//     taskInput.value = "";

//     priority.value = "Medium";

//     dueDate.value = "";

//     taskInput.focus();

// }

// // ========================
// // Add Button
// // ========================

// addBtn.addEventListener("click", addTask);

// // ========================
// // Press Enter to Add
// // ========================

// taskInput.addEventListener("keydown", function (e) {

//     if (e.key === "Enter") {

//         addTask();

//     }

// });

// // ========================
// // Search
// // ========================

// search.addEventListener("input", function () {

//     renderTodos();

// });

// // ========================
// // Filters
// // ========================

// allBtn.addEventListener("click", function () {

//     currentFilter = "all";

//     renderTodos();

// });

// pendingBtn.addEventListener("click", function () {

//     currentFilter = "pending";

//     renderTodos();

// });

// completedBtn.addEventListener("click", function () {

//     currentFilter = "completed";

//     renderTodos();

// });

// // ========================
// // Load App
// // ========================

// renderTodos();



// =========================
// Global Variables
// =========================

let todos = JSON.parse(localStorage.getItem("todos")) || [];

const taskInput = document.getElementById("taskInput");
const priorityInput = document.getElementById("priority");
const dueDateInput = document.getElementById("dueDate");
const addBtn = document.getElementById("addBtn");
const searchInput = document.getElementById("search");

const todoList = document.getElementById("todoList");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

const allBtn = document.getElementById("allBtn");
const pendingBtn = document.getElementById("pendingBtn");
const completedBtn = document.getElementById("completedBtn");

let currentFilter = "all";

// =========================
// Save Todos
// =========================

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// =========================
// Statistics
// =========================

function updateStats() {

    totalTasks.textContent = todos.length;

    const completed = todos.filter(todo => todo.completed).length;

    completedTasks.textContent = completed;

    pendingTasks.textContent = todos.length - completed;

}

// =========================
// Priority Badge
// =========================

function getPriorityClass(priority) {

    if (priority === "High") return "priority-high";

    if (priority === "Medium") return "priority-medium";

    return "priority-low";

}

// =========================
// Render Todos
// =========================

function renderTodos() {

    todoList.innerHTML = "";

    let filteredTodos = [...todos];

    // Filter by status
    if (currentFilter === "pending") {
        filteredTodos = filteredTodos.filter(todo => !todo.completed);
    }

    if (currentFilter === "completed") {
        filteredTodos = filteredTodos.filter(todo => todo.completed);
    }

    // Search
    const searchText = searchInput.value.trim().toLowerCase();

    if (searchText !== "") {
        filteredTodos = filteredTodos.filter(todo =>
            todo.task.toLowerCase().includes(searchText)
        );
    }

    // Empty State
    if (filteredTodos.length === 0) {

        todoList.innerHTML = `
            <div class="empty">
                📭 <br><br>
                No Tasks Found
            </div>
        `;

        updateStats();
        return;
    }

    // Create Cards
    filteredTodos.forEach(todo => {

        const card = document.createElement("div");
        card.className = "todo-item";

        if (todo.completed) {
            card.classList.add("completed");
        }

        // =====================
        // Left Section
        // =====================

        const info = document.createElement("div");
        info.className = "task-info";

        const title = document.createElement("div");
        title.className = "task-title";
        title.textContent = todo.task;

        const meta = document.createElement("div");
        meta.className = "task-meta";

        // Priority
        const priority = document.createElement("span");
        priority.className = getPriorityClass(todo.priority);
        priority.textContent = todo.priority;

        // Due Date
        const dueDate = document.createElement("span");
        dueDate.textContent =
            "📅 " + (todo.dueDate || "No Due Date");

        meta.append(priority, dueDate);

        info.append(title, meta);

        // =====================
        // Buttons
        // =====================

        const buttonBox = document.createElement("div");
        buttonBox.className = "task-buttons";

        // Complete
        const completeBtn = document.createElement("button");
        completeBtn.className = "complete-btn";
        completeBtn.textContent = todo.completed
            ? "Undo"
            : "Complete";

        // Edit
        const editBtn = document.createElement("button");
        editBtn.className = "edit-btn";
        editBtn.textContent = "Edit";

        // Delete
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";

        buttonBox.append(
            completeBtn,
            editBtn,
            deleteBtn
        );

        card.append(
            info,
            buttonBox
        );

        todoList.appendChild(card);

        // =====================
        // Complete
        // =====================

        completeBtn.onclick = () => {

            todo.completed = !todo.completed;

            saveTodos();

            renderTodos();

        };

        // =====================
        // Delete
        // =====================

        deleteBtn.onclick = () => {

            if (!confirm("Delete this task?")) return;

            const index = todos.indexOf(todo);

            if (index !== -1) {
                todos.splice(index, 1);
            }

            saveTodos();

            renderTodos();

        };

        // =====================
        // Edit
        // =====================

        editBtn.onclick = () => {

            const newTask = prompt(
                "Edit Task",
                todo.task
            );

            if (newTask === null) return;

            if (newTask.trim() === "") return;

            todo.task = newTask.trim();

            saveTodos();

            renderTodos();

        };

    });

    updateStats();

}
// =========================
// Add Task
// =========================

function addTask() {

    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        taskInput.focus();
        return;
    }

    const todo = {
        task: task,
        priority: priorityInput.value,
        dueDate: dueDateInput.value,
        completed: false
    };

    todos.unshift(todo);

    saveTodos();

    renderTodos();

    taskInput.value = "";
    priorityInput.value = "Medium";
    dueDateInput.value = "";

    taskInput.focus();
}

// =========================
// Event Listeners
// =========================

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(e) {

    if (e.key === "Enter") {
        addTask();
    }

});

searchInput.addEventListener("input", function() {
    renderTodos();
});

allBtn.addEventListener("click", function() {
    currentFilter = "all";
    renderTodos();
});

pendingBtn.addEventListener("click", function() {
    currentFilter = "pending";
    renderTodos();
});

completedBtn.addEventListener("click", function() {
    currentFilter = "completed";
    renderTodos();
});

// =========================
// Initial Load
// =========================

renderTodos();