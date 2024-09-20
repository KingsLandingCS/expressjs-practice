import express from 'express';


const app = express();

const PORT = process.env.PORT || 3000;

const mockUsers = [
    [
        { id: 1, username: "Zubi", displayName: "Underwood" },
        { id: 2, username: "SilverStone", displayName: "Aphelion" },
        { id: 3, username: "Under the Woods", displayName: "StarChild" },
        { id: 4, username: "tina", displayName: "tina" },
        { id: 5, username: "katie", displayName: "katie" },
        { id: 6, username: "sarah", displayName: "sarah" },
        { id: 7, username: "chris", displayName: "chris" },
        { id: 8, username: "josh", displayName: "josh" },
    ]
];

app.get("/", (request, response) => {
    response.status(201).send({ message: "Hello!" });
});

app.get('/api/users', (request, response) => {
    console.log(request.query);
    const { query: { filter, value } } = request;

    // when filter and value are undefined
    if (!filter && !value) return response.send(mockUsers);
    if (filter && value) return response.send(
        mockUsers.filter((user) => user[filter].includes(value))
    );
});

app.get("/api/users/:id", (request, response) => {
    console.log(request.params);
    const parsedId = parseInt(request.params.id);
    console.log(parsedId);
    if (isNaN(parsedId)) return response.status(400).send({ message: "Bad Request. Invalid ID" });
    const findUser = mockUsers.find((user) => user.id === parseId);
    if (!findUser) return response.sendStatus(404);
    return response.send(findUser);
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
