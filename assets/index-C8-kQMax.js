function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-BQ8d9Z7h.js","assets/index-Clywn1vd.js","assets/index-D_z2SEfa.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-Clywn1vd.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-BQ8d9Z7h.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
