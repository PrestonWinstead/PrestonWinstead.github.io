//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var myArray = [];
    for(var key in object){
        myArray.push(object[key]);
    }
    return myArray;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var myArray = [];
    for(var key in object){
        myArray.push(key);
    }
    return myArray.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var myArray = [];
    for(var key in object){
        if(typeof object[key] === "string"){
            myArray.push(object[key]);
        }
    }
    return myArray.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){
        return "array";
    }else{
        return typeof collection;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var myArray = string.split(" ");
    var myCapitalArray = [];
    for(let i = 0; i < myArray.length; i++){
        myCapitalArray.push(myArray[i][0].toUpperCase() + myArray[i].slice(1));
    }
    return myCapitalArray.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return "Welcome " + (object.name[0].toUpperCase() + object.name.slice(1)) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return (object.name[0].toUpperCase() + object.name.slice(1)) + " is a " + (object.species.charAt(0).toUpperCase() + object.species.slice(1));
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object){
  if(object.hasOwnProperty("noises")){
    if(object.noises.length === 0){
      return "there are no noises";
    }else{
      return object.noises.join(" ");
    }
  }else{
    return "there are no noises";
  }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    if(string.includes(word)){
        return true;
    }else{
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
  if(!object.hasOwnProperty("friends")) {
    return false;
  }else{
    for(var i = 0; i < object.friends.length; i++){
      if(object.friends[i] === name){
        return true;
      }
    }
  }
  return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
  var namesArray = [];
  var tempPerson = [];
  var person = [];
  for(var i in array){
    namesArray.push(array[i]["name"]);
    //console.log(namesArray);
  }
  for(var j in array){
    if(array[j]["name"] === name){
      tempPerson = Object.values(array[j]);
      //console.log(tempPerson);
    }
  }
  person.push(tempPerson[0]);
  person.push(tempPerson[1][0]);
  person.push(tempPerson[1][1]);
//   console.log(person);
//   console.log(namesArray);
  for(var k = person.length; k > -1; k--){
    for(var l = namesArray.length; l > -1; l--){
//       console.log(person[k]);
//       console.log(namesArray[l]);
      if(namesArray[l] === person[k]){
//         console.log(namesArray[l]);
//         console.log(person[k]);
        namesArray.splice(l, 1);
//         console.log(namesArray);
//         console.log(person);
      }
    }
  }
  return namesArray;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
  for(var i = 0; i < array.length; i++){
    for(var key in object){
      if(key === array[i]){
        delete object[key];
      }
    }
  }
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    return array = Array.from(new Set(array));
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}