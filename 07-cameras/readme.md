# Three.js Journey

## Camera

    Camera is an abstract class. Other cameras inherit from camera

## Array Camera

    Render the scene from multiple cameras on specific areas of the render. Good for games

## Stereo Camera

    Render the scene through two cameras that mimic the eyes to create a parallax effect good for devices like VR Headset

## Cube Camera

    Do 6 renders, each one facing a different direction can render the surrounding like environment map, reflection or shadow map

## Orthographic Camera

    Render the scene without perspective

## Perspective Camera

    Render the scene with perspective

        const camera = new THREE.PerspectiveCamera( 45, width / height, 1, 1000 );
        scene.add( camera );

        # Constructor
            PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
            fov — Camera frustum vertical field of view.
            aspect — Camera frustum aspect ratio.
            near — Camera frustum near plane.
            far — Camera frustum far plane.


    Near and Far :
        how close and how far the camera can see, Any object or part of the object closer than near or further than far will not show up


    Mouse Coordinates on the page
        to listen to the mousemove event with addEventListener and retrieve the event.clientX and event.clientY

            window.addEventListener('mousemove', (event) => {
            cursor.x = event.clientX / sizes.width

            console.log(cursor.x)
        })


     camera.position.x = cursor.x * 10 // for moving multiply for fast
     camera.position.y = cursor.y * 10

     Moving the camera around the center of the scene by usin Math.sin() Math.Cos() and Math.pi

        camera.position.x =Math.sin(cursor.x *3) *3
        camera.position.z =Math.cos(cursor.x *3) * 3
        camera.position.y = cursor.y = 5
        // camera.lookAt(new THREE.Vector3())
        camera.lookAt(mesh.position) ---- use this after camera position

## Built in Controls in THreejs

## DeviceOrrientationControls

    will automatically retrieve the device orientation of device . iOS stopped it

## Fly Controls

    Enable moving camera like a spaceship

## First Person Control

    Its like bird for playing limitation on axis

## Pointer Lock Control

    Its imersive cool

## Orbit Control

    Move rotate, zooming in , no under and upside down

## Trackball Control

    No floor looping

## Transform Control

        No camera just moving the object based on equatorial position

import explicitly otherwise it wont work
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

when you change the target you have to update the controls

Damping will create friction so goes smoothly

## Setup

Download [Node.js](https://nodejs.org/en/download/).
Run this followed commands:

```bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```
