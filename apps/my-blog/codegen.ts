import { CodegenConfig } from '@graphql-codegen/cli';
import { join } from 'path';

const config: CodegenConfig = {
  schema: join(__dirname, '../../', 'schema.gql'),
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
};

export default config;
