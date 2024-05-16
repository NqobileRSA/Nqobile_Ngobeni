function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-C3d2xT15.js","assets/index-CmScFqKL.js","assets/index-BmA8iU8U.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-CmScFqKL.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-C3d2xT15.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
