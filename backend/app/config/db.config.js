module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "beepisscum",
    DB: "caption_contest",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };