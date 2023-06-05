// Ambil elemen formulir
const form = document.getElementById("contact-form");
const namaInput = document.getElementById("nama");
const npmInput = document.getElementById("npm");
const kelasInput = document.getElementById("kelas");
// Tambahkan event listener pada tombol "Input Data"
const inputButton = document.querySelector(".btn-success");
inputButton.addEventListener("click", () => {
  // Ambil nilai input dari formulir
  const nama = namaInput.value;
  const npm = npmInput.value;
  const kelas = kelasInput.value;
  // Validasi input
  if (!nama || !npm || !kelas) {
    alert("Silakan lengkapi semua field");
    return;
  }
  // Buat objek data yang akan dikirim ke server
  const data = {
    nama: nama,
    npm: npm,
    kelas: kelas,
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
