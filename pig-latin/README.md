Pig Latin Algorithm
===================

Had some problems with this one, the problem was about "Should handle words without vowels", the thing is that Y is not a vowel... Also the FreeCodeCamp is not perfect, still pass all test and the last one, did not throw any "error" or "hint" besides of the f*ing "Should handle...".

```javascript
// Correct
let re = /[aeiuo]/;

// Not Correct
let re = /[aeyiuo]/;
```

The complexity of this algorithm in the worst scenario is like O(N), for example if there are no vowels at all... In the better case, then the vowel is the first one, I belive is something like that O(1) or O(k).

Also "googling" for my problem found solution with only REGEX in about two lines of code... But in my opinion the "readability" of that kind off code is awfull:

```javascript
function translatePigLatin(str) {
    return str
      .replace(/^([aeiou])(.*)/, '$1$2way')
      .replace(/^([^aeiou]+)(.*)/, '$2$1ay');
}
```

Thx for all people in the forum and stackoverflow...