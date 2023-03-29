const { User } = require("../models");
const bcrypt = require("bcryptjs");
const {v4:makeId} = require("uuid");


const UserController = {
     login: (req, res)=>{

     },

     getById: async (req, res)=>{
          try {
               
               const {id} = req.params;
               const user = await User.findByPk(id);

               console.log(user)

               if(!user){
                    return res.status(404).json({message: "Usuário não encontrado"});
               }

               return res.status(200).json({data:user});

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

     storeUser: async (req, res)=>{
          const {name, email, password} = req.body;
 
          const hashPassword = bcrypt.hashSync(password, 10);

          const newUser = {
               id: makeId(),
               name,
               email,
               password: hashPassword
          } 

          const user = await User.create(newUser);

          if(!user){
               return res.status(404).json({message: "Usuário já se encontra cadastrdo"});
          }

          return res.status(201).json({data:newUser});
     },

     editUser: (req, res)=>{

     },

     deleteUser: (req, res)=>{

     },

     logout: (req, res)=>{

     }
   
}

module.exports = UserController;

