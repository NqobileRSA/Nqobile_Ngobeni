function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-VvbpWePE.js","assets/index-CmScFqKL.js","assets/index-BmA8iU8U.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-CmScFqKL.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-VvbpWePE.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
