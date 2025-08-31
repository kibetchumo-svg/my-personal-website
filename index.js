// Example: Toggle About Me section
const aboutSection = document.getElementById("about");

const toggleBtn = document.createElement("button");
toggleBtn.innerText = "Toggle About Me";
document.body.insertBefore(toggleBtn, aboutSection);

toggleBtn.addEventListener("click", () => {
  if (aboutSection.style.display === "none") {
    aboutSection.style.display = "block";
  } else {
    aboutSection.style.display = "none";
  }
});
