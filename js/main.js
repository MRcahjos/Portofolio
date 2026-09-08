/* =========================================================
   PORTOFOLIO — Script utama
   Berisi: konfigurasi profil, data CV, animasi UI,
   dan generator PDF ATS-friendly (jsPDF + fallback cetak)
========================================================= */

/* =========================================================
   1. KONFIGURASI PROFIL
   → Ganti nilai di bawah ini dengan data Anda.
   Nilai di sini otomatis dipakai di website DAN di PDF CV.
========================================================= */
const PROFILE = {
  name: "MUHAMMAD IQBAL",
  title: "Programmer & IT Professional",
  email: "muhammad.iqbal998363@gmail.com",
  phone: "+62 831-288-51226",
  location: "Kudus, Jawa Tengah, Indonesia",
  linkedin: "https://www.linkedin.com/in/mrcahjos/",
  github: "https://github.com/MRcahjos",
};

/* =========================================================
   2. DATA CV (dipakai untuk PDF download & versi cetak)
   Format ringkas satu kolom — ATS-friendly.
========================================================= */
const RESUME = {
  summary:
    "Programmer dan IT Professional dengan pengalaman di bidang IT Support, pengembangan aplikasi, " +
    "integrasi sistem, serta pengembangan Sistem Informasi Manajemen Rumah Sakit (SIMRS). " +
    "Terbiasa menangani permasalahan teknis hardware dan software, pengelolaan infrastruktur IT, " +
    "pengembangan aplikasi berbasis web, integrasi sistem dengan layanan eksternal (Satu Sehat, E-Klaim), " +
    "serta implementasi sistem sesuai kebutuhan dan regulasi rumah sakit. Melakukan analisis kebutuhan, " +
    "pengembangan fitur, integrasi, troubleshooting, pengujian, dan dokumentasi hingga aplikasi berjalan " +
    "sesuai kebutuhan pengguna.",

  experience: [
    {
      role: "Programmer",
      company: "Rumah Sakit 'Aisyiyah Kudus",
      period: "Mei 2025 - Sekarang",
      bullets: [
        "Mengembangkan dan memelihara aplikasi SIMRS untuk menunjang pelayanan dan administrasi rumah sakit.",
        "Mengembangkan modul Laboratorium, Radiologi, Fisioterapi, Hemodialisis, Instalasi Bedah Sentral (IBS), " +
          "Instalasi Gawat Darurat (IGD), Kasir Rumah Sakit, dan berbagai modul penunjang operasional lainnya.",
        "Terlibat mulai dari analisis kebutuhan pengguna, perancangan alur sistem, pengembangan fitur, " +
          "integrasi database, pengujian, troubleshooting, hingga implementasi sistem.",
        "Membangun bridging SIMRS dengan platform eksternal: Satu Sehat (Kementerian Kesehatan RI) dan E-Klaim BPJS.",
      ],
    },
    {
      role: "IT Support",
      company: "PT Sembilan Matahari Sakti",
      period: "Kontrak 4 Bulan",
      bullets: [
        "Melakukan pengecekan dan monitoring jaringan secara rutin serta menangani permasalahan teknis pengguna.",
        "Troubleshooting dan perbaikan perangkat komputer/laptop, printer, dan pengecekan perangkat keras.",
        "Instalasi, konfigurasi, dan troubleshooting software.",
        "Inventarisasi dan dokumentasi seluruh aset IT serta pembuatan log harian aktivitas IT Support.",
      ],
    },
  ],

  projects: [
    {
      name: "Integrasi Satu Sehat - Kementerian Kesehatan RI",
      meta: "Bridging SIMRS dengan platform Satu Sehat (modul Laboratorium dan Radiologi)",
      bullets: [
        "Implementasi komunikasi API dan mapping data internal SIMRS ke format yang dibutuhkan Satu Sehat.",
        "Implementasi resource berbasis FHIR serta pengelolaan identifier dan referensi antar-resource.",
        "Pengiriman data pasien, encounter, order pemeriksaan, dan hasil pemeriksaan pelayanan.",
        "Handling response dan error API, logging proses integrasi, serta troubleshooting error validasi server Satu Sehat.",
        "Penyesuaian implementasi dengan ketentuan dan spesifikasi integrasi yang berlaku.",
      ],
    },
    {
      name: "Smart Claim - Bridging E-Klaim BPJS",
      meta: "Aplikasi bridging SIMRS dengan sistem E-Klaim untuk klaim pasien BPJS",
      bullets: [
        "Pengembangan aplikasi bridging SIMRS dengan E-Klaim, termasuk pengolahan dan transformasi data pasien serta pelayanan.",
        "Integrasi dan pengiriman data klaim ke sistem E-Klaim beserta pengolahan response.",
        "Implementasi validasi data sebelum proses klaim, dokumentasi, dan logging proses integrasi.",
        "Berhasil lolos satu kali proses Onboarding E-Klaim dari Kementerian Kesehatan Republik Indonesia.",
      ],
    },
    {
      name: "Konsultan Teknis Bridging E-Klaim - Software House SIMRS",
      meta: "Konsultan bridging E-Klaim untuk SIMRS software house dan rumah sakit mitra",
      bullets: [
        "Analisis kebutuhan integrasi SIMRS dengan E-Klaim serta pemberian arahan teknis implementasi.",
        "Pengembangan dan troubleshooting proses bridging serta analisis error yang muncul.",
        "Memastikan format dan data yang dikirim sesuai ketentuan E-Klaim dan memenuhi persyaratan teknis.",
        "Membantu proses persiapan sistem untuk mengikuti proses Onboarding E-Klaim.",
      ],
    },
  ],

  skills: {
    "Software Development": [
      "Web Application Development",
      "Backend Development",
      "REST API Integration",
      "Database Management",
      "System Integration",
      "System Maintenance",
      "Troubleshooting",
    ],
    "Healthcare IT": [
      "SIMRS Development",
      "Satu Sehat Integration",
      "FHIR",
      "E-Klaim Integration",
      "BPJS Claim System",
      "Healthcare Data Integration",
      "Laboratory Information System",
      "Radiology Information System",
    ],
    "IT Support": [
      "Hardware Troubleshooting",
      "Software Troubleshooting",
      "Network Troubleshooting",
      "Printer Troubleshooting",
      "IT Asset Management",
      "IT Documentation",
      "User Technical Support",
    ],
    "Professional Skills": [
      "Problem Solving",
      "System Analysis",
      "Technical Documentation",
      "System Testing",
      "User Support",
      "Technical Consultation",
      "API Integration",
    ],
  },

  highlights: [
    "Berhasil lolos proses Onboarding E-Klaim dari Kementerian Kesehatan Republik Indonesia.",
    "Mengembangkan integrasi modul Laboratorium dan Radiologi dengan Satu Sehat Kemenkes RI (API dan FHIR).",
    "Mengembangkan aplikasi Smart Claim untuk bridging SIMRS dengan E-Klaim guna mendukung klaim pasien BPJS.",
    "Dipercaya sebagai konsultan teknis bridging E-Klaim untuk software house pengembang SIMRS.",
    "Mengembangkan 7+ modul SIMRS: Laboratorium, Radiologi, Fisioterapi, Hemodialisis, IBS, IGD, dan Kasir.",
    "Pengalaman lengkap dari IT Support hingga pengembangan dan integrasi sistem rumah sakit.",
  ],
};

/* =========================================================
   3. ISI DATA PROFIL KE HALAMAN
========================================================= */
function fillProfile() {
  document.querySelectorAll("[data-profile]").forEach((el) => {
    const key = el.getAttribute("data-profile");
    if (PROFILE[key]) el.textContent = PROFILE[key];
  });

  document.querySelectorAll("[data-profile-href]").forEach((el) => {
    const key = el.getAttribute("data-profile-href");
    const clean = (v) => String(v).replace(/^https?:\/\//, "");
    const map = {
      email: `mailto:${PROFILE.email}`,
      phone: `tel:${PROFILE.phone.replace(/[^+\d]/g, "")}`,
      linkedin: `https://${clean(PROFILE.linkedin)}`,
      github: `https://${clean(PROFILE.github)}`,
    };
    if (map[key]) el.href = map[key];
  });

  document.title = `${PROFILE.name} — ${PROFILE.title}`;
}

/* =========================================================
   4. EFEK TYPEWRITER DI HERO
========================================================= */
const ROLES = [
  "Programmer",
  "IT Professional",
  "System Integrator",
  "IT Support",
  "Technical Consultant",
];

function initTypewriter() {
  const el = document.getElementById("typewriter");
  if (!el) return;
  let roleIdx = 0,
    charIdx = 0,
    deleting = false;

  function tick() {
    const word = ROLES[roleIdx];
    charIdx += deleting ? -1 : 1;
    el.textContent = word.slice(0, charIdx);

    let delay = deleting ? 45 : 95;
    if (!deleting && charIdx === word.length) {
      delay = 1800;
      deleting = true;
    } else if (deleting && charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % ROLES.length;
      delay = 350;
    }
    setTimeout(tick, delay);
  }
  setTimeout(tick, 700);
}

/* =========================================================
   5. NAVBAR: scroll, menu mobile, link aktif
========================================================= */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  const onScroll = () =>
    navbar.classList.toggle("scrolled", window.scrollY > 30);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  hamburger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    hamburger.classList.toggle("open", open);
    hamburger.setAttribute("aria-expanded", String(open));
  });

  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    }),
  );

  // sorot link nav sesuai section yang terlihat
  const sections = document.querySelectorAll(
    "section[id], header[id], footer[id]",
  );
  const navObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        document
          .querySelectorAll(".nav-links a")
          .forEach((a) =>
            a.classList.toggle(
              "active",
              a.getAttribute("href") === `#${entry.target.id}`,
            ),
          );
      });
    },
    { rootMargin: "-40% 0px -55% 0px" },
  );
  sections.forEach((s) => navObs.observe(s));
}

/* =========================================================
   6. ANIMASI REVEAL SAAT SCROLL
========================================================= */
function initReveal() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
}

/* =========================================================
   7. GENERATOR PDF ATS-FRIENDLY (jsPDF)
   - Teks asli (bukan gambar) → bisa dibaca ATS
   - Satu kolom, font standar Helvetica, tanpa tabel/gambar
   - Heading section standar: Ringkasan, Pengalaman, Keahlian, dll.
========================================================= */
function buildPdfDoc() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

  const PAGE_W = 210,
    PAGE_H = 297;
  const M = 16; // margin (mm)
  const MAX_W = PAGE_W - M * 2; // lebar konten
  let y = M;

  const FONT = "helvetica";
  const COLOR_TEXT = [35, 40, 48];
  const COLOR_MUTED = [95, 103, 116];

  // tinggi baris (ukuran font pt → mm, dikali faktor leading)
  const lineH = (size) => size * 0.352778 * 1.32;

  function ensureSpace(needed) {
    if (y + needed > PAGE_H - M) {
      doc.addPage();
      y = M;
    }
  }

  function writeText(str, opts = {}) {
    const {
      size = 10,
      style = "normal",
      color = COLOR_TEXT,
      x = M,
      width = MAX_W,
      gapAfter = 0,
    } = opts;
    doc.setFont(FONT, style);
    doc.setFontSize(size);
    doc.setTextColor(color[0], color[1], color[2]);
    const h = lineH(size);
    const lines = doc.splitTextToSize(str, width);
    lines.forEach((line) => {
      ensureSpace(h);
      doc.text(line, x, y);
      y += h;
    });
    y += gapAfter;
  }

  function sectionHeading(title) {
    ensureSpace(18);
    y += 4.5;
    doc.setFont(FONT, "bold");
    doc.setFontSize(11);
    doc.setTextColor(...COLOR_TEXT);
    doc.text(title.toUpperCase(), M, y);
    y += 2.2;
    doc.setDrawColor(175, 185, 200);
    doc.setLineWidth(0.4);
    doc.line(M, y, PAGE_W - M, y);
    y += 4;
  }

  function entryHeading(title, subtitle) {
    ensureSpace(14);
    writeText(title, { size: 10.5, style: "bold", gapAfter: 0.3 });
    if (subtitle) {
      writeText(subtitle, {
        size: 9.5,
        style: "italic",
        color: COLOR_MUTED,
        gapAfter: 1.4,
      });
    } else {
      y += 1.2;
    }
  }

  function bullet(str) {
    const size = 10;
    doc.setFont(FONT, "normal");
    doc.setFontSize(size);
    doc.setTextColor(...COLOR_TEXT);
    const h = lineH(size);
    const BX = M + 3; // posisi bullet
    const TX = M + 7.5; // posisi teks (hanging indent)
    const lines = doc.splitTextToSize(str, MAX_W - (TX - M));
    lines.forEach((line, i) => {
      ensureSpace(h);
      if (i === 0) doc.text("\u2022", BX, y);
      doc.text(line, TX, y);
      y += h;
    });
    y += 0.7;
  }

  /* ----- Header CV ----- */
  writeText(PROFILE.name, { size: 17, style: "bold", gapAfter: 0.6 });
  writeText(PROFILE.title.toUpperCase(), {
    size: 10.5,
    style: "bold",
    color: [25, 70, 125],
    gapAfter: 1.4,
  });

  const contactLine = [PROFILE.email, PROFILE.phone, PROFILE.location]
    .filter(Boolean)
    .join("  |  ");
  writeText(contactLine, { size: 9.5, color: COLOR_MUTED, gapAfter: 0.3 });

  const linkLine = [PROFILE.linkedin, PROFILE.github]
    .filter(Boolean)
    .join("  |  ");
  if (linkLine)
    writeText(linkLine, { size: 9.5, color: COLOR_MUTED, gapAfter: 1 });

  /* ----- Ringkasan Profesional ----- */
  sectionHeading("Ringkasan Profesional");
  writeText(RESUME.summary, { gapAfter: 1 });

  /* ----- Pengalaman Profesional ----- */
  sectionHeading("Pengalaman Profesional");
  RESUME.experience.forEach((e) => {
    entryHeading(`${e.role} — ${e.company}`, e.period);
    e.bullets.forEach(bullet);
    y += 1.5;
  });

  /* ----- Proyek & Integrasi Utama ----- */
  sectionHeading("Proyek & Integrasi Utama");
  RESUME.projects.forEach((p) => {
    entryHeading(p.name, p.meta);
    p.bullets.forEach(bullet);
    y += 1.5;
  });

  /* ----- Keahlian ----- */
  sectionHeading("Keahlian");
  Object.entries(RESUME.skills).forEach(([category, items]) => {
    writeText(`${category}:`, { size: 10, style: "bold", gapAfter: 0.2 });
    writeText(`${items.join(", ")}.`, { gapAfter: 1.4 });
  });

  /* ----- Prestasi Utama ----- */
  sectionHeading("Prestasi Utama");
  RESUME.highlights.forEach(bullet);

  return doc;
}

/* =========================================================
   8. VERSI CETAK (fallback offline: Ctrl+P → Save as PDF)
========================================================= */
function buildPrintResume() {
  const host = document.getElementById("print-resume");
  if (!host || host.dataset.built === "1") return;

  const contact = [PROFILE.email, PROFILE.phone, PROFILE.location]
    .filter(Boolean)
    .join(" | ");
  const links = [PROFILE.linkedin, PROFILE.github].filter(Boolean).join(" | ");

  const expHtml = RESUME.experience
    .map(
      (e) => `
    <h3>${e.role} — ${e.company}</h3>
    <p class="pr-sub">${e.period}</p>
    <ul>${e.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
  `,
    )
    .join("");

  const projHtml = RESUME.projects
    .map(
      (p) => `
    <h3>${p.name}</h3>
    <p class="pr-sub">${p.meta}</p>
    <ul>${p.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
  `,
    )
    .join("");

  const skillsHtml = Object.entries(RESUME.skills)
    .map(
      ([cat, items]) => `<p><strong>${cat}:</strong> ${items.join(", ")}.</p>`,
    )
    .join("");

  const highlightHtml = `<ul>${RESUME.highlights.map((h) => `<li>${h}</li>`).join("")}</ul>`;

  host.innerHTML = `
    <h1>${PROFILE.name}</h1>
    <p class="pr-role">${PROFILE.title}</p>
    <p class="pr-contact">${contact}</p>
    ${links ? `<p class="pr-contact">${links}</p>` : ""}
    <h2>Ringkasan Profesional</h2>
    <p>${RESUME.summary}</p>
    <h2>Pengalaman Profesional</h2>
    ${expHtml}
    <h2>Proyek &amp; Integrasi Utama</h2>
    ${projHtml}
    <h2>Keahlian</h2>
    ${skillsHtml}
    <h2>Prestasi Utama</h2>
    ${highlightHtml}
  `;
  host.dataset.built = "1";
}

function printCV() {
  buildPrintResume();
  window.print();
}

/* =========================================================
   9. DOWNLOAD CV — jsPDF jika tersedia, fallback cetak
========================================================= */
function downloadCV() {
  if (window.jspdf && window.jspdf.jsPDF) {
    try {
      const doc = buildPdfDoc();
      const safeName =
        PROFILE.name.replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-+|-+$/g, "") ||
        "Portofolio";
      doc.save(`CV ${safeName} (ATS-Friendly).pdf`);
      return;
    } catch (err) {
      console.error("Gagal membuat PDF, beralih ke mode cetak:", err);
    }
  }
  // Fallback offline: dialog cetak → tujuan "Save as PDF"
  printCV();
}

/* =========================================================
   10. INISIALISASI
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  fillProfile();
  initTypewriter();
  initNavbar();
  initReveal();

  document
    .querySelectorAll("[data-cv-download]")
    .forEach((btn) => btn.addEventListener("click", downloadCV));
  document
    .querySelectorAll("[data-cv-print]")
    .forEach((btn) => btn.addEventListener("click", printCV));

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
