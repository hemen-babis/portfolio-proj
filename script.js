const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
const sections = document.querySelectorAll("main section[id]");
const revealItems = document.querySelectorAll(".reveal");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const setActiveLink = (id) => {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (!targetSection) {
      return;
    }

    event.preventDefault();

    const headerOffset = header ? header.offsetHeight : 0;
    const scrollTarget = targetSection.offsetTop - headerOffset + 2;

    window.scrollTo({
      top: scrollTarget,
      behavior: "smooth"
    });

    navMenu?.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const id = entry.target.getAttribute("id");
      const activeLink = document.querySelector(`.nav-menu a[href="#${id}"]`);

      if (activeLink) {
        setActiveLink(id);
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: "-25% 0px -55% 0px"
  }
);

sections.forEach((section) => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.16
  }
);

if (prefersReducedMotion.matches) {
  revealItems.forEach((item) => item.classList.add("visible"));
} else {
  revealItems.forEach((item) => revealObserver.observe(item));
}

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    formStatus.className = "form-status";

    if (!name || !email || !message) {
      formStatus.textContent = "Please complete all fields before sending.";
      formStatus.classList.add("error");
      return;
    }

    if (name.length < 2) {
      formStatus.textContent = "Please enter your full name.";
      formStatus.classList.add("error");
      return;
    }

    if (!emailPattern.test(email)) {
      formStatus.textContent = "Please enter a valid email address.";
      formStatus.classList.add("error");
      return;
    }

    if (message.length < 24) {
      formStatus.textContent = "Please include a bit more detail in your message.";
      formStatus.classList.add("error");
      return;
    }

    formStatus.textContent = "Message received. Thanks for reaching out.";
    formStatus.classList.add("success");
    contactForm.reset();
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 980) {
    navMenu?.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});
