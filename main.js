

function calculateFee() {
  const paypalFeesInput = document.getElementById("paypalFees");
  paypalFeesInput.value = "4.4% + 0.30";
  const saleAmount = parseFloat(document.getElementById("saleAmount").value);
  const fixedFee = 0.3;

  if (isNaN(saleAmount)) {
      return;
  }

  let feePercentage = 0;
  if (saleAmount <= 3000) {
      feePercentage = 4.4;
      paypalFeesInput.value = "4.4% + 0.30";
  } else if (saleAmount <= 10000) {
      feePercentage = 3.9;
      paypalFeesInput.value = "3.9% + 0.30";
  } else if (saleAmount <= 100000) {
      feePercentage = 3.7;
      paypalFeesInput.value = "3.7% + 0.30";
  } else {
      feePercentage = 3.4;
      paypalFeesInput.value = "3.4% + 0.30";
  }

  const feeAmount = (saleAmount * feePercentage / 100) + fixedFee;
  const amountAfterFees = saleAmount - feeAmount;
  const amountToAsk = saleAmount + feeAmount;

  const disclaimerAmountAfterFees = document.getElementById("disclaimerAmountAfterFees");
  const disclaimerAmountToAsk = document.getElementById("disclaimerAmountToAsk");

  disclaimerAmountAfterFees.textContent = "If you invoice for"+ " $" + saleAmount.toFixed(2);
  disclaimerAmountToAsk.textContent = "If you want"+ " $" + saleAmount.toFixed(2);

  displayResult(feeAmount.toFixed(2), amountAfterFees.toFixed(2), amountToAsk.toFixed(2));
}

function displayResult(feeAmount, amountAfterFees, amountToAsk) {
  const resultDiv = document.getElementById("result");
  const feeAmountDiv = document.getElementById("feeAmount");
  const amountAfterFeesDiv = document.getElementById("amountAfterFees");
  const amountToAskDiv = document.getElementById("amountToAsk");

  feeAmountDiv.textContent = "$" + feeAmount;
  amountAfterFeesDiv.textContent = "$" + amountAfterFees;
  amountToAskDiv.textContent = "$" + amountToAsk;


  resultDiv.style.display = "block";
}




