alert("Welcome to this website");
let userName = prompt("What is your name?");

let yearOfBirth = Number(prompt("What is your year of birth?", 2021));
let age = 0;

// Trying to solve it where a number is demanded
if (!Number(yearOfBirth)) {
  prompt("please enter a number!");
  yearOfBirth = 2021;
}
age = 2021 - yearOfBirth;
alert(age);
let myAge = 33;

if (age < 10) {
  alert(
    "You are too young for this " + userName + ". Come back when you are older."
  );
} else if (age >= 10 && age < 18) {
  let isNextToAnAdult = confirm("please confirm that you are next to an adult");
  if (isNextToAnAdult == true) {
    alert(
      "Welcome to my super website " +
        userName +
        ". Good, that you are not alone here!"
    );
  } else if (isNextToAnAdult == false) {
    alert(
      "You are too young for this " +
        userName +
        ". You need an adult next to you to continue."
    );
  }
} else if (age >= 18 && age != myAge) {
  alert("Welcome to my super website " + userName);
} else if (age == myAge) {
  alert("Welcome to my super website " + userName + ". We are the same age!");
}
