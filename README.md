# Gemini Chatbot API - AI Doctor Assistant

## Deskripsi

AI Doctor Assistant adalah aplikasi chatbot kesehatan yang menggunakan Google Gemini AI untuk memberikan panduan medis awal dan membantu diagnosis penyakit pasien. Aplikasi ini menyediakan antarmuka web sederhana untuk berinteraksi dengan AI yang dapat menjawab pertanyaan kesehatan dan memberikan saran umum.

**Peringatan:** Aplikasi ini memberikan informasi kesehatan umum dan bukan pengganti nasihat medis profesional. Selalu konsultasikan dengan dokter atau tenaga medis yang berkualifikasi untuk diagnosis dan pengobatan yang akurat.

## Fitur

- Chatbot interaktif dengan AI Gemini
- Antarmuka web responsif dengan tema kesehatan
- Dukungan untuk percakapan multi-turn
- Konfigurasi yang dapat disesuaikan melalui environment variables

## Prerequisites

- Node.js (versi 16 atau lebih baru)
- npm (biasanya sudah terinstall dengan Node.js)
- API Key Google Gemini (dapatkan dari [Google AI Studio](https://aistudio.google.com/))

## Instalasi

1. **Clone repository ini:**
   ```bash
   git clone git@github.com:laksanabima/gemini-chatbot-ai.git
   cd gemini-chatbot-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Setup environment variables:**
   - Salin file `.env.copy` menjadi `.env`:
     ```bash
     cp .env.copy .env
     ```
   - Edit file `.env` dan isi dengan informasi yang diperlukan:
     ```
     GEMINI_API_KEY=your_google_gemini_api_key_here
     PORT=3000
     AI_TEMPERATURE=0.9
     AI_SYSTEM_PROMPT=
     ```

## Menjalankan Aplikasi

1. **Jalankan server:**
   ```bash
   node index.js
   ```

2. **Buka browser:**
   - Kunjungi `http://localhost:3000` (atau port yang Anda konfigurasikan)
   - Anda akan melihat antarmuka chatbot AI Doctor Assistant

## Penggunaan

1. **Mulai percakapan:**
   - Ketik gejala, pertanyaan kesehatan, atau deskripsi kondisi medis di kolom input
   - Tekan tombol kirim (ikon pesawat kertas) atau tekan Enter

2. **Interaksi dengan AI:**
   - AI akan merespons dengan informasi kesehatan umum
   - Anda dapat melanjutkan percakapan untuk mendapatkan klarifikasi atau informasi tambahan

3. **Tips penggunaan:**
   - Jelaskan gejala secara detail untuk respons yang lebih akurat
   - Tanyakan tentang pencegahan, pengobatan umum, atau informasi kesehatan
   - Ingat bahwa AI ini bukan dokter; gunakan sebagai panduan awal saja

## Struktur Project

```
gemini-chatbot-api/
├── index.js              # Server Express utama
├── package.json          # Dependencies dan scripts
├── .env.copy             # Template environment variables
├── public/               # Static files untuk frontend
│   ├── index.html        # Halaman utama chatbot
│   ├── style.css         # Styling dengan tema kesehatan
│   └── script.js         # JavaScript untuk interaksi chat
└── README.md             # Dokumentasi ini
```

## Konfigurasi

Anda dapat menyesuaikan perilaku aplikasi melalui file `.env`:

- `GEMINI_API_KEY`: API key dari Google Gemini (wajib)
- `PORT`: Port server (default: 3000)
- `AI_TEMPERATURE`: Kreativitas respons AI (0.0-1.0, default: 0.7)
- `AI_SYSTEM_PROMPT`: Instruksi sistem untuk AI (default: prompt dokter AI)

## Troubleshooting

- **Error "API key not found"**: Pastikan `.env` file sudah dibuat dan `GEMINI_API_KEY` sudah diisi dengan key yang valid
- **Port sudah digunakan**: Ubah `PORT` di `.env` ke port lain
- **Server tidak start**: Pastikan Node.js terinstall dan jalankan `npm install` terlebih dahulu

## Dukungan

Jika Anda memiliki pertanyaan atau masalah, silakan buat issue di repository atau hubungi maintainer.

## Screenshoot App
<img src="https://i.ibb.co.com/0RrtgwgG/Screenshot-2026-03-13-at-21-41-22.png" alt="Screenshot-2026-03-13-at-21-41-22" border="0">
