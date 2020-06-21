// var str=`computer =            " ngAN 98    " AND class = "  REACTJS2002 "`
//         function substr1(str){
//             var str=str.trim()
//             while(str.includes(' ')){
//                 str=str.replace('  ',' ')
//             }
//             return str
//         }
//         function substr2(str){
//             var str =str.trim()
//             while(str.includes(' ')){
//                 str=str.replace('  ',' ')
//             }
//             return str
//         }
//         str=substr1(str)
//         var s1='computer = '
//         var s2=' AND class = '


//         // str=str.indexOf(s1)


//         var str1 =str.slice(s1.length,str.indexOf(s2)).toLowerCase()
//         str1=substr1(str1)

//         var str2 =str.slice(str.indexOf(s2)+s2.length)
//         str2=substr2(str2)
        
//         str=s1+str1+s2+str2
//         alert(str)
// var s1="computer =         "
// var str = "       ngAN 98       "
// var newStr =str.trim()

// console.log(`newStr:${s1.trim()}"${str.trim().toLowerCase()}"`+ " AND class =")



// function ValidateName(name){
//     //coding...
//     name= name.trim()
//     while(name.includes("  ")){
//         name=name.replace("  "," ")
//     }
//     // name=name.replace(/\s+/g," ")
//      return name

// }
// var userName=`computer =            " ngAN 98    " AND class = "  REACTJS2002 "`
// console.log("username:" + userName.trim())
// console.log("ValidateName:"+ ValidateName(userName))



function subS1(s1){
    s1=s1.trim()
    while(s1.includes("  ")){
        s1=s1.replace("  "," ")
    }
    return s1
}

var s1="computer =       "

console.log(subS1(s1))
