function throttle(func, limit) {
    let lastFunc;
    let lastRan;

    return function() {
        const context = this;
        const args = arguments;

        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    }
}

const throttledFunction = throttle(function() {
    const currentTime = new Date().toLocaleTimeString();
    document.getElementById('result').innerText = `Button clicked at: ${currentTime}`;
}, 2000);

document.getElementById('throttleButton').addEventListener('click', throttledFunction);
