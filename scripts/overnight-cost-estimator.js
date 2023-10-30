'use strict'

window.onload = init;

function init() {
    const costBtn = document.querySelector('#costBtn');
    costBtn.onclick = estimateStayCost;
}

function estimateStayCost() {
    // get the checkInDate
    const checkInDateInput = document.querySelector('#checkInDate').value;
    // convert checkInDate to a Date 
    const checkInDate = new Date (checkInDateInput);
    // get the month of the check in date 
    const checkInMonth = checkInDate.getMonth() + 1;

    let nightRate = 0;
    const queen = document.querySelector('#queen');
    const king = document.querySelector('#king');

     // summer month rates
    if (checkInMonth >= 6 && checkInMonth <= 8) {
        if (queen.checked || king.checked) {
            nightRate = 250;
        } else {
            nightRate = 350;
        }
    // non summer month rates
    } else {
        if (queen.checked || king.checked) {
            nightRate = 150;
        } else {
            nightRate = 210;
        }
    }

    // apply discount
    let discount = 0; 
    const AAA = document.querySelector('#AAA');
    const military = document.querySelector('#military');

    if (AAA.checked) {
        discount = (10);
    } else if (military.checked) {
        discount = (20);
    } else {
        discount = 0;
    }

    const discountedRoomCost = nightRate - ((discount/100) * nightRate);

    // apply taxes
    let taxes = (12/100) * discountedRoomCost;

    //sum of everything 

    // get the number of nights stayed
    const nightsStayed = document.querySelector('#numberOfNights').value;
    const totalCost = (discountedRoomCost * nightsStayed) + taxes;

    //outputs 
    const originalRoomCostOutput = document.querySelector('#originalRoomCost');
    originalRoomCostOutput.value = nightRate.toFixed(2);

    const discountAppliedOutput = document.querySelector('#discountApplied');
    discountApplied.value = `${discount.toFixed(2)} %`;

    const discountedRoomCostOutput = document.querySelector('#discountedRoomCost');
    discountedRoomCostOutput.value = discountedRoomCost.toFixed(2);

    const taxOutput = document.querySelector('#tax');
    taxOutput.value = taxes.toFixed(2);

    const totalCostOutput =  document.querySelector('#totalCost');
    totalCostOutput.value = totalCost.toFixed(2);
}

