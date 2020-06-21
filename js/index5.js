var number=[1,6,3,5,8]
function findNumber(value){
    if(value %2==0){
        return true
    }else{
        return false
    }

}



var foundNumber =number.find(findNumber)
console.log(foundNumber)

// fillter all even number
var evenNumber =number.filter((value) =>{
    return value%2==0;
})
console.log("evenNumber:",evenNumber)

//map,reduce,concat,sort

var Dat={
    id:1,
    firstName:"Nguyen Tien",
    lastName:"Dat",
    class:"Java"
}
var thai={
    id:2,
    firstName:"Luu Quang",
    lastName:"Thai",
    class:"Java"
}
var thuong={
    id:3,
    firstName:"Nguyen Thi",
    lastName:"Thuong",
    class:"Java"
}

var students =[
    Dat,
    thai,
    thuong
]
console.log("Students:",students)

var newStudents=students.map((student)=>{
    //var newStudent =new Object(student)
    //ES6...
    return{...student,
        fullName : student.firstName +" "+student.lastName
    }
    

    // return {
    // id : student.id,
    // fullName : student.firstName +" "+student.lastName,
    // class : student.class
    // }
})
console.log("newStudent:",newStudents)
number.push(7)
number.unshift(2)
console.log("number:",number)

//reduce
var result=number.reduce((previousTotal,value)=>{
    if(value%2==0){
    var total=previousTotal+value
    console.log(previousTotal,value,total)
   return total
    }
    return previousTotal
},0)
console.log(result)
//sort
var studentsName=["thuong","huyen","khoi","dung","dat"]
var sortStudentsName = studentsName.sort()
var sortStudentsName = studentsName.sort((a,b)=>{
if(a>b){
    return -1
}else if(a<b){
    return 1
}

})


console.log("sortStudentsName:",sortStudentsName)
number.push(20)
var sortNumbers=number.sort((a,b)=>{
return b-a
})


console.log("sortNumbers:",sortNumbers)
console.log("concat:",sortNumbers.concat(sortStudentsName))

console.log("student:",students)


var sortLastName=students.sort((a,b)=>{
    if(a.lastName>b.lastName){
        return 1
    }else if(a.lastName<b.lastName){
        return -1
    }
    return 0
})
console.log("sortLastname:",sortLastName)

//for of
for (var student of sortLastName) {
    console.log("Student:",student)
}

//object

var car ={
    name:"Vinfast",
    model:"2020",
    weight:200,
    start:function(){
        console.log(this.name   + " Starting...")
    }
}

function updateCar(car,prop,value){
   car[prop]=value
}
updateCar(car,"name","Vinfast2")
updateCar(car,"model","2018")
console.log("CARRRRRR:",car)

car.country ="vietnam"

car.stop =function(){
    console.log(this.name+ " Stopping...")
}


console.log("car name:",car.name,car["name"],car.country)
car.start()
car.stop()

function prinObj(obj){
    for(var prop in obj){
        if(typeof obj[prop] !=="function"){
            console.log(prop)
            console.log("prop:",prop,"data",obj[prop])
        }else{
            obj[prop]()
        }
        
    }
}
prinObj(car)
prinObj(thai)

//funtion object

function Car(year,weight,model){
    this.year=year,
    this.weight=weight,
    this.model=model,
    this.start=function(){
        console.log(this.model + " Starting...")
    }
}
var myCar = new Car("2020",850,"phone")
var myCar2 = new Car("2021",950,"iphone")
console.log(myCar)
console.log(myCar2)

myCar.start()
myCar2.start()