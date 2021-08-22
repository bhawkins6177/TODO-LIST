
const content = document.querySelector('#content');
const display = document.createElement('div');
display.setAttribute('id','display');
display.textContent = 'TEST';

content.appendChild(display);








class tasks {
    constructor(title, date, priority, description){
        this.title = title,
        this.date = date,
        this.priority = priority,
        this.description = description
    }
}