import arraysEqual from './arraysEqual';

/**
 * @summary Returns `true` if the list is in alphabetical order,
 *   or an alphabetized list if not
 * @param {String[]} list Array of strings
 * @return {Object} { isSorted: Bool, sortedList: String[] }
 */
export default function listIsAlphabetical(list) {
  const sortedList = list.slice().sort();
  return {
    isSorted: arraysEqual(list, sortedList),
    sortedList,
  };
}
