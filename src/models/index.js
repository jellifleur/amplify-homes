// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Target, Home } = initSchema(schema);

export {
  Target,
  Home
};