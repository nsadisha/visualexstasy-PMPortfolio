const image_list = [
    "real-estate.jpg",
    "real-estate-2.jpg",
    "real-estate-3.jpg",
    "real-estate-4.jpg",
    "real-estate-5.jpg",
    "real-estate-7.jpg",
    "real-estate-8.jpg",
    "real-estate-9.jpg",
    "real-estate-10.jpg",
    "real-estate-11.jpg"
]

function dynamicImage(id, interval, delay) {
    const image = document.getElementById(id)

    setTimeout(function() {
        var x = setInterval(function() {
            const random_int = Math.floor(Math.random() * image_list.length)
            image.src = image_list[random_int]
            image.classList.remove('fade-out-right')
            image.classList.add('fade-in-right')

            setTimeout(function() {
                image.classList.remove('fade-in-right')
                image.classList.add('fade-out-right')
            }, interval - 1000)
        }, interval)
    }, delay)
}

function dynamicImage_left(id, interval, delay) {
    const image = document.getElementById(id)

    setTimeout(function() {
        var x = setInterval(function() {
            const random_int = Math.floor(Math.random() * image_list.length)
            image.src = image_list[random_int]
            image.classList.remove('fade-out-left')
            image.classList.add('fade-in-left')

            setTimeout(function() {
                image.classList.remove('fade-in-left')
                image.classList.add('fade-out-left')
            }, interval - 1000)
        }, interval)
    }, delay)
}