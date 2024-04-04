// next.config.js
module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // 기존 로더 설정에 .stories.tsx 파일을 제외하는 설정을 추가합니다.
    config.module.rules.push({
      exclude: /\.stories\.tsx$/,
    });

    // Webpack 설정을 반환합니다.
    return config;
  },
};
