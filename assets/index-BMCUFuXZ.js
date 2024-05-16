function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-ltJwYoI7.js","assets/index-5trfZ4AP.js","assets/index-rvX9eUL_.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-5trfZ4AP.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-ltJwYoI7.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
