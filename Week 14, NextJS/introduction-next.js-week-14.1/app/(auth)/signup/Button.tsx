'use client'

export function Button() {
    function handler() {
        console.log('Clicked me')
    }
    return (<div><button onClick={handler}>Click me</button></div>)
}