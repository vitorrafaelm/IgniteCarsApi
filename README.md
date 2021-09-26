**RF** => Requisitos funcionais (Funcionalidades que a aplicação vai ter);

**RNF** => Requisitos não funcionais (Requisitos que não estão ligados às regras de negócio)

**RN** => Regra de negócio (Regras por trás do nosso requisitos)

 # Cadastro de carro
**RF**
[ ] Deve ser possível cadastrar um carro.
[ ] Deve ser possível listar todas as categorias.

**RN**
[ ] Não deve ser possível cadastrar um carro com uma placa já existente.
[ ] Não deve ser possível alterar a placa de um carro já cadastrado.
[ ] O carro deve ser cadastrado com disponibilidade por padrão.
[ ] O usuário responsável pelo cadastrado deve ser um usuário adiministrador.

# Listagem de carros
**RF**
[ ] Deve ser possível listar todos os carros disponíveis.
[ ] Deve ser possível listar todos os carros pelo nome da categoria.
[ ] Deve ser possível listar todos os carros disponíveis pela marca.
[ ] Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN**
[ ] O usuário não precisa estar logado no sistema para listar os carros disponíveis.

# Cadastro de especificação no carro

**RF**
[ ] Deve ser possível cadastrar uma especificação para um carro
[ ] Deve ser possível listar todas as especificações.
[ ] Deve ser possível listar todos os carros.

**RN**
[ ] Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
[ ] Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
[ ] O usuário responsável pelo cadastrado deve ser um usuário adiministrador.

# Cadastro de imagens do carro
**RF**
[ ] Deve ser possível cadastrar a imagem do carro.
[ ] Deve ser possível listar todos os carros.

**RNF**
[ ] Utilizar o multer para upload dos arquivos.

**RN**
[ ] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro
[ ] O usuário responsável pelo cadastrado deve ser um usuário adiministrador.

# Aluguel de carro
**RF**
[ ] Deve ser possível cadastrar um aluguel.

**RN**
[ ] O aluguel deve ter duração mínima de 24 horas.
[ ] Não deve ser possível cadastrar um novo aluguem caso já exista um aberto para o mesmo usuário.
[ ] Não deve ser possível cadastrar um novo aluguem caso já exista um aberto para o mesmo carro.
[ ] Ao realizar o status do carro deverá ser alterado para indisponível;

# Devolução de um carro
**RF**
[ ] Deve ser possível realizar a devolução de um carro

**RN**
[ ] Se o carro for devolvido com menos de 24 horas, deverá ser cobrado a diária completa;
[ ] Ao realizar a devolução, o carro deverá ser liberado para outro aluguel.
[ ] Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.
[ ] Ao realizar a devolução, deverá ser calculado o total do aluguel.
[ ] Caso o horário de devolução seja superior ao horário previsto de entrega,
deverá ser cobrado multa proporcional aos dias de atrado.
[ ] Caso hava multa, deverá ser somado ao total do aluguel.
[ ] O usuário deve estar logado na aplicação;
