const express = require('express')
const router = express.Router();
const { Task } = require('../models/task')


router.post('/create', async (req, res) => {
    try {
        const task = await Task.findOne({ where: { name: req.body.name } })
        if (task) return res.send({ error: 'Task already exists' })
        const newTask = await Task.create({ ...req.body });
        res.send(newTask).status(201);
    } catch (err) {
        res.send({ error: err }).status(400);
    }
})

router.get('/getAll', async (req, res) => {
    try {
        const task = await Task.findAll()
        res.send(task).status(200);
    } catch (err) {
        res.send({ error: err.message }).status(400);
    }
})

router.put('/update', async (req, res) => {
    try {
        const task = await Task.findOne({ where: { name: req.body.name } });
        if (!task) throw new Error('Task does not exist')
        const newTask = await Task.update({
            startDate: req.body.startDate,
            deadline: req.body.deadline,
            status: req.body.status
        }, { where: { name: req.body.name } })
        res.send(newTask).status(200);
    } catch (err) {
        res.send({ error: err.message }).status(404);
    }
})

router.delete('/delete', async (req, res) => {
    try {
        const task = await Task.findOne({ where: { name: req.body.name } });
        if (!task) throw new Error('Task does not exist')
        await Task.destroy({ where: { name: req.body.name } })
        res.status(200).send('Task deleted');
    } catch (err) {
        res.status(404).send({ error: err.message });
    }
})

module.exports = router;