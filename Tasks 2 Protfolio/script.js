const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 10);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};

window.onscroll = () => {
  menu.remove.toggle("bx-x");
  navlist.remove.toggle("active");
};
function openSocialMedia(url) {
  window.open(url, "_blank");
}

function downloadCV() {
  var cvUrl = "/Image/Resume.pdf";

  var downloadLink = document.createElement("a");
  downloadLink.href = cvUrl;
  downloadLink.download = "Raja's Resume.pdf";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}
