import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    home: 'Home',
    about_us: 'about us',
    services: 'services',
    projects: 'Projects',
    clients: 'clients',
    faq: 'faq',
    blogs: 'blogs',
    works: 'how we works',
    contact: 'contact us',
    contact_today: 'Contact Us',
    welcome: 'Welcome',
    who_we_are: 'who we are?',
    more: 'See More',
    What_we_can: 'What we can do for you?',
    services_help: 'Service We Can Help You With',
    read_more: 'read more',
    why_choose: 'why choose us',
    our_projects: 'our projects',
    our_strength: 'OUR STRENGTH',
    our_priority: 'OUR PRIORITY',
    priority: 'Priority',
    transformation_journey: 'transformation journey',
    value_proposition: 'value proposition',
    company_structures: 'company structures',
    office_address: 'Office Address',
    twitter: 'Twitter',
    title_clients: 'We Are Proud To Work With A Number Of Leading Brands',
    send_mesg: 'Send us a Message',
    name_input: 'Name',
    email_input: 'E-mail',
    company_input: 'Company Name',
    job_input: 'Job title',
    textarea_input: 'Enter your message',
    phone_input: 'Phone',
    send_btn: 'Send',
    newProject_title: 'Start A New Project?',
    companyKod: 'Designed and developed with',
    testimonial_sub: 'Testimonial',
    Date: 'Date',
    language: 'Language',
    O: 'O',
    R: 'R',
    articles: 'articles',
    Contact: 'Contact',
    Directly: 'Directly',
  },
  ar: {
    home: 'الرئيسية',
    about_us: 'من نحن',
    services: 'الخدمات',
    projects: 'المشاريع',
    clients: 'عملائنا',
    faq: 'الاسئلة الشائعة',
    blogs: 'المدونة',
    works: 'كيف نعمل',
    contact: 'اتصل بنا',
    contact_today: 'اتصل بنا',
    welcome: 'اهلا بك',
    who_we_are: 'من نحن؟',
    more: 'مشاهدة المزيد',
    What_we_can: 'ما يمكننا القيام به بالنسبة لك؟',
    services_help: 'الخدمة التي يمكننا مساعدتك بها',
    read_more: 'اقرأ المزيد',
    why_choose: 'لماذا أخترتنا',
    our_projects: 'مشارعينا',
    our_strength: 'قوتنا',
    our_priority: 'أولويتنا',
    priority: 'أولوية',
    transformation_journey: 'رحلة التحول',
    value_proposition: 'موقع ذو قيمة',
    company_structures: 'هياكل الشركة',
    office_address: 'عنوان المكتب',
    twitter: 'تويتر',
    title_clients: 'نحن فخورون بالعمل مع عدد من العلامات التجارية الرائدة',
    send_mesg: 'أرسل لنا رسالة',
    name_input: 'الاسم',
    phone_input: 'الجوال',
    email_input: 'البريد الإلكتروني',
    company_input: 'اسم الشركة',
    job_input: 'اسم الوظيفة',
    textarea_input: 'اكتب رسالتك',
    send_btn: 'إرسال',
    newProject_title: 'بدء مشروع جديد؟',
    companyKod: 'تم تصميمه وتطويره باستخدام',
    testimonial_sub: 'اراء العملاء',
    date: 'التاريخ',
    language: 'اللغة',
    O: 'ا',
    R: 'و',
    Contact: 'اتصل',
    Directly: 'مباشر',
    articles: 'المقالات',
  },
};

const i18n = new VueI18n({
  locale: localStorage.getItem("lang") || "en", // set locale
  fallbackLocale: "eg", // set fallback locale
  messages, // set locale messages
});

export default i18n; 
