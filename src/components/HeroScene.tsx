import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

/* ── Mouse tracker ── */
const useMousePosition = () => {
  const mouse = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return mouse;
};

/* ── Central Crystal Prism ── */
const CrystalPrism = ({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) => {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.15 + mouse.current.x * 0.5;
    groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.2 + mouse.current.y * 0.3;
    groupRef.current.rotation.z = Math.sin(t * 0.08) * 0.1;
    groupRef.current.position.y = Math.sin(t * 0.3) * 0.15;

    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.3;
      innerRef.current.rotation.x = t * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer crystal shell */}
      <mesh>
        <octahedronGeometry args={[1.8, 0]} />
        <meshPhysicalMaterial
          color="#6366f1"
          metalness={0.1}
          roughness={0.05}
          transmission={0.85}
          thickness={1.5}
          transparent
          opacity={0.35}
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0}
          ior={2.4}
        />
      </mesh>

      {/* Inner rotating crystal */}
      <mesh ref={innerRef} scale={0.5}>
        <icosahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial
          color="#818cf8"
          emissive="#6366f1"
          emissiveIntensity={0.8}
          metalness={0.3}
          roughness={0}
          transmission={0.6}
          thickness={0.8}
          transparent
          opacity={0.6}
          clearcoat={1}
          ior={2.2}
        />
      </mesh>

      {/* Core glow sphere */}
      <mesh scale={0.25}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#a5b4fc"
          emissive="#6366f1"
          emissiveIntensity={2}
          transparent
          opacity={0.9}
        />
      </mesh>
    </group>
  );
};

/* ── Floating smaller crystals ── */
const FloatingCrystal = ({ position, scale, speed, rotOffset }: {
  position: [number, number, number];
  scale: number;
  speed: number;
  rotOffset: number;
}) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.x = t * speed + rotOffset;
    ref.current.rotation.y = t * speed * 0.7 + rotOffset;
    ref.current.position.y = position[1] + Math.sin(t * speed * 0.5 + rotOffset) * 0.4;
    ref.current.position.x = position[0] + Math.sin(t * speed * 0.3 + rotOffset * 2) * 0.2;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <octahedronGeometry args={[1, 0]} />
      <meshPhysicalMaterial
        color="#6366f1"
        emissive="#4f46e5"
        emissiveIntensity={0.4}
        metalness={0.2}
        roughness={0.1}
        transmission={0.7}
        thickness={0.5}
        transparent
        opacity={0.3}
        clearcoat={1}
        ior={2.0}
      />
    </mesh>
  );
};

/* ── Light rays / refractive beams ── */
const LightRays = ({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) => {
  const groupRef = useRef<THREE.Group>(null);
  const rays = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      angle: (i / 6) * Math.PI * 2,
      length: 3 + Math.random() * 2,
      width: 0.01 + Math.random() * 0.015,
      speed: 0.2 + Math.random() * 0.3,
      opacity: 0.08 + Math.random() * 0.12,
    }));
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.z = t * 0.05 + mouse.current.x * 0.2;
  });

  return (
    <group ref={groupRef}>
      {rays.map((ray, i) => (
        <mesh
          key={i}
          position={[
            Math.cos(ray.angle) * ray.length * 0.5,
            Math.sin(ray.angle) * ray.length * 0.5,
            -0.5,
          ]}
          rotation={[0, 0, ray.angle]}
        >
          <planeGeometry args={[ray.length, ray.width]} />
          <meshBasicMaterial
            color="#818cf8"
            transparent
            opacity={ray.opacity}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
};

/* ── Crystal dust particles ── */
const CrystalDust = () => {
  const ref = useRef<THREE.Points>(null);
  const count = 800;

  const [positions, velocities, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    const s = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
      vel[i * 3] = (Math.random() - 0.5) * 0.002;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.002;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.001;
      s[i] = 0.02 + Math.random() * 0.04;
    }
    return [pos, vel, s];
  }, []);

  useFrame(() => {
    if (!ref.current) return;
    const posAttr = ref.current.geometry.attributes.position;
    const arr = posAttr.array as Float32Array;
    for (let i = 0; i < count; i++) {
      arr[i * 3] += velocities[i * 3];
      arr[i * 3 + 1] += velocities[i * 3 + 1];
      arr[i * 3 + 2] += velocities[i * 3 + 2];
      if (Math.abs(arr[i * 3]) > 8) velocities[i * 3] *= -1;
      if (Math.abs(arr[i * 3 + 1]) > 5) velocities[i * 3 + 1] *= -1;
      if (Math.abs(arr[i * 3 + 2]) > 4) velocities[i * 3 + 2] *= -1;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#a5b4fc" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
};

/* ── Main Scene ── */
const HeroScene = () => {
  const mouse = useMousePosition();

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 3, 5]} intensity={0.8} color="#6366f1" />
        <pointLight position={[-4, -2, 3]} intensity={0.4} color="#818cf8" />
        <pointLight position={[0, 5, -3]} intensity={0.3} color="#a5b4fc" />
        <spotLight
          position={[0, 8, 4]}
          angle={0.3}
          penumbra={1}
          intensity={0.6}
          color="#6366f1"
        />

        <CrystalPrism mouse={mouse} />
        <LightRays mouse={mouse} />
        <CrystalDust />

        {/* Orbiting smaller crystals */}
        <FloatingCrystal position={[-3.5, 1.5, -2]} scale={0.25} speed={0.5} rotOffset={0} />
        <FloatingCrystal position={[4, -1, -3]} scale={0.35} speed={0.35} rotOffset={2} />
        <FloatingCrystal position={[-2, -2.5, -1]} scale={0.2} speed={0.6} rotOffset={4} />
        <FloatingCrystal position={[3, 2.5, -2.5]} scale={0.18} speed={0.45} rotOffset={1} />
        <FloatingCrystal position={[-4.5, -0.5, -3.5]} scale={0.28} speed={0.3} rotOffset={3} />
        <FloatingCrystal position={[2, -3, -1.5]} scale={0.15} speed={0.55} rotOffset={5} />
        <FloatingCrystal position={[-1, 3.5, -4]} scale={0.22} speed={0.4} rotOffset={1.5} />
        <FloatingCrystal position={[5, 0.5, -4]} scale={0.3} speed={0.25} rotOffset={3.5} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
