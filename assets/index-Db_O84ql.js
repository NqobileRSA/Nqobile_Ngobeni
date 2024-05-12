function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-BKS_KgnI.js","assets/index-D2lId9k2.js","assets/index-C85Dne2p.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-D2lId9k2.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-BKS_KgnI.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
