fetch('/api/menu').then(res => res.json()).then(data => {
    if (data.status === '200') {
        console.table(data)
        console.table(data.menu)
        console.log(data.menu.length)
        document.getElementById('menu-1').textContent = data.menu.length
        document.getElementById('menu-2').textContent = data.menu.length

        let categoryCount = {}
        data.menu.forEach(element => {
            const category = element.category
            if (!categoryCount[category]) {
                categoryCount[category] = 0
            }
            categoryCount[category]++
        })
        document.getElementById('categrory').textContent = Object.keys(categoryCount).length

        const allContainer = document.getElementById('menu-container')
        const allTemplate = document.getElementById('menu-template')
        data.menu.forEach(element => {
            const clone = allTemplate.content.cloneNode(true)
            clone.querySelector('[data-role="id"]').textContent = element.id
            clone.querySelector('[data-role="length"]').textContent = data.menu.length
            clone.querySelector('[data-role="Image"]').src = element.Image
            clone.querySelector('[data-role="name"]').textContent = element.name
            clone.querySelector('[data-role="discription"]').textContent = element.discription
            clone.querySelector('[data-role="price"]').textContent = element.price
            clone.querySelector('[data-role="category"]').textContent = element.category
            allContainer.appendChild(clone)
        })

        const singleDishContainer = document.getElementById('singleDish-container')
        const singleDishTemplate = document.getElementById('singleDish-template')

        const sharedContainer = document.getElementById('shared-container')
        const sharedTemplate = document.getElementById('shared-template')

        const noodleContainer = document.getElementById('noodle-container')
        const noodleTemplate = document.getElementById('noodle-template')
        data.menu.forEach(element => {
            if (element.category === 'อาหารจานเดียว') {
                const clone = singleDishTemplate.content.cloneNode(true)
                clone.querySelector('[data-role="img"]').src = element.Image
                clone.querySelector('[data-role="name"]').textContent = element.name
                clone.querySelector('[data-role="description"]').textContent = element.discription
                clone.querySelector('[data-role="price"]').textContent = element.price + ' บาท'
                clone.querySelector('[data-role="category"]').textContent = element.category
                singleDishContainer.appendChild(clone)
            } else if (element.category === 'กับข้าว') {
                const clone = sharedTemplate.content.cloneNode(true)
                clone.querySelector('[data-role="img"]').src = element.Image
                clone.querySelector('[data-role="category"]').textContent = element.category
                clone.querySelector('[data-role="name"]').textContent = element.name
                clone.querySelector('[data-role="description"]').textContent = element.discription
                clone.querySelector('[data-role="price"]').textContent = element.price + ' บาท'
                sharedContainer.appendChild(clone)
            } else if (element.category === 'เส้นและแกง') {
                const clone = noodleTemplate.content.cloneNode('true')
                clone.querySelector('[data-role="img"]').src = element.Image
                clone.querySelector('[data-role="category"]').textContent = element.category
                clone.querySelector('[data-role="name"]').textContent = element.name
                clone.querySelector('[data-role="description"]').textContent = element.discription
                clone.querySelector('[data-role="price"]').textContent = element.price + ' บาท'
                noodleContainer.appendChild(clone)
            } else if (element.category === 'ของทานเล่น') {
                console.log('d')
            } else if (element.category === 'เครื่องดื่ม') {
                console.log('e');
            } else if (element.category === 'ของหวาน') {
                console.log('d');
            } else if (element.category === 'ชุดเซ็ต') {
                console.log('ไม่เจอเหี้ยไรเลย')
            }
        })
    }
})

fetch('/api/auth/me').then(res => res.json()).then(data => {
    document.getElementById('user').textContent = data.user
    document.getElementById('role').textContent = data.role
})
