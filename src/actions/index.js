/*
 * action types
 */

export const UPDATE = 'UPDATE'
export const NEXT_LOCATION = 'NEXT_LOCATION'
export const PREVIOUS_LOCATION = 'PREVIOUS_LOCATION'

/*
* action creators
*/

export function update() {
  return { type: UPDATE }
}

export function nextLocation() {
  return { type: NEXT_LOCATION }
}

export function previousLocation() {
  return { type: PREVIOUS_LOCATION }
}
