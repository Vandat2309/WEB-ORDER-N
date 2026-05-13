# Hướng Dẫn Triển Khai FastFood Order lên GitHub Pages

## 🔧 Các Vấn Đề Đã Sửa

### 1. **Đường Dẫn File Ảnh** ✅
- **Lỗi**: File ảnh có khoảng trắng (spaces) không tương thích trên GitHub Pages
- **Giải Pháp**: Đã đổi tất cả file ảnh từ:
  - `image/Bacon Burger.jpg` → `image/Bacon-Burger.jpg`
  - `image/Pho bo.jpg` → `image/Pho-bo.jpg`
  - Tất cả file khác có spaces đã được đổi thành hyphens
  
### 2. **Hệ Thống Thông Báo (Notification)** ✅
- **Lỗi**: Notification container bị lỗi khi chạy trên GitHub Pages
- **Giải Pháp**: Sử dụng notification element có sẵn thay vì tạo mới

### 3. **Cache CSS/JS** ✅
- **Lỗi**: Browser cache cũ khi update code
- **Giải Pháp**: Tăng version number trong thẻ script/link:
  - `style.css?v=2`
  - `xuly.js?v=6`

### 4. **Syntax Errors** ✅
- **Lỗi**: Double comma trong dữ liệu MENU_DATA
- **Giải Pháp**: Đã sửa lỗi syntax

---

## 📋 Checklist Triển Khai lên GitHub Pages

### Bước 1: Tạo Repository trên GitHub
```
1. Vào https://github.com/new
2. Repository name: `web-order-do-an` (hoặc tên khác)
3. Chọn "Public"
4. Click "Create repository"
```

### Bước 2: Push Code lên GitHub
```bash
# Di chuyển đến thư mục project
cd "D:\WEB ORDER ĐỒ ĂN"

# Khởi tạo Git repository
git init
git add .
git commit -m "Initial commit"

# Thêm remote repository
git remote add origin https://github.com/YOUR_USERNAME/web-order-do-an.git

# Push lên GitHub
git branch -M main
git push -u origin main
```

### Bước 3: Cấu Hình GitHub Pages
1. Vào Repository Settings
2. Scroll xuống "GitHub Pages"
3. Chọn "Source: Deploy from a branch"
4. Branch: `main`, Folder: `/ (root)`
5. Click "Save"

### Bước 4: Kiểm Tra URL
- Sau 2-3 phút, trang sẽ có sẵn tại: `https://YOUR_USERNAME.github.io/web-order-do-an`

---

## 🧪 Thử Nghiệm Tính Năng

### Trên Local (Kiểm Tra Trước)
```bash
# Mở file index.html trực tiếp
# Hoặc dùng Live Server extension trong VS Code
```

**Kiểm Tra:**
- ✅ Menu hiển thị đúng
- ✅ Click "Chi Tiết" sản phẩm mở modal
- ✅ Thêm vào giỏ hàng
- ✅ Thanh toán (giả lập)
- ✅ Đăng ký/Đăng nhập
- ✅ Ảnh sản phẩm tải được (nếu URL hợp lệ)

### Trên GitHub Pages
Sau khi push lên, kiểm tra:
1. Trang tải được không?
2. Menu hiển thị đầy đủ?
3. Ảnh sản phẩm hiển thị?
4. Các nút bấm có hoạt động?
5. LocalStorage lưu dữ liệu được?

---

## 🐛 Xử Lý Lỗi Thường Gặp

### Lỗi 404 - File không tìm thấy
**Nguyên nhân**: Tên file không đúng hoặc đường dẫn sai
**Giải pháp**:
- Kiểm tra tên file (case-sensitive trên Linux)
- Kiểm tra đường dẫn trong HTML/CSS/JS

### Ảnh không hiển thị
**Nguyên nhân**: 
- File ảnh tên có khoảng trắng
- URL được mã hóa sai
**Giải pháp**: 
- Đảm bảo tên file dùng hyphens: `Bacon-Burger.jpg`
- Kiểm tra folder `image/` có tồn tại

### JavaScript không chạy
**Nguyên nhân**: 
- CORS policy
- Script bị cache cũ
**Giải pháp**:
- Xóa browser cache
- Tăng version number: `?v=7`
- Kiểm tra console F12 xem có error gì

### LocalStorage không lưu
**Nguyên nhân**: Browser private mode
**Giải pháp**: 
- Dùng browser bình thường, không dùng private/incognito
- Kiểm tra localStorage được enable không

---

## 📁 Cấu Trúc File Cần Thiết

```
web-order-do-an/
├── index.html          ✅ File HTML chính
├── style.css           ✅ File CSS
├── xuly.js             ✅ File JavaScript
├── image/              ✅ Folder ảnh
│   ├── Bacon-Burger.jpg
│   ├── Pho-bo.jpg
│   ├── ...
│   └── [tất cả ảnh]
├── .git/               (tạo tự động khi push)
└── .gitignore          (optional)
```

### .gitignore (Optional)
Tạo file `.gitignore` để loại bỏ file không cần:
```
node_modules/
*.log
.DS_Store
```

---

## 💡 Mẹo & Lưu Ý

### 1. **Update Code**
Khi update code, chỉ cần:
```bash
git add .
git commit -m "Mô tả thay đổi"
git push
```
GitHub Pages tự động deploy sau 1-2 phút

### 2. **Tăng Version Khi Update**
Khi thay đổi CSS/JS, tăng version để tránh cache:
```html
<link rel="stylesheet" href="style.css?v=3">
<script src="xuly.js?v=7"></script>
```

### 3. **Testing Tips**
- Dùng DevTools (F12) để kiểm tra console errors
- Xóa cache: Ctrl+Shift+Delete
- Hard refresh: Ctrl+F5

### 4. **Ảnh Ngoài**
Nếu dùng ảnh từ Unsplash/Pexels, chắc chắn URL không bị block

---

## ✅ Kiểm Tra Lần Cuối

Trước khi push lên GitHub:

- [ ] Không có lỗi JavaScript (F12 Console)
- [ ] Tất cả ảnh tên dùng hyphens, không spaces
- [ ] Đường dẫn ảnh đúng: `image/filename.jpg`
- [ ] Không có double commas hay syntax errors
- [ ] LocalStorage không bị lỗi
- [ ] Tất cả button/form hoạt động
- [ ] Version number được tăng

---

## 📞 Cần Giúp?

Nếu vẫn gặp lỗi:
1. Kiểm tra DevTools (F12) → Console
2. Xem error message cụ thể là gì
3. Tìm file/dòng code gây lỗi
4. Xóa cache và hard refresh (Ctrl+F5)

---

**Update lần cuối**: 2024-05-13  
**Phiên bản**: 2.0
