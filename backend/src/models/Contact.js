module.exports = (sequelize, DataTypes)=>{
     const Contact = sequelize.define("Contact", {
          id:{
               type: DataTypes.STRING,
               primaryKey: true,
               allowNull: false
          },
          name:{
               type: DataTypes.STRING,
               allowNull: false
          },
          tel:{
               type: DataTypes.STRING,
               allowNull: false
          },
          email:{
               type: DataTypes.STRING,
               allowNull: false
          },
          userId:{
               type: DataTypes.STRING,
               allowNull: false,
          }     
     },{
          tableName: "contacts",
          timestamps: true
     });

     Contact.associate = (models)=>{
          Contact.belongsTo(models.User, {
               foreingKey: "userId",
               as: "user"
          });
     }

     return Contact;
}