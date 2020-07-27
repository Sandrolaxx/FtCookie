import React, { Component } from 'react';
import './assets&CSS/estilo.css'

//To run this code 

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phraseText: ''
        };
        this.motivationalPhrase = ['Life is 10% what happens to me and 90% of how I react to it. – Charles R. Swindoll (A vida é 10% do que acontece comigo e 90% de como eu reajo a isso.)',
        'The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. – Steve Jobs (A única maneira de fazer um ótimo trabalho é amar o que você faz. Se você ainda não encontrou, continue procurando. Não se acomode.)',
        'Getting started is more important than becoming an expert. (Começar é mais importante do que se tornar um especialista.)',
        'Opportunities don’t happen, you create them. – Chris Grosser (As oportunidades não acontecem, você as cria.)',                         
        'Studying is not about time. It’s about effort. (Estudar não é sobre o tempo. É sobre esforço.)',
        'Try not to become a person of success, but rather try to become a person of value. – Albert Einstein (Não tente se tornar uma pessoa de sucesso, mas tente se tornar uma pessoa de valor.)',
        'Great minds discuss ideas. Average minds discuss events. Small minds discuss people. – Eleanor Roosevelt (Grandes mentes discutem ideias. Mentes medianas discutem eventos. Mentes pequenas discutem pessoas.)',
        'Always deliver more than expected. – Larry Page (Sempre entregue mais do que o esperado.)',
        'You must be the change you wish to see in the world. – Mahatma Gandhi (Você deve ser a mudança que deseja ver no mundo.)',
        'Life’s challenges are not supposed to paralyze you, they’re supposed to help you discover who you are. – Bernice Johnson Reagon (Os desafios da vida não são para paralisá-lo, eles são para ajudá-lo a descobrir quem você é.)',
        'If not us, who? If not now, when? – John F. Kennedy (Se não nós, quem? Se não agora, quando?)',
        'The pain of studying is only temporary. But the pain of not knowing – ignorance – is forever. (A dor de estudar é apenas temporária. Mas a dor de não saber – ignorância – é para sempre.)',
        'All our dreams can come true – if we have the courage to pursue them. – Walt Disney (Todos os nossos sonhos podem se tornar realidade – se tivermos coragem de persegui-los.)',
        'If you don’t walk today, you’ll have to run tomorrow. (Se você não andar hoje, terá que correr amanhã.)',
        'Dream as if you’ll live forever. Live as if you’ll die tomorrow. – James Dean (Sonhe como se você fosse viver para sempre. Viva como se você fosse morrer amanhã.)',
        'Tough times never last, but tough people do. – Robert H. Schuller (Tempos difíceis não duram para sempre, mas pessoas fortes sim.)',
        'Don’t judge each day by the harvest you reap but by the seeds that you plant. – Robert Louis Stevenson (Não julgue cada dia pelos frutos que você colhe, mas sim pelas sementes que você planta.)',
        'Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs (O seu tempo é limitado, então não o desperdice vivendo a vida de outra pessoa.)',
        'If you can dream it, you can do it. – Walt Disney (Se você pode sonhar, você pode fazer.)',
        'If you want to achieve greatness stop asking for permission. (Se você quer alcançar grandes feitos, pare de pedir permissão.)',
        'If you always do what you’ve always done, you’ll always get what you’ve always got. – Henry Ford (Se você sempre fizer o que sempre fez, você sempre conseguirá o que sempre conseguiu.)',
        'Surround yourself with positive people. (Cerque-se de pessoas positivas.)',
        'If it doesn’t challenge you, it doesn’t change you. – Fred DeVito (Se isso não te desafia, isso não muda você.)',
        'You change the world by being yourself. – Yoko Ono (você muda o mundo sendo você mesmo.)',
        'Die with memories, not dreams. (Morra com memórias não com sonhos.)',
        'Everything you can imagine is real. – Pablo Picasso (Tudo que você pode imaginar é real.)',
        'The best way to predict your future is to create it. – Abraham Lincoln (A melhor maneira de prever o seu futuro é criá-lo.)',
        'Whatever you do, do it well. – Walt Disney (Qualquer coisa que você fizer, faça bem.)',
        'The best dreams happen when you are awake. – Cherie Gilderbloom (Os melhores sonhos acontecem quando você está acordado.)',
        'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy. – Norman Vincent Peale (Acredite em você mesmo! Tenha fé em suas habilidades! Sem uma confiança humilde, mas razoável em seus próprios poderes, você não consegue ser bem sucedido ou feliz.)',
        'Change your life today. Don’t gamble on the future, act now, without delay. – Simon de Beauvoir (Mude a sua vida hoje. Não aposte/arrisque no futuro, aja agora, sem demora.)',
        'Start where you are. Use what you have. Do what you can. – Arthur Ashe (Comece onde você está. Use o que você tem. Faça o que você puder.)',
        'You will never win if you never begin. – Helen Rowland (Você nunca vai ganhar se você nunca começar.)',
        'Always do your best. What you plant now, you will harvest later. – Og Mandino (Sempre faça o seu melhor. O que você planta agora, você irá colher mais tarde.)',
        'Problems are not stop signs, they are guidelines. – Robert H. Schuller (Os problemas não são sinais de parada, são diretrizes.)',
        'Don’t tell people your plans. Show them your results. – (Não conte às pessoas os seus planos. Mostre a elas os seus resultados.)',
        'No pressure, no diamonds. – Thomas Carlyle (Sem pressão, sem diamantes.)',
        'Surround yourself with those on the same mission as you. (Cerque-se com aqueles que estão na mesma missão que você.)',
        'It always seems impossible until it’s done. – Nelson Mandela (Sempre parece impossível até ser feito.)',
        'Be somebody nobody thought you could be. – William Chapman (Seja alguém que ninguém pensou que você poderia ser.)',
        'The purpose of our lives is to be happy. – Dalai Lama (O propósito de nossas vidas é ser feliz.)',
        'People who invest in the future are realists. – Peter Night (As pessoas que investem no futuro são realistas.)',
        'All progress takes place outside the comfort zone. – Michael John Bobak (Todo progresso ocorre fora da zona de conforto.)',
        'Don’t be afraid to give up the good to go for the great. – John D. Rockefeller (Não tenha medo de desistir do bom para ir atrás do excelente.)',
        'If you really want to do something, you’ll find a way. If you don’t, you’ll find an excuse. – Jim Rohn (Se você quer realmente fazer alguma coisa, você encontrará uma forma. Se você não quiser, você encontrará uma desculpa.)'
        ];
        this.btnAction = this.btnAction.bind(this);
    }

    btnAction() {
        let state = this.state;
        let randomPhrase = Math.floor(Math.random() * this.motivationalPhrase.length);
        state.phraseText = this.motivationalPhrase[randomPhrase];

        this.setState(state);
    }

    render() {
        return (
            <div className='container'>
                <img src={require('./assets&CSS/biscoito.png')} className='img'/>
                <Button name='Open Fortune Cookie' btnAction={this.btnAction}/>
                <h3 className='phrase'>{this.state.phraseText}</h3>
            </div>
        );
    }
}

class Button extends Component {
    render() {
        return(
            <div>
                <button onClick={this.props.btnAction}>{this.props.name}</button>
            </div>
        );
    }
}

export default App;