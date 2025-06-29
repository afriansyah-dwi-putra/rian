// Toggling Skill Tabs

const tabs = document.querySelectorAll("[data-target]");
const tabContent = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContent.forEach((tabContents) => {
      tabContents.classList.remove("skills-active");
    });

    target.classList.add("skills-active");

    tabs.forEach((tab) => {
      tab.classList.remove("skills-active");
    });

    tab.classList.add("skills-active");
  });
});

//Mix it up Sorting

let mixerPortfolio = mixitup(".work-container", {
  selectors: {
    target: ".work-card",
  },
  animation: {
    duration: 300,
  },
});

// Active link changing

const linkWork = document.querySelectorAll(".work-item");

function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}
linkWork.forEach((l) => l.addEventListener("click", activeWork));

//Portfolio Popup

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("work-button")) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolio-popup").classList.toggle("open");
}

document.querySelector(".portfolio-popup-close").addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".work-img").src;
  document.querySelector(".portfolio-popup-subtitle span").innerHTML = portfolioItem.querySelector(".work-title").innerHTML;
  document.querySelector(".portfolio-popup-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}

//Services Popup
const modalViews = document.querySelectorAll(".services-modal");
const modelBtns = document.querySelectorAll(".services-button");
const modalCloses = document.querySelectorAll(".services-modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modelBtns.forEach((modelBtn, i) => {
  modelBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

//Swiper Testimonial

let swiper = new Swiper(".testimonials-container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

// Input Animation

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// Scroll Section Active Link

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active-link");
    } else {
      document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active-link");
    }
  });
}

// Activating Sidebar

const navMenu = document.getElementById("sidebar");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-sidebar");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-sidebar");
  });
}

// Tutup sidebar saat item di dalamnya diklik
document.querySelectorAll("#sidebar a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-sidebar");
  });
});

// Button Share
const shareBtn = document.getElementById("shareBtn");
const dropdown = document.getElementById("shareDropdown");
const pageUrl = encodeURIComponent(window.location.href);
const pageTitle = encodeURIComponent(document.title);

// Toggle dropdown
shareBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // Biar tidak langsung tertutup
  dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
});

// Tutup dropdown saat klik di luar
window.addEventListener("click", () => {
  dropdown.style.display = "none";
});

// Set link share
document.getElementById("shareWhatsApp").href = `https://wa.me/?text=${pageTitle}%20${pageUrl}`;
document.getElementById("shareFacebook").href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
document.getElementById("shareTwitter").href = `https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageUrl}`;
document.getElementById("shareLinkedIn").href = `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;

// button write me
document.querySelectorAll(".contact-card .contact-button").forEach((button) => {
  button.addEventListener("click", function () {
    const link = this.closest(".contact-card").getAttribute("data-link");
    if (link) {
      window.open(link, "_blank");
    }
  });
});

//  animasi ketika klik menu home dan back to top
document.addEventListener("DOMContentLoaded", function () {
  const menuHome = document.querySelector('a[href="#home"]');
  const toTop = document.getElementById("to-top");
  const homeSection = document.querySelector("#home");

  const container = document.querySelector(".home-data-container");
  const homeSocial = document.querySelector(".home-social");
  const navList = document.querySelector(".nav-list");
  const shareBtn = document.getElementById("shareBtn");

  // Tampilkan tombol to-top saat scroll
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      toTop.style.display = "flex";
      toTop.style.alignItems = "center";
      toTop.style.justifyContent = "center";
    } else {
      toTop.style.display = "none";
    }
  });

  function retriggerAnimation(element, animationClass) {
    if (element) {
      element.classList.remove("animate__animated", animationClass);
      void element.offsetWidth;
      element.classList.add("animate__animated", animationClass);
    }
  }

  function scrollToHomeAndAnimate() {
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        retriggerAnimation(container, "animate__backInDown");
        retriggerAnimation(homeSocial, "animate__pulse");
        retriggerAnimation(navList, "animate__pulse");
        retriggerAnimation(shareBtn, "animate__pulse");
      }, 500);
    }
  }

  if (menuHome) {
    menuHome.addEventListener("click", function (e) {
      e.preventDefault();
      history.pushState(null, null, "#home");
      scrollToHomeAndAnimate();
    });
  }

  if (toTop) {
    toTop.addEventListener("click", function (e) {
      e.preventDefault();
      scrollToHomeAndAnimate();
    });
  }
});

// kirim pesan ke spreadsheets
const scriptURL = "https://script.google.com/macros/s/AKfycbxfaloCukbOEFFYvHvF6xZmuMBoP3OC7u9rbfwPOY9wl9k-QtaTxIKMg0evN7VT8UUvxg/exec";
const form = document.getElementById("contact-form");
const alertBox = document.getElementById("alert-box");
const alertMessage = document.getElementById("alert-message");
const submitButton = form.querySelector('button[type="submit"]');
const phoneInput = form.querySelector('input[name="phone"]');

phoneInput.addEventListener("input", (e) => {
  const originalValue = e.target.value;
  const filteredValue = originalValue.replace(/[^0-9+\-\s]/g, "");

  if (originalValue !== filteredValue) {
    alert("Your phone number is invalid");
  }

  e.target.value = filteredValue;
});
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Disable tombol supaya gak bisa klik lagi
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      alertMessage.textContent = "Thank you! We have received your message.";
      alertBox.style.backgroundColor = "#d4edda"; // hijau sukses
      alertBox.style.color = "#155724";
      alertBox.style.borderColor = "#c3e6cb";
      alertBox.classList.remove("hidden");
      form.reset();
    })
    .catch((error) => {
      alertMessage.textContent = "Error submitting form: " + error.message;
      alertBox.style.backgroundColor = "#f8d7da"; // merah error
      alertBox.style.color = "#721c24";
      alertBox.style.borderColor = "#f5c6cb";
      alertBox.classList.remove("hidden");
    })
    .finally(() => {
      // Enable tombol kembali, ubah text lagi
      submitButton.disabled = false;
      submitButton.innerHTML = `<i class="uil uil-navigator button-icon"></i>Send Message`;
    });
});

function closeAlert() {
  alertBox.classList.add("hidden");
}
