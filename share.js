(() => {
  "use strict";

  const btn = document.getElementById("share-btn");
  const toast = document.getElementById("share-toast");
  if (!btn) return;

  const CANONICAL = "https://net13200.github.io/SugiGames/";
  const url = location.protocol.startsWith("http") ? location.origin + location.pathname : CANONICAL;
  const data = {
    title: "SugiGames",
    text: "Calm, colorful games for curious kids.",
    url,
  };

  let toastTimer;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // Older browsers: copy through a hidden text field.
      const field = document.createElement("textarea");
      field.value = url;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      const ok = document.execCommand("copy");
      field.remove();
      if (!ok) {
        showToast(url);
        return;
      }
    }
    showToast("Link copied!");
  }

  btn.addEventListener("click", async () => {
    if (navigator.share && (!navigator.canShare || navigator.canShare(data))) {
      try {
        await navigator.share(data);
        return;
      } catch (err) {
        if (err && err.name === "AbortError") return; // closed the share sheet
      }
    }
    copyLink();
  });
})();
