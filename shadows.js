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

/**
 * Returns a Position object containing the (x, y) coordinates of the mouse relative to the client window.
 * @param {any} mouseEV The mouse event to use in deriving the mouse position.
 */
function getMousePositionByEvent(mouseEV) {
  const mouseX = mouseEV.clientX;
  const mouseY = mouseEV.clientY;
  return new Position(mouseX, mouseY);
}

/**
 * Returns a Position object containing the (x, y) coordinates of the client window centre.
 */
function getWindowCentre() {
  const height = window.innerHeight;
  const width = window.innerWidth;
  return new Position(width / 2, height / 2);
}

/**
 * Handles mousemove to drive dynamic text shadow behaviour.
 * @param {any} event The client mousemove event.
 */
function handleMouseMove(event) {
  const mousePos = getMousePositionByEvent(event);
  console.log(`Mouse Pos: (${mousePos.x}, ${mousePos.y})`);
  const windowCentrePos = getWindowCentre();
  console.log(`Client origin: (${windowCentrePos.x}, ${windowCentrePos.y})`);
}

// References to the DOM for manipulating element text shadow(s)
const heading = document.getElementById('text');

// Listen to mousemove events so we can make our text shadow dynamic
document.addEventListener('mousemove', handleMouseMove);