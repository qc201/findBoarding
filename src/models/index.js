// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BoardingProvider } = initSchema(schema);

export {
  BoardingProvider
};