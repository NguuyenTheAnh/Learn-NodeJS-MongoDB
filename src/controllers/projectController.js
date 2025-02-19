const { createEmptyProjectService } = require("../services/projectService");


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
        })
}

module.exports = {
    postCreateEmptyProject,

}