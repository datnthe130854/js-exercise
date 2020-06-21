//VD1
// var s1="This is a beautiful day, is it?"
// var s2="is"

// console.log(`findPosition : ${s1.indexOf("is")}`)

// // //VD2

// // var s1="This is a beautiful day"
// // var s2="isa"
// // console.log(`findPosition : ${s1.lastIndexOf(s2)}`)

// //VD3
// var s1="hi hi hi hi hi"
// var s2="hi"
// console.log(`findPosition : ${s1.lastIndexOf(s2)}`)
function getId(facebook){
    var domain='https://www.facebook.com/profile.php?id=100007397169116'
    return idFacebook=facebook.slice(domain.length)
}
alert (getId('https://www.facebook.com/profile.php?id=100007397169116'))