let totalTop = 0

let top1 = prompt("Please enter first topping")
let top2 = prompt("Please enter second topping")
let top3 = prompt("Please enter third topping")

if (top1 == "yogurt"){
  (totalTop = totalTop +1);
}

else if (top1 == "tomatoes"){
  (totalTop = totalTop + .5);
}

else if (top1 == "lettuce"){
  (totalTop = totalTop + .3);
}

else if (top1 == "skittles"){
  (totalTop = totalTop + .75);
}
else {
  (totalTop = totalTop + 0);
}

if (top2 == "yogurt"){
  (totalTop = totalTop +1);
}

else if (top2 == "tomatoes"){
  (totalTop = totalTop + .5);
}

else if (top2 == "lettuce"){
  (totalTop = totalTop + .3);
}

else if (top2 == "skittles"){
  (totalTop = totalTop + .75);
}
else {
  (totalTop = totalTop + 0);
}

if (top3 == "yogurt"){
  (totalTop = totalTop +1);
}

else if (top3 == "tomatoes"){
  (totalTop = totalTop + .5);
}

else if (top3 == "lettuce"){
  (totalTop = totalTop + .3);
}

else if (top3 == "skittles"){
  (totalTop = totalTop + .75);
}
else {
  (totalTop = totalTop + 0);
}

let savings = Math.floor((totalTop * .10 *100))/100;
console.log("Your toppings cost $" + totalTop.toFixed(2));

if (totalTop >= 1){
  console.log("You saved $" + savings.toFixed(2));
  console.log("Your total is $" + (totalTop - savings).toFixed(2));

}
else{
  
}

