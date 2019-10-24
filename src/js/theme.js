const TOGGLER_ID = {
  WHITE: 'white-toggler',
  DARK: 'dark-toggler'
}

const html = document.querySelector("html");
const themeTogglers = document.querySelectorAll('input[name="theme-type"]');

document.querySelectorAll('input[name="theme-type"]').forEach(toggler => {
  if (
    toggler.id === TOGGLER_ID.WHITE &&
    html.classList.contains("is-dark")
  ) {
    html.classList.remove("is-dark");
  }


  if (toggler.id === TOGGLER_ID.DARK) {
    html.classList.add("is-dark");
  }

  toggler.addEventListener("click", ({ currentTarget }) => {
    if (
      currentTarget.id === TOGGLER_ID.WHITE &&
      html.classList.contains("is-dark")
    ) {
      html.classList.remove("is-dark");
    }

    if (currentTarget.id === TOGGLER_ID.DARK) {
      html.classList.add("is-dark");
    }
  })
});
