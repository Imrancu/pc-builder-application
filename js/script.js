/* document.getElementById('eightGB').addEventListener('click', function() {
    updatePrice('memory-cost', 0)
})
document.getElementById('ssd1').addEventListener('click', function() {
    updatePrice('storage-cost', 0)
})
document.getElementById('ssd2').addEventListener('click', function() {
    updatePrice('storage-cost', 300)
})
document.getElementById('ssd3').addEventListener('click', function() {
    updatePrice('storage-cost', 500)
})
document.getElementById('paid-delivery').addEventListener('click', function() {
    updatePrice('delivery-cost', 20)
}); */

onClick('eightGB', 'memory-cost', 0);
onClick('sixteenGB', 'memory-cost', 200);
onClick('ssd1', 'storage-cost', 0);
onClick('ssd2', 'storage-cost', 300);
onClick('ssd3', 'storage-cost', 500);
onClick('free-delivery', 'delivery-cost', 0);
onClick('paid-delivery', 'delivery-cost', 20);


function onClick(clickId, updateID, price) {
    document.getElementById(clickId).addEventListener('click', function() {
        updatePrice(updateID, price);

    })
}


function updatePrice(itemId, price) {
    const memoryCostAdd = document.getElementById(itemId);
    memoryCostAdd.innerText = price;

    const bestCost = document.getElementById('best-cost').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;

    var totalCost = parseFloat(bestCost) + parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(deliveryCost);
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = totalCost;
}
const promoCode = "phero";
const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click', function() {
    const promoInput = document.getElementById('promo-input').value;
    if (promoInput === promoCode) {
        const totalPrice = document.getElementById('total-price');
        let updatePrice = parseFloat(totalPrice.innerText);
        // const discount = updatePrice * .2;
        const discount = (updatePrice * 20) / 100;
        updatePrice = updatePrice - discount;
        totalPrice.innerText = updatePrice;
        document.getElementById('applied-text').style.discount = ''
    } else {
        alert('Please, input a valid promo code!')
    }

})