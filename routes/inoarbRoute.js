const { getFullOutput, getEventByDocumentNumber, saveNewEvent } = require('../bussiness/inoarbBussiness')
const { getClobAsImageByIdOcurrence } = require('../services/inoarbService')
const bodyParser = require('body-parser')

module.exports = (router, express) => {

    
    router.use(bodyParser.json({limit: '15mb'}))
    router.use(bodyParser.urlencoded({limit: '15mb', extended: true}))
    router.use(express.json())
    router.use(express.urlencoded({ extended: true }))

    router.get(`/inoarb/full`, async (req, res) => {
        res.json(await getFullOutput().then(res => res[0]))
    })

    router.get(`/inoarb/person/:documentNumber/event`, async (req, res) => {
        console.log(JSON.stringify(req.params))
        res.json(await getEventByDocumentNumber(req.params.documentNumber).then(res => res[0]))
    })

    router.get(`/inoarb/ocurrence/:id/media/path`, async (req, res) => {
        console.log(JSON.stringify(req.params))
        res.json(await getClobAsImageByIdOcurrence(req.params.id))
    })

    router.put(`/inoarb/request/event`, async (req, res, next) => {
        const {body} = req
        console.log(JSON.stringify(body))
        res.json(await saveNewEvent(body).then(res => res[0]))
    })

    router.listen(7070)
    return router
}