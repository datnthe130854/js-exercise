var a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1]
var result=a.reduce((previousTotal,value)=>{
    result=previousTotal+value
    console.log(previousTotal,value,result)
   return result

})
console.log("Tong:", result)


//bài 22
var numbers = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1]
var maxInNumbers = Math.max.apply(Math, numbers); 
var minInNumbers = Math.min.apply(Math, numbers);
var medium=(minInNumbers+maxInNumbers)/2
console.log( "Output:" ,maxInNumbers,minInNumbers,medium)

//bài 23
var numbers = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]
var numberSearch=[9]
// var count=1;
// var a =numbers.slice(8,11)
// var b=[]
// for(var i=0;i<numbers.length;i++){
//    if(b[i]){
//        b[i]=0;
//        for(var j=0;j<numbers.length;j++){
//            if(a[j]==a[i]){
//                count++;
//                b[j]=0;
//            }
//        }
//    }
// }
for(var count=-1,index=-2; index != -1; count++,index=numbers.indexOf(numberSearch,index+1) );
    
   


// var foundNumbers =numbers.indexOf(9)

console.log(count)