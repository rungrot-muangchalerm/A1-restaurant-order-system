# ประวัติการเปลี่ยนแปลง (Changelog)

เอกสารนี้บันทึกการเปลี่ยนแปลงทั้งหมดของโครงการ Restaurant Order System เรียงตามเวลาจากใหม่ไปเก่า

---

## 📅 วันที่ 21 พฤษภาคม 2569

### `feat: เพิ่ม API อัปเดตการตั้งค่าร้านอาหาร PUT /api/restaurant-settings`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:46 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับอัปเดตการตั้งค่าร้านอาหาร

### `feat: เพิ่ม API ดึงการตั้งค่าร้านอาหาร GET /api/restaurant-settings`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:46 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับดึงการตั้งค่าร้านอาหาร

### `feat: เพิ่ม API ดึงบันทึกการกระทำระบบ GET /api/audit-logs`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:45 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับดึงบันทึกการกระทำของผู้ใช้ในระบบ

### `feat: เพิ่ม API รายงานสถิติออเดอร์ GET /api/reports/orders`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:45 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับรายงานสถิติออเดอร์

### `feat: เพิ่ม API รายงานยอดขาย GET /api/reports/sales`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:45 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับรายงานยอดขายและเมนูขายดี

### `feat: เพิ่ม API ดึงข้อมูลแดชบอร์ด POS GET /api/pos/dashboard`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:45 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับดึงข้อมูลแดชบอร์ดสรุปของ POS

### `feat: เพิ่ม API สร้างออเดอร์ผ่าน POS POST /api/pos/orders`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:45 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับสร้างออเดอร์ผ่านระบบ POS

### `feat: เพิ่ม API ดึงรายละเอียดออเดอร์ POS GET /api/pos/orders/:id`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:44 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับดึงรายละเอียดออเดอร์ใน POS

### `feat: เพิ่ม API ดึงออเดอร์ในระบบ POS GET /api/pos/orders`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:44 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับดึงรายการออเดอร์ในระบบ POS

### `feat: เพิ่ม API ดึงโต๊ะในระบบ POS GET /api/pos/tables`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:44 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับดึงรายการโต๊ะในระบบ POS

### `feat: เพิ่ม API ดึงใบเสร็จรับเงิน GET /api/receipts/:id`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:44 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับดึงใบเสร็จรับเงิน

### `feat: เพิ่ม API บันทึกการชำระเงิน POST /api/payments`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:44 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับบันทึกการชำระเงิน

### `feat: เพิ่ม API ดึงรายละเอียดบิล GET /api/bills/:id`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:43 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับดึงรายละเอียดบิล

### `feat: เพิ่ม API ดึงรายการบิล GET /api/bills`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:43 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับดึงรายการบิลทั้งหมด

### `feat: เพิ่ม API อัปเดตสถานะออเดอร์ในครัว PUT /api/kitchen/orders/:id/status`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:43 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับอัปเดตสถานะออเดอร์ในครัว

### `feat: เพิ่ม API ดึงประวัติออเดอร์ในครัว GET /api/kitchen/history`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:43 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับดึงประวัติออเดอร์ที่ปรุงเสร็จในครัว

### `feat: เพิ่ม API ดึงออเดอร์พร้อมเสิร์ฟ GET /api/kitchen/ready`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:43 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับดึงออเดอร์ที่พร้อมเสิร์ฟ

### `feat: เพิ่ม API ดึงออเดอร์กำลังปรุง GET /api/kitchen/preparing`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:43 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับดึงออเดอร์ที่กำลังปรุงในครัว

### `feat: เพิ่ม API ดึงคิวออเดอร์ในครัว GET /api/kitchen/queue`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:42 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับดึงคิวออเดอร์ที่รอการปรุงในครัว

### `feat: เพิ่ม API ดึงสถานะออเดอร์ GET /api/order-status/:id`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:42 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับตรวจสอบสถานะออเดอร์แบบเรียลไทม์

### `feat: เพิ่ม API ดึงประวัติการสั่งซื้อ GET /api/order-history`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:42 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับดึงประวัติการสั่งซื้อของลูกค้า

### `feat: เพิ่ม API ยืนยันการสั่งซื้อ POST /api/checkout`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:42 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับยืนยันการสั่งซื้อและชำระเงิน

### `feat: เพิ่ม API ลบสินค้าในตะกร้า DELETE /api/cart/:id`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:42 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับลบสินค้าในตะกร้า

### `feat: เพิ่ม API แก้ไขสินค้าในตะกร้า PUT /api/cart/:id`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:41 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับแก้ไขสินค้าในตะกร้า

### `feat: เพิ่ม API เพิ่มสินค้าในตะกร้า POST /api/cart`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:41 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับเพิ่มสินค้าในตะกร้า

### `feat: เพิ่ม API ดึงข้อมูลตะกร้าสั่งซื้อ GET /api/cart`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:41 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับดึงข้อมูลตะกร้าสั่งซื้อ

### `feat: เพิ่ม API ลบออเดอร์ DELETE /api/orders/:id`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:41 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับลบออเดอร์

### `feat: เพิ่ม API แก้ไขออเดอร์ PUT /api/orders/:id`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:41 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับแก้ไขออเดอร์

### `feat: เพิ่ม API สร้างออเดอร์ใหม่ POST /api/orders`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:41 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับสร้างออเดอร์ใหม่

### `feat: เพิ่ม API ดึงรายละเอียดออเดอร์ GET /api/orders/:id`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:40 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับดึงรายละเอียดออเดอร์

### `feat: เพิ่ม API ดึงรายการออเดอร์ GET /api/orders`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:40 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับดึงรายการออเดอร์ทั้งหมด

### `feat: เพิ่ม API ลบโปรโมชั่น DELETE /api/promotions/:id`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:40 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับลบโปรโมชั่น

### `feat: เพิ่ม API แก้ไขโปรโมชั่น PUT /api/promotions/:id`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:40 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับแก้ไขโปรโมชั่น

### `feat: เพิ่ม API สร้างโปรโมชั่น POST /api/promotions`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:40 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับสร้างโปรโมชั่นใหม่

### `feat: เพิ่ม API ดึงรายการโปรโมชั่น GET /api/promotions`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:40 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับดึงรายการโปรโมชั่น

### `feat: เพิ่ม API ลบตัวเลือกเมนู DELETE /api/menu-options/:id`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:39 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับลบตัวเลือกเมนู

### `feat: เพิ่ม API แก้ไขตัวเลือกเมนู PUT /api/menu-options/:id`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:39 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับแก้ไขตัวเลือกเมนู

### `feat: เพิ่ม API สร้างตัวเลือกเมนู POST /api/menu-options`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:39 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับสร้างตัวเลือกเมนูใหม่

### `feat: เพิ่ม API ดึงตัวเลือกเมนู GET /api/menu-options`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:39 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับดึงตัวเลือกเสริมของเมนู

### `feat: เพิ่ม API ลบเมนู DELETE /api/menu/:id`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:38 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับลบเมนู

### `feat: เพิ่ม API แก้ไขเมนู PUT /api/menu/:id`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:38 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับแก้ไขเมนู

### `feat: เพิ่ม API สร้างเมนูใหม่ POST /api/menu`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:38 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับสร้างเมนูใหม่

### `feat: เพิ่ม API ดึงข้อมูลเมนูตามไอดี GET /api/menu/:id`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:38 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับดึงข้อมูลเมนูตามไอดี (สำหรับหน้ารายละเอียดเมนู)

### `feat: เพิ่ม API ลบหมวดหมู่อาหาร DELETE /api/categories/:id`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:38 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับลบหมวดหมู่อาหาร

### `feat: เพิ่ม API แก้ไขหมวดหมู่อาหาร PUT /api/categories/:id`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:38 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับแก้ไขหมวดหมู่อาหาร

### `feat: เพิ่ม API สร้างหมวดหมู่อาหาร POST /api/categories`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:37 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับสร้างหมวดหมู่อาหารใหม่

### `feat: เพิ่ม API ดึงรายการหมวดหมู่อาหาร GET /api/categories`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:37 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับดึงรายการหมวดหมู่อาหาร

### `feat: เพิ่ม API ลบโต๊ะ DELETE /api/tables/:id`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:37 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับลบโต๊ะ

### `feat: เพิ่ม API แก้ไขข้อมูลโต๊ะ PUT /api/tables/:id`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:37 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับแก้ไขข้อมูลโต๊ะ

### `feat: เพิ่ม API สร้างโต๊ะใหม่ POST /api/tables`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:37 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับสร้างโต๊ะใหม่

### `feat: เพิ่ม API ดึงข้อมูลโต๊ะตามไอดี GET /api/tables/:id`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:36 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับดึงข้อมูลโต๊ะตามไอดี

### `feat: เพิ่ม API ดึงรายการโต๊ะ GET /api/tables`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:36 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับดึงรายการโต๊ะทั้งหมดพร้อมสถานะ

### `feat: เพิ่ม API ดึงรายการโซน GET /api/zones`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:36 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับดึงรายการโซนภายในร้าน

### `feat: เพิ่ม API ลบผู้ใช้ DELETE /api/users/:id`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:36 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับลบผู้ใช้ออกจากระบบ

### `feat: เพิ่ม API แก้ไขข้อมูลผู้ใช้ PUT /api/users/:id`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:36 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับแก้ไขข้อมูลผู้ใช้

### `feat: เพิ่ม API สร้างผู้ใช้ใหม่ POST /api/users`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:36 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับสร้างผู้ใช้งานใหม่

### `feat: เพิ่ม API ดึงข้อมูลผู้ใช้ตามไอดี GET /api/users/:id`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:35 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับดึงข้อมูลผู้ใช้ตามไอดี

### `feat: เพิ่ม API ดึงรายการผู้ใช้ GET /api/users`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:35 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับดึงรายการผู้ใช้งานระบบทั้งหมด

### `feat: เพิ่ม API ออกจากระบบ POST /api/auth/logout`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:43:35 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับระบบออกจากระบบ (logout)

### `feat: add express.json() middleware to parse request body`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 02:35:50 (+07:00)
- **รายละเอียด:** เพิ่ม middleware express.json() เพื่อให้ Express อ่าน request body ที่เป็น JSON ได้

### `chore: del debuglog`
- **ผู้ commit:** Aumandanna
- **เวลา:** 01:47:45 (+07:00)
- **รายละเอียด:** ลบคำสั่ง debug log ออกจากโค้ด

### `fix: auth tag`
- **ผู้ commit:** Aumandanna
- **เวลา:** 01:44:39 (+07:00)
- **รายละเอียด:** แก้ไขปัญหาแท็กในระบบ authentication

### `feat: add global script to all page`
- **ผู้ commit:** Aumandanna
- **เวลา:** 01:35:17 (+07:00)
- **รายละเอียด:** เพิ่มสคริปต์ส่วนกลางให้กับทุกหน้าเว็บ

### `fix :  แยกไฟล์ global script กับ page script`
- **ผู้ commit:** Aumandanna
- **เวลา:** 01:23:50 (+07:00)
- **รายละเอียด:** เพิ่มสคริปต์ส่วนกลางให้กับทุกหน้าเว็บ

### `feat: fetch get reviewer มาใช้จาก /api/reviewer`
- **ผู้ commit:** Aumandanna
- **เวลา:** 01:20:03 (+07:00)
- **รายละเอียด:** เชื่อมต่อ API reviewer เข้ากับหน้าเว็บ

### `chore: del debuglog`
- **ผู้ commit:** Aumandanna
- **เวลา:** 00:58:49 (+07:00)
- **รายละเอียด:** ลบคำสั่ง debug log ออกจากโค้ด

### `feat: fetch เอา promotion มาใช้จาก /api/restaurant-promotion`
- **ผู้ commit:** Aumandanna
- **เวลา:** 00:46:14 (+07:00)
- **รายละเอียด:** เชื่อมต่อ API promotion เข้ากับหน้าเว็บ

### `feat: fetch เอา menu แนะนำมาไช้งานจาก /api/recommended-menus`
- **ผู้ commit:** Aumandanna
- **เวลา:** 00:07:22 (+07:00)
- **รายละเอียด:** เชื่อมต่อ API recommended menus เข้ากับหน้าเว็บ

## 📅 วันที่ 20 พฤษภาคม 2569

### `Merge branch 'main' of https://github.com/rungrot-muangchalerm/A1-restaurant-order-system`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 20:54:21 (+07:00)
- **รายละเอียด:** รวมโค้ดจาก branch main ของ remote repository

### `feat: add full menu mockup from customer/menu.html to /api/menu`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 20:54:16 (+07:00)
- **รายละเอียด:** ย้ายข้อมูลเมนูจากหน้าเว็บมาเป็น API mockup

### `fix api restaurant`
- **ผู้ commit:** Aumandanna
- **เวลา:** 20:50:06 (+07:00)
- **รายละเอียด:** แก้ไข/เพิ่ม API ข้อมูลร้านอาหาร

### `add : api restaurant`
- **ผู้ commit:** Aumandanna
- **เวลา:** 20:47:42 (+07:00)
- **รายละเอียด:** แก้ไข/เพิ่ม API ข้อมูลร้านอาหาร

### `fix: correct /api/reviewer and /api/menu response structure`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 20:46:56 (+07:00)
- **รายละเอียด:** เชื่อมต่อ API reviewer เข้ากับหน้าเว็บ

### `chore : merge`
- **ผู้ commit:** Aumandanna
- **เวลา:** 20:22:47 (+07:00)
- **รายละเอียด:** merge

### `fix : login register logout`
- **ผู้ commit:** Aumandanna
- **เวลา:** 20:19:27 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับระบบออกจากระบบ (logout)

### `Merge branch 'main' of https://github.com/rungrot-muangchalerm/A1-restaurant-order-system`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 19:27:36 (+07:00)
- **รายละเอียด:** รวมโค้ดจาก branch main ของ remote repository

### `chore: clean up whitespace in index.js`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 19:27:31 (+07:00)
- **รายละเอียด:** ทำความสะอาดช่องว่างในไฟล์ index.js

### `fix: prevent horizontal scroll on mobile in index.html by adjusting row gutter`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 19:27:01 (+07:00)
- **รายละเอียด:** แก้ไขปัญหาแถบเลื่อนแนวนอนบนมือถือ

### `fix : admin`
- **ผู้ commit:** Aumandanna
- **เวลา:** 18:34:08 (+07:00)
- **รายละเอียด:** แก้ไขปัญหาในหน้าแอดมิน

### `chore: del debug`
- **ผู้ commit:** Aumandanna
- **เวลา:** 18:31:53 (+07:00)
- **รายละเอียด:** ลบโค้ด debug

### `feat:admin cashier kitchen pos`
- **ผู้ commit:** Aumandanna
- **เวลา:** 18:28:43 (+07:00)
- **รายละเอียด:** เพิ่ม/ปรับปรุงฟีเจอร์สำหรับ admin, cashier, kitchen และ POS

### `feat: /api/reviewer`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 18:23:54 (+07:00)
- **รายละเอียด:** เชื่อมต่อ API reviewer เข้ากับหน้าเว็บ

### `feat: /api/restaurant-promotion`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 18:10:17 (+07:00)
- **รายละเอียด:** เชื่อมต่อ API promotion เข้ากับหน้าเว็บ

### `feat: /api/restaurant-status`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 17:50:47 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับสถานะร้านอาหาร

### `fix: price`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 17:46:07 (+07:00)
- **รายละเอียด:** แก้ไขปัญหาราคาสินค้า

### `test`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 17:41:00 (+07:00)
- **รายละเอียด:** commit สำหรับการทดสอบ

### `test pos user`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 17:08:27 (+07:00)
- **รายละเอียด:** ทดสอบระบบ POS สำหรับผู้ใช้

### `feat: recommended-menus`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 16:54:28 (+07:00)
- **รายละเอียด:** เชื่อมต่อ API recommended menus เข้ากับหน้าเว็บ

### `install: nodemon`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 16:18:43 (+07:00)
- **รายละเอียด:** ติดตั้งแพ็กเกจ nodemon

### `feat: api login`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 16:17:46 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับระบบเข้าสู่ระบบ

### `feat: api register`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 16:17:19 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับระบบสมัครสมาชิก

### `merge: index.js index.html delete json api mockup`
- **ผู้ commit:** Aumandanna
- **เวลา:** 15:59:31 (+07:00)
- **รายละเอียด:** รวมโค้ดและลบไฟล์ JSON mockup API

### `merge: index.js index.html delete json api mockup`
- **ผู้ commit:** Aumandanna
- **เวลา:** 15:58:21 (+07:00)
- **รายละเอียด:** รวมโค้ดและลบไฟล์ JSON mockup API

### `feat: api me`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 15:16:41 (+07:00)
- **รายละเอียด:** สร้าง API endpoint สำหรับข้อมูลผู้ใช้ปัจจุบัน

### `feat: public`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 14:37:03 (+07:00)
- **รายละเอียด:** ตั้งค่าโฟลเดอร์ public สำหรับ static files

### `feat express`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 14:22:35 (+07:00)
- **รายละเอียด:** ติดตั้งและตั้งค่า Express.js

### `feat: npm init`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 14:20:20 (+07:00)
- **รายละเอียด:** เริ่มต้นโครงการ Node.js ด้วย npm init

### `feat: ย้ายไฟล์เข้า public`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 14:19:08 (+07:00)
- **รายละเอียด:** ย้ายไฟล์เข้าโฟลเดอร์ public

### `feat: mockup api me`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 14:16:09 (+07:00)
- **รายละเอียด:** สร้างข้อมูลจำลองสำหรับ API /api/me

### `feat: mockup api me`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 14:15:47 (+07:00)
- **รายละเอียด:** สร้างข้อมูลจำลองสำหรับ API /api/me

### `feat: mockup api me`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 14:05:06 (+07:00)
- **รายละเอียด:** สร้างข้อมูลจำลองสำหรับ API /api/me

### `chore: delete .vscode`
- **ผู้ commit:** Aumandanna
- **เวลา:** 14:03:06 (+07:00)
- **รายละเอียด:** ลบโฟลเดอร์ .vscode

## 📅 วันที่ 07 พฤษภาคม 2569

### `chore: การเคาะบันทัด`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 06:20:36 (+07:00)
- **รายละเอียด:** จัดรูปแบบการเคาะบรรทัดในไฟล์โค้ด

### `chore: add workspace editor settings`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:17:11 (+07:00)
- **รายละเอียด:** เพิ่มการตั้งค่า workspace สำหรับ editor

### `chore: format restaurant html pages`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 03:15:51 (+07:00)
- **รายละเอียด:** จัดรูปแบบไฟล์ HTML ของร้านอาหาร

### `docs: restore restaurant system requirements`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 02:23:14 (+07:00)
- **รายละเอียด:** กู้คืนเอกสารความต้องการของระบบ

### `fix(a11y): add aria-label to category select in admin/menu.html`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 02:05:46 (+07:00)
- **รายละเอียด:** แก้ไขปัญหา accessibility โดยเพิ่ม aria-label

### `Initial commit: restaurant order system HTML files`
- **ผู้ commit:** Rungrot Muangchalerm
- **เวลา:** 01:55:52 (+07:00)
- **รายละเอียด:** commit แรกของโครงการ: เพิ่มไฟล์ HTML ระบบสั่งอาหาร

---

## สรุปประเภทของ Commit

| ประเภท (Type) | ความหมาย | จำนวนครั้ง |
|---|---|---|
| `feat` | เพิ่มฟีเจอร์ใหม่ | 79 |
| `chore` | งานทั่วไป/ทำความสะอาดโค้ด | 8 |
| `fix` | แก้ไขข้อผิดพลาด | 4 |
| `fix ` | fix  | 3 |
| `Merge branch 'main' of https` | Merge branch 'main' of https | 2 |
| `merge` | รวมโค้ดจาก branch อื่น | 2 |
| `fix api restaurant` | fix api restaurant | 1 |
| `add ` | add  | 1 |
| `chore ` | chore  | 1 |
| `test` | ทดสอบ | 1 |
| `test pos user` | test pos user | 1 |
| `install` | ติดตั้งแพ็กเกจ | 1 |
| `feat express` | feat express | 1 |
| `docs` | เอกสาร | 1 |
| `fix(a11y)` | fix(a11y) | 1 |
| `Initial commit` | Initial commit | 1 |

---

*เอกสารนี้สร้างขึ้นโดยอัตโนมัติจากประวัติ Git commit*
