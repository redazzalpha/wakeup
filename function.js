const THREE = require('three');
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function createScene(gtlfPath, container) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 35, container.clientWidth / container.clientHeight, 0.1, 1000 );
    const renderer = new THREE.WebGL1Renderer({antialias: true, alpha: true});
    const loader = new GLTFLoader();
    let geometry;

    camera.position.set(0, 0, 2);   

    const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 3 );
    light.position.set( 0, 25, 10 );
    scene.add( light );

    renderer.setSize( container.clientWidth, container.clientHeight );
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild( renderer.domElement );

    loader.load(
        gtlfPath,
        function ( gltf ) {scene.add( gltf.scene ); geometry = gltf.scene.children[0]; animate();},
        function ( xhr ) {console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );},
        function ( error ) {console.log( `An error happened: ${error}`  );} 
    );

    const animate = function () {
        requestAnimationFrame( animate );
        geometry.rotation.z += 0.010;
        renderer.render( scene, camera );
    };
    function onWindowResize() {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }

    window.addEventListener('resize', onWindowResize);

    return geometry;
}