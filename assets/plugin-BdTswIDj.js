function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-TMy3tICr.js","assets/index-CFz9CK6T.js","assets/index-CS6AYAkw.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CFz9CK6T.js";async function r(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-TMy3tICr.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{r as loadLinksPlugin};
