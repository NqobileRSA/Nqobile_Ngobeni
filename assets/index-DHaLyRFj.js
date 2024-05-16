function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-B6SmnFsA.js","assets/index-CFz9CK6T.js","assets/index-CS6AYAkw.css","assets/index-DyORPnIK.js","assets/index-DWAZ8zJU.js","assets/index-CkFCsSZU.js","assets/index-Ca4lreW0.js","assets/index-Dxfibxwe.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CFz9CK6T.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-B6SmnFsA.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DyORPnIK.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DWAZ8zJU.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CkFCsSZU.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-Ca4lreW0.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Dxfibxwe.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
