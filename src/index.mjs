import express from 'express';


const app = express();

const PORT = process.env.PORT || 3000;
app.get("/", (request, response) => {
    response.status(201).send({ message: "Hello!" });
});

app.get('/api/users', (request, response) => {
    response.send([
        { id: 1, username: "Zubi", displayName: "Underwood" },
        { id: 2, username: "SilverStone", displayName: "Aphelion" },
        { id: 3, username: "Under the trees", displayName: "Null" },
    ]);
});

app.get("/api/products", (request, response) => {
    response.send([{
        id: 123, name: "chicken breast", price: 12.99
    }])
});

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
});

// localhost: 3000
