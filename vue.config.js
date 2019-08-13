const mockMainInfoData = require("./mock/mainInfo.json");

module.exports = {
  publicPath: './',
  devServer: {
    port: 8080,
    before(app) {
      app.get("/api/mainInfo", (req, res) => {
        res.json(mockMainInfoData);
      });
    }
  }
}