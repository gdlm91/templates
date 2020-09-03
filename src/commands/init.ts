import { TemplatesCommand } from '../types';

const COMMAND_NAME = 'init';

const command: TemplatesCommand = {
  name: COMMAND_NAME,
  run: async (toolbox) => {
    const { print, runtime } = toolbox;

    print.info('Templates: initializing project');

    // first plugin is always the core commands/extensions (templates)
    const [defaultPlugin, ...plugins] = runtime.plugins;

    const initCommands = plugins.reduce((commands, plugin) => {
      const initCommand = plugin.commands.find((command) => command.name === COMMAND_NAME);

      return initCommand ? [...commands, initCommand] : commands;
    }, [] as TemplatesCommand[]);

    // execute init command of all our plugins
    initCommands.forEach((command) => command.run(toolbox));
  },
};

export default command;
