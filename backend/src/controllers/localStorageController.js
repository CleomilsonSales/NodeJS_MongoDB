const WebStorage = require('../models/localStorageData');

module.exports = {
    async get(req, res) {
        const webStorage_get = await WebStorage.find()
        return res.send(webStorage_get)
    },
    
    async create(req, res) {
        const webStorage_post = new WebStorage({
            title: req.body.title,
            notes: req.body.notes,
            priority: req.body.priority
        })
    
        await webStorage_post.save();
        return res.send(webStorage_post);
    },
    
    async update(req, res) {
        const webStorage_up = await WebStorage.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            notes: req.body.notes,
            priority: req.body.priority
        },{
            new: true
        })
        return res.send(webStorage_up)
    },
    
    async getAll(req, res) {
        const webStorage_getall = await WebStorage.findById(req.params.id)
        return res.send(webStorage_getall)
    },
    
    async delete(req, res) {
        const webStorage_delete = await WebStorage.findByIdAndDelete(req.params.id)
        return res.send(webStorage_delete)
    }

}