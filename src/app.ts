import createServer from "./server";

const port = 3001;

const app = createServer();

app.listen(port, async () => {
  console.log(`App is running at http://localhost/${port}`);
});
