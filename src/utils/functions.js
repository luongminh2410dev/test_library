export const containsMathjax = (target) => {
    return /(?:\$)|(?:\\\()|(?:\\\[)|(?:\\begin\{[a-z]+\*?\})/i.test(target)
}