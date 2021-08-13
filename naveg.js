

//para resposta certa preciso fazer funçao ou apenas fazer um programaçao via DOM (OnClick)?
//como fazer gravar a pontuaçao? via DOM ou funçao?

class Peguntas{
    constructor(pergunta, altA, altB, altC, altD, imagemPergunta, imagemResposta, correct){ //funcao que a classe usa pra CRIAR nosso novo politico e dentro do parentes vao as variaveis
        //declarar as propriedades que esse objeto vai possuir
        this.pergunta= pergunta;
        this.answer = [altA , altB , altC , altD]
        this.imagemPergunta = imagemPergunta;
        this.imagemResposta = imagemResposta;
        this.correct = correct;
    }
    getCorrectAnswer() {
        return this.answer[this.correct];
        
    }
    
  
   
}



const pergunta1 = new Peguntas ('Somos brasileiros e abençoados pela natureza abundante em nosso país. Nosso litoral é enorme e temos praias que \
agradam de Gregos a Troianos mas....Sim, sempre tem a praia que é considerada  por viajantes\
e veículos especializados que elegem a praia mais bonita no Brasil. Essa praia é?' , 'A) Baía do Sancho' , 'B) Maragogi' , 'C)Praia dos Carneiros' , 'D) Praia da Pipa' , "./praiagenerica.jpg" , "./baiadosancho.jpg", 0)

const pergunta2 = new Peguntas ('Somos viajantes profissionais, então nos limitamos apenas as nossas belissimas aguas. Que tal descermos um pouco\
e chegarmos ao nosso querido vizinho, Uruguai. Agora você deve estar pensando: essa é facil. Vai falar de Punta del Leste\
Nada! Vamos falar sobre a capital mesmo, Montevideu. O que me diz das afirmações abaixo:' , 'A) Montevideu nao tem praia. A praia mais proxima é Punta.' , 'B) Montevideu tem boas praias e seu calçadão e leva o nome de Rambla e tem mais de 20Km de extensão.' , 'C) A praia da capital não é apropriada para turismo, serve apenas como porto para navios' , 'Por conta do clima é impossível curtir praias mo Uruguai.' , "./Montevideu.jpg" , "./Rambla.jpg",[1])

const pergunta3 = new Peguntas ('3) Rapa Nui ou Ilha de Páscoa: um dos destinos mais distantes, mas também mais fascinantes do mundo.\
Uma magia que fica a meio caminho entre a Polinésia Francesa e o Chile. Para conhecer esse destino tão UAU....' , 'A) O unico jeito é pegar um voo a partir de Santiago e ficar hospedado em hotel bem luxuoso' , 'B) Além do aviao, a outra única forma de conhecer lá é com cias maritimas especializadas em roteiros exoticos' , 'C) Alternativa B é correta, mas também é possível chegar lá com MSC e Costa Cruzeiros.' , 'D) Somente é possível chegar com voo fretado.' , "./IlhadePascoa.jpg" , "./MSC.jpg", [2])

const pergunta4 = new Peguntas ('4) Patagonia, Terra do Fogo, Ushuaia e Cabo Horn compoem uma lista de destinos exóticos na América do Sul. Operado pela cia Australis, esse é sem duvida um roteiro para que deseja conhecer lugares que poucas pessoas já estivereram.\
Tantos detalhes e em terras e águas tao pouco conhecidos, a organização para essa viagem é fundamental.\
Sabendo disso, eu posso:' , 'A) Indicar que essa viagem seja feita em qualuqer mês do ano' , 'B) Não pode ser feito no verão (novembro a março) pois numa região fria, viajar nessa época não terá atrativos' , 'C) Os roteiros existem para o ano todo, mas não recomendamos setembro por conta dos furacões' , 'D) Esse roteiro só existe de setembro a abril.' , "./Patagonia.jpg" , "./australis.jpg", [3])

const pergunta5 = new Peguntas ('5) Chega de frio...vamos para o Caribe onde o sol reina o ano todo! ABC Island é o apelido dado para Aruba, Bonaire e Curaçao...Dessas 3 belas ilhas podemos dizer que:' , 'A) Aruba e Curaçao são indicadas para viagens a lazer para pessoas de todas as idades e o ideal é escolher apenas uma pois as duas são bem parecidas' , 'B) Aruba é tranquila, Bonaire é rustica e Curaçao é mais badalado, assim eu monto o roteiro pensando no que o passageiro deseja em sua viagem' , 'C) Aruba é super agitada e Curaçao bem tranquila com poucos pontos turisticos' , 'D) Bonaire é pouco conhecida, mas possui resorts de luxo exclusivos!' , "./aruba.jpg" , "./curacao.jpg", [1])


console.log(pergunta5.getCorrectAnswer());
//console.log(pergunta2);
//console.log(pergunta3);
//console.log(pergunta4);
//console.log(pergunta5);

