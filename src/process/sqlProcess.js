import mysqlProcessor from './mysql';
import { MYSQL } from '../common/sqlTypes';

const processors = {
  [MYSQL]: mysqlProcessor,
};

const getProcessor = (config) => {
  const type = config.type;
  const processor = processors[type];
  if (!processor) {
    console.error('Not supportted sql type: ', type);
    return;
  }
  return processor;
};

let activeProcessor = null;

export const executeQuery = async (sql) => {
  return activeProcessor && activeProcessor.query(sql);
};

export const activeConnection = async (config) => {
  console.log(config);
  const processor = getProcessor(config);
  activeProcessor = processor;
  return processor.activeConnection(config);
};