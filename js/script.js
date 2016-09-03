var form = document.querySelector(".searching-form form"),
  buttonSearch = document.querySelector(".search-btn"),
  buttonSubmit = document.querySelector(".index-submit"),
  dateFirst = document.querySelector("#first-day"),
  dateLast = document.querySelector("#last-day"),
  kids = document.querySelector("#children"),
  adults = document.querySelector("#adults");
buttonSearch.addEventListener("click", function (element) {
  "use strict";
  element.preventDefault();
  form.classList.toggle("form-appear");
});
buttonSubmit.addEventListener("click", function (element) {
  "use strict";
  if (!dateFirst.value || !dateLast.value || !kids.value || !adults.value) {
    alert("Проверьте форму");
  }
});

localStorage.setItem("children-nubmer", kids.value);
localStorage.setItem("adults-nubmer", adults.value);

