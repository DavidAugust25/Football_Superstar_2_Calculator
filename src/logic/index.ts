document.addEventListener("DOMContentLoaded", () => {
  const statInputs = document.querySelectorAll<HTMLInputElement>(".statInput");

  statInputs.forEach((input) => {
    input.addEventListener("input", () => {
      const min = input.hasAttribute("min") ? parseInt(input.min, 10) : null;
      const max = input.hasAttribute("max") ? parseInt(input.max, 10) : null;
      
      let value = parseInt(input.value, 10);

      if (isNaN(value)) {
        return; 
      }

      if (max !== null && value > max) {
        input.value = max.toString();
      }

      if (min !== null && value < min) {
        input.value = min.toString();
      }
    });
  });
});