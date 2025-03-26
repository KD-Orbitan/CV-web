const express = require('express');
const app = express();

app.use(express.static('public')); // Phục vụ file tĩnh (HTML, CSS, JS)

app.listen(3000, () => console.log('Server chạy tại http://localhost:3000'));