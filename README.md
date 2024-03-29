# LearningNodeJS

# Section 1: Introduction
  4. Installing Node.js and Creating our First App
      - Filesystem module require('fs'), writeFileSync()
  5. Understanding the Role & Usage of Node.js
      - Client (Browser) --> Server(Database, Authentication, Input Validation,Your Business Logic) --> Response HTML Page 
      - Run Server: Create Server & Listen to Incoming Requests
      - Business Logic: Handle Requests, Validate Input, Connect to Database
      - Return Responses (Rendered HTML, JSON, ...)

# Section 2: Optional: Javascript - A Quick Refresher
# Section 3: Understanding the Basics
  24. Module Introduction 
  25. How the Web works
  26. Creating a Node Server
      - Core Modules: 
        * http: Lauch a server, send requests 
        * https: Lauch a SSL Server
        * fs: Filesystem
        * path: Path 
        * os: Operating System
  27. The Node.js Program Lifecycle
      - Lifecycle:
        * node app.js --> Start Script --> Parse Code, Register Variables & Functions --> Event Loop
        * --> Keeps on running as long there are event listeners registered
        * All Code is managed in the "The Event Loop"
  28. Controlling the Node.js Process
  29. Understanding Requests
      - Important properties of the request object:
        * url, method, headers
  30. Sending Responses
      - response.setHeader
      - response.write
      - response.end
  31. Request & Response Headers
  32. Routing Requests
  33. Redirecting Requests
      * fs.writeFileSync
  34. Parsing Request Bodies (Important)
      - Streams & Buffers
        * Stream --> Request Body Part1 --> Request Body Part2 --> Request Body Part3 --> Fully Parsed
      - request.on('data');
      - request.on('end');
      - Buffer
  35. Understanding Event Driven Code Execution
      - NodeJS uses async
  36. Blocking and Non-Blocking Code
      - fs.writeFileSync - sync
      - fs.writeFile - async
  37. Looking Behind the Scenes (Important)
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
  38. Using the Nodew Modules System
      - module.exports = PROPERTY
      - module.exports = {}
      - exports.PROPERTY = VALUE
  39. Wrap Up
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
        * Export via module.exports or just exports (for multiple exports)
  40. Useful Resources & Links
      - [Official Node.js Docs](https://nodejs.org/en/docs/guides/)
      - [Full Node.js Reference (for all core modules)](https://nodejs.org/dist/latest/docs/api/)
      - [More about the Node.js Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
      - [Blocking and Non-Blocking Code](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)

# Section 4: Improved Development Workflow and 
  41. Module Introduction
  42. Understanding NPM Scripts
      - npm init
      - package.json config by adding the "scripts": start and start-server
  43. Installing 3rd Party Packages
      - Auto Reboot Package- nodemon
      - --save --> Prod
      - --save-dev --> Development
      - -g --> global
      - Delete node_modules, run npm install to reinstall the modules
  44. Global Features vs Core Modules bs Third-Party Modules
  45. Using Nodemon for Autorestarts
      - Update package.json with "start":"nodemon" isntead of "node"
  46. Global & Local npm Packages
  47. Understanding different Error Types
      - Types of Errors:
        * Syntax Errors
        * Runtime Errors
        * Logical Errors
  48. Finding & Fixing Syntax Errors
  49. Dealing with Runtime Errors
  50.  Logical Errors
  51. Using the Debugger
  52. Restart the Debugger Automatically After Editing our App
      - Config lauch.json file
  53. Debugging Node.js in VS Code
      - [https://code.visualstudio.com/docs/nodejs/nodejs-debugging](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)
  54. Changing Variables in the Debug Console
  55. Wrap up
      - npm
      - 3rd Party Packages
      - Types of Errors
      - Debugging
  56. Useful Resources & Links
      - [More on debugging Node.js](https://nodejs.org/en/docs/guides/debugging-getting-started/)
      - [Debugging Node in Visual Studio Code](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)

# Section 5: Express.js
  57. Module Introduction
      What is Express.js?
      - Using Middleware
      - Working with Requests & Reposnses
      - Routing
      - Returning HTML Pages (Files)
  58. What is Express.js?
      - Server Logis is Complex!
      - Focus only in Business Logic
      - This Framework do the Heavy Lifting!
      - Alternatives:
        * Vanilla Node.js
        * Adonis.js
        * Koa
        * Sails.js
  59. Installing Express.js
      - npm install --save express --> install because is needed it for production
  60. Adding Middleware
      - Request --> Middleware next() --> Middleware response.send() --> Response
      - app.use {next()}
  61. How Middleware Works
      - response.send()
  62. Express.js - Looking Behind the Scenes
      - app.listen();
  63. Handling Different Routes
      - app.use(PATH, CALLBACK)
  64. Parsing Incoming Requests
      - response.redirect()
      - request.body this 
      - 3rd party package for parsing  the response: body-parser
      - bodyParser.urlencoded()
  65. Limiting Middleware Execution to POST Requests
      - app.get
      - app.post
  66. Using Express Router
      - express.Router()
  67. Adding a 404 Error Page
      - response.status();
  68. Filtering Paths
      - Express.js documentation
      - app.use(FILTER,ROUTE)
  69. Creating HTML Pages
      - Views Folder
  70. Serving HTML Pages (Important)
      - Module path
  71. Returning a 404 Page
  72. A Hint!
  73. Using a Helper Function for Navigation
      - module.exports = path.dirname(require.main.filename);
  74. Styling our Pages
  75. Serving Files Statically
      - app.use(express.static(path.join(__dirname, 'public')));
  76. Wrap up
  77. Useful Resources & Links
      - [Express.js Official Docs](https://expressjs.com/en/starter/installing.html)

# Section 6:Working with Dynamic Content & Adding Templating Engines
  78. Module Introduction
      - Managing Data (without a Database)
      - Render Dynamic Content in our views
      - Understanding Templating Engines
  79. Sharing Data Across Requests & Users
  80. Templating Engines - An Overview
      - HTMLish Template
      - Node/Express Content
      - Templating Engine
      - Replaces Placeholders /Snippets with HTML Content --> HTML File to the user
      - Available Templating Engines:
        * EJS: <p><%= name %></p> --> Use normal HTML and plain JS in your templates
        * Pug(Jade): p #{name} --> Use minimal HTML and custom template language
        * Handlebars: <p>{{ name }}</p> --> Use normal HTML and custom template language
  81. Installing & Implementing Pug
      - npm install --save ejs pug express-handlebars
      - After the app creation, use the set() to configure the template globally
        * app.set('view engine', TEMPLATE ENGINE)
  82. Outputting Dynamic Content
  83. Official Pug Docs
      * [https://pugjs.org/api/getting-started.html](https://pugjs.org/api/getting-started.html)
  84. Converting HTML Files to Pug
  85. Adding a Layout
      - block keyword
      - extends 
  86. Finishing the Pug Template
      - Added path property to the response.render()
  87. Avoiding an Error
  88. Working with Handlebars
  89. Converting out Project to Handlebars
  90. Adding the Layout to Handlebars
  91. Working with EJS
      - <% use vanilla JS %>
  92. Working on the Layout with Partials
      - <%- include('DIRECTORY OF THE PARTIAL') %>
  93. Wrap Up
      - Next chapters will be used ejs as template engine
  94. [OPTIONAL] Assignment Solution
  95. Useful Resources & Links
      - [Pug Docs](https://pugjs.org/api/getting-started.html)
      - [Handlebars Docs](https://handlebarsjs.com/)
      - [EJS Docs](http://ejs.co/#docs)

# Section 7:The Mode View Controller(MVC)
  96. Module Introduction
      - Structuring your Code
  97. What is the MVC?
      - Separation of Concerns
        * Models: Represent your data in your code, Work with your data (e.g.save, fetch) 
        * Views: What the users sees, Decoupled from your application code 
        * Controllers: Connecting your Models and your Views, Contains the "in-beetween" logic
      - Routes --> Controllers: Split across Middleware Functions
  98. Adding Controllers
      - New subfolder
  99. Finishing the Controllers
  100. Adding a Product Model
    - Introduction to the Models concept: creation of the Classes
  101. Storing Data in Files Via the Model
        - path, fs
  102. Fetching Data from Files Via the Model
  103. Refactoring the File Storage Code
  104. Wrap Up
        - Model: 
          * Responsible for representing your data
          * Responsible for managing your data (saving, fetching, ...)
          * Doesn't matter if you manage data in memory, files, databases
          * Contains data-related logic
        - View: 
          * What the user sees
          * Shouldn't contain too much logic (Handlebars!)
        - Controller:
          * Connects Model and View
          * Should onluy make sure that the two can communicate (in both directions)
  105. Useful Resources & Links
        - [More on MVC](https://developer.mozilla.org/en-US/docs/Glossary/MVC)

# Section 8: Optional Enhacing the APP
  106. Module Introduction
  107. Creating the Shop Structure
  108. Working on the Navigation
  109. Registering the Routes
  110. Storing Product Data
  111. Displaying Product Data
  112. Editing & Deleting Products
  113. Adding Another Item
  114. Useful Resources & Links

# Section 9: Dynamic Routes & Advanced Models
  115. Module Introduction
        - Passing Route Params
        - Using Query Params
        - Enhance our Models
  116. Preparations
  117. Applied Changes
  118. Adding the Product ID to the Path
  119.  Extracting Dynamic Params
        - ":" is the syntax for dynamic path
        - the order is important, first the static then the dynamic paths
  120. Loading Product Detail Data
  121. Rendering the Product Detail View
  122. Passing Data with POST Requests
        - template.esj: example: "<%- include('../includes/add-to-cart.ejs',{product: product}) %>" u
  123. Adding a Cart Model
        - convert a string to number "+ +string"
  124. Using Query Params
  125. Pre-Populating the Edit Product Page with Data
  126. Linking to the Edit Page
  127. Editing the Product Data
  128. Adding the Product-Delete Functionality
  129. Deleting Cart Items
  130. Displaying Cart Items on the Cart Page
  131. Deleting Cart Items
  132. Fixing a Delete Product Bug
  133. Wrap Up
        - Dynamic Routing
        - More on Models: Cart
  134. Useful Resources & Links
        - [Official Routing Docs](https://expressjs.com/en/guide/routing.html)

# Section 10: SQL Introduction
  135. Module Introduction
        - Storing Data in Databases
     Different Kinds of Databases (SQL vs NoSQL)
        - Using SQL in a Node.js APP  
  136. Choosing a Database
        - SQL vs NoSQL
        - Goal: Store Data and Make it Easily Accessible -->
        - Use a Database! - Quicker Acess than with a File
        - SQL Databases: MySQL
        - NoSQL Databases: MongoDB
        :- What;s SQL?
        - Tables: USers, Orders, Products (rows = records).
     - Core SQL Database Characteristics
        - Data Schema: id,name,age
        - All Data (in a Table has to fit!)
        - Data Relations: One-to-One, One-to-Many, Many-to-Many: Tables are conected
     - SQL Queries
        - Example: SELECT * FROM users where age > 28
        - SQL Keywords/Syntax: SELECT, FROM, WHERE
        - Parameters / Data: *, users, age > 28
  137. NoSQL Introduction
        - Database: Shop
        - Collections(= tables(sql)): Users, Orders
        - Documents(= records(sql)): {name:'Max', age:29}
        - Schemaless!
        - No Real Relastions: is going for Duplicate Data approach
        - Advantage is when is collecting data don't need to join tables
        - NoSQL Characteristics
        - No Data Schema -> No Structure required!
            - {name,id,age}
            - {id.age}
        - NO Data Relations
            - You CAN relate documents but you don't have to (you shouldn't do it too   much or your queries become slow)
  138. Comparing SQL and NoSQL
        - Horizontal vs Vertical Scaling
        - Horizontal Scaling: Add More Servers (and merge Data into one Database)
        - Vertical Scaling: Improve Server Capacity/ Hardware
        - SQL:
          - Data uses Schemas
          - Relations!
          - Data is distributed across multiple tables
          - Horizontal scaling is difficult/impossible; Vertical scaling is possible
          - Limitations fr lots of (thousands) read & write queries per second
        - NoSQL:
          - Schema-less
          - No (or very few) Relations
          - Data is typecally merged/ nested in a few collections
          - Both horizontal and vertical scaling is possible
          - Great performance for mass read & write requests
  139. Setting Up MySQL


# Section 12: Working with NoSQL & Using MongoDB

  176. Module Introduction
  177. What is MongoDB?
  178. Relations in NoSQL
  179. Setting Up MongoDB
  180. Installing the MongoDB Driver
  181. Creating the Database Connection
  182. Finishing the Database Connection
  183. Using the Database Connection
  184. Creating Products
  185. Understanding the MongoDB Compass
  186. Fetching All Products
  187. Fetching a Single Product
  188. Making the "Edit" & "Delete" Buttons Work Again
  189. Working on the Product Model to Edit our Prodiuct
  190. Finishing the "Update Product" Code
  191. One Note About Updating Products
  192. Deleting Products
  193. Fixing the "Add Product" Functionality
  194. Creating New Users
  195. Storing the User in our Database
  196. Working on Cart Items & Orders
  197. Adding the "Add to Cart" Functionality
  198. Storing Multiple Products in the Cart
  199. Displaying the Carts Items
  200. Fixing a a Bug
  201. Deleting Cart Items
  202. Adding an Order
  203. Adding Relational Order Data
  204. Getting Orders
  205. Removing Delete Items From the Cart
  206. Wrap Update
  207. Useful Resources & Links
  208. Two Adjustments

# Section 13: Working with Moongoose
  209. Module Introduction
  210. What os Moongoose?
        - [Moongoose](https://mongoosejs.com/) 
  211. Connetction to the MongoDB Server with mongoose
  212. Creatign the Product Schema 
  213. Saving Data Through Mongoose
  214. Fetching All Products
  215. Fetching a Single Product
  216. Updating Prouducts
  217. Deleting Products
  218. Adding and Using a User Model
  219. Using Relations in Mongoose
  220. One Important Thing About Fetching Relations
        - Select, Populate 
  221. Working on the Shopping Cart
  222. Loading the Cart
  223. Deleting Cart Items
  224. Creating & Getting Orders
  225. Storing All Order Related Data
  226. Clearing the Cart After Storing an Order
  227. Getting & Displaying the Orders
  228. Wrap Up
  229. Useful Resources & Links

# Section 14: Sessions & Cookies
  230. Module Introduction
  231. What is a Cookie?
  232. The Current Project status
  233. Optional: Creating the Login Form
  234. Adding the Request Driven Login Solution
  235. Setting a Cookie
  236. Manipulating Cookies
  237. Configuring Cookies
  238. What is a Session?
  239. Initializing a Session Middleware
  240. Using the Session Middleware
  241. Using MongoDB to Store Sessions
  242. Sessions & Cookies - A Short Summary
        - Cookie --> Client 
        - Session -> Server ( most common use case for authentication )
  243. Deleting a cookie
  244. Fixing Some Minor Bugs
  245. Making "Add to Cart" Work Again
  246. Two tiny Improvements
  247. Wrap Update
  * Cookies:
    - Client Side
    - Works well with Sessions
    - Is not recommended to store Sensitive Data
  * Sessions: 
    - Server side
    - Can store Anything in sessions
    - Good for storing sensitive data
  248. Code Adjustments
  249. Useful Resources & Links


# Section 15: Adding Authentication

250. Module Introduction
251. What is Authentication?
252. How is Authentication Implemented?
253. Out Updated Project status
254. Implementubg and Authentication Flow
