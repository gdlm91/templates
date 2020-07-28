import pluginsRegistry from '../core/plugins/plugins-registry';
import { TemplatesToolbox } from './../types';

/**
 * This extension needs to load before ALL other extensions in order to add the APIs to the toolbox.
 * That's why its name is `_core`, to make it the first file to be loaded
 */
const extend = async (toolbox: TemplatesToolbox) => {
  // enable this if you want to read configuration in from
  // the current folder's package.json (in a "templates" property),
  // templates.config.json, etc.
  // toolbox.config = {
  //   ...toolbox.config,
  //   ...toolbox.config.loadConfig(process.cwd(), "templates")
  // }

  toolbox.registerPlugin = (name: string) => pluginsRegistry.registerPlugin(name);
};

export default extend;
