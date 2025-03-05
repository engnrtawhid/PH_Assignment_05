

const taskButton= document.querySelectorAll('.task-button');
const taskAssigned = document.getElementById('task-assigned');
const clearHistory = document.getElementById('clear-history');
const navTaskCount = document.getElementById('nav-task-count');
const activityLog = document.getElementById('activity-log');
const activityTitle= document.querySelectorAll('.activity-title');
const discover = document.getElementById('discover-button');



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

            // Activity log update
            let title = activityTitle[i].innerText;
            let newElement = document.createElement('p');
            const date = new Date();
            const option = {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
            };
            newElement.innerHTML = `<p class="bg-[#F4F7FF] rounded-md px-5 py-2 text-[16px] mb-5">You have Complete The Task <strong> ${title} </strong> at ${date.toLocaleTimeString("en-US", option)}
            </p>`;
            activityLog.appendChild(newElement);
      
        }
    )
}

// Clear History
clearHistory.addEventListener('click',
    function(){
        activityLog.innerHTML = '';
    }
)


// Go to Blog Section
discover.addEventListener('click',
    function(){
        window.location.href = "./blog.html"
    }
)







