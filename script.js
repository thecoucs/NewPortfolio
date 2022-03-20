const mouseCircle = document.querySelector(".mouse-circle");
const mouseDot = document.querySelector(".mouse-dot");

//Mouse Circle
const mouseCircleFn = (x, y) => {
  mouseCircle.style.cssText = `top: ${y}px; left: ${x}px; opacity:1`;
  mouseDot.style.cssText = `top: ${y}px; left: ${x}px;opacity:1`;
};
//End of Mouse Circle

// Animated Circles
const circles = document.querySelectorAll(".circle");
const mainImg = document.querySelector(".main-circle img");

let mX = 0;
let mY = 0;

const animateCircles = (e, x, y) => {
  if (x < mX) {
    circles.forEach((circle) => {
      circle.style.top = `100px`;
    });
    mainImg.style.top = `100px`;
  } else if (y > mY) {
    circles.forEach((circle) => {
      circle.style.top = `100px`;
    });
    mainImg.style.top = `100px`;
  }

  if (y < mY) {
  }
  mX = e.clientX;
  mY = e.clientY;
};
// End of Animated Circles

document.body.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  mouseCircleFn(x, y);
});

document.body.addEventListener("mouseleave", () => {
  mouseCircle.style.opacity = "0";
  mouseDot.style.opacity = "0";
});
