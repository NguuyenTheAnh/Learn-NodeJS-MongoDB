const Task = require('../models/task');
const aqp = require('api-query-params');

const createTaskService = async (data) => {
    try {
        let results = "";
        if (data.type === "EMPTY-TASK") {
            results = await Task.create(data);
        }
        return results;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const getTaskService = async (data) => {
    try {
        let page = data.page;
        let { filter, limit } = aqp(data);
        delete filter.page;
        let offset = (page - 1) * limit;
        let results = await Task.find(filter).skip(offset).limit(limit).exec();
        return results;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const updateTaskService = async (data) => {
    try {
        let taskId = data.id;
        let results = await Task.updateOne({ _id: taskId }, data).exec();
        return results;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const deleteTaskService = async (taskId) => {
    try {
        let results = await Task.delete({ _id: taskId }).exec();
        return results;
    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = {
    createTaskService,
    getTaskService,
    updateTaskService,
    deleteTaskService
}