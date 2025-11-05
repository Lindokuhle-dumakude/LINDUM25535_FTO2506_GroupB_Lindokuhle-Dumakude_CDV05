document.querySelector("#contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for reaching out! I'll get back to you soon.");
  e.target.reset();
});
