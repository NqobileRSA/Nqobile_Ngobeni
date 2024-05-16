function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-B04hGv4x.js","assets/index-5trfZ4AP.js","assets/index-rvX9eUL_.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-5trfZ4AP.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-B04hGv4x.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
