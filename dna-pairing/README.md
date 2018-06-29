Solution DNA Pairing from Free Code Camp
========================================

Get stuck the first ten minutes, because did not undestand quite well the problem. But like the previous one, too easy. You just loop through the string and create the pair. If the letter is "A" the pair is ["A", "T"], if the letter is "G" the pair is ["G", "C"] and so on... You just need to create the object like that:

```javascript
let pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };

    // You can access to it like so,
    // to get the missing one
    pairs[str.charAt(1)];
```

The eficiency of this one I belive is O(N), where N is the number of the letters in the string argument.