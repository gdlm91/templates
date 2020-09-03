import { GluegunToolbox, GluegunCommand } from 'gluegun';
import Config = require('webpack-chain');

export type TemplatesCommand = GluegunCommand<TemplatesToolbox>;

export interface TemplatesToolbox extends GluegunToolbox {
  registerPlugin: (name: string) => TemplatesPluginAPI;
  webpackConfig: () => TemplatesWebpackCondfig;
}

export type TemplatesHookCommand = (toolbox: TemplatesToolbox) => Promise<void> | void;

export interface TemplatesPlugin {
  onInit?: TemplatesHookCommand;
  onStart?: TemplatesHookCommand;
}

export interface TemplatesPluginAPI {
  onInit: (command: TemplatesHookCommand) => TemplatesPluginAPI;
  onStart: (command: TemplatesHookCommand) => TemplatesPluginAPI;
}

export type TemplatesWebpackCondfig = Config;
