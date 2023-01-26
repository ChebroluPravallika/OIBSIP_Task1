var c = "";
let input = document.getElementById("ta");

function seven() {
    c += 7;
    console.log(7);
    input.innerHTML = c;
}

function one() {
    c += 1;
    input.innerHTML = c;
}

function two() {
    c += 2;
    input.innerHTML = c;
}

function three() {
    c += 3;
    input.innerHTML = c;
}

function four() {
    c += 4;
    input.innerHTML = c;
}

function five() {
    c += 5;
    input.innerHTML = c;
}

function six() {
    c += 6;
    input.innerHTML = c;
}

function eight() {
    c += 8;
    input.innerHTML = c;
}

function nine() {
    c += 9;
    input.innerHTML = c;
}

function zero() {
    c += 0;
    input.innerHTML = c;
}

function add() {
    c += '+';
    input.innerHTML = c;
}

function sub() {
    c += '-';
    input.innerHTML = c;
}

function mul() {
    c += '*';
    input.innerHTML = c;
}

function div() {
    c += '/';
    input.innerHTML = c;
}

function dot(){
    c += '%';
    input.innerHTML = c;
}

function hasPrecedence(op1, op2) {
    if (op2 === '(' || op2 === ')') {
        return false;
    }
    if ((op1 === '*' || op1 === '/' || op1 === '%') &&
        (op2 === '+' || op2 === '-')) {
        return false;
    } else {
        return true;
    }
}

function applyOp(op, b, a) {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                return "Can't divide by zero";
            }
            return parseInt(a / b, 10);
        case '%':
            return a % b;

    }
    return 0;
}

function evaluate(expression) {
    let tokens = expression.split('');
    let values = [];
    let ops = [];

    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === ' ') {
            continue;
        }
        if (tokens[i] >= '0' && tokens[i] <= '9') {
            let sbuf = "";
            while (i < tokens.length &&
                tokens[i] >= '0' &&
                tokens[i] <= '9') {
                sbuf = sbuf + tokens[i++];
            }
            values.push(parseInt(sbuf, 10));
            i--;
        } else if (tokens[i] === '(') {
            ops.push(tokens[i]);
        } else if (tokens[i] === ')') {
            while (ops[ops.length - 1] !== '(') {
                values.push(applyOp(ops.pop(),
                    values.pop(),
                    values.pop()));
            }
            ops.pop();
        } else if (tokens[i] === '+' ||
            tokens[i] === '-' ||
            tokens[i] === '*' ||
            tokens[i] === '/' ||
            tokens[i] === '%') {

            while (ops.length > 0 &&
                hasPrecedence(tokens[i],
                    ops[ops.length - 1])) {
                values.push(applyOp(ops.pop(),
                    values.pop(),
                    values.pop()));
            }

            ops.push(tokens[i]);
        }
    }


    while (ops.length > 0) {
        values.push(applyOp(ops.pop(),
            values.pop(),
            values.pop()));
    }

    return values.pop();
}



function equal() {
    c = evaluate(c);
    input.innerHTML = c;
}

function ac() {
    c = "";
    input.innerHTML = c;
}

function lpar() {
    c += "(";
    input.innerHTML = c;
}

function rpar() {
    c += ")";
    input.innerHTML = c;
}

function mod() {
    c += "%";
    input.innerHTML = c;
}