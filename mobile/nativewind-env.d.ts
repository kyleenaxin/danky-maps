/// <reference types="nativewind/types" />

// TypeScript has no knowledge of CSS files; NativeWind consumes global.css
// through Metro, so the import exists only for its side effect.
declare module '*.css';
