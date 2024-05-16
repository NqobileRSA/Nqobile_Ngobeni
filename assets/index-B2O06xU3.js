function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-C8-kQMax.js","assets/index-Clywn1vd.js","assets/index-D_z2SEfa.css","assets/index-CaqkmU6P.js","assets/index-B_SsZXz-.js","assets/index-CBc8M8R4.js","assets/index-DHgkHCO2.js","assets/index-ZRnmbx_F.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Clywn1vd.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-C8-kQMax.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CaqkmU6P.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-B_SsZXz-.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CBc8M8R4.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DHgkHCO2.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-ZRnmbx_F.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
