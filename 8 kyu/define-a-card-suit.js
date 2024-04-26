// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

// My solution

function defineSuit(card) {
    if (card.endsWith('♣')){
      return 'clubs'
    } else if (card.endsWith('♦')){
      return 'diamonds'
    } else if (card.endsWith('♥')){
      return 'hearts'
    } else if (card.endsWith('♠')){
      return 'spades'
    }
  }
