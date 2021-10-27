const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// Condições Iniciais
score0El.textContent = 0;
score1El.textContent = 0;

let currentScore = 0;
let activePlayer = 0;

function switchPlayer(){
    currentScore = 0;
        activePlayer==0 ? current0El.textContent = 0 : current1El.textContent = 0;
        activePlayer = activePlayer==1 ? 0 : 1;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}
const score = [0,0];
 
let playing = true;

diceEl.classList.add('hidden');


btnRoll.addEventListener('click', function(){
    if(playing){
        // 1. Gerar número aleatório 1-6
        const dice = Math.trunc(Math.random()*6)+1
        
        // 2. Mostrar Dado 
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        
        // 3.Checar se o número é 1 para passar a jogada
        if (dice !== 1){
            // Adicionar dado à pontuação atual
            currentScore += dice;

            activePlayer==0 ? current0El.textContent = currentScore : current1El.textContent = currentScore;
        }
        else{switchPlayer()}
    }});


btnHold.addEventListener('click',function(){
    if(playing){
        score[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
        currentScore = 0;
        if(score[activePlayer]>=20){
            activePlayer? player1El.classList.add('player--winner'): player0El.classList.add('player--winner') ;
            alert(`Player ${activePlayer+1} won!`);
            playing = false;
        }
        else{switchPlayer()}
    }});

btnNew.addEventListener('click', function(){
    playing = true;
    score[0]=0;
    score[1]=0;
    current0El.textContent=0;
    current1El.textContent=0;
    currentScore=0;
    activePlayer=0;
    player0El.classList.add('player--active');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--active');
    player1El.classList.remove('player--winner');
    score0El.textContent=0;
    score1El.textContent=0;
});

