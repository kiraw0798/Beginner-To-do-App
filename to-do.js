const taskName = document.querySelector('.task-name');
const taskNameAdd = document.querySelector('.taskNameAdd');
const tasklist = document.querySelector('.tasks');


taskNameAdd.addEventListener('click', () =>{
    const taskToAdd = taskName.value
    if(taskToAdd){
        taskName.value = '';
        addTask(taskToAdd);
    }
})

tasklist.addEventListener('click', (event) =>{
    if(event.target.tagName === 'P'){
        event.target.classList.toggle('unchecked');
        event.target.classList.toggle('checked');
        saveData()
    }else if(event.target.nodeName === 'BUTTON'){
        event.target.parentElement.remove();
        saveData()
    }
})

function addTask(taskToAdd){
    const taskPar = document.createElement('p');
    const deleteBtn = document.createElement('button');

    taskPar.textContent = taskToAdd;
    taskPar.classList.toggle('unchecked');

    deleteBtn.textContent = 'x';
    deleteBtn.classList.add('delete-btn');
    
    taskPar.appendChild(deleteBtn);
    tasklist.appendChild(taskPar);
    saveData()
}

function deleteTask(event){
    event.target.parentElement.remove()
    saveData();
}


function saveData(){
    localStorage.setItem('data', tasklist.innerHTML)
}
function showTask(){
    tasklist.innerHTML = localStorage.getItem('data')
}

showTask();