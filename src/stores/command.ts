import { persistentAtom } from '@nanostores/persistent';
import { action } from "nanostores";

export const command = persistentAtom<string>("commandText", "");
export const setCommand = action(
  command,
  "set",
  (store, newMsg: string = "") => {
    store.set(newMsg);
  }
);