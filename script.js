// MASUKKAN NOMOR WHATSAPP KAMU DI SINI (Gunakan format 628xxx)
const waNumber = "6283898277892";

// Fungsi Otomatisasi Pesan WA
function orderItem(productName, price) {
    const formattedPrice = new Intl.NumberFormat('id-ID', { 
        style: 'currency', 
        currency: 'IDR', 
        maximumFractionDigits: 0 
    }).format(price);
    
    const message = `Halo Admin Bloom Doughnuts! 🍩✨%0A%0ASaya ingin memesan donat via website:%0A- *Produk:* ${productName}%0A- *Harga:* ${formattedPrice}%0A- *Jumlah:* 1 Box / Pcs%0A%0AMohon informasi ketersediaan dan total ongkirnya ya. Terima kasih! 🙏`;
    
    const waUrl = `https://wa.me/${waNumber}?text=${message}`;
    window.open(waUrl, '_blank');
}