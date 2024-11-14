const daftarKaryawan = [
    {
    nama: "Devyn Ramirez",
    masaKerja: "10",
    nomorInduk: "1",
    gaji: "7.000.000"
},
{
    nama: "Harmony Duncan",
    masaKerja: "5",
    nomorInduk: "2",
    gaji: "4.000.000"
},
{
    nama: "Clarissa Burgess",
    masaKerja: "8",
    nomorInduk: "3",
    gaji: "7.000.000"
},
{
    nama: "Reilly Blanchard",
    masaKerja: "7",
    nomorInduk: "4",
    gaji: "7.000.000"
},
{
    nama: "Zion Brooks",
    masaKerja: "4",
    nomorInduk: "5",
    gaji: "4.000.000"
},
{
    nama: "Jovanny Mays",
    masaKerja: "10",
    nomorInduk: "6",
    gaji: "7.000.000"
},
{
    nama: "Cindy Chase",
    masaKerja: "9",
    nomorInduk: "7",
    gaji: "7.000.000"
},
{
    nama: "Kristin Mcdaniel",
    masaKerja: "8",
    nomorInduk: "8",
    gaji: "7.000.000"
},
{
    nama: "Macey Sanford",
    masaKerja: "7",
    nomorInduk: "9",
    gaji: "7.000.000"
},
{
    nama: "Alfredo Faulkner",
    masaKerja: "10",
    nomorInduk: "10",
    gaji: "7.000.000"
},
]

let mode= 'tambah'

const tampilkanKaryawan = () => {

// mengakses dom
const tabelKaryawan = document.getElementById('tabelKaryawan')
tabelKaryawan.innerHTML = `<tr><th>No</th><th>Nama</th><th>Masa Kerja</th><th>Nomor Induk</th><th>Gaji</th><th>Hapus</th><th>Edit</th></tr>`


    for (let index in daftarKaryawan){
        console.log(`${parseInt(index) + 1}. ${daftarKaryawan[index].nama} berkerja selama ${daftarKaryawan[index].masaKerja}tahun, nomor induk karyawannya ${daftarKaryawan[index].nomorInduk} dan mendapatkan gaji ${daftarKaryawan[index].gaji}`)
        // Isi
        tabelKaryawan.innerHTML += `<tr><td>${parseInt(index)+ 1}.</td><td>${daftarKaryawan[index].nama}</td><td>${daftarKaryawan[index].masaKerja}</td><td>${daftarKaryawan[index].nomorInduk}</td><td>${daftarKaryawan[index].gaji}</td><td><button class="btn btn-warning" onclick="editKaryawan('${daftarKaryawan[index].nomorInduk}')">edit</button></td><td><button class="btn btn-danger" onclick="hapusKaryawan('${daftarKaryawan[index].nomorInduk}')">Hapus</button></td></tr>`
    }
}

const tambahKaryawan = () => {
    const nama = document.getElementById('textNama').value
    const masaKerja = document.getElementById('textMasaKerja').value
    const nomorInduk = document.getElementById('textNomorInduk').value
    const gaji = document.getElementById('textGaji').value

    const karyawanBaru = {
        nama : nama,
        masaKerja: masaKerja,
        nomorInduk: nomorInduk,
        gaji: gaji,
    }

    //tambah
    if (mode == 'tambah'){
        daftarKaryawan.push(karyawanBaru)
    } else{
        daftarKaryawan[mode] = karyawanBaru
    }
    document.getElementById('textNama').value =""
    document.getElementById('textMasaKerja').value =""
    document.getElementById('textNomorInduk').value =""
    document.getElementById('textGaji').value =""

    mode = 'tambah'

    tampilkanKaryawan()

}

const cariKaryawan = (nomorInduk) => {
    // tampilkan index jika nama siswa == nama
    for (let i = 0; i < daftarKaryawan.length; i++){
        if (daftarKaryawan[i].nomorInduk == nomorInduk) 
            return i
    }
    return -1
}

const hapusKaryawan = (target) => {
    const karyawanDihapus = cariKaryawan(target)
    // menghapus elemen dari dalam array
    if (karyawanDihapus !== -1) {
    daftarKaryawan.splice(karyawanDihapus, 1)
    tampilkanKaryawan()
    }
}

const editKaryawan = (target) => {
    const karyawanEdit = cariKaryawan(target)
    const karyawanDiedit = daftarKaryawan[karyawanEdit];

    document.getElementById('textNama').value = karyawanDiedit.nama
    document.getElementById('textMasaKerja').value = karyawanDiedit.masaKerja
    document.getElementById('textNomorInduk').value = karyawanDiedit.nomorInduk
    document.getElementById('textGaji').value = karyawanDiedit.gaji
    
    mode = karyawanEdit
}

const cancel = () => {
    const nama = document.getElementById('textNama').value =""
    const masaKerja = document.getElementById('textMasaKerja').value =""
    const nomorInduk = document.getElementById('textNomorInduk').value =""
    const gaji = document.getElementById('textGaji').value =""

    mode = 'tambah'
}
    
//     daftarKaryawan[indexEdit] = {
//         nama: namaBaru,
//         masaKerja: masaKerjaBaru,
//         nomorInduk: nomorIndukBaru,
//         gajiKaryawan: gajiKaryawanBaru,
//     }
// }