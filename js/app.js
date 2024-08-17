const vowels = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
};

console.log(Object.entries(vowels))

const encrypt = (text) => {
    let newText = "";
    for (let letter of text) {
        if (Object.hasOwn(vowels, letter)) {
            newText += vowels[letter];
        } else {
            newText += letter;
        }
    }

    return newText;
};

console.log(encrypt("gato gato"));

const decrypt = (text) => {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
        let letter = text[i];
        if (Object.hasOwn(vowels, letter)) {
            if (
                vowels[letter] === text.substring(i, i + vowels[letter].length)
            ) {
                newText += letter;
                text = text.slice(0, i) + letter + text.slice(i + vowels[letter].length);
            }
        } else {
            newText += letter;
        }
    }
    return newText;
};

console.log(decrypt("fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!"));
