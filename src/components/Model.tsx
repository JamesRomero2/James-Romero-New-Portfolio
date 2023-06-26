'use client'
import { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { loadGLTFModel } from '../library/GLTFModelLoader';

function easeOutCircle(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const Model = ({glbModelDirectory}: {glbModelDirectory: string}) => {
  const refDiv = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(false)
  const [renderer, setRenderer] = useState<any>();
  const [cam, setCam] = useState<any>();
  const [target] = useState(new THREE.Vector3(0, 1.2, 0));
  const [initialCameraPosition] = useState(new THREE.Vector3(50 * Math.sin(0.2 * Math.PI), 50, 20 * Math.cos(0.2 * Math.PI)));
  const [scene] = useState(new THREE.Scene());
  const [_contrls, setContrls] = useState<any>();
  const handleWindowResize = useCallback(() => {
    const {current: container} = refDiv;
    if (container && renderer) {
        const sceneWidth = container.clientWidth;
        const sceneHeight = container.clientHeight;

        renderer.setSize(sceneWidth, sceneHeight);
    }
}, [renderer]);

  useEffect(() => {
    const {current: container} = refDiv;
    
    if(container && !renderer) {
      const sceneWidth = container.clientWidth;
      const sceneHeight = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(sceneWidth, sceneHeight);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      const scale = sceneHeight * 0.005 + 3;
      const camera = new THREE.OrthographicCamera(-scale, scale, scale, -scale, 1, 50000)
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);
      setCam(camera);

      const dirLight1 = new THREE.SpotLight( 0xffffff, 3 );
      dirLight1.position.set( 0, 10, 50 );
      scene.add( dirLight1 );

      const dirLight2 = new THREE.SpotLight( 0xffffff, 3 );
      dirLight2.position.set( 0, 10, -50 );
      scene.add( dirLight2 );

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;
      setContrls(controls)

      loadGLTFModel(scene, glbModelDirectory, {
        receiveShadow: false,
        castShadow: false
      }).then(() => {
        animate()
        setLoading(false)
      })
      
      let req: any = null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);
        frame = frame <= 100 ? frame + 1 : frame;
        
        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotationSpeed = -easeOutCircle(frame / 120) * Math.PI * 20

          camera.position.y = 10;
          camera.position.x = p.x * Math.cos(rotationSpeed) + p.z * Math.sin(rotationSpeed);
          camera.position.z = p.z * Math.cos(rotationSpeed) - p.x * Math.sin(rotationSpeed);
          camera.lookAt(target)
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

            return () => {
                cancelAnimationFrame(req);
                renderer.dispose()
            }
    }
  }, [glbModelDirectory, initialCameraPosition, renderer, scene,target])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
        window.removeEventListener('resize', handleWindowResize, false)
    }
}, [renderer, handleWindowResize])
  

  return (
    <>
    <div className="relative mx-auto cursor-pointer bg-transparent">
      {
        loading ? 
        (
          <span>
            Loading Model...
          </span>
        )
        :
        (
          <div className='w-72 h-72' ref={refDiv}>
          
          </div>
        )
      }
    </div>
    </>
  )
}

export default Model