import { resolve } from "path";
import { fileURLToPath } from "url";
import {
  defineNuxtModule,
  addPlugin,
  addServerMiddleware,
  addComponentsDir,
  addAutoImportDir,
  createResolver,
} from "@nuxt/kit";

export interface ModuleOptions {
  addPlugin: boolean;
}

export default defineNuxtModule({
  meta: {
    name: "@nuxt-gridjs",
    configKey: "nuxt-gridjs",
    compatibility: {
      nuxt: "^3.0.0",
    },
  },
  defaults: {
    addPlugin: true,
  },
  hooks: {},
  async setup(moduleOptions, nuxt) {
    console.log("Loading module for Grid.js");

    const resolver = createResolver(import.meta.url);

    //composables
    const composablesDir = fileURLToPath(
      new URL("./runtime/composables", import.meta.url)
    );

    addAutoImportDir(composablesDir);

    //plugins
    if (moduleOptions.addPlugin) {
      addPlugin(resolver.resolve("runtime/plugins/gridjs.ts"));
    }

    //components
    const componentsDir = fileURLToPath(
      new URL("./runtime/components", import.meta.url)
    );

    addComponentsDir({
      path: componentsDir,
    });

    //hooks
    nuxt.hook("close", async (nuxt) => {
      console.log("Nuxt module close hook");
    });
  },
});
