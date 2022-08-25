import { MouseEventHandler } from "react";

export const preventDefault: MouseEventHandler<HTMLElement> = (event) => {
  event.stopPropagation();
  event.preventDefault();
};
