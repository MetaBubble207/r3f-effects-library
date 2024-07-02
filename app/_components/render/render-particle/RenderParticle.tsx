import { useEffect, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";


const RenderParticle01 = () => {
    const groupRef = useRef();
    const fbx = useLoader(FBXLoader, '00 Residential Buildings Set Array.fbx');

    useFrame(() => {
        if (groupRef.current) {
            const time = Date.now() * 0.001; // 修正为乘以 0.001 将时间转换为秒
            groupRef.current.rotation.x = time * 0.25;
            groupRef.current.rotation.y = time * 0.5;
        }
    });

    return (
        <>
            <ambientLight intensity={0.5} />
            <OrbitControls />
                <primitive object={fbx} />
                <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshBasicMaterial color={0x00ff00} />
                </mesh>
        </>
    );
};

export default RenderParticle01;
