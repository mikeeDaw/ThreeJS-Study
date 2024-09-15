# Learn ThreeJS :DDD

- See the guide.pdf file for more reference.
- [Visit The Site](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)

#### Project Directories

- `Basics` - Vanilla ThreeJS (through cdn).
- `Vite` - Vite + Vanilla ThreeJS (through npm install).
- `Vite-React` - Vite + React + React Three Fiber (R3F) + React Three Drei.

## THREEJS

- Javascript Library and an API built on top of WebGL enabling to create 3D graphics on web.
- The recommended library for creating 3D web apps using javascript.
- Abstraction of WebGL complexities.
- Very Vast and Smooth efficient performance even with complicated 3D scenes.
- ThreeJS to WebGL is like TailwindCSS to CSS.

## Foundational Concepts

### 3D Objects:

#### Mesh

- Basic Building Block of 3D objects in ThreeJS.
- Define shape and appearance of objects in the scene.
- Each is associated with **Geometry** and **Material**.

1. Geometry

   - Defines structure and shape of the mesh.
   - Specifies verticies, faces, and other attributes.
   - [ThreeJS Geometries](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)
   - Can Create custom geometries by defining verticies and faces directly on the code. But also can use 3D models from other software like blender.

     **Composed of:**

     - Vertices
     - Corner points.
     - points in a space defined by its coordinates.
     - Edges
     - Straight lines that connects two vertices.
     - Faces
     - Flat surfaces connecting vertices that form a closed shape.

2. Material
   - Defines the appearance of a mesh.
   - Color, texture, How it reacts to light.
   - [ThreeJS Materials](https://threejs.org/docs/index.html?q=materia#api/en/materials/MeshToonMaterial) <br>
     **NOTE:** See the types in the guide.

**NOTE:** Everything is made of triangles. (the faces of meshes are triangles)

#### Points

- Collections of small dots in a 3D space.
- Create effects like stars, or particles.

#### Line

- A Simple connection between points in 3D space.
- Used to draw shapes, grids, or wireframes.

#### Group

- Collection of multiple objects.
- Acts as a container to organize elements. (like a div).
- Allows to transform many objects together.

#### Sprite

- A 3D object that always faces the camera.
- Always be visible.

**NOTE:** All these objects start from the base JS class `Object3D` and extends it properties.

### Common Properties:

#### Position

- Refers to where the object is located in the 3D world.
- Coordinates: (X, Y, Z)
  > - X axis - left or right.
  > - Y axis - up or down.
  > - Z axis - closer or farther.

#### Rotation

- How an object is turned.
- Rotating on Axis:
  - X - turns Up or down (like nodding head).
  - Y - turns left or right (shaking head).
  - Z - Spins clockwise or counterclockwise (turning steering wheel).

#### Scale

- How big or small an object is
- Scaling on Axis:
  - X - Controls how Wide.
  - Y - Controls how Tall.
  - Z - Controls how 'Deep'.

## Concepts

#### Environment

- The surrounding atmosphere or backdrop WITHIN the scene.
- Example: Make a scene in a sunny, rainy, or night environment while the scene stays the same.

#### Scene

- The 'Canvas'. Overall container or space
- Where all the objects, lights, and cameras are placed.
- Environment of the 3D world and its interactions.
- Each scene is like its own 'world' which is rendered seperately. (like a different scene for a hero section and footer section.)

#### Animation

- Transform objects position, change size/angle, or add textures.

#### Renderer

- Converts 3D scene into a 2D images and display it to the screen.
- Responsible for rendering the scene into the browser.

#### Camera

- Defines the Viewpoint from which the scene is viewed.
- Determines what is visible in the rendered scene.

  _Properties_

  1.  Field of View (FOV)

      - Extent of the observable world visible to the camera at any moment.
      - How much of the scene the camera can see at once.
      - Example: Zooming In makes your FOV narrower, showing smaller part.

  2.  Point of View (POV)

      - Specific position and angle the camera looks at the scene.
      - Cameras position and direction.

  3.  Aspect Ratio

      - Ratio between the width and the height of the camera's view.
      - Ensures objects in scene are not squashed or stretched when displayed on different screen ratio.
      - Example: A Square FOV = 1:1, A rectange (double Height) FOV = 2:1

  4.  Near & Far Clipping Planes

      - Define boundaries of camera's view
      - Determine how close or far object can be for the camera to see.
      - Camera's viewing range.

      1. **Near Clipping Plane**
         - Closest distance from the camera which objects are visible.
         - Any more CLOSER than the near plane, that object is not rendered.
      2. **Far Clipping Plane**
         - Farthest distance objects are visible.
         - Any FARTHER than this plane is not rendered.

  _Camera Controls_ <br>
  They allow to rotate, zoom, and pan camera dynamically.

  1.  Orbit Controls

      - most commonly used.
      - Allows rotate, zoom in/out, and pan around a target point.
      - Explore scene on different angles by keeping camera focused on a central point.

  2.  Trackball Controls

      - Rotate, zoom in/out, and pan freely without being focused on a point.

  3.  FlyControls

      - Same camera as first person games.
      - Camera moves forward, backward, and side to side. (like flying on the scene)

  4.  PointerLock Control
      - locks curson on the screen and allows user to look around.
      - The mouse controls where we are looking in the scene.
      - Focuses on the rotation of the camera using the mouse.
      - often paired with keyboard controls

  **NOTE:** See the types in the guide.

#### Lights

- Illuminate the scene and affect appearance of objects.

**NOTE:** See the types in the guide.

### SUMMARY OF CONCEPTS

1. Start with a **Scene**, define space where everything happens.
2. Then, use a **Camera** to determine the viewpoint & perspective of the scene.
3. Use **Objects** to populate the scene with shapes, models, and other 3D elements.
4. Illuminate the scene with **Lighting**.
5. Update objects overtime for dynamic behavior with **Animation**.
6. Finally, **Render** the scene by calculating it from the camera's viewpoint that can be turned into images to be displayed on the monitor.

## React + ThreeJS

### React Three Fiber (R3F)

- A library that simplifies building 3D Applications with **Three.js** and **React**.
- Allows to build ThreeJS 3D scenes using React Components and Features (like states, hooks, etc).
- [Documentation](https://r3f.docs.pmnd.rs/getting-started/your-first-scene) for reference.

  #### Features

  1. Declarative
     - No need to step-by-step create instance, initialize, .add() to scene functions, etc.
     - Add the Drei component to the `<Canvas>` and it will be easily created.

### React Three Drei

- Collection of helper components and utilities built on top of R3F.
- Provides Reusable components like cameras, lights, controls, pre-made shapes, etc.

#### Installing ThreeJS on a React Project

- `npm i three @react-three/fiber @react-three/drei`

### Topics (React ThreeJS)

**NOTE:** ALL Three.js objects will be treated as native JSX elements. R3F maps the tags to their three.js counterparts. NO IMPORTS for said objects.

> - `<mesh>` == THREE.Mesh()
> - `<boxGeometry>` == THREE.BoxGeometry()
> - `<meshStandardMaterial>` == THREE.MeshStandardMaterial()

- Setting Up Scene - `App.jsx`
- Creating Mesh - `meshes/RotatingCube.jsx`
- Adding Light - `App.jsx` and `lights/SpinSpotlight.jsx`
