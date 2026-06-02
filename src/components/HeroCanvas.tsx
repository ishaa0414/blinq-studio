"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── Renderer ──
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.autoClear = false; // Afterimage: we control clearing manually
    mount.appendChild(renderer.domElement);

    // ── Afterimage clear scene ──
    const clearCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const clearScene = new THREE.Scene();
    const clearMat = new THREE.MeshBasicMaterial({
      color: 0x080808,
      transparent: true,
      opacity: 0.14,
      depthTest: false,
      depthWrite: false,
    });
    clearScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), clearMat));

    // ── Main scene ──
    const scene = new THREE.Scene();

    // ── Camera ──
    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.z = 14;

    // ── Resize ──
    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    // ── 1. Main gem (Icosahedron) ──
    const gemGeo = new THREE.IcosahedronGeometry(2.2, 0);
    const gemMat = new THREE.MeshStandardMaterial({
      color: 0xc8a96e,
      metalness: 1.0,
      roughness: 0.1,
    });
    const gem = new THREE.Mesh(gemGeo, gemMat);
    scene.add(gem);

    const edgesGeo = new THREE.EdgesGeometry(gemGeo);
    const edgesMat = new THREE.LineBasicMaterial({
      color: 0xe8d5b0,
      opacity: 0.5,
      transparent: true,
    });
    gem.add(new THREE.LineSegments(edgesGeo, edgesMat));

    // ── 2. Octahedron (small, wireframe, gold) ──
    const octGeo = new THREE.OctahedronGeometry(0.6, 0);
    const octMat = new THREE.MeshBasicMaterial({
      color: 0xc8a96e,
      wireframe: true,
      opacity: 0.3,
      transparent: true,
    });
    const oct = new THREE.Mesh(octGeo, octMat);
    oct.position.set(-3.5, 1.5, -1);
    scene.add(oct);

    // ── 3. Tetrahedron (small, wireframe, gold light) ──
    const tetGeo = new THREE.TetrahedronGeometry(0.4, 0);
    const tetMat = new THREE.MeshBasicMaterial({
      color: 0xe8d5b0,
      wireframe: true,
      opacity: 0.2,
      transparent: true,
    });
    const tet = new THREE.Mesh(tetGeo, tetMat);
    tet.position.set(3.2, -1.8, -2);
    scene.add(tet);

    // ── 4. Orbiting rings ──
    const ring1 = new THREE.Mesh(
      new THREE.TorusGeometry(3.2, 0.008, 2, 80),
      new THREE.MeshBasicMaterial({ color: 0xc8a96e, opacity: 0.25, transparent: true })
    );
    ring1.rotation.x = Math.PI / 3;
    scene.add(ring1);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(3.8, 0.006, 2, 80),
      new THREE.MeshBasicMaterial({ color: 0xc8a96e, opacity: 0.25, transparent: true })
    );
    ring2.rotation.x = -Math.PI / 5;
    scene.add(ring2);

    // ── 5. Particle field ──
    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 7 * Math.cbrt(Math.random());
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particleGeo,
      new THREE.PointsMaterial({ color: 0xc8a96e, size: 0.022, transparent: true, opacity: 0.45 })
    );
    scene.add(particles);

    // ── 6. Lighting ──
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const pl1 = new THREE.PointLight(0xc8a96e, 3);
    pl1.position.set(4, 4, 4);
    scene.add(pl1);
    const pl2 = new THREE.PointLight(0xe8d5b0, 1.2);
    pl2.position.set(-4, -3, 2);
    scene.add(pl2);
    const dl = new THREE.DirectionalLight(0xffffff, 1);
    dl.position.set(0, 5, 5);
    scene.add(dl);

    // ── Mouse parallax ──
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    // ── Scroll reaction ──
    let scrollY = 0;
    const onScroll = () => { scrollY = window.scrollY; };
    window.addEventListener("scroll", onScroll);

    // ── Cinematic zoom ──
    const camTarget = { z: 8 };

    // ── Animation loop ──
    let rafId: number;
    const animate = () => {
      rafId = requestAnimationFrame(animate);

      // Gem rotation + scroll z-rotation
      gem.rotation.x += 0.003;
      gem.rotation.y += 0.005;
      gem.rotation.z = scrollY * 0.001;

      // Floating geometries
      oct.rotation.x += 0.008;
      oct.rotation.y += 0.004;
      tet.rotation.x -= 0.005;
      tet.rotation.y += 0.007;

      // Rings
      ring1.rotation.y += 0.004;
      ring2.rotation.y -= 0.003;

      // Particles drift
      particles.rotation.y += 0.0006;

      // Cinematic zoom
      camera.position.z += (camTarget.z - camera.position.z) * 0.02;

      // Mouse parallax
      camera.position.x += (mouse.x * 0.4 - camera.position.x) * 0.05;
      camera.position.y += (-mouse.y * 0.4 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      // Afterimage: paint semi-transparent dark over last frame, then render scene
      renderer.render(clearScene, clearCamera);
      renderer.clearDepth();
      renderer.render(scene, camera);
    };
    animate();

    // ── Cleanup ──
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}
