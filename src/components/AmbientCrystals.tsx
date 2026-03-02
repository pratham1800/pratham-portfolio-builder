import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

/* ── Small floating code panel ── */
const AmbientPanel = ({
  position,
  size,
  speed,
  rotOffset,
  color,
}: {
  position: [number, number, number];
  size: [number, number];
  speed: number;
  rotOffset: number;
  color: string;
}) => {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.position.y = position[1] + Math.sin(t * speed * 0.3 + rotOffset) * 0.5;
    ref.current.position.x = position[0] + Math.sin(t * speed * 0.2 + rotOffset * 1.5) * 0.3;
    ref.current.rotation.y = Math.sin(t * speed * 0.1) * 0.1;
  });

  const lineCount = Math.floor(size[1] / 0.2);

  return (
    <group ref={ref} position={position}>
      <mesh>
        <planeGeometry args={size} />
        <meshBasicMaterial color="#1e1b4b" transparent opacity={0.15} side={THREE.DoubleSide} />
      </mesh>
      {Array.from({ length: lineCount }, (_, i) => {
        const lineWidth = 0.2 + Math.random() * (size[0] * 0.5);
        return (
          <mesh
            key={i}
            position={[
              -size[0] / 2 + lineWidth / 2 + 0.1,
              size[1] / 2 - 0.1 - i * 0.2,
              0.01,
            ]}
          >
            <planeGeometry args={[lineWidth, 0.04]} />
            <meshBasicMaterial color={color} transparent opacity={0.1 + Math.random() * 0.15} side={THREE.DoubleSide} />
          </mesh>
        );
      })}
    </group>
  );
};

/* ── Subtle dust particles ── */
const AmbientDust = ({ color }: { color: string }) => {
  const ref = useRef<THREE.Points>(null);
  const count = 200;

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
    const arr = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      arr[i * 3] += velocities[i * 3];
      arr[i * 3 + 1] += velocities[i * 3 + 1];
      arr[i * 3 + 2] += velocities[i * 3 + 2];
      if (Math.abs(arr[i * 3]) > 10) velocities[i * 3] *= -1;
      if (Math.abs(arr[i * 3 + 1]) > 6) velocities[i * 3 + 1] *= -1;
      if (Math.abs(arr[i * 3 + 2]) > 3) velocities[i * 3 + 2] *= -1;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.015} color={color} transparent opacity={0.2} sizeAttenuation />
    </points>
  );
};

interface AmbientCrystalsProps {
  accentColor?: string;
  intensity?: "subtle" | "moderate";
}

const AmbientCrystals = ({ accentColor = "#6366f1", intensity = "subtle" }: AmbientCrystalsProps) => {
  const panelCount = intensity === "moderate" ? 5 : 3;

  const panels = useMemo(() => {
    return Array.from({ length: panelCount }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 8,
        -2 - Math.random() * 3,
      ] as [number, number, number],
      size: [0.8 + Math.random() * 1, 0.5 + Math.random() * 0.6] as [number, number],
      speed: 0.15 + Math.random() * 0.2,
      rotOffset: Math.random() * Math.PI * 2,
    }));
  }, [panelCount]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.15} />

        <AmbientDust color={accentColor} />
        {panels.map((p, i) => (
          <AmbientPanel key={i} {...p} color={accentColor} />
        ))}
      </Canvas>
    </div>
  );
};

export default AmbientCrystals;
