fetch('/api/restaurant-status').then(res => res.json()).then(data => {
    if (data.status === '200') {
        document.getElementById('average').textContent = data.average
        document.getElementById('menu').textContent = data.menu
        document.getElementById('delivery').textContent = data.delivery
    }
})

fetch('/api/recommended-menus').then(res => res.json()).then(data => {
    console.log(data)
    if (data.status === '200') {
        const container = document.getElementById('recommended-menus-container')
        const template = document.getElementById('recommended-menus-list')
        data.menu.forEach(element => {
            const clone = template.content.cloneNode(true)
            clone.querySelector('[data-role="Image"]').src = element.Image
            clone.querySelector('[data-role="name"]').textContent = element.name
            clone.querySelector('[data-role="discription"]').textContent = element.discription
            clone.querySelector('[data-role="price"]').textContent = element.price
            container.appendChild(clone)
        });
    }
})

fetch('/api/restaurant-promotion').then(res => res.json()).then(data => {
    console.table(data)
    console.table(data.promotion)
    if (data.status === '200') {
        const container = document.getElementById('restaurant-promotion-container')
        const template = document.getElementById('restaurant-promotion-template')
        data.promotion.forEach(element => {
            const clone = template.content.cloneNode(true)
            clone.querySelector('[data-role="Image"]').src = element.Image
            clone.querySelector('[data-role="highlight"]').textContent = element.highlight
            clone.querySelector('[data-role="promotion"]').textContent = element.promotion
            clone.querySelector('[data-role="discription"]').textContent = element.discription
            container.appendChild(clone)
        });
    }
})

fetch('/api/reviewer').then(res => res.json()).then(data => {
    console.table(data)
    console.table(data.reviews)
    if (data.status === '200') {
        const container = document.getElementById('reviews-container')
        const template = document.getElementById('reviews-template')
        data.reviews.forEach(element => {
            const clone = template.content.cloneNode(true)
            const rate = parseFloat(element.rate)
            const full = Math.floor(rate)
            const half = rate % 1 >= 0.5 ? 1 : 0
            const empty = 5 - full - half
            let stars = ''
            for (let i = 0; i < full; i++) stars += '<i class="fa-solid fa-star"></i>'
            if (half) stars += '<i class="fa-solid fa-star-half-stroke"></i>'
            for (let i = 0; i < empty; i++) stars += '<i class="fa-regular fa-star"></i>'
            clone.querySelector('[data-role="stars"]').innerHTML = stars
            clone.querySelector('[data-role="message"]').textContent = '"' + element.message + '"'
            clone.querySelector('[data-role="user"]').textContent = element.user
            clone.querySelector('[data-role="where"]').textContent = element.where
            container.appendChild(clone)
        });
    }
})