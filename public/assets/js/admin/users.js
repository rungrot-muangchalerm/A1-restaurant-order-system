fetch('/api/users').then(res => res.json()).then(data => {
    if (data.status === '200') {
        const container = document.getElementById('users-container')
        const template = document.getElementById('users-list')
        data.users.forEach(element => {
            const clone = template.content.cloneNode(true)
            clone.querySelector('[data-role="username"]').textContent = element.username
            clone.querySelector('[data-role="name"]').textContent = element.name
            clone.querySelector('[data-role="role"]').textContent = element.role
            clone.querySelector('[data-role="status"]').textContent = element.status
            container.appendChild(clone)
        })
    } else {
        console.log(`status err${data}`)
    }
})