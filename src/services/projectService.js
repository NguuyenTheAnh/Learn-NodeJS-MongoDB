const Project = require("../models/project");
const aqp = require('api-query-params');

const createEmptyProjectService = async (projectData) => {
    try {
        let results = "";
        if (projectData.type == "EMPTY-PROJECT")
            results = await Project.create(projectData);
        if (projectData.type == "ADD-USERS") {
            let myProject = await Project.findById(projectData.projectId);
            projectData.usersArr.forEach(userId => {
                myProject.usersInfo.push(userId);
            });
            results = await myProject.save();
        }
        return results;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const getProjectService = async (data) => {
    try {
        const page = data.page;
        const { filter, limit, population } = aqp(data);
        delete filter.page;
        const offset = (page - 1) * limit;
        let results = await Project
            .find(filter)
            .skip(offset)
            .limit(limit)
            .populate(population)
            .exec();
        return results;
    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = {
    createEmptyProjectService,
    getProjectService,
}