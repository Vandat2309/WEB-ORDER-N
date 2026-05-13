# ⚡ QUICK START - Deploy GitHub Pages (2 Phút)

## ✅ Các Lỗi Đã Sửa

| ✓ | Lỗi | Sửa Thành |
|---|-----|----------|
| ✅ | File ảnh có spaces | Dùng hyphens: `Bacon-Burger.jpg` |
| ✅ | Notification crash | Dùng element có sẵn |
| ✅ | Browser cache cũ | Version `?v=6` |
| ✅ | Double comma | Sửa typo |

---

## 🚀 Deploy trong 3 Bước

### 1️⃣ Chuẩn Bị (Lần đầu)
```bash
cd "D:\WEB ORDER ĐỒ ĂN"
git init
git add .
git commit -m "Initial"
```

### 2️⃣ Tạo Repo GitHub
- Vào https://github.com/new
- Tên: `web-order-do-an`
- Chọn Public
- Create

### 3️⃣ Push Code
```bash
git remote add origin https://github.com/YOUR_USERNAME/web-order-do-an.git
git branch -M main
git push -u origin main
```

### 4️⃣ Kích Hoạt GitHub Pages
- Vào repo → Settings → Pages
- Chọn `main` branch, `/` root
- Save

**URL:** `https://YOUR_USERNAME.github.io/web-order-do-an`

---

## 🧪 Test Checklist

- [ ] Trang tải được
- [ ] Menu hiển thị đầy đủ
- [ ] Ảnh sản phẩm visible
- [ ] Click "Chi Tiết" mở modal
- [ ] Thêm vào giỏ hàng
- [ ] Checkout/thanh toán hoạt động
- [ ] Notification hiển thị đúng
- [ ] LocalStorage lưu được

---

## 🐛 Nếu Lỗi

### Ảnh 404
```
Kiểm tra: image/ folder có đúng không?
Tên file: Bacon-Burger.jpg (hyphens, đúng case)
```

### JavaScript Error
```
F12 → Console → Xem error message
Ctrl+F5 → Hard refresh
```

### Vẫn Lỗi
```
xóa cache: Ctrl+Shift+Delete
Tăng version: xuly.js?v=7
```

---

## 📤 Update Lần Sau

```bash
git add .
git commit -m "Fix: ..."
git push
```

Done! GitHub Pages tự động deploy 1-3 phút sau.

---

**Note:** Tất cả lỗi GitHub Pages đã được sửa. Chỉ cần push lên là chạy! ✅
