config.resolve.modules.push("../../../../src/wasmJsMain/js");

if (config.devServer) {
    config.devServer.hot = true;
    config.devServer.open = false;
    config.devServer.port = 3000;
//    config.devtool = 'eval-cheap-source-map';
} else {
    config.devtool = undefined;
}

// disable bundle size warning
config.performance = {
    assetFilter: function (assetFilename) {
        return !assetFilename.endsWith('.js');
    },
};
