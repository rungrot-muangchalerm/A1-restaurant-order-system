fetch('/api/menu').then(res => res.json()).then(data => {
    if (data.status === '200') {
        let categoryCount = {}
        data.menu.forEach(element => {
            if (!categoryCount[element.category]) {
                categoryCount[element.category] = 0
            }
            categoryCount[element.category]++
        })
        document.getElementById('menu-length').textContent = data.menu.length
        document.getElementById('category-count').textContent = Object.keys(categoryCount).length
        Me().then(data => {
            document.getElementById('user').textContent = data.user
            document.getElementById('role').textContent = data.role
        });
    } else {
        console.log(`status err${data}`)
    }
    if (data.status === '200') {
        const container = document.getElementById('menu-container')
        const template = document.getElementById('menu-list')
        data.menu.forEach(element => {
            const clone = template.content.cloneNode(true)
            clone.querySelector('[data-role="id"]').textContent = element.id
            clone.querySelector('[data-role="length"]').textContent = data.menu.length
            clone.querySelector('[data-role="img"]').src = element.Image
            clone.querySelector('[data-role="name"]').textContent = element.name
            clone.querySelector('[data-role="discription"]').textContent = element.discription
            clone.querySelector('[data-role="price"]').textContent = element.price
            clone.querySelector('[data-role="category"]').textContent = element.category
            container.appendChild(clone)
        })
    } else {
        console.log(`status err${data}`)
    }
})

