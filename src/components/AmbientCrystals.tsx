import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

/* ── Subtle ambient wave mesh ── */
const AmbientWave = ({
  offset,
  amplitude,
  speed,
  color,
  yBase,
  zBase,
  opacity,
}: {
  offset: number;
  amplitude: number;
  speed: number;
  color: string;
  yBase: number;
  zBase: number;
  opacity: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const segmentsX = 60;
  const segmentsY = 10;

  const geometry = useMemo(() => {
    return new THREE.PlaneGeometry(18, 2, segmentsX, segmentsY);
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime() * speed;
    const pos = meshRef.current.geometry.attributes.position;
    const arr = pos.array as Float32Array;
    const cols = segmentsX + 1;
    const rows = segmentsY + 1;

    for (let iy = 0; iy < rows; iy++) {
      for (let ix = 0; ix < cols; ix++) {
        const idx = (iy * cols + ix) * 3;
        const normalizedX = ix / cols;
        const normalizedY = iy / rows;
        arr[idx + 2] =
          Math.sin(normalizedX * 4 + t + offset) * amplitude * 0.5 +
          Math.cos(normalizedY * 3 + t * 0.6 + offset) * amplitude * 0.3;
      }
    }
    pos.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} position={[0, yBase, zBase]} rotation={[-0.3, 0, 0]}>
      <primitive attach="geometry" object={geometry} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        side={THREE.DoubleSide}
        wireframe
      />
    </mesh>
  );
};

/* ── Subtle dust particles ── */
const AmbientDust = ({ color }: { color: string }) => {
  const ref = useRef<THREE.Points>(null);
  const count = 150;

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
      vel[i * 3] = (Math.random() - 0.5) * 0.0008;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.0008;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.0004;
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
      <pointsMaterial size={0.015} color={color} transparent opacity={0.15} sizeAttenuation />
    </points>
  );
};

interface AmbientCrystalsProps {
  accentColor?: string;
  intensity?: "subtle" | "moderate";
}

const AmbientCrystals = ({ accentColor = "#4353FF", intensity = "subtle" }: AmbientCrystalsProps) => {
  const waveCount = intensity === "moderate" ? 3 : 2;

  const waves = useMemo(() => {
    return Array.from({ length: waveCount }, (_, i) => ({
      offset: i * 2.5,
      amplitude: 0.3 + i * 0.15,
      speed: 0.15 + i * 0.05,
      yBase: -1 + i * 1.5,
      zBase: -3 - i * 0.5,
      opacity: 0.03 + i * 0.01,
    }));
  }, [waveCount]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.1} />
        <AmbientDust color={accentColor} />
        {waves.map((w, i) => (
          <AmbientWave key={i} {...w} color={accentColor} />
        ))}
      </Canvas>
    </div>
  );
};

export default AmbientCrystals;
