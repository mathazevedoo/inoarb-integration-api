const {getFullOutput, getEventByDocumentNumber, saveNewEvent} = require('../bussiness/inoarbBussiness')

module.exports = (router, express) => {

    router.use(express.json())
    router.use(express.urlencoded({ extended: true }))

    router.get(`/inoarb/full`, async (req, res) => {
        res.json(await getFullOutput().then(res => res[0]))
    })

    router.get(`/inoarb/person/:documentNumber/event`, async (req, res) => {
        console.log(JSON.stringify(req.params))
        res.json(await getEventByDocumentNumber(req.params.documentNumber).then(res => res[0]))
    })

    router.put(`/inoarb/request/event`, async (req, res, next) => {
        const {body} = req
        console.log(JSON.stringify(body))
        res.json(await saveNewEvent(body).then(res => res[0]))
    })

    router.listen(7070)
    return router
}