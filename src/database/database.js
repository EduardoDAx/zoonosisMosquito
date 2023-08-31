import  Sequelize  from "sequelize";

export const sequelize = new Sequelize(
"Point",
"postgres",
"root",
{
host:"localhost",
dialect: "postgres",
}
);