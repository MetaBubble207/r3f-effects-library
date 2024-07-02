import {useProgress} from "@react-three/drei";
import {Html} from "next/document";
import {Suspense} from "react";
import RenderParticle01 from "@/app/_components/render/render-particle/RenderParticle";
import RenderDiffusionWave01 from "@/app/_components/render/render-diffusion-wave/RenderDiffusionWave";
import RenderShadow01 from "@/app/_components/render/render-shadow/RenderShadow";

const LoaderDiffusionWave = () => {
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
                <RenderShadow01 />
            </Suspense>
        </>
    )
}

export default LoaderDiffusionWave;