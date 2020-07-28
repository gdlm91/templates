import { print } from 'gluegun';
import { TemplatesPlugin, TemplatesOnInit, TemplatesPluginAPI as ITemplatesPluginAPI } from '../../types';

class TemplatesPluginAPI implements ITemplatesPluginAPI {
  constructor(private name: string, private registry: PluginsRegistry) {}

  onInit = (command: TemplatesOnInit) => {
    this.registry.registerOnInit(this.name, command);
    return this;
  };
}

export class PluginsRegistry {
  private extensions = new Map<string, TemplatesPlugin>();

  registerPlugin = (name: string) => {
    if (this.extensions.has(name)) {
      print.error(`Templates: extension ${name} tried to register more than once`);
      throw Error();
    }

    this.extensions.set(name, {});

    return new TemplatesPluginAPI(name, this);
  };

  getAllPlugins = () => {
    return Array.from(this.extensions.entries());
  };

  registerOnInit = (name: string, command: TemplatesOnInit) => {
    const extension = this.extensions.get(name);

    if (!extension) {
      print.error(`Templates: extension ${name} does not exists`);
      throw Error();
    }

    if (!command) {
      print.error(`Templates: extension ${name} tried to register an empty init command`);
      throw Error();
    }

    if (extension.onInit) {
      print.warning(`Templates: extension ${name} is registering an init command more than once.`);
    }

    extension.onInit = command;
  };
}

export default new PluginsRegistry();
