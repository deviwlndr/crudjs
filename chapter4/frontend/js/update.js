// Ambil data dari URL
const urlParams = new URLSearchParams(window.location.search);
const idUser = urlParams.get("id_user");
// Ambil elemen formulir
const form = document.getElementById("contact-form");
const namaInput = document.getElementById("nama");
const npmInput = document.getElementById("npm");
const kelasInput = document.getElementById("kelas");
// Isi formulir dengan data dari server berdasarkan ID
fetch(`http://127.0.0.1:3000/api/belajar/${idUser}`)
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    const user = data.data;
    namaInput.value = user.nama;
    npmInput.value = user.npm;
    kelasInput.value = user.kelas;
  });
// Fungsi untuk mengirim data ke server
function updateData() {
  // Buat objek data yang akan dikirim ke server
  const data = {
    nama: namaInput.value,
    npm: npmInput.value,
    kelas: kelasInput.value,
  };
  // Buat konfigurasi untuk request
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  // Kirim request ke server
  fetch(`http://127.0.0.1:3000/api/belajar/${idUser}`, options)
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      alert("Data berhasil diupdate");
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error(error);
      alert("Data gagal diupdate");
    });
}
// Tambahkan event listener pada tombol Edit
const editButton = document.querySelector(".btn-success");
editButton.addEventListener("click", updateData);
