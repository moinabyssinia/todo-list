$("input").on("keypress", function(){
    if(event.keyCode === 13){
        console.log((this).value)
    }
})