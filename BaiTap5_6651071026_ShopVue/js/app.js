"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      tuKhoa: "",
      thongBao: "",
      products: [
        { id: 1, name: "Ốp lưng Electric Blue", category: "Ốp lưng", price: 250000, image: "blue-case.jpg", badge: "BÁN CHẠY" },
        { id: 2, name: "Ốp lưng Frost Silver", category: "Ốp lưng", price: 250000, image: "silver-case.jpg", badge: "" },
        { id: 3, name: "Đế sạc không dây Halo", category: "Sạc & cáp", price: 390000, image: "wireless-charger.jpg", badge: "MỚI" },
        { id: 4, name: "Tai nghe Cloud Buds", category: "Tai nghe", price: 690000, image: "earbuds.jpg", badge: "BÁN CHẠY" },
        { id: 5, name: "Ốp lưng Graphite", category: "Ốp lưng", price: 250000, image: "graphite-case.jpg", badge: "" },
        { id: 6, name: "Đế sạc không dây Mini", category: "Sạc & cáp", price: 320000, image: "charger-mini.jpg", badge: "" },
        { id: 7, name: "Tai nghe Air Buds", category: "Tai nghe", price: 590000, image: "air-buds.jpg", badge: "" },
        { id: 8, name: "Cáp sạc Flex USB-C", category: "Sạc & cáp", price: 190000, image: "usb-cable.jpg", badge: "GIÁ TỐT" }
      ],
      cart: []
    };
  },
  computed: {
    danhSachLoc() {
      const tuKhoa = this.tuKhoa.toLocaleLowerCase("vi");
      return this.products.filter((product) =>
        `${product.name} ${product.category}`.toLocaleLowerCase("vi").includes(tuKhoa)
      );
    },
    tongSoLuong() {
      return this.cart.reduce((total, item) => total + item.quantity, 0);
    },
    tongTien() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  },
  methods: {
    themVaoGio(product) {
      const existingItem = this.cart.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
      this.thongBao = `Đã thêm ${product.name} vào giỏ hàng.`;
    },
    xoaKhoiGio(index) {
      const [removedItem] = this.cart.splice(index, 1);
      this.thongBao = `Đã xóa ${removedItem.name} khỏi giỏ hàng.`;
    },
    dinhDangGia(price) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
        maximumFractionDigits: 0
      }).format(price);
    },
    hienThiThongBao() {
      this.thongBao = "Đây là cửa hàng minh họa cho bài thực hành Vue 3; chưa kết nối thanh toán.";
    }
  }
}).mount("#app");
