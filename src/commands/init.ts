import { GluegunCommand } from 'gluegun';

import { TemplatesToolbox } from '../types';
import pluginsRegistry from '../core/plugins/plugins-registry';

const command: GluegunCommand<TemplatesToolbox> = {
  name: 'init',
  run: async (toolbox) => {
    const { print } = toolbox;

    print.info('Templates: initializing project');

    // Executing init commands from all plugins
    for (const templatesPlugin of pluginsRegistry.getAllPlugins()) {
      const [name, plugin] = templatesPlugin;
      const { onInit } = plugin;

      if (!onInit) {
        return;
      }

      print.info(`Templates: executing onInit for ${name}`);

      // resolve possible async command
      await Promise.resolve(onInit(toolbox));
    }
  },
};

export default command;
