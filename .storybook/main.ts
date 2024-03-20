import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-viewport',
  ],
  webpackFinal: async config => {
    // TsconfigPathsPlugin 추가
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        // 'styles' 별칭 설정
        '@': path.resolve(__dirname, '../src'),
        '@style': path.resolve(__dirname, '../src/style'),
        '@public': path.resolve(__dirname, '../public'),
      };
    }
    return config;
  },
  staticDirs: ['../public'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
export default config;
