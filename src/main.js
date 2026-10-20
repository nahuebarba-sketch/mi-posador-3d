import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x222222);
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 2, 5);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 1, 0);

scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 1.5));
const dirLight = new THREE.DirectionalLight(0xffffff, 2);
dirLight.position.set(5, 10, 7);
scene.add(dirLight);

const mat = new THREE.MeshStandardMaterial({ color: 0x88aaff });
const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.4, 1.2, 8, 16), mat);
body.position.y = 1.2; scene.add(body);
const head = new THREE.Mesh(new THREE.SphereGeometry(0.4, 32, 32), mat);
head.position.y = 2.3; scene.add(head);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() { requestAnimationFrame(animate); controls.update(); renderer.render(scene, camera); }
animate();
