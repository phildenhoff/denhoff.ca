import { persistentAtom } from '@nanostores/persistent';

export const command = persistentAtom<string>('commandText', '');
