Security and Authentication

1. Section Intro 0:53
2. Setting Up The User Model 17:58
3. JWTs and Hashing 19:32 (Json Web Token) || 'https://jwt.io/'
4. Generating Auth Tokens and Setting Headers 16:45
5. Private Routes and Auth Middleware 18:45
6. Hashing Passwords 16:43
7. Seeding Test Database With Users 13:47
8. Testing POST /users and GET /users/me 17:35
9. Logging In - POST /users/login 16:52
10. Testing POST /users/login 9:35
11. Logging Out - DELETE /users/me/token 7:58
12. Testing DELETE /users/me/token 7:19
13. Making Todo Routes Private (Part 1) 11:36
14. Making Todo Routes Private (Part 2) 16:33
15. Improving App Configuration 17:47
16. Deploying To Heroku 9:37
17. Bonus: Advanced Postman 

instal package;
1. npm install validator --save 'https://www.npmjs.com/package/validator'
2. npm install crypto-js --save 'https://www.npmjs.com/package/crypto-js'
3. npm install jsonwebtoken --save 'https://www.npmjs.com/package/jsonwebtoken'
4. npm install bcrypt --save 'https://www.npmjs.com/package/bcryptjs'

Heroku: 
1. heroku create 'https://git.heroku.com/cryptic-eyrie-14160.git'
2. git push heroku
3. heroku config
4. heroku config:set NAME=Andrew

Document:
1. Schematypes: 'http://mongoosejs.com/docs/2.7.x/docs/schematypes.html'
2. Custom validator: 'http://mongoosejs.com/docs/validation.html'
3. JWT: 'https://jwt.io/introduction/'
4. middleware-mongoose : 'http://mongoosejs.com/docs/middleware.html'

Catatan penjelasan Module:
1. Crypto-js 'https://en.wikipedia.org/wiki/Cryptography'
    - CryptoJS adalah kumpulan algoritma kriptografi standar dan aman yang diimplementasikan dalam JavaScript dengan menggunakan praktik dan pola terbaik. 
    - Mereka cepat, dan mereka memiliki antarmuka yang konsisten dan sederhana.

Apa itu Encoding, Obfuscation, Hashing dan Encryption??

2. Hashing 'https://en.wikipedia.org/wiki/Cryptographic_hash_function'
    - Tugas utama Hashing adalah untuk memastikan integritas (keutuhan). 
    - Maksudnya seperti apa ya? Contohnya, kita ada sebuah file. 
        - Dengan di-Hashing kita akan memdapatkan nilai tertentu sebagai bagian integritas file tersebut. 
        - Apabila file itu dirubah, maka nilainya tidak akan sama lagi dengan Hashing pertama. 
        - Jadi kita bisa tahu ini bukan file yang sama, ini yang kita sebuat integritas dari sebuah file. 
        - Kita bisa lihat cara ini digunakan oleh Git.
    - Penerapan umum dari Hashing ini terlihat pada saat kita melakukan Authentication. 
    - Pada saat kita login, yang dikirim ke server adalah hash yang akan dibandingkan dengan hash yang sudah ada di server. 
    - Jadi kita tidak pernah mengirim user-name dan password lewat jaringan, yang ada kemungkinan disadap.
    - Dan cara yang sama ketika kita mengirim pesan yang sudah sudah di-Encryption dengan private-key. 
    - Kita kirim pesan itu disertai private-key yang di-hash. 
    - Di sisi server hash itu dicocokan dengan yang ada di-server. 
    - Kalau valid maka paket itu akan bisa dibuka
    - Banyak algoritma untuk melakukan Hashing, seperti SHA, MD5, bycrpt dan lainnya. 
    - Dengan kemajuan hardware dan trik baru dalam math banyak dari algoritma ini sudah bisa di akali. 
    - Tetap waspada juga.

3. Encoding 'https://en.wikipedia.org/wiki/Character_encoding'

    - Tujuan Encoding adalah mengubah data yang dapat digunakan oleh berbagai macam sistim secara tepat dan aman.
    - Seperti mengirimkan data yang berbentuk biner lewat email (seperti attachment), menyimpan data biner ke dalam database atau menampilkan karakter-karakter special pada halaman web atau media lainnya. 
    - Biasanya data itu diterjemahkan kedalam karakter sesuai dengan tipe yang digunakan.
    - Fokusnya pada bagaimana mengubah data dari satu sistem ke sistem lain secara benar. 
    - Datanya sendiri tidak disandikan, jadi datanya seperti apa adanya hanya bentuknya berbeda. 
    - Pada saat proses melakukan Encoding biasanya akan digunakan cara yang sudah tersedia secara umum. 
    - Jadi data diubah oleh algoritma yang sama, baik untuk merubah atau mengembalikan lagi data itu seperti semula. Semua itu dilakukan tanpa perlu adanya kunci, asal tahu algoritma mana yang digunakan. Data yang sudah di-Encoding akan bisa di-Decoding.

Ada banyak algoritma Encoding, seperti ASCII, Unicode, URL Encoding, Base64 dan lainnya. Yang paling sering kita lihat adalah Base64. Dari email, http sampai dalam database banyak menggunakan ini.

4. Obfuscation 'https://en.wikipedia.org/wiki/Obfuscation'

Arti kata Obfuscation sendiri berarti membingungkan, yang dimaksud membuat sesuatu tidak mudah dimengerti. Ia bukan mengacak tanpa aturan. Ia akan membuat sebuah pesan menjadi sulit dibaca dan mengerti. Tujuannya ketika pesan itu berada di orang yang tidak mengerti cara membacanya maka pesan itu hanyalah pesan sampah.

    Another person junk is another person gold.

Dalam pemograman cara ini juga banyak dipakai dalam source-code maupun yang berbentuk biner. Ini dilakukan agar orang lain tidak mudah mereplika ke dalam bentuk yang lain. Bukan berarti tidak bisa hanya lebih sulit dan butuh waktu lebih, Reverse-Engineering sekarang banyak tool yang mempercepat proses itu.

Biasanya cara ini dibuat agar manusia akan kesulitan memahami pesan yang sudah di-Obfuscation tapi tidak dengan mesin. Seperti pada kode C dibawah.

Kompiler tetap dapat membaca dan melaksanakan tugasnya, sedangkan kita jadi malas bacanya. Banyak aplikasi untuk melakukan ini, seperti JSFuck, Jscrambler, Dotfuscator, ionCube dan lainnya.

Kalau ini dianggap lebih aman, pikirkan lagi. Obfuscation ini mirip Encoding tapi tidak atau melakukannya secara manual untuk me-DeObfuscation. Ia menyulitkan manusianya saja tapi tidak mesin.

5. Encryption 'https://en.wikipedia.org/wiki/Encryption'

Encryption adalah cara megubah data menjadi data tidak dapat dibaca tanpa potongan kode (baca: key)-nya. Dengan begitu pesan tersebut hanya bisa dibaca oleh orang yang memiliki pesan yang integritasnya valid dan memiliki key-nya.

Prosesnya terlihat sederhana. Sebuah pesan dikonjugsikan dengan algoritma dan key yang akan menghasilkan pecahan karakter yang cukup rumit. Untuk membaca pesan itu, akan sama kita perlu key, algoritma dan pesan yang ter-Encryption. Mirip seperti Encoding alurnya, tapi key diperlukan dan memainkan peranan penting.

Dalam beberapa algoritma, biasanya juga ditambahkan Hashing sebagai bagian prosesnya. Pilihannya juga banyak, dari AES, Blowfish, RSA dan lainnya.

6. Penutup

Dalam Cryptography baik secara teori dan prakteknya adalah tentang keamanan berkomunikasi. Yang melibatkan bagaimana cara melakukan itu dan memastikan tidak ada siapapun dapat membaca pesan pribadi tersebut. Dari aspek keamanan data, integritasnya, siapa penggunanya dan teknik yang bersangkutan (dari math, computer-science dan electrical-engineering). Dan untuk sekarang ini adalah luas sekali penggunaan Cryptography ini, terutama yang berhubungan dengan dunia bisnis.

Setelah melihat penjabaran diatas yang berhubungan langsung dengan Cryptography adalah Hashing dan Encryption. Bukan berarti Encoding dan Obfuscation tidak penting disini. Dalam beberapa kesempatan ke empat yang kita bahas tadi bekerja sama sesuai dengan kebutuhannya.

7. bcrypt
    - Dioptimalkan bcrypt di JavaScript dengan nol dependensi. 
    - Kompatibel dengan C ++ bcrypt yang mengikat node.js dan juga bekerja di browser.
    - Pertimbangan keamanan
        - Selain menggabungkan garam untuk melindungi terhadap serangan meja pelangi, bcrypt adalah fungsi adaptif: dari waktu ke waktu, jumlah iterasi dapat ditingkatkan untuk membuatnya lebih lambat, sehingga tetap tahan terhadap serangan pencarian brute force bahkan dengan meningkatnya daya komputasi. (https://en.wikipedia.org/wiki/Bcrypt)
        - Sementara bcrypt.js kompatibel dengan binding C ++ bcrypt, ditulis dalam JavaScript murni dan dengan demikian lebih lambat (sekitar 30%), secara efektif mengurangi jumlah iterasi yang dapat diproses dalam rentang waktu yang sama.
        - Panjang input maksimum adalah 72 byte (perhatikan bahwa karakter yang dikodekan UTF8 menggunakan hingga 4 byte) dan panjang hash yang dihasilkan adalah 60 karakter.

file Image:
1. 'https://commons.wikimedia.org/w/index.php?curid=11283379'
2. 'https://commons.wikimedia.org/w/index.php?curid=1118913'
3. 'https://commons.wikimedia.org/w/index.php?curid=55022625'
4. 'http://www.freepik.com/free-photos-vectors/food'