import './style.css'
import * as THREE from 'three'

console.log('Hello Threejs Journey')
console.log(THREE.PerspectiveCamera)
console.log(THREE)
// Scene First

const scene = new THREE.Scene()

// Red Cube
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}
// Camera 
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.x = 2
scene.add(camera)

//Render

const canvas = document.querySelector('.webgl')
console.log(canvas)


const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)

// box still not visible if no z value is set

// change values according to you in camera position