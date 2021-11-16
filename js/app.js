const filter_btns = document.querySelectorAll(".filter-btn");
//console.log(filter_btns);

filter_btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    const filter_btns = document.querySelectorAll(".filter-btn");
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;

    $(".grid").isotope({ filter: filterValue });
  })
);


$('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
  transitionDuration: "0.6s"
});
