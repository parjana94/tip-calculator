let btns = document.querySelector(".btns").querySelectorAll(".btn"); //ღილაკები
let custom = document.querySelector("#custom-percent"); // პროცენტის ჩასაწერი ინფუთი
let billInput = document.querySelector("#bill-input"); //  ბილის ჩასაწერი ინფუთი
let peopleNum = document.querySelector("#ppl-number"); // ხალხის რაოდენობის ჩასაწერი ინფუთი
let percent;
let error = document.getElementById("error");
let amountResult = document.querySelector(".amount-result");
let totalResult = document.querySelector(".total-result");

// ეს ფუნქცია ღილაკს, დაჭერისას, ანიჭებს active კლასს
btns.forEach((element) => {
  element.addEventListener("click", function () {
    btns.forEach((btns) => btns.classList.remove("active"));

    this.classList.add("active");
    custom.value = "";
  });
});
//ეს ფუნქცია custom პროცენტის ფანჯრის გააქტიურებისას, ღილაკს უშლის active კლასს.
function customPerc() {
  btns.forEach((btns) => btns.classList.remove("active"));
}
// ამ ფონქციას მოაქვს ღილაკის Id, რომელიც ასახავს პროცენტის რაოდენობას
for (let index = 0; index < btns.length; index++) {
  btns[index].onclick = function () {
    percent = this.id;
    return percent;
  };
}
// error მესიჯი
function errorMesage() {
  if (billInput.value > 0 && peopleNum.value == 0) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
}
// reset ღილაკი
function reset() {
  if (billInput.value > 0 && peopleNum.value > 0 && percent > 0) {
    document.getElementById("resetBtn").style.backgroundColor =
      "hsla(172, 67%, 46%, 1)";
  }
}

// კალკულაცია
function calculation() {
  if (billInput.value > 0 && peopleNum.value > 0 && !custom.value) {
    tip = (billInput.value * percent) / 100 / peopleNum.value;
    amountResult.innerHTML = tip.toFixed(2);
    total = billInput.value / peopleNum.value + tip;
    totalResult.innerHTML = total.toFixed(2);
  } else if (billInput.value > 0 && custom.value > 0 && peopleNum.value > 0) {
    percent = custom.value;
    tip = (billInput.value * percent) / 100 / peopleNum.value;
    amountResult.innerHTML = tip.toFixed(2);
    total = billInput.value / peopleNum.value + tip;
    totalResult.innerHTML = total.toFixed(2);
    console.log(percent);
  }
  errorMesage();
  reset();
}
