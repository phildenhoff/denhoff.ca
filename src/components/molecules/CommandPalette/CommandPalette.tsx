import React, { useEffect, useState } from "react";

// @ts-ignore
import styles from "./CommandPalette.module.css";

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    keyboardEventHandlers.forEach((handler) => {
      document.addEventListener(handler.event, handler.handler);
    });

    return () => {
      keyboardEventHandlers.forEach((handler) => {
        document.removeEventListener(handler.event, handler.handler);
      });
    };
  }, []);

  return (
    <>
      {isOpen && (
        <div className={styles.commandPalette__container}>
          <div className={styles.commandPalette}>
            <input
              autoFocus
              className={styles.commandPalette__input}
              placeholder="You thought this app would have a command bar? wow"
            />
            <button className={styles.btn_close} onClick={() => setIsOpen(false)}>
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className={styles.icon}>
                <path fillRule="evenodd" d="M2.343 13.657A8 8 0 1113.657 2.343 8 8 0 012.343 13.657zM6.03 4.97a.75.75 0 00-1.06 1.06L6.94 8 4.97 9.97a.75.75 0 101.06 1.06L8 9.06l1.97 1.97a.75.75 0 101.06-1.06L9.06 8l1.97-1.97a.75.75 0 10-1.06-1.06L8 6.94 6.03 4.97z"></path>
            </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
