import {Sequelize} from "sequelize-typescript";
import Product from "../src/Products/Domain/Product";

const sequelize = new Sequelize({
    database: process.env.MYSQL_DATABASE,
    dialect: 'mysql',
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
});

sequelize.addModels([Product])

export default sequelize;