import fs from 'fs';
import YAML from 'yaml';

export const writeConfig = (config) => {
  console.log(YAML.stringify(config));
  fs.writeFileSync('./data/config.yml', YAML.stringify(config), 'utf8');
};

export const saveConnection = async (connection) => {
  return writeConfig({ connections: [connection] });
};