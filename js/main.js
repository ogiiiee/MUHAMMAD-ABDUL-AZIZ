// 1. Popup Welcome Message
window.addEventListener("load", function () {
  setTimeout(() => {
    alert(
      "Selamat datang di Penjualan OXXA MUFFIN Lezat! Temukan MUFFIN favorit Anda di sini."
    );
  }, 500); // Popup muncul setelah 0.5 detik halaman dimuat
});

// 2. Scroll-To-Top Button
// Membuat tombol untuk kembali ke atas
let scrollToTopBtn = document.createElement("button");
scrollToTopBtn.innerText = "⬆️";
scrollToTopBtn.id = "scrollToTop";
scrollToTopBtn.style.cssText = `
  position: fixed; bottom: 20px; right: 20px;
  padding: 10px 15px; font-size: 18px;
  display: none; z-index: 1000; cursor: pointer;
  background-color: #ffcc00; border: none; border-radius: 5px;
`;
document.body.appendChild(scrollToTopBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 3. Filter Produk pada halaman Produk
// Fungsi ini hanya akan berjalan di halaman produk
if (document.getElementById("filterType")) {
  const allProducts = document.querySelectorAll(".product");

  document.getElementById("filterType").addEventListener("change", function () {
    const selectedType = this.value;

    allProducts.forEach((product) => {
      if (
        selectedType === "semua" ||
        product.getAttribute("data-type") === selectedType
      ) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
}
