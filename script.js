const wrapper = document.querySelector(".wrapper"),
   header = wrapper.querySelector(".header");

header.addEventListener("mousedown", () => {
   header.addEventListener("mousemove", onDrag);
});
