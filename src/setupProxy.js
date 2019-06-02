const proxy = require("http-proxy-middleware");
var cors = require('cors')

module.exports = app => {
  app.use(
    "/api",
    proxy({
      target: "http://localhost:4000",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/api/v1"
      }
    })
  );
};


//app.use(cors()) // Use this after the variable declaration
