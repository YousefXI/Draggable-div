const wrapper = document.querySelector("wrapper");
const header = wrapper.querySelector("header");

function onDrag() {
   let getStyle = window.getComputedStyle(wrapper);
   let left = getStyle.left;
   let top = getStyle.top;
   console.log(left, top);
}

header.addEventListener("mousedown", () => {
   header.addEventListener("mousemove", onDrag);
});
