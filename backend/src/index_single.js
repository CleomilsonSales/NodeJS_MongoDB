const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
const port = 3333

const WebStorage = mongoose.model('webStorage', {
    title: String,
    notes: String,
    priority: Boolean,
})

app.get('/get', async (req, res) => {
    const webStorage_get = await WebStorage.find()
    return res.send(webStorage_get)
})

app.post('/create', async (req, res) => {
    const webStorage_post = new WebStorage({
        title: req.body.title,
        notes: req.body.notes,
        priority: req.body.priority
    })

    await webStorage_post.save();
    return res.send(webStorage_post);
})

app.put('/update/:id', async (req, res) => {
    const webStorage_up = await WebStorage.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        notes: req.body.notes,
        priority: req.body.priority
    },{
        new: true
    })
    return res.send(webStorage_up)
})

app.get('/getAll/:id', async (req, res) => {
    const webStorage_getall = await WebStorage.findById(req.params.id)
    return res.send(webStorage_getall)
})

app.delete('/delete/:id', async (req, res) => {
    const webStorage_delete = await WebStorage.findByIdAndDelete(req.params.id)
    return res.send(webStorage_delete)
})

app.listen(port, () => {
    mongoose.connect(''); //link que vem do mongodb, esta no linkDb
    console.log('App rodando');
})

