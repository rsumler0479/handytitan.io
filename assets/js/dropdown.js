function highlightLink(selectedLink) {
  // Remove 'selected' class from all links
  const links = document.querySelectorAll(".gal_style");
  links.forEach((link) => link.classList.remove("selected"));

  // Add 'selected' class to the clicked link
  selectedLink.classList.add("selected");
}
