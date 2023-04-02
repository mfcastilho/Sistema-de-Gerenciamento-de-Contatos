const {User, Contact} = require("../models");
const {v4:makeId} = require("uuid");
const { NOW, Op } = require("sequelize");

const ContactController = {

     showAllContacts: async (req, res)=>{

          const {id} = req.params;

          try {
               const contacts = await Contact.findAll({
                    where:{userId:id}
               });

               console.log(contacts)

               if(!contacts){
                    return res.status(404).json({error: true, message: "Nenhum contato encontrado"});
               }

               return res.status(200).json({data: contacts});

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

     showContactInfos: async (req, res)=>{
          try {
               
               const {id} = req.params;

               console.log("ID:"+id)

               const contact = await Contact.findByPk(id);

               console.log(contact);

               if(!contact){
                    return res.status(404).json({error: true, message: "Nenhum contato encontrado"});
               }

               return res.status(200).json({data: contact});

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

     editContact: async (req, res)=>{
          try {

               const {name, tel, email} = req.body;
               const {id} = req.params;

               const verifyIfContactExists = await Contact.findByPk(id);

               if(!verifyIfContactExists){
                    return res.status(400).json({error:true, message: "Contato não está cadastrado e por isso não pode ser editado"});
               }

               await Contact.update({
                    name,
                    tel,
                    email
               },
               {
                    where:{
                        id: id
                    }
               });

               const contact = await Contact.findByPk(id);

               return res.status(200).json({data: contact});
               
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

     deleteContact: async (req, res)=>{
          try {

               const {id} = req.params;
               const contact = await Contact.findByPk(id);

               if(!contact){
                    return res.status(404).json({error: true, message: "Contato não encontrado"});
               }

               const contactId = await Contact.destroy({
                    where:{id}
               });

               return res.status(200).json({message: `Contato de id:${contactId} deletado com sucesso.`});


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
     }
}

module.exports = ContactController;