'use strict'

window.onload = init;

function init() {
    const costBtn = document.querySelector('#costBtn');
    costBtn.onclick = estimateStayCost;
}

function estimateStayCost() {
    const basicNightRate = 150;

    // apply discount
    let discount = 0; 
    const AAA = document.querySelector('#AAA');
    const military = document.querySelector('#military');

    if (AAA.checked) {
        discount = (10/100);
    } else if (military.checked) {
        discount = (20/100);
    } else {
        discount = 0;
    }

    const discountedRoomCost = basicNightRate - (discount * basicNightRate);

    // apply taxes
    let taxes = (12/100) * discountedRoomCost;
}

