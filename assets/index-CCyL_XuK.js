function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-DWLyplSO.js","assets/index-CFz9CK6T.js","assets/index-CS6AYAkw.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-CFz9CK6T.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-DWLyplSO.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
