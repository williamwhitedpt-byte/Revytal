(() => {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  const progress = document.querySelector(".scroll-progress");
  const toast = document.querySelector(".toast");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const closeNav = () => {
    if (!nav || !toggle) return;
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeNav();
    });
    document.addEventListener("click", (event) => {
      if (!nav.contains(event.target)) closeNav();
    });
  }

  const updateProgress = () => {
    if (!progress) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? window.scrollY / max : 0;
    progress.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
  };
  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);

  if (!reduced) {
    document.documentElement.classList.add("motion-ready");
    const revealItems = Array.from(document.querySelectorAll(".reveal"));
    revealItems.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.95) {
        el.classList.add("is-visible");
      }
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });
    revealItems.filter((el) => !el.classList.contains("is-visible")).forEach((el) => observer.observe(el));
  }

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
  };

  document.querySelectorAll("[data-demo-action]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const message = button.getAttribute("data-demo-action") || "This is a team-review placeholder.";
      showToast(message);
      const status = document.querySelector("[data-demo-status]");
      if (status) status.textContent = message;
    });
  });

  document.querySelectorAll("form[data-placeholder-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      showToast("Placeholder form noted. Swap this for the live form when it is ready.");
      form.reset();
    });
  });

  const formatDollars = (value) => `$${Math.max(0, value).toLocaleString("en-US")}`;
  const monthlyEstimate = (dailyRecommendations) => {
    const workDays = 20;
    const followThrough = 0.4;
    const clinicRevenuePerOrder = 7;
    const raw = dailyRecommendations * workDays * followThrough * clinicRevenuePerOrder;
    return Math.round(raw / 10) * 10;
  };

  const burstConfetti = (container) => {
    if (!container || reduced) return;
    container.replaceChildren();
    const colors = ["#ff6b4a", "#16215b", "#ddefea", "#c8d0e3"];
    for (let index = 0; index < 18; index += 1) {
      const piece = document.createElement("span");
      const angle = (Math.PI * 2 * index) / 18;
      const distance = 52 + Math.random() * 54;
      piece.style.setProperty("--x", `${68 + Math.random() * 20}%`);
      piece.style.setProperty("--y", `${66 + Math.random() * 16}%`);
      piece.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
      piece.style.setProperty("--dy", `${Math.sin(angle) * distance - 34}px`);
      piece.style.setProperty("--r", `${Math.random() * 180}deg`);
      piece.style.setProperty("--c", colors[index % colors.length]);
      container.appendChild(piece);
    }
    window.setTimeout(() => container.replaceChildren(), 950);
  };

  document.querySelectorAll("[data-revenue-calculator]").forEach((calculator) => {
    const input = calculator.querySelector("[data-recs-input]");
    const recsValue = calculator.querySelector("[data-recs-value]");
    const monthlyValue = calculator.querySelector("[data-monthly-value]");
    const confetti = calculator.querySelector("[data-confetti]");
    if (!input || !recsValue || !monthlyValue) return;

    let spinTimer;
    let settleTimer;
    const settle = (finalValue) => {
      monthlyValue.classList.remove("is-spinning");
      monthlyValue.textContent = formatDollars(finalValue);
      monthlyValue.classList.remove("is-pop");
      monthlyValue.offsetWidth;
      monthlyValue.classList.add("is-pop");
      burstConfetti(confetti);
    };

    const updateCalculator = () => {
      const daily = Number(input.value);
      const finalValue = monthlyEstimate(daily);
      recsValue.textContent = String(daily);
      window.clearInterval(spinTimer);
      window.clearTimeout(settleTimer);
      monthlyValue.classList.remove("is-pop");

      if (reduced) {
        monthlyValue.textContent = formatDollars(finalValue);
        return;
      }

      monthlyValue.classList.add("is-spinning");
      spinTimer = window.setInterval(() => {
        const low = Math.max(10, finalValue * 0.55);
        const high = Math.max(low + 40, finalValue * 1.22);
        const spinValue = Math.round((low + Math.random() * (high - low)) / 10) * 10;
        monthlyValue.textContent = formatDollars(spinValue);
      }, 55);
      settleTimer = window.setTimeout(() => {
        window.clearInterval(spinTimer);
        settle(finalValue);
      }, 520);
    };

    input.addEventListener("input", updateCalculator);
    recsValue.textContent = input.value;
    monthlyValue.textContent = formatDollars(monthlyEstimate(Number(input.value)));
  });

  document.querySelectorAll("[data-review-board]").forEach((board) => {
    const filters = Array.from(board.querySelectorAll("[data-review-filter]"));
    const cards = Array.from(board.querySelectorAll("[data-review-card]"));
    filters.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-review-filter");
        filters.forEach((item) => {
          const active = item === button;
          item.classList.toggle("is-active", active);
          item.setAttribute("aria-pressed", String(active));
        });
        cards.forEach((card) => {
          const tags = (card.getAttribute("data-review-tags") || "").split(/\s+/);
          const match = filter === "all" || tags.includes(filter);
          card.dataset.hidden = match ? "false" : "true";
        });
      });
    });
  });

  document.querySelectorAll(".review-detail-toggle").forEach((button) => {
    const details = button.nextElementSibling;
    if (!details) return;
    button.addEventListener("click", () => {
      const open = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(open));
      details.hidden = !open;
    });
  });

  const lightbox = document.querySelector("[data-review-lightbox]");
  if (lightbox) {
    const image = lightbox.querySelector("[data-lightbox-target]");
    const heading = lightbox.querySelector("[data-lightbox-heading]");
    const closeButton = lightbox.querySelector("[data-lightbox-close]");
    document.querySelectorAll("[data-lightbox-image]").forEach((button) => {
      button.addEventListener("click", () => {
        const title = button.getAttribute("data-lightbox-title") || "Page screenshot";
        if (heading) heading.textContent = title;
        if (image) {
          image.src = button.getAttribute("data-lightbox-image");
          image.alt = `${title} screenshot`;
        }
        if (typeof lightbox.showModal === "function") lightbox.showModal();
      });
    });
    closeButton?.addEventListener("click", () => lightbox.close());
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) lightbox.close();
    });
  }
})();
