const sections = document.querySelectorAll("section");
const aside = document.getElementById("scrollText");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const text = entry.target.getAttribute("data-text");
        if (text) {
          aside.textContent = text;
        }
      }
    });
  },
  {
    threshold: 0.5, // מתי נחשב "עברנו"
  }
);

sections.forEach((section) => {
  observer.observe(section);
});


