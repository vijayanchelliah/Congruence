import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add meta tags for SEO
const metaDescription = document.createElement('meta');
metaDescription.name = 'description';
metaDescription.content = 'Congruence Infrastructure Pvt. Ltd. offers professional construction and infrastructure development services. Quality craftsmanship and reliable service.';
document.head.appendChild(metaDescription);

// Add title
const titleTag = document.createElement('title');
titleTag.textContent = 'Congruence Infrastructure Pvt. Ltd. - Professional Construction Services';
document.head.appendChild(titleTag);

// Add Google Fonts
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap';
document.head.appendChild(fontLink);

// Add Font Awesome
const iconLink = document.createElement('link');
iconLink.rel = 'stylesheet';
iconLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
document.head.appendChild(iconLink);

// Add Open Graph tags
const ogTitle = document.createElement('meta');
ogTitle.setAttribute('property', 'og:title');
ogTitle.content = 'Congruence Infrastructure Pvt. Ltd. - Professional Construction Services';
document.head.appendChild(ogTitle);

const ogDescription = document.createElement('meta');
ogDescription.setAttribute('property', 'og:description');
ogDescription.content = 'Quality construction and infrastructure development services with a commitment to excellence.';
document.head.appendChild(ogDescription);

const ogType = document.createElement('meta');
ogType.setAttribute('property', 'og:type');
ogType.content = 'website';
document.head.appendChild(ogType);

createRoot(document.getElementById("root")!).render(<App />);
