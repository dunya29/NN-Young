$(".item-accordion__header").on("click", (function() {
    $(this).toggleClass("open").siblings(".item-accordion__content").slideToggle()
}))
$('.js-anchor').click(function () {
    var elementClick = $(this).attr('href');
    var destination = $(elementClick).offset().top;
    $('html,body').animate({ scrollTop: destination}, 1000);
    return false;
});
let animate = document.querySelectorAll(".animate");
if (animate) {
    window.addEventListener("scroll", () => {
        let windowTop = window.pageYOffset || document.documentElement.scrollTop;
        animate.forEach(item => {
          if (!item.classList.contains("animated")) {
            let animation = item.getAttribute("data-animation");
            let itemTop = item.getBoundingClientRect().top + windowTop;
            let itemPoint = Math.abs(window.innerHeight - item.offsetHeight * 0.5);
            if (item.offsetHeight === undefined) {
              let itemParent = item.parentNode;
              itemPoint = window.innerHeight - itemParent.offsetHeight / 2;
            }
            if (windowTop > itemTop - itemPoint) {
              item.style.opacity = "1"
              item.classList.add(animation);
              item.classList.add("animated");
            } 
          }
        })
    })
}