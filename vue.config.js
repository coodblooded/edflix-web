module.exports = {
  devServer: {
    proxy: {
      'https://api.sendgrid.com/v3/mail': {
        target: 'https://sendgrid.com',
        changeOrigin: true,
      },
    },
  },
};
