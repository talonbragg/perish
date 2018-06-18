var respBox = document.getElementById("responsebox");
var messages = document.getElementById("messages");
var startMenuUsed = false;
var inventoryItems = [];

function submit() {
  if(respBox.value === "start") {
    var node1 = document.createElement("LI");
    var node2 = document.createElement("LI");
    var node3 = document.createElement("LI");
    var node4 = document.createElement("LI");
    var starttext = document.createTextNode("You start in the kitchen, in there you find a knife and bread.");         // Create a text node
    var startoption1 = document.createTextNode("1. Pick up the knife and bread");
    var startoption2 = document.createTextNode("2. Eat the bread and pick up the knife");
    var startoption3 = document.createTextNode("3. Go to the next room");
    node1.appendChild(starttext);
    node2.appendChild(startoption1);
    node3.appendChild(startoption2);
    node4.appendChild(startoption3);                              // Append the text to <li>
    document.getElementById("messages").appendChild(node1);
    document.getElementById("messages").appendChild(node2);
    document.getElementById("messages").appendChild(node3);
    document.getElementById("messages").appendChild(node4);
    startMenuUsed = true;
  }
  if(startMenuUsed === true && respBox.value === "ok") {
    return;
  }
  if(respBox.value === "1") {
    var bknode = document.createElement("LI");
    var bktext = document.createTextNode("The bread and knife are now in your inventory.");
    inventoryItems.push("bread");
    inventoryItems.push("knife");
    bknode.appendChild(bktext);
    messages.appendChild(bknode);
  }
}


