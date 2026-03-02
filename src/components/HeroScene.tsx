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

/* ── Floating translucent panel (represents a code block) ── */
const CodePanel = ({
  position,
  size,
  speed,
  rotOffset,
  color,
  mouse,
}: {
  position: [number, number, number];
  size: [number, number];
  speed: number;
  rotOffset: number;
  color: string;
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.position.y = position[1] + Math.sin(t * speed * 0.4 + rotOffset) * 0.5;
    groupRef.current.position.x = position[0] + Math.sin(t * speed * 0.2 + rotOffset * 1.5) * 0.3;
    groupRef.current.rotation.y = Math.sin(t * speed * 0.1) * 0.15 + mouse.current.x * 0.1;
    groupRef.current.rotation.x = Math.sin(t * speed * 0.08) * 0.08 + mouse.current.y * 0.05;
  });

  const lineCount = Math.floor(size[1] / 0.18);

  return (
    <group ref={groupRef} position={position}>
      {/* Background panel */}
      <mesh position={[0, 0, -0.01]}>
        <planeGeometry args={size} />
        <meshBasicMaterial color="#1e1b4b" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>

      {/* Border glow */}
      <mesh position={[0, 0, -0.02]}>
        <planeGeometry args={[size[0] + 0.06, size[1] + 0.06]} />
        <meshBasicMaterial color={color} transparent opacity={0.06} side={THREE.DoubleSide} />
      </mesh>

      {/* Simulated code lines */}
      {Array.from({ length: lineCount }, (_, i) => {
        const lineWidth = 0.3 + Math.random() * (size[0] * 0.6);
        const indent = i % 3 === 0 ? 0 : i % 2 === 0 ? 0.15 : 0.3;
        return (
          <mesh
            key={i}
            position={[
              -size[0] / 2 + indent + lineWidth / 2 + 0.12,
              size[1] / 2 - 0.12 - i * 0.18,
              0,
            ]}
          >
            <planeGeometry args={[lineWidth, 0.06]} />
            <meshBasicMaterial
              color={color}
              transparent
              opacity={0.15 + Math.random() * 0.25}
              side={THREE.DoubleSide}
            />
          </mesh>
        );
      })}

      {/* Dot decorators (like syntax highlighting) */}
      {Array.from({ length: Math.floor(lineCount / 2) }, (_, i) => (
        <mesh
          key={`dot-${i}`}
          position={[
            -size[0] / 2 + 0.08,
            size[1] / 2 - 0.12 - i * 2 * 0.18,
            0.01,
          ]}
        >
          <circleGeometry args={[0.025, 8]} />
          <meshBasicMaterial color={i % 2 === 0 ? "#818cf8" : "#a5b4fc"} transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
};

/* ── Bracket / symbol shapes floating around ── */
const FloatingSymbol = ({
  position,
  shape,
  speed,
  rotOffset,
}: {
  position: [number, number, number];
  shape: "bracket" | "angle" | "curly";
  speed: number;
  rotOffset: number;
}) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.position.y = position[1] + Math.sin(t * speed * 0.3 + rotOffset) * 0.6;
    ref.current.rotation.z = Math.sin(t * speed * 0.15) * 0.3 + rotOffset;
  });

  // Create bracket-like shapes using torus segments
  const getGeometry = () => {
    switch (shape) {
      case "bracket":
        return <torusGeometry args={[0.15, 0.015, 8, 16, Math.PI]} />;
      case "angle":
        return <coneGeometry args={[0.12, 0.2, 3]} />;
      case "curly":
        return <torusKnotGeometry args={[0.08, 0.015, 32, 4, 2, 3]} />;
    }
  };

  return (
    <mesh ref={ref} position={position}>
      {getGeometry()}
      <meshBasicMaterial color="#6366f1" transparent opacity={0.15} wireframe />
    </mesh>
  );
};

/* ── Code dust particles ── */
const CodeDust = () => {
  const ref = useRef<THREE.Points>(null);
  const count = 600;

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
      vel[i * 3] = (Math.random() - 0.5) * 0.002;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.002;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.001;
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
      if (Math.abs(arr[i * 3]) > 9) velocities[i * 3] *= -1;
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
      <pointsMaterial size={0.02} color="#6366f1" transparent opacity={0.3} sizeAttenuation />
    </points>
  );
};

/* ── Connection lines ── */
const ConnectionLines = ({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) => {
  const groupRef = useRef<THREE.Group>(null);

  const lineObjects = useMemo(() => {
    return Array.from({ length: 6 }, () => {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        -3 - Math.random() * 2
      );
      const end = new THREE.Vector3(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        -3 - Math.random() * 2
      );
      const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);
      const material = new THREE.LineBasicMaterial({
        color: "#6366f1",
        transparent: true,
        opacity: 0.04 + Math.random() * 0.06,
      });
      return new THREE.Line(geometry, material);
    });
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.z =
      Math.sin(clock.getElapsedTime() * 0.05) * 0.03 + mouse.current.x * 0.05;
  });

  return (
    <group ref={groupRef}>
      {lineObjects.map((obj, i) => (
        <primitive key={i} object={obj} />
      ))}
    </group>
  );
};

/* ── Main Scene ── */
const HeroScene = () => {
  const mouse = useMousePosition();

  const panels = useMemo(
    () => [
      { position: [-4.5, 2, -2] as [number, number, number], size: [2.2, 1.2] as [number, number], speed: 0.35, rotOffset: 0, color: "#818cf8" },
      { position: [3, 2.5, -3] as [number, number, number], size: [2, 1.5] as [number, number], speed: 0.28, rotOffset: 2, color: "#6366f1" },
      { position: [-3, -1.5, -1.5] as [number, number, number], size: [1.6, 0.8] as [number, number], speed: 0.4, rotOffset: 4, color: "#a5b4fc" },
      { position: [4.5, -1.5, -2.5] as [number, number, number], size: [1.8, 1.4] as [number, number], speed: 0.32, rotOffset: 1, color: "#c7d2fe" },
      { position: [-1.5, 3.5, -4] as [number, number, number], size: [2.4, 1] as [number, number], speed: 0.25, rotOffset: 3, color: "#818cf8" },
      { position: [1.5, -3, -2] as [number, number, number], size: [1.4, 1] as [number, number], speed: 0.38, rotOffset: 5, color: "#6366f1" },
      { position: [-5, -3, -3.5] as [number, number, number], size: [1.8, 0.9] as [number, number], speed: 0.3, rotOffset: 1.5, color: "#a5b4fc" },
      { position: [5.5, 0.5, -4] as [number, number, number], size: [2, 1.2] as [number, number], speed: 0.22, rotOffset: 3.5, color: "#c7d2fe" },
    ],
    []
  );

  const symbols = useMemo(
    () => [
      { position: [-2, 1, -1] as [number, number, number], shape: "bracket" as const, speed: 0.4, rotOffset: 0 },
      { position: [2, -2, -2] as [number, number, number], shape: "angle" as const, speed: 0.35, rotOffset: 2 },
      { position: [-4, -2.5, -3] as [number, number, number], shape: "curly" as const, speed: 0.3, rotOffset: 4 },
      { position: [4, 3, -3.5] as [number, number, number], shape: "bracket" as const, speed: 0.45, rotOffset: 1 },
      { position: [0, -4, -2] as [number, number, number], shape: "angle" as const, speed: 0.38, rotOffset: 3 },
    ],
    []
  );

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 3, 5]} intensity={0.5} color="#6366f1" />
        <pointLight position={[-4, -2, 3]} intensity={0.3} color="#818cf8" />

        {panels.map((p, i) => (
          <CodePanel key={i} {...p} mouse={mouse} />
        ))}

        {symbols.map((s, i) => (
          <FloatingSymbol key={i} {...s} />
        ))}

        <CodeDust />
        <ConnectionLines mouse={mouse} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
