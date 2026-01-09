import { KeenSliderInstance } from "keen-slider";

export function Autoplay(slider: KeenSliderInstance, timeout = 2500) {
  let timer: NodeJS.Timeout;
  let mouseOver = false;

  const clear = () => clearTimeout(timer);
  const next = () => {
    if (!mouseOver) slider.next();
  };

  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clear();
    });
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false;
      timer = setTimeout(next, timeout);
    });

    timer = setTimeout(next, timeout);
  });

  slider.on("dragStarted", clear);

  slider.on("animationEnded", () => {
    timer = setTimeout(next, timeout);
  });

  slider.on("updated", () => {
    timer = setTimeout(next, timeout);
  });
}
