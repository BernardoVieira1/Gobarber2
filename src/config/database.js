module.exports = {
  dialect: 'postgres',
  host: 'localost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define:{
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
