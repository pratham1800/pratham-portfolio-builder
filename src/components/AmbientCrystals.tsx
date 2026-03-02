import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

/* ── Small floating crystal ── */
const AmbientCrystal = ({ position, scale, speed, rotOffset, color }: {
  position: [number, number, number];
  scale: number;
  speed: number;
  rotOffset: number;
  color: string;
}) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.x = t * speed + rotOffset;
    ref.current.rotation.y = t * speed * 0.6 + rotOffset;
    ref.current.position.y = position[1] + Math.sin(t * speed * 0.4 + rotOffset) * 0.5;
    ref.current.position.x = position[0] + Math.sin(t * speed * 0.2 + rotOffset * 1.5) * 0.3;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <octahedronGeometry args={[1, 0]} />
      <meshPhysicalMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        metalness={0.1}
        roughness={0.1}
        transmission={0.7}
        thickness={0.5}
        transparent
        opacity={0.2}
        clearcoat={1}
        ior={2.0}
      />
    </mesh>
  );
};

/* ── Subtle dust particles ── */
const AmbientDust = ({ color }: { color: string }) => {
  const ref = useRef<THREE.Points>(null);
  const count = 300;

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
      vel[i * 3] = (Math.random() - 0.5) * 0.001;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.001;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.0005;
    }
    return [pos, vel];
  }, []);

  useFrame(() => {
    if (!ref.current) return;
    const posAttr = ref.current.geometry.attributes.position;
    const arr = posAttr.array as Float32Array;
    for (let i = 0; i < count; i++) {
      arr[i * 3] += velocities[i * 3];
      arr[i * 3 + 1] += velocities[i * 3 + 1];
      arr[i * 3 + 2] += velocities[i * 3 + 2];
      if (Math.abs(arr[i * 3]) > 10) velocities[i * 3] *= -1;
      if (Math.abs(arr[i * 3 + 1]) > 6) velocities[i * 3 + 1] *= -1;
      if (Math.abs(arr[i * 3 + 2]) > 3) velocities[i * 3 + 2] *= -1;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.015} color={color} transparent opacity={0.25} sizeAttenuation />
    </points>
  );
};

interface AmbientCrystalsProps {
  accentColor?: string;
  intensity?: "subtle" | "moderate";
}

const AmbientCrystals = ({ accentColor = "#6366f1", intensity = "subtle" }: AmbientCrystalsProps) => {
  const crystalCount = intensity === "moderate" ? 6 : 4;

  const crystals = useMemo(() => {
    return Array.from({ length: crystalCount }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 8,
        -2 - Math.random() * 3,
      ] as [number, number, number],
      scale: 0.12 + Math.random() * 0.2,
      speed: 0.15 + Math.random() * 0.25,
      rotOffset: Math.random() * Math.PI * 2,
    }));
  }, [crystalCount]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.15} />
        <pointLight position={[5, 3, 5]} intensity={0.3} color={accentColor} />
        <pointLight position={[-4, -2, 3]} intensity={0.2} color={accentColor} />

        <AmbientDust color={accentColor} />
        {crystals.map((c, i) => (
          <AmbientCrystal key={i} {...c} color={accentColor} />
        ))}
      </Canvas>
    </div>
  );
};

export default AmbientCrystals;
