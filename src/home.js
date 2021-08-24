let taskArray = [];
class task {
    constructor(title, date, priority){
        this.title = title,
        this.date = date,
        this.priority = priority;       
    }
}
    
    
    function homePage(){
        
        const content = document.querySelector('#content'); // selectors for home display
        const sideBar = document.createElement('div');
        const display = document.createElement('div');
        const taskDisplay = document.createElement('div');
        const titleDisplay = document.createElement('div');

        const taskForm = document.createElement('form');// selecters for task form
        const titleLabel = document.createElement('label');
        const titleInput = document.createElement('input');
        const dateLabel = document.createElement('label');
        const dateInput = document.createElement('input');

// selecters for dropdown menu inside form
        
        const dropdownDiv = document.createElement('div');
        const priorityBtn = document.createElement('button');
        const dropdownContent = document.createElement('div');
        const lowPriority = document.createElement('li');
        const highPriority = document.createElement('li');
        const critical = document.createElement('li');
        const submitBtn = document.createElement('button')

// text content for all form elements
        titleLabel.textContent = 'Title';
        dateLabel.textContent = 'Date';
        lowPriority.textContent = 'Low';
        highPriority.textContent = 'High';
        critical.textContent = 'Critical';
        priorityBtn.textContent = 'Priority';
        
        
// setting an ID  or class for all form elements that need it

        display.setAttribute('id','display');
        sideBar.setAttribute('id','sideBar');
        taskDisplay.setAttribute('id','taskDisplay');
        titleDisplay.setAttribute('id','titleDisplay');
        taskForm.setAttribute('id','taskForm');

        titleLabel.classList.add('label');
        dateLabel.classList.add('label');
        titleInput.classList.add('input');
        titleInput.setAttribute('id','titleInput');
        dateInput.classList.add('input');
        dateInput.setAttribute('type','date')
        dateInput.setAttribute('id','dateInput');
        dropdownDiv.setAttribute('id','dropdownDiv');
        priorityBtn.setAttribute('id','priorityBtn');
        dropdownContent.classList.add('dropdownContent');
        lowPriority.classList.add('list');
        highPriority.classList.add('list');
        critical.classList.add('list');

        submitBtn.setAttribute('id','submitBtn')


// appending all elements in the correct order
        
        content.appendChild(sideBar);
        content.appendChild(display);
        display.appendChild(titleDisplay);
        display.appendChild(taskDisplay);
        taskDisplay.appendChild(taskForm);
        taskForm.appendChild(titleLabel);
        taskForm.appendChild(titleInput);
        taskForm.appendChild(dateLabel);
        taskForm.appendChild(dateInput);
        taskForm.appendChild(dropdownDiv);
        dropdownDiv.appendChild(priorityBtn);
        dropdownDiv.appendChild(dropdownContent);
        dropdownContent.appendChild(lowPriority);
        dropdownContent.appendChild(highPriority);
        dropdownContent.appendChild(critical);
        taskForm.appendChild(submitBtn);
        
// event listeners for form buttons, including the dropdown menu
        priorityBtn.addEventListener('click', function(e){
            e.preventDefault();
            dropdownContent.classList.toggle("show")
        })
        
        lowPriority.addEventListener('click', function(){
            priorityBtn.textContent = lowPriority.textContent;
            dropdownContent.classList.toggle("show")
        })
        highPriority.addEventListener('click', function(){
            priorityBtn.textContent = highPriority.textContent;
            dropdownContent.classList.toggle("show")
        })
        critical.addEventListener('click', function(){
            priorityBtn.textContent = critical.textContent;
            dropdownContent.classList.toggle("show")
        })
        submitBtn.addEventListener('click',function(){
          taskArray.push(new task(titleInput.value, dateInput.value, priorityBtn.textContent, priorityBtn.innerHTML));
           console.log(taskArray);
        })
        



        console.log(taskArray)
        
        }
        export {homePage, taskArray}
        
        
        
        
        
        
        
        
        


