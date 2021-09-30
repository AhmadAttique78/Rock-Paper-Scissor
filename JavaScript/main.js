
function rpsGame(yourChoice) {
    console.log(yourChoice);

    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = botChoiceArray(botrandnum());
    console.log('Computer selected:', botChoice);

    result = decideWinner(humanChoice, botChoice);
    console.log(result);

    message = finalMessage(result);
    console.log(message);

    frontEnd(yourChoice.id, botChoice, message);
}

// Bot choice function

function botrandnum() {
    return Math.floor(Math.random()*3);
}

function botChoiceArray(number) {
    return ['rock', 'paper', 'scissor'][number];
}

// Result

function decideWinner(yourChoice, computerChoice) {
    var rpsResultDecide = {
        'rock': {'scissor': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissor': 0},
        'scissor': {'paper': 1, 'scissor': 0.5, 'rock': 0} 
    };

    var yourScore = rpsResultDecide[yourChoice][computerChoice];
    var computerScore = rpsResultDecide[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

// message

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': 'You lost!', 'color': 'red'};
    }else if (yourScore === 0.5) {
        return {'message': 'You tied!', 'color': 'yellow'};
    }else {
        return {'message': 'You won!', 'color': 'green'};
    }
}


// finalizing the frontend


function frontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }

    
    //Clearing the container-box

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    //Creating New container-box

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    //Placing Images and Styling

    humanDiv.innerHTML = "<img src'" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233,1);'>"
    
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"

    botDiv.innerHTML = "<img src'" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24,1);'>"
    

    document.getElementById('flex-container').appendChild(humanDiv);

    document.getElementById('flex-container').appendChild(messageDiv);

    document.getElementById('flex-container').appendChild(botDiv);
    
}






