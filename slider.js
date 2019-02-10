const h1Tittle = document.querySelector(".tittleOfSlide");
const divSlide = document.querySelector(".slide img");
const span = document.querySelector("span");

const slidesImage = [
  "CSS3logopng400.png",
  "html5logo400.png",
  "jsLogo400.png",
  "jqueryLogo400.png",
  "react400.png"
];
const tittleSlides = [
  "CSS w wersji 3",
  "HTML w wersji 5",
  "JavaScript ES6",
  "Biblioteka jQuery",
  "Biblioteka React"
];

const slider = () => {
  tittleSlides.forEach((item, index) => {
    setTimeout(() => {
      h1Tittle.textContent = tittleSlides[index];
      span.textContent = `${index + 1}/6`;
    }, 10000 * index);
  });

  slidesImage.forEach((item, index) => {
    setTimeout(() => {
      divSlide.src = `img/${slidesImage[index]}`;
    }, 10000 * index);
  });

  setTimeout(slider, 50000);
};

slider();
