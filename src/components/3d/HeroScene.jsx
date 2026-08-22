// src/components/3d/HeroScene.jsx

import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';


/* =========================================================
   NEURAL NETWORK
   ========================================================= */

function NeuralNetwork() {

  const groupRef = useRef(null);
  const nodesRef = useRef(null);
  const linesRef = useRef(null);

  const { mouse } = useThree();

  const NODE_COUNT = 100;
  const CONNECTION_DISTANCE = 2.6;
  const MAX_CONNECTIONS = 250;


  /* =========================================================
     CREATE NETWORK
     ========================================================= */

  const network = useMemo(() => {

    const positions = new Float32Array(NODE_COUNT * 3);

    const velocities = new Float32Array(NODE_COUNT * 3);

    const linePositions =
      new Float32Array(MAX_CONNECTIONS * 6);


    for (let i = 0; i < NODE_COUNT; i++) {

      /*
       * Keep the center relatively open for the Hero text.
       */

      let x;

      if (Math.random() > 0.5) {
        x = THREE.MathUtils.randFloat(2.2, 7.5);
      } else {
        x = THREE.MathUtils.randFloat(-7.5, -2.2);
      }

      const y =
        THREE.MathUtils.randFloat(-4.5, 4.5);

      const z =
        THREE.MathUtils.randFloat(-2.5, 2.5);


      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;


      /*
       * Individual node velocity
       */

      velocities[i * 3] =
        THREE.MathUtils.randFloat(-0.12, 0.12);

      velocities[i * 3 + 1] =
        THREE.MathUtils.randFloat(-0.10, 0.10);

      velocities[i * 3 + 2] =
        THREE.MathUtils.randFloat(-0.06, 0.06);
    }


    return {
      positions,
      velocities,
      linePositions
    };

  }, []);


  /* =========================================================
     ANIMATION
     ========================================================= */

  useFrame((state, delta) => {

    const time = state.clock.elapsedTime;


    /* =======================================================
       MOVE NODES
       ======================================================= */

    if (nodesRef.current) {

      const position =
        nodesRef.current.geometry.attributes.position;

      const array = position.array;


      for (let i = 0; i < NODE_COUNT; i++) {

        const index = i * 3;


        /*
         * Faster floating movement
         */

        array[index] +=
          network.velocities[index] *
          delta *
          1.8;

        array[index + 1] +=
          network.velocities[index + 1] *
          delta *
          1.8;

        array[index + 2] +=
          network.velocities[index + 2] *
          delta *
          1.8;


        /*
         * Organic wave movement
         */

        array[index] +=
          Math.sin(
            time * 0.9 + i
          ) *
          delta *
          0.12;

        array[index + 1] +=
          Math.cos(
            time * 0.8 + i
          ) *
          delta *
          0.10;


        /*
         * Keep nodes inside boundaries
         */

        if (array[index] > 7.5)
          array[index] = 2.2;

        if (array[index] < -7.5)
          array[index] = -2.2;

        if (array[index + 1] > 4.5)
          array[index + 1] = -4.5;

        if (array[index + 1] < -4.5)
          array[index + 1] = 4.5;

        if (array[index + 2] > 2.5)
          array[index + 2] = -2.5;

        if (array[index + 2] < -2.5)
          array[index + 2] = 2.5;
      }


      position.needsUpdate = true;
    }


    /* =======================================================
       UPDATE CONNECTION LINES
       ======================================================= */

    if (
      nodesRef.current &&
      linesRef.current
    ) {

      const nodeArray =
        nodesRef.current.geometry
          .attributes.position.array;

      const lineArray =
        linesRef.current.geometry
          .attributes.position.array;


      let connectionIndex = 0;


      /*
       * Find nearby nodes every frame.
       *
       * Because nodes move, the connections also
       * continuously change.
       */

      for (
        let i = 0;
        i < NODE_COUNT;
        i++
      ) {

        if (
          connectionIndex >=
          MAX_CONNECTIONS
        ) {
          break;
        }


        const ax =
          nodeArray[i * 3];

        const ay =
          nodeArray[i * 3 + 1];

        const az =
          nodeArray[i * 3 + 2];


        for (
          let j = i + 1;
          j < NODE_COUNT;
          j++
        ) {

          if (
            connectionIndex >=
            MAX_CONNECTIONS
          ) {
            break;
          }


          const bx =
            nodeArray[j * 3];

          const by =
            nodeArray[j * 3 + 1];

          const bz =
            nodeArray[j * 3 + 2];


          const dx = ax - bx;
          const dy = ay - by;
          const dz = az - bz;


          const distance =
            Math.sqrt(
              dx * dx +
              dy * dy +
              dz * dz
            );


          if (
            distance <
            CONNECTION_DISTANCE
          ) {

            const lineIndex =
              connectionIndex * 6;


            lineArray[lineIndex] = ax;
            lineArray[lineIndex + 1] = ay;
            lineArray[lineIndex + 2] = az;

            lineArray[lineIndex + 3] = bx;
            lineArray[lineIndex + 4] = by;
            lineArray[lineIndex + 5] = bz;


            connectionIndex++;
          }
        }
      }


      /*
       * Hide unused connections
       */

      for (
        let i = connectionIndex;
        i < MAX_CONNECTIONS;
        i++
      ) {

        const index = i * 6;

        lineArray[index] = 0;
        lineArray[index + 1] = 0;
        lineArray[index + 2] = -100;

        lineArray[index + 3] = 0;
        lineArray[index + 4] = 0;
        lineArray[index + 5] = -100;
      }


      linesRef.current.geometry
        .attributes.position
        .needsUpdate = true;
    }


    /* =======================================================
       MOUSE PARALLAX
       ======================================================= */

    if (groupRef.current) {

      groupRef.current.rotation.y =
        THREE.MathUtils.lerp(
          groupRef.current.rotation.y,
          mouse.x * 0.18,
          0.045
        );

      groupRef.current.rotation.x =
        THREE.MathUtils.lerp(
          groupRef.current.rotation.x,
          -mouse.y * 0.12,
          0.045
        );


      /*
       * Faster overall drift
       */

      groupRef.current.position.x =
        Math.sin(time * 0.35) * 0.12;

      groupRef.current.position.y =
        Math.cos(time * 0.30) * 0.08;
    }

  });


  return (

    <group ref={groupRef}>


      {/* =====================================================
          MOVING CONNECTIONS
          ===================================================== */}

      <lineSegments ref={linesRef}>

        <bufferGeometry>

          <bufferAttribute
            attach="attributes-position"
            array={network.linePositions}
            count={MAX_CONNECTIONS * 2}
            itemSize={3}
          />

        </bufferGeometry>

        <lineBasicMaterial
          color="#00e5ff"
          transparent
          opacity={0.1}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />

      </lineSegments>


      {/* =====================================================
          NEURAL NODES
          ===================================================== */}

      <points ref={nodesRef}>

        <bufferGeometry>

          <bufferAttribute
            attach="attributes-position"
            array={network.positions}
            count={NODE_COUNT}
            itemSize={3}
          />

        </bufferGeometry>

        <pointsMaterial
          color="#00e5ff"
          size={0.065}
          sizeAttenuation
          transparent
          opacity={0.2}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />

      </points>

    </group>
  );
}


/* =========================================================
   HERO SCENE
   ========================================================= */

export default function HeroScene() {

  return (

    <Canvas
      camera={{
        position: [0, 0, 8],
        fov: 55,
      }}

      dpr={[1, 1.5]}

      gl={{
        antialias: true,
        alpha: true,
      }}
    >

      <NeuralNetwork />

    </Canvas>

  );
}