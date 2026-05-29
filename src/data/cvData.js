export const cvData = {
  vi: {
    ui: {
      about: "Tổng Quan",
      experience: "Kinh Nghiệm Làm Việc",
      featuredProjects: "Dự Án Nổi Bật",
      projects: "Các module tiêu biểu:",
      role: "Vai trò:",
      tech: "Công nghệ:",
      achievements: "Thành tựu:",
      skills: "Kỹ Năng Chuyên Môn",
      education: "Học Vấn & Chứng Chỉ",
      confidential: "Dự án nội bộ (NDA)"
    },
    personal: {
      name: "Đỗ Ngọc Lương",
      greeting: "Xin chào, mình là Ngọc Lương 👋",
      title: "Front-end Team Lead | Senior Front-end Engineer",
      tagline: "Yêu thích coding, sáng tạo trong công việc.",
      phone: "0972.704.974",
      email: "dnluong1990@gmail.com",
      address: "Biên Hòa, Đồng Nai",
      birthYear: "1990",
    },
    summary: [
      "Hơn 10 năm kinh nghiệm trong lĩnh vực phát triển phần mềm, và hơn 4 năm đảm nhiệm vai trò Trưởng nhóm Front-end và quản lý các dự án phần mềm doanh nghiệp.",
      "Thông thạo về các công nghệ Front-end hiện đại như Vue.js, React.js, Next.js, React Native và TypeScript; đồng thời có kinh nghiệm thực tế với Node.js, NestJS và PostgreSQL trong lập trình Back-end.",
      "Có kinh nghiệm xây dựng và triển khai các hệ thống quản lý doanh nghiệp quy mô lớn như Hệ thống Quản lý Vận tải (TMS), Hệ thống Quản lý Đơn hàng (OMS) và Hệ thống Quản lý Kho (WMS).",
      "Có thế mạnh trong việc thiết kế kiến trúc Front-end có khả năng mở rộng, xây dựng hệ thống phân quyền RBAC và tối ưu hiệu năng ứng dụng.",
      "Chủ động ứng dụng AI vào quy trình phát triển phần mềm nhằm hỗ trợ thiết kế kiến trúc, lập kế hoạch dự án và xây dựng tài liệu kỹ thuật."
    ],
    skills: [
      {
        category: "Languages",
        items: ["JavaScript (ES6+)", "TypeScript", "Kotlin"]
      },
      {
        category: "Front-end",
        items: ["Vue.js", "React.js", "Next.js", "React Native", "HTML5", "CSS3", "SCSS", "Bootstrap", "Tailwind CSS", "WordPress"]
      },
      {
        category: "Back-end",
        items: ["Node.js", "Express.js", "NestJS", "Kotlin (Spring Boot)", "RESTful APIs", "Authentication & Authorization (RBAC)"]
      },
      {
        category: "Database",
        items: ["PostgreSQL", "MySQL"]
      },
      {
        category: "Development Tools",
        items: ["Git", "GitHub", "Figma", "Adobe Photoshop"]
      },
      {
        category: "AI-Driven Software Development",
        items: ["AI-assisted Architecture Design", "Project Planning", "Technical Documentation", "Code Generation & Refactoring"]
      },
      {
        category: "Methodologies",
        items: ["Agile/Scrum", "Code Review & Mentoring", "Performance Optimization", "UI/UX Collaboration", "Cross-functional Leadership"]
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
        company: "Công ty Cổ Phần Tin Học Smartway",
        position: "Trưởng nhóm Front-end",
        period: "T1/2022 – T4/2026",
        description: [
          "Dẫn dắt và đào tạo đội ngũ Front-end trong nhiều dự án phần mềm doanh nghiệp (Đội ngũ: 9 thành viên).",
          "Phối hợp với Product Owner, Designer, Back-end Developer, QA và các bên liên quan để triển khai sản phẩm.",
          "Thực hiện code review và xây dựng tiêu chuẩn phát triển nhằm đảm bảo chất lượng phần mềm.",
          "Thiết kế kiến trúc Front-end có khả năng mở rộng và tối ưu hiệu năng ứng dụng.",
          "Quản lý tiến độ phát triển, phân công công việc và phối hợp với các nguồn lực Outsource.",
          "Đảm bảo chất lượng sản phẩm thông qua kiểm thử và tuân thủ yêu cầu kỹ thuật."
        ],
        projects: [
          {
            name: "Hệ thống Quản lý Vận tải (TMS)",
            role: "Trưởng nhóm Front-end",
            tech: "Vue.js, TypeScript, NestJS, REST APIs, PostgreSQL",
            achievements: [
              "Thiết kế và triển khai các quy trình vận hành logistics.",
              "Xây dựng hệ thống phân quyền RBAC cho các nhóm người dùng như Quản trị viên, Điều phối viên và Tài xế.",
              "Tối ưu quy trình báo giá vận tải, điều phối vận chuyển và đối soát công nợ.",
              "Nâng cao hiệu quả vận hành thông qua tự động hóa quy trình và cải thiện trải nghiệm người dùng.",
              "Tích hợp Google Maps API phục vụ hiển thị bản đồ và lập kế hoạch tuyến đường."
            ]
          },
          {
            name: "Hệ thống Quản lý Đơn hàng & Kho (OMS/WMS)",
            role: "Full-stack Developer & Mobile App Lead",
            tech: "Vue.js, React Native, NestJS, PostgreSQL",
            achievements: [
              "Phát triển hệ thống Web và Mobile phục vụ quản lý đơn hàng và kho vận.",
              "Phát hành thành công ứng dụng trên Apple App Store và Google Play Store.",
              "Điều phối nguồn lực Outsource và theo dõi tiến độ triển khai dự án.",
              "Xây dựng các chức năng quản lý tồn kho và quy trình vận hành kho."
            ]
          }
        ]
      },
      {
        company: "Công ty TNHH MTV CNTT Sao Kim",
        position: "Senior Web Developer",
        period: "T9/2015 – T11/2021",
        description: [
          "Tham gia phát triển hơn 500 website thương mại thuộc nhiều lĩnh vực khác nhau.",
          "Chuyên về WordPress, phát triển Front-end và thiết kế UI/UX.",
          "Xây dựng các website chuẩn SEO, tối ưu hiệu năng và thân thiện với người dùng.",
          "Làm việc trực tiếp với khách hàng để phân tích yêu cầu và triển khai giải pháp phù hợp.",
          "Phối hợp cùng đội ngũ thiết kế và các bên liên quan nhằm đảm bảo mục tiêu dự án."
        ],
        projects: []
      }
    ],
    education: [
      {
        school: "Công ty Cổ Phần Tin Học Smartway",
        degree: "Danh hiệu hoàn thành tốt nhiệm vụ năm",
        major: "2024"
      },
      {
        school: "Khóa đào tạo ứng dụng trí tuệ nhân tạo Al trong văn phòng",
        degree: "VCCI",
        major: "2025"
      },
      {
        school: "Đại học Công Nghiệp Tp. Hồ Chí Minh",
        degree: "Hệ Cao Đẳng",
        major: "Công nghệ phần mềm (2010 – 2013)"
      }
    ]
  },
  en: {
    ui: {
      about: "Professional Summary",
      experience: "Professional Experience",
      featuredProjects: "Featured Projects",
      projects: "Key Projects:",
      role: "Role:",
      tech: "Technologies:",
      achievements: "Achievements:",
      skills: "Technical Skills",
      education: "Certifications & Education",
      confidential: "Confidential (NDA)"
    },
    personal: {
      name: "Do Ngoc Luong",
      greeting: "Hi, I'm Luong Do 👋",
      title: "Front-end Team Lead | Senior Front-end Engineer",
      tagline: "Passionate about coding, creative at work.",
      phone: "0972.704.974",
      email: "dnluong1990@gmail.com",
      address: "Bien Hoa, Dong Nai",
      birthYear: "1990",
    },
    summary: [
      "Senior Front-end Engineer and Team Lead with over 10 years of professional experience in software development, including over 4 years of leading engineering teams and managing enterprise software projects.",
      "Strong expertise in modern Front-end technologies including Vue.js, React.js, Next.js, React Native, and TypeScript, with solid hands-on experience in Back-end development using Node.js, NestJS, and PostgreSQL.",
      "Deep domain knowledge in building complex Transportation Management Systems (TMS), Order Management Systems (OMS), and Warehouse Management Systems (WMS).",
      "Proven track record in designing scalable front-end architectures, implementing robust RBAC systems, and optimizing application performance.",
      "Experienced in leveraging AI-assisted development tools for solution architecture, project planning, technical documentation, and full-stack development, including multi-tenant SaaS solutions."
    ],
    skills: [
      {
        category: "Languages",
        items: ["JavaScript (ES6+)", "TypeScript", "Kotlin"]
      },
      {
        category: "Front-end",
        items: ["Vue.js", "React.js", "Next.js", "React Native", "HTML5", "CSS3", "SCSS", "Bootstrap", "Tailwind CSS", "WordPress"]
      },
      {
        category: "Back-end",
        items: ["Node.js", "Express.js", "NestJS", "Kotlin (Spring Boot)", "RESTful APIs", "Authentication & Authorization (RBAC)"]
      },
      {
        category: "Database",
        items: ["PostgreSQL", "MySQL"]
      },
      {
        category: "Development Tools",
        items: ["Git", "GitHub", "Figma", "Adobe Photoshop"]
      },
      {
        category: "AI-Driven Software Development",
        items: ["AI-assisted Architecture Design", "Project Planning", "Technical Documentation", "Code Generation & Refactoring"]
      },
      {
        category: "Methodologies",
        items: ["Agile/Scrum", "Code Review & Mentoring", "Performance Optimization", "UI/UX Collaboration", "Cross-functional Leadership"]
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
        company: "Smartway Informatics JSC",
        position: "Front-end Team Lead",
        period: "Jan 2022 – Apr 2026",
        description: [
          "Led and mentored Front-end developers across multiple enterprise projects (Team Size: Up to 9 Developers).",
          "Collaborated with Product Owners, Designers, Back-end Engineers, QA teams, and business stakeholders.",
          "Conducted code reviews and established development standards to maintain software quality.",
          "Designed scalable front-end architectures and optimized application performance.",
          "Managed development progress, task allocation, and outsourcing resources.",
          "Ensured product quality through testing and adherence to technical requirements."
        ],
        projects: [
          {
            name: "Transportation Management System (TMS)",
            role: "Front-end Lead",
            tech: "Vue.js, TypeScript, NestJS, REST APIs, PostgreSQL",
            achievements: [
              "Designed and implemented logistics operation workflows.",
              "Developed a Role-Based Access Control (RBAC) system supporting Administrators, Dispatchers, and Drivers.",
              "Optimized transportation pricing, dispatching operations, and financial reconciliation processes.",
              "Improved operational efficiency through workflow automation and enhanced user experience.",
              "Integrated Google Maps API for route visualization and route planning functionalities."
            ]
          },
          {
            name: "Order & Warehouse Management System (OMS/WMS)",
            role: "Full-stack Developer & Mobile App Lead",
            tech: "Vue.js, React Native, NestJS, PostgreSQL",
            achievements: [
              "Developed enterprise web and mobile applications.",
              "Successfully released mobile applications on Apple App Store and Google Play Store.",
              "Coordinated outsourced development resources and project delivery schedules.",
              "Implemented inventory management and warehouse operation workflows."
            ]
          }
        ]
      },
      {
        company: "Sao Kim Information Technology Co., Ltd",
        position: "Senior Web Developer",
        period: "Sep 2015 – Nov 2021",
        description: [
          "Delivered 500+ commercial websites across multiple industries.",
          "Specialized in WordPress development, front-end implementation, and UI/UX design.",
          "Developed responsive, SEO-friendly, and high-performance websites.",
          "Worked directly with clients to analyze requirements and deliver tailored digital solutions.",
          "Collaborated with designers and stakeholders to ensure successful project outcomes."
        ],
        projects: []
      }
    ],
    education: [
      {
        school: "Smartway Informatics JSC",
        degree: "Employee Excellence Recognition",
        major: "2024"
      },
      {
        school: "AI Applications in Business & Office Productivity",
        degree: "VCCI",
        major: "2025"
      },
      {
        school: "Industrial University of Ho Chi Minh City",
        degree: "Associate Degree in Software Engineering",
        major: "2010 – 2013"
      }
    ]
  }
};
