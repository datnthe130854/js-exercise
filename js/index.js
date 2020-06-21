// // alert("hello class")

// var helloClass = "Hello Class JAVA2002" 
// var number=10
// console.log(helloClass,typeof(helloClass))
// console.log(number,typeof(number))
// var x;
// var object = null
// console.log(x)
// console.log(object)
// var i=0;
// i=i+1;
// console.log("i :",i)
// //if 
// var answer=prompt("It is rainning to day?","Yes/No")
// console.log("answer",answer)

// // var isRainning = answer == "YES"
// // if(answer="No"){
// //     isRainning=false;
// // }else{
// //     isRainning=true;
// // }

// //  var isRainning=true;
// if(answer == "No" && isOkey =="Yes"){
//     alert("Toi di hoc")
// }else 
//     alert("stay at home")
// }
// var mark =prompt("Enter your mark",0)
// mark =Number(mark);
// console.log("Mark:",mark , typeof(mark))
// if(mark<0 || mark>10){
// console.log("Your mark is not valid")
// }
// else if( mark <4){
//     console.log("You are bad")
// }else if( mark <6){
//     console.log("You are medium")
// }else if( mark <8){
//     console.log("You are good")
// }else if( mark <9){
//     console.log("You are verygood")
// }else if( mark <=10){
//     console.log("You are excellent")
// }

// var month = prompt("Enter month :", 0)
// month = Number(month);
// switch (month) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//         console.log("Spring");
//         break;
//     case 5:  
//     case 6:
//     case 7:
//     case 8:
//         console.log("Summer");
//         break;
// }

// var n=10;
// for (var i = 0; i < n; i++) {
//     for(var j=0;j<n;j++)
//         console.log("I love you", i,j)
// }
// var i = 0;
// var n = 10;

// var answer 

// do{
// answer = prompt("Do you love me?", "YES")
// }while (answer != "YES") 
// alert("I love you,too");

// var answer
// var number

// do {
//     answer = prompt("Enter a number?", "0")
//     number = parseFloat(answer)
// } while (Number.parseFloat(number)) {
//     if (number % 2 == 0) {
//         alert("Đây là số chẵn")
//     } else {
//         alert("Đây là số lẻ")
//     }
// }

var n=10

do{
    n = prompt("Enter a number?")
    if(!isNaN(n)){
        break;
    }else{
        alert("Please enter again");
    }
}while(isNaN(n));
function check_sqrt(n){
    var fag =true;
    if(n<2){
        fag=false;
    }else{
        for(var i=2 ; i<(n-1) ;i++)
        if(n%i==0){
            fag=false;
            break;
        }
    }
    if(fag==true){
        alert( n="YES")
    }else{
       alert( n = "NO")
    }
    
        
}
check_sqrt(n)






