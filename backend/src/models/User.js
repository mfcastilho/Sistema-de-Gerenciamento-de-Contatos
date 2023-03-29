module.exports = (sequelize, DataTypes)=>{
     const User = sequelize.define("User", {
          id:{
               type: DataTypes.STRING,
               primaryKey: true,
               allowNull: false
          },
          name:{
               type: DataTypes.STRING,
               allowNull: false
          },
          email:{
               type: DataTypes.STRING,
               allowNull: false
          },
          password:{
               type: DataTypes.STRING,
               allowNull: false
          }

     },{
          tableName: "users",
          timestamps: true
     });

     return User;
}