//import { Pool } from 'pg';
import Sequelize from 'sequelize';
const { PGDATABASE, PGUSER, PGPASSWORD, PGHOST, PGPORT } = process.env;
const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    host: PGHOST,
    port: parseInt(PGPORT),
    dialect: 'postgres',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 1,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: true
    }
});

export default sequelize;