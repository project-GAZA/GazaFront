// next.config.js
module.exports = {
  reactStrictMode: false,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // 기존 로더 설정에 .stories.tsx 파일을 제외하는 설정을 추가합니다.
    config.module.rules.push({
      exclude: /\.stories\.tsx$/,
    });

    // Webpack 설정을 반환합니다.
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true, // ESLint 검사 무시
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' }, // replace this your actual origin
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,DELETE,PATCH,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
};
