document.addEventListener('DOMContentLoaded', function() {
    var hint = document.getElementById('hint')
    var guessInput = document.getElementById('guess')
    var submitButton = document.getElementById('submit')
    var randomName ;
    var userGuesses = 0;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200){
            console.log(JSON.parse(xhr.responseText).random_name)
            randomName = JSON.parse(xhr.responseText).random_name;
        }
    };
    xhr.open('GET', '/random_name', true);
    xhr.send();

    submitButton.addEventListener('click', function(){
        var userGuess = guessInput.value.trim();
        userGuesses += 1;
        
        if (randomName !== undefined) {
            if (userGuess !== randomName) {
                hint.textContent = 'Try another name'
            } else if (userGuess == randomName) {
             hint.textContent = `Congratulations! You guessed the correct name in ${userGuesses} guesses.`
            } else {
            console.log('Error')
            }
        } else {
            console.log('There is no defined random name')
        }
    })
})