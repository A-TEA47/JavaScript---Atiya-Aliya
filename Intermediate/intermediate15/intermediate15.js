function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value;
    if (taskText === '') return;
    
    let li = document.createElement('li');
    li.textContent = taskText;
    li.onclick = function() {
        this.classList.toggle('completed');
    };
    
    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
}
