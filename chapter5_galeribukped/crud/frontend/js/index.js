fetch("http://127.0.0.1:3000/api/belajar")
	.then((result) => {
		return result.json();
	})
	.then((data) => {
		let tableData = "";
		data.data.map((values) => {
			// Manipulasi data pegawai dan masukkan ke dalam bentuk tabel
			tableData += `
                <tr>
				<td>${values.id_user}</td>
                <td>${values.nama}</td>
                <td>${values.npm}</td>
                <td>${values.judul}</td>
                <td>
                <button type="button" class="btn btn-success" belajar-id="${values.id_user}">Edit</button>
                <button type="button" class="btn btn-danger" belajar-id="${values.id_user}">Delete</button>
              </td>
                </tr>`;
		});
		// Tampilkan data pegawai ke dalam tabel
		document.getElementById("index-table").innerHTML = tableData;

		// Tambahkan event listener pada setiap tombol delete
		const deleteButtons = document.querySelectorAll('.btn-danger');
		deleteButtons.forEach((button) => {
			button.addEventListener('click', (event) => {
				const id_user = event.target.getAttribute('belajar-id');
				// Kirim permintaan DELETE ke server
				fetch(`http://127.0.0.1:3000/api/belajar/${id_user}`, {
					method: 'DELETE'
				})
                .then((response) => {
                    if (response.ok) {
                        // Sukses menghapus data, lakukan tindakan sesuai kebutuhan (misalnya, memperbarui tampilan tabel)
                        // Contoh:
                        event.target.parentNode.parentNode.remove(); // Menghapus baris tabel yang sesuai dengan tombol delete yang diklik
                    } else {
                        // Gagal menghapus data, berikan umpan balik kepada pengguna atau tangani kesalahan
                        throw new Error('Gagal menghapus data');
                    }
                })
                .catch(error => {
                    console.log('error', error);
                    alert('Terjadi kesalahan pada server');
                });
        });
    });

    // Tambahkan event listener pada setiap tombol detail
    const detailButtons = document.querySelectorAll('.btn-success');
    detailButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const id_user = event.target.getAttribute('belajar-id');
            window.location.href = `update.html?id_user=${id_user}`;
        });
    });
})
.catch(error => {
    console.log('error', error);
    alert('Terjadi kesalahan pada server');
});