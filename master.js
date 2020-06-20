let output = document.getElementById('result')
let x = document.getElementById('words')
let xx, xxx
let y = document.getElementById('btn')
let btn = document.getElementById('btn')

x.addEventListener('input', function () {
    let arr = x.value.split(' ')
    xx = arr.map((n) =>
        n.length === 5 || /pizza/i.test(n)
            ? '🍕'
            : /hawai/gi.test(n) | /pineappl/gi.test(n) | /anana/gi.test(n)
            ? (alert('Are you Crazy??'),
              (x.value = ''),
              (output.innerHTML = ''))
            : n
    )
    document.getElementById('result').innerHTML = xx.join(' ')
    console.log(arr)
})
