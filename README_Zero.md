# MiruZero

> HTTP Client + DOM Manipulation Library สำหรับ Frida / Node.js / Browser
> 
> สร้างจากพื้นฐาน jQuery 4.0.0 + Zero HTTP Client

---

## การใช้งานเบื้องต้น

### Frida / Node.js

```js
const miruzero = require('./lib/zero');

// HTTP GET
miruzero.zero.get('https://api.example.com/users')
  .then(res => console.log(res.data));

// HTTP POST
miruzero.zero.post('https://api.example.com/login', {
  username: 'papa',
  password: 'secret'
}).then(res => console.log(res.data));
```

### Browser (Global)

```js
miruzero.zero.get('https://api.example.com/data');

// DOM ผ่าน jQuery ดั้งเดิม
miruzero.$('#id').addClass('active');
miruzero.jQuery('.item').on('click', handler);
```

---

## MiruZero.zero API

### HTTP Methods

| Method | รูปแบบ | คำอธิบาย |
|--------|--------|---------|
| `get` | `.zero.get(url, config?)` | ส่ง HTTP GET |
| `post` | `.zero.post(url, data?, config?)` | ส่ง HTTP POST |
| `put` | `.zero.put(url, data?, config?)` | ส่ง HTTP PUT |
| `patch` | `.zero.patch(url, data?, config?)` | ส่ง HTTP PATCH |
| `delete` | `.zero.delete(url, config?)` | ส่ง HTTP DELETE |
| `head` | `.zero.head(url, config?)` | ส่ง HTTP HEAD |
| `options` | `.zero.options(url, config?)` | ส่ง HTTP OPTIONS |
| `request` | `.zero.request(url, config?, method?, data?, credentials?)` | ส่ง HTTP แบบกำหนดเอง |

### ตัวอย่างแต่ละ Method

```js
// GET
miruzero.zero.get('https://api.example.com/users');

// GET แบบมี params
miruzero.zero.get('https://api.example.com/search', {
  params: { q: 'miru' }
});

// POST แบบมี data + headers
miruzero.zero.post('https://api.example.com/login', 
  { username: 'papa', password: 'secret' },
  { headers: { 'X-Custom': 'header' } }
);

// PUT
miruzero.zero.put('https://api.example.com/users/1', {
  name: 'MiruZero'
});

// DELETE
miruzero.zero.delete('https://api.example.com/users/1');
```

### สร้าง Instance ใหม่

```js
const api = miruzero.zero.create({
  baseURL: 'https://api.example.com',
  headers: { 'Authorization': 'Bearer token123' }
});

api.get('/users');      // → https://api.example.com/users
api.post('/login', { username: 'papa' });
```

### Configuration Options

```js
miruzero.zero.create({
  baseURL: 'https://api.example.com',     // URL ฐาน
  headers: { 'X-API-Key': 'xxx' },        // Headers คงที่
  params: { version: 'v1' },              // Query params คงที่
  timeout: 5000,                          // ยังไม่รองรับ (placeholder)
  withCredentials: true,                  // ส่ง cookies
  responseType: 'json',                   // 'json', 'text', 'stream'
  validateStatus: (status) => status < 500, // กำหนดเองว่า error คืออะไร
  transformRequest: [(data, headers) => {  // แปลง request ก่อนส่ง
    return JSON.stringify(data);
  }],
  paramsSerializer: (params) => {          // กำหนดเองวิธี serialize params
    return new URLSearchParams(params).toString();
  }
});
```

### Properties อื่น ๆ

| Property | คำอธิบาย |
|----------|---------|
| `miruzero.zero.defaults` | Config ค่าเริ่มต้น |
| `miruzero.zero.CancelToken` | AbortController (ถ้ารองรับ) |
| `miruzero.zero.all` | Promise.all |
| `miruzero.zero.spread` | ช่วยกระจาย array เป็น arguments |

```js
// ส่งหลาย request พร้อมกัน
miruzero.zero.all([
  miruzero.zero.get('/users'),
  miruzero.zero.get('/posts')
]).then(miruzero.zero.spread((users, posts) => {
  console.log(users.data, posts.data);
}));
```

---

## DOM API (ผ่าน jQuery ดั้งเดิม)

```js
// Selector
miruzero.$('#myId');
miruzero.jQuery('.myClass');

// Add / Remove Class
miruzero.$('#box').addClass('active');
miruzero.$('#box').removeClass('active');
miruzero.$('#box').toggleClass('active');

// Events
miruzero.$('#btn').on('click', function() {
  console.log('clicked!');
});

// HTML / Text
miruzero.$('#content').html('<b>Hello</b>');
miruzero.$('#content').text('Hello');

// AJAX ดั้งเดิมของ jQuery (ยังใช้ได้)
miruzero.$.ajax({
  url: '/api/data',
  method: 'GET',
  success: (data) => console.log(data)
});
```

---

## Response Object

```js
miruzero.zero.get('https://api.example.com/user')
  .then(res => {
    console.log(res.status);      // 200
    console.log(res.statusText);  // "OK"
    console.log(res.data);        // { id: 1, name: "Miru" }
    console.log(res.config);      // { url: "...", method: "GET" }
    console.log(res.headers);     // { get: fn, has: fn }
  });
```

---

## Frida / Java Runtime

MiruZero รองรับ Frida โดยมี fetch polyfill ในตัว ใช้ `java.net.HttpURLConnection` สื่อสารกับ Java runtime:

```js
// ใน Frida script
const miruzero = require('./lib/zero');

Java.perform(() => {
  miruzero.zero.get('http://localhost:8080/api')
    .then(res => console.log(JSON.stringify(res.data)));
});
```

---

## โครงสร้าง Object

```
miruzero
├── zero              // HTTP Client (Zero API)
│   ├── get(url, config?)
│   ├── post(url, data?, config?)
│   ├── put(url, data?, config?)
│   ├── patch(url, data?, config?)
│   ├── delete(url, config?)
│   ├── head(url, config?)
│   ├── options(url, config?)
│   ├── request(url, config?, method?, data?, credentials?)
│   ├── create(config)
│   ├── defaults
│   ├── all
│   ├── spread
│   └── CancelToken
├── jQuery            // jQuery ดั้งเดิม
└── $                 // Alias ของ jQuery
```

---

## License

MIT License — MiruZero Contributors

Built on top of jQuery 4.0.0
