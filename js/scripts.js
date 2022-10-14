// Seleção de elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

// Funções
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
}

const getSymbol = () => {
    const symbols = "(){}=<>/.,!@#$%&*+-";
    return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatedPassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {
    let password = "";

    const passwordLength = 10;

    const generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol,
    ]

    for(i = 0; i < passwordLength; i = i + 4) {
        generators.forEach(() => {
            const randomValue = generators[Math.floor(Math.random() * generators.length)]();

            password += randomValue;
        });
    }

    password = password.slice(0, passwordLength);
    generatedPasswordElement.style.display = "block"
    generatedPasswordElement.querySelector("h4").innerHTML = password;
};

// Eventos
generatePasswordButton.addEventListener("click", () => {
   generatedPassword(
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol);
});

let formulario = document.querySelector('#register-form')

formulario.onsubmit = function(evento){
    evento.preventDefault()

    let temErro = false

    let inputNome = document.forms['register-form']['nome']

    if (!inputNome.value) {
        temErro = true
        inputNome.classList.add('inputError')
        let span = inputNome.nextSibling.nextSibling.innerText = '*Digite o nome corretamente'
    } else {
        inputNome.classList.remove('inputError')

        let span = inputNome.nextSibling.nextSibling.innerText = ''
    }


    let inputData = document.forms['register-form']['data']

    if (!inputData.value) {
        temErro = true
        inputData.classList.add('inputError')
        let span = inputData.nextSibling.nextSibling.innerText = '*Digite a data corretamente'
    } else {
        inputData.classList.remove('inputError')

        let span = inputData.nextSibling.nextSibling.innerText = ''
    }


    let inputEmail = document.forms['register-form']['email']

    if (!inputEmail.value) {
        temErro = true
        inputEmail.classList.add('inputError')
        let span = inputEmail.nextSibling.nextSibling.innerText = '*Digite o e-mail corretamente'
    } else {
        inputEmail.classList.remove('inputError')

        let span = inputEmail.nextSibling.nextSibling.innerText = ''
    }

    if (!temErro) {
        formulario.submit()
    }
}
