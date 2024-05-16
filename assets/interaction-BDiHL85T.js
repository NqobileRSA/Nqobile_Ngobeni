function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-8xRuEUQ3.js","assets/Ranges-D5LUnGBF.js","assets/index-5trfZ4AP.js","assets/index-rvX9eUL_.css","assets/index-Bk3aL4El.js","assets/OptionsColor-DK7MQOzY.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-5trfZ4AP.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-8xRuEUQ3.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};
