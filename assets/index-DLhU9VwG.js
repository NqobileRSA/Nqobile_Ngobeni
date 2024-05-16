function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BB9-wj0t.js","assets/index-BenQRM94.js","assets/index-BSmzpAZc.css","assets/index-C5yOpyJI.js","assets/index-Cpp194XO.js","assets/index-BU-dS-_Q.js","assets/index-CVli_Fy3.js","assets/index-CtjMr3FC.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BenQRM94.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BB9-wj0t.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-C5yOpyJI.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Cpp194XO.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BU-dS-_Q.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CVli_Fy3.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CtjMr3FC.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
