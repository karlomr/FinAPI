import  express  from "express";
import { v4 as uuid }  from "uuid";

const app = express();

app.use(express.json());

const customers = [];

app.post("/account", (request, response) => {
  const { cpf, name } = request.body;

  const customerAlreadyExists = customers.some(
    (customer) => customer.cpf === cpf
  );
  const id = uuid();

  customer.push({
    cpf,
    name,
    id: uuid(),
    statement: [],
  });

  return response.status(201).send();
});

app.listen(2001);
