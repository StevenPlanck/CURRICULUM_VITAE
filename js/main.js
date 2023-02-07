var birthdate = "05/17/1997";

function getAge(datestring) {
    
    var datebirth = new Date(datestring);
    var date = new Date();

    var birthdatems = datebirth.getTime();
    var datems = date.getTime();

    var differencems = datems - birthdatems;
    var age = differencems / 31536000000;
    
    return Math.floor(age);
}

var ageElement = document.getElementById("age");
ageElement.innerText = getAge(birthdate);



console.log();