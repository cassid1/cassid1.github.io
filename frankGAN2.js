document.querySelector('.startgame')
    .addEventListener('click', function() {
        var result = Module.ccall(
            'main_frankGAN',	// name of C function 
            null,	// return type
            null,	// argument types
            null	// arguments
        );
    })
function update_generated_sentence(sentence){
    $("#eliott-text").text('');
    $("#eliott-text").text(sentence);
}
function update_disc_data(numb){
    $("#eliott-number").text('');
    $("#eliott-number").text(numb);
}

