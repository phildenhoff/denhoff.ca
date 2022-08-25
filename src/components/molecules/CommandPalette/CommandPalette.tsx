import { useStore } from "@nanostores/solid";
import { createSignal, onMount, onCleanup, Show, createEffect } from "solid-js";

import { command, setCommand } from "../../../stores/command";
import { preventDefault } from "../../../utils/events";

// @ts-ignore
import styles from "./CommandPalette.module.css";

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = createSignal(false);
  const message = useStore(command);

  createEffect(() => {
    if (isOpen()) document.getElementById("command-palette-input")?.focus();
  });

  const keyboardEventHandlers = [
    {
      event: "keydown",
      handler: (e: KeyboardEvent) => {
        if (e.key === "k" && e.metaKey) {
          setIsOpen((prev: boolean) => !prev);
          e.preventDefault();
        }
      },
    },
    {
      event: "keydown",
      handler: (e: KeyboardEvent) => {
        if (e.key === "escape" || e.key === "Escape") {
          setIsOpen(false);
          e.preventDefault();
        }
      },
    },
  ];

  onMount(() => {
    keyboardEventHandlers.forEach((handler) => {
      document.addEventListener(handler.event, handler.handler);
    });
  });

  onCleanup(() => {
    keyboardEventHandlers.forEach((handler) => {
      document.removeEventListener(handler.event, handler.handler);
    });
  });

  return (
    <Show when={isOpen()} fallback={<></>}>
      <div
        class={styles.commandPalette__container}
        onClick={() => setIsOpen(false)}
      >
        <div class={styles.commandPalette} onClick={preventDefault}>
          <input
            id="command-palette-input"
            type="text"
            autofocus
            class={styles.commandPalette__input}
            placeholder="You thought this app would have a command bar? wow"
            value={message()}
            onInput={(e) => setCommand(e.target.value)}
          />
          <button class={styles.btn_close} onClick={() => setIsOpen(false)}>
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class={styles.icon}
            >
              <path
                fill-rule="evenodd"
                d="M2.343 13.657A8 8 0 1113.657 2.343 8 8 0 012.343 13.657zM6.03 4.97a.75.75 0 00-1.06 1.06L6.94 8 4.97 9.97a.75.75 0 101.06 1.06L8 9.06l1.97 1.97a.75.75 0 101.06-1.06L9.06 8l1.97-1.97a.75.75 0 10-1.06-1.06L8 6.94 6.03 4.97z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </Show>
  );
};
