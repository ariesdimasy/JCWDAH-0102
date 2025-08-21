import http, { IncomingMessage, ServerResponse } from "http";

const PORT = 8000

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    if (req.url == "/" && req.method == "GET") {
        res.writeHead(200, {
            "content-type": "application/json"
        })
        res.write("Home")
        res.end()
    }
    if (req.url == "/api" && req.method == "GET") {
        res.writeHead(200, {
            "content-type": "application/json"
        })
        res.write("API")
        res.end()
    }
    if (req.url == "/api/service" && req.method == "GET") {
        res.writeHead(200, {
            "content-type": "application/json"
        })
        res.write("service")
        res.end()
    }
})

server.listen(PORT, () => {
    console.log("local is run from port ", PORT)
})