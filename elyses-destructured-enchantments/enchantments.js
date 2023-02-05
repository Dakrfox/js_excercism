/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
export function getFirstCard(deck) {
  //splice, slice
  //find
  return deck.find(element=>element);
}

/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the second card in the deck
 */
export function getSecondCard(deck) {
  let second_card_deck = deck.slice();
  second_card_deck.shift();
  return getFirstCard(second_card_deck);
}

/**
 * Switch the position of the first two cards in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck with reordered cards
 */
export function swapTopTwoCards(deck) {
    // @ts-ignore
    let diff_len = deck[0]- deck[1];
    // @ts-ignore
    deck[0]= deck[0]-(diff_len);
    // @ts-ignore
    deck[1]= deck[1]+(diff_len); 
    return deck;
}

/**
 * Put the top card of the given deck into a separate discard pile
 *
 * @param {Card[]} deck
 *
 * @returns {[Card, Card[]]} the top card of the given
 * deck and a new deck containing all the other cards
 */
export function discardTopCard(deck) {
  let discarded = deck.splice(1, deck.length-1);
  deck.push(discarded);
  return deck;
}

/** @type Card[] **/
const FACE_CARDS = ['jack', 'queen', 'king'];

/**
 * Insert face cards into the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck where the second,
 * third, and fourth cards are the face cards
 */
export function insertFaceCards(deck) {
  (deck.length>0)?deck.splice(1,0, 'jack', 'queen', 'king'): deck.push(undefined, 'jack', 'queen', 'king');
  return deck;
}
