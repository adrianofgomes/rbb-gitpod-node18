# Treinamento RBB 2023

## GitPod baseado na imagem padrão node 18: https://hub.docker.com/r/gitpod/workspace-node-18


## Como usar

### GitPod.io

1. https://www.gitpod.io/
1. Se ainda não tiver uma conta, crie uma. Criar uma conta vinculada ao GitHub simplifica a integração.

### Iniciando o workspace
1. https://gitpod.io/#https://github.com/adrianofgomes/rbb-gitpod-node18
1. Utilize a configuração padrão e inicie o workspace. O truffle será instalado e iniciado na porta 9545. Vai aparecer uma opção "A service is available on port 9545". Utilize a opção "Make Public". Isso será necessário para acessar a rede pela Metamask.

O GitPod não consegue manter o mesmo mneumonico do truffle quando o worspace é desligado e o truffle não fornece a opção de fixar o mneumonico. O ganache é da mesma suite do trufle e permite fixar o mneumonico e foi adcionado como alternativa. Nesse caso, pare o trufle e inicie o ganache com: npx ganache-cli --seed myCustomSeed

O arquivo de configuração do GitPod (.gitpod.yml) pode ser editado para iniciar o ganache ao invés do truffle automaticamente.

### Metamask
1. Instale o plugin da Metamask.
1. Escolha importar uma carteira e utilize as 12 palavras geradas pelo truffle no console. Confira a conta da Metamask com o primeiro endereço 
1. Adicione uma nova rede manual. No GitPod, ao lado da aba "terminal", tem uma aba "ports". Lá vc pode ver o endereço onde o truffle está rodando. OBS. Caso o workspace do GitPod seja parado e reiniciado o endereço se mantém, porém, ao criar um novo workspace o endereço é alterado sendo necessário atualizar a rede na metamask.
1. Ao trocar para a rede truffle a conta da metamask deve estar com 100 moedas.

## License

Copyright © Microsoft Corporation All rights reserved.<br />
Licensed under the MIT License. See LICENSE in the project root for license information.