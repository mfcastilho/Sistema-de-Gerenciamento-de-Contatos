const { User } = require("../models");
const bcrypt = require("bcryptjs");
const {v4:makeId} = require("uuid");
const jwt = require("jsonwebtoken");



const UserController = {

     login: async (req, res)=>{
          try {
               const {email, password} = req.body;


               const user = await User.findOne({
                    where:{email:email}
               });

          
               if(!user){
                    return res.status(401).json({message: "Email ou senhas incorretos"});
               }

               const passwordMatches = bcrypt.compareSync(password, user.password);


               if(!passwordMatches){
                    return res.status(401).json({message: "Email ou senhas incorretos"});
               }

               const token = jwt.sign({id: user.id}, process.env.JWT_SECRET,{
                    expiresIn: "1d"
               });
               
               console.log(token)

               return res.json({token, user:{id:user.id, name:user.name, email: user.email}});

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
          try {
               const {name, email, password} = req.body;
 
          const hashPassword = bcrypt.hashSync(password, 10);

          const newUser = {
               id: makeId(),
               name,
               email,
               password: hashPassword
          } 

          console.log(newUser);

          const user = await User.create(newUser);

          if(!user){
               return res.status(404).json({message: "Usuário já se encontra cadastrdo"});
          }

          return res.status(201).json({data:newUser});

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

     editUser: async (req, res)=>{
          try {
               const {name, email, password} = req.body;
               const {id} = req.params;

               const user = await User.findByPk(id);

               if(!user){
                    return res.status(404).json({message: "Usuário não existe"});
               }

               if(!password){

                    const updateUser = {
                         name: name == "" ? user.name : name,
                         email: email == "" ? user.email : email,
                         password:user.password
                    }
                    await User.update({updateUser},{
                         where:{id}
                     });

                     const renewedUser = await User.findByPk(id);

                    return res.status(201).json({data:renewedUser});
               }

               const hashPassword = bcrypt.hashSync(password, 10);
               const updateUser = {
                    id,
                    name: name == undefined ? user.name : name,
                    email: email == undefined ? user.email : email,
                    password: hashPassword
               }

               
               await User.update(updateUser, 
                    {where: {id}}
               );
               

               const renewedUser = await User.findByPk(id);

               return res.status(201).json({data:renewedUser});

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

     deleteUser: async (req, res)=>{
          try {

               const {id} = req.params;

               const user = User.findByPk(id);

               if(!user){
                    return res.status(404).json({message: "Usuário não existe"});
               }

               const userId = await User.destroy({
                    where: {id}
               });

               return res.status(200).json({message: `usuário de id:${userId} excluído com sucesso`});
               
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

     logout: (req, res)=>{
          try {
               
               localStorage.removeItem("token");
               localStorage.removeItem("user");

               return res.json({message: "Usuário deslogado com sucesso"});

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

module.exports = UserController;

