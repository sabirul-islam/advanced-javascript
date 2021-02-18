const createCharMap = (string) => {
    const charMap = {}
    for (let character of string) {
        if (charMap[character]) {
            charMap[character]++
        } else {
            charMap[character] = 1
        }
    }
    return charMap
}

console.log(createCharMap('Billal'));