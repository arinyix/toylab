'use client'

import { useRef, Suspense, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { GLTFLoader } from 'three-stdlib'
import { getModelConfig, hasGLTFModel } from '@/config/modelConfig'

interface Product3DViewerProps {
  productSlug: string
}

// Componente de fallback simples
function FallbackModel() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#678441" />
    </mesh>
  )
}

// Componente para carregar modelos GLTF usando Three.js diretamente
function GLTFModel({ modelConfig }: { modelConfig: any }) {
  const modelRef = useRef<THREE.Group>(null)
  const loaderRef = useRef<GLTFLoader | null>(null)
  const [model, setModel] = useState<THREE.Group | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!loaderRef.current) {
      loaderRef.current = new GLTFLoader()
    }

    setLoading(true)
    loaderRef.current.load(
      modelConfig.path,
      (gltf) => {
        setModel(gltf.scene)
        setLoading(false)
      },
      undefined,
      (error) => {
        console.error('Erro ao carregar modelo GLTF:', error)
        setLoading(false)
      }
    )
  }, [modelConfig.path])

  // Removida a rotação automática para manter o modelo estático

  if (loading || !model) {
    return <FallbackModel />
  }

  return (
    <group 
      ref={modelRef}
      scale={modelConfig.scale || 1}
      position={modelConfig.position || [0, 0, 0]}
      rotation={modelConfig.rotation || [0, 0, 0]}
    >
      <primitive object={model} />
    </group>
  )
}

function ProductModel({ productSlug }: { productSlug: string }) {
  const modelConfig = getModelConfig(productSlug)

  // Se existe um modelo GLTF para este produto, carrega ele
  if (modelConfig && hasGLTFModel(productSlug)) {
    return (
      <Suspense fallback={<FallbackModel />}>
        <GLTFModel modelConfig={modelConfig} />
      </Suspense>
    )
  }

  // Fallback para forma geométrica básica
  return <FallbackModel />
}

// Controles orbitais customizados usando Three.js diretamente
function CustomOrbitControls() {
  const controlsRef = useRef<any>(null)
  const { camera, gl } = useThree()

  useEffect(() => {
    if (!controlsRef.current) {
      const { OrbitControls } = require('three/examples/jsm/controls/OrbitControls')
      controlsRef.current = new OrbitControls(camera, gl.domElement)
      controlsRef.current.enablePan = true
      controlsRef.current.enableZoom = true
      controlsRef.current.enableRotate = true
      controlsRef.current.minDistance = 5
      controlsRef.current.maxDistance = 25
      controlsRef.current.target.set(0, 0, 0) // Centraliza o foco
    }

    return () => {
      if (controlsRef.current) {
        controlsRef.current.dispose()
      }
    }
  }, [camera, gl])

  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update()
    }
  })

  return null
}

export default function Product3DViewer({ productSlug }: Product3DViewerProps) {
  return (
    <div className="w-full h-full bg-black rounded-lg">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <pointLight position={[-2, -2, -2]} intensity={0.5} />
        
        <ProductModel productSlug={productSlug} />
        
        <CustomOrbitControls />
      </Canvas>
    </div>
  )
}