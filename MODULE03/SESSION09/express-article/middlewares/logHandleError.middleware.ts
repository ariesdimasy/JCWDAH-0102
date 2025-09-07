import fs from "fs"

const logHandleError = (message: string) => {
    const timeStamp = new Date().toISOString()
    const logMessage = `${timeStamp} - ${message}`

    fs.appendFile("error.log", logMessage, (err) => {
        if (err) {
            console.log("Error Writing message to error.log : ", err)
        }
    })
}

export default logHandleError