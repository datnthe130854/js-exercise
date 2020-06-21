// function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//     //    document.getElementById("demo").innerHTML = this.responseText;
//     console.log(this.responseText)
//       }
//     };
//     xhttp.open("GET", "https://5e8e421f22d8cd0016a7a062.mockapi.io/api/v1/users", true);
//     xhttp.send();
//   }
//   loadDoc()
//   fetch('https://5e8e421f22d8cd0016a7a062.mockapi.io/api/v1/users')
//   .then(response => response.json())
//   .then(data => console.log(data) )

  //class
  class Person{
      constructor(lastName,firstName){
          this.lastName =lastName;
          this.firstName=firstName;    
          this.name=firstName+lastName

      }
      go= () => {
          console.log(this.name+" is going...")
      }
  }
  var person = new Person("thuong","Thi ");
  var person2 = new Person("thai","Van ");
  console.log("person:",person)
  person.go()
  console.log("person:",person2)
 person2.go()
 function  someoneGoing(go){
     //
     go()
 }
 someoneGoing(person.go.bind(person))

 class Doctor extends Person{
     constructor(lastName,firstName,degree){
            super(lastName,firstName)
            this.name=firstName+ " "+lastName
            this.degree=degree;
     }
 }
 class Developer extends Person{
        constructor(lastName,firstName,language){
            super(lastName,firstName)
            this.language=language;
        }
} 

class Hacker extends Developer{
    constructor(lastName,firstName,hat){
           super(lastName,firstName,language);
           this.hat=hat;
    }
    go = () =>{
console.log("hacker" + this.name + " is running...")
    }
}

var doctor = new Doctor("dat","nguyen","trader")
console.log("doctor",doctor)

var developer =new Developer(" dat","nguyen tien",["html","css","java"])
console.log("delopper",developer)
var hacker =new Developer(" dat","nguyen tien",["html","css","java"])
console.log("hacker",hacker)
hacker.go()

//advances
console.log("---------------------------ADVANCES--------------------")
let x=5;
let x=6;
console.log("x",x)


