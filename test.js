let btns = document.querySelector(".btns").querySelectorAll(".btn"); //ღილაკები
let custom = document.querySelector("#custom-percent"); // პროცენტის ჩასაწერი ინფუთი
let billInput = document.querySelector("#bill-input"); //  ბილის ჩასაწერი ინფუთი
let peopleNum = document.querySelector("#ppl-number"); // ხალხის რაოდენობის ჩასაწერი ინფუთი

// ეს ფუნქცია ღილაკს, დაჭერისას, ანიჭებს active კლასს
btns.forEach((element) => {
  element.addEventListener("click", function () {
    btns.forEach((btns) => btns.classList.remove("active"));

    this.classList.add("active");
    custom.value = "";
  });
});

//ეს ფუნქცია custom პროცენტის ფანჯრის გააქტიურებისას, ღილაკს უშლის active კლასს, ასევე გამოიანგარიშებს თიფს
function customPerc() {
  btns.forEach((btns) => btns.classList.remove("active"));
  if (billInput.value > 0 && peopleNum.value > 0) {
    percent = custom.value;
    tip = (billInput.value * percent) / 100 / peopleNum.value;
    document.querySelector(".amount-result").innerHTML = tip;
  } else if (peopleNum.value == 0) {
    document.querySelector(".error").style.display = "block";
  }
}

//ეს ფუნქცია ამოწმებს ხალხის ოდენობა არის თუ არა შეყვანილი
function checkInput() {
  if (billInput.value == 0 || !billInput.value || custom.value == 0) {
    console.log("egari");
  }
}
// ამ ფონქციას მოაქვს ღილაკის Id, რომელიც ასახავს პროცენტის რაოდენობას და ითვლის თიფს.
function getId(btn) {
  if (billInput.value > 0 && peopleNum.value > 0) {
    percent = btn.id;
    tip = (billInput.value * percent) / 100 / peopleNum.value;
    document.querySelector(".amount-result").innerHTML = tip;
  } else if (peopleNum.value == 0) {
    document.querySelector(".error").style.display = "block";
  }
}
