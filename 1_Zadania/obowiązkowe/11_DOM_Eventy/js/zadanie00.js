const childrens = Array.from(document.querySelectorAll('.children'))

childrens.forEach(element => {
    element.parentNode.addEventListener('mouseover', function() {
        element.style = 'display: block'
    })

    element.parentNode.addEventListener('mouseleave', function() {
        element.style = ''
    })
})