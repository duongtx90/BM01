import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Crosshair, Cpu, Zap } from 'lucide-react';
import * as THREE from 'three';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.01, 100);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffca28, 3);
    dirLight.position.set(2, 2, 5);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0xff0000, 1);
    pointLight.position.set(-3, -3, 2);
    scene.add(pointLight);

    // Object: The "Brew Core"
    const geometry = new THREE.IcosahedronGeometry(1.3, 0);
    const material = new THREE.MeshStandardMaterial({ 
        color: 0x2d1b18,
        metalness: 0.9,
        roughness: 0.2,
        flatShading: true
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Wireframe wrapper
    const wireGeo = new THREE.WireframeGeometry(geometry);
    const wireMat = new THREE.LineBasicMaterial({ color: 0xffca28, transparent: true, opacity: 0.5 });
    const wireframe = new THREE.LineSegments(wireGeo, wireMat);
    mesh.add(wireframe);

    // Particles
    const particlesGeo = new THREE.BufferGeometry();
    const particleCount = 600;
    const posArray = new Float32Array(particleCount * 3);
    for(let i=0; i<particleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 18;
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
        size: 0.04,
        color: 0xffb300,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    let animationId: number;
    const animate = () => {
        animationId = requestAnimationFrame(animate);
        const time = Date.now() * 0.0005;

        mesh.rotation.x = time * 0.4;
        mesh.rotation.y = time * 0.2;
        wireframe.rotation.x = -time * 0.2; 
        wireframe.rotation.y = -time * 0.1;

        mesh.position.y = Math.sin(time * 1.5) * 0.15;
        
        particlesMesh.rotation.y = time * 0.05;
        renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
        if (!containerRef.current) return;
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationId);
        if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
            containerRef.current.removeChild(renderer.domElement);
        }
        geometry.dispose();
        material.dispose();
        renderer.dispose();
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-24 overflow-hidden bg-brew-950 flex flex-col lg:flex-row items-center border-b border-brew-800">
      
      {/* Background Grid & Effects */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ 
        backgroundImage: 'linear-gradient(to right, #5d4037 1px, transparent 1px), linear-gradient(to bottom, #5d4037 1px, transparent 1px)', 
        backgroundSize: '40px 40px' 
      }}></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brew-950/50 to-brew-950 z-0 pointer-events-none"></div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row h-full items-center">
        
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2 pt-12 lg:pt-0 mb-12 lg:mb-0 pointer-events-none">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-2 mb-6 text-amber-500 font-mono text-xs tracking-[0.3em]"
            >
                <Zap size={14} className="animate-pulse" />
                <span>IMMERSIVE_ENGINE_INIT</span>
            </motion.div>

            <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="font-display font-bold text-6xl md:text-8xl text-white leading-[0.9] mb-8 uppercase tracking-tight drop-shadow-2xl"
            >
                We Brew <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-600">
                    Realities
                </span>
            </motion.h1>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-start space-y-4 mb-10 border-l-2 border-amber-500/50 pl-6 bg-gradient-to-r from-black/60 to-transparent p-4 rounded-r-sm backdrop-blur-sm"
            >
                <p className="text-gray-300 text-lg font-mono leading-relaxed max-w-lg">
                    Brew Monster is a creative foundry building the next generation of <span className="text-amber-400 font-bold">AR/VR</span> experiences. From Unity shaders to Apple Vision Pro interactions, we turn code into magic.
                </p>
            </motion.div>

            <div className="flex flex-wrap gap-4 pointer-events-auto">
                <a href="#services" className="group relative bg-amber-400 hover:bg-amber-300 text-brew-950 font-bold px-8 py-4 flex items-center space-x-2 transition-all hover:skew-x-[-10deg] overflow-hidden clip-tech-border">
                    <span className="relative z-10 flex items-center">
                         START ENGINE <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                </a>
                <button className="border border-amber-500/50 text-amber-400 hover:bg-amber-500/10 px-8 py-4 font-bold flex items-center space-x-3 transition-all uppercase tracking-wider font-mono text-sm hover:border-amber-500">
                    <Play size={16} />
                    <span>Showreel_2024.mp4</span>
                </button>
            </div>
        </div>

        {/* Right: 3D Scene */}
        <div className="w-full lg:w-1/2 h-[400px] lg:h-[700px] relative flex items-center justify-center">
            {/* HUD Elements */}
            <div className="absolute top-10 left-10 font-mono text-[10px] text-amber-500/40 flex flex-col gap-1">
                <span>FPS: 60.0</span>
                <span>MEM: 2048MB</span>
                <span>GPU: ACTIVE</span>
            </div>
            
            <div className="absolute inset-4 border border-amber-500/10 rounded-lg pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-500/60"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-500/60"></div>
            
            <div ref={containerRef} className="w-full h-full z-20 relative cursor-move" title="Drag to rotate view"></div>
            
            <div className="absolute bottom-10 w-full text-center pointer-events-none">
                <div className="inline-flex items-center space-x-2 bg-black/50 px-3 py-1 rounded-full border border-amber-500/30">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-amber-500/80 text-[10px] font-mono tracking-widest">ARTIFACT_DETECTED</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;