import * as THREE from "three";
// See the documentation for import paths.
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// This canvas will be passed to the renderer to add controls and interact with the scene.
const canvas = document.getElementById("canvas");

// 1. Create the scene --------------------------------------

const scene = new THREE.Scene();
scene.background = new THREE.Color("#F0F0F0");

// 2. Set the Camera ----------------------------------------

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 5;

// 3. Generate the Object --------------------------------------

// Mesh #1
const geomet = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({
  color: "#468585",
  emissive: "#468585",
});

new THREE.MeshPhysicalMaterial({
  color: "#468585",
  emissive: "#468585",
  metalness: 0.5,
  roughness: 0,
  reflectivity: 1,
  iridescence: 1,
  ior: 1.8,
  iridescenceIOR: 2,
});

const octahed = new THREE.Mesh(geomet, material);

// Mesh #2
const boxGeo = new THREE.BoxGeometry(2, 0.1, 2);
const mat2 = new THREE.MeshStandardMaterial({
  color: "#468585",
  emissive: "#468585",
});
const coneMesh = new THREE.Mesh(boxGeo, mat2);
coneMesh.position.y = -1.5;

// Add the Objects to the scene
scene.add(octahed);
scene.add(coneMesh);

// 4. Shine the Lights -------------------------------------------

const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1, 0.7, 1.5);
light.target = octahed;
scene.add(light);

// Adding some additional light
const light2 = new THREE.PointLight(0x006769, 30);
light2.position.set(-1, -1, 1);
scene.add(light2);

// 5. Do the Renderer --------------------------------------------

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
// Set Pixel Ratio to fit specific devices and for the OrbitControl to work properly
renderer.setPixelRatio(window.devicePixelRatio);

// 6. Render the scene to the screen -----------------------------

// renderer.render(scene, camera);

// 7. Add The controls

// Params: camera, DOM Element (the 'canvas')
const controls = new OrbitControls(camera, renderer.domElement);

// Enables damping (inertia). Adds a sense of weight to controls.
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

// 8. Add the Animation ---------------------------------------------

// Var for angle (for the light orbiting animation)
let angle = 0;

function animate(timestamp) {
  requestAnimationFrame(animate);

  // Animation to rotate the objects.
  coneMesh.rotation.y += 0.02;
  octahed.rotation.x += 0.005;
  octahed.rotation.y += 0.02;

  // Animation for light to go around the object.
  // > Damn may konting math pala to.
  angle += 0.03;
  light.position.x = 1.5 * Math.cos(angle);
  light.position.z = 1.5 * Math.sin(angle);

  // Update the controls so dampening takes effect.
  controls.update();

  renderer.render(scene, camera);
}

// 9. Handle window resizing ------------------------------

window.addEventListener("resize", () => {
  // Adjust the aspect ratio to match the screen size
  camera.aspect = window.innerWidth / window.innerHeight;
  // Resets the camera position
  camera.updateProjectionMatrix();
  // Update the new size for renderer to display the canvas.
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Calling the `animate` function to commence animation.
animate();
