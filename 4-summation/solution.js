let userNumber = prompt("Please provide a number");
let sum = 0;
if (userNumber < 0) {
  alert(
    "the number given was negative and you can't calculate the sumatory for that"
  );
} else if (userNumber >= 0) {
  for (let i = 0; i <= userNumber; i++) {
    sum = sum + i;
    console.log(sum);
  }
}

alert(sum);
