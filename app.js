// Common function
function common(para) {
     const totalCost = document.querySelector("#total-cost");
     totalCost.innerText = para;
     document.querySelector("#final-total").innerText = para;
}
// Event Handler 
// Memory cost function
function memoryCost(price, doc1) {
 const memoryValue = document.querySelector(doc1);
  memoryValue.innerText = price;
  const memoryCost = memoryValue.innerText;
 const bestPrice = document.querySelector("#best-price").innerText;
 const storageValue = document.querySelector("#storage-cost").innerText;
  const deliveryCost = document.querySelector("#delivery-cost").innerText;
  const updateTotalCost =
    parseFloat(bestPrice) + parseFloat(memoryCost) + parseFloat(storageValue) + parseFloat(deliveryCost);
  common(updateTotalCost);
     
}
//   Storage Cost Function
function storageCost(price, doc1) {
    const storageValue = document.querySelector(doc1);
    storageValue.innerText = price;
    const memoryValue = document.querySelector("#memory-cost");
    const deliveryCost = document.querySelector("#delivery-cost");
    const bestPrice = document.querySelector("#best-price");
    const updateTotalValue =
      parseFloat(storageValue.innerText) +
      parseFloat(bestPrice.innerText) +
      parseFloat(memoryValue.innerText) +
    parseFloat(deliveryCost.innerText);
  common(updateTotalValue);
   
}

      //   Delivery-Charge Function
function deliveryCost(price, doc1) {
         const deliveryValue = document.querySelector(doc1);
         deliveryValue.innerText = price;
         const memoryValue = document.querySelector("#memory-cost");
         const storageValue = document.querySelector("#storage-cost");
         const bestPrice = document.querySelector("#best-price");
         const updateTotalValue =
           parseFloat(storageValue.innerText) +
           parseFloat(bestPrice.innerText) +
           parseFloat(memoryValue.innerText) +
           parseFloat(deliveryValue.innerText);
           common(updateTotalValue);
}
//  cuppon Code Work
document.querySelector('#cuppon-btn').addEventListener('click', function () {
  const cupponInput = document.querySelector("#cuppon-field");
  const totalCost = document.querySelector('#total-cost');
  // console.log(cupponInput.value);
  if (cupponInput.value == "stevekaku") {
    totalCost.innerText = parseFloat(totalCost.innerText) -parseFloat(totalCost.innerText) * 0.20;
  }
  console.log(totalCost.innerText);
})
    //  Calling the function
document.querySelector('#memory-btn-16gb').addEventListener('click', function () {
    memoryCost(100, "#memory-cost");
})
document.querySelector("#memory-btn-8gb").addEventListener("click", function () {
      memoryCost(0, '#memory-cost');
  });
  

document.getElementById('256gb-ssd-storage').addEventListener('click', function () {
  storageCost(0, "#storage-cost");


})
  document.getElementById("512gb-ssd-storage").addEventListener("click", function () {
      storageCost(100, "#storage-cost");
    });
     document.getElementById("1tb-ssd-storage").addEventListener("click", function () {
         storageCost(180, "#storage-cost");
     });
       
      document.getElementById("delivery-charge-free").addEventListener("click", function () {
            deliveryCost(0, "#delivery-cost");
          });
     document.getElementById("delivery-charge").addEventListener("click", function () {
         deliveryCost(20, "#delivery-cost");   
       });
       