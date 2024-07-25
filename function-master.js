//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//you must figure out what it means by looking at the function-master.html
function objectValues(object) {
//initialize a variable to an empty array
var array = [];
//loop through the object key values
for(var key in object){
    array.push(object[key]);
}
//return the array
return array;
//return objectValues(object);
// code
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
/*
I: an object
O: a string, containing all the key values of the object, seperated by a space
C:
E:
*/
//initialize a variable
var emptyString = "";
//then im gonna loop the whole object
for(var key in object){
    //each object key value will be added to the empty string
    emptyString += key + ' ';
    }
    //return emptyString
    return emptyString.trim();
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    
var emptyString2 = "";
//then im gonna loop the whole object
    for(var key in object){
    //each object key value will be added to the empty string
        if(typeof(object[key]) === 'string'){
        emptyString2 += object[key] + ' ';
        }
    }
    //return emptyString
    return emptyString2.trim();
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    /**
     * I: an array or object
     * O: a string
     * C:
     * E: 
     *
     */
    //because the input will always either be an array or an object, if the object is an array, return 'array'
    if(Array.isArray(collection) === true){
        return 'array';
        //else, return 'object'
    } else {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    /**
     * I: a string of one word
     * O: a string with its first letter capitalized
     * C:
     * E:
     */
    //capitalize the letter in the string at the first index
    return string[0].toUpperCase() + string.slice(1)
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    /*
    I: a string
    O: a string with the first letter of each word capitalized 
    C:
    E:
    */

    /*
    I: a string
    O: a string with the first letter of each word capitalized 
    C:
    E:
    */

    //create a new variable
    var newWordCapped = '';
   //loop through the string
   for(var i = 0; i < string.length; i++){
    //if the index before a letter is a space
    if(string[i - 1] === ' '){
        //capitalize the letter at the index and add it to the newWordCapped variable
        newWordCapped += string[i].toUpperCase();
      //if it is the first letter in the index, capitalize it
    } else if(i === 0){
        newWordCapped += string[i].toUpperCase();
      //add every letter and space to the string if the other conditions are not met
    } else {
        newWordCapped += string[i]
    }
   }
  //return the variable
   return newWordCapped;
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    /*
    I: A string 
    O: A string with "Welcome " right before it
    C:
    E:
    */
    //declare a variable assigned to the value of the objects name
    var name = object['name'];
    //return the welcome message with capitalized name, concatenated with exclamation point
    return 'Welcome ' + name[0].toUpperCase() + name.slice(1) + "!"
    
    }

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    /**
     * I: an object
     * O: a string that says the objects keyvalues of name, and species 'Name is a Species'
     * C:
     * E:
     */
    //Declaring 2 variables that equal the objects keyvalues of species & name
let name = object['name'];
let species = object['species'];
//return a string of the first index of the strings uppercased concatenated with the strings having 
//their first value removed as well as adding an additional string so that the return
//value states that "Tippy is a Dog"

return name[0].toUpperCase() + name.slice(1) + ' is a ' + species[0].toUpperCase() + species.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    /**
     * I: various objects
     * O: a string
     * C: Object must have a species key value that is an array
     * E: 
     */
    //loop through the objects keys
    for(var key in object){
        //if there is a key that matches the string 'noises' which should be an array that contains noises,
        if(key === 'noises' && object[key].length > 0 && Array.isArray(object[key]) === true ){
        //return its key value joined together, include spaces between each word
            return object[key].join(' ');
        } 
    }
//if there are no noises, return there are no noises
    return 'there are no noises'

}


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
/**
 * I: takes in a string of words, and a word string
 * O: a boolean
 * C: boolean must tell if the string of words contains the word string
 * E:
 */
//use the include method to check if the string includes the word, return the value
return string.includes(word);

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

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