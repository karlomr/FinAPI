##FinAPI - Financeira

### Requisitos
Poderá:
- 1 [x] Criar uma conta
- 2 [x] Buscar o extrato bancário do cliente
- 3 [] Realizar depósito
- 4 [] Realizar saque
- 5 [] Buscar extrato bancário do cliente por data
- 6 [] Atualizar daods da conta do cliente
- 7 [] Deletar uma conta do client

## Regras de Negócio
Não poderá:
- [x] Cadastrar conta com CFP já existente 
- [] Realizar depósito em conta inexistente 
- [] Buscar extrato em conta não existente 
- [] Fazer saque usando conta inexistente
- [] Excluir conta inexistente
- [] Realizar  saque quando saldo insuficiente


## Cadastro de Conta
- 04:32 - Instalação do UUID
Atendidos
- Requisitos nº[1]
- Regra nº[1]

## Listando Extratos
- 03:40 - Alterado o método get, ond eestava request params será gravado como request.headers




