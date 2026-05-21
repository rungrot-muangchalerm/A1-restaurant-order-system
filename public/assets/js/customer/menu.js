
console.log("มาจริงมั้ย")
fetch('/api/menu').then(res => res.json()).then(data => {
    if (data.status === '200') {
        const container = document.getElementById('users-container')
        const template = document.getElementById('users-list')
        console.log(data.menu.length)
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
