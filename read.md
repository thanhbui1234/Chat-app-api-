/project-root
│── /src
│   │── /config
│   │   ├── db.ts                 # Kết nối MongoDB
│   │── /constants
│   │   ├── messages.ts           # Các thông báo lỗi & hệ thống
│   │── /controllers
│   │   ├── auth.controller.ts    # Xử lý API Auth
│   │   ├── message.controller.ts # Xử lý API Tin nhắn
│   │── /middleware
│   │   ├── auth.middleware.ts    # Middleware kiểm tra JWT
│   │   ├── error.middleware.ts   # Middleware xử lý lỗi
│   │── /models
│   │   ├── User.schema.ts        # Schema User
│   │   ├── Message.schema.ts     # Schema Message
│   │── /routes
│   │   ├── auth.routes.ts        # Route Auth (Login, Register)
│   │   ├── message.routes.ts     # Route Tin nhắn
│   │── /services
│   │   ├── auth.service.ts       # Logic xử lý Auth
│   │   ├── message.service.ts    # Logic xử lý Tin nhắn
│   │── /socket
│   │   ├── index.ts              # Xử lý Socket.IO
│   │── /utils
│   │   ├── commons.ts            # Hàm tiện ích chung
│   │── swagger.ts                # Cấu hình Swagger API Docs
│   │── server.ts                 # Khởi chạy server
│── package.json
│── tsconfig.json
│── .env
