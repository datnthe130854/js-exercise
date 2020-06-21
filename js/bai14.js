function ValidateName(str){
    return str.toLowerCase().replace(/^\w|\s\w/g, function (name) {
        return name.toUpperCase();
    })
  }

console.log(ValidateName("NGuyễn TIẾn ĐạT"))

//for
// var name =" nguyễn tiến đạt "
// var newName=""
// for(var i=0;i<name.length;i++){
//     if(i==0||name[i-1]== " "){
//         newName += name[i].toUpperCase()
//     }else{
//         newName += name[i]
//     }
// }
// console.log(newName)

//funtion
// function toUpper(str) {
//     return str
//         .toLowerCase()
//         .split(' ')
//         .map(function(Word) {
//             return Word[0].toUpperCase() + Word.substr(1);
//         })
//         .join(' ');
//      }
//      console.log(toUpper("NGuyễn TIẾN ĐẠt"))