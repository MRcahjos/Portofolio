# Portofolio — Programmer & IT Professional

Website portofolio pribadi (HTML + CSS + JS murni, tanpa framework) dengan fitur
**download CV dalam format PDF ATS-friendly**.

## Struktur

```
MyPorto/
├── index.html      # Struktur halaman
├── css/style.css   # Seluruh styling (termasuk versi cetak CV)
├── js/main.js      # Konfigurasi profil, data CV, animasi, generator PDF
└── README.md
```

## Cara Pakai

Buka `index.html` langsung di browser (double-click) — tidak perlu server.
Untuk deploy, upload ketiga folder/file ini ke hosting statik apa pun
(Netlify, Vercel, GitHub Pages, dsb).

## Edit Data Diri (PENTING)

Semua data pribadi ada di **satu tempat**: objek `PROFILE` di bagian atas
`js/main.js`. Ganti nilai berikut dengan data Anda:

```js
const PROFILE = {
  name: "Nama Lengkap Anda",
  title: "Programmer & IT Professional",
  email: "email.anda@contoh.com",
  phone: "+62 812-3456-7890",
  location: "Kudus, Jawa Tengah, Indonesia",
  linkedin: "linkedin.com/in/username-anda",
  github: "github.com/username-anda",
};
```

Nilai di objek ini otomatis tampil di website **dan** di PDF CV.

Isi CV (ringkasan, pengalaman, proyek, keahlian, prestasi) ada di objek `RESUME`
di bawahnya — juga dipakai untuk PDF dan versi cetak.

## Download CV (PDF ATS-Friendly)

Tombol **"Download CV (PDF — ATS-Friendly)"** bekerja dengan dua cara:

1. **Online** — library jsPDF (via CDN) membuat PDF langsung ter-download.
2. **Offline / CDN gagal** — otomatis fallback ke dialog cetak browser;
   pilih tujuan **"Save as PDF"**. Layout cetaknya sudah khusus ATS.

### Kenapa ATS-Friendly?

- PDF berisi **teks asli** (bukan hasil screenshot/gambar) sehingga bisa
  di-parsa sistem ATS (Applicant Tracking System).
- Layout **satu kolom**, font standar (Helvetica/Arial), tanpa tabel,
  tanpa gambar, tanpa grafik.
- Struktur section standar: Ringkasan Profesional → Pengalaman Profesional →
  Proyek → Keahlian → Prestasi.
- Kontak ditulis sebagai teks biasa di bagian atas.

## Menambah Pendidikan/Sertifikasi (opsional)

Tambahkan di objek `RESUME` pada `js/main.js` (mis. array `education`),
lalu render di `buildPdfDoc()` dan `buildPrintResume()`.
