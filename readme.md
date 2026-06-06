1. What is the Internet?
Definition: The Internet is a massive, global network of billions of computers and electronic devices connected together.

Origins: It started in the late 1960s as ARPANET, a military project by the US Department of Defense designed to share information securely.

Evolution & Importance: It evolved from a basic text-based research network into a multimedia powerhouse (World Wide Web). Today, it is crucial because it powers global communication, commerce, education, entertainment, and instant access to information.

2. Ownership of the Internet
The Reality: Nobody owns the Internet. It is a completely decentralized network.

Who Controls It? No single government or company has total control. Instead, it is managed by international non-profit organizations that look after its technical standards and rules.

Example: ICANN manages IP addresses and domain names (like .com or .org) so everyone can find websites properly.

Physical Infrastructure: While the network is decentralized, the physical parts (like routers and cables) are owned by private telecom companies and internet service providers (ISPs).

3. Data Transfer (Cables & Towers)
The Journey: Data does not just float through the air magically. Most of it travels through physical infrastructure.

Undersea Fiber Optic Cables: Over 95% of international internet traffic travels through massive cables laid on the ocean floor. They use pulses of light to transmit huge amounts of data across continents at incredible speeds.

Towers & Wi-Fi: Cellular towers and Wi-Fi routers handle the "last mile" of the journey. They turn those signals into radio waves to send data wirelessly to your phone or laptop.

4. Packets and Servers
What are Packets? Data (like a photo or a text message) is too large to be sent all at once. The internet breaks it down into tiny, manageable pieces called packets. Each packet contains a piece of the data, the sender's address, and the destination address. They travel across different paths and get reassembled in the correct order at the destination.

What are Servers? A server is a powerful computer that stays turned on 24/7, "serving" data (websites, videos, files) to other computers (clients) whenever they request it.

5. HTTP vs. HTTPS
HTTP (HyperText Transfer Protocol): The standard protocol used to send data between a web browser and a website. The problem is that HTTP data is sent in plain text, making it easy for hackers to steal.

HTTPS (HyperText Transfer Protocol Secure): The secure version of HTTP. It uses encryption to scramble the data being sent. Even if someone intercepts your passwords or credit card details, they cannot read them.

6. Ports
Definition: A port is a virtual point where network connections start and end.

How it Works: If your computer’s IP address is like the street address of an apartment building, a port is like the specific apartment number.

Purpose: Ports allow your computer to handle multiple types of traffic at the same time without getting confused. For example, regular web traffic (HTTP) always goes through Port 80, secure web traffic (HTTPS) goes through Port 443, and emails go through a different port entirely.

1. Global vs. Local Installation (-g)
Globally Installed (-g): Adding the -g flag (like npm i nodemon -g) installs the package across your entire computer. You only have to install it once, and you can use it in any future project without reinstalling it.

Locally Installed (Without -g): If you omit -g, the package is installed only inside the current project folder. You will need to reinstall it every time you start a new project.

2. Essential Node.js & NPM Commands
Running the Server (Standard):
node .\script.js
Purpose: Runs your JavaScript file using the Node.js runtime.

Limitation: If you make changes to your code, you must manually stop the server (Ctrl + C) and run this command again to see updates.

Installing Packages:
npm i <package-name>   # Shortcut
# OR
npm install <package-name>
Purpose: Downloads and installs a specific package into your current project's node_modules folder.

Running the Server with Auto-Reload (Nodemon):
nodemon .\script.js
Purpose: Runs your server using Nodemon, which automatically restarts the server every time you save changes to your code.

Alternative Nodemon Command (If standard fails)
Bash
npx nodemon .\script.js
Purpose: If your terminal throws an error saying nodemon is not recognized, using npx forces Node to look for and execute Nodemon directly from your local project files instead.


Node.js vs. Express.js
Node.js is the runtime environment (the "main thing") that allows you to run JavaScript on the server.

Express.js is a framework that sits on top of Node.js. It allows you to write the server code and define exactly how the server should react to different requests.

What is Express.js?
Express.js is a minimal and flexible Node.js web application framework (often installed as a package). It provides a robust set of features to handle web requests and manage routing efficiently.

Why use Express.js?
While Node.js has a built-in http module to create servers, using it can be complex, verbose, and difficult to maintain. Express.js acts as a wrapper around that module, making server creation faster, cleaner, and much easier to manage.

What is Routing?
Routing is the process of defining how an application responds to a client request (like a browser click or an API call) to a specific endpoint (URI/path) using a specific HTTP method (GET, POST, etc.). In short, it determines which code runs when a user visits a specific URL.

middleware - 
Middleware is a function that runs after a server receives a request, but before it sends a response back to the user.

Think of it as a bouncer or an inspector standing between the request and your actual server code.

What can it do?
Check things: It can check if a user is logged in before letting them see a page.

Change things: It can format data, read cookies, or log details about the request.

Stop things: It can block a request entirely if something is wrong.

The 3 Parameters:
Every middleware function has access to three things:

-req (The Request object) :- requset means the users data in it.

-res (The Response object) :- the res means the response from the server.so data(code) which is send from server side their code is written in res.

-next (A function that tells Node/Express to move to the next middleware or route handler).

route parameters - /profile/:username -> To make any route dynamic you can use : at the place where you want to make it dynamic, and to access there value use req.params.
Ex:- 
/author/books/issued/swati
/author/books/issued/sejal
/author/books/issued/shree

/author/books/issued/:username -> the changing part will replace with the params which whill take all user name.


template engines - it is a markup style which will later on converted in html . 
EX:- ejs,pug,handlebars,jade ->ejs is very similar to html and the pug and jade are different like python language..
Steps to setup ejs :-
1) ejs install -
npm i ejs
2) configure ejs -
app.set("view engine","ejs");
3) create a new folder name it views
4) in that folder create a file and named it with .ejs 
5) instead of send render it -> at the time of rendering make sure you are writig the file name which is already in views folder.in render function do not mention .ejs

static files - 
steps to setup static files  :-
1) create a folder called public
2) create 3 folders inside it,images,stylesheets,javascripts
3) configure the express static in script.js file
4) understand the path 

http methods - 

error handling -