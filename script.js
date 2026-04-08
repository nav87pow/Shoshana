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



const openJoinModal = document.getElementById('openJoinModal');
const joinModal = document.getElementById('joinModal');
const closeJoinModal = document.getElementById('closeJoinModal');

if (openJoinModal && joinModal && closeJoinModal) {
  openJoinModal.addEventListener('click', function (event) {
    event.preventDefault();
    joinModal.classList.remove('hidden');
    joinModal.setAttribute('aria-hidden', 'false');
  });

  closeJoinModal.addEventListener('click', function () {
    joinModal.classList.add('hidden');
    joinModal.setAttribute('aria-hidden', 'true');
  });

  joinModal.addEventListener('click', function (event) {
    if (event.target === joinModal) {
      joinModal.classList.add('hidden');
      joinModal.setAttribute('aria-hidden', 'true');
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !joinModal.classList.contains('hidden')) {
      joinModal.classList.add('hidden');
      joinModal.setAttribute('aria-hidden', 'true');
    }
  });
}