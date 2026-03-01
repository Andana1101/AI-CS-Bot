# 🤖 AI Agent Customer Service - Simulasi Gadai

Sistem AI Agent berbasis n8n untuk mensimulasikan layanan Customer Service Gadai Emas dan Elektronik. Proyek ini mengintegrasikan Large Language Model (LLM) dengan Vector Database (RAG) dan dilengkapi dengan *dashboard monitoring* secara *real-time*.

## 🏗️ Arsitektur Sistem
1. **Frontend / Channel:** Telegram Bot API
2. **Orkestrasi AI:** n8n Workflow Automation (Docker)
3. **LLM Engine:** Groq API (Llama-3.3 / Llama-3-8b) / Google Gemini Chat Model (Flash 2.5)
4. **Vector Store:** Qdrant & Ollama Embeddings (bge-m3) untuk RAG Data Elektronik.
5. **Backend:** Node.js (Express.js) untuk mencatat log estimasi.
6. **Dashboard:** React.js + Bootstrap 5.

## ⚙️ Cara Setup & Menjalankan

### 1. Menjalankan Dashboard & Backend
- Buka terminal di folder `gadai-backend`, jalankan: `npm install` lalu `node server.js` (berjalan di port 3000).
- Buka terminal di folder `gadai-frontend`, jalankan: `npm install` lalu `npm run dev`.

### 2. Setup Workflow n8n
1. Pastikan n8n dan Qdrant sudah berjalan di environment Docker.
2. Import file `AI_Engineer_Test.json` ke dalam workspace n8n.
3. Konfigurasi *Credentials* untuk Telegram Trigger, Groq API, dan Qdrant Vector Store.
4. Aktifkan workflow (ubah ke mode Active).

## 💬 Contoh Skenario Percakapan
**Skenario Gadai Emas:**
> **User:** Halo, saya mau gadai emas.
> **AI:** Baik, kami dengan senang hati membantu Anda. Berapa gram emas yang Anda ingin gadaikan?
> **User:** 2 gram.
> **AI:** Berdasarkan harga emas hari ini, total estimasi untuk menggadaikan 2 gram emas adalah sebesar Rp 2.900.000. Apakah Anda ingin melanjutkan proses gadai?

**Skenario Gadai Elektronik (Tidak Ditemukan):**
> **User:** Elektronik
> **AI:** Baik, jenis barang elektronik apa yang ingin Anda gadaikan dan di wilayah mana Anda berdomisili?
> **User:** Kamera Nikon D700 di Jakarta
> **AI:** Maaf, harga barang tidak ditemukan.

---
**Catatan:** Saat ini bot dan webhook berjalan pada Local Machine/Docker. Silakan *import* file n8n JSON yang tersedia untuk melakukan testing di environment Anda, atau hubungi saya jika ingin menjadwalkan *live testing* agar *server local* dapat saya nyalakan.
