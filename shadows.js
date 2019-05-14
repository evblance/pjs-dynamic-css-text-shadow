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
 * Updates the text shadow direction and blur based on the relative position of the mouse and window centre.
 * @param {Position} mousePos The Position of the mouse to use in calculating the shadow position.
 * @param {Position} windowCentrePos The Position of the window centre to use in calculating the shadow size.
 */
function updateTextShadow(mousePos, windowCentrePos) {
  // We want to cast the shadow opposite of the cursor, as it if were a light
  const xOffset = -(mousePos.x - windowCentrePos.x) * SHADOW_SCALE;
  const yOffset = -(mousePos.y - windowCentrePos.y) * SHADOW_SCALE;
  
  // Set the blur to increase with cursor distance from the text
  const blur = Math.sqrt(Math.pow(xOffset, 2) + Math.pow(yOffset, 2)) * SHADOW_SCALE;

  setCSSVariable(X_OFFSET_VAR, `${xOffset}px`);
  setCSSVariable(Y_OFFSET_VAR, `${yOffset}px`);
  setCSSVariable(BLUR_VAR, `${blur}px`);
}

/**
 * Handles mousemove to drive dynamic text shadow behaviour.
 * @param {any} event The client mousemove event.
 */
function handleMouseMove(event) {
  const mousePos = getMousePositionByEvent(event);
  const windowCentrePos = getWindowCentre();
  updateTextShadow(mousePos, windowCentrePos);
}

// Shadow scaling factor
const SHADOW_SCALE = 0.1;

// Represent the CSS variable magic strings as constants
const X_OFFSET_VAR = 'ts-x-offset';
const Y_OFFSET_VAR = 'ts-y-offset';
const BLUR_VAR = 'ts-blur';

// Listen to mousemove events so we can make our text shadow dynamic
document.addEventListener('mousemove', handleMouseMove);
