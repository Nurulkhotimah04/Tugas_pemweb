const products = [{
        name: "Beras Sovia",
        description: "Beras Sovia dikenal sebagai beras premium dengan tekstur pulen dan aroma yang khas.",
        price: "Rp90.000",
        image: "assets/img_products/sembako/beras.png",
        category: "SEMBAKO",
    },
    {
        name: "Gula Pasir",
        description: "Gula Pasir murni yang sempurna untuk manisan dan kue.",
        price: "Rp13.500 / Rp16.000",
        image: "assets/img_products/sembako/gula pasir2.png",
        category: "SEMBAKO",
    },
    {
        name: "Beras Bunga Premium",
        description: "Beras bunga yang memiliki aroma yang harum rasa yang lembut.",
        price: "Rp80.000",
        image: "assets/img_products/sembako/berasbungapremium-removebg-preview.png",
        category: "SEMBAKO",
    },
    {
        name: "Telur Ayam",
        price: "Rp27.000",
        image: "assets/img_products/sembako/telurayam.png",
        description: "Telur Ayam segar dari peternakan lokal.",
        category: "SEMBAKO",
    },
    {
        name: "Telur Bebek",
        price: "Rp51.000",
        image: "assets/img_products/sembako/telur_bebek_1tre-removebg-preview.png",
        description: "Telur Ayam segar dari peternakan lokal.",
        category: "SEMBAKO",
    },
    {
        name: "Telur Ayam Kampung",
        price: "Rp38.000",
        image: "assets/img_products/sembako/telurayam_kampung1kg-removebg-preview.png",
        description: "Telur Ayam segar dari peternakan lokal.",
        category: "SEMBAKO",
    },
    {
        name: "Beras Kantil",
        price: "Rp77.000.000",
        image: "assets/img_products/sembako/beraskantil-removebg-preview.png",
        description: "Beras Kantil memiliki butiran panjang dan aroma yang wangi dengan rasa yang cenderung manis",
        category: "SEMBAKO",
    },
    {
        name: "Beras Rojo Lele",
        price: "Rp83.000",
        image: "assets/img_products/sembako/berasrojolele-removebg-preview.png",
        description: "Beras Rojo lele ini memiliki karakteristik yang pulen dan sedikit lengket yang menambah cita rasa legit",
        category: "SEMBAKO",
    },
    {
        name: "Beras Medium",
        price: "Rp60.000",
        image: "assets/img_products/sembako/berasmedium-removebg-preview.png",
        description: "Beras Medium memiliki tekstur yang sedang, tidak terlalu pulen",
        category: "SEMBAKO",
    },
    {
        name: "Mentega Anchor",
        price: "Rp60.000",
        image: "assets/img_products/sembako/anchor.png",
        description: "Mentega Anchor memiliki rasa creamy dan milky,khas dari susu sapi",
        category: "SEMBAKO",
    },
    {
        name: "Minyak Goreng Bimoli",
        price: "Rp38.000",
        image: "assets/img_products/sembako/bimoli2ltr-removebg-preview.png",
        description: "Minyak Bimoli memiliki rasa yang lembut dan sedikit nutty",
        category: "SEMBAKO",
    },
    {
        name: "Minyak Goreng SunCo",
        price: "Rp22.000",
        image: "assets/img_products/sembako/mingor2ltr-removebg-preview.png",
        description: "Minyal SunCo memiliki rasa yang cenderung netral dan tidak menggangu rasa asli makanan",
        category: "SEMBAKO",
    },
    {
        name: "Minyak Goreng Sabrina",
        price: "Rp20.000",
        image: "assets/img_products/sembako/sabrina2ltr-removebg-preview.png",
        description: "Minyak Sabrina menawarkan rasa yang bersih dan ringan, ideal untuk berbagai masakan",
        category: "SEMBAKO",
    },
    {
        name: "Minyak Goreng Fortune 5L",
        price: "Rp135.000",
        image: "assets/img_products/sembako/fortune5ltr-removebg-preview.png",
        description: "Minyak Fortune menghasilkan tekstur yang renyah saat digoreng",
        category: "SEMBAKO",
    },
    {
        name: "Tepung Segitiga Biru",
        price: "Rp12.000",
        image: "assets/img_products/sembako/segitigabiru1kg-removebg-preview.png",
        description: "Tepung terigu serba guna yang memiliki tekstur halus dan mengandung protein tinggi",
        category: "SEMBAKO",
    },
    {
        name: "Tepung Cakra Kembar",
        price: "Rp16.000",
        image: "assets/img_products/sembako/cakrakembar1kg-removebg-preview.png",
        description: "Tepung terigu yang berkualitas tinggi dengan kadar protein 13,5%",
        category: "SEMBAKO",
    },
    {
        name: "Tepung Sania",
        price: "Rp18.000",
        image: "assets/img_products/sembako/saniatepung1kg-removebg-preview.png",
        description: "Tepung terigu serba guna dengan rasa netral, ideal untuk berbagai jenis makanan",
        category: "SEMBAKO",
    },
    {
        name: "Tepung Bumbu Sajiku",
        price: "Rp2.500",
        image: "assets/img_products/sembako/tepungSAJIKU-TB-900g-removebg-preview.png",
        description: "Tepung bumbu racik dengan rempah pilihan, memberikan rasa yang kaya dan aroma menggugah selera",
        category: "SEMBAKO",
    },
    {
        name: "Gula Merah / Gula Jawa",
        price: "Rp16.000",
        image: "assets/img_products/sembako/gulamerah_gljawa_1kg-removebg-preview.png",
        description: "Gula Merah mempunyai rasa yang manis khas dan lembut",
        category: "SEMBAKO",
    },
    {
        name: "Gula Halus Claris",
        price: "Rp8.000",
        image: "assets/img_products/sembako/gulaclarishalus500gr-removebg-preview.png",
        description: "Gula Halus Claris mempunyai tekstur yang lembut dan lumer di mulut",
        category: "SEMBAKO",
    },
    {
        name: "Gula Batu Tawon",
        price: "Rp56.000",
        image: "assets/img_products/sembako/gulabatucaptawon-removebg-preview.png",
        description: "Gula Batu Tawon memiliki rasa yang menis dan mudah larut",
        category: "SEMBAKO",
    },
    // jajanan
    {
        name: "Choki - Choki",
        price: "Rp18.000",
        image: "assets/img_products/jajanan/choki4.png",
        description: "Snack choklat berbentuk stick yang mudah dibawa kemana - mana",
        category: "JAJANAN",
    },
    {
        name: "Nextar Coklat Isi 12",
        price: "Rp20.000",
        image: "assets/img_products/jajanan/nextar1.png",
        description: "Biskuit renyah dengan cream yang menggoda memiliki rasa coklat",
        category: "JAJANAN",
    },
    {
        name: "Tanggo Wafer",
        price: "Rp2.000",
        image: "assets/img_products/jajanan/tanggo-removebg-preview.png",
        description: "Wafer renyah dengan cream dengan aneka rasa",
        category: "JAJANAN",
    },
    {
        name: "Sari Gandum Sandwich",
        price: "Rp2.000",
        image: "assets/img_products/jajanan/sarigandum-removebg-preview.png",
        description: "Biskuit memiliki tekstur renyah diluar dan lembut didalam, diisi dengan cream coklat dan susu",
        category: "JAJANAN",
    },
    {
        name: "Sari Roti",
        price: "Rp5.000",
        image: "assets/img_products/jajanan/sari_roti_5rb-removebg-preview.png",
        description: "Memiliki rasa yang lembut, manis dengan tekstur yang empuk dan kenyal",
        category: "JAJANAN",
    },
    {
        name: "Roti Aoka Sandwich",
        price: "Rp2.000",
        image: "assets/img_products/jajanan/roti_aoka-removebg-preview.png",
        description: "Roti lembut yang diisi dengan selai manis",
        category: "JAJANAN",
    },
    {
        name: "Pocky Stick",
        price: "Rp4.000",
        image: "assets/img_products/jajanan/pockybox-removebg-preview.png",
        description: "Biskuit stick yang dilapisi dengan berbagai rasa",
        category: "JAJANAN",
    },
    {
        name: " Biskuit Malkist",
        price: "Rp5.000",
        image: "assets/img_products/jajanan/malkist-removebg-preview.png",
        description: "Snack biskuit berisi cream manis yang disukai anak - anak",
        category: "JAJANAN",
    },
    {
        name: " Biskuit Hello Panda",
        price: "Rp9.000",
        image: "assets/img_products/jajanan/helopandabox-removebg-preview.png",
        description: "Biskuit berbentuk panda yang diisi cream tersedia berbagai macam rasa",
        category: "JAJANAN",
    },
    {
        name: " Biskuit Good Time",
        price: "Rp2.000",
        image: "assets/img_products/jajanan/goodtime-removebg-preview.png",
        description: "Biskuit renyah yang sering disajikan sebagai cemilan dengan rasa coklat yang lezat",
        category: "JAJANAN",
    },
    {
        name: " Wafer Dilan ",
        price: "Rp2.000",
        image: "assets/img_products/jajanan/dilan1990-removebg-preview.png",
        description: "pocky enak",
        category: "JAJANAN",
    },
    {
        name: " Wafer Beng-Beng ",
        price: "Rp2.000",
        image: "assets/img_products/jajanan/beng_beng_mini-removebg-preview.png",
        description: "Wafer dengan rasa manis, gurih dan renyah dimulut",
        category: "JAJANAN",
    },
    {
        name: " Roti Aoka Gulung ",
        price: "Rp2.000",
        image: "assets/img_products/jajanan/aoka_gulung-removebg-preview.png",
        description: "Roti yang memiliki rasa manis dan lembut dengan tekstur yang kenyal",
        category: "JAJANAN",
    },
    {
        name: " Biskuit Roma Kelapa",
        price: "Rp8.500",
        image: "assets/img_products/jajanan/2.ROMA-COCONUT-BISCUIT-300G-removebg-preview.png",
        description: "Biskuit dengan rasa kelapa yang khas, menawarkan kombinasi renyah dan manis",
        category: "JAJANAN",
    },
    // minuman
    {
        name: "Sirup ABC",
        price: "Rp15.000",
        image: "assets/img_products/minuman/abc-removebg-preview.png",
        description: "sirup dengan aneka rasa",
        category: "MINUMAN",
    },
    {
        name: "Sirup Marjan",
        price: "Rp23.000",
        image: "assets/img_products/minuman/marjan-removebg-preview.png",
        description: "Sirup manis cocok saat berbuka puasa",
        category: "MINUMAN",
    },
    {
        name: "Sirup Tjampolai",
        price: "Rp35.000",
        image: "assets/img_products/minuman/tjampolai-removebg-preview.png",
        description: "Sirup khas Cirebon dengan berbagai rasa yang lezat",
        category: "MINUMAN",
    },
    {
        name: "Susu Ultra Milk",
        price: "Rp8.500",
        image: "assets/img_products/minuman/ultramilk-removebg-preview.png",
        description: "Susu sehat tinggi protein untuk anak-anak dan dewasa ",

        category: "MINUMAN",
    },
    {
        name: "Susu Bear Brand",
        price: "Rp10.000",
        image: "assets/img_products/minuman/beruang-removebg-preview.png",
        description: "Susu steril berkualitas tinggi",
        category: "MINUMAN",
    },
    {
        name: "Susu Real Good",
        price: "Rp2.500",
        image: "assets/img_products/minuman/realgood-removebg-preview.png",
        description: "Susu beraneka rasa yang baik untuk anak anak",
        category: "MINUMAN",
    },
    {
        name: "Susu Yakult",
        price: "Rp2.500",
        image: "assets/img_products/minuman/yakult-removebg-preview.png",
        description: "Susu yang mengandung bakteri baik cocok untuk pencernaan",
        category: "MINUMAN",
    },
    {
        name: "Teh Pucuk",
        price: "Rp4.000",
        image: "assets/img_products/minuman/PUCUK-removebg-preview.png",
        description: "Minuman Teh dengan rasa yang khas dan segar",
        category: "MINUMAN",
    },
    {
        name: "Teh Kotak",
        price: "Rp5.500",
        image: "assets/img_products/minuman/kotak-removebg-preview.png",
        description: "Minuman Teh dengan berkualitas tinggi",

        category: "MINUMAN",
    },
    // sabun
    {
        name: "Shampoo Clear",
        price: "Rp32.500",
        image: "assets/img_products/sabun/clear-removebg-preview.png",
        description: "Membersihkan kulit kepala dari ketombe",
        category: "SABUN",
    },
    {
        name: "CloseUp",
        price: "Rp16.000",
        image: "assets/img_products/sabun/close160-removebg-preview.png",
        description: "Membuat nafas segar sepanjang hari",
        category: "SABUN",
    },
    {
        name: "Shampoo Dove Renceng",
        price: "Rp10.000",
        image: "assets/img_products/sabun/dove_saset-removebg-preview.png",
        description: "Mencegah rambut rontok,  membuat rambut kuat",
        category: "SABUN",
    },
    {
        name: "Pewangi Downy",
        price: "Rp49.500",
        image: "assets/img_products/sabun/downy-removebg-preview.png",
        description: "Memberikan aroma wangi sepanjang hari",
        category: "SABUN",
    },
    {
        name: "Shampoo Emeron",
        price: "Rp23.500",
        image: "assets/img_products/sabun/emeron-removebg-preview.png",
        description: "Memberikan kelembapan dan nutrisi pada rambut yang membuat rambut berkilau",
        category: "SABUN",
    },
    {
        name: "Formula",
        price: "Rp13.500",
        image: "assets/img_products/sabun/formula-removebg-preview.png",
        description: "Perlindungan gigi yang optimal, mencegah kerusakan dan menjaga kesegaran napas sepanjang hari",
        category: "SABUN",
    },
    {
        name: "Garnier Man",
        price: "Rp28.500",
        image: "assets/img_products/sabun/garnierman-removebg-preview.png",
        description: "Mengatasi kotoran diwajah, menghilangkan minyak berlebih dan membuat muka segar sepanjang hari",
        category: "SABUN",
    },
    {
        name: "Garnier",
        price: "Rp22.500",
        image: "assets/img_products/sabun/garnier-removebg-preview.png",
        description: "Menghilangkan komedo, mengatasi minyak berlebih dan membuat muka segar",
        category: "SABUN",
    },
    {
        name: "Giv Cair 450ML",
        price: "Rp16.000",
        image: "assets/img_products/sabun/givcair_450ml-removebg-preview.png",
        description: "Menghilangkan keringat berlebih, menghilangkan bau badan dan membuat badan harum sepanjang hari",
        category: "SABUN",
    },
    {
        name: "Kahf",
        price: "Rp32.500",
        image: "assets/img_products/sabun/kahf-removebg-preview.png",
        description: "Mengandung bahan alami, memberikan kelembapan dan membersihkan hingga ke pori-pori",
        category: "SABUN",
    },
    {
        name: "LifeBoy",
        price: "Rp4.000",
        image: "assets/img_products/sabun/lifeboy-removebg-preview.png",
        description: "Memberikan perlindungan dari kuman, menjaga kebersihan tangan dan tubuh ",
        category: "SABUN",
    },
    {
        name: "LifeBoy Cair 500 ML",
        price: "Rp20.000",
        image: "assets/img_products/sabun/lifecair500ml-removebg-preview.png",
        description: "Membunuh 99% kuman, menghilangkan bau badan dan membuat badan harum sepanjang hari",
        category: "SABUN",
    },
    {
        name: "Sabun Mandi LUX",
        price: "Rp17.000",
        image: "assets/img_products/sabun/lux-removebg-preview.png",
        description: "Memberikan kelembapan dan sensasi segar setelah mandi, ",
        category: "SABUN",
    },
    {
        name: "Molto Pewangi Pakaian",
        price: "Rp10.000",
        image: "assets/img_products/sabun/molto-removebg-preview.png",
        description: "Membuat pakaian wangi tanpa merusak warna dan serat pakaian",
        category: "SABUN",
    },
    {
        name: "Pepsodents 75g",
        price: "Rp5.000",
        image: "assets/img_products/sabun/peps75g-removebg-preview.png",
        description: "Perlindungan pada gigi dari kerusakan dan gigi berlubang, membuat nafas segar sepanjang hari",
        category: "SABUN",
    },
    {
        name: "SoKlin Liquid",
        price: "Rp5.000",
        image: "assets/img_products/sabun/soklin-removebg-preview.png",
        description: "Membunuh kuman pada pakaian dan membersihkan noda yang membandel",
        category: "SABUN",
    },
    {
        name: "Sunlight",
        price: "Rp5.000",
        image: "assets/img_products/sabun/sunlight-removebg-preview.png",
        description: "Menghilangkan lemak membandel dengan sekali usap, membuat piring dan gelas tampak berkilau",
        category: "SABUN",
    },
    {
        name: "Sunsilk Renceng / Saset",
        price: "Rp10.000",
        image: "assets/img_products/sabun/sunsulk_renceng-removebg-preview.png",
        description: "Menghilangkan ketombe basah, dan membuat rambut tampak berkilau sepanjang hari",
        category: "SABUN",
    },
    {
        name: "Wardah Sabun Cuci Muka",
        price: "Rp30.500",
        image: "assets/img_products/sabun/wardah-removebg-preview.png",
        description: "Mengandung bahan alami yang lembut di kulit, cocok untuk semua jenis kulit",
        category: "SABUN",
    },
    // bumbu dapur
    {
        name: "Kecap ABC 600ml",
        price: "Rp25.000",
        image: "assets/img_products/bumbu/abc600ml-removebg-preview.png",
        description: "Kecap manis dengan rasa khas, cocok untuk berbagai masakan.",
        category: "BUMBU DAPUR",
    },
    {
        name: "Saos ABC Extra Pedas 335ml",
        price: "Rp20.000",
        image: "assets/img_products/bumbu/ABC-Extra-Pedas-Saos-Sambal-335ml-removebg-preview.png",
        description: "Saos sambal pedas yang menggugah selera, ideal untuk hidangan pedas.",
        category: "BUMBU DAPUR",
    },
    {
        name: "AJINOMOTO Penyedap Rasa",
        price: "Rp15.000",
        image: "assets/img_products/bumbu/ajinomoto-removebg-preview.png",
        description: "Penyedap rasa untuk menambah cita rasa masakan Anda.",
        category: "BUMBU DAPUR",
    },
    {
        name: "Kecap Asin 58 135ml",
        price: "Rp12.000",
        image: "assets/img_products/bumbu/asin58_135ml-removebg-preview.png",
        description: "Kecap asin dengan rasa yang khas, sempurna untuk menambah cita rasa.",
        category: "BUMBU DAPUR",
    },
    {
        name: "Kecap Asin MENJANGAN 140ml",
        price: "Rp12.000",
        image: "assets/img_products/bumbu/asinmenjangan140ml-removebg-preview.png",
        description: "Kecap asin premium yang cocok untuk berbagai hidangan.",
        category: "BUMBU DAPUR",
    },
    {
        name: "Kecap Bangau 135ml",
        price: "Rp12.000",
        image: "assets/img_products/bumbu/bangau135ml-removebg-preview.png",
        description: "Kecap manis dengan rasa yang pas, ideal untuk masakan sehari-hari.",
        category: "BUMBU DAPUR",
    },
    {
        name: "Garam Dapur Cap KAPAL",
        price: "Rp5.000",
        image: "assets/img_products/bumbu/capkapalgaram-removebg-preview.png",
        description: "Garam dapur berkualitas, cocok untuk memasak.",
        category: "BUMBU DAPUR",
    },
    {
        name: "Garam Dapur Cap DAUN",
        price: "Rp5.000",
        image: "assets/img_products/bumbu/garam_capdaun-removebg-preview.png",
        description: "Garam dapur dengan kualitas terbaik, memberikan rasa yang pas.",
        category: "BUMBU DAPUR",
    },
    {
        name: "Garam Dapur Cap SEGITIGA EMAS",
        price: "Rp5.000",
        image: "assets/img_products/bumbu/garamsegitiga-removebg-preview.png",
        description: "Garam dapur yang sempurna untuk segala masakan.",
        category: "BUMBU DAPUR",
    },
    {
        name: "Saos Sambal INDOFOOD PEDAS 135ml",
        price: "Rp20.000",
        image: "assets/img_products/bumbu/indofood_pedas-removebg-preview.png",
        description: "Saos sambal pedas yang nikmat, ideal untuk menemani makanan.",
        category: "BUMBU DAPUR",
    },
    {
        name: "Masako Kaldu Ayam Saset",
        price: "Rp10.000",
        image: "assets/img_products/bumbu/masako-removebg-preview.png",
        description: "Kaldu bubuk untuk menambah rasa gurih pada masakan.",
        category: "BUMBU DAPUR",
    },
    {
        name: "Royko Ayam / Sapi Saset",
        price: "Rp10.000",
        image: "assets/img_products/bumbu/roykoayamsapi-removebg-preview.png",
        description: "Penyedap rasa dalam bentuk saset untuk masakan Anda.",
        category: "BUMBU DAPUR",
    },
    {
        name: "Saos Tomat Kemasan Plastik 450g",
        price: "Rp15.000",
        image: "assets/img_products/bumbu/saos_tomat_450g.png",
        description: "Saos tomat segar untuk hidangan pasta dan makanan lainnya.",
        category: "BUMBU DAPUR",
    },
    {
        name: "SASA Penyedap Rasa Saset",
        price: "Rp10.000",
        image: "assets/img_products/bumbu/sasa-removebg-preview.png",
        description: "Penyedap rasa yang praktis dan mudah digunakan.",
        category: "BUMBU DAPUR",
    },
    {
        name: "Kecap Sedap 135ml",
        price: "Rp12.000",
        image: "assets/img_products/bumbu/sedap-removebg-preview.png",
        description: "Kecap manis yang nikmat untuk menambah cita rasa masakan.",
        category: "BUMBU DAPUR",
    },
    {
        name: "Saori Saos Tiram / Teriyaki 135ml",
        price: "Rp25.000",
        image: "assets/img_products/bumbu/tiramteriyaki_135ml-removebg-preview.png",
        description: "Saos tiram dan teriyaki yang kaya rasa, sempurna untuk masakan Asia.",
        category: "BUMBU DAPUR",
    },
    {
        name: "Minyak Wijen ABC 195ml",
        price: "Rp30.000",
        image: "assets/img_products/bumbu/wijen195ml-removebg-preview.png",
        description: "Minyak wijen berkualitas tinggi, ideal untuk menumis.",
        category: "BUMBU DAPUR",
    },
    {
        name: "KARA Santan Kelapa Kemasan",
        price: "Rp15.000",
        image: "assets/img_products/bumbu/kara3.png",
        description: "Santan kelapa yang kental dan lezat, cocok untuk masakan tradisional.",
        category: "BUMBU DAPUR",
    },
];
const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const cart = JSON.parse(localStorage.getItem("cart")) || []; // Ambil keranjang dari localStorage atau buat array kosong jika belum ada

let currentPage = 1;
const productsPerPage = 36; // Jumlah produk per halaman

function displayProducts(filteredProducts) {
    productList.innerHTML = "";

    // Hitung total produk dan total halaman
    const totalProducts = filteredProducts.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    // Hitung indeks produk yang ditampilkan berdasarkan halaman
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = Math.min(startIndex + productsPerPage, totalProducts);

    // Ambil produk yang akan ditampilkan di halaman ini
    const productsToShow = filteredProducts.slice(startIndex, endIndex);

    productsToShow.forEach((product) => {
        const productHTML = `
            <div class="col-2">
                <div class="card w-100">
                    <div class="text-center">
                        <img src="${product.image}" class="card-img-top img-fluid" alt="${product.name}">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text"><strong>Harga: ${product.price}</strong></p>
                        <div class="d-flex align-items-center">
                            <input type="number" min="0" value="0" class="form-control" style="width: 70px;" id="quantity-${product.id}">
                            <button class="btn btn-primary btn-cart ms-2" onclick="addToCart(${product.id})">
                                <i class="bi bi-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <a href="#" class="btn btn-success w-100" style="margin-top: 15px; margin-bottom: 20px;">Beli Sekarang</a>
            </div>
        `;
        productList.insertAdjacentHTML("beforeend", productHTML);
    });

    // Tampilkan navigasi pagination
    displayPagination(totalProducts, totalPages);
    productList.scrollIntoView({ behavior: "smooth", block: "start" });
}

function displayPagination(totalProducts, totalPages) {
    const paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("button");
        pageButton.innerText = i;
        pageButton.className = "btn btn-light ms-1";

        pageButton.addEventListener("click", () => {
            currentPage = i;
            displayProducts(products); // Tampilkan produk berdasarkan halaman yang dipilih
        });

        paginationContainer.appendChild(pageButton);
    }
}

// Tampilkan semua produk saat pertama kali
displayProducts(products);

searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().startsWith(searchTerm)
    );
    currentPage = 1; // Reset halaman saat melakukan pencarian
    displayProducts(filteredProducts);
});

function filterByCategory(category) {
    const filteredProducts = products.filter(
        (product) => product.category === category
    );
    currentPage = 1; // Reset halaman saat memfilter kategori
    displayProducts(filteredProducts);
}

// Fungsi untuk menambah produk ke keranjang
function addToCart(productId) {
    const product = products.find((item) => item.id === productId);
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const quantity = parseInt(quantityInput.value);

    if (quantity > 0) {
        // Konversi harga produk ke angka, hilangkan "Rp" dan tanda titik jika ada
        const price = parseInt(product.price.replace("Rp", "").replace(/\./g, ""));
        const totalPrice = price * quantity;

        // Tambahkan produk dan kuantitas serta total harga ke keranjang
        cart.push({...product, quantity, totalPrice });

        // Simpan keranjang ke localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Perbarui notifikasi keranjang
        updateCartNotification();

        // Kosongkan input kuantitas
        quantityInput.value = 0;
    } else {
        alert("Masukkan jumlah yang valid.");
    }
}

// Fungsi untuk memperbarui notifikasi jumlah barang di keranjang
function updateCartNotification() {
    const cartButton = document.querySelector(".btn-keranjang");
    const cartCount = cart.length;
    cartButton.innerHTML = `<i class="bi bi-cart"></i> (${cartCount})`;
}

// Fungsi untuk menampilkan barang yang ada di keranjang dengan gambar produk dan total harga
function showCartItems() {
    const cartListContainer = document.getElementById("cartList");
    cartListContainer.innerHTML = "";

    if (cart.length === 0) {
        cartListContainer.innerHTML = "<p>Keranjang kosong</p>";
    } else {
        cart.forEach((item) => {
            const cartItemHTML = `
                <div class="d-flex align-items-center mb-3">
                    <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; margin-right: 10px;">
                    <div>
                        <h5>${item.name}</h5>
                        <p>Jumlah: ${item.quantity}</p>
                        <p>Harga per unit: Rp${item.price}</p>
                        <p><strong>Total: Rp${item.totalPrice}</strong></p>
                    </div>
                </div>
                <hr>
            `;
            cartListContainer.insertAdjacentHTML("beforeend", cartItemHTML);
        });
    }
}

// Tambahkan event listener untuk tombol keranjang di navigasi
document.querySelector(".btn-keranjang").addEventListener("click", () => {
    const cartListContainer = document.getElementById("cartList");
    cartListContainer.style.display =
        cartListContainer.style.display === "none" ? "block" : "none";
    showCartItems(); // Memanggil fungsi untuk menampilkan item keranjang
});

// Perbarui notifikasi keranjang saat halaman dimuat
updateCartNotification();