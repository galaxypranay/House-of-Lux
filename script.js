// House of Lux — interactions

(function () {
  const scene = document.getElementById("scene");
  const stack = document.getElementById("stack");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (scene && stack && !reduceMotion) {
    const maxTilt = 10; // degrees

    function applyTilt(px, py) {
      // px, py are 0..1 across the scene
      const rotY = (px - 0.5) * maxTilt * 2;
      const rotX = (0.5 - py) * maxTilt * 2;
      stack.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    }

    if (window.matchMedia("(hover: hover)").matches) {
      scene.addEventListener("mousemove", (e) => {
        const rect = scene.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        applyTilt(px, py);
      });
      scene.addEventListener("mouseleave", () => {
        stack.style.transform = "rotateX(0deg) rotateY(0deg)";
      });
    } else {
      // No hover (touch devices) — gentle idle drift
      let t = 0;
      setInterval(() => {
        t += 0.015;
        const rotY = Math.sin(t) * 5;
        const rotX = Math.cos(t * 0.8) * 3;
        stack.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      }, 50);
    }
  }

  // Order form -> WhatsApp deep link
  const form = document.getElementById("orderForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.name.value.trim();
      const phone = form.phone.value.trim();
      const interest = form.interest.value;
      const message = form.message.value.trim();

      const lines = [
        `Hi House of Lux, I'd like to place an order.`,
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Looking for: ${interest}`,
      ];
      if (message) lines.push(`Details: ${message}`);

      const text = encodeURIComponent(lines.join("\n"));
      const waNumber = "919060968792";

      window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank", "noopener");
    });
  }
})();
