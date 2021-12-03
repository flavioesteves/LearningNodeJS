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
* 40 - Useful Resources & Links
    - [Official Node.js Docs](https://nodejs.org/en/docs/guides/)
    - [Full Node.js Reference (for all core modules)](https://nodejs.org/dist/latest/docs/api/)
    - [More about the Node.js Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
    - [Blocking and Non-Blocking Code](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)

# Section 4: Improved Development Workflow and 
* 41 - Module Introduction
* 42 - Understanding NPM Scripts
    - npm init
    - package.json config by adding the "scripts": start and start-server
* 43 - Installing 3rd Party Packages
    - Auto Reboot Package- nodemon
    - --save --> Prod
    - --save-dev --> Development
    - -g --> global
    - Delete node_modules, run npm install to reinstall the modules
* 44 - Global Features vs Core Modules bs Third-Party Modules
* 45 - Using Nodemon for Autorestarts
    - Update package.json with "start":"nodemon" isntead of "node"
* 46 - Global & Local npm Packages
* 47 - Understanding different Error Types
    - Types of Errors:
        * Syntax Errors
        * Runtime Errors
        * Logical Errors
* 48 - Finding & Fixing Syntax Errors
* 49 - Dealing with Runtime Errors
* 50 - Logical Errors
* 51 - Using the Debugger
* 52 - Restart the Debugger Automatically After Editing our App
    - Config lauch.json file
* 53 - Debugging Node.js in VS Code
    - [https://code.visualstudio.com/docs/nodejs/nodejs-debugging](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)
* 54 - Changing Variables in the Debug Console
* 55 - Wrap up
    - npm
    - 3rd Party Packages
    - Types of Errors
    - Debugging
* 56 - Useful Resources & Links
    - [More on debugging Node.js](https://nodejs.org/en/docs/guides/debugging-getting-started/)
    - [Debugging Node in Visual Studio Code](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)

# Section 5: Express.js
* 57 - Module Introduction
    - What is Express.js?
    - Using Middleware
    - Working with Requests & Reposnses
    - Routing
    - Returning HTML Pages (Files)
* 58 - What is Express.js?
    - Server Logis is Complex!
    - Focus only in Business Logic
    - This Framework do the Heavy Lifting!
    - Alternatives:
        * Vanilla Node.js
        * Adonis.js
        * Koa
        * Sails.js
* 59 - Installing Express.js
    - npm install --save express --> install because is needed it for production
* 60 - Adding Middleware
    - Request --> Middleware next() --> Middleware response.send() --> Response
    - app.use {next()}
* 61 - How Middleware Works
    - response.send()
* 62 - Express.js - Looking Behind the Scenes
    - 