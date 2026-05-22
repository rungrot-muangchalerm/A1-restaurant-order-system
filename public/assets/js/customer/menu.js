fetch('/api/menu').then(res => res.json()).then(data => {
    if (data.status === '200') {

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

        document.getElementById('count-all').textContent = data.menu.length
        document.getElementById('count-single').textContent = categoryCount['อาหารจานเดียว'] || 0
        document.getElementById('count-shared').textContent = categoryCount['กับข้าว'] || 0
        document.getElementById('count-noodle').textContent = categoryCount['เส้นและแกง'] || 0
        document.getElementById('count-snack').textContent = categoryCount['ของทานเล่น'] || 0
        document.getElementById('count-drink').textContent = categoryCount['เครื่องดื่ม'] || 0
        document.getElementById('count-dessert').textContent = categoryCount['ของหวาน'] || 0
        document.getElementById('count-set').textContent = categoryCount['ชุดเซ็ต'] || 0

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

        const snackContainer = document.getElementById('snack-container')
        const snackTemplate = document.getElementById('snack-template')

        const drinkContainer = document.getElementById('drink-container')
        const drinkTemplate = document.getElementById('drink-template')

        const dessertContainer = document.getElementById('dessert-container')
        const dessertTemplate = document.getElementById('dessert-template')

        const setContainer = document.getElementById('set-container')
        const setTemplate = document.getElementById('set-template')
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
                const clone = snackTemplate.content.cloneNode('true')
                clone.querySelector('[data-role="img"]').src = element.Image
                clone.querySelector('[data-role="category"]').textContent = element.category
                clone.querySelector('[data-role="name"]').textContent = element.name
                clone.querySelector('[data-role="description"]').textContent = element.discription
                clone.querySelector('[data-role="price"]').textContent = element.price + ' บาท'
                snackContainer.appendChild(clone)
            } else if (element.category === 'เครื่องดื่ม') {
                const clone = drinkTemplate.content.cloneNode(true)
                clone.querySelector('[data-role="img"]').src = element.Image
                clone.querySelector('[data-role="category"]').textContent = element.category
                clone.querySelector('[data-role="name"]').textContent = element.name
                clone.querySelector('[data-role="description"]').textContent = element.discription
                clone.querySelector('[data-role="price"]').textContent = element.price + ' บาท'
                drinkContainer.appendChild(clone)
            } else if (element.category === 'ของหวาน') {
                const clone = dessertTemplate.content.cloneNode(true)
                clone.querySelector('[data-role="img"]').src = element.Image
                clone.querySelector('[data-role="category"]').textContent = element.category
                clone.querySelector('[data-role="name"]').textContent = element.name
                clone.querySelector('[data-role="description"]').textContent = element.discription
                clone.querySelector('[data-role="price"]').textContent = element.price + ' บาท'
                dessertContainer.appendChild(clone)
            } else if (element.category === 'ชุดเซ็ต') {
                const clone = setTemplate.content.cloneNode(true)
                clone.querySelector('[data-role="img"]').src = element.Image
                clone.querySelector('[data-role="category"]').textContent = element.category
                clone.querySelector('[data-role="name"]').textContent = element.name
                clone.querySelector('[data-role="description"]').textContent = element.discription
                clone.querySelector('[data-role="price"]').textContent = element.price + ' บาท'
                setContainer.appendChild(clone)
            }
        })
    }
})

fetch('/api/auth/me').then(res => res.json()).then(data => {
    document.getElementById('user').textContent = data.user
    document.getElementById('role').textContent = data.role
})
