const app = document.getElementById('app');

const inspirationalPhrases = [
  'O design não decora, soluciona.',
  'Design é a arte de resolver com beleza.',
  'Cada pixel é uma decisão.',
  'Design é a mente em forma visual.',
  'O simples é o mais difícil de alcançar.',
  'O design certo fala sem palavras.',
  'Design é onde função e emoção se encontram.',
  'O design é a primeira impressão e a última lembrança.',
  'Design é clareza visual.',
  'Um bom design não chama atenção, ele convence.',
  'Design é mais sobre pensar do que desenhar.',
  'O design não é visto, é sentido.',
  'Um bom design não precisa de explicação.',
  'Design é inteligência visual.',
  'O design certo cria confiança instantânea.',
  'Design é ordem em meio ao caos.',
  'O design certo transforma percepção em valor.',
  'Design é propósito visual.',
  'O detalhe é o design.',
  'Design é o equilíbrio entre estética e razão.',
  'Design é o que dá forma à ideia.',
  'O bom design é atemporal.',
  'Design é a ponte entre ideia e experiência.',
  'O design comunica antes das palavras.',
  'Design é o silêncio que fala alto.',
  'O design certo é invisível.',
  'Design é intenção transformada em forma.',
  'Design é mais atitude do que aparência.',
  'A forma segue o propósito.',
  'O design certo não envelhece.',
];

const services = [
  {
    id: 'design-grafico',
    title: 'Design Gráfico',
    description: 'Identidade visual completa para o seu negócio',
    icon: 'palette',
    image: 'assets/img/dg.png',
    subServices: [
      { name: 'Cartão de Visita', price: '200kz' },
      { name: 'Flyer', price: '1 000kz' },
      { name: 'Flyers em PDF', price: '2 000kz' },
      { name: 'Logotipo', price: '15 000kz' },
      { name: 'Identidade Visual', price: '20 000kz' },
    ]
  },
  {
    id: 'sites',
    title: 'Sites',
    description: 'Websites modernos e funcionais',
    icon: 'globe',
    image: 'assets/img/sites.jpg',
    subServices: [
      { name: 'Menu Digital', price: '40 000kz' },
      { name: 'Landing Page', price: '60 000kz' },
      { name: 'Portfólio', price: '75 000kz' },
      { name: 'Loja', price: '125 000kz' },
      { name: 'Hotel', price: '250 000kz' },
      { name: 'Agência e Institucional', price: '300 000kz' },
    ]
  },
  {
    id: 'video',
    title: 'Vídeo',
    description: 'Produção e edição de vídeo profissional',
    icon: 'video',
    image: 'assets/img/video.jpg',
    subServices: [
      { name: 'Edição Básica', price: '5 000kz' },
      { name: 'Edição Média', price: '8 000kz' },
      { name: 'Edição Profissional', price: '20 000kz' },
    ]
  },
  {
    id: 'filmagem',
    title: 'Filmagem',
    description: 'Captação profissional de imagens',
    icon: 'camera',
    image: 'assets/img/filme.jpg',
    subServices: [
      { name: 'Filmagem sem edição', price: '35 000kz' },
      { name: 'Filmagem com edição', price: '70 000kz' },
      { name: 'Filmagem + edição + modelo', price: '85 000kz' },
      { name: 'Filmagem + edição + fotos', price: '90 000kz' },
      { name: 'Filmagem+edição+modelo+vídeo+modelo+drone', price: '130 000kz' },
      
    ]
  },
];

const blogPosts = [
  {
    title: 'Tendências de Design em 2025',
    date: '15 Jan 2025',
    excerpt: 'Descubra as principais tendências que estão a moldar o design este ano.'
  },
  {
    title: 'A Importância da Identidade Visual',
    date: '10 Jan 2025',
    excerpt: 'Como uma identidade visual forte pode transformar o seu negócio.'
  },
  {
    title: 'Design Minimalista: Menos é Mais',
    date: '5 Jan 2025',
    excerpt: 'Explore os princípios do design minimalista e sua eficácia.'
  },
];

const faqs = [
  {
    question: 'Quanto tempo demora um projeto?',
    answer: 'O tempo varia conforme a complexidade. Projetos simples levam 3-5 dias, enquanto projetos complexos podem levar 2-4 semanas.'
  },
  {
    question: 'Fazem revisões no trabalho?',
    answer: 'Sim, todos os projetos incluem até 2 revisões gratuitas para garantir a sua satisfação total.'
  },
  {
    question: 'Como é feito o pagamento?',
    answer: 'O pagamento é dividido em duas partes — 50% no início do projeto e 50% após a entrega do trabalho.'
  },
];

const testimonials = [
  {
    name: 'Ana Francisco',
    company: 'Boutique da Ana',
    text: 'Trabalho impecável! A equipa da Abdel Design superou todas as expectativas.'
  },
  {
    name: 'João Santos',
    company: 'Café no Ponto',
    text: 'Profissionais de excelência. Recomendo sem hesitar.'
  },
  {
    name: 'Ana Costa',
    company: 'Confeitera',
    text: 'A identidade visual que criaram transformou completamente a nossa marca.'
  },
];

let currentPhraseIndex = 0;
let expandedCard = null;
let selectedServices = new Map();
let isDark = true;

function getIcon(name) {
  const icons = {
    palette: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
    globe: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
    video: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>',
    camera: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>',
    sun: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
    moon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
    menu: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
    x: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
    shoppingCart: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>',
    chevronDown: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
    chevronUp: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>',
    mail: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    phone: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    mapPin: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',
    facebook: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>',
    tiktok: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" fill="currentColor"><path d="M232 72a56.06 56.06 0 0 1-56-56h-32v140a28 28 0 1 1-28-28h4V92h-4a60 60 0 1 0 60 60V84.09A87.42 87.42 0 0 0 232 100z"/></svg>',
  };
  return icons[name] || '';
}

function toggleTheme() {
  isDark = !isDark;
  document.documentElement.classList.toggle('dark');
  document.documentElement.classList.toggle('light');
}

function rotatePhrase() {
  const phraseElement = document.getElementById('hero-phrase');
  if (phraseElement) {
    phraseElement.style.opacity = '0';
    setTimeout(() => {
      currentPhraseIndex = (currentPhraseIndex + 1) % inspirationalPhrases.length;
      phraseElement.textContent = inspirationalPhrases[currentPhraseIndex];
      phraseElement.style.opacity = '1';
    }, 300);
  }
}

function toggleCardExpansion(cardId) {
  const card = document.getElementById(`card-${cardId}`);
  const subServicesContainer = document.getElementById(`sub-${cardId}`);
  const chevron = document.getElementById(`chevron-${cardId}`);
  
  if (expandedCard === cardId) {
    subServicesContainer.style.maxHeight = '0';
    subServicesContainer.style.opacity = '0';
    chevron.innerHTML = getIcon('chevronDown');
    expandedCard = null;
  } else {
    if (expandedCard) {
      const prevContainer = document.getElementById(`sub-${expandedCard}`);
      const prevChevron = document.getElementById(`chevron-${expandedCard}`);
      prevContainer.style.maxHeight = '0';
      prevContainer.style.opacity = '0';
      prevChevron.innerHTML = getIcon('chevronDown');
    }
    
    subServicesContainer.style.maxHeight = '1000px';
    subServicesContainer.style.opacity = '1';
    chevron.innerHTML = getIcon('chevronUp');
    expandedCard = cardId;
  }
}

function toggleServiceSelection(serviceId, subServiceName, price) {
  const key = `${serviceId}-${subServiceName}`;
  const checkbox = document.getElementById(`toggle-${key}`);
  
  if (selectedServices.has(key)) {
    selectedServices.delete(key);
    checkbox.checked = false;
  } else {
    selectedServices.set(key, { serviceId, subServiceName, price });
    checkbox.checked = true;
  }
  
  updateCartButton();
}

function updateCartButton() {
  const cartButton = document.getElementById('cart-button');
  const cartCount = document.getElementById('cart-count');
  
  if (selectedServices.size > 0) {
    cartButton.classList.remove('hidden');
    cartCount.textContent = selectedServices.size;
  } else {
    cartButton.classList.add('hidden');
  }
}

function openWhatsApp() {
  if (selectedServices.size === 0) return;
  
  let message = 'Olá! Gostaria de solicitar os seguintes serviços:\n\n';
  
  selectedServices.forEach((service) => {
    message += `- ${service.subServiceName}: ${service.price}\n`;
  });
  
  message += '\nAguardo o vosso contacto. Obrigado!';
  
  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = '244944230503';
  const whatsappUrl = `https://wa.me/244944230503?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
}

function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const isOpen = mobileMenu.classList.contains('hidden');
  
  if (isOpen) {
    mobileMenu.classList.remove('hidden');
    menuIcon.innerHTML = getIcon('x');
  } else {
    mobileMenu.classList.add('hidden');
    menuIcon.innerHTML = getIcon('menu');
  }
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  mobileMenu.classList.add('hidden');
  menuIcon.innerHTML = getIcon('menu');
}

function toggleFAQ(index) {
  const answer = document.getElementById(`faq-answer-${index}`);
  const icon = document.getElementById(`faq-icon-${index}`);
  
  if (answer.style.maxHeight && answer.style.maxHeight !== '0px') {
    answer.style.maxHeight = '0';
    answer.style.opacity = '0';
    icon.innerHTML = getIcon('chevronDown');
  } else {
    answer.style.maxHeight = answer.scrollHeight + 'px';
    answer.style.opacity = '1';
    icon.innerHTML = getIcon('chevronUp');
  }
}

function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  
  const whatsappMessage = `Olá! Sou ${name} (${email}).\n\n${message}`;
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const phoneNumber = '244944230503';
  const whatsappUrl = `https://wa.me/244944230503?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
  e.target.reset();
}

app.innerHTML = `
  <!-- Navigation -->
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
    <!-- Desktop Menu -->
    <div class="hidden md:flex justify-center pt-6">
      <div class="glassmorphism border border-light-border dark:border-dark-border px-6 py-3 rounded-full">
        <div class="flex items-center gap-6">
          <a href="#inicio" class="block" aria-label="Abdel Design Home">
            <img src="/1.png" alt="Abdel Design Logo" class="h-6 w-auto">
          </a>
          <div class="h-6 w-px bg-light-border dark:bg-dark-border"></div>
          <a href="#inicio" class="text-sm font-medium hover:text-light-muted dark:hover:text-dark-muted transition-colors duration-200">Início</a>
          <a href="#sobre" class="text-sm font-medium hover:text-light-muted dark:hover:text-dark-muted transition-colors duration-200">Sobre</a>
          <a href="#quest" class="text-sm font-medium hover:text-light-muted dark:hover:text-dark-muted transition-colors duration-200">Quest</a>
          <a href="#servicos" class="text-sm font-medium hover:text-light-muted dark:hover:text-dark-muted transition-colors duration-200">Serviços</a>
          <a href="#blog" class="text-sm font-medium hover:text-light-muted dark:hover:text-dark-muted transition-colors duration-200">Blog</a>
          <a href="#contato" class="text-sm font-medium hover:text-light-muted dark:hover:text-dark-muted transition-colors duration-200">Contato</a>
          <div class="h-6 w-px bg-light-border dark:bg-dark-border"></div>
          <button onclick="window.toggleTheme()" class="p-2 hover:bg-light-surface dark:hover:bg-dark-surface rounded-full transition-all duration-200">
            <span class="dark:hidden">${getIcon('moon')}</span>
            <span class="hidden dark:inline-block">${getIcon('sun')}</span>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <div class="md:hidden glassmorphism border-b border-light-border dark:border-dark-border">
      <div class="flex items-center justify-between px-6 py-4">
        <a href="#inicio" class="block" aria-label="Abdel Design Home">
          <img src="/1.png" alt="Abdel Design Logo" class="h-8 w-auto">
        </a>
        <div class="flex items-center gap-4">
          <button onclick="window.toggleTheme()" class="p-2 hover:bg-light-surface dark:hover:bg-dark-surface rounded-full transition-all duration-200">
            <span class="dark:hidden">${getIcon('moon')}</span>
            <span class="hidden dark:inline-block">${getIcon('sun')}</span>
          </button>
          <button onclick="window.toggleMobileMenu()" class="p-2" id="menu-icon">
            ${getIcon('menu')}
          </button>
        </div>
      </div>
      
      <div id="mobile-menu" class="hidden border-t border-light-border dark:border-dark-border">
        <div class="flex flex-col py-4">
          <a href="#inicio" onclick="window.closeMobileMenu()" class="px-6 py-3 hover:bg-light-surface dark:hover:bg-dark-surface transition-colors duration-200">Início</a>
          <a href="#sobre" onclick="window.closeMobileMenu()" class="px-6 py-3 hover:bg-light-surface dark:hover:bg-dark-surface transition-colors duration-200">Sobre</a>
          <a href="#quest" onclick="window.closeMobileMenu()" class="px-6 py-3 hover:bg-light-surface dark:hover:bg-dark-surface transition-colors duration-200">Quest</a>
          <a href="#servicos" onclick="window.closeMobileMenu()" class="px-6 py-3 hover:bg-light-surface dark:hover:bg-dark-surface transition-colors duration-200">Serviços</a>
          <a href="#blog" onclick="window.closeMobileMenu()" class="px-6 py-3 hover:bg-light-surface dark:hover:bg-dark-surface transition-colors duration-200">Blog</a>
          <a href="#contato" onclick="window.closeMobileMenu()" class="px-6 py-3 hover:bg-light-surface dark:hover:bg-dark-surface transition-colors duration-200">Contato</a>
        </div>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="inicio" class="hero-section min-h-screen flex items-center justify-center relative">
    <div class="absolute inset-0 bg-black/50"></div>
    <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <h1 class="text-4xl md:text-6xl lg:text-7xl font-ethnocentric font-bold mb-6 text-white">Abdel Design</h1>
      <p id="hero-phrase" class="text-xl md:text-2xl lg:text-3xl font-light text-white/90 transition-opacity duration-300">
        ${inspirationalPhrases[0]}
      </p>
    </div>
  </section>

  <!-- Sobre Section -->
  <section id="sobre" class="py-20 md:py-32 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="glassmorphism border border-light-border dark:border-dark-border p-8 md:p-12 rounded-3xl animate-fade-in">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Sobre a Abdel Design</h2>
        <p class="text-lg text-light-muted dark:text-dark-muted mb-8 leading-relaxed">
          Somos uma agência de Design Profissinal, no mercado angolano, oferecemos os seguintes serviços de design gráfico, criação de sites, edição de vídeo e filmagem. O nosso foco é elevar a presença da sua marca através de designs modernos e minimalistas.
        </p>
        <button onclick="window.open('https://wa.me/244944230503?text=Olá! Gostaria de saber mais sobre os vossos serviços.', '_blank')" 
                class="btn-primary rounded-full">
          Falar Connosco
        </button>
      </div>
    </div>
  </section>

  <!-- Quest Section -->
  <section id="quest" class="py-20 md:py-32 px-6 bg-light-surface dark:bg-dark-surface">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">Porquê Escolher-nos?</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="border border-light-border dark:border-dark-border p-8 rounded-3xl hover:scale-105 transition-transform duration-300">
          <div class="w-12 h-12 bg-light-bg dark:bg-dark-bg rounded-full flex items-center justify-center mb-6">
            <span class="text-2xl">01</span>
          </div>
          <h3 class="text-xl font-bold mb-4">Expertise Comprovada</h3>
          <p class="text-light-muted dark:text-dark-muted">
            Anos de experiência a criar designs únicos para os nossos clientes.
          </p>
        </div>
        
        <div class="border border-light-border dark:border-dark-border p-8 rounded-3xl hover:scale-105 transition-transform duration-300">
          <div class="w-12 h-12 bg-light-bg dark:bg-dark-bg rounded-full flex items-center justify-center mb-6">
            <span class="text-2xl">02</span>
          </div>
          <h3 class="text-xl font-bold mb-4">Qualidade</h3>
          <p class="text-light-muted dark:text-dark-muted">
            Cada projeto é tratado com o máximo cuidado e atenção aos detalhes para garantir excelência.
          </p>
        </div>
        
        <div class="border border-light-border dark:border-dark-border p-8 rounded-3xl hover:scale-105 transition-transform duration-300">
          <div class="w-12 h-12 bg-light-bg dark:bg-dark-bg rounded-full flex items-center justify-center mb-6">
            <span class="text-2xl">03</span>
          </div>
          <h3 class="text-xl font-bold mb-4">Resultados Mensuráveis</h3>
          <p class="text-light-muted dark:text-dark-muted">
            Focamos em criar designs que não só parecem bem, mas também impulsionam negócios.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Serviços Section -->
  <section id="servicos" class="py-20 md:py-32 px-6">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">Nossos Serviços</h2>
      <h3 class="text-1xl md:text-2xl font-semibold mb-12 text-center">Deslize para o lado para ver mais serviços.</h3>
      
      <div class="relative">
        <div class="carousel-container overflow-x-auto snap-x flex gap-6 pb-8">
          ${services.map(service => `
            <div id="card-${service.id}" class="snap-center flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw]">
              <div class="border border-light-border dark:border-dark-border rounded-[25px] overflow-hidden h-full">
                <div class="aspect-square overflow-hidden">
                  <img src="${service.image}" alt="${service.title}" class="w-full h-full object-cover" />
                </div>
                
                <div class="p-6">
                  <div class="flex items-center gap-3 mb-4">
                    <div class="text-light-text dark:text-dark-text">
                      ${getIcon(service.icon)}
                    </div>
                    <h3 class="text-xl font-bold">${service.title}</h3>
                  </div>
                  
                  <p class="text-light-muted dark:text-dark-muted mb-6">
                    ${service.description}
                  </p>
                  
                  <button 
                    onclick="window.toggleCardExpansion('${service.id}')"
                    class="btn-secondary rounded-full w-full flex items-center justify-center gap-2"
                  >
                    <span>Ver Sub-serviços</span>
                    <span id="chevron-${service.id}">
                      ${getIcon('chevronDown')}
                    </span>
                  </button>
                  
                  <div 
                    id="sub-${service.id}" 
                    class="overflow-hidden transition-all duration-300"
                    style="max-height: 0; opacity: 0;"
                  >
                    <div class="mt-6 space-y-3">
                      ${service.subServices.map((sub, idx) => {
                        const key = `${service.id}-${sub.name}`;
                        return `
                          <div class="flex items-center justify-between p-4 border border-light-border dark:border-dark-border rounded-2xl hover:bg-light-surface dark:hover:bg-dark-surface transition-colors duration-200">
                            <div class="flex-1">
                              <p class="font-medium">${sub.name}</p>
                              <p class="text-sm text-light-muted dark:text-dark-muted">${sub.price}</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                              <input 
                                type="checkbox" 
                                id="toggle-${key}"
                                class="sr-only peer"
                                onchange="window.toggleServiceSelection('${service.id}', '${sub.name}', '${sub.price}')"
                              />
                              <div class="w-11 h-6 bg-light-border dark:bg-dark-border rounded-full peer peer-checked:bg-accent-secondary dark:peer-checked:bg-accent-primary transition-colors duration-200"></div>
                              <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 peer-checked:translate-x-5"></div>
                            </label>
                          </div>
                        `;
                      }).join('')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  </section>

  <!-- Blog & FAQ Section -->
  <section id="blog" class="py-20 md:py-32 px-6 bg-light-surface dark:bg-dark-surface">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 gap-16">
        <!-- Blog -->
        <div>
          <h2 class="text-3xl md:text-4xl font-bold mb-8">Blog</h2>
          <div class="space-y-6">
            ${blogPosts.map(post => `
              <div class="border border-light-border dark:border-dark-border p-6 rounded-3xl hover:scale-105 transition-transform duration-200">
                <p class="text-sm text-light-muted dark:text-dark-muted mb-2">${post.date}</p>
                <h3 class="text-xl font-bold mb-3">${post.title}</h3>
                <p class="text-light-muted dark:text-dark-muted">${post.excerpt}</p>
              </div>
            `).join('')}
          </div>
        </div>
        
        <!-- FAQ & Testimonials -->
        <div>
          <h2 class="text-3xl md:text-4xl font-bold mb-8">FAQ</h2>
          <div class="space-y-4 mb-12">
            ${faqs.map((faq, idx) => `
              <div class="border border-light-border dark:border-dark-border rounded-3xl overflow-hidden">
                <button 
                  onclick="window.toggleFAQ(${idx})"
                  class="w-full p-6 flex items-center justify-between text-left hover:bg-light-surface dark:hover:bg-dark-surface transition-colors duration-200"
                >
                  <span class="font-medium pr-4">${faq.question}</span>
                  <span id="faq-icon-${idx}" class="flex-shrink-0">
                    ${getIcon('chevronDown')}
                  </span>
                </button>
                <div 
                  id="faq-answer-${idx}"
                  class="overflow-hidden transition-all duration-300"
                  style="max-height: 0; opacity: 0;"
                >
                  <p class="px-6 pb-6 text-light-muted dark:text-dark-muted">
                    ${faq.answer}
                  </p>
                </div>
              </div>
            `).join('')}
          </div>
          
          <h3 class="text-2xl font-bold mb-6">Depoimentos</h3>
          <div class="space-y-4">
            ${testimonials.map(testimonial => `
              <div class="border border-light-border dark:border-dark-border p-6 rounded-3xl">
                <p class="text-light-muted dark:text-dark-muted mb-4">${testimonial.text}</p>
                <div>
                  <p class="font-bold">${testimonial.name}</p>
                  <p class="text-sm text-light-muted dark:text-dark-muted">${testimonial.company}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contato Section -->
  <section id="contato" class="py-20 md:py-32 px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">Entre em Contato</h2>
      
      <form onsubmit="window.handleSubmit(event)" class="space-y-6">
        <div>
          <input 
            type="text" 
            name="name"
            placeholder="Nome" 
            required
            class="w-full px-6 py-4 bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-2xl focus:outline-none focus:border-light-muted dark:focus:border-dark-muted transition-colors duration-200"
          />
        </div>
        
        <div>
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            required
            class="w-full px-6 py-4 bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-2xl focus:outline-none focus:border-light-muted dark:focus:border-dark-muted transition-colors duration-200"
          />
        </div>
        
        <div>
          <textarea 
            name="message"
            placeholder="Mensagem" 
            rows="5"
            required
            class="w-full px-6 py-4 bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-2xl focus:outline-none focus:border-light-muted dark:focus:border-dark-muted transition-colors duration-200 resize-none"
          ></textarea>
        </div>
        
        <button type="submit" class="btn-primary rounded-full w-full">
          Enviar Mensagem
        </button>
      </form>

      <div class="text-center my-12">
        <p class="text-light-muted dark:text-dark-muted mb-6">Ou conecte-se conosco</p>
        <div class="flex justify-center items-center gap-4">
            <a href="https://www.instagram.com/abdeldesigns1/" aria-label="Instagram" class="p-3 border border-light-border dark:border-dark-border rounded-full hover:bg-light-surface dark:hover:bg-dark-surface transition-colors duration-200">
                ${getIcon('instagram')}
            </a>
            <a href="https://www.facebook.com/abdeldesigns" aria-label="Facebook" class="p-3 border border-light-border dark:border-dark-border rounded-full hover:bg-light-surface dark:hover:bg-dark-surface transition-colors duration-200">
                ${getIcon('facebook')}
            </a>
            <a href="https://www.tiktok.com/@abdel.design" aria-label="TikTok" class="p-3 border border-light-border dark:border-dark-border rounded-full hover:bg-light-surface dark:hover:bg-dark-surface transition-colors duration-200">
  ${getIcon('tiktok')}
</a>
            </a>
        </div>
      </div>
      
      <div class="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
        <div class="flex items-center gap-3 p-4 border border-light-border dark:border-dark-border rounded-2xl w-full md:w-auto justify-center">
            <div class="text-light-text dark:text-dark-text">${getIcon('mail')}</div>
            <p class="text-sm text-light-muted dark:text-dark-muted">abdeldesigns.studio@gmail.com</p>
        </div>
        <div class="flex items-center gap-3 p-4 border border-light-border dark:border-dark-border rounded-2xl w-full md:w-auto justify-center">
            <div class="text-light-text dark:text-dark-text">${getIcon('phone')}</div>
            <p class="text-sm text-light-muted dark:text-dark-muted">+244 944 230 503</p>
        </div>
        <div class="flex items-center gap-3 p-4 border border-light-border dark:border-dark-border rounded-2xl w-full md:w-auto justify-center">
            <div class="text-light-text dark:text-dark-text">${getIcon('mapPin')}</div>
            <p class="text-sm text-light-muted dark:text-dark-muted">Toda Angola</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-12 px-6 border-t border-light-border dark:border-dark-border">
    <div class="max-w-6xl mx-auto text-center">
      <p class="text-light-muted dark:text-dark-muted">© 2025 Abdel Design. Todos os direitos reservados.</p>
    </div>
  </footer>

  <!-- Floating Cart Button -->
  <button 
    id="cart-button"
    onclick="window.openWhatsApp()"
    class="hidden fixed bottom-8 right-8 bg-accent-secondary dark:bg-accent-primary text-accent-primary dark:text-accent-secondary p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-200 z-40"
  >
    <div class="relative">
      ${getIcon('shoppingCart')}
      <span id="cart-count" class="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
    </div>
  </button>
`;

window.toggleTheme = toggleTheme;
window.toggleCardExpansion = toggleCardExpansion;
window.toggleServiceSelection = toggleServiceSelection;
window.openWhatsApp = openWhatsApp;
window.toggleMobileMenu = toggleMobileMenu;
window.closeMobileMenu = closeMobileMenu;
window.toggleFAQ = toggleFAQ;
window.handleSubmit = handleSubmit;

setInterval(rotatePhrase, 10000);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

