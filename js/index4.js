var fruits = ['Apple', 'Banana', 'Orange']
var number = [1, 3, 5, 7, 2, 4]
var mixed = ['Apple', 2, 'Banana', true]

console.log("fruits: ", fruits);
console.log("number: ", number);
console.log("mixed: ", mixed);

console.log("first fruits: ", fruits[0])
console.log("last fruits: ", fruits[fruits.length - 1])
console.log("typeoOf(fruits): ", typeof(fruits))

// get and remove last element of array

var lastFruits = fruits[fruits.length - 1]
// fruits.length = fruits.length - 1
console.log(`lastfruits: ${lastFruits},
             fruits now:  ${fruits}`)

// get and remove first element of array
var firstFruit =fruits[0]
for(var i=0;i<fruits.length-1;i++){
    fruits[i]=fruits[i+1]
}
fruits.length--
console.log(`firstfruits: ${lastFruits},
             fruits now:  ${fruits}`)

//array method
//append to the last array
fruits.push("kiwi")
fruits.push("Banana")
console.log("fruits: ",fruits)
//append to the first array
fruits.unshift("cherry")
console.log("fruits :",fruits)

var foundBanana =fruits.indexOf("Banana")
var foundLastBanana =fruits.lastIndexOf("Banana")
console.log("foundBanana : ",foundBanana)
console.log("foundlastBanana : ",foundLastBanana)

var subFruits =fruits.slice(1,3)
console.log("subFruits:",subFruits)


var reverseFruits =fruits.slice(0).reverse()
console.log("reverseFruits :",reverseFruits)
console.log("fruits :",fruits)

//remove element
// fruits.splice(fruits.indexOf("Orange"),3)

//insert element
fruits.splice(2,1,"Watermelon","strawberry")
console.log("fruits :",fruits)

//join
console.log("join(,):",fruits.join(","))

//callback

function hello(callback){
      callback()
}
function sayHelloClass(){
    console.log("Hello Class")
}

hello(sayHelloClass)

//callback ex

function cooking(cookingFish){
        cookingFish()
}
function cookingFish(){
    console.log("I'm cooking fish")

}

cooking(cookingFish)



var cherry = {
    name:"cherry",
    price :5
}
var watermelon = {
    name:"watermelon",
    price :10,
}
var fruits=[
    cherry,
    watermelon,
    {
        name:"Banana",
        price:7,
    }
]
var foundBananaObj =fruits.indexOf({
    name :"Banana",
    price:7
})
var foundCherryObj =fruits.indexOf(cherry)

console.log(fruits)
console.log("foundBananaObj",foundBananaObj)
console.log("foundCherryObj",foundCherryObj)

//find
var findElement = function(item) {
    console.log("Item:",item);
    return item.name==="watermelon"
    // return true  
}

//rewwrite array find

function myFind(find){
    for(var i=0;i<fruits.length;i++){
        var result =find(fruits[i])
        if(result){
            return fruits[i]
        }
    }
}

var findWatermelon = fruits.find(findElement)
console.log("findWatermelon:",findWatermelon)