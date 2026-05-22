fetch('/api/auth/me').then(res => res.json()).then(data => {
    document.getElementById('user').textContent = data.user
    document.getElementById('role').textContent = data.role
})

let menuData = null

async function loadMenu(keyword = '') {
    try {
        if (!menuData) {
            const res = await fetch('/api/menu')
            const data = await res.json()

            if (data.status !== '200') {
                console.log(`status err ${data.status}`)

                return {
                    ...data,
                    menu: []
                }
            }

            menuData = data
        }

        let categoryCount = {}

        document.getElementById('menu-length').textContent = data.menu.length
        document.getElementById('length').textContent = data.id.length
        document.getElementById('category-count').textContent = Object.keys(categoryCount).length

        const meData = await Me()

        if (meData) {
            document.getElementById('user').textContent = meData.user
            document.getElementById('role').textContent = meData.role
        }

        document.querySelector('[data-role="id1-food"]').textContent = categoryCount['อาหารจานเดียว'] || 0

        document.querySelector('[data-role="id2-food"]').textContent = categoryCount['กับข้าว'] || 0

        document.querySelector('[data-role="id3-food"]').textContent = categoryCount['เส้นและแกง'] || 0

        document.querySelector('[data-role="id4-food"]').textContent = categoryCount['ของทานเล่น'] || 0

        document.querySelector('[data-role="id5-food"]').textContent = categoryCount['เครื่องดื่ม'] || 0

        document.querySelector('[data-role="id6-food"]').textContent = categoryCount['ของหวาน'] || 0

        document.querySelector('[data-role="id7-food"]').textContent = categoryCount['ชุดเซ็ต'] || 0

        const total = Object.values(categoryCount).reduce((sum, value) => {
            return sum + value
        }, 0)

        document.querySelector('[data-role="sum"]').textContent = total

        const searchTerm = keyword.toLowerCase().trim()

        const filteredMenu = searchTerm === ''
            ? data.menu
            : data.menu.filter(menu => {
                const name = (menu.name || '').toLowerCase()
                const description = (menu.discription || '').toLowerCase()
                const category = (menu.category || '').toLowerCase()

                return name.includes(searchTerm) ||
                    description.includes(searchTerm) ||
                    category.includes(searchTerm)
            })

        const container = document.getElementById('menu-container')
        const template = document.getElementById('menu-list')

        if (!container) {
            console.log('หา #menu-container ไม่เจอ')

            return {
                ...data,
                menu: filteredMenu
            }
        }

        if (!template) {
            console.log('หา #menu-list ไม่เจอ')

            return {
                ...data,
                menu: filteredMenu
            }
        }

        container.querySelectorAll('[data-rendered="menu-item"]').forEach(item => {
            item.remove()
        })

        filteredMenu.forEach(element => {
            const clone = template.content.cloneNode(true)

            clone.querySelector('[data-role="id"]').textContent = element.id
            clone.querySelector('[data-role="length"]').textContent = filteredMenu.length

            clone.querySelector('[data-role="img"]').src = element.Image
            clone.querySelector('[data-role="img"]').alt = element.name

            clone.querySelector('[data-role="name"]').textContent = element.name
            clone.querySelector('[data-role="discription"]').textContent = element.discription
            clone.querySelector('[data-role="price"]').textContent = `${element.price} บาท`
            clone.querySelector('[data-role="category"]').textContent = element.category

            container.appendChild(clone)
        })

        return {
            ...data,
            menu: filteredMenu
        }

    } catch (err) {
        console.log(err)

        return {
            status: '500',
            menu: []
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadMenu()

    document.getElementById('search-btn').addEventListener('click', async () => {
        const keyword = document.getElementById('keyword').value.trim()

        const data = await loadMenu(keyword)

        console.table(data.menu)
    })
})