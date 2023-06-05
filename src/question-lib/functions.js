export const containsMathjax = (target) => {
    return /(?:\$)|(?:\\\()|(?:\\\[)|(?:\\begin\{[a-z]+\*?\})/i.test(target)
}

const mathjaxConfig = {
    messageStyle: 'none',
    extensions: ['tex2jax.js'],
    'HTML-CSS': {
        fonts: ["STIX-Web"],
        linebreaks: { automatic: true },
        adaptiveCSS: true,
    },
    displayAlign: "left",
    jax: ['input/TeX', 'output/HTML-CSS'],
    tex2jax: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        processEscapes: true,
    },
    TeX: {
        extensions: ['AMSmath.js', 'AMSsymbols.js', 'noErrors.js', 'noUndefined.js'],
    }
};
// const mathJax = `
//     <script type="text/x-mathjax-config">
//         MathJax.Hub.Config(${JSON.stringify(mathjaxConfig)});
//     </script>
//     <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js?config=TeX-AMS-MML_CHTML"></script>
// `;

const mathJax = `
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
`
export const configHtml = (content, color) => {
    const styles = `
        <style>
            html, body {
                border: 0px;
                margin: 0px;
                padding: 0px;
                overflow: hidden;
            }
            .formula{
                font-family: Arial, Helvetica, sans-serif;
                font-size: 15px;
            }
            p, span, a, tr, td, strong {
                color: ${color};
            }
            img{
                max-width: 100%;
                height: auto;
            }
        </style>
    `

    return `
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        </head>
        ${styles}
        <body>
            <div class="formula">
                ${content}
            </div>
            ${containsMathjax(content) ? mathJax : ''} 
        </body>
    `;
}