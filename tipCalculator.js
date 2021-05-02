document.getElementById("totalTip").style.visibility = "hidden";




function calculateTip() {

    let billAmt = document.getElementById("billamt").value;
    let quality = document.getElementById("serviceQual").value;
    let people = document.getElementById("peopleamt").value;

    if (billAmt === "" || quality == 0) {
        alert("Please enter values");
        return;
    }

    if (people === "" || people <= 1) {
        people = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    let totalTip = (billAmt * quality) / people;
    totalTip = Math.round(totalTip * 100) / 100;
    totalTip = totalTip.toFixed(2);
    document.getElementById("tip").innerHTML = totalTip;
    document.getElementById("totalTip").style.visibility = "visible";

}

document.getElementById("calculate").onclick = function () {
    calculateTip();

};