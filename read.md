/nodejs-socket-server
│── /config
│   ├── database.ts              # Cấu hình kết nối MongoDB
│── /controllers
│   ├── AuthController.ts        # Controller xử lý đăng nhập, đăng ký
│   ├── MessageController.ts     # Controller xử lý tin nhắn
│── /middlewares
│   ├── AuthMiddleware.ts        # Middleware xác thực JWT
│   ├── ErrorMiddleware.ts       # Middleware xử lý lỗi
│── /models
│   ├── User.ts                  # Class User Model
│   ├── Message.ts               # Class Message Model
│── /routes
│   ├── AuthRoutes.ts            # Router authentication
│   ├── MessageRoutes.ts         # Router tin nhắn
│── /services
│   ├── AuthService.ts           # Service xử lý xác thực
│   ├── MessageService.ts        # Service xử lý tin nhắn
│── /socket
│   ├── SocketManager.ts         # Class xử lý Socket.IO
│── /utils
│   ├── AuthUtils.ts             # JWT Token helper
│── server.ts                     # Khởi động server Express & Swagger
│── swagger.ts                    # Cấu hình Swagger API Docs
│── .env                           # Config biến môi trường
│── package.json                   # Danh sách dependencies
