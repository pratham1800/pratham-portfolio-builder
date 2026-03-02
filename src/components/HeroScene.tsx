import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useEffect } from "react";
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

/* ── Silk ribbon mesh ── */
const SilkRibbon = ({
  offset,
  amplitude,
  speed,
  color1,
  color2,
  yBase,
  zBase,
  mouse,
}: {
  offset: number;
  amplitude: number;
  speed: number;
  color1: string;
  color2: string;
  yBase: number;
  zBase: number;
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const segmentsX = 128;
  const segmentsY = 24;

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(14, 3, segmentsX, segmentsY);
    return geo;
  }, []);

  const colorArray = useMemo(() => {
    const c1 = new THREE.Color(color1);
    const c2 = new THREE.Color(color2);
    const count = (segmentsX + 1) * (segmentsY + 1);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const t = i / count;
      const c = c1.clone().lerp(c2, t);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return colors;
  }, [color1, color2]);

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
        const x = arr[idx];
        const normalizedX = ix / cols;
        const normalizedY = iy / rows;

        // Layered wave functions for organic silk movement
        arr[idx + 2] =
          Math.sin(normalizedX * 4 + t + offset) * amplitude * 0.6 +
          Math.sin(normalizedY * 3 + t * 0.7 + offset * 2) * amplitude * 0.4 +
          Math.cos(normalizedX * 2 + normalizedY * 2 + t * 0.5) * amplitude * 0.3 +
          Math.sin(x * 0.5 + t * 0.3 + offset) * amplitude * 0.2;

        // Subtle vertical displacement
        arr[idx + 1] +=
          Math.sin(normalizedX * 3 + t * 0.4 + offset) * 0.02;
      }
    }

    // Mouse reactivity
    meshRef.current.rotation.x = -0.3 + mouse.current.y * 0.08;
    meshRef.current.rotation.z = mouse.current.x * 0.04;

    pos.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} position={[0, yBase, zBase]} rotation={[-0.3, 0, 0]}>
      <bufferGeometry attach="geometry" {...geometry}>
        <bufferAttribute
          attach="attributes-color"
          count={colorArray.length / 3}
          array={colorArray}
          itemSize={3}
        />
      </bufferGeometry>
      <meshBasicMaterial
        vertexColors
        transparent
        opacity={0.12}
        side={THREE.DoubleSide}
        wireframe={false}
      />
    </mesh>
  );
};

/* ── Wireframe ribbon overlay for depth ── */
const WireRibbon = ({
  offset,
  amplitude,
  speed,
  color,
  yBase,
  zBase,
  mouse,
}: {
  offset: number;
  amplitude: number;
  speed: number;
  color: string;
  yBase: number;
  zBase: number;
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const segmentsX = 80;
  const segmentsY = 12;

  const geometry = useMemo(() => {
    return new THREE.PlaneGeometry(14, 2, segmentsX, segmentsY);
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
          Math.sin(normalizedX * 5 + t + offset) * amplitude * 0.5 +
          Math.cos(normalizedY * 4 + t * 0.6 + offset) * amplitude * 0.3;
      }
    }

    meshRef.current.rotation.x = -0.25 + mouse.current.y * 0.06;
    meshRef.current.rotation.z = mouse.current.x * 0.03;

    pos.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} position={[0, yBase, zBase]} rotation={[-0.25, 0, 0]}>
      <primitive attach="geometry" object={geometry} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.05}
        side={THREE.DoubleSide}
        wireframe
      />
    </mesh>
  );
};

/* ── Floating light particles ── */
const SilkDust = () => {
  const ref = useRef<THREE.Points>(null);
  const count = 400;

  const [positions, velocities, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
      vel[i * 3] = (Math.random() - 0.5) * 0.001;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.0015;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.0008;
      sz[i] = 0.01 + Math.random() * 0.025;
    }
    return [pos, vel, sz];
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const arr = ref.current.geometry.attributes.position.array as Float32Array;
    const t = clock.getElapsedTime();
    for (let i = 0; i < count; i++) {
      arr[i * 3] += velocities[i * 3] + Math.sin(t * 0.2 + i) * 0.0003;
      arr[i * 3 + 1] += velocities[i * 3 + 1];
      arr[i * 3 + 2] += velocities[i * 3 + 2];
      if (Math.abs(arr[i * 3]) > 8) velocities[i * 3] *= -1;
      if (Math.abs(arr[i * 3 + 1]) > 5) velocities[i * 3 + 1] *= -1;
      if (Math.abs(arr[i * 3 + 2]) > 4) velocities[i * 3 + 2] *= -1;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#a5b4fc"
        transparent
        opacity={0.25}
        sizeAttenuation
      />
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
        <pointLight position={[5, 3, 5]} intensity={0.4} color="#6366f1" />
        <pointLight position={[-4, -2, 3]} intensity={0.25} color="#818cf8" />
        <pointLight position={[0, 0, 4]} intensity={0.15} color="#a5b4fc" />

        {/* Primary silk ribbons */}
        <SilkRibbon offset={0} amplitude={1.2} speed={0.3} color1="#4338ca" color2="#818cf8" yBase={0.5} zBase={-2} mouse={mouse} />
        <SilkRibbon offset={2} amplitude={0.9} speed={0.25} color1="#6366f1" color2="#c7d2fe" yBase={-0.8} zBase={-3} mouse={mouse} />
        <SilkRibbon offset={4} amplitude={1.5} speed={0.2} color1="#3730a3" color2="#a5b4fc" yBase={1.5} zBase={-4} mouse={mouse} />

        {/* Wireframe overlays for depth */}
        <WireRibbon offset={1} amplitude={0.8} speed={0.35} color="#6366f1" yBase={0} zBase={-1.5} mouse={mouse} />
        <WireRibbon offset={3} amplitude={0.6} speed={0.28} color="#818cf8" yBase={-1.5} zBase={-2.5} mouse={mouse} />

        {/* Floating particles */}
        <SilkDust />
      </Canvas>
    </div>
  );
};

export default HeroScene;
