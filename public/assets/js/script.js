fetch('/api/auth/me').then(res => res.json()).then(data => {
    console.log(data)
    if (data.status === '200') {
        document.getElementById('login').classList.add('d-none')
        document.getElementById('register').classList.add('d-none')
        document.getElementById('logout').classList.remove('d-none')
        if (data.role === 'admin') {
            document.getElementById('POS').classList.remove('d-none')
            document.getElementById('kitchen').classList.remove('d-none')
            document.getElementById('cashier').classList.remove('d-none')
            document.getElementById('admin').classList.remove('d-none')
        } else if (data.role === 'POS') {
            document.getElementById('POS').classList.remove('d-none')
        } else if (data.role === 'kitchen') {
            document.getElementById('kitchen').classList.remove('d-none')
        }
    } else {
        console.log(data)
    }
})