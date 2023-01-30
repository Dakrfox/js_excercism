/// <reference path="./global.d.ts" />



// @ts-check
//prueba 
/**
 * Creates a new visitor.
 *
 * @param {string} visitor_name
 * @param {number} visitor_age
 * @param {string} visitor_ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(visitor_name, visitor_age, visitor_ticketId) {
  return { name: visitor_name, age: visitor_age, ticketId: visitor_ticketId }
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  /*let obj = visitor;
  obj.ticketId = null;
  return obj;*/
  visitor.ticketId=null;
  return visitor
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {

  if(!(ticketId in tickets)) return 'unknown ticket id';

  if(tickets[ticketId] === null){
    return 'not sold';
  }
  else {
    return  `sold to ${tickets[ticketId]}`;
  }
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  return (ticketId in tickets && tickets[ticketId]!=null)? `${tickets[ticketId]}`:'invalid ticket !!!';
  
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  //return (visitor.gtc ===undefined)? undefined: visitor.gtc['version'];
  return visitor.gtc?.version;
}
