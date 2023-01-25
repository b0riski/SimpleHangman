function hangman() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let tries = 8
    let data = ['albatross', 'alligator', 'alpaca', 'anaconda', 'ant', 'antelope', 'ape', 'baboon', 'bat', 'bear', 'beaver',
        'beetle', 'bison', 'boa', 'boar', 'butterfly', 'camel', 'cat', 'cheetah', 'chicken', 'chimpanzee', 'chinchilla', 'cobra',
        'cockroach', 'cow', 'coyote', 'crab', 'crocodile', 'deer', 'dog', 'dolphin', 'donkey', 'dove', 'duck', 'eagle', 'eel', 'elephant',
        'fish', 'flamingo', 'fly', 'fox', 'frog', 'gazelle', 'giraffe', 'goat', 'goose', 'gorilla', 'grasshopper', 'hamster', 'hedgehog',
        'hippopotamus', 'horse', 'hyena', 'iguana', 'jaguar', 'jellyfish', 'kangaroo', 'kiwi', 'koala', 'leopard', 'lion', 'lobster',
        'marmot', 'monkey', 'mosquito', 'mouse', 'octopus', 'owl', 'oyster', 'ostrich', 'panther', 'parrot', 'panda', 'parrot', 'pelican',
        'pig', 'pigeon', 'puma', 'python', 'ram', 'rat', 'raven', 'reindeer', 'rooster', 'rabbit', 'racoon', 'raven', 'salamander', 'scorpion',
        'seahorse', 'shark', 'seal', 'sheep', 'shrimp', 'snake', 'spider', 'squirrel', 'starfish', 'swordfish', 'tapir', 'tarantula', 'tiger',
        'turtle', 'vulture', 'worm', 'whale', 'wolf', 'whale', 'zebra']
    let randomWord = data[Math.floor(Math.random() * data.length)]
    let secretWord = ''
    let checkSecretWord = ''
    let usedLetters = ''
    for (let i = 0; i < randomWord.length; i++) {
        let secretLetters = '-'
        secretWord += secretLetters
    }
    console.clear()
    console.log(`>>>  ${secretWord}  <<< Guess the animal to stay alive. The word has ${randomWord.length} letters.`);
    console.log('_________')
    console.log('||/      ')
    console.log('||       ')
    console.log('||                  _________')
    console.log('||                 |_HANGMAN_|')
    console.log('||    =====             |')
    console.log('=============           |')
    let recursiveAsyncReadLine = function () {
        readline.question('Pick a letter: ', letter => {
            checkSecretWord = secretWord
            for (let i = 0; i < randomWord.length; i++) {
                if (letter == randomWord[i]) {
                    secretWord = secretWord.split('')
                    secretWord[i] = letter
                    secretWord = secretWord.join('')
                }
            }
            usedLetters += letter + ', '
            if (checkSecretWord == secretWord) {
                tries--
            }
            if (tries == 8) {
                console.clear()
                console.log(`>>>  ${secretWord}  <<< ${usedLetters}`)
                console.log('_________')
                console.log('||/      ')
                console.log('||       ')
                console.log('||                  _________')
                console.log('||                 |_HANGMAN_|')
                console.log('||    =====             |')
                console.log('=============           |')
            } else if (tries == 7) {
                console.clear()
                console.log(`>>>  ${secretWord}  <<< ${usedLetters}`)
                console.log('_________')
                console.log('||/     |')
                console.log('||       ')
                console.log('||                  _________')
                console.log('||                 |_HANGMAN_|')
                console.log('||    =====             |')
                console.log('=============           |')
            } else if (tries == 6) {
                console.clear()
                console.log(`>>>  ${secretWord}  <<< ${usedLetters}`)
                console.log('_________')
                console.log('||/     | ')
                console.log('||      O')
                console.log('||                  _________')
                console.log('||                 |_HANGMAN_|')
                console.log('||    =====             |')
                console.log('=============           |')
            } else if (tries == 5) {
                console.clear()
                console.log(`>>>  ${secretWord}  <<< ${usedLetters}`)
                console.log('_________')
                console.log('||/     | ')
                console.log('||      O')
                console.log('||      !           _________')
                console.log('||                 |_HANGMAN_|')
                console.log('||    =====             |')
                console.log('=============           |')
            } else if (tries == 4) {
                console.clear()
                console.log(`>>>  ${secretWord}  <<< ${usedLetters}`)
                console.log('_________')
                console.log('||/     | ')
                console.log('||      O')
                console.log('||     /!           _________')
                console.log('||                 |_HANGMAN_|')
                console.log('||    =====             |')
                console.log('=============           |')
            } else if (tries == 3) {
                console.clear()
                console.log(`>>>  ${secretWord}  <<< ${usedLetters}`)
                console.log('_________')
                console.log('||/     | ')
                console.log('||      O')
                console.log('||     /!\\          _________')
                console.log('||                 |_HANGMAN_|')
                console.log('||    =====             |')
                console.log('=============           |')
            } else if (tries == 2) {
                console.clear()
                console.log(`>>>  ${secretWord}  <<< ${usedLetters}`)
                console.log('_________')
                console.log('||/     | ')
                console.log('||      O')
                console.log('||     /!\\          _________')
                console.log('||     /           |_HANGMAN_|')
                console.log('||    =====             |')
                console.log('=============           |')
            } else if (tries == 1) {
                console.clear()
                console.log(`>>>  ${secretWord}  <<< ${usedLetters}`)
                console.log('_________')
                console.log('||/     | ')
                console.log('||      O')
                console.log('||     /!\\          _________')
                console.log('||     / \\         |_HANGMAN_|')
                console.log('||    =====             |')
                console.log('=============           |')
            } else if (tries == 0) {
                console.clear()
                console.log(`Game Over! The word was '${randomWord}'.`)
                console.log('_________')
                console.log('||/     | ')
                console.log('||      O')
                console.log('||     /!\\          _________')
                console.log('||     / \\         |_HANGMAN_|')
                console.log('||                      |')
                console.log('=============           |')
                return readline.close();
            }
            if (secretWord == randomWord) {
                console.clear()
                console.log(`We have a WINNER! The word was '${randomWord}.' You'll live to see another day!`)
                console.log('_________')
                console.log('||/       ')
                console.log('||     \\O/')
                console.log('||      !           _________')
                console.log('||     / \\         |_HANGMAN_|')
                console.log('||    =====             |')
                console.log('=============           |')
                return readline.close();
            }
            recursiveAsyncReadLine()
        });
    }
    recursiveAsyncReadLine()
}
hangman()