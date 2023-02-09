import React, { FC, useRef } from 'react'
import { Canvas } from "@react-three/fiber";
import { Mesh, BufferGeometry, Material } from "three";
import * as THREE from "three";

interface ComponentProps {
}
const Screen: FC<ComponentProps> = () => {

    return (
        <div className='text-base-content h-screen'>
            Hola
        </div>
    )
}

export default Screen