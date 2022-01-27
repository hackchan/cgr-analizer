module.exports = {
    apps : [{
      name   : "csv-analizer",
      script : "index.js",
      instances:1,
      watch:true,
      ignore_watch:[".git", "node_modules", "public", "*.xlsx", "*.txt", "*.pdf", "*.csv"],
      env: {
         NODE_ENV: "production",
         NODE_PORT:5000,
         LIMIT_FILE_MB:20
      },
      env_development: {
         NODE_ENV: "dev"
      }
    }]
  }