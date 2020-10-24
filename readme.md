# Coding on Cloud

## Table of Content
1. [Development Environment](#development-environment)
1. [Common Environment](#common-environment)
1. [Apa itu Cloud Shell](#apa-itu-cloud-shell)
1. [Demo Coding on Cloud Shell](#demo-coding-on-cloud-shell)
1. [Limitasi Cloud Shell](#limitasi-cloud-shell)
1. [References](#references)

### Disclaimer:
Bagi yang ingin melihat sekilas ini tentang apa (tanpa demo), dapat dilihat di sini
yah.
[Slide Cloud Shell](https://docs.google.com/presentation/d/1VRqML7jh32zmvi16VH67bg-Ciaw8ZtSZrvghB9fDULY)

Mari kita mulai membahas tentang artikel ini.

## Development Environment
Development Environment dapat diartikan sebagai sebuah kumpulan dari alat alat yang
digunakan dalam mengembangkan sebuah aplikasi atau program.

## Common Environment
Lalu setelah kita mengetahui apa itu `development environment`, bagaimana cara kita secara umumnya
dalam membuat `development environment` kita sendiri?

Umumnya, urutannya adalah seperti ini:
- Membeli (atau dikasih kantor) sebuah PC / Laptop
- Memasang Sistem Operasi yang direkomendasikan oleh tempat kita bernaung (mis. Linux)
- Memasang IDE / Text Editor dan Tools Lainnya
- Memasang Runtime yang dibutuhkan (mis. nodejs)
- Meng-*set* `Environment Variable` / `Path` yang dibutuhkan
- Memasang Database (apabila dibutuhkan)
- (Trend Kekinian) Memasang Container Runtime dan Tools yang dibutuhkan (mis. Docker)
  ![common-runtime](assets/image0.png)

*Nah*, apa masalah yang dihadapi ketika melakukan hal seperti ini?
- Untuk bisa memasang sistem operasi, dibutuhkan keahlian khusus, apalagi yang menginginkan Sistem
  Operasi lamanya tetap ada (mis. Windows dan Linux)
- Memasang runtime dan set `environment variable` membutuhkan waktu untuk baca dokumentasi
- Memasang container runtime (khususnya pada non Sistem Operasi Linux) membutuhkan perangkat keras
  dengan spesifikasi yang cukup mumpuni
- Memiliki PC / Laptop dengan spesifikasi yang ***KENTANG*** namun ingin menjalankan runtime yang
  membutuhkan spesifikasi yang cukup tinggi.
    - Sebagai contoh VSCode + nodejs + postgres + pgAdmin4 dengan membuka *Browser* 5 *Tab* 
      pada sistem operasi Windows membutuhkan RAM > 4 GB.
    - Apabila dengan kondisi seperti di atas, kita hanya memiliki spesifikasi Laptop dengan RAM 4GB
      saja, maka tentunya akan cukup terkendala menghadapi kondisi di atas.

Kemudian sekarang pertanyaannya adalah:
```
Bagaimana caranya kita menyelesaikan kondisi di atas?
```

Salah satunya adalah dengan pertanyaan berikut:
```
Bagaimana bila seandainya kita bisa memindahkan sumber daya / spesifikasi yang dibutuhkan di atas
ke dunia `awan` *cloud computing* ?

Sehingga kita hanya butuh untuk membuka browser saja dan kita sudah bisa memulai mengembangkan aplikasi kita?
```

Sebenarnya sudah ada beberapa solusi atas jawaban di atas:
- Codespaces by Github (Beta, invitation only)
- Gitpod.io (Berbayar, versi Free hanya 50 Jam per Bulan)
- Cloud Shell by Google Cloud Platform

Pada artikel ini yang akan dibahas adalah dengan menggunakan Cloud Shell by Google Cloud Platform
(GCP) atau selanjutnya disebut dengan `Cloud Shell` saja

## Apa itu Cloud Shell
Sebelum mengetahui apa itu Cloud Shell, ada baiknya kita mengetahui apa itu GCP terlebih dahulu.

GCP adalah layanan penyedia *cloud computing* yang berasal dari perusahaan aplikasi mesin pencari 
yang besar di dunia, **Google**.

Cloud Shell, menurut GCP sendiri, adalah sebuah mesin administrasi yang dikurasikan oleh Google 
sendiri yang memiliki akses terhadap sumber daya GCP yang *powerful*, aman secara *default*, dengan
berbagai macam tools yang telah disediakan dan siap untuk digunakkan.

![sneak-peek-cloudshell](assets/image1.gif)

**Disclaimer**  
Contoh di atas hanya menjelaskan operating system Linux nya saja, belum menjelaskan
penuh tentang Editor yang akan dibahas pada saat demo.

Secara sederhananya, dari kacamata developer, adalah
```
Sebuah sistem operasi Linux, yang sudah memiliki banyak tools dan runtime yang terpasang dan siap
digunakan untuk mengembangkan aplikasi.
```

Tools apa sajakah yang sudah tersedia di dalam Cloud Shell ?
(Untuk list lengkap dapat dilihat di [sini](https://cloud.google.com/shell/docs/how-cloud-shell-works))

| Tipe | Tool |
| ---- | ---- |
| Linux Shell | bash |
| | sh   |
| Linux Utiliies | Utilities standar Debian |
| Text Editors | Emacs |
| | vim |
| | nano |
| Tools Pengembangan | npm |
| | nvm |
| | pip |
| | composer |
| Versioning | git |
| | mercurial |
| Tambahan | docker |
| | MySQL Client |

Nah dengan tools seperti ini (yang terlihat cukup terbatas ini) 
apa sajakah yang dapat kita lakukan?

*Yuk* kita coba melihat demo untuk melakukan pengembangan aplikasi sederhana dengan
Cloud Shell.

## Demo Coding on Cloud Shell

## Limitasi Cloud Shell

## References
- [Techopedia - Development Environment Definition](https://www.techopedia.com/definition/16376/development-environment)
- [Available Tools - Cloud Shell](https://cloud.google.com/shell/docs/how-cloud-shell-works)