import {Html, useProgress} from "@react-three/drei";

import {Suspense} from "react";
import RenderParticle01 from "@/app/_components/render/render-particle/RenderParticle";

const LoaderParticle = () => {
    const Loader = () =>{
        const {active, progress, errors, item, loaded, total} = useProgress();
        console.log(progress, loaded, total);
        return <Html center>
            <div className={"loader"}>
                <div className={"spinner"}></div>
            </div>
        </Html>
    }
    return (
        <>
            <Suspense fallback={<Loader/>}>
                <RenderParticle01 />
            </Suspense>
        </>
    )
}

export default LoaderParticle;