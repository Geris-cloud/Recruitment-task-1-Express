const withImages = require('next-images')
module.exports = withImages({
  reactStrictMode: true,
  dbConfig: {
    user: 'b127572602ace8',
    host: 'eu-cdbr-west-01.cleardb.com',
    password: 'd9e86e86',
    database: 'heroku_5490835374fe91b',
    dateStrings: true,
  },
})