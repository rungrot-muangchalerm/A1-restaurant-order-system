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