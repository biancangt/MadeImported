module.exports = function override(config, env) {
    if (env === "production") {
      config.optimization.minimizer = config.optimization.minimizer.filter(
        (plugin) => plugin.constructor.name !== "CssMinimizerPlugin"
      );
    }
    return config;
  };
  