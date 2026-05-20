const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))

app.get('/api/me', (req, res) => {
    res.status(200).json({
        status: "200",
        role: "admin"
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

app.get('/api/restaurant-status', (req, res) => {
    res.status(200).json({
        status: "200",
        average: "18",
        menu: "42",
        delivery: "3"
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
                discription: "ผัดไฟแรง กลิ่นกะเพราชัด เลือกระดับความเผ็ดได้",
                price: "180"
            }, {
                id: "2",
                Image: "https://images.unsplash.com/photo-1628430043175-0e8820df47c3?auto=format&fit=crop&fm=jpg&q=70&w=900",
                name: "ต้มยำกุ้งน้ำข้น",
                price: "120",
                discription: "หม้อไฟรสจัดจ้านสำหรับแบ่งกัน 2-3 คน"
            }, {
                id: "3",
                Image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?auto=format&fit=crop&w=900&q=80",
                name: "ผัดไทยกุ้งสด",
                price: "80",
                discription: "เส้นเหนียวนุ่ม ซอสหวานเค็มเปรี้ยว กุ้งตัวโต"
            }
        ]
    })
})

app.get('/api/restaurant-promotion', (req, res) => {
    res.status(200).json({
        status: "200",
        promotion: [{
            id: "1",
            promotion: "ลด 10% เมื่อครบ 500 บาท",
            discription: "ไช้ได้ทั้งทานที่ร้านและกลับบ้าน เงื่อนไขแสดงตอนยืนยันออเดอร์"
        }, {
            id: "2",
            promotion: "เครื่องดื่มลด 20 บาท",
            discription: "สำหรับชาไทย น้ำสมุนไพร และเครื่องดื่มเย็นที่ร่วมรายการ"
        }, {
            id: "3",
            promotion: "สำหรับชาไทย น้ำสมุนไพร และเครื่องดื่มเย็นที่ร่วมรายการ",
            discription: "เมื่อสั่งเมนูหลัก 2 รายการขึ้นไป เหมาะกับโต๊ะเล็กและออฟฟิศ"
        }]
    })
})


app.get('/api/reviewer', (req, res) => {
    res.status(200).json([
        {
            status: "200",
            id: "1",
            rate: "5.00",
            message: "สแกนโต๊ะแล้วสั่งเองได้เลย เห็นว่าอาหารกำลังปรุงหรือพร้อมเสิร์ฟแล้ว ไม่ต้องเรียกพนักงานบ่อย",
            user: "คุณเมย์",
            where: "ลูกค้าทานที่ร้าน"
        }, {
            status: "200",
            id: "2",
            rate: "4.50",
            message: "เมนูมีรูป ราคา และรายละเอียดชัดดี สั่งกลับบ้านแล้วรู้เวลารับอาหารโดยประมาณ",
            user: "คุณนนท์",
            where: "ลูกค้ากลับบ้าน"
        }, {
            status: "200",
            id: "3",
            rate: "5.00",
            message: "แวะหลังเลิกงานแล้วสั่งเมนูเดิมได้ไว ไม่ต้องจำชื่อเมนูยาว ๆ อาหารออกเร็วเหมือนเดิม",
            user: "คุณต้น",
            where: "ลูกค้าประจำ"
        }
    ])
})
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})