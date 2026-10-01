// MASUKKAN NOMOR WHATSAPP KAMU DI SINI (Gunakan format 628xxx)
const waNumber = "6281277009837"; 

// Fungsi Otomatisasi Pesan WA dengan Jumlah & Total Harga
function orderItem(productName, price) {
    // Pop-up tanya jumlah pesanan
    const qtyInput = prompt(`Berapa banyak ${productName} yang mau dibeli?`, "1");
    
    // Batal pesan kalau diklik Cancel
    if (qtyInput === null) return; 

    const qty = parseInt(qtyInput);
    if (isNaN(qty) || qty <= 0) {
        alert("Jumlah pesanan tidak valid!");
        return;
    }

    // Hitung total harga
    const totalPrice = price * qty;

    // Format mata uang Rupiah
    const formatRupiah = (val) => new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0
    }).format(val);

    const formattedPrice = formatRupiah(price);
    const formattedTotal = formatRupiah(totalPrice);

    // Format teks pesan WA yang rapi
    const message = `Halo Admin Bloom Doughnuts! 🍩✨%0A%0ASaya mau pesan:%0A• *Produk:* ${productName}%0A• *Jumlah:* ${qty} pcs%0A• *Harga Satuan:* ${formattedPrice}%0A• *Total Harga:* ${formattedTotal}%0A%0AMohon diproses ya, terima kasih!`;

    const waUrl = `https://wa.me/${waNumber}?text=${message}`;
    window.open(waUrl, '_blank');
}