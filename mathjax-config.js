// MathJax configuration for LaTeX rendering
window.MathJax = {
  tex: {
    inlineMath: [['$', '$']],
    displayMath: [['$$', '$$']]
  },
  startup: {
    pageReady: () => {
      return MathJax.typesetPromise();
    }
  }
};

// Load MathJax library
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
script.async = true;
document.head.appendChild(script);
