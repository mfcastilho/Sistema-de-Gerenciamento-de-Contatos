const {User, Contact} = require("../models");
const {v4:makeId} = require("uuid");
const { NOW, Op } = require("sequelize");

const ContactController = {

     showAllContacts: (req, res)=>{

     },

     showContactInfos: (req, res)=>{

     },

     storeContact: async (req, res)=>{
         
          try {

               const {name, tel, email, userId} = req.body;
          
               const verifyIfContactExists = await Contact.findOne({
                    where:{
                         [Op.or]:[{name},{email}]
                    }
               });
     
               if(verifyIfContactExists){
                    return res.status(400).json({error:true, message: "Contato já se encontra cadastrado"});
               }
     
     
               const newContact = {
                    id:makeId(),
                    name,
                    tel,
                    email,
                    userId: userId
               }
     
               const contact = await Contact.create(newContact);
     
               return res.status(201).json({data: newContact});

          } catch (error) {
               
               if (error.name === "SequelizeConnectionRefusedError"){
                    return res.status(500).json({error: true, message: "Sistema indisponível, tente novamente mais tarde!"})
               }
            
               if (error.name === "SequelizeUniqueConstraintError"){
                    return res.status(400).json(error.parent.sqlMessage);
               }
            
               if (error.name === "SequelizeValidationError"){
                    return res.status(400).json({error: true, message: `${error.errors[0].type} at ${error.errors[0].path}`})
               }
          }


     },

     editContact: (req, res)=>{

     },

     deleteContact: (req, res)=>{

     }
}

module.exports = ContactController;