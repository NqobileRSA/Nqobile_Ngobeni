function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-D2hXHeHn.js","assets/index-D2lId9k2.js","assets/index-C85Dne2p.css","assets/index-CEVj3au3.js","assets/index-B1_aZCsL.js","assets/index-BUSm7pJo.js","assets/index-__fr0XHF.js","assets/index-nYRDB_Sg.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-D2lId9k2.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-D2hXHeHn.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CEVj3au3.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-B1_aZCsL.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BUSm7pJo.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-__fr0XHF.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-nYRDB_Sg.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
