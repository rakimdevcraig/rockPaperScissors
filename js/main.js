var botScore=0,
	playerScore=0;
// listener for rock
document.getElementById("rock").onclick=playerThrowsRock;
// listener for scissors
document.getElementById("scissors").onclick=playerThrowsScissors;
// listener for paper
document.getElementById("paper").onclick=playerThrowsPaper;
// listener for lizard
document.getElementById("lizard").onclick=playerThrowsLizard;
// listener for spock
document.getElementById("spock").onclick=playerThrowsSpock;
// function when a player picks rock
function playerThrowsRock(){
	var botsWeapon=getRandomWeapon();//getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
}
// function when a player picks scissors
function playerThrowsScissors(){
	var botsWeapon=getRandomWeapon();//getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");
}
// function when a player picks paper
function playerThrowsPaper(){
	var botsWeapon=getRandomWeapon();//getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");
}
//  function when player picks spock
function playerThrowsSpock(){
	var botsWeapon=getRandomWeapon();//getRandomWeapon();
	checkWhoWon(botsWeapon,"spock");
}
// function when player picks lizard
function playerThrowsLizard(){
	var botsWeapon=getRandomWeapon();//getRandomWeapon();
	checkWhoWon(botsWeapon,"lizard");
}

// function for a randomweapon
function getRandomWeapon(){
	var randomNumber=Math.random();
	var botsWeapon="rock";
	if(randomNumber<.2){
		botsWeapon="scissors";
	}
	else if(randomNumber<.4){
		botsWeapon="paper";
	}
	else if(randomNumber<.6){
		botsWeapon="spock";
	}
	else if(randomNumber<.8){
		botsWeapon="lizard";
	}
	return botsWeapon;
}

// check to see who won and displays if there was a tie
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayPlayersChoice("You chose " + playersWeapon);
		displayBotsChoice("The bot chose " + botsWeapon);
		displayCompleteMessage("There was tie");
	}
	// when the bot wins or  and displays the choice
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="scissors" && playersWeapon=="lizard") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="paper" && playersWeapon=="spock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors") ||
		(botsWeapon=="spock" && playersWeapon=="rock") ||
		(botsWeapon=="spock" && playersWeapon=="rock") ||
		(botsWeapon=="lizard" && playersWeapon=="spock") ||
		(botsWeapon=="lizard" && playersWeapon=="paper")
		){
		displayPlayersChoice("You chose " + playersWeapon);
		displayBotsChoice("The bot chose " + botsWeapon);
		increaseBotScore();
	}
	else{
		displayPlayersChoice("You chose " + playersWeapon);
		displayBotsChoice("The bot chose " + botsWeapon);
		increasePlayerScore();
	}
}
// message when bot wins
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser");
}
// message when player wins
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("You're a Winner");
}
// function to display whether you won or lost
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}
// function to display which weapon the player chose
function displayPlayersChoice(msg){
	document.getElementById("playerScore").innerHTML=msg;

}
// function to display what the bot chose
function displayBotsChoice(msg){
	document.getElementById("botScore").innerHTML=msg;
}
