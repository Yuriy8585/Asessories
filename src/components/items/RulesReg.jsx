

function Rukesreg () {
window.addEventListener('DOMContentLoaded', function () {
    var navbarLinks = document.querySelectorAll('.navbar-nav li a')
    navbarLinks.forEach(function (link) {
        var route = link.getAttribute('href')
        var pathname = window.location.pathname
        
        if (route === pathname && link.parentNode) {
            link.parentNode.classList.add('active')
        }
    })
})

const rulesElement = document.getElementById('rules')
                        const agreeCheckbox = document.getElementById('agree')
                        const nextStepButton = document.getElementById('nextstep')
                        const {scrollHeight, scrollTop, clientHeight} = rulesElement
                        
                        let isRead = false
                        const handleCheckReading = () => {
                        if (isRead) {
                        return true
                        
                        }
                        isRead = scrollHeight - scrollTop === clientHeight
                        agreeCheckbox.disabled = nextStepButton.disabled = !isRead
                        }
                        rulesElement.addEventListener('scroll', handleCheckReading, false)
                    }

export default Rukesreg;