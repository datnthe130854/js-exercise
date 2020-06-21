 var str=" Hello  World"
var chuoiKq = " "
var count=0
for(var i=0;i<str.length;i++){
    if(str[i-1] ==" "){
        chuoiKq += count;
        count++;

    }else{
        chuoiKq+=str[i]
    }
}
console.log (`count = ${count}`)
