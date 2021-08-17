class Perguntas{
    constructor(pergunta, alternativas, imagemPergunta, imagemResposta, correct){ //funcao que a classe usa pra CRIAR nosso novo politico e dentro do parentes vao as variaveis
        //declarar as propriedades que esse objeto vai possuir
        this.pergunta= pergunta;
        this.alternativas = alternativas;
        this.imagemPergunta = imagemPergunta;
        this.imagemResposta = imagemResposta;
        this.correct = correct;
    }
    getCorrectAnswer() {
        return this.respostas[this.correct];
        
    }
   
     
}

const pergunta1 = new Perguntas ('Somos brasileiros e abençoados pela natureza abundante em nosso país. Nosso litoral é enorme e temos praias que agradam de Gregos a Troianos, mas....Sim, sempre tem a praia que é considerada por especialistas, viajantes e veiculos especializados que elegem a praia mais bonita no Brasil. Essa praia é?' , ['Baía do Sancho' , 'Maragogi' , 'Praia dos Carneiros' , 'Praia da Pipa' ], "../Imagens/praiagenerica.jpg" , "../Imagens/baiadosancho.jpg", 0)

const pergunta2 = new Perguntas ('Somos viajantes profissionais, então nos limitamos apenas as nossas belissimas aguas. Que tal descermos um pouco\
e chegarmos ao nosso querido vizinho, Uruguai. Agora você deve estar pensando: essa é facil. Vai falar de Punta del Leste\
Nada! Vamos falar sobre a capital mesmo, Montevideu. O que me diz das afirmações abaixo:' , ['Montevideu nao tem praia. A praia mais proxima é Punta.' , 'Montevideu tem boas praias e seu calçadão e leva o nome de Rambla e tem mais de 20Km de extensão.' , 'A praia da capital não é apropriada para turismo, serve apenas como porto para navios' , 'Por conta do clima é impossível curtir praias mo Uruguai.'] , "../Imagens/Montevideu.jpg" , "../Imagens/Rambla.jpg",1)

const pergunta3 = new Perguntas ('3) Rapa Nui ou Ilha de Páscoa: um dos destinos mais distantes, mas também mais fascinantes do mundo.\
Uma magia que fica a meio caminho entre a Polinésia Francesa e o Chile. Para conhecer esse destino tão UAU....' , ['O unico jeito é pegar um voo a partir de Santiago e ficar hospedado em hotel bem luxuoso' , 'Além do aviao, a outra única forma de conhecer lá é com cias maritimas especializadas em roteiros exoticos' , 'Alternativa B é correta, mas também é possível chegar lá com MSC e Costa Cruzeiros.' , 'Somente é possível chegar com voo fretado.'] , "../Imagens/Montevideu.jpg" , "../Imagens/MSC.jpg", 2)

const pergunta4 = new Perguntas ('4) Patagonia, Terra do Fogo, Ushuaia e Cabo Horn compoem uma lista de destinos exóticos na América do Sul. Operado pela cia Australis, esse é sem duvida um roteiro para que deseja conhecer lugares que poucas pessoas já estivereram.\
Tantos detalhes e em terras e águas tao pouco conhecidos, a organização para essa viagem é fundamental.\
Sabendo disso, eu posso:' , ['Indicar que essa viagem seja feita em qualuqer mês do ano' , 'Não pode ser feito no verão (novembro a março) pois numa região fria, viajar nessa época não terá atrativos' , 'Os roteiros existem para o ano todo, mas não recomendamos setembro por conta dos furacões' , 'Esse roteiro só existe de setembro a abril.'] , "../Imagens/Patagonia.jpg" , "../Imagens/australis.jpg", 3)

const pergunta5 = new Perguntas ('5) Chega de frio...vamos para o Caribe onde o sol reina o ano todo! ABC Island é o apelido dado para Aruba, Bonaire e Curaçao...Dessas 3 belas ilhas podemos dizer que:' , ['Aruba e Curaçao são indicadas para viagens a lazer para pessoas de todas as idades e o ideal é escolher apenas uma pois as duas são bem parecidas' , 'Aruba é tranquila, Bonaire é rustica e Curaçao é mais badalado, assim eu monto o roteiro pensando no que o passageiro deseja em sua viagem' , 'Aruba é super agitada e Curaçao bem tranquila com poucos pontos turisticos' , 'Bonaire é pouco conhecida, mas possui resorts de luxo exclusivos!' ], "../Imagens/aruba.jpg" , "../Imagens/curacao.jpg", 1)




//EVENTOS A OCORREREM DURANTE O JOGO

//vento1 - colocar o nome do jogador
const playerName = window.location.search


//evento 2 - boas vidnas + aparecer a primiera questao 
const header = document.getElementById('header');

const primInt = document.createElement('h1');
primInt.innerText = `Esta pronto marujo ${playerName.slice(7)}?`;
header.appendChild(primInt);


//evento 3 - aparecer a primeira pergunta
const body = document.body
// console.log(body);
const firstQuestion = document.querySelector('#question');
//console.log(firstQuestion);

function showQuestion (pergunta) {
    document.getElementById('question').innerHTML =  
    `<img src="${pergunta.imagemPergunta}" class="card-img-top" alt="praia">
    <div class="card-body">
          <p id="card-text">${pergunta.pergunta}</p>
    <div class="alternativas">
      <a id = "altA" href="#" onclick= "checaResposta(0,${pergunta.correct})" class="btn btn-primary">${pergunta.alternativas[0]}</a>
      <a id = "altB" href="#" onclick="checaResposta(1,${pergunta.correct})"class="btn btn-primary">${pergunta.alternativas[1]}</a>
      <a id = "altC" href="#" onclick="checaResposta(2,${pergunta.correct})"class="btn btn-primary">${pergunta.alternativas[2]}</a>
      <a id = "altD" href="#" onclick="checaResposta(3,${pergunta.correct})"class="btn btn-primary">${pergunta.alternativas[3]}</a>  
      </div>       
     </div>`
}

//evento4 - clica no botao para responder - se acertou = socore +1 score + 1 // document.getElementById('Score').innerHTML = `Sua pontuação é: ${score}`
// ELSE - nao marca ponto, mantem o score, mostra foto e a explicaçao
function checaResposta (resposta, correct) {
    if(resposta === correct) {
        alert("parabens")
    } else {
        alert("errou")
    }
}


showQuestion(pergunta2)






// evento 5 - clica no botao proxima pergunta

// evento 6 - aparece a segunda pergunta e repete a partir do evento 3, mudando apenas o contador do score
