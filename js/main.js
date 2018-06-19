

//Text box value

var response;

function submit() {
  response = document.getElementById('responsebox').value;
  console.log(response);
}

/*
  Main progress percentage
  This will go up 1% or +1 each time the Game() function runs
*/
var progress = 0;

/*
  Universal human health
*/

var uniHealth = 100

/*
  This area will contain all of the data for the player
*/

var playerHealth = 100;
var playerDamage = 50;

/*
  This area will contain all o the enemy data
*/

var enemyInfantryDamage = 35;
var enemyMedicDamage = 5;
var enemyTankDamage = 70;

/* 
  Tank health
*/

var enemyTankHealth = 200;

//Main area to append a <li> element
var messages = document.getElementById("messages");

//Situation array
var situations = ["Nothing has happened, what will you do?", "Nothing has happened, what will you do?", "Nothing has happened, what will you do?", "Nothing has happened, what will you do?", "An enemy is standing in front of you, what will you do?", "You got shot in the Leg, what will you do?", "You are gettting shelled my enemy forces, what will you do?", "You are hungry, what will you do?"]
//Main game function
function Game() {
  console.log('Main Game function has initiated');

  console.log(situations[Math.floor(Math.random() * situations.length)]);
  console.log(typeof situations[Math.floor(Math.random() * situations.length - 1)]);

  var randSituation = situations[Math.floor(Math.random() * situations.length - 1)];

  var node1 = document.createElement("LI");
  var node2 = document.createElement("LI");
  var node3 = document.createElement("LI");
  var node4 = document.createElement("LI");
  var node5 = document.createElement("LI");
  var situation = document.createTextNode(randSituation);         // Create a text node
  var startoption1 = document.createTextNode("1. Shoot your rifle");
  var startoption2 = document.createTextNode("2. Call A Medic");
  var startoption3 = document.createTextNode("3. Dig a ditch and hide");
  var startoption4 = document.createTextNode("4. Keep running towards the enemy fort");
  node1.appendChild(situation);
  node2.appendChild(startoption1);
  node3.appendChild(startoption2);
  node4.appendChild(startoption3);
  node5.appendChild(startoption4);                              // Append the text to <li>
  messages.appendChild(node1);
  messages.appendChild(node2);
  messages.appendChild(node3);
  messages.appendChild(node4);
  messages.appendChild(node5);
  if (response === "1") {
    if(situation === "Nothing has happened, what will you do?") {
      var nothingnode = document.createElement("LI");
      var nothingtextnode = document.createTextNode("There was no enemy, you didn't hit anyone!");
      nothingnode.appendChild(nothingtextnode);
      messages.appendChild(nothingnode);
    }
    else if(situation === "An enemy is standing in front of you, what will you do?") {
      var enemydamage = Math.floor(Math.random * enemyInfantryDamage);
      var enemyinfrontnode = document.createElement("LI");
      var newdamagenode = document.createElement("LI");
      var newdamagetextnode = document.createTextNode("You have been shot by the enemy for" + " " + enemydamage + " " + "damage");
      var enemyinfronttextnode = document.createTextNode("You have shot the enemy for 50 damage");
      enemyinfrontnode.appendChild(enemyinfronttextnode);
      newdamagenode.appendChild(newdamagetextnode);
      messages.appendChild(newdamagenode);
      messages.appendChild(enemyinfrontnode);
    }
  }
}

//Run the Game() function
Game();