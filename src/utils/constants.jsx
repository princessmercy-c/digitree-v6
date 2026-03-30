
import mercyImg from '../assets/MERCIVIX.jpeg';
import graceImg from '../assets/GRACe.jpeg';
import valentineImg from '../assets/Sir. Valentine.jpeg';
import courseWebDev from '../assets/course-web-dev.jpeg';
import courseDataAnalysis from '../assets/course-data-analysis.jpeg';
import courseUiUx from '../assets/course-ui-ux.jpeg';
import courseCybersecurity from '../assets/course-cybersecurity.jpeg';
import courseDigitalMarketing from '../assets/course-digital-marketing.jpg';
import courseReactMobile from '../assets/course-react-mobile.webp';
import techProgramsImg from '../assets/5-steps.jpg';
import networkConsultingImg from '../assets/network-consulting-2.jpg';
import techConsultingImg from '../assets/tech-consulting.jpg';
import incubationHubImg from '../assets/incubation-hub.jpg';
import salesGadgetsImg from '../assets/gadgets.jpg';
import onlineCoursesImg from '../assets/online-courses.jpg';

export const SITE = {
  name:         'Digitree Innovation',
  tagline:      'Innovate, earn and lead a digital generation',
  phone:        '+234 903 704 2744',
  whatsapp:     '2349037042744',
  email:        'digitreeinnovation@gmail.com',
  location:     'Nsukka, Enugu State, Nigeria',
  founded:      '2025',
  instagram:    'https://www.instagram.com/digitree_innovation?igsh=bnA1cmsxamwxZzV6',   
  tiktok:       'https://www.tiktok.com/@digitree1?_r=1&_t=ZS-94nJhBaw96W',
  facebook:     'https://www.facebook.com/profile.php?id=61583754311626',
  shopifyStore: 'https://shop.digitree.tech/',
}
// Update the WhatsApp Contact
export const WHATSAPP_NUMBER = "09037042744";
export const WHATSAPP_LINK = "https://wa.me/2349037042744"; 

export const BANK = {
  bankName:    'Zenith bank',
  accountName: 'Global harvest dynamic resources',
  accountNo:   '1216204804',          
}


export const fmt = (n) => '₦' + Number(n).toLocaleString('en-NG')


export const FEATURED_GADGET = {
  id:    'alienware-x17',
  name:  'Alienware X17 R1',
  tag:   'Gaming Laptop',
  badge: 'Staff Pick 🔥',
  price: 2700000,
  emoji: '💻',  
  specs: [
    { icon: 'fas fa-desktop',   label: 'Display',   value: '17" UHD 4K · 120Hz'       },
    { icon: 'fas fa-microchip', label: 'Processor', value: 'Intel Core i9-11980HK'     },
    { icon: 'fas fa-memory',    label: 'RAM',        value: '32GB DDR4'                },
    { icon: 'fas fa-hdd',       label: 'Storage',   value: '1.5TB NVMe SSD'            },
    { icon: 'fas fa-gamepad',   label: 'GPU',        value: 'RTX 3080 16GB GDDR6'      },
    { icon: 'fas fa-keyboard',  label: 'Keyboard',  value: 'Per-key RGB Mechanical'    },
  ],
  highlights: [
    '4K display with 120Hz refresh rate',
    'RTX 3080 for AAA gaming & creative work',
    'Per-key RGB mechanical keyboard',
    'Face unlock & IR camera',
    'Comes with original charger & packaging',
  ],
}


export const COURSES = [
  {
    id: 'c1', title: 'Web Development Fundamentals',
    desc: 'Build modern websites from scratch with HTML, CSS, and JavaScript. Perfect for beginners.',
    icon: '💻', image: courseWebDev, badge: 'Bestseller', duration: '6 weeks', level: 'Beginner', price: 100000,
    plans: [
      { name: 'Basic',   price: 100000, desc: 'Self-paced video access' },
      { name: 'Pro',     price: 150000, desc: '+ Live Q&A sessions & feedback' },
      { name: 'Premium', price: 200000, desc: '+ 1-on-1 mentorship & certificate' },
    ],
  },
  {
    id: 'c2', title: 'Data Analysis with Python',
    desc: 'Master data manipulation, visualisation, and business insights using Python and pandas.',
    icon: '📊', image: courseDataAnalysis, badge: 'Popular', duration: '5 weeks', level: 'Intermediate', price: 100000,
    plans: [
      { name: 'Basic',   price: 100000, desc: 'Self-paced video access' },
      { name: 'Pro',     price: 150000, desc: '+ Live Q&A sessions & feedback' },
      { name: 'Premium', price: 200000, desc: '+ 1-on-1 mentorship & certificate' },
    ],
  },
  {
    id: 'c3', title: 'UI/UX Design with Figma',
    desc: 'Design beautiful digital products. Learn wireframing, prototyping, and design systems.',
    icon: '🎨', image: courseUiUx, badge: 'New', duration: '4 weeks', level: 'Beginner', price: 120000,
    plans: [
      { name: 'Basic',   price: 120000, desc: 'Self-paced video access' },
      { name: 'Pro',     price: 150000, desc: '+ Live Q&A sessions & feedback' },
      { name: 'Premium', price: 200000, desc: '+ 1-on-1 mentorship & certificate' },
    ],
  },
  {
    id: 'c4', title: 'Cybersecurity Essentials',
    desc: 'Learn network security, ethical hacking basics, and how to protect digital systems.',
    icon: '🔒', image: courseCybersecurity, badge: 'Hot', duration: '5 weeks', level: 'Intermediate', price: 200000,
    plans: [
      { name: 'Basic',   price: 200000, desc: 'Self-paced video access' },
      { name: 'Pro',     price: 250000, desc: '+ Live Q&A sessions & feedback' },
      { name: 'Premium', price: 300000, desc: '+ 1-on-1 mentorship & certificate' },
    ],
  },
  {
    id: 'c5', title: 'Digital Marketing & SEO',
    desc: 'Grow brands online with social media marketing, content strategy, SEO, and paid ads.',
    icon: '📱', image: courseDigitalMarketing, badge: 'Trending', duration: '4 weeks', level: 'Beginner', price: 100000,
    plans: [
      { name: 'Basic',   price: 100000, desc: 'Self-paced video access' },
      { name: 'Pro',     price: 120000, desc: '+ Live Q&A sessions & feedback' },
      { name: 'Premium', price: 150000, desc: '+ 1-on-1 mentorship & certificate' },
    ],
  },
  {
    id: 'c6', title: 'React & Mobile App Development',
    desc: 'Build cross-platform apps with React and React Native — deploy to iOS, Android, and web.',
    icon: '📲', image: courseReactMobile, badge: 'New', duration: '7 weeks', level: 'Intermediate', price: 150000,
    plans: [
      { name: 'Basic',   price: 150000, desc: 'Self-paced video access' },
      { name: 'Pro',     price: 170000, desc: '+ Live Q&A sessions & feedback' },
      { name: 'Premium', price: 200000, desc: '+ 1-on-1 mentorship & certificate' },
    ],
  },
]

export const SERVICES = [
  { icon: techProgramsImg,     title: 'Tech Training Programs',  desc: 'Hands-on bootcamps in web development, data science, cybersecurity, UI/UX — by industry professionals.' },
  { icon: onlineCoursesImg,     title: 'Online Courses',           desc: 'Access our course library from anywhere with structured modules and downloadable certificates.' },
  { icon: incubationHubImg,     title: 'Incubation Hub',           desc: 'Mentorship, resources, and a collaborative environment for startups to bring ideas to life.' },
  { icon: salesGadgetsImg,      title: 'Sale of Gadgets',          desc: 'Buy quality laptops, iPhones, MacBooks, and accessories. Full catalogue on our Shopify store.' },
  { icon: techConsultingImg,     title: 'Tech Consulting',          desc: 'Advisory services helping organisations leverage digital tools and strategies for growth.' },
  { icon: networkConsultingImg,  title: 'Community & Networking',   desc: 'A vibrant network of developers, designers, and entrepreneurs across Nigeria.' },
]


export const TEAM_MEMBERS = [
  {
    name: 'MR. VALENTINE ONYEKACHI FESTUS',
    role: 'CEO',
    image: valentineImg,
    color: '#1d4ed8'
  },
  {
    name: 'NWAFOR CHIDERA MICHAEL',
    role: 'COO',
    color: '#b45309',
    image: 'https://cdn.shopify.com/s/files/1/0656/6386/0839/files/IMG-20260320-WA0049.jpg?v=1774027225'
  },
  {
    name: 'SUNDAY-NWUMA GRACE CHINENYE',
    role: 'CFO',
    image: graceImg,
    color: '#1d4ed8'
  },
  {
    name: 'AGBAEZE MERCY ADAEZE (MERCIVIX)',
    role: 'LEAD WEB DEV',
    image: mercyImg,
    color: '#6f42c1'
  },
];



export const BLOG_POSTS = [
  
  {
    id: "what-is-technology",
    title: "Technology is a Tool, Not a Trophy: Redefining Innovation",
    author: "Digitree Team",
    date: "March 18, 2026",
    excerpt: "At Digitree, we believe technology isn't just the device in your hand—it’s the solution that device provides for the Nigerian creator.",
    content: `
      <p>If you ask ten people "What is technology?", nine will point to their smartphones. But at Digitree, we believe technology isn't just the hardware—it’s the <strong>empowerment</strong> that hardware provides.</p>
      
      <h3>The Shift in Perspective</h3>
      <p>The word technology comes from the Greek 'technologia', meaning the craft of solving a problem. In our context, a <strong>Solar Power Station</strong> isn't just a battery; it’s the ability to keep working through a blackout. An <strong>Alienware X17 R1</strong> isn't just a laptop; it’s a high-performance engine that allows a developer in Nsukka to compete with a developer in New York.</p>

      <h3>Why This Matters in Nigeria</h3>
      <p>Technology is the ultimate equalizer. it allows a small business to accept secure payments through <strong>Paystack</strong> without needing a massive physical storefront. It’s the bridge between where you are and where you want to be.</p>

      <h3>Our Definition</h3>
      <p>To us, technology is <strong>Efficiency</strong>. Whether it's the React code we write or the hardware we ship, every piece of tech we touch is vetted for one thing: Does it make your growth easier?</p>
    `,
    tags: ["Tech Philosophy", "Innovation", "Nigeria Tech"],
    image: "https://cdn.shopify.com/s/files/1/0656/6386/0839/files/yyy.jpg?v=1774010052"
  },
{
  id: "hardware-business-asset",
  title: "The Developer's Dilemma: Why Hardware is Your Greatest Asset",
  author: "Digitree Editorial",
  date: "March 16, 2026",
  excerpt: "Your laptop is your office. Discover why investing in high-performance gear like the Alienware X17 is the smartest move for Nigerian professionals.",
  content: `
    <p>In the world of tech, your hardware is your greatest leverage. But why do so many Nigerian professionals settle for 'good enough'?</p>
    
    <h3>More Than Gaming</h3>
    <p>While machines like the <strong>Alienware X17 R1</strong> are famous for gaming, their real power lies in professional productivity. With an i9 processor and RTX 3080 graphics, these aren't just toys—they are industrial-grade workstations.</p>

    <h3>Solving Local Challenges</h3>
    <p>High-end hardware handles the heat of the Nigerian climate better through advanced thermal engineering. It handles the 'hustle' of remote work by being reliable when you need it most.</p>

    <h3>The ROI of Tech</h3>
    <p>If your laptop saves you 1 hour of lag a day, it pays for itself in months. At Digitree, we don't just sell specs; we sell <strong>Time</strong> and <strong>Reliability</strong>.</p>
  `,
  tags: ["Productivity", "Tech Careers", "Alienware"],
  image: "https://cdn.shopify.com/s/files/1/0656/6386/0839/files/IMG-20260312-WA0011.jpg?v=1774002317"
},

  {
  id: "silent-power-revolution",
  title: "The Silent Revolution: Portable Power for Remote Work",
  author: "Digitree Energy",
  date: "March 22, 2026",
  excerpt: "Stop letting the grid dictate your deadline. Discover why portable power stations are the ultimate upgrade for the Nigerian tech ecosystem.",
  content: `
    <p>In Nigeria, the 'grid' is often a developer's biggest hurdle. But what if you could take control of your own energy?</p>
    
    <h3>Beyond the Generator</h3>
    <p>Petrol generators are the past. <strong>Portable Power Stations</strong> are the future. They offer silent, fume-free power that won't disturb your focus or your neighbors.</p>

    <h3>Protect Your High-End Gear</h3>
    <p>Cheap power sources can fry an <strong>Alienware motherboard</strong> in seconds. Our power stations provide Pure Sine Wave energy—the cleanest possible electricity for your sensitive devices.</p>

    <h3>Solar-Ready Freedom</h3>
    <p>With solar integration, you can achieve true power independence. Charge for free, work for free, and stay live 24/7.</p>
  `,
  tags: ["Solar Power", "Remote Work", "Tech Solutions"],
  image: "https://cdn.shopify.com/s/files/1/0656/6386/0839/files/images.jpg?v=1774010239"
}

]


export const TESTIMONIALS = [
  {
    initials: 'CJ', name: 'Chidi Johnson',  role: 'Full-Stack Developer',
    text: '"Digitree transformed my career. I went from zero coding knowledge to landing a developer role in 6 months. The training quality is simply exceptional."',
  },
  {
    initials: 'AN', name: 'Amaka Nwosu',    role: 'Tech Founder, Nsukka',
    text: '"The incubation hub gave my startup exactly the mentorship and resources we needed. Our app now has over 5,000 active users — Digitree made that possible!"',
  },
  {
    initials: 'TB', name: 'Tunde Balogun',  role: 'UI/UX Designer',
    text: '"I bought my MacBook from Digitree and enrolled in the design course the same day. Best investment ever — great prices and world-class instruction."',
  },
]
