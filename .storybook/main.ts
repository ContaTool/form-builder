import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
require('tty-browserify');

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        modules: [path.resolve('./src'), ...config.resolve.modules],
        fallback: {
          ...config.resolve.fallback,
          tty: require.resolve('tty-browserify'),
          os: require.resolve('os-browserify/browser'),
        },
      },
    };
  },
};
export default config;
