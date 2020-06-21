var hello = "Hello World"
var helloDat = "Hello Dat"
var helloCau = '"chao" \'cau\''
console.log(hello, helloDat, helloCau)
//use template string
var introduce ="I'm a student and 22 year old"
function getIntroduce(name,age){
    //  var introduce ="I'm " + name + " and "+ age + " year old."
     var introduce= `I'm ${name} and ${age} year old`
     return introduce;
    }
    console.log(getIntroduce("Dat",22))
    

//stirng method
var str= "Today is a beautiful day ,is'nt it?"
var substr ="day"

console.log(`length: ${str.length},charAt(0): ${str.charAt(0)},
toUpperCase(): ${str.toLocaleUpperCase()},
toLowerCase(): ${str.toLowerCase()}
indexOf("day"):${str.indexOf(substr)}
lastIndexOf("day"):${str.lastIndexOf(substr)}
slice(0,5): ${str.slice(0,5)}
substring(0,5):${str.substring(0,5)}

substr(0,5): ${str.substr(0,5)}
concate(0,5):${str.concat(substr)}
replace("beautiful" , "good"):${str.replace("beautiful","good")}
`)

// for(var i=0;i<str.length-1;i++){
// if()
// }

function myReplace(str, oldStr, newStr){
    var pos= str.indexOf(oldStr);
    if(pos === -1){
        return str
    }
    str=str.slice(0,pos) + "good" + str.slice(pos + oldStr.length)
    return str;
}
console.log("str:" + myReplace(str,"beautiful","good"))

//trim()
function ValidateName(name){
    //coding...
    name= name.trim()
    // while(name.includes("  ")){
    //     name=name.replace("  "," ")
    // }
    name=name.replace(/\s+/g," ")
     return name

}
var userName = "        Nguyen              Tien                    Dat    "
console.log("username:" + userName.trim())
console.log("ValidateName:"+ ValidateName(userName))