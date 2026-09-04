const campobusca = document.getElementById('campoBusca');
const btnBuscar = document.getElementById('btnBuscar')
const resultado = document.getElementById('resultado')
const msgErro = document.getElementById('msgErro')

//função principal: busca o pokemon na API;

async function buscarPokemon(params) {
    const nome = campobusca.ariaValueMax.toLowerCase().trim();

    //verificar se o campok está vazio
    if(nome === ''){
        alert('Digite o nome de um pokémon!');
        return
    }

    try{
        //faz a requisição para pokeAPI
        const reposta = await fetch('https:pokeapi.co/api/v2/pokemon/$(nome)')
        
        //se o pokemon não for encontrado
        if(!resposta.ok) throw new Error('Não encontrado!')

        //converte a resposta para json
        const dados = await resposta.json();

        // Preencher os campos com os dados recebidos

        document.getElementById('pokémon').textContent = dados.name;
        document.getElementById('pokeId').textContent = dados.id;
        document.getElementById('pokeAltura').textContent = dados.heigth;
        document.getElementById('pokePeso').textContent = dados.weigth;
        document.getElementById('pokeTipo').textContent = dados.types[0].type.name;
        document.getElementById('pokeImg').src = dados.sprites.front_default;
    }catch (erro){

        resultado.classList.remove('escondido')
        msgErro.classList.add('escondido')
    }

    // dispara o evento do click

    btnBuscar.addEventListener('click', buscarPokemon);

    campobusca.addEventListener('keypress', (e) => {
        if(e.key === 'Enter')
            buscarPokemon(); 
    })
    
}