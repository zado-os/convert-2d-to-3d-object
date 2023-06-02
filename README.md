# convert-2d-to-3d-object

## Scop : convert face from 2d to 3d

## Discription : 

1- The **init** function initializes the Three.js scene, camera, and renderer. It creates a scene, sets up a perspective camera, and adds a WebGL renderer to the HTML document.

2- The **createObject** function creates a 3D object (a cube) using a provided texture. It uses a BoxGeometry to define the cube's shape and applies a MeshBasicMaterial with the given texture to the cube. Finally, it adds the cube to the scene.

3- The **animate** function is a recursive **animation loop** using requestAnimationFrame. It updates the rotation of the first child object in the scene (in this case, the cube) and renders the scene with the camera and renderer.

4- The **handleImageUpload** function is the event handler for the file upload input. It reads the selected image file using a FileReader and creates an **onload** callback function to handle the image loading. Inside the **onload** function, an HTML image element is created and assigned the **loaded** image source. Then, a Three.js **Texture object** is created from the image and passed to the **createObject** function to create a cube with the texture. Finally, the **animate** function is called to start the animation.

5- The **init** function is called initially to set up the **scene, camera, and renderer**.

6- An **event listener** is added to the file upload input element to trigger the **handleImageUpload** function when a file is selected.

*This code sets up a basic Three.js scene and allows the user to upload an image file, which is then applied as a texture to a rotating cube in the scene.*

## futsere :

*Add some eventsListgner to control obj*
*export as fbx*
*Landmark Face*
*Mash Face*
