import fs from 'fs';
import YAML from 'yaml';

const CONFIG_PATH = './data/config.yml';

export const writeConfig = (config) => {
  fs.writeFileSync(CONFIG_PATH, YAML.stringify(config), 'utf8');
};

export const loadConfig = () => {
  const file = fs.readFileSync(CONFIG_PATH, 'utf-8');
  return YAML.parse(file);
};

export const getAllConnections = async () => {
  try {
    const config = loadConfig();
    return config.connections;
  } catch (e) {
    return [];
  }
};

export const saveConnection = async (connection) => {
  const existConnections = await getAllConnections();
  return writeConfig({ connections: [...existConnections, connection] });
};