import {exposeInMainWorld} from './exposeInMainWorld';

// Export for types in contracts.d.ts
export const {versions} = process;

exposeInMainWorld('versions', versions);
