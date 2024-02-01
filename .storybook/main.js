/** @type { import('@storybook/nextjs').StorybookConfig } */
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const config = {
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
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({}),
    ];
    config.resolve.alias = {
      ...config.resolve.alias,
      // 'styles' 별칭 설정
      '@style': path.resolve(__dirname, '../src/style'),
    };

    return config;
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
