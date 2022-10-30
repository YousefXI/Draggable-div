const wrapper = document.querySelector(".wrapper"),
   header = wrapper.querySelector(".header");

function onDrag() {
   let getStyle = window.getComputedStyle(wrapper);
   let left = getStyle.left;
   let top = getStyle.top;
   console.log(typeof left, typeof top);
}

header.addEventListener("mousedown", () => {
   header.addEventListener("mousemove", onDrag);
});
