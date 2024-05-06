"use strict"

window.onload = function () {

    let theIceCreamForm = document.querySelector("#theIceCreamForm");

    //let coneOrCupRadios = document.querySelectorAll ("input [name='coneOrCup']");

    let cup = document.querySelector("#cup");
    let cone = document.querySelector("#cone");
    
    cup.addEventListener ("click", hideShowToppings)
    cone.addEventListener ("click", hideShowToppings)



    theIceCreamForm.addEventListener("submit", calcTotalPrice)

}

function calcTotalPrice(event) {

    event.preventDefault();

    let theForm = event.target

    //create form for the total price per scoop

    let oneScoop = 2.25;


    let extraScoopsPrice = 0;


    //console.log(totalIceCreamPrice);

    if (theForm.numScoops.value > 1) {

        extraScoopsPrice = (numScoops.value - 1) * 1.25 

    }


    let toppingsCost = 0;


    if (theForm.coneOrCup.value === "cup") {

        if (theForm.sprinkles.checked) {

            toppingsCost += .50;
        }
        if (theForm.whippedCream.checked) {

            toppingsCost += .25;
        }
        if (theForm.hotFudge.checked) {

            toppingsCost += 1.25;
        }
        if (theForm.cherry.checked) {

            toppingsCost += .25;
        }


    }
    let basePrice = oneScoop + extraScoopsPrice + toppingsCost;
    let taxDue = basePrice * (6/100);
    let totalDue = oneScoop + extraScoopsPrice + toppingsCost + taxDue;

    console.log(totalDue)


    let message = `
 <div> Scoops Cost: $${oneScoop+ extraScoopsPrice} </div>
 <div> Toppings Cost: $${toppingsCost} </div>
 <div> Tax: $${taxDue.toFixed(2)} </div>
 <div> Total Due: $${totalDue.toFixed(2)} </div>
`
document.querySelector("#results").innerHTML = message;

}


//hide and show 
function hideShowToppings (event) {
    let toppingsSection = document.querySelector("#toppings");

    if (event.target.value === "cup") {
        toppingsSection.classList.remove("d-none")
    } else {
        toppingsSection.classList.add("d-none")
    }
    }



