import Sequelize, { Model } from 'sequelize';

class Appointment extends Model {
  static init(sequelize){
    super.init(
      {
      date: Sequelize.DATE,
      caceled_at: Sequelize.DATE,
      },
      {
       sequelize,
      }
    );
    return this;
  }

  static associations(models){
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'});
    this.belongsTo(models.User, { foreignKey: 'Provider_id', as: 'provider'});
  }
}

export default Appointment;

