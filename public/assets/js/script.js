fetch('/api/me').then(res => res.json()).then(data => {
    if (data.status === "200") {
        if (data.role === 'admin') {
            document.getElementById('admin').classList.remove('d-none')
            document.getElementById('cashier').classList.remove('d-none')
            document.getElementById('kitchen').classList.remove('d-none')
            document.getElementById('pos').classList.remove('d-none')
            console.log(data)
        }
        else
            if (data.role === 'pos') {
                document.getElementById('pos').classList.remove('d-none')
                console.log(data.role)
            }
            else
                if (data.role == 'kitchen') {
                    document.getElementById('kitchen').classList.remove('d-none')
                    console.log(data.role)
                }
                else
                    if (data.role == 'cashier') {
                        document.getElementById('cashier').classList.remove('d-none')
                        console.log(data.role)
                    }


    }
    else {
        console.log(`status err ${data}`);
    }

})

// fetch('/api/me').then(r => r.json()).then(d => {
//     if (d.status !== "200") {
//         console.log(`status err 400`);
//         return
//     }
//     const memMap = {
//         admin: ['admin', 'cashier', 'pos', 'kitchen'],
//         cashier: ['cashier'],
//         kitchen: ['kitchen'],
//         pos: ['pos']
//     }

//     const menus = memMap[d.role] || [];
//     menus.forEach(id => {
//         const el = document.getElementById(id);
//         if (el) el.classList.remove('d-none')
//     });
// })