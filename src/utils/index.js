export function startsWithVowel(word) {
  const vowels = 'aeiouAEIOU';

  return vowels.indexOf(word[0]) !== -1;
}
