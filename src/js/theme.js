const html = document.querySelector("html");

document.querySelectorAll('input[name="theme-type"]').forEach(toggler =>
  toggler.addEventListener("click", ({ currentTarget }) => {
    if (
      currentTarget.id === "white-toggler" &&
      html.classList.contains("is-dark")
    ) {
      html.classList.remove("is-dark");
    }

    if (currentTarget.id === "dark-toggler") {
      html.classList.add("is-dark");
    }
  })
);
