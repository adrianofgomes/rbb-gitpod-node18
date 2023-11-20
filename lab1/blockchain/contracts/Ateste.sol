//SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.0;

contract Ateste {
    
    mapping (address => string) public confirmados;
    string[] public nomes;
	
	constructor() {
	}
    
    function atestar(string memory _nome) public {
        address enderecoQueDesejaAtestar = msg.sender;
        //require( comparaString(confirmados[enderecoQueDesejaAtestar], ""),"Confirmacao ja realizada");
        confirmados[enderecoQueDesejaAtestar] = _nome;
        nomes.push(_nome);
    }

    function comparaString(string memory a, string memory b) private pure returns (bool) {
        return keccak256(abi.encodePacked(a)) 
                 == keccak256(abi.encodePacked(b));
    }

    function primeiroNome() public view returns (string memory) {
        return nomes[0];
    }

    function todosNomes() public view returns (string[] memory) {
        return nomes;
    }
}

