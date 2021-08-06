let s1 = 0;
let s2 = 0;
let maxScore;

const s1Element = document.querySelector('#s1');
const s2Element = document.querySelector('#s2');
const btn1 = document.querySelector('#p1');
const btn2 = document.querySelector('#p2');
const btnr = document.querySelector('#reset');
const select = document.querySelector('#maxScore');
maxScore = select.value;


const gameOver = () => {
    btn1.disabled = true;
    btn2.disabled = true;
    if (s1 == maxScore) {
        s1Element.classList.add('winner');
        s2Element.classList.add('loser');
    }
    else {
        s1Element.classList.add('loser');
        s2Element.classList.add('winner');
    }
}

const updateScores = () => {
    s1Element.innerText = s1;
    s2Element.innerText = s2;
    if (s1 == maxScore || s2 == maxScore) gameOver();
}

const reset = () => {
    s1 = 0;
    s2 = 0;
    updateScores();
    s1Element.classList.remove('winner', 'loser');
    s2Element.classList.remove('winner', 'loser');
    btn1.disabled = false;
    btn2.disabled = false;
}

select.addEventListener('change', () => {
    reset();
    maxScore = select.value;
});

btn1.addEventListener('click', () => {
    s1++;
    updateScores();
});

btn2.addEventListener('click', () => {
    s2++;
    updateScores();
});

btnr.addEventListener('click', reset);