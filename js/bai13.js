var name ="This is a beautiful day, is it?"
var pos="is"
function ValidateName(name) {
    var newString =" ";
    for (var i = name.length - 1; i >= 0; i--) { 
        newString += name[i]; 
      
    }

    return newString;
}
console.log("ValidateName:"+ ValidateName(name))