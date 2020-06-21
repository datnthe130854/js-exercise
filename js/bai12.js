
function ValidateName(name){
    //coding...
    name= name.trim()
    while(name.includes("  ")){
        name=name.replace("  ","")
        name=name.toLowerCase()
        
    }
    // name=name.replace(/\s+/g,"")
    // name=name.toLowerCase()
     return name

}
var userName = "        Nguyen              Tien                    Dat    "
console.log("ValidateName:"+ ValidateName(userName))