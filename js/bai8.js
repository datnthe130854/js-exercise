var n =131;
var check =true
while(n>0){
    var remind =n %10;
    // console.log("remind",remind)
    if(remind % 2==0){
        check = false;
        break;
    }
    n= Math.floor(n/10)
}
alert(check)