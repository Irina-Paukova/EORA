let nubex = document.getElementById("topNubex");
let anchor = document.querySelector(".title.title1");

nubex.addEventListener("click", () =>
  anchor.scrollIntoView(false, { behavior: "smooth" })
);
window.addEventListener(
  "scroll",
  () =>
    (nubex.style.opacity =
      window.scrollY / (document.body.scrollHeight - window.innerHeight))
);
