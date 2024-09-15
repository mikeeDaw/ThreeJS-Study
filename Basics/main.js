import * as THREE from "three";

// NOTE: (0,0,0) is OBVIOUSLY on the center of the screen.

// 1. Create the scene. -----------------------------------------------
const scene = new THREE.Scene();
scene.background = new THREE.Color("#727272");

// 2. Add the Camera. -------------------------------------------------
// Params: fov, aspect ratio, near plane, far plane.
// NOTE: • .inner/outer[...] refers to the size of viewport (size of rectangle filled by a web page).
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// 3. Create and add geoShape Object. -------------------------------------

// Making the radius bigger makes the mesh dissapear since it may go over the near plane.
const geometry = new THREE.DodecahedronGeometry(1.5, 0);
const material = new THREE.MeshPhysicalMaterial({
  color: "#468585",
  emissive: "#468585",
  metalness: 0.5,
  reflectivity: 1,
  iridescence: 1,
});

// Combine to create a mesh
const geoShape = new THREE.Mesh(geometry, material);

// Then add the geoShape to the scene
scene.add(geoShape);
// Position the mesh on the scene
geoShape.position.set(0, 0, 0);

// 4. Add Lighting. ----------------------------------------------------

// Params: Color (in hexadecimal '0x-' notation), intensity
const light = new THREE.DirectionalLight(0x9cdba6, 10);

// Set the position of the light (X,Y,Z)
light.position.set(0, -20, 10);

// Then add it to the scene.
scene.add(light);

// Add the target for the light (for DirectionalLight only)
// Directional light shines the light from the position (x,y,z) to a target object (default target is at (0,0,0) ).
light.target = geoShape;

// 5. Set up the Renderer. ---------------------------------------------

const renderer = new THREE.WebGLRenderer();
// Set the size to know what to render (X,Y).
renderer.setSize(window.innerWidth, window.innerHeight);

// Add the 'canvas' element to the DOM Tree
document.body.appendChild(renderer.domElement);

// 6. Render the Scene to see it --------------------------------------

// NOTE: Commented out since there is an animation and need to render many times and not only just once.
// renderer.render(scene, camera);

// 7. Animate the scene. -----------------------------------------------

function animate(timestamp) {
  // 'requestAnimationFrame' is not from 3JS.
  // It has a parameter 'callback' (which has a single argument called 'timestamp' - indicating the end  of the time of the previous frame's rendering).
  requestAnimationFrame(animate);
  // Must call 'requestAnimationFrame' again in the callback if u want to animate another frame.

  // Rotate the geoShape
  geoShape.rotation.x += 0.01;
  geoShape.rotation.y += 0.01;
  geoShape.rotation.z += 0.01; // + : counterclock, - : clockwise

  // Call the renderer here to continiously render new positionings (due to animation) to the browser.
  renderer.render(scene, camera);
}

// 8. Add Controls (in the 'Vite' example) -------------------------------

// Call the 'animate' function to start the animation
animate();
