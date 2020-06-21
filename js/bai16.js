
var name ="This is a beautiful day, is it"
var pos="is"
var newName=""
for(var i=0;i<name.length;i++){
    if(i==0||name[i-1]== " "){
        newName += name[i].lastIndexOf(pos)
    }else{
        newName += name[i]
    }
}
console.log(newName)