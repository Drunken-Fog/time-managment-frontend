import React, { useEffect, useRef  } from 'react'
import styles from './Building.module.css'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

type Props = {
  level: number
  width: number
  height: number
}

export const Building: React.FC<Props> = (props) => {
  const {
    level,
    width,
    height
  } = props


  let camera: THREE.Camera
  let scene: THREE.Scene
  let renderer: THREE.Renderer
  let loader: GLTFLoader = new GLTFLoader()
  let dracoLoader: DRACOLoader = new DRACOLoader()
  let controls: OrbitControls
  let light: THREE.HemisphereLight
  let dirLight: THREE.DirectionalLight

  dracoLoader.setDecoderPath( '/examples/js/libs/draco/' );
  loader.setDRACOLoader( dracoLoader );

  const wrapper = useRef<HTMLDivElement>(null)

  useEffect(() => {
    init()
    animate()
  })

  function init () {
    camera = new THREE.PerspectiveCamera( 45, width / height, 1, 1000 );
    camera.position.set( 80, 60, 0 );
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xf5f5f5 );
    loader.load(
      `https://cors-anywhere.herokuapp.com/https://time-management-sfedu.herokuapp.com/models/${level}level.glb`,
      function (gltf: any) {
        gltf.scene.castShadow = true
        scene.add( gltf.scene );
        render()
        console.log(scene)
      },
      undefined,
      function(error: ErrorEvent) {
        console.error(error)
      }
    )
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize(width, height);
    controls = new OrbitControls( camera, renderer.domElement );

    // light
    light = new THREE.HemisphereLight( 0xffffff, 0x444444 );
    light.position.set( 0, 20, 0 );
    scene.add( light );
    scene.add(new THREE.HemisphereLight( 0xffffbb, 0x080820, 0.25 ))

    dirLight = new THREE.DirectionalLight( 0xffffff );
    dirLight.position.set( - 3, 10, - 10 );
    dirLight.castShadow = true;
    dirLight.shadow.camera.top = 10;
    dirLight.shadow.camera.bottom = - 10;
    dirLight.shadow.camera.left = - 10;
    dirLight.shadow.camera.right = 10;
    dirLight.shadow.camera.near = 0.1;
    dirLight.shadow.camera.far = 40;

    controls.addEventListener( 'change', render ); // use if there is no animation loop
    controls.minDistance = 60;
    controls.maxDistance = 200
    controls.target.set( 0, 0, 0);
    controls.update();
    if (wrapper.current) {
      wrapper.current.appendChild(renderer.domElement);
    }
  }

  function render () {
    renderer.render( scene, camera );
  }

  function animate () {
    requestAnimationFrame( animate );
    scene.rotation.y += 0.001;
    renderer.render( scene, camera );
  }

  return (
    <div className={styles.wrapper} ref={ wrapper }>
    </div>
  )
}
