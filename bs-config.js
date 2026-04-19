module.exports = {
  proxy: "localhost:80",
  files: ["docs/**/*.{html,css,js}"],
  port: 3000,
  open: true,
  notify: false,
  reloadDelay: 0,
  watchOptions: {
    ignoreInitial: true,
    ignored: '*.min.js'
  }
};
