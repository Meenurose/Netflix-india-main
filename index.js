faqs = document.querySelectorAll(".faq");
faqs.forEach((name, index, array) => {
  name.addEventListener("click", () => {
    var disVar=  document.querySelectorAll(".disable")[index];
    disVar.classList.toggle("dis");
    disVar.classList.toggle("answer");
    document.querySelectorAll(".ad")[index].classList.toggle("add");
    document.querySelectorAll(".cl")[index].classList.toggle("close");



});
})

