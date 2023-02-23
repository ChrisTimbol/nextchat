## Chat App

## Motivation 
I wanted to learn more about the backend and websockets/socket.io 

## What I Learned
- websockets  can make a quick low-latency, bidirectional and event-based communication between client and server
- socket.io to websockets is similar to how express framework is to node. That being that its an abstraction that makes the working with it easier
- I used a `nodemon` and `concurrently` npm packages for the first time. Nodemon made it easier to make adjustments on the backend without having to constantly restart the program. Concurrrently made it so i can run frontend and backend concurrently


## Problems I ran into
- username was getting updated whenever the user changed his name. This issue was due to using a state variable. I fixed this issue by converting the variable to a string that way it was immutable.
- I had to figure out how to scroll down the chat with every new message. What worked for me was using the useRef() react hook. and connecting it as a attribute to the chat container. And when ever the chat container increased in size i set ref.current.scrollTop = ref.current.scrollHeight

## Framework/Libraries used
 Built with 
 - React 
 - NextJS 
 - Socket.io
 - Node
 - Express
 
## Screenshots
![image](https://user-images.githubusercontent.com/23703863/220799677-71b06587-d63c-4047-9c60-03be11608427.png)


## How to use?

#### Not currently deployed due to the cost to host on backend


You will need [Node.js](https://nodejs.org) version 8.0 or greater installed on your system.
```
git clone
npm install
```
Run the development server from the root folder.
```bash
npm run dev

```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
