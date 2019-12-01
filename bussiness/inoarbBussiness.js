const {getServerConnection, executeQuery} = require('../resources/database')

const getFullOutput = async () => await executeQuery(`SELECT * FROM TASKS_OCORRENCIA`, [], (_, success) => success)

const getEventByDocumentNumber = async (documentNumber) => await executeQuery(`
    SELECT * FROM TASKS_OCORRENCIA 
    WHERE CPF like ?
    `, [documentNumber], (_, success) => success)

const saveNewEvent = async (payload) => await executeQuery(`
    INSERT INTO TASKS_OCORRENCIA(
        nome, 
        cpf, 
        endereco, 
        cidade, 
        cep, 
        telefone, 
        data_ocorrencia, 
        tipo_ocorrencia,
        update_at,
        image_dado
    )
    VALUES(
        ?, 
        ?, 
        ?, 
        ?, 
        ?, 
        ?, 
        ?, 
        ?,
        ?,
        ?
    )
    `, [
        payload.name,
        payload.document,
        payload.address,
        payload.city,
        payload.zip,
        payload.phone,
        payload.eventDate,
        payload.eventType,
        payload.updateDate,
        payload.imageClob
    ], (_, success) => success)

module.exports = {
    getFullOutput,
    getEventByDocumentNumber,
    saveNewEvent
}