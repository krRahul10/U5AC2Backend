
const {Router} = require("express")
const NotesModel = require("../model/notes")
const noteRouter = Router();


noteRouter.get('', async (req, res) => {
    try {
        const notes = await NotesModel.find().lean().exec()
        res.send(notes)
    } catch (error) {
        res.send(error)
    }
})

noteRouter.post('', async (req, res) => {
    try {
        const notes = await NotesModel.create(req.body).lean().exec()
        res.send(notes)
    } catch (error) {
        res.send(error)
    }
})

// noteRouter.post("/", async (req, res) => {
//     const userId = req.params.userId
//     let payload = {
//         ...req.body,
//         userId
//     }
//     const note = await new NotesModel(payload)
//     note.save((err, success) => {
//         if(err){
//             return res.status(500).send({message : "something went wrong"})
//         }
//         return res.status(201).send(success)
//     })
// })

module.exports = noteRouter;

