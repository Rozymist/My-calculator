function getHistory() {
    return document.getElementById("history-value").innerText
}

function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}

function getOutput(num) {
    return document.getElementById("output-value").innerText;
}

function printOutput(num) {
    if (num == "")
        document.getElementById("output-value").innerText = num;
    else {
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }

}

function getFormattedNumber(num) {
    if (num == "-") {
        return "";
    }
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value
}

function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''));
}

let operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        if (this.id == "clear") {
            printHistory("");
            printOutput("");
        }
        if (this.id == "backspace") {
            let output = reverseNumberFormat(getOutput()).toString();
            if (output) { // if output has a value
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }
        }
        else {
            let output = getOutput();
            let history = getHistory();
            if (output == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);
                }
            }
            if (output != "" || history != "") {
                output = output == "" ? output : reverseNumberFormat(output);
                history = history + output;
                if (this.id == "=") {
                    let result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    })
}
let number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        let output = reverseNumberFormat(getOutput());
        if (output != NaN) { // if output is a number
            output = output + this.id;
            printOutput(output)
        }
    })
}





/*

function XO(str) {
    let word = str.toLowerCase();
    let oLetter = 0;
    let xLetter = 0;
    for (let i = 0; i < word.length; i++ ){
        if (i == String.fromCodePoint(79)) {
            oLetter = oLetter+1;
        } else if (i == String.fromCodePoint(88)) {
            xLetter = xLetter+1;
        } else {
            let maege = "";
        }


        let result = (oLetter == xLetter) ? true : false;
        return result
    }

}*/





































/*
function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function clean() {
    document.form.textview.value = "";
}

function back() {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}

function equal() {
    let exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp)
    }
    if (eval(document.form.textview.value) === undefined) {
        document.form.textview.value = 'err';
    }
    if (eval(document.form.textview.value) === Infinity) {
        document.form.textview.value = 'err';
    }

}*/
/*

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

class Calc{
    constructor(){}
}

const calcs = new Calc();

let calc;
calc = {
    def: {
        first: "",
        operator: "",
        second: "",

    },

    el: {
        input: {id: 'input', el: {}},
        body: {id: 'body', el: {}}
    },

    ui: {
        getElTagName: (name) => document.getElementsByTagName(name)[0],
        getElId: (id) => document.getElementById(id)
    },

    handlers: {
        event: (e) => {
            console.log(e);
            console.log(e.target.textContent);
            let tyk;
            tyk = e.target.textContent;
            /!*  console.log(isNaN(+s))
             // calc.actions['=']();   *!/
            tyk = calc.def.first;
            if (event = calc.def.operator) {

            }
        }
    },

    actions: {
        '+': (f, s) => f + s,
        "-": (f, s) => f - s,
        "/": (f, s) => f / s,
        "*": (f, s) => f * s,
        '=': () => {
            calc.el.input.el = calc.actions[calc.def.operator](calc.def.first, calc.def.second);
        },

    },

    rules: {},

    init: {
        el: () => {
            calc.el.input.el = calc.ui.getElId(calc.el.input.id);
            calc.el.body.el = calc.ui.getElTagName(calc.el.body.id)
        },
        actions: () => {
            calc.el.body.el.addEventListener("click", calc.handlers.event);
        },
        global: () => {
            window.onload = () => {
                calc.init.el();
                calc.init.actions()
            }
        }
    }
};

calc.init.global();
*/


