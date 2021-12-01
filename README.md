# LearningNodeJS

# Section 1: Introduction
* 4 - Installing Node.js and Creating our First App
    - Filesystem module require('fs'), writeFileSync()
* 5 - Understanding the Role & Usage of Node.js
    - Client (Browser) --> Server(Database, Authentication, Input Validation,Your Business Logic) --> Response HTML Page 
    - Run Server: Create Server & Listen to Incoming Requests
    - Business Logic: Handle Requests, Validate Input, Connect to Database
    - Return Responses (Rendered HTML, JSON, ...)

# Section 2: Optional: Javascript - A Quick Refresher
# Section 3: Understanding the Basics
* 24 - Module Introduction 
* 25 - How the Web works
* 26 - Creating a Node Server
    - Core Modules: 
        * http: Lauch a server, send requests 
        * https: Lauch a SSL Server
        * fs: Filesystem
        * path: Path 
        * os: Operating System
* 27 - The Node.js Program Lifecycle
    - Lifecycle:
        * node app.js --> Start Script --> Parse Code, Register Variables & Functions --> Event Loop
        * --> Keeps on running as long there are event listeners registered
        * All Code is managed in the "The Event Loop"
* 28 - Controlling the Node.js Process
* 29 - Understanding Requests
    - Important properties of the request object:
        * url, method, headers
* 30 - Sending Responses
    - response.setHeader
    - response.write
    - response.end
* 31 - Request & Response Headers
* 32 - Routing Requests
* 33 - Redirecting Requests
    * fs.writeFileSync
* 34 - Parsing Request Bodies (Important)
    - Streams & Buffers
        * Stream --> Request Body Part1 --> Request Body Part2 --> Request Body Part3 --> Fully Parsed
    - request.on('data');
    - request.on('end');
    - Buffer
* 35 - Understanding Event Driven Code Execution
    - NodeJS uses async
* 36 - Blocking and Non-Blocking Code
    - fs.writeFileSync - sync
    - fs.writeFile - async
* 37 - Looking Behind the Scenes (Important)
    - Single Thread, Event Loop & Blocking Code
        * Single Javascript Thread --> <Code>
        * Worker Pool --> Different threads(S)!
    - Event Loop:
        * Timers: Execute setTimeout, setInterval Callbacks.
        * Pending Callbacks: Execute I/O(Input/Output Disk&Network Operations(~Blocking Operations))-related Callbacks that were deferred.
        * Poll: Retrieve new I/O events, execute their callbacks --> Pending Callbacks --> Timers
        * Check: Execute setImmediate() callbacks
        * Close Callbacks: Execute all 'close' event callbacks
        * process.exit: refs == 0
* 38 - Using the Nodew Modules System
    - module.exports = PROPERTY
    - module.exports = {}
    - exports.PROPERTY = VALUE
* 39 - Wrap Up
    - How the Web Works: Client=>Request=>Server=>Response=>Client
    - Program Lifecycle & Event Loop
        * Node.js runs non-blocking JS code and uses an event-driven code ("Event Loop") for running your logic
        * A Node program exits as soon there is no more work to do
        * Note: The createServer() event never finishes by default
    - Asynchronous Code
        * JS code is non-blocking
        * Use callbacks and events => Order changes!
    - Requests & Responses
        * Parse request data in chunks (Streams & Buffers)
        * Avoid "double responses"
    - Node.js & Core Modules
        * Node.js ships with multiple core modules (http, fs, path,...)
        * Core modules can be imported into any file to used there
        * Import via require('module')
    - The Node Module System
        * Import via require('./path-to-file') for custom files or require('module') for core & third-party modules.
        * Export via module.exports or just exports (for multipl;e exports)