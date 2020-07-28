import * as path from 'path';
import { build } from 'gluegun';

/**
 * Create the cli and kick it off
 */
async function run(argv) {
  // create a CLI runtime
  const cli = build('templates')
    .src(path.resolve(__dirname)) // load core APIs, extensions and commands
    // .plugins('./node_modules', { matching: 'templates-*', hidden: true }) // load plugins
    .help() // provides default for help, h, --help, -h
    .version() // provides default for version, v, --version, -v
    .create();

  // and run it
  const toolbox = await cli.run(argv);

  // send it back (for testing, mostly)
  return toolbox;
}

module.exports = { run };
