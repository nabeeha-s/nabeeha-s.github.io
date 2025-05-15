const navButtons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".page-section");

navButtons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.dataset.page;

    // Remove active class from all sections & buttons
    sections.forEach(sec => sec.classList.remove("active"));
    navButtons.forEach(btn => btn.classList.remove("active"));

    // Add active to selected section & button
    document.getElementById(target).classList.add("active");
    button.classList.add("active");
  });
});