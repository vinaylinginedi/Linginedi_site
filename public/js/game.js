
function LengthConverter(valNum) {
  document.getElementById("outputInches").innerHTML=valNum*12;
  document.getElementById("outputMeters").innerHTML=valNum/3.2808;
  document.getElementById("outputMiles").innerHTML=valNum*0.00018939;
 }