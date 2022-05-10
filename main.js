const video = document.querySelector(".bg-video");
const circle = document.getElementById("circle");
const articles = document.querySelectorAll("article");

video.playbackRate = 0.2;

for (let i of articles) {
  i.addEventListener("mouseenter", () => {
    circle.style.animationPlayState = "paused";
  });

  i.addEventListener("mouseleave", () => {
    circle.style.animationPlayState = "running";
  });
}
