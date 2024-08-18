let inputText = document.getElementById("textArea");

const vowels = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
};

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

const decrypt = (text) => {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
        let letter = text[i];
        if (Object.hasOwn(vowels, letter)) {
            if (
                vowels[letter] === text.substring(i, i + vowels[letter].length)
            ) {
                newText += letter;
                text =
                    text.slice(0, i) +
                    letter +
                    text.slice(i + vowels[letter].length);
            } else {
                newText += letter;
            }
        } else {
            newText += letter;
        }
    }
    return newText;
};

const startEncrypting = () => {
    let resultEncrypt = encrypt(inputText.value);

    document.getElementById(
        "result"
    ).innerHTML = `<p class="text-result">${resultEncrypt}</p>
                   <button class="button button__decrypt">Copy</button>`;

    inputText.value = "";
};

const startDecrypting = () => {
    let resultDecrypt = decrypt(inputText.value);

    document.getElementById(
        "result"
    ).innerHTML = `<p class="text-result">${resultDecrypt}</p>
                   <button class="button button__decrypt">Copy</button>`;

    inputText.value = "";
};

const validateTextArea = () => {
    const indication = document.getElementById("indication");

    const regex = /^[a-z\s]*$/;

    if (!regex.test(inputText.value)) {
        indication.innerHTML = `<img src="../assets/warning.png"/>
                                <p style="opacity: 0.7; color: var(--red)">Only lowercase letters and no accents</p>`;
        setTimeout(() => {
            inputText.value = inputText.value.replace(/[^a-z\s]/g, "");
        }, 300);
    } else {
        indication.innerHTML = `<img src="./assets/exclamation.png" style="opacity: 0"/>
                                <p>Only lowercase letters and no accents</p>`;
    }
};
