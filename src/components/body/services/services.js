import seolLogo from '../../../assets/cardsImages/seologo.png';
import digitalLogo from '../../../assets/cardsImages/digitalmarketinglogo.png';
import weblogo from '../../../assets/cardsImages/weblogo.png';
import applicationLogo from '../../../assets/cardsImages/applicationlogo.png';
import dataLogo from '../../../assets/cardsImages/datanalysislogo.png';
import digiBlog from '../../../assets/blogImages/digitalblog1.jpg'
import uiImgBlog  from '../../../assets/blogImages/uipage.jpeg'
export const servicesData = [
    {
      title: 'Digital Marketing',
      description: 'Expand your online presence',
      image: digitalLogo,
      details: [
        'Social Media Marketing',
        'Pay-Per-Click Advertising',
        'E-Mail Marketing',
        'Content Creation',
      ],
    },
    {
      title: 'SEO Services',
      description: 'Boost your search rankings',
      image: seolLogo,
      details: [
        'Onpage SEO',
        'Off Page SEO',
        'Technical SEO',
        'Keyword Research',
      ],
    },
    {
      title: 'Web Development',
      description: 'Build responsive websites',
      image: weblogo,
      details: [
        'Custom Websites',
        'E-Commerce Solutions',
        'Content Management System',
        'Responsive Design',
      ],
    },
    {
      title: 'App Development',
      description: 'Create custom mobile apps',
      image: applicationLogo,
      details: [
        'iOS & Android App',
        'Cross-Platform Solutions',
        'User Experience Design',
        'Maintenance & Support',
      ],
    },
    {
      title: 'Data Analysis',
      description: 'Scale your business with data',
      image: dataLogo,
      details: [],
    },
  ];

export const globalServiceData = {
  partnershipContent: `At Trishoka Digital Services, we pride ourselves on fostering a culture of collaboration and innovation. Our
      commitment to excellence is reflected in our diverse partnerships with clients, which are solving some of the
      serious problems. Come join us to redefine possibilities together`,
  partnershipHeader:'PARTNERSHIPS',

}
export const technologies = [
  {
    title: 'Digital Marketing',
    description: `Digital marketing involves promoting products or services using online platforms like social media, search engines, and email. It helps businesses reach their target audience, boost brand awareness, and drive sales. Key tactics include SEO, content marketing, and paid advertising.`,
    imageUrl: digiBlog,
    imageAlt: 'Digital img',
    className: 'slide-in-right',
    className1: { marginRight: 0 } 
  },
  {
    title: 'HTML5 & CSS3',
    description: `HTML5 is the latest version of the markup language used to structure web content, introducing semantic elements for better accessibility. CSS3 is the latest version of Cascading Style Sheets, enabling advanced styling options like animations, transitions, and gradients.`,
    imageUrl: 'https://www.webdevelopmenthelp.net/wp-content/uploads/2015/09/Advantages-of-HTML5-and-CSS3.png',
    imageAlt: 'HTML5 & CSS3 Image',
    className: 'slide-in',
    className1: { marginLeft: 0} 
  },
  {
    title: 'Django',
    description: `Django is a high-level Python web framework that promotes rapid development and clean, pragmatic design. It follows the "batteries-included" philosophy, providing built-in features like authentication, URL routing, and an admin interface.`,
    imageUrl: 'data:image/png;base64,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',
    imageAlt: 'Django Image',
    className: 'slide-in-left',
    className1: { marginRight: 0 }
  },
  {
    title: 'UI/UX Designer',
    description: `While UI focuses on the interface and aesthetic presentation, UX is about crafting a seamless
                experience from start to finish, ensuring that the user’s journey through the product is logical,
                intuitive, and enjoyable.`,
    imageUrl: uiImgBlog,
    imageAlt: 'JavaScript Image',
    className: 'slide-in-right',
    className1: { marginLeft: 0 } 
  },
  {
    title: 'ReactJS',
    description: `ReactJS is a popular JavaScript library for building user interfaces, especially for single-page applications. It allows developers to create reusable UI components and manage the application state efficiently. React's virtual DOM enhances performance by minimizing direct interactions with the real DOM.`,
    imageUrl: 'https://cdn4.vectorstock.com/i/1000x1000/99/95/react-js-logo-vector-17109995.jpg',
    imageAlt: 'ReactJS Image',
    className: 'slide-in',
    className1: { marginRight: 0, paddingBottom: 30 } 
  },
];

export const jobs = [
  {
    title: "Digital Marketing",
    experience: "Fresher",
    availability: "Immediate Joiner",
    location: "Hyderabad (On-site)",
    qualifications: [
      "Bachelor's degree in Design or equivalent practical experience.",
      "Experience collaborating with multidisciplinary teams of Designers, Researchers, Engineers, Content Strategists, and Product Managers.",
      "Portfolio highlighting multiple projects that demonstrate experience crafting digital interfaces.",
    ],
  },
  {
    title: "Web Developer",
    experience: "6 Months Experience",
    availability: "Immediate Joiner or 15 days",
    location: "Hyderabad (On-site)",
    qualifications: [
      "Bachelor's degree in Design or equivalent practical experience.",
      "Experience collaborating with multidisciplinary teams.",
      "Portfolio highlighting multiple projects that demonstrate experience crafting digital interfaces.",
    ],
  },
  {
    title: "Backend Developer",
    experience: "1 Year Experience",
    availability: "Immediate Joiner or 15 days",
    location: "Hyderabad (On-site)",
    qualifications: [
      "Bachelor's degree in Design or equivalent practical experience.",
      "Experience collaborating with teams and solving problems.",
      "Portfolio highlighting multiple projects that demonstrate crafting digital interfaces.",
    ],
  },
  {
    title: "UI/UX Designer",
    experience: "Fresher",
    availability: "Immediate Joiner",
    location: "Hyderabad (On-site)",
    qualifications: [
      "Bachelor's degree in Design or equivalent practical experience.",
      "Experience collaborating with multidisciplinary teams.",
      "Portfolio highlighting multiple projects that demonstrate experience designing consumer-focused products.",
    ],
  },
];

export const reviews = [
  {
      author:"Priyanshika Reddy",
      text:"Great service and support! Highly recommended.",
      stars:4,
      postedOn:"Google"
  },
  {
      author:"Maheshwari Kamal",
      text:"Excellent customer care and...",
      stars:5,
      postedOn:"Google",
  }
]