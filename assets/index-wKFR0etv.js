function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-BLS9HU3F.js","assets/index-Clywn1vd.js","assets/index-D_z2SEfa.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-Clywn1vd.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-BLS9HU3F.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
