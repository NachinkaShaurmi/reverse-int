module.exports = function reverse (n) {

    let x = '';
    (n.toString()[0] === '-') ? x = n.toString().slice(1) : x = n.toString();
    return [...x].reverse().join('');
  
}
