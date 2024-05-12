function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-CU7_JA2-.js","assets/index-D2lId9k2.js","assets/index-C85Dne2p.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-D2lId9k2.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-CU7_JA2-.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
