const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

const path = require("path");

module.exports = {
  output: {
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new WebpackPwaManifestPlugin({
      name: "Petgram - Tu app de fotos de mascotas",
      short_name: "Petgram 🐱",
      description:
        "Con petgram puedes encontrar fotos de animales domésticos bonitos",
      background_color: "#fff",
      theme_color: "#b1a",
      icons: [
        {
          src: path.resolve("src/assets/icon.png"),
          sizes: [96, 128, 192, 256, 384, 512],
          ios: true,
        },
      ],
      ios: {
        "apple-mobile-web-app-title": "Petgram 🐱",
        "apple-mobile-web-app-status-bar-style": "black",
      },
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            "https://(res.cloudinary.com|images.unsplash.com)"
          ),
          handler: "CacheFirst",
          options: {
            cacheName: "images",
          },
        },
        {
          urlPattern: new RegExp(
            "https://petgram-ianpedraza-hs26ht9s0-ianpedraza.vercel.app/"
          ),
          handler: "NetworkFirst",
          options: {
            cacheName: "api",
          },
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
