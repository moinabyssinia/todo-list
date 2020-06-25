
//add listener for when enter key is pressed
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //extract the typed text
        /*         
        console.log($("input[type = 'text']")[0].value);
        console.log($("input[type='text']").text());
        */
        
        console.log($(this).val());

        //create a new element
        // $("ul").classList.add("noBullets");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>"+$(this).val()+"</li>")
        // $("li").toggleClass("embellishTodo");
        //clear out text input after hitting enter
        $("input[type='text']").val("");
    }
    
})

//remove todos when the delete button is clicked
$("body").on("click", "span", function(){
    console.log("klicked");
    
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
})

// add line-through effect
$("body").on("click", "li",function(){
    $(this).toggleClass("lineThrough");
})
