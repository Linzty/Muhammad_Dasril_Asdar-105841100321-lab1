# $${\color{red}Red}$$

Aplikasi ini merupakan aplikasi mobile menggunakan React Native untuk platform Android

## Fitur-fitur Utama

### 1. **Navigasi**

- Menggunakan `@react-navigation/native` untuk navigasi antar layar.
- Terdapat stack navigator untuk halaman sign up, login, forgot password, dan main navigation.

### 2. **Halaman Sign Up**

- Halaman untuk pengguna baru mendaftar.
- Input validasi untuk nama lengkap, email, dan password.
- Penyimpanan email dan password menggunakan `AsyncStorage`.
- Validasi email menggunakan ekspresi reguler.

### 3. **Halaman Login**

- Halaman untuk pengguna login.
- Input validasi untuk email dan password.
- Penyimpanan email dan password menggunakan `AsyncStorage`.
- Validasi email menggunakan ekspresi reguler.
- Pengalihan ke halaman utama setelah login berhasil.

### 4. **Halaman Forgot Password**

- Halaman untuk pengguna yang lupa password.
- Input validasi untuk email.
- Mengirimkan email untuk mengatur ulang password.
- Pengalihan ke halaman login setelah proses pengaturan ulang password selesai.

### 5. **Navigasi Utama (Tab Navigator)**

- Tab navigator untuk navigasi antara halaman utama: Home, Merch, Team, dan Profile.
- Masing-masing tab memiliki ikon dan label yang berbeda.
- Tampilan tab berubah warna saat dipilih.

### 6. **Komponen UI**

- Berbagai komponen UI seperti tombol, input, dan pesan toast digunakan secara konsisten.

### 7. **Assets**

- Penggunaan berkas gambar untuk logo dan ikon pada halaman-halaman tertentu.
- Font kustom digunakan dengan menggunakan `expo-font`.
