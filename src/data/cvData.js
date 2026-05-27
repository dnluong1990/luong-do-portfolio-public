export const cvData = {
  vi: {
    ui: {
      about: "Mục Tiêu Nghề Nghiệp",
      experience: "Kinh Nghiệm Làm Việc",
      featuredProjects: "Dự Án Nổi Bật",
      projects: "Các module tiêu biểu:",
      role: "Vai trò:",
      achievements: "Thành tựu:",
      skills: "Kỹ Năng",
      education: "Học Vấn",
      confidential: "Dự án nội bộ (NDA)"
    },
    personal: {
      name: "Đỗ Ngọc Lương",
      greeting: "Xin chào, mình là Ngọc Lương 👋",
      title: "Fullstack Developer – Logistics & E-commerce Solutions",
      tagline: "Yêu thích coding, sáng tạo trong công việc.",
      phone: "0972.704.974",
      email: "dnluong1990@gmail.com",
      address: "Biên Hòa, Đồng Nai",
      birthYear: "1990",
    },
    summary: [
      "Đam mê phát triển các hệ thống có tính năng cao, chú trọng đến từng chi tiết, luôn tìm cách cải thiện trải nghiệm người dùng.",
      "Chủ động và có tinh thần trách nhiệm cao, luôn nỗ lực tìm giải pháp tốt để phục vụ công việc, dễ dàng thích nghi và học hỏi những điều mới.",
      "Hiểu biết cơ bản về máy chủ, cơ sở dữ liệu và kinh nghiệm tốt trong thiết kế và phát triển API RESTful.",
      "Ứng dụng AI vào quy trình phát triển để tăng năng suất."
    ],
    skills: [
      {
        category: "Ngôn ngữ & Framework",
        items: ["JavaScript", "TypeScript", "Vue.js", "Next.js", "React Native", "Node.js (Express, NestJS)"]
      },
      {
        category: "Front-end",
        items: ["Vuex", "Pinia", "React Hook", "HTML5", "CSS", "SCSS", "Bootstrap", "TailwindCSS", "WordPress"]
      },
      {
        category: "Back-end & Database",
        items: ["RESTful API", "PostgreSQL", "Authentication & Authorization (RBAC)"]
      },
      {
        category: "Công cụ",
        items: ["Git", "GitHub", "Figma", "Photoshop"]
      },
      {
        category: "Công nghệ hỗ trợ",
        items: ["Codex", "Claude", "Antigravity", "ChatGPT", "Gemini"]
      }
    ],
    featuredProjects: [
      {
        title: "Website Giới Thiệu Công Ty",
        description: "Thiết kế và xây dựng trang web giới thiệu doanh nghiệp với giao diện hiện đại, chuẩn SEO và tối ưu trải nghiệm người dùng.",
        techStack: ["WordPress", "HTML5", "CSS3", "JavaScript"],
        image: "company_present.png",
        isConfidential: false
      },
      {
        title: "Hệ thống Quản lý Vận tải (TMS)",
        description: "Hệ thống lõi quản lý vận tải Logistics với phân quyền phức tạp, bảng giá vận tải, công nợ đối soát và điều phối xe tải.",
        techStack: ["Vue.js", "Pinia", "SCSS"],
        image: "tms_routing_preview.png",
        isConfidential: true
      },
      {
        title: "Hệ thống Quản lý Kho & Đơn hàng (WMS/OMS)",
        description: "Nền tảng quản lý kho bãi đa kênh, đồng bộ đơn hàng và xử lý vận đơn tốc độ cao.",
        techStack: ["Next.js", "React", "TailwindCSS"],
        image: "wms_login.png",
        isConfidential: true
      }
    ],
    experience: [
      {
        company: "Công Ty Cổ Phần Tin Học Smartway",
        position: "Trưởng nhóm Front-end",
        period: "Từ 1/2022 đến 3/2026 – Onsite",
        description: [
          "Phối hợp với các trưởng nhóm kỹ thuật, nhóm thiết kế.",
          "Hợp tác đội ngũ back-end để triển khai các mẫu front-end, HTML, CSS, Javascript, Reactjs/Nextjs, React Native, VueJs.",
          "Tham gia review code và thiết kế để duy trì các tiêu chuẩn phát triển cao của sản phẩm.",
          "Thiết kế và phát triển giao diện người dùng hiệu suất cao.",
          "Thực hiện tái cấu trúc và tối ưu hóa code hiện có khi cần thiết.",
          "Giám sát hiệu suất website, webapp và xác định cũng như khắc phục các vấn đề về khả năng sử dụng.",
          "Đảm bảo chất lượng, unit test các sản phẩm dựa trên yêu cầu kĩ thuật."
        ],
        projects: [
          {
            name: "Hệ thống Quản lý Vận tải (TMS)",
            role: "Chịu trách nhiệm chính Frontend & thiết kế luồng vận hành Logistics theo yêu cầu.",
            achievements: "Triển khai thành công hệ thống phân quyền (RBAC) cho nhiều vai trò (Admin, điều phối, tài xế), giúp tối ưu hóa quy trình giao nhận, bảng giá vận tải, hệ thống công nợ đối soát."
          },
          {
            name: "Hệ thống Quản lý Đơn hàng & Kho (OMS/WMS)",
            role: "Fullstack Developer, Mobile App & Quản lý tiến độ đội Outsource.",
            achievements: "Phát hành ứng dụng Mobile trên cả App Store và Google Play;"
          },
          {
            name: "Hệ thống điều phối Tour (Tour Planning)",
            role: "Tích hợp thành công Google Maps API hiển thị chức năng và kết quả điều phối Tour tự động.",
            achievements: ""
          }
        ]
      },
      {
        company: "Công ty TNHH MTV CNTT Sao Kim",
        position: "Lập trình viên",
        period: "Từ 9/2015 đến 11/2021 – Onsite",
        description: [
          "Phát triển Web: Thiết kế và xây dựng hơn 500+ dự án website đa dạng lĩnh vực cho khách hàng.",
          "Công nghệ: WordPress (PHP), JavaScript, UI/UX Design (Figma, Photoshop).",
          "Đảm bảo tính thẩm mỹ đi đôi với hiệu năng SEO và trải nghiệm người dùng tối ưu."
        ],
        projects: []
      }
    ],
    education: [
      {
        school: "Đại học Công Nghiệp Tp. Hồ Chí Minh",
        degree: "Hệ Cao Đẳng (2010 – 2013)",
        major: "Công nghệ phần mềm"
      },
      {
        school: "Khóa đào tạo ứng dụng trí tuệ nhân tạo Al trong văn phòng",
        degree: "VCCI (2025)",
        major: ""
      }
    ]
  },
  en: {
    ui: {
      about: "Career Objective",
      experience: "Work Experience",
      featuredProjects: "Featured Projects",
      projects: "Key Projects:",
      role: "Role:",
      achievements: "Achievement:",
      skills: "Skills",
      education: "Education",
      confidential: "Confidential (NDA)"
    },
    personal: {
      name: "Do Ngoc Luong",
      greeting: "Hi, I'm Luong Do 👋",
      title: "Fullstack Developer – Logistics & E-commerce Solutions",
      tagline: "Passionate about coding, creative at work.",
      phone: "0972.704.974",
      email: "dnluong1990@gmail.com",
      address: "Bien Hoa, Dong Nai",
      birthYear: "1990",
    },
    summary: [
      "Passionate about developing highly functional systems, paying attention to detail, and constantly seeking to improve user experience.",
      "Proactive and have a high sense of responsibility, always striving to find good solutions for work, easily adaptable and eager to learn new things.",
      "Basic understanding of servers, databases, and solid experience in designing and developing RESTful APIs.",
      "Applying AI into the development process to increase productivity."
    ],
    skills: [
      {
        category: "Languages & Frameworks",
        items: ["JavaScript", "TypeScript", "Vue.js", "Next.js", "React Native", "Node.js (Express, NestJS)"]
      },
      {
        category: "Frontend",
        items: ["Vuex", "Pinia", "React Hook", "HTML5", "CSS", "SCSS", "Bootstrap", "TailwindCSS", "WordPress"]
      },
      {
        category: "Backend & Database",
        items: ["RESTful APIs", "PostgreSQL", "Authentication & Authorization (RBAC)"]
      },
      {
        category: "Tools",
        items: ["Git", "GitHub", "Figma", "Photoshop"]
      },
      {
        category: "Supporting Technologies",
        items: ["Codex", "Claude", "Antigravity", "ChatGPT", "Gemini"]
      }
    ],
    featuredProjects: [
      {
        title: "Company Corporate Website",
        description: "Designed and built a corporate presentation website with modern UI, SEO optimization, and high performance.",
        techStack: ["WordPress", "HTML5", "CSS3", "JavaScript"],
        image: "company_present.png",
        isConfidential: false
      },
      {
        title: "Transportation Management System (TMS)",
        description: "Core logistics system managing role-based access, pricing logic, debt reconciliation, and truck dispatching.",
        techStack: ["Vue.js", "Pinia", "SCSS"],
        image: "tms_routing_preview.png",
        isConfidential: true
      },
      {
        title: "Warehouse Management System (WMS)",
        description: "Omnichannel inventory management platform, order synchronization, and high-speed fulfillment processing.",
        techStack: ["Next.js", "React", "TailwindCSS"],
        image: "wms_login.png",
        isConfidential: true
      }
    ],
    experience: [
      {
        company: "Smartway Informatics Joint Stock Company",
        position: "Front-end team leader",
        period: "1/2022 to 3/2026 – Onsite",
        description: [
          "Coordinate with technical team leaders and the design team.",
          "Collaborate with the back-end team to implement front-end templates, HTML, CSS, Javascript, Reactjs/Nextjs, React Native, VueJs.",
          "Participate in code and design reviews to maintain high development standards for the product.",
          "Design and develop high-performance user interfaces.",
          "Refactor and optimize existing code when necessary.",
          "Monitor website and webapp performance, identify and resolve usability issues.",
          "Ensure quality, unit test products based on technical requirements."
        ],
        projects: [
          {
            name: "Transportation Management System (TMS)",
            role: "Main responsibility for Frontend & designing Logistics operational flows according to requirements.",
            achievements: "Successfully implemented Role-Based Access Control (RBAC) system for multiple roles (Admin, dispatcher, driver), helping optimize the delivery process, transport pricing, and debt reconciliation system."
          },
          {
            name: "Order & Warehouse Management System (OMS/WMS)",
            role: "Fullstack Developer, Mobile App & Managing Outsource team progress.",
            achievements: "Released the Mobile application on both App Store and Google Play."
          },
          {
            name: "Tour Planning System",
            role: "Successfully integrated Google Maps API to display functions and automatic Tour coordination results.",
            achievements: ""
          }
        ]
      },
      {
        company: "Sao Kim Information Technology Co., Ltd",
        position: "Developer",
        period: "9/2015 to 11/2021 – Onsite",
        description: [
          "Web Development: Designed and built over 500+ website projects in various fields for clients.",
          "Technologies: WordPress (PHP), JavaScript, UI/UX Design (Figma, Photoshop).",
          "Ensure aesthetics go hand in hand with SEO performance and optimal user experience."
        ],
        projects: []
      }
    ],
    education: [
      {
        school: "Industrial University of Ho Chi Minh City",
        degree: "Associate Degree (2010 – 2013)",
        major: "Software Engineering"
      },
      {
        school: "Training course AI application for work",
        degree: "VCCI (2025)",
        major: ""
      }
    ]
  }
};
