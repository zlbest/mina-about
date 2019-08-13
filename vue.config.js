const mockMainInfoData = require("./mock/mainInfo.json");
const mockAboutInfoData = require("./mock/aboutInfo.json");

module.exports = {
  publicPath: './',
  devServer: {
    port: 8080,
    before(app) {
      app.get("/api/mainInfo", (req, res) => {
        res.json(mockMainInfoData);
      }),
      app.get("/api/aboutInfo", (req, res) => {
        res.json(mockAboutInfoData);
      })
    }
  }
}