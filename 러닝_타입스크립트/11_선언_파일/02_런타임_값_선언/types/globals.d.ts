declare const version: string;

import { Data } from "./data";

declare global {
  const globallyDeclared: Data;
}

declare const locallyDeclared: Data;
