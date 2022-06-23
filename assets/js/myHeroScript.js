function randomIntFromInterval(min, max) {
  // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomCheck() {
  //  
   var check = [];
    if ( Math.random() > .5 ){
      check = true;
    } else {
      check = false;  
    }
  return check;
}

function randomSelectArmor() {
  //
if (strScore > 14) {
    switchMax = 12;
  } else if (strScore > 12) {
    switchMax = 10;
  } else {
    switchMax = 9;
  }  
  switch (randomIntFromInterval(0, switchMax)) {
    case  0 : myArmor = "unarmored"; break;
    case  1 : myArmor = "padded"; break;
    case  2 : myArmor = "leather"; break;
    case  3 : myArmor = "studded"; break;
    case  4 : myArmor = "hide"; break;
    case  5 : myArmor = "chain"; break;
    case  6 : myArmor = "scale"; break;
    case  7 : myArmor = "breastplate"; break;
    case  8 : myArmor = "halfplate"; break;
    case  9 : myArmor = "ringmail"; break;
    case 10 : myArmor = "chainmailArmor"; break;
    case 11 : myArmor = "splintArmor"; break;
    case 12 : myArmor = "plateArmor"; break;
  }
  return myArmor;
}

function randomSelectShield(str) {
  //
  switch (randomIntFromInterval(0, 1)) {
    case 0 : myShield = "none"; break;
    case 1 : myShield = "shield"; break;
  } 
  return myShield;
}

function generateVariables() {
  // Generate all values
  localStorage.setItem("playerLevel", randomIntFromInterval(1, 20));
  localStorage.setItem("strScore", randomIntFromInterval(4, 18));
  localStorage.setItem("dexScore", randomIntFromInterval(4, 18));
  localStorage.setItem("conScore", randomIntFromInterval(4, 18));
  localStorage.setItem("intScore", randomIntFromInterval(4, 18));
  localStorage.setItem("wisScore", randomIntFromInterval(4, 18));
  localStorage.setItem("chaScore", randomIntFromInterval(4, 18));
  localStorage.setItem("equippedArmor", randomSelectArmor());
  localStorage.setItem("equippedShield", randomSelectShield());
  localStorage.setItem("acroProf", randomCheck());
  localStorage.setItem("animProf", randomCheck());
  localStorage.setItem("arcaProf", randomCheck());
  localStorage.setItem("athlProf", randomCheck());
  localStorage.setItem("decProf", randomCheck());
  localStorage.setItem("hisProf", randomCheck());
  localStorage.setItem("insProf", randomCheck());
  localStorage.setItem("intiProf", randomCheck());
  localStorage.setItem("invProf", randomCheck());
  localStorage.setItem("medProf", randomCheck());
  localStorage.setItem("natProf", randomCheck());
  localStorage.setItem("percProf", randomCheck());
  localStorage.setItem("perfProf", randomCheck());
  localStorage.setItem("persProf", randomCheck());
  localStorage.setItem("relProf", randomCheck());
  localStorage.setItem("sleiProf", randomCheck());
  localStorage.setItem("steProf", randomCheck());
}

function getStoredValues() {
  // Set player level
  document.getElementById("playerLevel").value = localStorage.getItem("playerLevel");
  updateProfBonus();
  
  // Set ability scores
  document.getElementById("strScore").value = localStorage.getItem("strScore");
  document.getElementById("dexScore").value = localStorage.getItem("dexScore");
  document.getElementById("conScore").value = localStorage.getItem("conScore");
  document.getElementById("intScore").value = localStorage.getItem("intScore");
  document.getElementById("wisScore").value = localStorage.getItem("wisScore");
  document.getElementById("chaScore").value = localStorage.getItem("chaScore");
  updateModifiers();
  
  // Set armor + shield
  document.getElementById("equippedArmor").value = localStorage.getItem("equippedArmor");
  document.getElementById("equippedShield").value = localStorage.getItem("equippedShield");
  equipArmor(equippedArmor);
  
  // Set HP/hit dice
  document.getElementById("currentHP").value = localStorage.getItem("currentHP");
  document.getElementById("maxHP").value = localStorage.getItem("maxHP");
  document.getElementById("hitDice").value = localStorage.getItem("hitDice");
  document.getElementById("hitDie").value = localStorage.getItem("hitDie");
  
  // Set skills 
  document.getElementById("acroProf").checked = JSON.parse(localStorage.getItem('acroProf'));
  document.getElementById("animProf").checked = JSON.parse(localStorage.getItem('animProf'));
  document.getElementById("arcaProf").checked = JSON.parse(localStorage.getItem('arcaProf'));
  document.getElementById("athlProf").checked = JSON.parse(localStorage.getItem('athlProf'));
  document.getElementById("decProf").checked =  JSON.parse(localStorage.getItem('decProf'));
  document.getElementById("hisProf").checked =  JSON.parse(localStorage.getItem('hisProf'));
  document.getElementById("insProf").checked = JSON.parse(localStorage.getItem('insProf'));
  document.getElementById("intiProf").checked = JSON.parse(localStorage.getItem('intiProf'));
  document.getElementById("invProf").checked = JSON.parse(localStorage.getItem('invProf'));
  document.getElementById("medProf").checked = JSON.parse(localStorage.getItem('medProf'));
  document.getElementById("natProf").checked = JSON.parse(localStorage.getItem('natProf'));
  document.getElementById("percProf").checked = JSON.parse(localStorage.getItem('percProf'));
  document.getElementById("perfProf").checked = JSON.parse(localStorage.getItem('perfProf'));
  document.getElementById("persProf").checked = JSON.parse(localStorage.getItem('persProf'));
  document.getElementById("relProf").checked = JSON.parse(localStorage.getItem('relProf'));
  document.getElementById("sleiProf").checked = JSON.parse(localStorage.getItem('sleiProf')); 
  document.getElementById("steProf").checked = JSON.parse(localStorage.getItem('steProf'));
  setSkills();
  
}

function setLocalStorage() {
  // Save player level
  localStorage.setItem("playerLevel", document.getElementById("playerLevel").value);
  
  // Save ability scores
  localStorage.setItem("strScore", document.getElementById("strScore").value);
  localStorage.setItem("dexScore", document.getElementById("dexScore").value);
  localStorage.setItem("conScore", document.getElementById("conScore").value);
  localStorage.setItem("intScore", document.getElementById("intScore").value);
  localStorage.setItem("wisScore", document.getElementById("wisScore").value);
  localStorage.setItem("chaScore", document.getElementById("chaScore").value);
  
  // Save armor + shield
  localStorage.setItem("equippedArmor", document.getElementById("equippedArmor").value);
  localStorage.setItem("equippedShield", document.getElementById("equippedShield").value);
  
  // Save HP/hit dice
  localStorage.setItem("currentHP", document.getElementById("currentHP").value);
  localStorage.setItem("maxHP", document.getElementById("maxHP").value);
  localStorage.setItem("hitDice", document.getElementById("hitDice").value);
  localStorage.setItem("hitDie", document.getElementById("hitDie").value);
  
  // Save skills
  localStorage.setItem('acroProf', document.getElementById('acroProf').checked);
  localStorage.setItem('animProf', document.getElementById('animProf').checked);
  localStorage.setItem('arcaProf', document.getElementById('arcaProf').checked);
  localStorage.setItem('athlProf', document.getElementById('athlProf').checked);
  localStorage.setItem('decProf', document.getElementById('decProf').checked);
  localStorage.setItem('hisProf', document.getElementById('hisProf').checked);
  localStorage.setItem('insProf', document.getElementById('insProf').checked);
  localStorage.setItem('intiProf', document.getElementById('intiProf').checked);
  localStorage.setItem('invProf', document.getElementById('invProf').checked);
  localStorage.setItem('medProf', document.getElementById('medProf').checked);
  localStorage.setItem('natProf', document.getElementById('natProf').checked);
  var checkbox = document.getElementById('percProf');
  localStorage.setItem('percProf', checkbox.checked);
  var checkbox = document.getElementById('perfProf');
  localStorage.setItem('perfProf', checkbox.checked);
  var checkbox = document.getElementById('persProf');
  localStorage.setItem('persProf', checkbox.checked);
  var checkbox = document.getElementById('relProf');
  localStorage.setItem('relProf', checkbox.checked);
  var checkbox = document.getElementById('sleiProf');
  localStorage.setItem('sleiProf', checkbox.checked);
  var checkbox = document.getElementById('steProf');
  localStorage.setItem('steProf', checkbox.checked);
  
  // debug log
  var i;
    console.log("local storage");
    for (i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
}
  
}

function updateModifiers() {
  // convert ability scores into modifiers
  
  var strScore = document.getElementById("strScore").value;
  document.getElementById("strMod").value = Math.floor((strScore - 10)/2);
  var dexScore = document.getElementById("dexScore").value;
  document.getElementById("dexMod").value = Math.floor((dexScore - 10)/2);
  var conScore = document.getElementById("conScore").value;
  document.getElementById("conMod").value = Math.floor((conScore - 10)/2);
  var intScore = document.getElementById("intScore").value;
  document.getElementById("intMod").value = Math.floor((intScore - 10)/2);
  var wisScore = document.getElementById("wisScore").value;
  document.getElementById("wisMod").value = Math.floor((wisScore - 10)/2);
  var chaScore = document.getElementById("chaScore").value;
  document.getElementById("chaMod").value = Math.floor((chaScore - 10)/2);
  
  setSkills();
  enableArmor();
  equipArmor(equippedArmor);
  shieldEquip(shieldEquip);
}

function updateProfBonus() {
  // update proficiency bonus based on player level
  
  var playerLevel = parseInt(document.getElementById("playerLevel").value);
  
  if (playerLevel >= 17) {
    document.getElementById("profBonus").value = 6;
  } else if (playerLevel >= 13) {
    document.getElementById("profBonus").value = 5;
  } else if (playerLevel >= 9) {
    document.getElementById("profBonus").value = 4;
  } else if (playerLevel >= 5) {
    document.getElementById("profBonus").value = 3;
  } else {
    document.getElementById("profBonus").value = 2;
  }
  
}

function setSkills() {
   var profBonus = parseInt(document.getElementById("profBonus").value);
   var strMod = parseInt(document.getElementById("strMod").value);
   var dexMod = parseInt(document.getElementById("dexMod").value);
   var conMod = parseInt(document.getElementById("conMod").value);
   var intMod = parseInt(document.getElementById("intMod").value);
   var wisMod = parseInt(document.getElementById("wisMod").value);
   var chaMod = parseInt(document.getElementById("chaMod").value);
  
  if (document.getElementById("acroProf").checked == true) {
    document.getElementById("acroScore").value = dexMod + profBonus;
  } else {
    document.getElementById("acroScore").value = dexMod;
  }
  if (document.getElementById("animProf").checked == true) {
    document.getElementById("animScore").value = wisMod + profBonus;
  } else {
    document.getElementById("animScore").value = wisMod;
  }
  if (document.getElementById("arcaProf").checked == true) {
    document.getElementById("arcaScore").value = intMod + profBonus;
  } else {
    document.getElementById("arcaScore").value = intMod;
  }
  if (document.getElementById("athlProf").checked == true) {
    document.getElementById("athlScore").value = strMod + profBonus;
  } else {
    document.getElementById("athlScore").value = strMod;
  }
  if (document.getElementById("decProf").checked == true) {
    document.getElementById("decScore").value = chaMod + profBonus;
  } else {
    document.getElementById("decScore").value = chaMod;
  }
  if (document.getElementById("hisProf").checked == true) {
    document.getElementById("hisScore").value = intMod + profBonus;
  } else {
    document.getElementById("hisScore").value = intMod;
  }
  if (document.getElementById("insProf").checked == true) {
    document.getElementById("insScore").value = wisMod + profBonus;
  } else {
    document.getElementById("insScore").value = wisMod;
  }
  if (document.getElementById("intiProf").checked == true) {
    document.getElementById("intiScore").value = chaMod + profBonus;
  } else {
    document.getElementById("intiScore").value = chaMod;
  }
  if (document.getElementById("invProf").checked == true) {
    document.getElementById("invScore").value = intMod + profBonus;
  } else {
    document.getElementById("invScore").value = intMod;
  }
  if (document.getElementById("medProf").checked == true) {
    document.getElementById("medScore").value = wisMod + profBonus;
  } else {
    document.getElementById("medScore").value = wisMod;
  }
  if (document.getElementById("natProf").checked == true) {
    document.getElementById("natScore").value = intMod + profBonus;
  } else {
    document.getElementById("natScore").value = intMod;
  }
  if (document.getElementById("percProf").checked == true) {
    document.getElementById("percScore").value = wisMod + profBonus;
  } else {
    document.getElementById("percScore").value = wisMod;
  }
  if (document.getElementById("perfProf").checked == true) {
    document.getElementById("perfScore").value = chaMod + profBonus;
  } else {
    document.getElementById("perfScore").value = chaMod;
  }
  if (document.getElementById("persProf").checked == true) {
    document.getElementById("persScore").value = chaMod + profBonus;
  } else {
    document.getElementById("persScore").value = chaMod;
  }
  if (document.getElementById("relProf").checked == true) {
    document.getElementById("relScore").value = intMod + profBonus;
  } else {
    document.getElementById("relScore").value = intMod;
  }
  if (document.getElementById("sleiProf").checked == true) {
    document.getElementById("sleiScore").value = dexMod + profBonus;
  } else {
    document.getElementById("sleiScore").value = dexMod;
  }
  if (document.getElementById("steProf").checked == true) {
    document.getElementById("steScore").value = dexMod + profBonus;
  } else {
    document.getElementById("steScore").value = dexMod;
  }
  if (document.getElementById("survProf").checked == true) {
    document.getElementById("survScore").value = wisMod + profBonus;
  } else {
    document.getElementById("survScore").value = wisMod;
  }
  
}

function equipArmor(equippedArmor) {
  var armor = equippedArmor.value;
  if (armor == 'padded') {
    document.getElementById("armorClass").value = parseInt(document.getElementById("dexMod").value) + 11;
  } else if (armor == 'leather') {
    document.getElementById("armorClass").value = parseInt(document.getElementById("dexMod").value) + 11;
  } else if (armor == 'studded') {
    document.getElementById("armorClass").value = parseInt(document.getElementById("dexMod").value) + 12;
  } else if (armor == 'hide') {
    var tempArmor = parseInt(document.getElementById("dexMod").value) + 12;
    if (tempArmor > 14) {
       document.getElementById("armorClass").value = 14;
    } else {
     document.getElementById("armorClass").value = tempArmor; 
    }
  } else if (armor == 'chain') {
    var tempArmor = parseInt(document.getElementById("dexMod").value) + 13;
    if (tempArmor > 15) {
       document.getElementById("armorClass").value = 15;
    } else {
     document.getElementById("armorClass").value = tempArmor; 
    }
  } else if (armor == 'scale') {
    var tempArmor = parseInt(document.getElementById("dexMod").value) + 14;
    if (tempArmor > 16) {
       document.getElementById("armorClass").value = 16;
    } else {
     document.getElementById("armorClass").value = tempArmor; 
    }
  } else if (armor == 'breastplate') {
    var tempArmor = parseInt(document.getElementById("dexMod").value) + 14;
    if (tempArmor > 16) {
       document.getElementById("armorClass").value = 16;
    } else {
     document.getElementById("armorClass").value = tempArmor; 
    }
  } else if (armor == 'halfplate') {
    var tempArmor = parseInt(document.getElementById("dexMod").value) + 15;
    if (tempArmor > 17) {
       document.getElementById("armorClass").value = 17;
    } else {
     document.getElementById("armorClass").value = tempArmor; 
    }
  } else if (armor == 'ringmail') {
    document.getElementById("armorClass").value = 14;
  } else if (armor == 'chainmail') {
    document.getElementById("armorClass").value = 16;
  } else if (armor == 'splint') {
    document.getElementById("armorClass").value = 17;
  } else if (armor == 'plate') {
    document.getElementById("armorClass").value = 18;
  } else {
    document.getElementById("armorClass").value = parseInt(document.getElementById("dexMod").value) + 10;
  }
}

function shieldEquip(equippedShield) {
  var shield = equippedShield.value;
  if (shield == 'shield') {
    document.getElementById("armorClass").value = parseInt(document.getElementById("armorClass").value) + 2;
  } else {
    equipArmor(equippedArmor);
  }
}

function enableArmor() {
  var strScore = document.getElementById("strScore").value;
  if (strScore > 14) {
    document.getElementById("plateArmor").disabled = false;
    document.getElementById("splintArmor").disabled = false;
    document.getElementById("chainmailArmor").disabled = false;
  } else if (strScore > 12) {
    document.getElementById("plateArmor").disabled = true;
    document.getElementById("splintArmor").disabled = true;
    document.getElementById("chainmailArmor").disabled = false;
  } else {
    document.getElementById("plateArmor").disabled = true;
    document.getElementById("splintArmor").disabled = true;
    document.getElementById("chainmailArmor").disabled = true;
  }
    
}

function playerLevelChange() {
  updateProfBonus();
  updateModifiers();
  setSkills();
  resetHP();
  resetHitDice();
}

function takeDamage() {
  var amount = document.getElementById("modHP").value;
  var currentHP = document.getElementById("currentHP").value;
  if ((currentHP - amount) >= 0) {
    document.getElementById("currentHP").value = currentHP - amount;
  } else {
    document.getElementById("currentHP").value = 0;
  }
}

function healHP() {
  var amount = parseInt(document.getElementById("modHP").value);
  var currentHP = parseInt(document.getElementById("currentHP").value);
  var maxHP = parseInt(document.getElementById("maxHP").value);
  if((currentHP + amount) <= maxHP) {
    document.getElementById("currentHP").value = currentHP + amount;
  } else {
    document.getElementById("currentHP").value = maxHP;
  }
}

function longRest() {
  resetHP();
  resetHitDice();
}

function shortRest() {
  var currentDice = parseInt(document.getElementById("hitDice").value);
  if (currentDice > 0) {
    var currentHP = parseInt(document.getElementById("currentHP").value);
    var maxHP = parseInt(document.getElementById("maxHP").value);
    var maxDie = parseInt(document.getElementById("hitDie").value);
    var hitDieRoll = Math.floor(Math.random() * Math.floor(maxDie));
    if ((currentHP + hitDieRoll) <= maxHP) {
      document.getElementById("currentHP").value = currentHP + hitDieRoll;
    } else {
      document.getElementById("currentHP").value = maxHP;
    }
    document.getElementById("hitDice").value = currentDice - 1;
  }
}

function resetHP() {
  document.getElementById("currentHP").value = document.getElementById("maxHP").value;
}

function resetHitDice() {
  document.getElementById("hitDice").value = document.getElementById("playerLevel").value;
}
