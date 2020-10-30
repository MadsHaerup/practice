/*console.log("Feta er super");

var myObject = {
    name: "Mads",
    age: 25,
    height: 175,
    // password: "password123"
};

//optional chaining "?" er en ny funktion i javascript
if (myObject?.password == "password123") {
    console.log("you are logged in");
    console.log(myObject?.password);
}*/

function doAlotOfStuff(params ={something, somethingelse, somethingdifferent, somethingentirelyelse}) {
    while (params?.somethingdifferent) {
        console.log("yo");
    }
}