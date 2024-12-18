import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

export const FlutterLogo3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(300, 300);
    containerRef.current.appendChild(renderer.domElement);

    // Create Flutter logo shape (simplified as a combination of triangles)
    const geometry = new THREE.BufferGeometry();
    
    // Flutter logo vertices (simplified)
    const vertices = new Float32Array([
      // Main triangle
      -1, -1, 0,
      1, -1, 0,
      0, 1, 0,
      // Secondary triangle
      -0.5, -0.5, 0,
      0.5, -0.5, 0,
      0, 0.5, 0,
    ]);

    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    
    const material = new THREE.MeshPhongMaterial({
      color: 0x54C5F8, // Flutter blue
      side: THREE.DoubleSide,
      shininess: 100,
    });

    const logo = new THREE.Mesh(geometry, material);
    scene.add(logo);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      logo.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-[300px] h-[300px] mx-auto"
    />
  );
};