import { GluegunCommand } from 'gluegun';

import { TemplatesToolbox } from '../../../types';

const command: GluegunCommand<TemplatesToolbox> = {
  name: 'init',
  run: async (toolbox) => {
    const { print } = toolbox;

    print.info('Templates babel: initializing babel setup');
  },
};

export default command;
