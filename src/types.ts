import { GluegunToolbox } from 'gluegun';

export interface TemplatesToolbox extends GluegunToolbox {
  registerPlugin: (name: string) => TemplatesPluginAPI;
}

export type TemplatesOnInit = (toolbox: TemplatesToolbox) => Promise<void> | void;

export interface TemplatesPlugin {
  onInit?: TemplatesOnInit;
}

export interface TemplatesPluginAPI {
  onInit: (command: TemplatesOnInit) => TemplatesPluginAPI;
}
