document.addEventListener('DOMContentLoaded', function() {
    var hint = document.getElementById('hint')
    var guessInput = document.getElementById('guess')
    var submitButton = document.getElementById('submit')
    var randomNumber ;
    var userGuesses = 0;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200){
            console.log(JSON.parse(xhr.responseText).random_number)
            randomNumber = JSON.parse(xhr.responseText).random_number;
        }
    };
    xhr.open('GET', '/random_number', true);
    xhr.send();

    submitButton.addEventListener('click', function(){
        var userGuess = parseInt(guessInput.value);
        userGuesses += 1;
        
        if (randomNumber !== undefined) {
            if (userGuess < randomNumber) {
                hint.textContent = 'Too Low! Try a higher number'
            } else if (userGuess > randomNumber) {
                hint.textContent = 'Too high! Try a lower number'
            } else if (userGuess == randomNumber) {
             hint.textContent = 'Congratulations! You guessed the correct number in ${userGuesses} guesses.'
            } else {
            console.log('Error')
            }
        } else {
            console.log('There is no defined random number')
        }
    })
})