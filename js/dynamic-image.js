const real_estate_image_list = [
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
const food_image_list = [
    "food/food-1.jpeg",
    "food/food-2.jpeg",
    "food/food-3.jpeg",
    "food/food-4.jpeg",
    "food/food-5.jpeg",
    "food/food-6.jpeg",
    "food-1.jpg",
    "food-2.jpg",
    "food-3.jpg",
    "food-4.jpg",
    "food-5.jpg",
    "food-6.jpg"
]

function dynamicImage(id, interval, delay, images) {
    const image = document.getElementById(id)

    setTimeout(function() {
        var x = setInterval(function() {
            const random_int = Math.floor(Math.random() * images.length)
            image.src = images[random_int]
            image.classList.remove('fade-out-right')
            image.classList.add('fade-in-right')

            setTimeout(function() {
                image.classList.remove('fade-in-right')
                image.classList.add('fade-out-right')
            }, interval - 1500)
        }, interval)
    }, delay)
}

function dynamicImage_left(id, interval, delay, images) {
    const image = document.getElementById(id)

    setTimeout(function() {
        var x = setInterval(function() {
            const random_int = Math.floor(Math.random() * images.length)
            image.src = images[random_int]
            image.classList.remove('fade-out-left')
            image.classList.add('fade-in-left')

            setTimeout(function() {
                image.classList.remove('fade-in-left')
                image.classList.add('fade-out-left')
            }, interval - 1500)
        }, interval)
    }, delay)
}