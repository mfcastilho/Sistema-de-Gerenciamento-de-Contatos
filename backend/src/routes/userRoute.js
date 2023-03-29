const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");


router.post("/api/v1/gerenciamento-contatos/login", UserController.login);
router.post("/api/v1/gerenciamento-contatos/cadastro", UserController.storeUser);
router.get("/api/v1/gerenciamento-contatos/usuario/:id", UserController.getById);
router.put("/api/v1/gerenciamento-contatos/usuario/:id/editar", UserController.editUser);
router.delete("/api/v1/gerenciamento-contatos/usuario/:id/excluir", UserController.deleteUser);

module.exports = router;