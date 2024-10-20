function double(x) {
    return x * 2;
}

function square(x) {
    return x * x;
}

function increment(x) {
    return x + 1;
}

function compose(...fns) {
    return function (initialValue) {
        return fns.reduceRight((acc, fn) => fn(acc), initialValue);
    };
}

const pipeline = compose(increment, square, double);

function runPipeline() {
    const input = parseFloat(document.getElementById('inputValue').value);
    const result = pipeline(input);
    document.getElementById('result').innerText = `Result: ${result}`;
}
