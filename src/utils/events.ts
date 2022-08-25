import { JSX } from "solid-js";

export const preventDefault: JSX.EventHandlerUnion<
  HTMLDivElement,
  MouseEvent
> = (event) => {
  event.stopPropagation();
  event.preventDefault();
};
