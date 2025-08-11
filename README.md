# DuanAI - Tin Tức Bóng Đá Hot

Ứng dụng tin tức bóng đá toàn diện với các tính năng hiện đại và giao diện đẹp mắt.

## 🚀 Tính năng chính

### 📰 Tin tức bóng đá
- Tin tức mới nhất từ các giải đấu hàng đầu thế giới
- Phân loại tin tức theo danh mục (Premier League, La Liga, Serie A, Bundesliga, Ligue 1, V-League)
- Tin tức nổi bật và tin tức thường
- Tìm kiếm tin tức theo từ khóa
- Chi tiết bài viết với hình ảnh và nội dung đầy đủ

### ⚽ Kết quả trận đấu
- Kết quả trận đấu real-time
- Lịch thi đấu sắp tới
- Trận đấu đang diễn ra (LIVE)
- Chi tiết trận đấu với thống kê, highlights và báo cáo
- Phân loại theo giải đấu và trạng thái

### 🏆 Bảng xếp hạng
- Bảng xếp hạng các giải đấu hàng đầu:
  - Premier League (Anh)
  - La Liga (Tây Ban Nha)
  - Serie A (Ý)
  - Bundesliga (Đức)
  - Ligue 1 (Pháp)
  - V-League (Việt Nam)
- Hiển thị đầy đủ thống kê: điểm, trận thắng, hòa, thua, bàn thắng, bàn thua
- Form gần đây của các đội bóng
- Phân loại màu sắc cho Champions League, Europa League, và xuống hạng

### 📊 Thống kê chi tiết
- **Vua phá lưới**: Top cầu thủ ghi bàn nhiều nhất
- **Kiến tạo**: Top cầu thủ kiến tạo nhiều nhất
- **Sạch lưới**: Top thủ môn giữ sạch lưới
- **Thống kê đội bóng**: Bàn thắng, bàn thua, hiệu số, điểm số
- Phân tích theo từng giải đấu
- Thống kê trung bình và hiệu suất

### 👥 Hồ sơ đội bóng
- Thông tin chi tiết về các đội bóng
- **Tổng quan**: Sân vận động, huấn luyện viên, danh hiệu, thống kê mùa giải
- **Đội hình**: Danh sách cầu thủ với thông tin chi tiết
- **Trận đấu**: Lịch sử trận đấu gần đây
- **Thống kê**: Biểu đồ và phân tích hiệu suất
- **Tin tức**: Tin tức liên quan đến đội bóng

### 🔍 Tìm kiếm thông minh
- Tìm kiếm tin tức theo từ khóa
- Tìm kiếm trận đấu theo đội bóng
- Kết quả tìm kiếm được phân loại rõ ràng
- Giao diện tìm kiếm thân thiện

### 📱 Responsive Design
- Giao diện tối ưu cho mọi thiết bị
- Mobile-first design
- Navigation thân thiện với mobile
- Tối ưu hiệu suất trên các màn hình khác nhau

## 🛠️ Công nghệ sử dụng

### Frontend
- **React JS 18** - Framework JavaScript hiện đại
- **CSS3** với animations và transitions mượt mà
- **Axios** cho API calls
- **React Router** cho navigation
- **React Icons** cho icon library
- **Framer Motion** cho animations (có thể mở rộng)

### Backend
- **Java Spring Boot 3.2.0** - Framework Java hiện đại
- **Spring Data JPA** cho ORM
- **H2 Database** - Database in-memory cho development
- **RESTful API** với đầy đủ CRUD operations
- **CORS** được cấu hình cho frontend-backend communication

### Build Tools & Deployment
- **Maven** cho Java backend
- **npm/Yarn** cho React frontend
- **Git** cho version control
- **GitHub** cho repository hosting

## 📁 Cấu trúc dự án

```
DuanAI/
├── frontend/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   │   ├── Navbar.js     # Navigation bar
│   │   │   └── Footer.js     # Footer component
│   │   ├── pages/           # Page components
│   │   │   ├── Home.js      # Landing page
│   │   │   ├── News.js      # News listing
│   │   │   ├── NewsDetail.js # Single news article
│   │   │   ├── Matches.js   # Matches listing
│   │   │   ├── MatchDetail.js # Single match details
│   │   │   ├── Standings.js # League tables
│   │   │   ├── Statistics.js # Player & team stats
│   │   │   ├── TeamProfile.js # Team detailed profile
│   │   │   └── Search.js    # Search functionality
│   │   ├── App.js           # Main app component
│   │   └── index.js         # Entry point
│   └── package.json
├── backend/                  # Spring Boot backend
│   ├── src/main/java/com/duanai/
│   │   ├── controller/      # REST controllers
│   │   ├── service/         # Business logic
│   │   ├── repository/      # Data access layer
│   │   ├── model/          # Entity classes
│   │   └── config/         # Configuration classes
│   ├── src/main/resources/
│   └── pom.xml
└── README.md
```

## 🚀 Cách chạy dự án

### Backend (Java Spring Boot)

1. **Yêu cầu hệ thống:**
   - Java 17 hoặc cao hơn
   - Maven 3.6+

2. **Chạy backend:**
   ```bash
   cd backend
   mvn spring-boot:run
   ```
   
   Backend sẽ chạy tại: `http://localhost:8080/api`

3. **Truy cập H2 Console:**
   - URL: `http://localhost:8080/api/h2-console`
   - JDBC URL: `jdbc:h2:mem:footballdb`
   - Username: `sa`
   - Password: `password`

### Frontend (React)

1. **Yêu cầu hệ thống:**
   - Node.js 16+ và npm

2. **Cài đặt dependencies:**
   ```bash
   cd frontend
   npm install
   ```

3. **Chạy frontend:**
   ```bash
   npm start
   ```
   
   Frontend sẽ chạy tại: `http://localhost:3000`

## 📊 API Endpoints

### News API
- `GET /api/news` - Lấy tất cả tin tức
- `GET /api/news/{id}` - Lấy tin tức theo ID
- `GET /api/news/featured` - Lấy tin tức nổi bật
- `GET /api/news/category/{category}` - Lấy tin tức theo danh mục
- `GET /api/news/search?q={keyword}` - Tìm kiếm tin tức

### Matches API
- `GET /api/matches` - Lấy tất cả trận đấu
- `GET /api/matches/{id}` - Lấy trận đấu theo ID
- `GET /api/matches/recent` - Lấy trận đấu gần đây
- `GET /api/matches/upcoming` - Lấy trận đấu sắp tới
- `GET /api/matches/live` - Lấy trận đấu đang diễn ra
- `GET /api/matches/competition/{competition}` - Lấy trận đấu theo giải

## 🎨 Giao diện

### Design System
- **Màu sắc chính**: Gradient từ #667eea đến #764ba2
- **Typography**: Modern sans-serif fonts
- **Spacing**: Consistent 8px grid system
- **Shadows**: Subtle shadows với backdrop blur
- **Animations**: Smooth transitions và hover effects

### Responsive Breakpoints
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: < 768px

## 🔧 Tính năng nâng cao

### Data Management
- **Mock Data**: Dữ liệu mẫu phong phú cho development
- **Real-time Updates**: Cấu trúc sẵn sàng cho real-time data
- **Caching**: Optimized cho performance

### User Experience
- **Loading States**: Spinner và skeleton loading
- **Error Handling**: Graceful error handling
- **Search**: Tìm kiếm thông minh với debouncing
- **Navigation**: Breadcrumb và deep linking

### Performance
- **Code Splitting**: Lazy loading cho các pages
- **Image Optimization**: Responsive images
- **Bundle Optimization**: Tree shaking và minification

## 🚀 Deployment

### Backend Deployment
```bash
cd backend
mvn clean package
java -jar target/football-news-api-0.0.1-SNAPSHOT.jar
```

### Frontend Deployment
```bash
cd frontend
npm run build
# Deploy build/ folder to your hosting service
```

## 🤝 Đóng góp

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📝 License

Dự án này được phát hành dưới MIT License.

## 📞 Liên hệ

- **Email**: [your-email@example.com]
- **GitHub**: [your-github-username]

---

**DuanAI Football News** - Nơi tin tức bóng đá gặp gỡ công nghệ hiện đại! ⚽🚀 #   D u a n A I  
 