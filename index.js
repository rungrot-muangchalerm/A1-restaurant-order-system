const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))
app.use(express.json())

app.get('/api/me', (req, res) => {
    res.status(200).json({
        status: "200",
        user: "A2",
        role: "table"
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
        average: "19",
        menu: "45",
        delivery: "9"
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
    res.status(200).json({
        status: "200",
        reviews: [
            {
                id: "1",
                rate: "5.00",
                message: "สแกนโต๊ะแล้วสั่งเองได้เลย เห็นว่าอาหารกำลังปรุงหรือพร้อมเสิร์ฟแล้ว ไม่ต้องเรียกพนักงานบ่อย",
                user: "คุณเมย์",
                where: "ลูกค้าทานที่ร้าน"
            }, {
                id: "2",
                rate: "4.50",
                message: "เมนูมีรูป ราคา และรายละเอียดชัดดี สั่งกลับบ้านแล้วรู้เวลารับอาหารโดยประมาณ",
                user: "คุณนนท์",
                where: "ลูกค้ากลับบ้าน"
            }, {
                id: "3",
                rate: "5.00",
                message: "แวะหลังเลิกงานแล้วสั่งเมนูเดิมได้ไว ไม่ต้องจำชื่อเมนูยาว ๆ อาหารออกเร็วเหมือนเดิม",
                user: "คุณต้น",
                where: "ลูกค้าประจำ"
            }
        ]
    })
})

app.get('/api/menu', (req, res) => {
    res.status(200).json({
        status: "200",
        menu: [
            {
                id: "1",
                Image: "https://images.unsplash.com/photo-1707897634981-39bcfe435268?auto=format&fit=crop&fm=jpg&q=70&w=900",
                name: "ข้าวกะเพราไก่ไข่ดาว",
                discription: "ผัดกะเพราไก่สับหอมใบกะเพรา เสิร์ฟพร้อมไข่ดาวกรอบ",
                price: "85",
                category: "อาหารจานเดียว"
            }, {
                id: "2",
                Image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
                name: "ข้าวผัดกุ้ง",
                discription: "ข้าวหอมผัดไข่กับกุ้งสด หอมกระทะและผักสามสี",
                price: "95",
                category: "อาหารจานเดียว"
            }, {
                id: "3",
                Image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80",
                name: "ข้าวหมูทอดกระเทียม",
                discription: "หมูหมักนุ่มทอดกระเทียมหอม กินคู่พริกน้ำปลา",
                price: "89",
                category: "อาหารจานเดียว"
            }, {
                id: "4",
                Image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=900&q=80",
                name: "ข้าวพริกแกงหมูกรอบ",
                discription: "พริกแกงเข้มข้นกับหมูกรอบและถั่วฝักยาว",
                price: "99",
                category: "อาหารจานเดียว"
            }, {
                id: "5",
                Image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80",
                name: "ข้าวไข่ข้นกุ้ง",
                discription: "ไข่ข้นนุ่มราดบนข้าวหอมมะลิพร้อมกุ้งเด้ง",
                price: "105",
                category: "อาหารจานเดียว"
            }, {
                id: "6",
                Image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80",
                name: "ข้าวไก่ผัดเม็ดมะม่วง",
                discription: "ไก่ผัดซอสหวานเค็มกับเม็ดมะม่วงและพริกแห้ง",
                price: "115",
                category: "อาหารจานเดียว"
            }, {
                id: "7",
                Image: "https://images.unsplash.com/photo-1628430043175-0e8820df47c3?auto=format&fit=crop&fm=jpg&q=70&w=900",
                name: "ต้มยำกุ้งน้ำข้น",
                discription: "หม้อไฟรสจัดจ้าน หอมสมุนไพรไทยสำหรับแบ่งกัน",
                price: "180",
                category: "กับข้าว"
            }, {
                id: "8",
                Image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80",
                name: "แกงเขียวหวานไก่",
                discription: "แกงกะทิเข้มข้น ใส่มะเขือและใบโหระพา",
                price: "145",
                category: "กับข้าว"
            }, {
                id: "9",
                Image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80",
                name: "ผัดผักรวมกุ้ง",
                discription: "ผักสดหลายชนิดผัดไฟแรงกับกุ้งสด",
                price: "130",
                category: "กับข้าว"
            }, {
                id: "10",
                Image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
                name: "หมูสามชั้นทอดน้ำปลา",
                discription: "หมูสามชั้นทอดกรอบนอกนุ่มใน เสิร์ฟพร้อมน้ำจิ้มแจ่ว",
                price: "150",
                category: "กับข้าว"
            }, {
                id: "11",
                Image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80",
                name: "ไข่เจียวหมูสับ",
                discription: "ไข่เจียวฟูกรอบใส่หมูสับ กินง่ายทุกโต๊ะ",
                price: "80",
                category: "กับข้าว"
            }, {
                id: "12",
                Image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
                name: "ปลากะพงทอดน้ำปลา",
                discription: "ปลากะพงทอดกรอบ ราดน้ำปลาหอม เสิร์ฟพร้อมน้ำยำมะม่วง",
                price: "320",
                category: "กับข้าว"
            }, {
                id: "13",
                Image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?auto=format&fit=crop&w=900&q=80",
                name: "ผัดไทยกุ้งสด",
                discription: "เส้นจันท์ผัดซอสผัดไทย กุ้งสด ถั่วงอก และมะนาว",
                price: "120",
                category: "เส้นและแกง"
            }, {
                id: "14",
                Image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=900&q=80",
                name: "ราดหน้าหมูหมัก",
                discription: "เส้นใหญ่ผัดหอมกระทะ ราดน้ำราดหน้าหมูหมักนุ่ม",
                price: "95",
                category: "เส้นและแกง"
            }, {
                id: "15",
                Image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
                name: "สุกี้น้ำทะเล",
                discription: "น้ำซุปร้อน ๆ พร้อมกุ้ง ปลาหมึก ผัก และน้ำจิ้มสุกี้",
                price: "115",
                category: "เส้นและแกง"
            }, {
                id: "16",
                Image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=900&q=80",
                name: "ก๋วยเตี๋ยวคั่วไก่",
                discription: "เส้นใหญ่คั่วไก่หอมกระทะ โรยพริกไทยและต้นหอม",
                price: "90",
                category: "เส้นและแกง"
            }, {
                id: "17",
                Image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=900&q=80",
                name: "ขนมจีนแกงเขียวหวาน",
                discription: "ขนมจีนเสิร์ฟกับแกงเขียวหวานไก่และผักสด",
                price: "110",
                category: "เส้นและแกง"
            }, {
                id: "18",
                Image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=900&q=80",
                name: "เส้นใหญ่ผัดซีอิ๊ว",
                discription: "เส้นใหญ่เหนียวนุ่ม ผัดซีอิ๊วกับหมูและคะน้า",
                price: "89",
                category: "เส้นและแกง"
            }, {
                id: "19",
                Image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80",
                name: "ปอเปี๊ยะทอด",
                discription: "ไส้ผักและวุ้นเส้นทอดกรอบ เสิร์ฟพร้อมน้ำจิ้มบ๊วย",
                price: "75",
                category: "ของทานเล่น"
            }, {
                id: "20",
                Image: "https://cdn.pixabay.com/photo/2022/02/06/07/00/thai-tea-6996378_640.jpg",
                name: "ไก่ทอดสมุนไพร",
                discription: "ไก่หมักสมุนไพรทอดกรอบ หอมตะไคร้และใบมะกรูด",
                price: "110",
                category: "ของทานเล่น"
            }, {
                id: "21",
                Image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=900&q=80",
                name: "ลูกชิ้นทอดรวม",
                discription: "ลูกชิ้นรวมทอดร้อน ๆ พร้อมน้ำจิ้มรสเด็ด",
                price: "70",
                category: "ของทานเล่น"
            }, {
                id: "22",
                Image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
                name: "เฟรนช์ฟรายส์",
                discription: "มันฝรั่งทอดกรอบ โรยเกลือ เสิร์ฟพร้อมซอสมะเขือเทศ",
                price: "65",
                category: "ของทานเล่น"
            }, {
                id: "23",
                Image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
                name: "หมูมะนาว",
                discription: "หมูนุ่มราดน้ำยำมะนาวกระเทียมพริกสด",
                price: "120",
                category: "ของทานเล่น"
            }, {
                id: "24",
                Image: "https://images.unsplash.com/photo-1707897634981-39bcfe435268?auto=format&fit=crop&fm=jpg&q=70&w=900",
                name: "ยำวุ้นเส้นทะเล",
                discription: "วุ้นเส้นเหนียวนุ่มคลุกน้ำยำกับกุ้งและปลาหมึก",
                price: "135",
                category: "ของทานเล่น"
            }, {
                id: "25",
                Image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
                name: "ชาไทยเย็น",
                discription: "ชาไทยหอมเข้ม เลือกระดับความหวานได้",
                price: "45",
                category: "เครื่องดื่ม"
            }, {
                id: "26",
                Image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80",
                name: "ชามะนาว",
                discription: "ชาดำผสมน้ำมะนาวสด เปรี้ยวหวานสดชื่น",
                price: "45",
                category: "เครื่องดื่ม"
            }, {
                id: "27",
                Image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=900&q=80",
                name: "กาแฟเย็น",
                discription: "กาแฟเย็นเข้มข้น หวานมันแบบไทย",
                price: "50",
                category: "เครื่องดื่ม"
            }, {
                id: "28",
                Image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80",
                name: "น้ำลำไย",
                discription: "ลำไยหอมหวาน เสิร์ฟเย็นพร้อมเนื้อลำไย",
                price: "45",
                category: "เครื่องดื่ม"
            }, {
                id: "29",
                Image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80",
                name: "น้ำเก๊กฮวย",
                discription: "เก๊กฮวยหอมละมุน ดื่มง่ายคลายร้อน",
                price: "40",
                category: "เครื่องดื่ม"
            }, {
                id: "30",
                Image: "https://images.unsplash.com/photo-1628430043175-0e8820df47c3?auto=format&fit=crop&fm=jpg&q=70&w=900",
                name: "น้ำมะพร้าว",
                discription: "น้ำมะพร้าวเย็นชื่นใจพร้อมเนื้อมะพร้าวอ่อน",
                price: "55",
                category: "เครื่องดื่ม"
            }, {
                id: "31",
                Image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80",
                name: "ข้าวเหนียวมะม่วง",
                discription: "ข้าวเหนียวมูนหอมกะทิกับมะม่วงสุกหวาน",
                price: "95",
                category: "ของหวาน"
            }, {
                id: "32",
                Image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80",
                name: "บัวลอยไข่หวาน",
                discription: "บัวลอยนุ่มในน้ำกะทิหอม พร้อมไข่หวาน",
                price: "70",
                category: "ของหวาน"
            }, {
                id: "33",
                Image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
                name: "ทับทิมกรอบ",
                discription: "ทับทิมกรอบสีสดในน้ำกะทิเย็นหอมหวาน",
                price: "65",
                category: "ของหวาน"
            }, {
                id: "34",
                Image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80",
                name: "เฉาก๊วยนมสด",
                discription: "เฉาก๊วยหนึบกับนมสดหวานละมุน",
                price: "60",
                category: "ของหวาน"
            }, {
                id: "35",
                Image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
                name: "กล้วยบวชชี",
                discription: "กล้วยน้ำว้าในกะทิหอม หวานกำลังดี",
                price: "55",
                category: "ของหวาน"
            }, {
                id: "36",
                Image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?auto=format&fit=crop&w=900&q=80",
                name: "ไอศกรีมกะทิ",
                discription: "ไอศกรีมกะทิสด เสิร์ฟพร้อมถั่วและข้าวเหนียว",
                price: "65",
                category: "ของหวาน"
            }, {
                id: "37",
                Image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=900&q=80",
                name: "ชุดครอบครัวบ้านดี",
                discription: "ต้มยำกุ้ง ผัดผักรวม ไก่ทอด และข้าวสวยสำหรับ 4 คน",
                price: "590",
                category: "ชุดเซ็ต"
            }, {
                id: "38",
                Image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
                name: "ชุดออฟฟิศมื้อกลางวัน",
                discription: "อาหารจานเดียว 5 กล่อง พร้อมเครื่องดื่มเย็น",
                price: "499",
                category: "ชุดเซ็ต"
            }, {
                id: "39",
                Image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=900&q=80",
                name: "ชุดอิ่มคู่",
                discription: "เมนูหลัก 2 รายการ ของทานเล่น 1 รายการ และเครื่องดื่ม 2 แก้ว",
                price: "299",
                category: "ชุดเซ็ต"
            }, {
                id: "40",
                Image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=900&q=80",
                name: "ชุดเด็กกินง่าย",
                discription: "ข้าวไข่เจียว เฟรนช์ฟรายส์ และน้ำผลไม้",
                price: "159",
                category: "ชุดเซ็ต"
            }, {
                id: "41",
                Image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=900&q=80",
                name: "ชุดเครื่องดื่มรวม",
                discription: "ชาไทย ชามะนาว น้ำเก๊กฮวย และน้ำลำไย",
                price: "160",
                category: "ชุดเซ็ต"
            }, {
                id: "42",
                Image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80",
                name: "ชุดของหวานหลังมื้อ",
                discription: "ข้าวเหนียวมะม่วง บัวลอย และเฉาก๊วยนมสด",
                price: "199",
                category: "ชุดเซ็ต"
            }
        ]
    })
})
app.post('/api/auth/logout', (req, res) => {
    res.status(200).json({ status: "200", message: "ออกจากระบบสำเร็จ" })
})

app.get('/api/users', (req, res) => {
    res.status(200).json({
        status: "200",
        users: [
            { id: "1", username: "admin01", name: "ผู้ดูแลระบบ", role: "admin", email: "admin@restaurant.com", phone: "0811111111", status: "active", createdAt: "2026-05-01T10:00:00Z" },
            { id: "2", username: "cashier01", name: "แคชเชียร์ กะเช้า", role: "cashier", email: "cashier@restaurant.com", phone: "0822222222", status: "active", createdAt: "2026-05-05T09:00:00Z" },
            { id: "3", username: "kitchen01", name: "พ่อครัวใหญ่", role: "kitchen", email: "kitchen@restaurant.com", phone: "0833333333", status: "active", createdAt: "2026-05-10T08:00:00Z" },
            { id: "4", username: "pos01", name: "พนักงาน POS", role: "pos", email: "pos@restaurant.com", phone: "0844444444", status: "inactive", createdAt: "2026-05-15T11:00:00Z" }
        ]
    })
})

app.get('/api/users/:id', (req, res) => {
    res.status(200).json({
        status: "200",
        user: { id: req.params.id, username: "user" + req.params.id, name: "ผู้ใช้ " + req.params.id, role: "customer", email: "user" + req.params.id + "@mail.com", phone: "080000000" + req.params.id, status: "active", createdAt: "2026-05-20T10:00:00Z" }
    })
})

app.post('/api/users', (req, res) => {
    res.status(201).json({ status: "201", message: "สร้างผู้ใช้สำเร็จ", user: { id: "99", ...req.body } })
})

app.put('/api/users/:id', (req, res) => {
    res.status(200).json({ status: "200", message: "อัปเดตผู้ใช้สำเร็จ", user: { id: req.params.id, ...req.body } })
})

app.delete('/api/users/:id', (req, res) => {
    res.status(200).json({ status: "200", message: "ลบผู้ใช้สำเร็จ" })
})

app.get('/api/zones', (req, res) => {
    res.status(200).json({
        status: "200",
        zones: [
            { id: "1", name: "โซนหลัก", description: "โซนด้านในห้องแอร์" },
            { id: "2", name: "โซนระเบียง", description: "โซนนอกอาคารลมโชย" },
            { id: "3", name: "โซนชั้น 2", description: "โซนชั้นสองวิวสวน" }
        ]
    })
})

app.get('/api/tables', (req, res) => {
    res.status(200).json({
        status: "200",
        tables: [
            { id: "1", zoneId: "1", name: "A1", seats: 4, status: "available", qrCode: "table-a1" },
            { id: "2", zoneId: "1", name: "A2", seats: 2, status: "occupied", qrCode: "table-a2" },
            { id: "3", zoneId: "1", name: "A3", seats: 6, status: "reserved", qrCode: "table-a3" },
            { id: "4", zoneId: "2", name: "B1", seats: 4, status: "available", qrCode: "table-b1" },
            { id: "5", zoneId: "2", name: "B2", seats: 8, status: "cleaning", qrCode: "table-b2" },
            { id: "6", zoneId: "3", name: "C1", seats: 4, status: "available", qrCode: "table-c1" }
        ]
    })
})

app.get('/api/tables/:id', (req, res) => {
    res.status(200).json({
        status: "200",
        table: { id: req.params.id, zoneId: "1", name: "T" + req.params.id, seats: 4, status: "available", qrCode: "table-t" + req.params.id }
    })
})

app.post('/api/tables', (req, res) => {
    res.status(201).json({ status: "201", message: "สร้างโต๊ะสำเร็จ", table: { id: "100", ...req.body } })
})

app.put('/api/tables/:id', (req, res) => {
    res.status(200).json({ status: "200", message: "อัปเดตโต๊ะสำเร็จ", table: { id: req.params.id, ...req.body } })
})

app.delete('/api/tables/:id', (req, res) => {
    res.status(200).json({ status: "200", message: "ลบโต๊ะสำเร็จ" })
})

app.get('/api/categories', (req, res) => {
    res.status(200).json({
        status: "200",
        categories: [
            { id: "1", name: "อาหารจานเดียว", sortOrder: 1, isActive: true },
            { id: "2", name: "กับข้าว", sortOrder: 2, isActive: true },
            { id: "3", name: "เส้นและแกง", sortOrder: 3, isActive: true },
            { id: "4", name: "ของทานเล่น", sortOrder: 4, isActive: true },
            { id: "5", name: "เครื่องดื่ม", sortOrder: 5, isActive: true },
            { id: "6", name: "ของหวาน", sortOrder: 6, isActive: true },
            { id: "7", name: "ชุดเซ็ต", sortOrder: 7, isActive: true }
        ]
    })
})

app.post('/api/categories', (req, res) => {
    res.status(201).json({ status: "201", message: "สร้างหมวดหมู่สำเร็จ", category: { id: "99", ...req.body } })
})

app.put('/api/categories/:id', (req, res) => {
    res.status(200).json({ status: "200", message: "อัปเดตหมวดหมู่สำเร็จ", category: { id: req.params.id, ...req.body } })
})

app.delete('/api/categories/:id', (req, res) => {
    res.status(200).json({ status: "200", message: "ลบหมวดหมู่สำเร็จ" })
})

app.get('/api/menu/:id', (req, res) => {
    res.status(200).json({
        status: "200",
        menu: { id: req.params.id, name: "เมนูตัวอย่าง", price: "100", category: "อาหารจานเดียว", discription: "รายละเอียดเมนู", Image: "https://images.unsplash.com/photo-1707897634981-39bcfe435268?auto=format&fit=crop&fm=jpg&q=70&w=900" }
    })
})

app.post('/api/menu', (req, res) => {
    res.status(201).json({ status: "201", message: "สร้างเมนูสำเร็จ", menu: { id: "100", ...req.body } })
})

app.put('/api/menu/:id', (req, res) => {
    res.status(200).json({ status: "200", message: "อัปเดตเมนูสำเร็จ", menu: { id: req.params.id, ...req.body } })
})

app.delete('/api/menu/:id', (req, res) => {
    res.status(200).json({ status: "200", message: "ลบเมนูสำเร็จ" })
})

app.get('/api/menu-options', (req, res) => {
    res.status(200).json({
        status: "200",
        menuOptions: [
            { id: "1", menuId: "1", name: "ระดับความเผ็ด", type: "single", choices: [{ label: "ไม่เผ็ด", price: 0 }, { label: "เผ็ดน้อย", price: 0 }, { label: "เผ็ดกลาง", price: 0 }, { label: "เผ็ดมาก", price: 0 }] },
            { id: "2", menuId: "1", name: "เพิ่มไข่", type: "single", choices: [{ label: "ไข่ดาว", price: 10 }, { label: "ไข่เจียว", price: 10 }, { label: "ไม่เอา", price: 0 }] },
            { id: "3", menuId: "25", name: "ระดับความหวาน", type: "single", choices: [{ label: "หวานน้อย", price: 0 }, { label: "หวานปกติ", price: 0 }, { label: "หวานมาก", price: 0 }] }
        ]
    })
})

app.post('/api/menu-options', (req, res) => {
    res.status(201).json({ status: "201", message: "สร้างตัวเลือกเมนูสำเร็จ", menuOption: { id: "100", ...req.body } })
})

app.put('/api/menu-options/:id', (req, res) => {
    res.status(200).json({ status: "200", message: "อัปเดตตัวเลือกเมนูสำเร็จ", menuOption: { id: req.params.id, ...req.body } })
})

app.delete('/api/menu-options/:id', (req, res) => {
    res.status(200).json({ status: "200", message: "ลบตัวเลือกเมนูสำเร็จ" })
})

app.get('/api/promotions', (req, res) => {
    res.status(200).json({
        status: "200",
        promotions: [
            { id: "1", code: "SAVE10", name: "ลด 10% เมื่อครบ 500 บาท", description: "ใช้ได้ทั้งทานที่ร้านและกลับบ้าน", discountType: "percent", discountValue: 10, minOrder: 500, startDate: "2026-05-01", endDate: "2026-06-30", isActive: true },
            { id: "2", code: "DRINK20", name: "เครื่องดื่มลด 20 บาท", description: "สำหรับชาไทย น้ำสมุนไพร และเครื่องดื่มเย็น", discountType: "fixed", discountValue: 20, minOrder: 0, startDate: "2026-05-01", endDate: "2026-05-31", isActive: true },
            { id: "3", code: "SET299", name: "ชุดอิ่มคู่ 299 บาท", description: "เมื่อสั่งเมนูหลัก 2 รายการขึ้นไป", discountType: "fixed", discountValue: 50, minOrder: 299, startDate: "2026-05-15", endDate: "2026-06-15", isActive: false }
        ]
    })
})

app.post('/api/promotions', (req, res) => {
    res.status(201).json({ status: "201", message: "สร้างโปรโมชั่นสำเร็จ", promotion: { id: "100", ...req.body } })
})

app.put('/api/promotions/:id', (req, res) => {
    res.status(200).json({ status: "200", message: "อัปเดตโปรโมชั่นสำเร็จ", promotion: { id: req.params.id, ...req.body } })
})

app.delete('/api/promotions/:id', (req, res) => {
    res.status(200).json({ status: "200", message: "ลบโปรโมชั่นสำเร็จ" })
})

app.get('/api/orders', (req, res) => {
    res.status(200).json({
        status: "200",
        orders: [
            { id: "1001", tableId: "2", tableName: "A2", customerName: "คุณเมย์", total: 265, status: "served", type: "dine-in", createdAt: "2026-05-21T11:00:00Z", items: 3 },
            { id: "1002", tableId: null, tableName: "-", customerName: "คุณนนท์", total: 120, status: "preparing", type: "takeaway", createdAt: "2026-05-21T11:30:00Z", items: 2 },
            { id: "1003", tableId: "4", tableName: "B1", customerName: "คุณต้น", total: 590, status: "pending", type: "dine-in", createdAt: "2026-05-21T12:00:00Z", items: 5 },
            { id: "1004", tableId: "1", tableName: "A1", customerName: "คุณแอน", total: 180, status: "ready", type: "dine-in", createdAt: "2026-05-21T12:15:00Z", items: 2 }
        ]
    })
})

app.get('/api/orders/:id', (req, res) => {
    res.status(200).json({
        status: "200",
        order: {
            id: req.params.id, tableId: "2", tableName: "A2", customerName: "คุณเมย์", total: 265, status: "served", type: "dine-in", note: "ไม่ใส่ผักชี", createdAt: "2026-05-21T11:00:00Z",
            items: [
                { id: "1", menuId: "1", name: "ข้าวกะเพราไก่ไข่ดาว", price: 85, quantity: 2, options: [{ name: "ระดับความเผ็ด", choice: "เผ็ดมาก" }, { name: "เพิ่มไข่", choice: "ไข่ดาว" }] },
                { id: "2", menuId: "25", name: "ชาไทยเย็น", price: 45, quantity: 2, options: [{ name: "ระดับความหวาน", choice: "หวานน้อย" }] }
            ]
        }
    })
})

app.post('/api/orders', (req, res) => {
    res.status(201).json({ status: "201", message: "สร้างออเดอร์สำเร็จ", order: { id: "9999", ...req.body } })
})

app.put('/api/orders/:id', (req, res) => {
    res.status(200).json({ status: "200", message: "อัปเดตออเดอร์สำเร็จ", order: { id: req.params.id, ...req.body } })
})

app.delete('/api/orders/:id', (req, res) => {
    res.status(200).json({ status: "200", message: "ลบออเดอร์สำเร็จ" })
})

app.get('/api/cart', (req, res) => {
    res.status(200).json({
        status: "200",
        cart: {
            items: [
                { id: "1", menuId: "1", name: "ข้าวกะเพราไก่ไข่ดาว", price: 85, quantity: 2, options: [{ name: "ระดับความเผ็ด", choice: "เผ็ดมาก" }], subtotal: 170 },
                { id: "2", menuId: "25", name: "ชาไทยเย็น", price: 45, quantity: 1, options: [], subtotal: 45 }
            ],
            total: 215,
            itemCount: 3
        }
    })
})

app.post('/api/cart', (req, res) => {
    res.status(201).json({ status: "201", message: "เพิ่มสินค้าในตะกร้าสำเร็จ", cartItem: { id: "99", ...req.body } })
})

app.put('/api/cart/:id', (req, res) => {
    res.status(200).json({ status: "200", message: "อัปเดตตะกร้าสำเร็จ", cartItem: { id: req.params.id, ...req.body } })
})

app.delete('/api/cart/:id', (req, res) => {
    res.status(200).json({ status: "200", message: "ลบสินค้าในตะกร้าสำเร็จ" })
})

app.post('/api/checkout', (req, res) => {
    res.status(201).json({ status: "201", message: "สั่งซื้อสำเร็จ", order: { id: "5000", ...req.body, status: "pending", createdAt: new Date().toISOString() } })
})

app.get('/api/order-history', (req, res) => {
    res.status(200).json({
        status: "200",
        history: [
            { id: "9001", orderId: "1001", tableName: "A2", total: 265, status: "completed", completedAt: "2026-05-20T13:00:00Z", items: 3 },
            { id: "9002", orderId: "1002", tableName: "-", total: 120, status: "completed", completedAt: "2026-05-19T14:30:00Z", items: 2 },
            { id: "9003", orderId: "1003", tableName: "B1", total: 590, status: "cancelled", completedAt: "2026-05-18T12:00:00Z", items: 5 }
        ]
    })
})

app.get('/api/order-status/:id', (req, res) => {
    res.status(200).json({
        status: "200",
        orderStatus: {
            id: req.params.id,
            currentStatus: "preparing",
            timeline: [
                { status: "pending", label: "รับออเดอร์", timestamp: "2026-05-21T12:00:00Z", done: true },
                { status: "preparing", label: "กำลังปรุง", timestamp: "2026-05-21T12:05:00Z", done: true },
                { status: "ready", label: "พร้อมเสิร์ฟ", timestamp: null, done: false },
                { status: "served", label: "เสิร์ฟแล้ว", timestamp: null, done: false }
            ],
            estimatedReadyAt: "2026-05-21T12:25:00Z",
            remainingMinutes: 15
        }
    })
})

app.get('/api/kitchen/queue', (req, res) => {
    res.status(200).json({
        status: "200",
        queue: [
            { id: "1003", tableName: "B1", items: 5, note: "รีบหน่อยครับ", createdAt: "2026-05-21T12:00:00Z", elapsedMinutes: 5 },
            { id: "1005", tableName: "A3", items: 3, note: "", createdAt: "2026-05-21T12:05:00Z", elapsedMinutes: 3 }
        ]
    })
})

app.get('/api/kitchen/preparing', (req, res) => {
    res.status(200).json({
        status: "200",
        preparing: [
            { id: "1002", tableName: "-", items: 2, note: "ห่อกลับบ้าน", startedAt: "2026-05-21T11:35:00Z", elapsedMinutes: 8 },
            { id: "1006", tableName: "C1", items: 4, note: "", startedAt: "2026-05-21T12:10:00Z", elapsedMinutes: 2 }
        ]
    })
})

app.get('/api/kitchen/ready', (req, res) => {
    res.status(200).json({
        status: "200",
        ready: [
            { id: "1004", tableName: "A1", items: 2, completedAt: "2026-05-21T12:20:00Z", waitedMinutes: 5 }
        ]
    })
})

app.get('/api/kitchen/history', (req, res) => {
    res.status(200).json({
        status: "200",
        history: [
            { id: "9001", tableName: "A2", items: 3, completedAt: "2026-05-20T13:00:00Z", totalTimeMinutes: 18 },
            { id: "9002", tableName: "-", items: 2, completedAt: "2026-05-19T14:30:00Z", totalTimeMinutes: 12 }
        ]
    })
})

app.put('/api/kitchen/orders/:id/status', (req, res) => {
    res.status(200).json({ status: "200", message: "อัปเดตสถานะออเดอร์ในครัวสำเร็จ", order: { id: req.params.id, status: req.body.status || "preparing" } })
})

app.get('/api/bills', (req, res) => {
    res.status(200).json({
        status: "200",
        bills: [
            { id: "B001", orderId: "1001", tableName: "A2", customerName: "คุณเมย์", total: 265, discount: 0, vat: 18.55, grandTotal: 283.55, status: "unpaid", createdAt: "2026-05-21T11:00:00Z" },
            { id: "B002", orderId: "1004", tableName: "A1", customerName: "คุณแอน", total: 180, discount: 20, vat: 11.2, grandTotal: 171.2, status: "paid", createdAt: "2026-05-21T12:15:00Z" }
        ]
    })
})

app.get('/api/bills/:id', (req, res) => {
    res.status(200).json({
        status: "200",
        bill: {
            id: req.params.id, orderId: "1001", tableName: "A2", customerName: "คุณเมย์",
            items: [
                { name: "ข้าวกะเพราไก่ไข่ดาว", price: 85, quantity: 2, subtotal: 170 },
                { name: "ชาไทยเย็น", price: 45, quantity: 1, subtotal: 45 }
            ],
            total: 215, serviceCharge: 21.5, vat: 16.56, discount: 0, grandTotal: 253.06, status: "unpaid", createdAt: "2026-05-21T11:00:00Z"
        }
    })
})

app.post('/api/payments', (req, res) => {
    res.status(201).json({ status: "201", message: "ชำระเงินสำเร็จ", payment: { id: "P001", billId: req.body.billId, amount: req.body.amount || 253.06, method: req.body.method || "cash", paidAt: new Date().toISOString() } })
})

app.get('/api/receipts/:id', (req, res) => {
    res.status(200).json({
        status: "200",
        receipt: {
            id: req.params.id, billId: "B001", orderId: "1001", tableName: "A2", customerName: "คุณเมย์",
            items: [
                { name: "ข้าวกะเพราไก่ไข่ดาว", price: 85, quantity: 2, subtotal: 170 },
                { name: "ชาไทยเย็น", price: 45, quantity: 1, subtotal: 45 }
            ],
            total: 215, serviceCharge: 21.5, vat: 16.56, discount: 0, grandTotal: 253.06,
            paymentMethod: "cash", received: 260, change: 6.94, printedAt: "2026-05-21T12:30:00Z"
        }
    })
})

app.get('/api/pos/tables', (req, res) => {
    res.status(200).json({
        status: "200",
        tables: [
            { id: "1", name: "A1", seats: 4, status: "available", currentOrderId: null },
            { id: "2", name: "A2", seats: 2, status: "occupied", currentOrderId: "1001" },
            { id: "3", name: "A3", seats: 6, status: "reserved", currentOrderId: null },
            { id: "4", name: "B1", seats: 4, status: "occupied", currentOrderId: "1003" },
            { id: "5", name: "B2", seats: 8, status: "cleaning", currentOrderId: null }
        ]
    })
})

app.get('/api/pos/orders', (req, res) => {
    res.status(200).json({
        status: "200",
        orders: [
            { id: "1001", tableName: "A2", customerName: "คุณเมย์", total: 265, status: "served", createdAt: "2026-05-21T11:00:00Z" },
            { id: "1003", tableName: "B1", customerName: "คุณต้น", total: 590, status: "pending", createdAt: "2026-05-21T12:00:00Z" }
        ]
    })
})

app.get('/api/pos/orders/:id', (req, res) => {
    res.status(200).json({
        status: "200",
        order: {
            id: req.params.id, tableName: "A2", customerName: "คุณเมย์", total: 265, status: "served", createdAt: "2026-05-21T11:00:00Z",
            items: [
                { id: "1", menuId: "1", name: "ข้าวกะเพราไก่ไข่ดาว", price: 85, quantity: 2, options: [{ name: "ระดับความเผ็ด", choice: "เผ็ดมาก" }] },
                { id: "2", menuId: "25", name: "ชาไทยเย็น", price: 45, quantity: 1, options: [] }
            ]
        }
    })
})

app.post('/api/pos/orders', (req, res) => {
    res.status(201).json({ status: "201", message: "สร้างออเดอร์ POS สำเร็จ", order: { id: "8888", ...req.body } })
})

app.get('/api/pos/dashboard', (req, res) => {
    res.status(200).json({
        status: "200",
        dashboard: {
            todayOrders: 12, todaySales: 3840, activeTables: 5, availableTables: 8,
            pendingOrders: 2, preparingOrders: 3, readyOrders: 1
        }
    })
})

app.get('/api/reports/sales', (req, res) => {
    res.status(200).json({
        status: "200",
        report: {
            period: "daily", date: "2026-05-21", totalSales: 1155, totalOrders: 4, averagePerOrder: 288.75,
            topSelling: [
                { menuId: "1", name: "ข้าวกะเพราไก่ไข่ดาว", quantity: 5, revenue: 425 },
                { menuId: "7", name: "ต้มยำกุ้งน้ำข้น", quantity: 2, revenue: 360 }
            ],
            salesByCategory: [
                { category: "อาหารจานเดียว", amount: 425 },
                { category: "กับข้าว", amount: 360 },
                { category: "เครื่องดื่ม", amount: 135 },
                { category: "ชุดเซ็ต", amount: 235 }
            ]
        }
    })
})

app.get('/api/reports/orders', (req, res) => {
    res.status(200).json({
        status: "200",
        report: {
            period: "daily", date: "2026-05-21", totalOrders: 4, dineIn: 3, takeaway: 1,
            pending: 1, preparing: 1, ready: 1, served: 1, cancelled: 0, averagePreparationMinutes: 15
        }
    })
})

app.get('/api/audit-logs', (req, res) => {
    res.status(200).json({
        status: "200",
        logs: [
            { id: "1", user: "admin01", action: "LOGIN", target: "ระบบ", detail: "เข้าสู่ระบบ", ip: "192.168.1.10", createdAt: "2026-05-21T08:00:00Z" },
            { id: "2", user: "admin01", action: "CREATE", target: "เมนู", detail: "เพิ่มเมนูใหม่: ข้าวผัดปู", ip: "192.168.1.10", createdAt: "2026-05-21T09:30:00Z" },
            { id: "3", user: "cashier01", action: "PAYMENT", target: "บิล B002", detail: "รับชำระเงิน 171.20 บาท", ip: "192.168.1.11", createdAt: "2026-05-21T12:35:00Z" }
        ]
    })
})

app.get('/api/restaurant-settings', (req, res) => {
    res.status(200).json({
        status: "200",
        settings: {
            restaurantName: "ร้านอาหารบ้านดี", address: "123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110",
            phone: "02-123-4567", email: "contact@baandee.com", taxId: "1234567890123",
            vatRate: 7, serviceChargeRate: 10, openTime: "10:00", closeTime: "22:00", isOpen: true,
            logoUrl: "https://example.com/logo.png", socialMedia: { facebook: "baandee", line: "@baandee", instagram: "baandee" }
        }
    })
})

app.put('/api/restaurant-settings', (req, res) => {
    res.status(200).json({ status: "200", message: "อัปเดตการตั้งค่าร้านสำเร็จ", settings: { ...req.body } })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})