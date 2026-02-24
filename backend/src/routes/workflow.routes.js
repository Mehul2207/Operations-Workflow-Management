const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const role = require('../middleware/role.middleware');
const controller = require('../controllers/workflow.controller');

console.log("AUTH:", auth);
console.log("CREATE:", controller.createWorkflow);

router.post('/', auth, controller.createWorkflow);
router.get('/', auth, controller.getWorkflows);

module.exports = router;

console.log("auth type:", typeof auth);
console.log("role type:", typeof role);
console.log("controller:", controller);
console.log("createWorkflow type:", typeof controller.createWorkflow);