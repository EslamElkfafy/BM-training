const slides = Array.from(document.getElementsByClassName("slide"));
const dots = Array.from(document.getElementsByClassName("dot"));

const checkDisplay = () => {
  for (let i = 0; i < slides.length; i++) {
    if (!slides[i].classList.contains("hidden")) {
      return i;
    }
  }
};
const handleRightClick = () => {
  const currentIndex = checkDisplay();

  if (currentIndex !== slides.length - 1) {
    slides[currentIndex].classList.add("hidden");
    slides[currentIndex].classList.remove(
      "flex",
      "justify-center",
      "items-center"
    );
    dots[currentIndex].classList.remove("bg-[#2b2c2e]");
    dots[currentIndex].classList.add("bg-[#d4d4d4]");
    slides[currentIndex + 1].classList.remove("hidden");
    slides[currentIndex + 1].classList.add(
      "flex",
      "justify-center",
      "items-center"
    );
    dots[currentIndex + 1].classList.add("bg-[#2b2c2e]");
    dots[currentIndex + 1].classList.remove("bg-[#d4d4d4]");
  }
};

const handleLeftClick = () => {
  const currentIndex = checkDisplay();
  if (currentIndex !== 0) {
    slides[currentIndex].classList.add("hidden");
    slides[currentIndex].classList.remove(
      "flex",
      "justify-center",
      "items-center"
    );
    dots[currentIndex].classList.remove("bg-[#2b2c2e]");
    dots[currentIndex].classList.add("bg-[#d4d4d4]");
    slides[currentIndex - 1].classList.remove("hidden");
    slides[currentIndex - 1].classList.add(
      "flex",
      "justify-center",
      "items-center"
    );
    dots[currentIndex - 1].classList.add("bg-[#2b2c2e]");
    dots[currentIndex - 1].classList.remove("bg-[#d4d4d4]");
  }
};
