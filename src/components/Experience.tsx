import React, { FC, MouseEventHandler, ReactNode, useCallback, useRef, useState } from 'react'
import { Canvas } from "@react-three/fiber";
import { Html, Stars } from "@react-three/drei";
import * as THREE from 'three';
import Effects from './experience/hero/Effects';
import Particles from './experience/hero/Particles';

interface ComponentProps {
    children: ReactNode
}
const Experience: FC<ComponentProps> = ({ children }) => {
    const [mouseDown, setMouseDown] = useState(false);
    const [mousePosition, setMousePosition] = useState([0, 0])
    const mouse = useRef([0, 0]);
    const onMouseMove = (useCallback(
        ({ clientX: x, clientY: y }) => {
            setMousePosition(mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2])
            return mousePosition
        },
        []) as MouseEventHandler<HTMLDivElement>
    );
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );
    return (

        <div className='w-screen h-screen'>
            <Canvas
                camera={{ position: [0, 0, 5] }}
                onMouseUp={() => setMouseDown(false)}
                onMouseDown={() => setMouseDown(true)}
                onTouchStart={() => setMouseDown(true)}
                onTouchEnd={() => setMouseDown(false)}
                onMouseMove={onMouseMove}
                onCreated={({ gl }) => {
                    gl.shadowMap.enabled = true;
                    gl.shadowMap.type = THREE.PCFSoftShadowMap;
                    gl.setClearColor(new THREE.Color("#121212"));
                }}
            >
                <ambientLight />
                <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
                <Effects mouse={mousePosition} mouseDown={mouseDown} />
                <Stars
                    count={isMobile ? 500 : 1000} //500 on mobile
                    factor={2}
                />
                <Particles
                    count={isMobile ? 100 : 200} // 200 & 50-75 on mobile
                    mouse={mousePosition}
                />
                <mesh>
                    <boxGeometry />
                    <meshStandardMaterial />
                </mesh>
                <Html center>
                    {children}
                </Html>
            </Canvas>
        </div>
    )
}

export default Experience