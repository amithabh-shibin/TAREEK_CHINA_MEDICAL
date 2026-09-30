/* =========================================================
   1. SITE CONFIG  (company details, images, links)
   ========================================================= */
const CONFIG = {
  company: "TAREEK AL BAHAR TOURS LLC",
  phone: "+971 50 658 8598",
  whatsappNumber: "971506588598",        // digits only, used for the WhatsApp button and the form
  email: "tareekabt@gmail.com",

  // Google Maps embed link (the src="..." value from Google Maps > Share > Embed a map)
  mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4491.0774362638!2d55.3160096!3d25.2741226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d3f2651ebfb%3A0x6febc8305a38e90b!2sTareek%20Al%20Bahar%20Tours%20and%20Travels%20LLC!5e1!3m2!1sen!2sae!4v1790764299891!5m2!1sen!2sae",

  // Social links (replace with your real pages). WhatsApp is built from the number above.
  social: {
    facebook:  "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin:  "https://www.linkedin.com/",
    youtube:   "https://www.youtube.com/"
  },

  // Contact form: paste a Formspree/Getform URL to receive requests by POST.
  // Leave "" and the form opens WhatsApp with the request pre-filled.
  formEndpoint: "",

  defaultLang: "en",                     // "en", "zh" or "ar"
  slideInterval: 5000,
  testimonialInterval: 6000,

  /* ---------- Images (replace files in /images with your own photos, same filename) ---------- */
  images: {
    // Real photographic healthcare imagery (Unsplash CDN). These replace the cartoon illustrations.
    hero: [
      "images/slide_1.png",
  "images/slide_2.png",
  "images/slide_3.png",
  "images/slide_4.png"
    ],
    about: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=85",
    doctors: [
      "images/doctor-yin-qinwei.png",
      "images/doctor-zhang-tongcun.png",
      "images/doctor-zhu-hecheng.png",
      "images/doctor-wen-hao.png",
      "images/doctor-pan-guanghui.png",
      "images/doctor-zhu-bing.png",
      "images/doctor-ren-hao.png",
      "images/doctor-zhao-yucheng.png",
      "images/doctor-he-heng.png",
      "images/doctor-wu-zhaogang.png",
      "images/doctor-zhou-jieqiong.png",
      "images/doctor-huang-shuanghui.png",
      "images/doctor-zhang-ming.png"
    ],
    patients: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
    ]
  },

  /* ---------- Counter strip: REPLACE with your real figures ---------- */
  counters: [
    { value: 10,   suffix: "+" },
    { value: 1000, suffix: "+" },
    { value: 30,   suffix: "+" },
    { value: 98,   suffix: "%" }
  ],

  /* ---------- Icons per card (heart, activity, leaf, shield, user, globe, pin, plane, lock, doc, sparkle, clock) ---------- */
  icons: {
    services: ["user", "activity", "heart", "shield", "leaf", "globe"],
    why:      ["globe", "shield", "pin", "doc", "plane", "lock"]
  }
};


/* =========================================================
   2. TEXT: ENGLISH, CHINESE (中文), ARABIC (العربية)
   Edit any sentence below. Keep the same structure in all three languages.
   Doctor profiles and patient stories are SAMPLES: replace with real ones.
   ========================================================= */
const TEXT = {

/* ------------------------------ ENGLISH ------------------------------ */
en: {
  meta: {
    title: "TAREEK AL BAHAR TOURS LLC | Medical Treatment in China, Arranged from Dubai",
    description: "Dubai-based medical concierge sending patients to leading hospitals in China. Appointments, specialist referrals, translation, visas and care coordination in Arabic, English and Chinese."
  },
  nav: { about: "About", services: "Services", why: "Why us", doctors: "Doctors", process: "Process", faq: "FAQ" },
  btn: { book: "Book Appointment", contact: "Contact Us" },
  hero: [
    { title: "World-class hospitals in China, coordinated through our Dubai office", text: "We connect you with leading Chinese specialists and manage everything from your first enquiry to your recovery.", alt: "Chinese doctor in a white coat consulting a patient in a bright modern clinic" },
    { title: "A doctor who speaks your language", text: "Arabic, English and Chinese coordinators and interpreters stay with you at every consultation.", alt: "Chinese doctor reviewing a treatment plan with a patient" },
    { title: "Advanced treatment, shorter waits", text: "Reach specialist care, modern diagnostics and treatment options that can be hard to find at home.", alt: "Chinese doctor examining a patient with a stethoscope" },
    { title: "From visa to recovery, we walk with you", text: "Appointments, medical visa, travel, hospital stay and follow-up, all coordinated by one team.", alt: "Smiling Chinese doctor greeting a patient" }
  ],
  about: {
    tag: "About us",
    title: "Your bridge to China's leading hospitals",
    p1: "TAREEK AL BAHAR TOURS LLC supports patients from around the world who are seeking treatment in China. Our office is based in Dubai, and we help international patients reach leading hospitals in China. We handle appointments, specialist referrals, translation and personal care coordination, so language and culture never stand between you and treatment.",
    p2: "Our team stays in touch before you travel, beside you during treatment and in contact after you return home, so you can focus on getting well.",
    checks: ["Specialist referrals and records review", "An interpreter at every appointment", "One coordinator from enquiry to recovery"],
    cta: "Talk to our team",
    badgeTitle: "Dubai-based team",
    badgeText: "Local support in Deira",
    imgAlt: "Chinese doctor smiling in a hospital corridor",
    counters: ["Years of experience", "Patients guided", "Partner specialists", "Patient satisfaction"]
  },
  whyChina: {
    tag: "Why China",
    title: "Advanced care, shorter waits, clear prices",
    text: "China's major hospitals treat very large numbers of patients and invest heavily in new technology and research. For many conditions, patients find more options and faster access than they expect.",
    cards: [
      { title: "Innovative treatments", text: "Leading centres offer modern diagnostics, minimally invasive surgery and advanced therapies, including options in cancer care." },
      { title: "Shorter waiting times", text: "Once your records are reviewed, appointments can often be arranged within days or weeks instead of months." },
      { title: "Transparent costs", text: "Treatment is often more affordable than in many other countries, and you receive a clear written estimate before you decide." }
    ]
  },
  services: {
    tag: "What we do",
    title: "Complete care, from first enquiry to recovery",
    items: [
      { title: "Specialist referral and second opinion", text: "We review your reports, match you with the right specialist and arrange an expert opinion.", link: "Start a review" },
      { title: "Cancer and advanced therapies", text: "Access to oncology centres offering immunotherapy, targeted drugs, radiotherapy and interventional treatment.", link: "Ask about cancer care" },
      { title: "Surgery and orthopaedics", text: "Joint replacement, spine, hernia, heart and other planned surgery in accredited hospitals.", link: "See surgery options" },
      { title: "Health check-ups", text: "Full-body screening in one or two days, with imaging, lab work and a clear written report.", link: "Book a check-up" },
      { title: "Traditional Chinese medicine and rehabilitation", text: "Acupuncture, herbal care and recovery programmes alongside modern medicine.", link: "Explore recovery care" },
      { title: "Visa, travel and stay", text: "Medical visa invitation, flight guidance, airport pickup, hotel and local transport.", link: "Plan your trip" }
    ]
  },
  why: {
    tag: "Why choose us",
    title: "One team that handles everything",
    text: "From language to logistics, we arrange every detail so you can receive treatment with peace of mind.",
    items: [
      { title: "Arabic, English and Chinese support", text: "Our coordinators and interpreters make sure you and your doctor understand each other." },
      { title: "Hand-picked hospitals and doctors", text: "We work only with hospitals and specialists we have selected with care." },
      { title: "A Dubai office and personal service", text: "Visit us in Deira, or reach us by phone and WhatsApp every day." },
      { title: "Clear, all-in quotes", text: "You receive a written cost estimate before treatment begins, with no surprises." },
      { title: "Visa and travel handled", text: "We help with your invitation letter, flights, airport pickup and accommodation." },
      { title: "Confidential records", text: "Your reports and personal details are shared only with the doctors who need them." }
    ]
  },
  doctors: {
    tag: "Partner specialists",
    title: "Chinese Medical Scientists & Specialists",
    text: "Meet the scientific, medical, research and operations experts presented by Huayan Regenerative Medicine Group. Profile information is based on the official partner presentation supplied to us.",
    items: [
      { name: 'Prof. Yin Qinwei', role: 'Chief Scientist · Stem Cell & ncRNA Expert', note: 'Academician of the European Academy of Medical Sciences and New York Academy of Sciences; former senior scientist at Harvard Medical School Decision Systems Group; professor and PhD supervisor. The partner profile credits him with major work in MSC quality standards, RNAi, stem-cell research and regenerative medicine.' },
      { name: 'Prof. Zhang Tongcun', role: 'Scientist · PhD Supervisor', note: 'Foreign academician of the Russian Academy of Engineering; Dean of the School of Life Science and Health at Wuhan University of Science and Technology. The partner profile highlights CAR-T research, including patents and work on oncolytic-virus plus CAR-T approaches.' },
      { name: 'Prof. Zhu Hecheng', role: 'Professor · State Council Special Allowance Expert', note: 'Former deputy director of the Advanced Research Center of Central South University and director of a cell biology laboratory. The partner profile lists memberships in Chinese and international cancer, immunology and pathophysiology associations.' },
      { name: 'Prof. Wen Hao', role: 'Professor · PhD Supervisor', note: 'Foreign academician of the French National Academy of Surgery and honorary director at the First Affiliated Hospital of Xinjiang Medical University. Research focus includes echinococcosis and liver transplantation.' },
      { name: 'Prof. Pan Guanghui', role: 'Professor · PhD Supervisor', note: 'Founder and former director of transplant centers affiliated with Guangzhou Medical University and Guizhou Medical University. The partner profile describes extensive research in kidney transplantation, islet-cell transplantation, stem-cell-induced immune tolerance and related clinical research.' },
      { name: 'Zhu Bing', role: 'Technical Expert · PhD', note: 'Research background includes Germany’s Max Delbrück Center and postdoctoral work; the partner material presents him as a technical expert with biomedical research experience.' },
      { name: 'Ren Hao', role: 'Technical Expert · Postdoctoral Researcher', note: 'Senior researcher at Huayan Regenerative Medicine, PhD in regenerative medicine from Zhejiang University and postdoctoral researcher at a National Engineering Research Center. The profile lists National Natural Science Foundation projects and invention patents.' },
      { name: 'Zhao Yucheng', role: 'Technical Expert', note: 'Master’s in Biomedical Engineering from Tianjin University and a core member of a national-level research team. The profile notes preclinical research experience in stem-cell and immune-cell therapy products and SCI publications.' },
      { name: 'He Heng', role: 'Technical Expert', note: 'Master’s in Bioengineering from Shenyang Agricultural University. The partner profile notes participation in national R&D programs and experience in human tissue work and biological preparation.' },
      { name: 'Wu Zhaogang', role: 'Founder · Chairman', note: 'Founder and chairman in the Huayan group’s core operations team, with management experience in regenerative-medicine related organizations.' },
      { name: 'Zhou Jieqiong', role: 'Executive Director', note: 'Core operations executive. The partner profile lists clinical rehabilitation studies, a master’s in psychology from California Institute of Integral Studies, and work in lifestyle medicine and anti-aging medicine.' },
      { name: 'Huang Shuanghui', role: 'Chief Financial Officer', note: 'Core operations team member serving as Chief Financial Officer, with financial and management responsibilities described in the partner profile.' },
      { name: 'Zhang Ming', role: 'Laboratory Director', note: 'Laboratory director in the core operations team. The partner profile describes a science and technology / medical research background and laboratory-management experience.' }
    ]
  },
  process: {
    tag: "How it works",
    title: "Five steps from enquiry to recovery",
    steps: [
      { title: "Send your records", text: "Share your diagnosis and reports. We review them in confidence at no charge." },
      { title: "Plan and quote", text: "A specialist confirms suitability and we send a treatment plan with a clear, all-in quote." },
      { title: "Visa and travel", text: "We prepare your invitation letter, guide your flights and arrange pickup and accommodation." },
      { title: "Treatment with support", text: "A coordinator and interpreter join you at every appointment." },
      { title: "Recovery and follow-up", text: "We arrange recovery care, then keep you in touch with your doctors after you return home." }
    ]
  },
  testimonials: {
    tag: "Patient stories",
    title: "Words from patients and families",
    items: [
      { quote: "I understood every step because the interpreter was with me at each appointment. It removed all my fear about travelling.", name: "Khalid A.", role: "Patient from the UAE" },
      { quote: "The team arranged my visa, hotel and hospital visits. I only had to focus on my treatment.", name: "Omar H.", role: "Patient's family, Saudi Arabia" },
      { quote: "Our quote was clear from the start and there were no surprises. We felt looked after the whole time.", name: "Maria S.", role: "Family from Europe" }
    ]
  },
  faq: {
    tag: "FAQ",
    title: "Questions patients often ask",
    items: [
      { q: "Which conditions can you help with?", a: "We help with cancer care, planned surgery, cardiology, orthopaedics, health check-ups and rehabilitation. Send your reports and we will tell you whether we can help." },
      { q: "How long does it take to get an appointment?", a: "After we receive your records, we usually confirm a plan quickly. Timing depends on the hospital and your condition." },
      { q: "Do you help with the visa?", a: "Yes. We prepare the invitation letter and guide you through the medical visa process for your nationality." },
      { q: "Will someone translate for me?", a: "Yes. A coordinator who speaks Arabic, English or Chinese joins your appointments." },
      { q: "How much will treatment cost?", a: "Costs depend on the hospital and treatment. You receive a written all-in estimate before you commit." },
      { q: "What about follow-up after I go home?", a: "We arrange remote follow-up with your doctors and help you send updated reports." }
    ]
  },
  contact: {
    tag: "Book an appointment",
    title: "Tell us about your case",
    text: "Send a request and our coordinator will reply on WhatsApp or by phone.",
    formTitle: "Appointment request",
    formNote: "Fields marked * are required.",
    name: "Full name *", phone: "Phone *", email: "Email", service: "Service", message: "Message",
    messagePh: "Describe your condition or preferred dates",
    selectService: "Select a service",
    send: "Send request",
    visit: "Visit us",
    callLabel: "Call or WhatsApp",
    emailLabel: "Email",
    hoursLabel: "Opening hours",
    hours: "10:00 AM – 10:00 PM, every day",
    address: "Burj Nahar Mall, Al Muteena, M2 Floor, Deira, Dubai, United Arab Emirates",
    err: "Please enter your name and phone number, and a valid email if you add one.",
    ok: "Your request is ready. WhatsApp will open so you can send it to us.",
    waIntro: "New appointment request"
  },
  footer: {
    blurb: "Dubai office supporting patients worldwide with treatment coordination in China.",
    quick: "Quick links", contactH: "Contact", hoursH: "Opening hours",
    rights: "All rights reserved.",
    disclaimer: "Information on this site is general and is not medical advice. Treatment decisions are made by your doctors."
  }
},

/* ------------------------------ 中文 (Simplified Chinese) ------------------------------ */
zh: {
  meta: {
    title: "TAREEK AL BAHAR TOURS LLC | 迪拜出发，安排赴华就医",
    description: "迪拜设有办公室，为全球患者对接中国顶尖医院。预约挂号、专家转诊、翻译、签证与全程照护，提供阿拉伯语、英语和中文服务。"
  },
  nav: { about: "关于我们", services: "服务项目", why: "选择我们", doctors: "合作专家", process: "就医流程", faq: "常见问题" },
  btn: { book: "预约就诊", contact: "联系我们" },
  hero: [
    { title: "服务全球患者，对接中国顶尖医院", text: "我们为您联系中国一流专家，并负责从首次咨询到康复的全部安排。", alt: "身穿白大褂的中国医生在明亮的现代诊所里为患者问诊" },
    { title: "会说您语言的医疗团队", text: "阿拉伯语、英语和中文协调员及翻译全程陪同每一次就诊。", alt: "中国医生与患者一起查看治疗方案" },
    { title: "先进治疗，更短等待", text: "获得专科诊疗、现代化检查，以及许多患者在本国难以获得的治疗选择。", alt: "中国医生用听诊器为患者检查" },
    { title: "从签证到康复，全程相伴", text: "预约、医疗签证、行程、住院与随访，由同一个团队统一安排。", alt: "微笑的中国医生迎接患者" }
  ],
  about: {
    tag: "关于我们",
    title: "通往中国一流医院的桥梁",
    p1: "TAREEK AL BAHAR TOURS LLC 是一家总部位于迪拜的医疗服务机构，帮助来自中东、欧洲、北美及世界各地的患者前往中国顶尖医院就医。我们负责预约挂号、专家转诊、翻译和个性化照护协调，让语言和文化不再成为您接受治疗的障碍。",
    p2: "出发前、治疗中、回国后，我们的团队始终与您保持联系，让您专心康复。",
    checks: ["专家转诊与病历评估", "每次就诊均有翻译陪同", "从咨询到康复由专人全程协调"],
    cta: "联系我们的团队",
    badgeTitle: "迪拜本地团队",
    badgeText: "在迪拜迪拉区提供当面支持",
    imgAlt: "医院走廊里微笑的中国医生",
    counters: ["年行业经验", "服务患者人数", "合作专家", "患者满意度"]
  },
  whyChina: {
    tag: "为什么选择中国",
    title: "先进医疗、更短等待、价格透明",
    text: "中国的大型医院接诊量大，并持续投入新技术和科研。对许多疾病而言，患者能获得比预期更多的治疗选择和更快的就诊机会。",
    cards: [
      { title: "创新治疗", text: "顶尖医疗中心提供现代化检查、微创手术和先进疗法，包括肿瘤治疗方案。" },
      { title: "等待时间更短", text: "病历评估后，通常可在数天或数周内安排就诊，而不是等待数月。" },
      { title: "费用透明", text: "许多治疗的费用相对更具优势，我们会在您做决定前提供清晰的书面报价。" }
    ]
  },
  services: {
    tag: "服务项目",
    title: "从首次咨询到康复的完整服务",
    items: [
      { title: "专家转诊与二次诊疗意见", text: "我们评估您的病历，匹配合适的专家，并安排权威意见。", link: "开始病历评估" },
      { title: "肿瘤与先进疗法", text: "对接提供免疫治疗、靶向药物、放疗和介入治疗的肿瘤中心。", link: "咨询肿瘤治疗" },
      { title: "外科与骨科", text: "在认证医院进行关节置换、脊柱、疝气、心脏等择期手术。", link: "查看手术方案" },
      { title: "健康体检", text: "一至两天完成全身筛查，包含影像、检验和清晰的书面报告。", link: "预约体检" },
      { title: "中医与康复", text: "在现代医学基础上结合针灸、中药调理和康复方案。", link: "了解康复护理" },
      { title: "签证、行程与住宿", text: "医疗签证邀请函、机票建议、机场接送、酒店和当地交通。", link: "规划您的行程" }
    ]
  },
  why: {
    tag: "为什么选择我们",
    title: "一个团队，统筹一切",
    text: "从语言到行程，我们把每个细节安排妥当，让您安心就医。",
    items: [
      { title: "阿拉伯语、英语、中文服务", text: "我们的协调员和翻译确保您与医生沟通无碍。" },
      { title: "严选医院与医生", text: "我们只与经过认真筛选的医院和专科医生合作。" },
      { title: "迪拜办公室，贴心服务", text: "欢迎到访迪拉办公室，也可每天通过电话和 WhatsApp 联系我们。" },
      { title: "清晰的一站式报价", text: "治疗开始前提供书面费用估算，避免意外支出。" },
      { title: "签证与行程全程协助", text: "邀请函、机票、机场接送和住宿，我们都协助安排。" },
      { title: "病历严格保密", text: "您的报告和个人信息仅提供给必要的医生。" }
    ]
  },
  doctors: {
    tag: "合作专家",
    title: "中国医学科学家与专家团队",
    text: "以下为中国合作方资料中介绍的医学科学家与专家团队成员。",
    items: [
      { name: "殷勤伟", role: "首席科学家 · 干细胞和ncRNAs专家", note: "国家级人才科学家，研究方向包括干细胞、非编码RNA与再生医学。" },
      { name: "张同存", role: "科学家 · 博士生导师", note: "从事生物医学、CAR-T相关技术及转化研究。" },
      { name: "祝和成", role: "教授 · 国务院特殊津贴专家", note: "资深生物医学研究专家，具有细胞生物学和生物技术研究经验。" },
      { name: "温浩", role: "教授 · 博士生导师", note: "国际疾病与临床研究专家，拥有丰富的学术与科研经验。" },
      { name: "潘光辉", role: "教授 · 博士生导师", note: "生物医学科学家，研究方向包括干细胞与再生医学。" }
    ]
  },
  process: {
    tag: "就医流程",
    title: "从咨询到康复的五个步骤",
    steps: [
      { title: "提交病历", text: "发送您的诊断和报告，我们免费并严格保密地评估。" },
      { title: "方案与报价", text: "专家确认适合后，我们提供治疗方案和清晰的一站式报价。" },
      { title: "签证与行程", text: "我们准备邀请函，指导订票，并安排接机和住宿。" },
      { title: "治疗与陪同", text: "协调员和翻译陪您参加每一次就诊。" },
      { title: "康复与随访", text: "我们安排康复护理，并在您回国后保持与医生的联系。" }
    ]
  },
  testimonials: {
    tag: "患者心声",
    title: "来自患者和家属的话",
    items: [
      { quote: "每次就诊都有翻译陪同，我明白每一个步骤，对出行的顾虑一下子都消失了。", name: "Khalid A.", role: "来自阿联酋的患者" },
      { quote: "团队帮我安排了签证、酒店和医院就诊，我只需要专心治疗。", name: "Omar H.", role: "来自沙特阿拉伯的患者家属" },
      { quote: "报价从一开始就很清楚，没有任何意外，我们一直感到被用心照顾。", name: "Maria S.", role: "来自欧洲的家庭" }
    ]
  },
  faq: {
    tag: "常见问题",
    title: "患者常问的问题",
    items: [
      { q: "你们可以帮助哪些疾病？", a: "我们协助肿瘤治疗、择期手术、心脏科、骨科、健康体检和康复。请发送您的报告，我们会告诉您是否能够提供帮助。" },
      { q: "多久可以安排就诊？", a: "收到病历后，我们通常会尽快确认方案。具体时间取决于医院和您的病情。" },
      { q: "你们能协助办理签证吗？", a: "可以。我们准备邀请函，并根据您的国籍指导医疗签证办理。" },
      { q: "会有人为我翻译吗？", a: "会。会说阿拉伯语、英语或中文的协调员将陪同您就诊。" },
      { q: "治疗费用是多少？", a: "费用取决于医院和治疗项目。在您做决定之前，我们会提供书面的全包估算。" },
      { q: "回国后如何随访？", a: "我们安排与医生的远程随访，并协助您发送最新报告。" }
    ]
  },
  contact: {
    tag: "预约就诊",
    title: "告诉我们您的情况",
    text: "提交申请后，我们的协调员会通过 WhatsApp 或电话回复您。",
    formTitle: "预约申请",
    formNote: "带 * 为必填项。",
    name: "姓名 *", phone: "电话 *", email: "电子邮箱", service: "服务项目", message: "留言",
    messagePh: "请描述您的病情或希望的就诊时间",
    selectService: "请选择服务",
    send: "提交申请",
    visit: "到访地址",
    callLabel: "电话 / WhatsApp",
    emailLabel: "电子邮箱",
    hoursLabel: "营业时间",
    hours: "每天 10:00 – 22:00",
    address: "阿联酋迪拜迪拉区 Al Muteena，Burj Nahar Mall 购物中心 M2 层",
    err: "请填写姓名和电话；如填写邮箱，请确保格式正确。",
    ok: "您的申请已准备好，将打开 WhatsApp 以便发送给我们。",
    waIntro: "新的预约申请"
  },
  footer: {
    blurb: "总部位于迪拜的医疗服务机构，帮助患者对接中国一流医院。",
    quick: "快速链接", contactH: "联系方式", hoursH: "营业时间",
    rights: "版权所有。",
    disclaimer: "本网站信息仅供一般参考，不构成医疗建议。治疗决定由您的医生作出。"
  }
},

/* ------------------------------ العربية (Arabic) ------------------------------ */
ar: {
  meta: {
    title: "TAREEK AL BAHAR TOURS LLC | العلاج في الصين بتنظيم من دبي",
    description: "خدمة مساعدة طبية مقرها دبي توصل المرضى إلى أفضل المستشفيات في الصين. مواعيد وإحالات للأطباء الاختصاصيين وترجمة وتأشيرات وتنسيق كامل للرعاية باللغات العربية والإنجليزية والصينية."
  },
  nav: { about: "من نحن", services: "خدماتنا", why: "لماذا نحن", doctors: "أطباؤنا", process: "خطوات العلاج", faq: "الأسئلة الشائعة" },
  btn: { book: "احجز موعدًا", contact: "تواصل معنا" },
  hero: [
    { title: "أفضل مستشفيات الصين، بتنظيم من دبي", text: "نصلك بكبار الأطباء الاختصاصيين في الصين وندير كل شيء من أول استفسار حتى التعافي.", alt: "طبيب صيني بمعطف أبيض يستشير مريضًا في عيادة حديثة ومشرقة" },
    { title: "طبيب يتحدث لغتك", text: "منسقون ومترجمون بالعربية والإنجليزية والصينية يرافقونك في كل موعد.", alt: "طبيب صيني يراجع خطة العلاج مع مريض" },
    { title: "علاج متقدم وانتظار أقصر", text: "احصل على رعاية متخصصة وفحوصات حديثة وخيارات علاجية قد يصعب الوصول إليها في بلدك.", alt: "طبيب صيني يفحص مريضًا بالسماعة الطبية" },
    { title: "من التأشيرة إلى التعافي، نحن معك", text: "المواعيد وتأشيرة العلاج والسفر والإقامة في المستشفى والمتابعة، ينسقها فريق واحد.", alt: "طبيبة صينية مبتسمة تستقبل مريضًا" }
  ],
  about: {
    tag: "من نحن",
    title: "جسرك إلى أفضل مستشفيات الصين",
    p1: "شركة TAREEK AL BAHAR TOURS LLC خدمة طبية مقرها دبي، تساعد المرضى من الشرق الأوسط وأوروبا وأمريكا الشمالية وغيرها على الوصول إلى أفضل المستشفيات في الصين. نتولى المواعيد والإحالة إلى الأطباء الاختصاصيين والترجمة وتنسيق الرعاية الشخصية، فلا تقف اللغة أو الثقافة حاجزًا بينك وبين العلاج.",
    p2: "يبقى فريقنا على تواصل معك قبل السفر، وإلى جانبك أثناء العلاج، وبعد عودتك إلى بلدك، لتتفرغ للتعافي.",
    checks: ["إحالة إلى الاختصاصيين ومراجعة التقارير الطبية", "مترجم يرافقك في كل موعد", "منسق واحد من الاستفسار حتى التعافي"],
    cta: "تحدث إلى فريقنا",
    badgeTitle: "فريق في دبي",
    badgeText: "دعم مباشر في ديرة",
    imgAlt: "طبيب صيني مبتسم في ممر المستشفى",
    counters: ["سنوات الخبرة", "مريض تم إرشاده", "طبيب شريك", "رضا المرضى"]
  },
  whyChina: {
    tag: "لماذا الصين",
    title: "رعاية متقدمة وانتظار أقصر وأسعار واضحة",
    text: "تستقبل المستشفيات الكبرى في الصين أعدادًا كبيرة من المرضى وتستثمر بقوة في التقنيات الحديثة والأبحاث. وفي كثير من الحالات يجد المرضى خيارات أكثر ومواعيد أسرع مما يتوقعون.",
    cards: [
      { title: "علاجات مبتكرة", text: "تقدم المراكز الرائدة تشخيصًا حديثًا وجراحة طفيفة التوغل وعلاجات متقدمة، ومنها خيارات في علاج الأورام." },
      { title: "انتظار أقصر", text: "بعد مراجعة تقاريرك، يمكن غالبًا ترتيب المواعيد خلال أيام أو أسابيع بدل أشهر." },
      { title: "تكاليف واضحة", text: "غالبًا ما تكون تكلفة العلاج أنسب مقارنة بدول كثيرة، ونقدم لك تقديرًا مكتوبًا واضحًا قبل أن تقرر." }
    ]
  },
  services: {
    tag: "ما نقدمه",
    title: "رعاية متكاملة من الاستفسار حتى التعافي",
    items: [
      { title: "الإحالة إلى اختصاصي ورأي طبي ثانٍ", text: "نراجع تقاريرك ونختار لك الاختصاصي المناسب ونرتب رأيًا طبيًا خبيرًا.", link: "ابدأ المراجعة" },
      { title: "علاج الأورام والعلاجات المتقدمة", text: "الوصول إلى مراكز أورام تقدم العلاج المناعي والأدوية الموجهة والعلاج الإشعاعي والتدخلي.", link: "اسأل عن علاج الأورام" },
      { title: "الجراحة وجراحة العظام", text: "استبدال المفاصل والعمود الفقري والفتق والقلب وغيرها من العمليات المخططة في مستشفيات معتمدة.", link: "خيارات الجراحة" },
      { title: "الفحص الصحي الشامل", text: "فحص كامل للجسم خلال يوم أو يومين مع تصوير وتحاليل وتقرير مكتوب واضح.", link: "احجز فحصًا" },
      { title: "الطب الصيني التقليدي والتأهيل", text: "الوخز بالإبر والعلاج بالأعشاب وبرامج التعافي إلى جانب الطب الحديث.", link: "اكتشف رعاية التعافي" },
      { title: "التأشيرة والسفر والإقامة", text: "خطاب دعوة لتأشيرة العلاج وإرشاد حجز الطيران والاستقبال في المطار والفندق والتنقل.", link: "خطط لرحلتك" }
    ]
  },
  why: {
    tag: "لماذا نحن",
    title: "فريق واحد يتولى كل شيء",
    text: "من اللغة إلى السفر، ننظم كل التفاصيل لتتلقى العلاج بطمأنينة.",
    items: [
      { title: "دعم بالعربية والإنجليزية والصينية", text: "منسقونا ومترجمونا يضمنون أن تفهم طبيبك ويفهمك." },
      { title: "مستشفيات وأطباء مختارون بعناية", text: "نتعاون فقط مع مستشفيات وأطباء اختصاصيين اخترناهم بعناية." },
      { title: "مكتب في دبي وخدمة شخصية", text: "زرنا في ديرة، أو تواصل معنا هاتفيًا وعبر واتساب كل يوم." },
      { title: "عروض أسعار شاملة وواضحة", text: "تحصل على تقدير مكتوب للتكاليف قبل بدء العلاج دون مفاجآت." },
      { title: "التأشيرة والسفر علينا", text: "نساعدك في خطاب الدعوة والرحلة والاستقبال والإقامة." },
      { title: "سرية تامة لملفاتك", text: "تُشارك تقاريرك وبياناتك فقط مع الأطباء الذين يحتاجون إليها." }
    ]
  },
  doctors: {
    tag: "أطباؤنا الشركاء",
    title: "أطباء قد تقابلهم في الصين",
    text: "شركاؤنا أطباء وجراحون ذوو خبرة في مستشفيات رائدة في الصين.",
    items: [
      { name: "البروفيسور Yin Qinwei", role: "كبير العلماء · خبير الخلايا الجذعية وncRNA", note: "باحث متخصص في الخلايا الجذعية والـRNA غير المشفر والطب التجديدي." },
      { name: "البروفيسور Zhang Tongcun", role: "عالم · مشرف دكتوراه", note: "خبرة بحثية في العلوم الطبية الحيوية وتقنيات CAR-T والأبحاث التطبيقية." },
      { name: "البروفيسور Zhu Hecheng", role: "أستاذ · خبير بحثي", note: "متخصص في الأبحاث الطبية الحيوية وبيولوجيا الخلايا والتكنولوجيا الحيوية." },
      { name: "البروفيسور Wen Hao", role: "أستاذ · مشرف دكتوراه", note: "متخصص في أبحاث الأمراض والدراسات السريرية وله خبرة أكاديمية واسعة." },
      { name: "البروفيسور Pan Guanghui", role: "أستاذ · مشرف دكتوراه", note: "باحث في الطب الحيوي والخلايا الجذعية والطب التجديدي." }
    ]
  },
  process: {
    tag: "كيف نعمل",
    title: "خمس خطوات من الاستفسار إلى التعافي",
    steps: [
      { title: "أرسل تقاريرك", text: "شارك تشخيصك وتقاريرك، ونراجعها بسرية ودون مقابل." },
      { title: "الخطة وعرض السعر", text: "يؤكد الاختصاصي ملاءمة الحالة، ونرسل لك خطة علاج وعرض سعر شاملًا وواضحًا." },
      { title: "التأشيرة والسفر", text: "نجهز خطاب الدعوة ونرشدك في حجز الطيران ونرتب الاستقبال والإقامة." },
      { title: "العلاج بمرافقة كاملة", text: "منسق ومترجم يرافقانك في كل موعد." },
      { title: "التعافي والمتابعة", text: "نرتب رعاية التعافي ونبقيك على تواصل مع أطبائك بعد عودتك." }
    ]
  },
  testimonials: {
    tag: "قصص المرضى",
    title: "كلمات من المرضى وعائلاتهم",
    items: [
      { quote: "فهمت كل خطوة لأن المترجم كان معي في كل موعد. زال خوفي من السفر تمامًا.", name: "Khalid A.", role: "مريض من الإمارات" },
      { quote: "رتب الفريق التأشيرة والفندق وزيارات المستشفى، وكان عليّ فقط أن أركز على علاجي.", name: "Omar H.", role: "عائلة مريض من السعودية" },
      { quote: "كان عرض السعر واضحًا منذ البداية ولم تكن هناك مفاجآت. شعرنا بالرعاية طوال الوقت.", name: "Maria S.", role: "عائلة من أوروبا" }
    ]
  },
  faq: {
    tag: "الأسئلة الشائعة",
    title: "أسئلة يطرحها المرضى كثيرًا",
    items: [
      { q: "ما الحالات التي يمكنكم المساعدة فيها؟", a: "نساعد في علاج الأورام والعمليات المخططة وأمراض القلب والعظام والفحوصات الصحية والتأهيل. أرسل تقاريرك ونخبرك إن كان بإمكاننا المساعدة." },
      { q: "كم يستغرق الحصول على موعد؟", a: "بعد استلام تقاريرك نؤكد الخطة عادة بسرعة. ويعتمد الموعد على المستشفى وحالتك." },
      { q: "هل تساعدون في التأشيرة؟", a: "نعم. نجهز خطاب الدعوة ونرشدك في إجراءات تأشيرة العلاج حسب جنسيتك." },
      { q: "هل سيترجم لي أحد؟", a: "نعم. يرافقك منسق يتحدث العربية أو الإنجليزية أو الصينية في مواعيدك." },
      { q: "كم ستكون تكلفة العلاج؟", a: "تعتمد التكلفة على المستشفى والعلاج. تحصل على تقدير مكتوب شامل قبل أن تلتزم." },
      { q: "ماذا عن المتابعة بعد عودتي؟", a: "نرتب متابعة عن بُعد مع أطبائك ونساعدك في إرسال التقارير الجديدة." }
    ]
  },
  contact: {
    tag: "احجز موعدًا",
    title: "حدثنا عن حالتك",
    text: "أرسل طلبك وسيرد عليك منسقنا عبر واتساب أو الهاتف.",
    formTitle: "طلب موعد",
    formNote: "الحقول المشار إليها بـ * إلزامية.",
    name: "الاسم الكامل *", phone: "رقم الهاتف *", email: "البريد الإلكتروني", service: "الخدمة", message: "رسالتك",
    messagePh: "اكتب حالتك الصحية أو المواعيد المفضلة",
    selectService: "اختر الخدمة",
    send: "إرسال الطلب",
    visit: "زورنا",
    callLabel: "اتصال أو واتساب",
    emailLabel: "البريد الإلكتروني",
    hoursLabel: "ساعات العمل",
    hours: "من 10:00 صباحًا إلى 10:00 مساءً، يوميًا",
    address: "برج النهار مول، المطينة، الطابق M2، ديرة، دبي، الإمارات العربية المتحدة",
    err: "يرجى إدخال الاسم ورقم الهاتف، وبريد إلكتروني صحيح إن أضفته.",
    ok: "طلبك جاهز. سيفتح واتساب لترسله إلينا.",
    waIntro: "طلب موعد جديد"
  },
  footer: {
    blurb: "خدمة طبية مقرها دبي ترشد المرضى إلى أفضل المستشفيات في الصين.",
    quick: "روابط سريعة", contactH: "التواصل", hoursH: "ساعات العمل",
    rights: "جميع الحقوق محفوظة.",
    disclaimer: "المعلومات في هذا الموقع عامة وليست نصيحة طبية. القرارات العلاجية يتخذها أطباؤك."
  }
}
};
/* =============================== END OF EDITABLE CONTENT =============================== */


/* =========================================================
   3. SCRIPT (you normally do not need to edit below)
   ========================================================= */
(function () {
  "use strict";
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const C = CONFIG;

  /* ---------- Language state ---------- */
  const LANGS = ["en", "zh", "ar"];
  let lang = C.defaultLang;
  try {
    const saved = localStorage.getItem("tab-lang");
    if (saved && LANGS.includes(saved)) lang = saved;
    else {
      const nav = (navigator.language || "").slice(0, 2).toLowerCase();
      if (LANGS.includes(nav)) lang = nav;
    }
  } catch (_) {}

  const dig = (obj, path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);
  const t = path => { const v = dig(TEXT[lang], path); return v != null ? v : dig(TEXT.en, path); };
  const esc = s => String(s).replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));

  /* ---------- Icons ---------- */
  const ICONS = {
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',
    activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z"/><path d="M2 21c0-3 1.9-5.5 6-7"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20"/>',
    pin: '<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    plane: '<path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    doc: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/>',
    sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 17l.7 1.8L21.5 19.5l-1.8.7L19 22l-.7-1.8-1.8-.7 1.8-.7z"/>',
    check: '<path d="M20 6L9 17l-5-5"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>'
  };
  const svg = (n, extra = "") => `<svg class="icon ${extra}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n] || ICONS.heart}</svg>`;
  const SOCIAL_ICONS = {
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    youtube: '<path d="M22.5 6.4a2.8 2.8 0 0 0-2-2C18.8 4 12 4 12 4s-6.8 0-8.5.4a2.8 2.8 0 0 0-2 2C1 8.1 1 12 1 12s0 3.9.5 5.6a2.8 2.8 0 0 0 2 2C5.2 20 12 20 12 20s6.8 0 8.5-.4a2.8 2.8 0 0 0 2-2C23 15.9 23 12 23 12s0-3.9-.5-5.6z"/><path d="M9.75 15.02L15.5 12l-5.75-3.02z"/>',
    whatsapp: '<path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.5A8.5 8.5 0 1 1 21 11.5z"/>'
  };

  const waBase = "https://wa.me/" + C.whatsappNumber.replace(/\D/g, "");

  /* ---------- Reveal on scroll ---------- */
  let booted = false;
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (!en.isIntersecting) return;
    en.target.classList.add("in");
    if (en.target.id === "counters") runCounters();
    io.unobserve(en.target);
  }), { threshold: .15 });
  function watch(root) {
    $$(".reveal", root || document).forEach(el => { if (booted) el.classList.add("in"); else io.observe(el); });
  }

  /* ---------- Static (one-time) content ---------- */
  $$("[data-company]").forEach(e => e.textContent = C.company);
  $$("[data-phone]").forEach(e => { e.textContent = C.phone; e.href = "tel:" + C.phone.replace(/[^\d+]/g, ""); });
  if (C.email) $$("[data-email]").forEach(e => { e.textContent = C.email; e.href = "mailto:" + C.email; });
  else $$("[data-email-row]").forEach(e => e.hidden = true);
  $("#year").textContent = new Date().getFullYear();
  $("#waFab").href = waBase;
  $("#mapFrame").src = C.mapSrc;
  $("#brandLogo").alt = C.company + " logo";
  $(".footer-logo").alt = C.company + " logo";
  $("#aboutImg").src = C.images.about;
  $("#socials").innerHTML = Object.keys(C.social).map(k =>
    `<a href="${esc(C.social[k])}" target="_blank" rel="noopener" aria-label="${k}"><svg class="icon" viewBox="0 0 24 24">${SOCIAL_ICONS[k]}</svg></a>`
  ).join("") + `<a href="${waBase}" target="_blank" rel="noopener" aria-label="whatsapp"><svg class="icon" viewBox="0 0 24 24">${SOCIAL_ICONS.whatsapp}</svg></a>`;

  /* ---------- Hero slider ---------- */
  const slidesEl = $("#slides"), dotsEl = $("#heroDots");
  let cur = 0, timer;
  dotsEl.innerHTML = C.images.hero.map((_, i) => `<button class="dot${i === 0 ? " active" : ""}" aria-label="Slide ${i + 1}"></button>`).join("");
  function renderSlides() {
    const copy = t("hero");
    slidesEl.innerHTML = C.images.hero.map((src, i) => `
      <div class="slide${i === cur ? " active" : ""}">
        <img src="${esc(src)}" alt="${esc(copy[i].alt)}" ${i === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} width="1600" height="900">
        <div class="container slide-content"><div class="slide-copy">
          <h1>${esc(copy[i].title)}</h1>
          <p>${esc(copy[i].text)}</p>
          <div class="actions">
            <a href="https://wa.me/971509867589?text=Hello%20Tareek%20Al%20Bahar%20Tours%2C%20I%20would%20like%20to%20book%20a%20medical%20appointment." class="btn btn-gold">${esc(t("btn.book"))}</a>
            <a href="tel:+971509867589" class="btn btn-ghost">${esc(t("btn.contact"))}</a>
          </div>
        </div></div>
      </div>`).join("");
  }
  function go(n) {
    const slides = $$(".slide"), dots = $$(".dot", dotsEl);
    slides[cur].classList.remove("active"); dots[cur].classList.remove("active");
    cur = (n + slides.length) % slides.length;
    slides[cur].classList.add("active"); dots[cur].classList.add("active");
  }
  const start = () => { clearInterval(timer); timer = setInterval(() => go(cur + 1), C.slideInterval); };
  $("#next").onclick = () => { go(cur + 1); start(); };
  $("#prev").onclick = () => { go(cur - 1); start(); };
  $$(".dot", dotsEl).forEach((d, i) => d.onclick = () => { go(i); start(); });
  $("#home").addEventListener("mouseenter", () => clearInterval(timer));
  $("#home").addEventListener("mouseleave", start);

  /* ---------- Counters ---------- */
  let countersRan = false;
  function renderCounters() {
    const labels = t("about.counters");
    const box = $("#counters");
    if (!box.children.length) {
      box.innerHTML = C.counters.map((c, i) => `<div class="counter"><b data-target="${c.value}" data-suffix="${esc(c.suffix)}">0${esc(c.suffix)}</b><span data-i="${i}"></span></div>`).join("");
    }
    $$("span[data-i]", box).forEach(s => s.textContent = labels[s.dataset.i]);
    if (countersRan) $$("b[data-target]", box).forEach(b => b.textContent = (+b.dataset.target).toLocaleString("en-US") + b.dataset.suffix);
  }
  function runCounters() {
    if (countersRan) return; countersRan = true;
    $$("#counters b[data-target]").forEach(el => {
      const target = +el.dataset.target, suf = el.dataset.suffix, t0 = performance.now(), dur = 1800;
      (function tick(now) {
        const p = Math.min((now - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * e).toLocaleString("en-US") + suf;
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }

  /* ---------- Card sections ---------- */
  function renderCards() {
    $("#aboutChecks").innerHTML = t("about.checks").map(x => `<li>${svg("check")}<span>${esc(x)}</span></li>`).join("");
    $("#chinaGrid").innerHTML = t("whyChina.cards").map((c, i) => `
      <article class="card china reveal" data-delay="${i + 1}"><div class="svc-ico small">${svg("sparkle")}</div><h3>${esc(c.title)}</h3><p>${esc(c.text)}</p></article>`).join("");
    $("#serviceGrid").innerHTML = t("services.items").map((s, i) => `
      <article class="card reveal" data-delay="${i % 3 + 1}">
        <div class="svc-ico">${svg(C.icons.services[i])}</div><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p>
        <a class="more" href="#contact" data-service="${i}">${esc(s.link)} ${svg("arrow", "flip")}</a>
      </article>`).join("");
    $("#whyGrid").innerHTML = t("why.items").map((w, i) => `
      <article class="glass reveal" data-delay="${i % 3 + 1}">${svg(C.icons.why[i])}<h3>${esc(w.title)}</h3><p>${esc(w.text)}</p></article>`).join("");
    $("#doctorGrid").innerHTML = t("doctors.items").map((d, i) => `
      <article class="card doc reveal" data-delay="${i}">
        <div class="doc-photo"><img src="${esc(C.images.doctors[i])}" alt="${esc(d.name)}, ${esc(d.role)}" loading="lazy" width="700" height="790"></div>
        <div class="doc-info"><h3>${esc(d.name)}</h3><span>${esc(d.role)}</span><p>${esc(d.note)}</p></div>
      </article>`).join("");
    $("#timeline").innerHTML = t("process.steps").map((p, i) => `
      <div class="step reveal" data-delay="${i % 4}"><div class="step-num">${i + 1}</div><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></div>`).join("");
    $("#aboutImg").alt = t("about.imgAlt");
  }
  // Clicking a service link pre-selects that service in the form
  $("#serviceGrid").addEventListener("click", e => {
    const a = e.target.closest("[data-service]");
    if (a) $("#f-service").selectedIndex = +a.dataset.service + 1;
  });

  /* ---------- Testimonials ---------- */
  const tTrack = $("#tTrack"), tDots = $("#tDots");
  let ti = 0, tTimer;
  function tGo(n) {
    const dots = $$(".dot", tDots);
    ti = (n + dots.length) % dots.length;
    tTrack.style.transform = `translateX(-${ti * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("active", i === ti));
  }
  const tStart = () => { clearInterval(tTimer); tTimer = setInterval(() => tGo(ti + 1), C.testimonialInterval); };
  function renderTestimonials() {
    const items = t("testimonials.items");
    tTrack.innerHTML = items.map((x, i) => `
      <div class="t-slide"><figure class="t-card">
        <div class="stars" aria-label="5 / 5">★★★★★</div>
        <blockquote>${esc(x.quote)}</blockquote>
        <figcaption class="t-person"><img src="${esc(C.images.patients[i])}" alt="${esc(x.name)}" loading="lazy" width="56" height="56"><div><b>${esc(x.name)}</b><span>${esc(x.role)}</span></div></figcaption>
      </figure></div>`).join("");
    tDots.innerHTML = items.map((_, i) => `<button class="dot" aria-label="${i + 1}"></button>`).join("");
    $$(".dot", tDots).forEach((d, i) => d.onclick = () => { tGo(i); tStart(); });
    tGo(ti);
  }

  /* ---------- FAQ ---------- */
  const faqList = $("#faqList");
  function renderFaq() {
    faqList.innerHTML = t("faq.items").map((f, i) => `
      <div class="faq-item">
        <button class="faq-q" aria-expanded="false" aria-controls="fa${i}" id="fq${i}">${esc(f.q)}<span class="pm" aria-hidden="true"></span></button>
        <div class="faq-a" id="fa${i}" role="region" aria-labelledby="fq${i}"><p>${esc(f.a)}</p></div>
      </div>`).join("");
    $$(".faq-item", faqList).forEach(item => {
      const btn = $(".faq-q", item), panel = $(".faq-a", item);
      btn.onclick = () => {
        const open = !item.classList.contains("open");
        $$(".faq-item", faqList).forEach(o => { o.classList.remove("open"); $(".faq-q", o).setAttribute("aria-expanded", "false"); $(".faq-a", o).style.maxHeight = null; });
        if (open) { item.classList.add("open"); btn.setAttribute("aria-expanded", "true"); panel.style.maxHeight = panel.scrollHeight + "px"; }
      };
    });
  }

  /* ---------- Form ---------- */
  function renderServiceSelect() {
    const sel = $("#f-service"), idx = sel.selectedIndex;
    sel.innerHTML = `<option value="">${esc(t("contact.selectService"))}</option>` + t("services.items").map(s => `<option>${esc(s.title)}</option>`).join("");
    sel.selectedIndex = Math.max(idx, 0);
  }
  const form = $("#apptForm"), msg = $("#formMsg");
  form.addEventListener("submit", async e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(form));
    msg.className = "form-msg";
    if (!d.name.trim() || !d.phone.trim() || (d.email.trim() && !/^\S+@\S+\.\S+$/.test(d.email))) {
      msg.textContent = t("contact.err"); msg.className = "form-msg err"; return;
    }
    const body = `${t("contact.waIntro")} - ${C.company}\n\n${d.name}\n${d.phone}\n${d.email || ""}\n${d.service || ""}\n\n${d.message || ""}`.replace(/\n{3,}/g, "\n\n");
    if (C.formEndpoint) {
      try {
        const r = await fetch(C.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(d) });
        if (!r.ok) throw new Error();
        msg.textContent = "✓"; msg.className = "form-msg ok"; form.reset();
      } catch (_) { msg.textContent = t("contact.err"); msg.className = "form-msg err"; }
    } else {
      window.open(waBase + "?text=" + encodeURIComponent(body), "_blank", "noopener");
      msg.textContent = t("contact.ok"); msg.className = "form-msg ok";
    }
  });

  /* ---------- Header, menu, back to top ---------- */
  const header = $("#header"), burger = $("#burger"), nav = $("#nav"), toTop = $("#toTop");
  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 40 || nav.classList.contains("open"));
    toTop.classList.toggle("show", window.scrollY > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  burger.onclick = () => {
    const o = nav.classList.toggle("open");
    burger.classList.toggle("open", o); burger.setAttribute("aria-expanded", o); onScroll();
  };
  $$("a", nav).forEach(a => a.addEventListener("click", () => { nav.classList.remove("open"); burger.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); onScroll(); }));
  toTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  /* ---------- Language switching ---------- */
  function applyStatic() {
    $$("[data-t]").forEach(el => el.textContent = t(el.dataset.t));
    $$("[data-t-ph]").forEach(el => el.placeholder = t(el.dataset.tPh));
    document.title = t("meta.title");
    const md = $('meta[name="description"]'); if (md) md.content = t("meta.description");
    $$("[data-lang]").forEach(b => { const on = b.dataset.lang === lang; b.classList.toggle("active", on); b.setAttribute("aria-pressed", on); });
  }
  function applyLang() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    applyStatic();
    renderSlides(); renderCounters(); renderCards(); renderTestimonials(); renderFaq(); renderServiceSelect();
    watch();
  }
  $$("[data-lang]").forEach(b => b.addEventListener("click", () => {
    lang = b.dataset.lang;
    try { localStorage.setItem("tab-lang", lang); } catch (_) {}
    applyLang();
  }));

  applyLang();
  booted = true;
  onScroll();
  start(); tStart();
})();
