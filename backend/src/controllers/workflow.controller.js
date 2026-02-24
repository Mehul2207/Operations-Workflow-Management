const workflowRepo = require('../repositories/workflow.repository');

exports.createWorkflow = async (req, res, next) => {
    try {
        const { name, description } = req.body;
        const workflow = await workflowRepo.createWorkflow(
            name,
            description,
            req.user.id
        );
        res.status(201).json(workflow);
    } catch (err) {
        next(err);
    }
};

exports.getWorkflows = async (req, res, next) => {
    try {
        const workflows = await workflowRepo.getAllWorkflows();
        res.json(workflows);
    } catch (err) {
        next(err);
    }
};