document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    {
      name: 'bird1',
      img: 'images/bird1.jpg',
    },
    {
      name: 'bird2',
      img: 'images/bird2.jpg',
    },
    {
      name: 'bird3',
      img: 'images/bird3.jpg',
    },
    {
      name: 'bird4',
      img: 'images/bird4.jpg',
    },
    {
      name: 'bird5',
      img: 'images/bird5.jpg',
    },
    {
      name: 'bird6',
      img: 'images/bird6.jpg',
    },
    {
      name: 'bird1',
      img: 'images/bird1.jpg',
    },
    {
      name: 'bird2',
      img: 'images/bird2.jpg',
    },
    {
      name: 'bird3',
      img: 'images/bird3.jpg',
    },
    {
      name: 'bird4',
      img: 'images/bird4.jpg',
    },
    {
      name: 'bird5',
      img: 'images/bird5.jpg',
    },
    {
      name: 'bird6',
      img: 'images/bird6.jpg',
    },
  ];

  cardArray.sort(() => 0.5 - Math.random()); // sort the array randomly

  const gridDisplay = document.querySelector('#grid');
  const resultDisplay = document.querySelector('#result');
  let cardsChosen = [];
  let cardsChosenIds = [];
  const cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'images/blank.jpg');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  //checking the matches
  function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    console.log(cards);
    console.log('check for match!');

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.jpg');
      cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
      Swal.fire('You have clicked the same image!');
    } else if (cardsChosen[0] === cardsChosen[1]) {
      Swal.fire('You found a match');
      cards[optionOneId].setAttribute('src', 'images/forest.jpg');
      cards[optionTwoId].setAttribute('src', 'images/forest.jpg');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.jpg');
      cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
      Swal.fire('Sorry try again!');
    }

    cardsChosen = [];
    cardsChosenIds = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Congratulations! You found all the matches!';
    }
  }

  // flip the cards
  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkMatch, 500);
    }
  }

  createBoard();

  //confetti animation
  const jsConfetti = new JSConfetti();
  async function confettiMy() {
    await jsConfetti.addConfetti();
    window.location.reload();
  }
  document.querySelector('.btn').addEventListener('click', confettiMy);
});
