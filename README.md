Cadastro de usuario

RF

    Deve ser possível cadastrar um novo usuario.                                OK

RN

    Não deve ser possível cadastrar um usuario com email já existente           OK

Autenticação de usuario

RF

    Deve ser possível realizar a autenticação/login do usuario                  OK

RN

    Caso a autenticação ocorra deve ser gerado um token                         OK



Cadastro de carro

RF

    Deve ser possível cadastrar um novo carro.                                  OK

RN

    Não deve ser possível cadastrar um carro com uma placa já existente.        OK
    O carro deve ser cadastrado, por padrão, com disponibilidade.               OK
    O usuário responsável pelo cadastro deve ser um usuário administrador.      OK

Listagem de carros

RF

    Deve ser possível listar todos os carros disponíveis                                OK
    Deve ser possível listar todos os carros disponíveis pelo - nome da categoria       OK
    Deve ser possível listar todos os carros disponíveis pelo - nome da marca           OK
    Deve ser possível listar todos os carros disponíveis pelo - nome do carro           OK

RN

    O usuário não precisar estar logado no sistema.                                     OK

Cadastro de Categoria

RF

    Deve ser possível cadastrar uma Categoria                                               OK

RN

    Não deve ser possível cadastrar uma categoria  - com o nome ja existente                OK
    O usuário responsável pelo cadastro deve ser um usuário - administrador.                OK

Importe de categorias

RF

    Deve ser possível cadastrar categorias através de um arquivo                            OK

RNF

    Utilizar o multer para upload do arquivo                                                OK

RN

    O usuário deve poder cadastrar mais de um categoria- no mesmo arquivo                   OK
    O usuário responsável pelo cadastro deve ser um usuário - administrador.                OK


Listagem de Categorias

RF

    Deve ser possível listar todas as categorias disponíveis                               OK

Cadastro de Especificação no carro

RF

    Deve ser possível cadastrar uma especificação para um carro                             OK

RN

    Não deve ser possível cadastrar uma especificação para um - carro não cadastrado.       OK
    Não deve ser possível cadastrar uma especificação já - existente para o mesmo carro.    OK
    O usuário responsável pelo cadastro deve ser um usuário - administrador.                OK

Cadastro de imagens do carro

RF

    Deve ser possível cadastrar a imagem do carro                                           OK

RNF

    Utilizar o multer para upload dos arquivos                                              OK

RN

    O usuário deve poder cadastrar mais de uma imagem para o - mesmo carro                  OK
    O usuário responsável pelo cadastro deve ser um usuário - administrador.                OK

Aluguel de carro

RF

    Deve ser possível cadastrar um aluguel                                                                      OK

RN

    O aluguel deve ter duração mínima de 24 horas.                                                              OK
    Não deve ser possível cadastrar um novo aluguel caso já - exista um aberto para o mesmo usuário             OK
    Não deve ser possível cadastrar um novo aluguel caso já - exista um aberto para o mesmo carro               OK
    O usuário deve estar logado na aplicação                                                                    OK
    Ao realizar um aluguel, o status do carro deverá ser - alterado para indisponível                           


Devolução de carro

RF

    Deve ser possível realizar a devolução de um carro                                                          

RN

    Se o carro for devolvido com menos de 24 horas, deverá - ser cobrado diária completa.                       
    Ao realizar a devolução, o carro deverá ser liberado para - outro aluguel.
    Ao realizar a devolução, o usuário deverá ser liberado - para outro aluguel.
    Ao realizar a devolução, deverá ser calculado o total do - aluguel.
    Caso o horário de devolução seja superior ao horário - previsto de entrega, deverá ser cobrado multa - proporcional aos dias de atraso.
    Caso haja multa, deverá ser somado ao total do aluguel.
    O usuário deve estar logado na aplicação

Listagem de Alugueis para usuário

RF

    Deve ser possível realizar a busca de todos os alugueis para o usuário

RN

    O usuário deve estar logado na aplicação

Recuperar Senha

RF

    Deve ser possível o usuário recuperar a senha informando o e-mail
    O usuário deve receber um e-mail com o passo a passo para a recuperação da senha
    O usuário deve conseguir inserir uma nova senha

RN

    O usuário precisa informar uma nova senha
    O link enviado para a recuperação deve expirar em 3 horas
