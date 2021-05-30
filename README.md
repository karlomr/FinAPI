##FinAPI - Financeira

### Requisitos
Poderá:
- 1 [x] Criar uma conta
- 2 [x] Buscar o extrato bancário do cliente
- 3 [x] Realizar depósito
- 4 [x] Realizar saque
- 5 [x] Buscar extrato bancário do cliente por data
- 6 [x] Atualizar daods da conta do cliente
- 7 [x] Deletar uma conta do client

## Regras de Negócio
Não poderá:
- 1 [x] Cadastrar conta com CFP já existente 
- 2 [x] Realizar depósito em conta inexistente 
- 3 [x] Buscar extrato em conta não existente 
- 4 [x] Fazer saque usando conta inexistente
- 5 [x] Realizar  saque quando saldo insuficiente
- 6 [x] Excluir conta inexistente



## Cadastro de Conta
- 04:16 - Instalação do UUID
Atendidos
- Requisitos nº[1]
- Regra nº[1]

## Listando Extratos
- 03:40 - Alterado o método get, ond eestava request params será gravado como request.headers
Atendidos
- Requisitos nº[2]
- Regra nº[2]

## Middlewares
- Função que fica entre o request e o response. Usado em validação de token, usuários administrativos, validações etc.

- 03:38 - Parâmetros usados no middleware.

- 06:01 - Formas de passar o middleware para o código.

## Criando depósito na conta
- Requisitos nº[3]
- Regra nº[]


## Criando saque na conta
- Requisitos nº[4]
- Regra nº[4,5]

## Listar extrato bancário por data
- Requisitos nº[5]

## Atualizar conta
- Requisitos nº[6]

## Deletar conta
- Requisitos nº[7]
- Regra nº[6]







