// Write your JavaScript here


function handleClickEvent(e)
{
    let due = document.getElementById("amount-due").value;
    let received = document.getElementById("amount-received").value;

    let change = received - due;
    change = change.toFixed(2);
    document.getElementById("result").textContent = "$" + change;

    let dollars = Math.floor(change);
    console.log(dollars);
    document.getElementById("dollars-output").textContent =
     dollars;

    let coins = change - dollars;
    coins *= 100;

    let quarters = coins / 25;
    quarters = Math.floor(quarters);
    console.log(quarters);
    document.getElementById("quarters-output").textContent =
      quarters;
    coins %= 25;

    let dimes = coins / 10;
    dimes = Math.floor(dimes);
    console.log(dimes);
    document.getElementById("dimes-output").textContent =
    dimes;
    coins %= 10;

    let nickels = coins / 5;
    console.log(nickels);
    nickels = Math.floor(nickels);
    document.getElementById("nickels-output").textContent =
     nickels;
    coins %= 5;

    let pennies = coins;
    pennies = Math.round(pennies)
    console.log(pennies);
    document.getElementById("pennies-output").textContent =
    pennies;
}

let button = document.getElementById("calculate-change");

button.addEventListener("click", handleClickEvent);










