// Deleting Documents 15:24

const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongoDB Server', err);
    }
    console.log('Connected to MongoDB server');

    //Delete many
    // db.collection('Todos').deleteMany({ text: 'Something to do' }).then((results) => {
    //         console.log(results);
    //     })
    //Delete One
    // db.collection('Todos').deleteOne({ text: 'Membeli sepatu' }).then((results) => {
    //     console.log(results);
    // })

    //findeOne and delete
    // db.collection('Todos').findOneAndDelete({ completed: false }).then((results) => {
    //     console.log(results);
    // })


    // db.collection('Users').deleteMany({ name: 'Faza' })

    db.collection('Users').findOneAndDelete({ _id: new ObjectID("591d309117cba8279708db81") }).then((results => {
        console.log(results);
    }))

    // db.close();
})

//hasil results:

/* CommandResult {
  result: { ok: 1, n: 2 },
  connection:
   Connection {
     domain: null,
     _events:
      { error: [Object],
        close: [Object],
        timeout: [Object],
        parseError: [Object] },
     _eventsCount: 4,
     _maxListeners: undefined,
     options:
      { host: 'localhost',
        port: 27017,
        size: 5,
        connectionTimeout: 30000,
        socketTimeout: 30000,
        keepAlive: true,
        keepAliveInitialDelay: 0,
        noDelay: true,
        ssl: false,
        checkServerIdentity: true,
        ca: null,
        crl: null,
        cert: null,
        key: null,
        passPhrase: null,
        rejectUnauthorized: false,
        promoteLongs: true,
        promoteValues: true,
        promoteBuffers: false,
        reconnect: true,
        reconnectInterval: 1000,
        reconnectTries: 30,
        domainsEnabled: false,
        disconnectHandler: [Object],
        cursorFactory: [Object],
        emitError: true,
        socketOptions: {},
        clientInfo: [Object],
        readPreference: [Object],
        promiseLibrary: [Function: Promise],
        bson: BSON {} },
     id: 0,
     logger: Logger { className: 'Connection' },
     bson: BSON {},
     tag: undefined,
     messageHandler: [Function],
     maxBsonMessageSize: 67108864,
     port: 27017,
     host: 'localhost',
     keepAlive: true,
     keepAliveInitialDelay: 0,
     noDelay: true,
     connectionTimeout: 30000,
     socketTimeout: 30000,
     destroyed: false,
     domainSocket: false,
     singleBufferSerializtion: true,
     serializationFunction: 'toBinUnified',
     ca: null,
     crl: null,
     cert: null,
     key: null,
     passphrase: null,
     ssl: false,
     rejectUnauthorized: false,
     checkServerIdentity: true,
     responseOptions:
      { promoteLongs: true,
        promoteValues: true,
        promoteBuffers: false },
     flushing: false,
     queue: [],
     connection:
      Socket {
        connecting: false,
        _hadError: false,
        _handle: [Object],
        _parent: null,
        _host: 'localhost',
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: [Object],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [Object],
        writable: true,
        allowHalfOpen: false,
        destroyed: false,
        _bytesDispatched: 400,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: null,
        _server: null,
        _idleTimeout: 30000,
        _idleNext: [Object],
        _idlePrev: [Object],
        _idleStart: 235,
        read: [Function],
        _consuming: true },
     writeStream: null,
     hashedName: '29bafad3b32b11dc7ce934204952515ea5984b3c',
     workItems: [],
     buffer: null,
     sizeOfMessage: 0,
     bytesRead: 0,
     stubBuffer: null },
  message:
   Response {
     parsed: true,
     index: 56,
     raw: <Buffer 38 00 00 00 6d 08 00 00 02 00 00 00 01 00 00 00 08 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00 14 00 00 00 10 6f 6b 00 01 00 00 00 10 6e ... >,
     data: <Buffer 38 00 00 00 6d 08 00 00 02 00 00 00 01 00 00 00 08 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00 14 00 00 00 10 6f 6b 00 01 00 00 00 10 6e ... >,
     bson: BSON {},
     opts:
      { promoteLongs: true,
        promoteValues: true,
        promoteBuffers: false },
     length: 56,
     requestId: 2157,
     responseTo: 2,
     responseFlags: 8,
     cursorId: Long { _bsontype: 'Long', low_: 0, high_: 0 },
     startingFrom: 0,
     numberReturned: 1,
     documents: [ [Object] ],
     cursorNotFound: false,
     queryFailure: false,
     shardConfigStale: false,
     awaitCapable: true,
     promoteLongs: true,
     promoteValues: true,
     promoteBuffers: false,
     hashedName: '29bafad3b32b11dc7ce934204952515ea5984b3c' },
  deletedCount: 2 }*/