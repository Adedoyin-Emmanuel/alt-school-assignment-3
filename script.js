const harmurger = document.getElementById("harmburger");
const mobileNav = document.getElementById("mobile-nav");

var flag = false;

const checkFlag = () => {
  if (flag) {
    mobileNav.style.display = "flex";
  } else {
    mobileNav.style.display = "none";
  }
};

harmurger.addEventListener("click", (e) => {
  flag = !flag;
  checkFlag();
});
