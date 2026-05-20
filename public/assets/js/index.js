fetch('/api/restaurant-status').then(res => res.json()).then(data => {
    if (data.status === '200') {
        document.getElementById('average').textContent = (data.average)
        document.getElementById('menu').textContent = (data.menu)
        document.getElementById('delivery').textContent = (data.delivery)
    } else {
        console.log(`status err${data}`)
    }
})

fetch('/api/recommended-menus').then(res => res.json()).then(data => {
    if (data.status === '200') {
        const container = document.getElementById('recommended-menus-container')
        const template = document.getElementById('recommended-menus-list')
        data.menu.forEach(element => {
            const clone = template.content.cloneNode(true)
            clone.querySelector('[data-role="img"]').src = element.Image
            clone.querySelector('[data-role="name"]').textContent = element.name
            clone.querySelector('[data-role="discription"]').textContent = element.discription
            clone.querySelector('[data-role="price"]').textContent = element.price
            container.appendChild(clone)
        });
    } else {
        console.log(`status err${data}`)
    }
})

fetch('/api/restaurant-promotion').then(res => res.json()).then(data => {
    if (data.status === '200') {
        const container = document.getElementById('promotion-container')
        const template = document.getElementById('promotion-list')
        data.promotion.forEach(element => {
            const clone = template.content.cloneNode(true)
            clone.querySelector('[data-role="img"]').src = element.Image || ''
            clone.querySelector('[data-role="promotion"]').textContent = element.promotion
            clone.querySelector('[data-role="discription"]').textContent = element.discription
            container.appendChild(clone)
        });
    } else {
        console.log(`status err${data}`)
    }
})

fetch('/api/reviewer').then(res => res.json()).then(data => {
    if (data.status === '200') {
        const container = document.getElementById('reviewer-container')
        const template = document.getElementById('reviews-list')
        data.reviews.forEach(element => {
            const clone = template.content.cloneNode(true)
            clone.querySelector('[data-role="rate"]').textContent = element.rate
            clone.querySelector('[data-role="message"]').textContent = element.message
            clone.querySelector('[data-role="user"]').textContent = element.user
            clone.querySelector('[data-role="where"]').textContent = element.where
            container.appendChild(clone)
        })
    } else {
        console.log(`status err${data}`)
    }

})