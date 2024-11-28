document.addEventListener("DOMContentLoaded", () => {
  const dots = document.querySelectorAll(".dot");
  const tooltip = document.getElementById("tooltip");

  dots.forEach((dot) => {
    dot.addEventListener("mouseover", (e) => {
      const link = dot.getAttribute("data-link");
      tooltip.textContent = link;
      tooltip.style.opacity = "1";
      tooltip.style.transform = "translateY(0)";

      // Position the tooltip above the dot
      const rect = dot.getBoundingClientRect();
      tooltip.style.left =
        rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + "px";
      tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + "px";
    });

    dot.addEventListener("mouseout", () => {
      tooltip.style.opacity = "0";
      tooltip.style.transform = "translateY(10px)";
    });

    dot.addEventListener("click", () => {
      // Add pulse animation
      dot.style.animation = "pulse 0.5s";
      setTimeout(() => {
        dot.style.animation = "";
      }, 500);
    });
  });
});
