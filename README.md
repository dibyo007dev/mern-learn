# mern-learn
just an ex thing

Server Side Setup :

>>


CLient side setup :

  Client side setup is totally different from the server side setup 
  >> First in the client side we need to set up a proxy in the package.json file which connect the client side to the server side 
  
  >> Then we need to start the servers  1. react-server  and 2. Custom express side server  indivisually so what we do is we use
      "concurrently" which helps us to start both the servers in the same time and manage it.

  >> "scripts": {
    "start": "node server.js",                  // start the backend server
    "server": "nodemon server.js",              // starts and track the backend server
    
    "client": "npm start --prefix client",        // starts the client server

    "dev": "concurrently \" npm run server\" \"npm run client\""

                                                  //  Starts both \"\"
    },

    this is the server side script to run both of them concurrently