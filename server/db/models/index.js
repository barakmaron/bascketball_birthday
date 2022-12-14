import Sequelize from 'sequelize';
import Images from './Images.js';
import Events from './Events.js';
import dotenv from 'dotenv';
import EventsInfo from './EventsInfo.js';
import Users from './Users.js';
import Recommendation from './Recommendation.js';
dotenv.config();

export const sequelize = new Sequelize(
    process.env.DATABASE, 
    process.env.DATABASE_USER, 
    process.env.DATABASE_PASSWORD, 
    {
        host: process.env.DATABASE_HOST,
        dialect: 'mysql'
});

export const ImagesModel = Images(sequelize, Sequelize.DataTypes);
export const EventsModel = Events(sequelize, Sequelize.DataTypes);
export const EventsInfoModel = EventsInfo(sequelize, Sequelize.DataTypes);
export const UsersModel = Users(sequelize, Sequelize.DataTypes);
export const RecommendationModal = Recommendation(sequelize, Sequelize.DataTypes);

EventsModel.belongsTo(EventsInfoModel);
EventsInfoModel.hasOne(EventsModel);