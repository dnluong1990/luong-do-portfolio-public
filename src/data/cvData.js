export const cvData = {
  vi: {
    ui: {
      about: "Về Bản Thân",
      shortTerm: "Mục Tiêu Ngắn Hạn",
      longTerm: "Mục Tiêu Dài Hạn",
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
      title: "Senior Fullstack Developer / Frontend Team Lead",
      tagline: "Yêu thích coding, sáng tạo trong công việc.",
      phone: "0972.704.974",
      email: "dnluong1990@gmail.com",
      address: "Biên Hòa, Đồng Nai",
      birthYear: "1990",
    },
    summary: "Lập trình viên Fullstack với hơn 8 năm kinh nghiệm thực chiến trong việc xây dựng hệ thống (Logistics, E-commerce). Thế mạnh đặc biệt về Frontend hiện đại (Reactjs, React Native, Vuejs) và Backend hiệu suất cao (Nestjs, PostgresSql). Đã có hơn 4 năm kinh nghiệm dẫn dắt đội nhóm, quản lý dự án từ khâu phân tích yêu cầu đến khi triển khai thực tế. Luôn ưu tiên việc tối ưu hóa trải nghiệm người dùng, hiệu suất hệ thống và áp dụng AI vào quy trình phát triển để tăng năng suất.",
    goals: {
      shortTerm: "Hoàn thiện kỹ năng quản lý để đảm nhiệm vị trí Tech Lead, xây dựng đội ngũ kỹ thuật tinh nhuệ.",
      longTerm: "Nghiên cứu sâu về kiến trúc hệ thống mở rộng (Scalability) và bảo mật, đóng góp vào các dự án mang tính đột phá về công nghệ và AI."
    },
    skills: [
      {
        category: "Ngôn ngữ & Framework",
        items: ["JavaScript", "TypeScript", "Vue.js", "Next.js", "React Native", "Node.js (Express, NestJS)"]
      },
      {
        category: "Front-end",
        items: ["Pinia", "HTML5", "CSS", "SCSS", "Bootstrap", "TailwindCSS", "WordPress"]
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
        items: ["Codex", "ChatGPT", "Gemini", "NotebookLM"]
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
          "Quản lý & Điều phối: Trực tiếp quản lý tiến độ, phân bổ đầu việc và hướng dẫn (mentoring) các thành viên trong team.",
          "Kiến trúc hệ thống: Làm việc với lãnh đạo/khách hàng để phân tích nghiệp vụ, thiết kế luồng vận hành (Workflow) và cấu trúc dữ liệu.",
          "Phát triển Fullstack: Trực tiếp tham gia vào các module phức tạp, hiệu suất cao."
        ],
        projects: [
          {
            name: "Hệ thống Quản lý Vận tải (TMS)",
            role: "Chịu trách nhiệm chính Frontend & thiết kế luồng vận hành Logistics.",
            achievements: "Triển khai thành công hệ thống phân quyền phức tạp (RBAC) cho nhiều vai trò (Admin, điều phối, tài xế), giúp tối ưu hóa quy trình giao nhận, bảng giá vận tải, hệ thống công nợ đối soát."
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
        major: "Công nghệ phần mềm."
      }
    ]
  },
  en: {
    ui: {
      about: "About Me",
      shortTerm: "Short-term Goal",
      longTerm: "Long-term Goal",
      experience: "Work Experience",
      featuredProjects: "Featured Projects",
      projects: "Key Modules:",
      role: "Role:",
      achievements: "Achievements:",
      skills: "Technical Skills",
      education: "Education",
      confidential: "Confidential (NDA)"
    },
    personal: {
      name: "Do Ngoc Luong",
      greeting: "Hi, I'm Luong Do 👋",
      title: "Senior Fullstack Developer / Frontend Team Lead",
      tagline: "Passionate about coding, creative at work.",
      phone: "0972.704.974",
      email: "dnluong1990@gmail.com",
      address: "Bien Hoa, Dong Nai",
      birthYear: "1990",
    },
    summary: "Fullstack Developer with over 8 years of hands-on experience building enterprise systems in Logistics and E-commerce domains. Strong expertise in modern frontend technologies (React.js, React Native, Vue.js) and high-performance backend development (NestJS, PostgreSQL). Over 4 years of experience leading development teams and managing projects from business analysis to production deployment. Passionate about optimizing user experience, system performance, and leveraging AI tools to improve development productivity.",
    goals: {
      shortTerm: "Enhance leadership and management skills to take on a Tech Lead role and build a high-performing engineering team.",
      longTerm: "Deeply research scalable system architecture and security, while contributing to innovative technology and AI-driven projects."
    },
    skills: [
      {
        category: "Languages & Frameworks",
        items: ["JavaScript", "TypeScript", "Vue.js", "Next.js", "React Native", "Node.js (Express, NestJS)"]
      },
      {
        category: "Frontend",
        items: ["Pinia", "HTML5", "CSS", "SCSS", "Bootstrap", "TailwindCSS", "WordPress"]
      },
      {
        category: "Backend & Database",
        items: ["RESTful APIs", "PostgreSQL", "Authentication & Authorization (RBAC)"]
      },
      {
        category: "Tools & Others",
        items: ["Git", "GitHub", "Figma", "Photoshop"]
      },
      {
        category: "AI Tools",
        items: ["Codex", "ChatGPT", "Gemini", "NotebookLM"]
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
        title: "Transport Management System (TMS)",
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
        position: "Front-end Team Leader",
        period: "Jan 2022 – Mar 2026 (Onsite)",
        description: [
          "Team Management & Coordination: Managed project progress, assigned tasks, and mentored team members.",
          "System Architecture: Worked directly with stakeholders and clients to analyze business requirements, design workflows, and structure system data models.",
          "Fullstack Development: Actively contributed to developing complex and high performance system modules."
        ],
        projects: [
          {
            name: "Transport Management System (TMS)",
            role: "Led frontend development and designed logistics workflows.",
            achievements: "Successfully implemented a complex role-based access control system (RBAC) for multiple user roles (Admin, Dispatcher, Driver), optimizing delivery operations, transportation pricing, and debt reconciliation processes."
          },
          {
            name: "Order & Warehouse Management System (OMS/WMS)",
            role: "Fullstack Developer, Mobile App Developer, and Outsource Team Coordinator.",
            achievements: "Successfully published mobile applications on both App Store and Google Play."
          },
          {
            name: "Tour Planning System",
            role: "",
            achievements: "Successfully integrated Google Maps API to visualize and support automatic tour dispatching and route planning."
          }
        ]
      },
      {
        company: "Sao Kim IT Company Limited",
        position: "Software Developer",
        period: "Sep 2015 – Nov 2021 (Onsite)",
        description: [
          "Developed and delivered over 500+ website projects across various industries.",
          "Worked with WordPress (PHP), JavaScript, and UI/UX Design tools (Figma, Photoshop).",
          "Ensured balance between visual aesthetics, SEO performance, and optimized user experience."
        ],
        projects: []
      }
    ],
    education: [
      {
        school: "Industrial University of Ho Chi Minh City",
        degree: "Associate Degree (2010 – 2013)",
        major: "Software Engineering"
      }
    ]
  }
};
