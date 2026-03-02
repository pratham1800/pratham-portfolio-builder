import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const ParticleField = () => {
  const meshRef = useRef<THREE.Points>(null);
  const count = 1500;

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      vel[i * 3] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.003;
    }
    return [pos, vel];
  }, []);

  useFrame(() => {
    if (!meshRef.current) return;
    const posAttr = meshRef.current.geometry.attributes.position;
    const arr = posAttr.array as Float32Array;
    for (let i = 0; i < count; i++) {
      arr[i * 3] += velocities[i * 3];
      arr[i * 3 + 1] += velocities[i * 3 + 1];
      arr[i * 3 + 2] += velocities[i * 3 + 2];
      // Wrap around
      if (Math.abs(arr[i * 3]) > 10) velocities[i * 3] *= -1;
      if (Math.abs(arr[i * 3 + 1]) > 6) velocities[i * 3 + 1] *= -1;
      if (Math.abs(arr[i * 3 + 2]) > 5) velocities[i * 3 + 2] *= -1;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#6366f1"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const FloatingRing = ({ radius, speed, yOffset }: { radius: number; speed: number; yOffset: number }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = clock.getElapsedTime() * speed * 0.3;
    ref.current.rotation.y = clock.getElapsedTime() * speed * 0.5;
    ref.current.position.y = yOffset + Math.sin(clock.getElapsedTime() * speed) * 0.3;
  });

  return (
    <mesh ref={ref} position={[0, yOffset, -2]}>
      <torusGeometry args={[radius, 0.015, 16, 100]} />
      <meshStandardMaterial
        color="#6366f1"
        emissive="#6366f1"
        emissiveIntensity={0.5}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
};

const HeroScene = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#6366f1" />
        <ParticleField />
        <FloatingRing radius={2.5} speed={0.4} yOffset={0} />
        <FloatingRing radius={3.2} speed={0.25} yOffset={0.5} />
        <FloatingRing radius={1.8} speed={0.6} yOffset={-0.3} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
