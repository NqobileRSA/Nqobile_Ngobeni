function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-uP4nyBaH.js","assets/index-5trfZ4AP.js","assets/index-rvX9eUL_.css","assets/index-Dn8EDdBL.js","assets/index-Cs2bjfEx.js","assets/index-DxutNa_Y.js","assets/index-BuNnSXK6.js","assets/index-BJ62Bf_z.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-5trfZ4AP.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-uP4nyBaH.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Dn8EDdBL.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Cs2bjfEx.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DxutNa_Y.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BuNnSXK6.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BJ62Bf_z.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
