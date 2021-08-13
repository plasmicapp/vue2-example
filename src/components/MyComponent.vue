<template>
  <div id="app">
    <PlasmicRootProvider :loader="this.loader">
      <PlasmicComponent component="Homepage" />
    </PlasmicRootProvider>
  </div>
</template>

<script>
//import Vue from "vue";

import { initPlasmicLoader } from "@plasmicapp/loader-vue";
import { PlasmicRootProvider, PlasmicComponent } from "@plasmicapp/loader-vue";

export const PLASMIC = initPlasmicLoader({
  preview: true,
  projects: [
    {
      id: "fhVsy6Th3V5n1cTDesn593", // ID of a project you are using
      token:
        "Q4IZDtX8GPExpGtXsDrtPkMh14PPWMukDwGYEQk5xBJiNxifFDGyx2FE0dOLAJXpEHfIOhOITJ3sYphiiWw", // API token for that project
    },
  ],
});

//export default Vue.extend({
//  name: "MyComponent",
//  components: {
//    PlasmicRootProvider,
//    PlasmicComponent,
//  },
//  computed: {
//    loader() {
//      return PLASMIC;
//    },
//  },
//});

export default {
  name: "MyComponent",
  components: {
    PlasmicRootProvider,
    PlasmicComponent,
  },
  computed: {
    loader() {
      return PLASMIC;
    },
  },
};
</script>
