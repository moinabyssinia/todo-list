// var inputCollapsed = false;

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
        $("ul").append("<li><span><i class='fas fa-trash-alt'> </i></span>"+$(this).val()+"</li>")
        // $("li").toggleClass("embellishTodo");
        //clear out text input after hitting enter
        $("input[type='text']").val("");
    }
    
})

//remove todos when the delete button is clicked
$("body").on("click", "span", function(){
    console.log("klicked");
    
    //apply fading on the parent as it wraps the span
    //and write a removing function inside fadeout
    //inorder to wait until the fading finishes and then delete
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
})

// add line-through effect
$("body").on("click", "li",function(){
    $(this).toggleClass("lineThrough");
})


//fadeIn/Out input using the plus button
$("h1 i").on("click", function(){
    
    // using fadeToggle
    $("input").fadeToggle(500, function(){

    });

    // //using slideIn/Out
    // if (inputCollapsed){
    //     $("input").slideDown(500, function(){
    //         inputCollapsed = false;
    //     })
    // } else{
    //     $("input").slideUp(500, function(){
    //         inputCollapsed = true;
    //     })
    // }

})


// //transition icon when hovered
// $("body").on("mouseenter", "span", function(){
//     console.log("hovered");
//     // $(this.i).toggleClass("hovered")
// })