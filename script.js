/*Quando falamos em arrays, muitas vezes queremos criar um novo array com apenas algum dado ou ainda novo array com um dado modificado, para isso pode-se usar a função map. O objetivo é criar um novo array apenas com o nome dos jogadores utilizando a função map.*/

//O resultado final deverá ser este:
//[ 'Taffarel', 'Jorginho', 'Ricardo Rocha', 'Mauro Silva', 'Bebeto', 'Romário', 'Dunga']


const jogadoresSelecao94 = [
    {
        nome: 'Taffarel',
        posicao: 'Goleiro',
    },
    {
        nome: 'Jorginho',
        posicao: 'Lateral Direito',
    },
    {
        nome: 'Ricardo Rocha',
        posicao: 'Zagueiro',
    },
    {
        nome: 'Mauro Silva',
        posicao: 'Volante',
    },
    {
        nome: 'Bebeto',
        posicao: 'Atacante',
    },
    {
        nome: 'Romário',
        posicao: 'Atacante',
    },
    {
        nome: 'Dunga',
        posicao: 'Volante',
    },
];

let nomes = [];

nomes = jogadoresSelecao94.map(function(jogadoresSelecao94){
    return jogadoresSelecao94.nome
});
console.log('nomes dos jogadores de 94:', nomes);