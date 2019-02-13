const path = require("path");

function resolve(src){
    return path.join(__dirname,src);
}

module.exports={
    devServer:{
        proxy:{
            "api":{
                target:"http://localhost:9090",
                changeOrigin:true,
            }
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
        .set('@views',resolve('src/views'))
        .set('@components',resolve('src/components'))
        .set('@api',resolve('src/api'))
    },
  


}