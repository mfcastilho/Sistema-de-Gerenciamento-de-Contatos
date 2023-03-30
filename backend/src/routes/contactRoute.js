const express = require("express");
const router = express.Router();
const ContactController = require("../controllers/ContactController");


router.get("/api/v1/gerenciamento-contatos/contatos", ContactController.showAllContacts);
router.get("/api/v1/gerenciamento-contatos/contato/:id", ContactController.showContactInfos);
router.post("/api/v1/gerenciamento-contatos/contato/cadastro", ContactController.storeContact);
router.put("/api/v1/gerenciamento-contatos/contato/:id/editar", ContactController.editContact);
router.delete("/api/v1/gerenciamento-contatos/contato/:id/excluir", ContactController.deleteContact);





module.exports = router;