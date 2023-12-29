const express = require('express')
const router = express.Router();
const { Task } = require('../models/task')


router.post('/create', async (req, res) => {
    try {
        const task = await Task.create({ ...req.body });
        res.send(task).status(201);
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

router.get('/get/:id', async (req, res) => {
    try {
        const task = await Task.findOne({ where: { id: req.params.id } })
        if (!task) throw new Error('Task does not exist')
        res.send(task).status(200);
    } catch (err) {
        res.send({ error: err.message }).status(400);
    }
})

router.put('/update/:id', async (req, res) => {
    try {
        const task = await Task.findOne({ where: { id: req.params.id } });
        if (!task) throw new Error('Task does not exist')
        const newTask = await Task.update({
            name: req.body.name,
            startDate: req.body.startDate,
            deadline: req.body.deadline,
            status: req.body.status
        }, { where: { id: req.params.id }, returning: true })
        res.send(newTask).status(200);
    } catch (err) {
        res.send({ error: err.message }).status(404);
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const task = await Task.findOne({ where: { id: req.params.id } });
        if (!task) throw new Error('Task does not exist')
        const deletedTask = await Task.destroy({ where: { id: req.params.id } })
        res.status(200).send('Task deleted');
    } catch (err) {
        res.status(404).send({ error: err.message });
    }
})

module.exports = router;