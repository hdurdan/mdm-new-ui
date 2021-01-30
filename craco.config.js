const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#1660e7",
              "@border-radius-base": "6px",
              "@btn-font-weight": "600",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
