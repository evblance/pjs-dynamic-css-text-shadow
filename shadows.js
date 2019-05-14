/**
 * Constructor function for describing position coordinates.
 * @param {number} x The horizontal ordinate of the position coordinate.
 * @param {number} y The vertical ordinate of the position coordinate.
 */
const Position = function(x, y) {
  this.x = x;
  this.y = y;
};

/**
 * Sets or updates a CSS variable value.
 * @param {string} name The CSS variable name without '--' prefix.
 * @param {string} value The full string representation of the value to assign to the CSS variable.
 */
function setCSSVariable(name, value) {
  document.documentElement.style.setProperty(`--${name}`, value);
}

// References to the DOM for manipulating element text shadow(s)
const heading = document.getElementById('text');
