const { getImageClobByIdOcurrence } = require('../bussiness/inoarbBussiness')
const { MEDIA_ROOT } = require('../resources/properties')
const uuid = require('uuid-random')
const fs = require('fs')

const getClobAsImageByIdOcurrence = async (id) => 
    await getImageClobByIdOcurrence(id).then(res => {
        const fileSerial = uuid()
        const filePath = `${MEDIA_ROOT}${fileSerial}.jpg`
        const fileSymbol = `/get/${fileSerial}.jpg`
        const file =  new Buffer(res[0][0].IMAGE_DADO, 'base64')
        fs.writeFileSync(filePath, file)
        return fileSymbol
    })

module.exports = {
    getClobAsImageByIdOcurrence
}