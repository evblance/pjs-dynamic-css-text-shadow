/**
 * Sets or updates a CSS variable value.
 * @param {string} name The CSS variable name without '--' prefix.
 * @param {string} value The full string representation of the value to assign to the CSS variable.
 */
function setCSSVariable(name, value) {
  document.documentElement.style.setProperty(`--${name}`, value);
}
