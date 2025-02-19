const { createTaskService, getTaskService, updateTaskService, deleteTaskService } = require("../services/taskService")


const postCreateTask = async (req, res) => {
    let task = await createTaskService(req.body);
    if (task)
        res.json({
            EC: 0,
            data: task
        });
    else res.json({
        EC: -1,
        data: task
    });
}

const getTask = async (req, res) => {
    let tasks = await getTaskService(req.query);
    if (tasks)
        res.json({
            EC: 0,
            data: tasks
        });
    else res.json({
        EC: -1,
        data: tasks
    });
}

const putUpdateTask = async (req, res) => {
    let task = await updateTaskService(req.body);
    if (task)
        res.json({
            EC: 0,
            data: task
        });
    else res.json({
        EC: -1,
        data: task
    });
}

const deleteTask = async (req, res) => {
    let task = await deleteTaskService(req.body.id);
    if (task)
        res.json({
            EC: 0,
            data: task
        });
    else res.json({
        EC: -1,
        data: task
    });
}

module.exports = {
    postCreateTask,
    getTask,
    putUpdateTask,
    deleteTask
}