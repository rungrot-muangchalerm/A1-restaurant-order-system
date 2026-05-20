const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))

app.get('/api/me', (req, res) => {
    res.status(200).json({
        status: "200",
        role: "POS"
    })
})

app.post('/api/register', (req, res) => {
    res.status(200).json({
        status: "200",
        message: "success"
    })
})

app.post('/api/auth/login', (req, res) => {
    res.status(200).json({
        status: "200",
        message: "success"
    })
})

app.get('/api/recommended-menus', (req, res) => {
    res.status(200).json({
        status: "200",
        message: "success",
        menu: [
            {
                id: "1",
                Image: "https://images.unsplash.com/photo-1707897634981-39bcfe435268?auto=format&fit=crop&fm=jpg&q=70&w=900",
                name: "ข้าวกะเพราไก่ไข่ดาว",
                discription: "ผัดไฟแรง กลิ่นกะเพราชัด เลือกระดับความเผ็ดได้"
            }, {
                id: "2",
                Image: "https://images.unsplash.com/photo-1628430043175-0e8820df47c3?auto=format&fit=crop&fm=jpg&q=70&w=900",
                name: "ต้มยำกุ้งน้ำข้น",
                discription: "หม้อไฟรสจัดจ้านสำหรับแบ่งกัน 2-3 คน"
            }, {
                id: "3",
                Image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?auto=format&fit=crop&w=900&q=80",
                name: "ผัดไทยกุ้งสด",
                discription: "เส้นเหนียวนุ่ม ซอสหวานเค็มเปรี้ยว กุ้งตัวโต"
            }
        ]
    })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})