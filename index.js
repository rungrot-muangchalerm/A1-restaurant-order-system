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
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})