function menuShow() { 
    let menuMobile = document.querySelector('.mobile-menu')

    if (menuMobile.classList.contains('open')) { 
        menuMobile.classList.remove("open")
    } else { 
        menuMobile.classList.add('open')
    }
}

function dark() { 

var icon = document.getElementById("icon")

    document.body.classList.toggle("dark-theme")
    if( document.body.classList.contains("dark-theme")) { 
        icon.src = "img/sun.png"
    } else { 
        icon.src = "img/moon.png"
    }
}