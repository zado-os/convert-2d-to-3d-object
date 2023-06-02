var scene, camera, renderer, cube;
var mouseDown = false;
var mouseX = 0, mouseY = 0;

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  document.addEventListener('mousemove', handleMouseMove, false);
  document.addEventListener('mousedown', handleMouseDown, false);
  document.addEventListener('mouseup', handleMouseUp, false);
}

function createObject(texture) {
  var geometry = new THREE.BoxGeometry(2, 2, 2);
  var material = new THREE.MeshBasicMaterial({ map: texture });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
}

function animate() {
  requestAnimationFrame(animate);

  // Rotate the object
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Move the object based on mouse position
  if (mouseDown) {
    cube.position.x = (mouseX / window.innerWidth) * 2 - 1;
    cube.position.y = -(mouseY / window.innerHeight) * 2 + 1;
  }

  renderer.render(scene, camera);
}

function handleImageUpload(event) {
  var file = event.target.files[0];
  var reader = new FileReader();

  reader.onload = function (event) {
    var image = new Image();
    image.onload = function () {
      var texture = new THREE.Texture(image);
      texture.needsUpdate = true;

      createObject(texture);
      animate();
    };
    image.src = event.target.result;
  };

  reader.readAsDataURL(file);
}

function handleMouseMove(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
}

function handleMouseDown() {
  mouseDown = true;
}

function handleMouseUp() {
  mouseDown = false;
}

init();
document.getElementById('imageUpload').addEventListener('change', handleImageUpload, false);