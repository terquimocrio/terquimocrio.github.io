let resize = false;

document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
  if (document.querySelector(".nav-menu").classList.contains("show")) {
    document.querySelector(
      ".nav-menu"
    ).style.height = `${document.body.clientHeight}px`;
  }
  else{
    document.querySelector(
      ".nav-menu"
    ).style.height = `100%`;
  }
});

ScrollReveal().reveal(".container", { delay: 100 });
ScrollReveal().reveal(".home-presentation", { delay: 100 });
ScrollReveal().reveal(".about-me", { delay: 100 });
ScrollReveal().reveal(".about-me-illustration", { delay: 100 });
ScrollReveal().reveal(".projects", { delay: 500 });
ScrollReveal().reveal(".footer-contact", { delay: 100 });

const name = document.getElementById("name");
const mail = document.getElementById("mail");
const message = document.getElementById("message");

const sendMail = () => {
  var link =
    "mailto:diego_25mj@hotmail.com" +
    `?cc=${mail.value}` +
    "&subject=" +
    encodeURIComponent(`portfolio email from ${name.value}`) +
    "&body=" +
    encodeURIComponent(`${message.value}`);
  console.log(link);
  console.log(mail.value);
  window.location.href = link;
};

const nav = document.querySelector(".nav-main");
const arr = [...nav.getElementsByTagName("a")];

arr.forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
    document.querySelector(
      ".nav-menu"
    ).style.height = `100%`;
  });
});

window.addEventListener("resize", () => {
  console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
  if(document.body.clientWidth >= 700 && resize === true && !document.querySelector(".nav-menu").classList.contains("show")){
    document.querySelector(".nav-menu").classList.toggle("show");
    resize = false;
  }else{
    resize = true;
  }
})
