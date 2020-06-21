var n

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
