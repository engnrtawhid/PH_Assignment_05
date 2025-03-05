

const taskButton= document.querySelectorAll('.task-button');
const taskAssigned = document.getElementById('task-assigned');
const clearHistory = document.getElementById('clear-history');
const navTaskCount = document.getElementById('nav-task-count');


for(let i=0; i<taskButton.length; i++){
    taskButton[i].addEventListener('click',
        function(){
            // Get alert and Btn color change
            alert('Board Updated Successfully');
            taskButton[i].setAttribute('disabled', 'true');
            taskButton[i].classList.add('bg-gray-500');

            // nav task count and task assigned update
            let updatedTask = parseInt(taskAssigned.innerText);
            let completedTask = parseInt(navTaskCount.innerText);
            updatedTask-- ;
            completedTask++ ;
            taskAssigned.innerText = updatedTask;
            navTaskCount.innerText = completedTask;
            
            // All task completed alert
            if (updatedTask === 0){
                alert('All task completed!')
            }
        }
    )
}



