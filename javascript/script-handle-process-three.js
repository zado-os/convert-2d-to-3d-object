var scene, camera, renderer;

// function initializes the Three.js scene, camera, and renderer.
//It creates a scene, sets up a perspective camera,
//and adds a WebGL renderer to the HTML document.
function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
}
// function creates a 3D object (a cube) using a provided texture.
//It uses a BoxGeometry to define the cube's shape and applies a MeshBasicMaterial with the given texture to the cube.
//Finally, it adds the cube to the scene.
function createObject(texture) {
  var geometry = new THREE.BoxGeometry(1, 1, 1);
  var material = new THREE.MeshBasicMaterial({ map: texture });
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
}
// function is a recursive animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the object
  scene.children[0].rotation.x += 0.01;
  scene.children[0].rotation.y += 0.01;

  renderer.render(scene, camera);
}
// function is the event handler for the file upload input. It reads the selected image file using a FileReader
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
// function is called initially to set up the scene, camera, and renderer.
init();
document
  .getElementById("imageUpload")
  .addEventListener("change", handleImageUpload, false);
