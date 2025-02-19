const { createEmptyProjectService, getProjectService, deleteProjectService, updateProjectService } = require("../services/projectService");


const postCreateEmptyProject = async (req, res) => {
    let project = await createEmptyProjectService(req.body);
    if (project)
        res.json({
            EC: 0,
            data: project
        });
    else
        res.json({
            EC: -1,
            data: project
        });
}

const getProject = async (req, res) => {
    let project = await getProjectService(req.query);
    if (project)
        res.json({
            EC: 0,
            data: project
        });
    else
        res.json({
            EC: -1,
            data: project
        });
}

const deleteProject = async (req, res) => {
    let project = await deleteProjectService(req.body.id);
    if (project)
        res.json({
            EC: 0,
            data: project
        });
    else
        res.json({
            EC: -1,
            data: project
        });
}

const putUpdateProject = async (req, res) => {
    let project = await updateProjectService(req.body);
    if (project)
        res.json({
            EC: 0,
            data: project
        });
    else
        res.json({
            EC: -1,
            data: project
        });
}

module.exports = {
    postCreateEmptyProject,
    getProject,
    deleteProject,
    putUpdateProject,
}