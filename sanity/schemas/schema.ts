import { SchemaTypeDefinition } from 'sanity';

import home_content from './project-schema/home-schema';

export const schemaTypes = [home_content];
export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
};