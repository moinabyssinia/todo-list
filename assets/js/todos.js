// deleting buttons might have the slide to the right animation
//typing and entering adds new todo list
////trying to use vanilla JS to get the value of the newly entered Todo
//how can I make new entries with varying background colors?
//the plus button hides the input and also gets it back
//apply strikethrough when clicked
//delete todo itime when clicked on the delete button

//select and manipulate the input 
var inputTodo = document.querySelectorAll("input")[0];
var todoRow = 1;
//event listener for when "enter" key is pressed
inputTodo.addEventListener("keydown", function(){
    if(event.keyCode === 13){
        console.log(this.value);
        //use extra quotation marks and the plus signs
        //to wrap a variable inside the css selector
        document.querySelectorAll("h4:nth-of-type("+todoRow+")")[0].textContent = this.value;
        document.querySelectorAll("h4:nth-of-type("+todoRow+")")[0].classList.toggle("embellishTodo");
        //empty the input for next todo
        document.querySelectorAll("input")[0].value = "";
        todoRow +=1;
    }
})

