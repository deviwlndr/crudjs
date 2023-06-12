// Ambil elemen formulir
const form = document.getElementById("contact-form");
const namaInput = document.getElementById("nama");
const npmInput = document.getElementById("npm");
const judulInput = document.getElementById("judul");
// Tambahkan event listener pada tombol "Input Data"
const inputButton = document.querySelector(".btn-success");
inputButton.addEventListener("click", () => {
  // Ambil nilai input dari formulir
  const nama = namaInput.value;
  const npm = npmInput.value;
  const judul = judulInput.value;
  // Validasi input
  if (!nama || !npm || !judul) {
    alert("Silakan lengkapi semua field");
    return;
  }
  // Buat objek data yang akan dikirim ke server
  const data = {
    nama: nama,
    npm: npm,
    judul: judul,
  };
  // Kirim permintaan POST ke server untuk menambahkan data
  fetch("http://127.0.0.1:3000/api/belajar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Sukses:", result);
      alert("Data berhasil ditambahkan!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat menambahkan data.");
    });
});
