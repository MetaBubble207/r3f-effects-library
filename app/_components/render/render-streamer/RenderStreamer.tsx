import {useEffect} from "react";
import {useFrame} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";

const RenderStreamer01 = () => {
    useEffect(() => {

    }, []);

    useFrame(()=>{
        if (groupRef.current){
            const time = Date.now() + 0.001;
            groupRef.current.rotation.x = time * 0.25;
            groupRef.current.rotation.y = time * 0.5;
        }
    });
    return (
        <>
            <ambientLight intensity={0.5} />
            <OrbitControls />
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
            </mesh>
        </>
    );
};

export default RenderStreamer01;