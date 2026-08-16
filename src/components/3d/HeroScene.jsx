// src/components/3d/HeroScene.jsx
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count = 5000 }) {
  const pointsRef = useRef();
  const { viewport, mouse } = useThree();

  const positions = useMemo(() => {
    const particles = new Float32Array(count * 3);
    const distance = 2;
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360); 
      const phi = THREE.MathUtils.randFloatSpread(360); 

      let x = distance * Math.sin(theta) * Math.cos(phi);
      let y = distance * Math.sin(theta) * Math.sin(phi);
      let z = distance * Math.cos(theta);

      particles.set([x, y, z], i * 3);
    }
    return particles;
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;

      // Mouse interaction
      const targetRotationY = (mouse.x * viewport.width / 2) * 0.05;
      const targetRotationX = (mouse.y * viewport.height / 2) * 0.05;
      pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, targetRotationY, 0.02);
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, targetRotationX, 0.02);
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00f5ff"
        size={0.007}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 3.5] }}>
      <Particles />
    </Canvas>
  );
}