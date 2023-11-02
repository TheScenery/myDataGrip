import fs from 'fs';
import YAML from 'yaml';

export const writeConfig = () => {
  const config = {
    connection: {
      name: 'db1',
      user: 'root',
      password: 'test-pd',
    },
  };

  console.log(YAML.stringify(config));

  fs.writeFileSync('./data/config.yml', YAML.stringify(config), 'utf8');
};