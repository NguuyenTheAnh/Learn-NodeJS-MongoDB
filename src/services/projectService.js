const Project = require("../models/project");


const createEmptyProjectService = async (projectData) => {
    try {
        let results = "";
        if (projectData.type == "EMPTY-PROJECT")
            results = await Project.create(projectData);
        if (projectData.type == "ADD-USERS") {
            let myProject = await Project.findById(projectData.projectId);
        }
        return results;
    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = {
    createEmptyProjectService,

}