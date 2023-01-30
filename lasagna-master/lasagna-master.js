/// <reference path="./global.d.ts" />

import { receiveMessageOnPort } from "worker_threads";

// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
const noodle_grams = 50;;
const sauce_liters = 0.2;
export function cookingStatus (remaining_time){
    return (remaining_time===0)? 'Lasagna is done.' : (!remaining_time)?'You forgot to set the timer.':'Not done, please wait.';    
}
export function preparationTime (lasagna_layers, avg_prep_time=2){
    return (lasagna_layers.length*avg_prep_time);
}
export function quantities (sauce_noodle_arr=[]){
    let result_noodle = sauce_noodle_arr.filter(noodle=> noodle === 'noodles' ).length;
    let result_sauce = sauce_noodle_arr.filter(sauce=> sauce === 'sauce' ).length;
    return { 'noodles': result_noodle*noodle_grams, 'sauce' : result_sauce*sauce_liters} 
}

export function addSecretIngredient (friendsList=[], myList=[]){
    myList.push(friendsList[friendsList.length - 1]);
}
export function scaleRecipe (recipe,nPortions=2){
   
    let scaled = Object.assign({},recipe);
    Object.entries(scaled).forEach(([key,value]) => {
        scaled[key] = value * (nPortions/2);
    })
    
    return scaled;
}