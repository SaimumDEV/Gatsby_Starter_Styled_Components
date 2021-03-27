const path = require("path")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}
