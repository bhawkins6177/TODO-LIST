


    function homePage(){
        const content = document.querySelector('#content');
        const sideBar = document.createElement('div');
        const display = document.createElement('div');
        const taskDisplay = document.createElement('div');
        const titleDisplay = document.createElement('div');
        const form = document.createElement('form');


        display.setAttribute('id','display');
        sideBar.setAttribute('id','sideBar');
        taskDisplay.setAttribute('id','taskDisplay');
        titleDisplay.setAttribute('id','titleDisplay');
        form.setAttribute('id','form');

        
        content.appendChild(sideBar);
        content.appendChild(display);
        display.appendChild(titleDisplay);
        display.appendChild(taskDisplay);
        taskDisplay.appendChild(form);
        

        taskDisplay.textContent = 'TEST';


        
        
        }
        export {homePage}
        
        
        
        
        
        
        
        
        class tasks {
            constructor(title, date, priority, description){
                this.title = title,
                this.date = date,
                this.priority = priority,
                this.description = description
            }
        }


