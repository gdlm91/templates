import { TemplatesToolbox } from '../../../types';

const extend = (toolbox: TemplatesToolbox) => {
  toolbox.registerPlugin('templates-babel').onInit(async (toolbox) => {
    const { print, packageManager } = toolbox;

    const spinner = print.spin('templates-babel: installing dependencies');

    try {
      await packageManager.add('@babel/core', {});
      spinner.succeed();
    } catch (error) {
      spinner.fail(error);
    }
  });
};

export default extend;
