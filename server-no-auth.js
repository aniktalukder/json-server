const cors = require('cors')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./db.json')
server.use(cors());
server.use(router)

server.listen(3000, () => {
  console.log('Run No Auth API Server')
})