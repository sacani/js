const http = require( "http" )
const hostname = "127.0.0.1"
const port = "8888"

//console.log( new Date(), hostname, port )

const httpHandler = ( req, res ) => {
  res.statusCode = 200
  res.setHeader( "Content-Type", "text/plain" )
  res.end( "Hello, World!\n" + new Date() )	
}

const listenCallback = () => {
  console.log( `Server running at http://${hostname}:${port}` )
}

//listenCallback()

const server = http.createServer( httpHandler )

server.listen( port, hostname, listenCallback )
