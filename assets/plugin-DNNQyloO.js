function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-NG5lVcJ0.js","assets/index-D2lId9k2.js","assets/index-C85Dne2p.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-D2lId9k2.js";async function r(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-NG5lVcJ0.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{r as loadLinksPlugin};
