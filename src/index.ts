import "../node_modules/bootstrap/dist/css/bootstrap.css";

import { nextBtn, previousBtn, carouselItems } from "./elements";
let length = 0;
let active = 0;
let length2 = 0;
let topildi = false;

function searchActive() {
  length = 0;
  carouselItems.forEach((item) => {
    if (item.className === "carousel-item active") {
      active = length;
    }
    length++;
  });
}

previousBtn.addEventListener("click", () => {
  searchActive();
  length = 0;
  carouselItems.forEach((item) => {
    if (length === active - 1) {
      item.classList.add("active");
    }
    if (length === active) {
      item.classList.remove("active");
    }
    length++;
  });
  searchActive();
});

nextBtn.addEventListener("click", () => {
  searchActive();
  length = 0;
  carouselItems.forEach((item) => {
    if (length === active + 1) {
      item.classList.add("active");
    }
    if (length === active) {
      item.classList.remove("active");
    }
    length++;
  });
  searchActive();
});

setInterval(() => {
  length2 = 0;
  carouselItems.forEach((item) => {
    setInterval(() => {
      if (length2 === active) {
        item.classList.remove("active");
        topildi = true;
      }
      if (length2 > active && length2 < active + 2 && topildi) {
        item.classList.add("active");
        topildi = false;
        searchActive();
      }
      length2++;
    }, 1500);
  });
}, 3000);
