document.getElementById("container").onchange = function(){
	var bill = Number(document.getElementById("bill-total").value);
	var tipPercent = document.getElementById("tip-input").value;
	var split = document.getElementById("split-input").value;
	var tipValue = bill * (tipPercent / 100);
	var newBillEach = (bill + tipValue) / split;
	var tipEach = tipValue / split;
	
	
document.getElementById("tip-output").innerHTML = tipPercent + "%";
document.getElementById("split-output").innerHTML = split;
document.getElementById("newBill").innerHTML = "$" + newBillEach.toFixed(2);
document.getElementById("tipEach").innerHTML = "$" + tipEach.toFixed(2);
		
}