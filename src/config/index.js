import fs from 'fs';
import YAML from 'yaml';

export const writeConfig = () => {
  const config = {
    name: 'db1',
    user: 'root',
    password: 'test-pd',
  };

  console.log(YAML.stringify(config));

  fs.writeFileSync('./config.yml', YAML.stringify(config), 'utf8');
};