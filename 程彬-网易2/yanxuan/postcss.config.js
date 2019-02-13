module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem":{
        "rootValue":75,
         propList: ["*"],
         selectorBlackList: [".border",".app-header",".tab-bar",".home-header",".home-menu",".van-overlay",".content",".nav",".cateScroll",".van-toast",".van-submit-bar__bar"],
    }
  }
}
