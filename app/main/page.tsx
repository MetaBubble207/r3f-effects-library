"use client"

import * as THREE from 'three';
import {useEffect} from "react";
import {Canvas} from "@react-three/fiber";
import LoaderParticle from "@/app/_components/loader/LoaderParticle";

const Page = () => {


    return (
        <div className={"w-full h-[100vh]"}>


            <Canvas className={"w-full h-full"} camera={{position: [-200, 1, 1000], fov: 75, far: 200000}}>
                <LoaderParticle />
            </Canvas>
        </div>
    )
};

export default Page;
