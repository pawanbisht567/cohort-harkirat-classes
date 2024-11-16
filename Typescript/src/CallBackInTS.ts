function runAfter1Sec(callback: () => void) {
    setTimeout(callback, 1000);
}

runAfter1Sec(function() {
    console.log('Hey There')
})