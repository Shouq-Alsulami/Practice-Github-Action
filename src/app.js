function greet(name) {
    return `hello, ${name} !`;  // Changed '' to `` for template literal
}

module.exports = greet;  // Fixed typo 'experts' to 'exports'

// if (module.parent === module) {  // Fixed condition and added spacing
//     console.log(greet("World"))  // Fixed CSSCounterStyleRule to console
// }