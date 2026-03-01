const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Simpan data di memori sementara (array)
let dataDashboard = [];

// Endpoint buat nerima data dari n8n
app.post('/api/catat', (req, res) => {
    const { nama_user, jenis_barang, pertanyaan, estimasi } = req.body;

    if (estimasi && estimasi !== "Maaf, harga barang tidak ditemukan.") {
        dataDashboard.push({
            id: Date.now(),
            waktu: new Date().toLocaleString('id-ID'),
            nama_user,
            jenis_barang,
            pertanyaan,
            estimasi
        });
        console.log("✅ Data masuk dari n8n:", req.body);
        res.json({ status: "sukses" });
    } else {
        res.status(400).json({ status: "ditolak", pesan: "Harga tidak ditemukan" });
    }
});

// Endpoint buat ngirim data ke React
app.get('/api/data', (req, res) => {
    res.json(dataDashboard);
});

app.listen(3000, () => {
    console.log('🚀 Backend jalan di http://localhost:3000');
});