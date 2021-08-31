connections = [];
counter = 0;

self.onconnect = (connectEvent) => {
  const port = connectEvent.ports[0];

  port.start(); // not required?
  connections.push(port);

  port.onmessage = (messageEvent) => {
    console.log(messageEvent);
  };
};

setInterval(() => {
  counter++;
  connections.forEach((connection) => {
    connection.postMessage(counter);
  });
}, 2000);
