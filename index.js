const server = require("./api/server");

const hostName = "127.0.0.1";
const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`Server started on http://${hostName}:${PORT}`);
});
