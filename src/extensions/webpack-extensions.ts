import { TemplatesToolbox } from '../types';

const extend = (toolbox: TemplatesToolbox) => {
  toolbox.registerPlugin('templates-webpack').onInit((toolbox) => {
    const { print } = toolbox;

    print.fancy('Webpack: this is a fancy print');
  });
};

export default extend;
