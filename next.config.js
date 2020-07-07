module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'raw-loader',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    );
    return config;
  },
};
