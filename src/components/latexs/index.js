export { default as FracView } from './frac'
export { default as NTimes } from './ntimes'
export { default as InputText } from './inputText'

// GET SIMPLE DATA (NUMBER) ON LATEX
export const regex = /\\(\w+)+{(\d+)}{(\d+)?}/;

// GET PARENT OF LATEX
export const getParentRegex = /\\(\w+)(?:\{.*\})?/;