import express, { request } from "express";
import { v4 as uuid } from "uuid";

const app = express();

app.use(express.json());

const customers = [];

//validate cpf
app.post("/account", (request, response) => {
  const { cpf, name } = request.body;

  const customerAlreadyExists = customers.some(
    (customer) => customer.cpf === cpf
  );

  if (customerAlreadyExists) {
    return response.status(400).json({ error: "Customer already exists!" });
  }

  const id = uuid();

  customers.push({
    cpf,
    name,
    id: uuid(),
    statement: [],
  });

  return response.status(201).send();
});

//Middleware
function verifyIfExistsAccountCPF(request, response, next) {
  const { cpf } = request.headers;

  const customer = customers.find((customer) => customer.cpf === cpf);

  if(!customer) {
    return response.status(400).json({ error: "Customer not found!" });
  }
  request.customer = customer;

  return next();
}

//after this use all routes receive 
//app.use(verifyIfExistsAccountCPF);


//find customer statement bank
app.get("/statement", verifyIfExistsAccountCPF,(request, response) => {
  const { customer } = request;
  
  return response.json(customer.statement);
});

app.listen(2001);
