import dynamic from "next/dynamic";

const Map = dynamic(() => import("./PeruMap"), {
    ssr: false,
});

export default Map;