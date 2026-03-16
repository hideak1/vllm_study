// MathJax v3 configuration for rendering LaTeX in Jupyter notebooks
// This must load BEFORE MathJax v3 script

window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"], ["$", "$"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true,
    tags: "ams"
  },
  options: {
    // Process math in notebook cells
    skipHtmlTags: ["script", "noscript", "style", "textarea", "pre", "code"],
    ignoreHtmlClass: "tex2jax_ignore",
    processHtmlClass: "tex2jax_process|arithmatex|md-content|jp-Cell"
  },
  startup: {
    ready: function() {
      MathJax.startup.defaultReady();
      // Re-typeset after page load for notebook content
      setTimeout(function() { MathJax.typesetPromise(); }, 500);
      setTimeout(function() { MathJax.typesetPromise(); }, 2000);
    }
  }
};

// Stub out MathJax v2 Hub API to prevent errors from nbconvert's injected config
// nbconvert injects MathJax.Hub.Config() calls which fail with MathJax v3
window.MathJax.Hub = {
  Config: function() {},
  Queue: function() {},
  Typeset: function() {},
  Register: { StartupHook: function() {} }
};

// Override init_mathjax function that nbconvert injects
window.init_mathjax = function() {
  // No-op: MathJax v3 handles everything via the config above
  if (window.MathJax && window.MathJax.typesetPromise) {
    MathJax.typesetPromise();
  }
};
