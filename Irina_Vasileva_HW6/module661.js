//6.6.1
function palindrome(word) {
    word = word.toLowerCase();
    word = word.replace(/\s/g, '');
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function palindromeCheck(word) {
    if (palindrome(word)) {
        console.log("Слово " + word + " является палиндромом");
    } else {
        console.log("Слово " + word + " не является палиндромом");
    }
}

palindromeCheck("Довод");
palindromeCheck("Сантимент");