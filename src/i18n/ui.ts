/* =====================================================================
   i18n — one source of truth for every user-visible string.
   Spanish is the default locale and keeps the root URLs.
   English lives under /en/.
   ===================================================================== */

export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'es';

/** OpenGraph / html lang values */
export const OG_LOCALE: Record<Locale, string> = { es: 'es_ES', en: 'en_US' };
export const DATE_LOCALE: Record<Locale, string> = { es: 'es-ES', en: 'en-US' };

/** Fixed routes per locale. Spanish never gets a prefix. */
export const ROUTES = {
  home:  { es: '/',        en: '/en/' },
  blog:  { es: '/blog/',   en: '/en/blog/' },
  about: { es: '/about/',  en: '/en/about/' },
  rss:   { es: '/rss.xml', en: '/en/rss.xml' },
} as const;

/** Which locale a URL belongs to. */
export function getLocale(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es';
}

export const CATEGORIES = {
  es: {
    camino:   { label: 'Camino personal', emoji: '🛤' },
    bootcamp: { label: 'Bootcamp',        emoji: '🎓' },
    codigo:   { label: 'Código',          emoji: '💻' },
    trabajo:  { label: 'Vida laboral',    emoji: '💼' },
  },
  en: {
    camino:   { label: 'Personal journey', emoji: '🛤' },
    bootcamp: { label: 'Bootcamp',         emoji: '🎓' },
    codigo:   { label: 'Code',             emoji: '💻' },
    trabajo:  { label: 'Working life',     emoji: '💼' },
  },
} as const;

export const CATEGORY_STYLE = {
  camino:   'cat--camino',
  bootcamp: 'cat--bootcamp',
  codigo:   'cat--codigo',
  trabajo:  'cat--trabajo',
} as const;

export const FILTER_STYLE = {
  camino:   'filter--camino',
  bootcamp: 'filter--bootcamp',
  codigo:   'filter--codigo',
  trabajo:  'filter--trabajo',
} as const;

export const UI = {
  es: {
    'site.title': 'Lau | Mi camino Dev-Blog',
    'site.description': 'Diario de una transición profesional al mundo del desarrollo web.',

    'nav.home': 'Inicio',
    'nav.blog': 'Blog',
    'nav.about': 'Sobre mí',
    'nav.primary': 'Principal',
    'nav.menu': 'Menú',
    'lang.group': 'Idioma / Language',
    'lang.unavailable': 'Este artículo todavía no está en inglés',

    'hero.status': 'Escribiendo el capítulo',
    'hero.kicker': 'Diario de una aprendiz de código',
    'hero.lead': 'Hola, soy',
    'hero.text':
      'Ex contadora, mamá y futura developer en construcción. Este es mi espacio para documentar mi cambio de carrera, mis aprendizajes y el caos mental de empezar de nuevo.',
    'hero.ctaBlog': 'Leer el blog →',
    'hero.ctaAbout': 'Sobre mí',

    'identity.role': 'Ex contadora pública, mamá y developer en construcción.',
    'now.label': 'Ahora mismo',
    'now.text':
      'Dos semanas en mi nuevo trabajo y la sensación de estar aprendiendo más rápido que nunca.',

    'stats.label': 'Capítulos',
    'stats.caption': 'artículos escritos entre {from} y {to}',
    'quote.label': 'Por qué escribo esto',
    'quote.text':
      '“No es el blog de alguien que ya lo logró. Es el de alguien que está caminando el proceso, paso a paso.”',
    'quote.by': '— Sobre mí',
    'journey.label': 'El recorrido',
    'journey.1': '📊 Contadora Pública · UNC',
    'journey.2': '🎓 MBA · EAE Business School',
    'journey.3': '💻 Bootcamp · UpgradeHub',
    'journey.4': '🥊 Backend developer en una fintech',

    'topics.title': 'Explorá por tema',
    'topics.link': 'Ver el archivo →',
    'latest.title': 'Últimos capítulos',
    'latest.link': 'Ver los {n} →',
    'archive.spanishNote': '',
    'archive.spanishLink': '',

    'cta.title': 'Aprendiendo a programar desde cero, sin rendirme',
    'cta.text':
      'Si algo de lo que leés te acompaña o te ayuda, entonces este blog ya cumplió su propósito.',
    'cta.button': 'Empezar por el último capítulo →',

    'archive.pageTitle': 'Todos los capítulos',
    'archive.pageDescription':
      'Todos los artículos del blog: el camino de contadora a desarrolladora backend, capítulo a capítulo.',
    'archive.title': 'Todos los',
    'archive.titleEm': 'capítulos',
    'archive.lede':
      '{n} artículos, en orden. De las dudas iniciales al primer trabajo como backend developer.',
    'archive.empty': 'No hay artículos en este tema todavía.',
    'filters.label': 'Filtrar',
    'filters.all': 'Todos',
    'filters.group': 'Filtrar por tema',

    'about.pageTitle': 'Sobre mí',
    'about.pageDescription':
      'Ex contadora pública, mamá y developer en construcción. La historia detrás de un giro de 180 grados hacia la programación.',
    'about.kicker': 'Sobre mí',
    'about.titleLead': 'Un giro de',
    'about.titleEm': '180 grados',
    'about.text':
      'Ex contadora pública, mamá y developer en construcción. Esta es la historia de por qué decidí empezar de nuevo.',
    'about.imageAlt': 'Laura Montironi trabajando frente al ordenador',

    'article.back': '← Volver al blog',
    'article.chapter': 'Capítulo',
    'article.readingTime': 'min de lectura',
    'article.topics': 'Temas',
    'article.prev': '← Capítulo anterior',
    'article.next': 'Capítulo siguiente →',
    'article.pager': 'Más capítulos',
    'article.toc': 'En este artículo',

    'footer.big': 'Gracias por pasar por acá',
    'footer.browse': 'Navegar',
    'footer.find': 'Encontrarme',
    'footer.articles': 'Artículos',
    'footer.language': 'Idioma',
    'footer.spanish': 'Español',
    'footer.english': 'English',
  },

  en: {
    'site.title': 'Lau | My Dev Journey',
    'site.description': 'Diary of a career change into web development.',

    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'nav.primary': 'Main',
    'nav.menu': 'Menu',
    'lang.group': 'Idioma / Language',
    'lang.unavailable': 'This article is not available in Spanish yet',

    'hero.status': 'Writing chapter',
    'hero.kicker': 'Diary of a code apprentice',
    'hero.lead': "Hi, I'm",
    'hero.text':
      'Former accountant, mum, and a developer under construction. This is where I document my career change, what I learn, and the mental chaos of starting over.',
    'hero.ctaBlog': 'Read the blog →',
    'hero.ctaAbout': 'About me',

    'identity.role': 'Former chartered accountant, mum, and a developer under construction.',
    'now.label': 'Right now',
    'now.text':
      'Two weeks into my new job, and it feels like I am learning faster than ever.',

    'stats.label': 'Chapters',
    'stats.caption': 'chapters written between {from} and {to}',
    'quote.label': 'Why I write this',
    'quote.text':
      '“This is not the blog of someone who already made it. It is the blog of someone walking the path, step by step.”',
    'quote.by': '— About me',
    'journey.label': 'The path so far',
    'journey.1': '📊 Chartered Accountant · UNC',
    'journey.2': '🎓 MBA · EAE Business School',
    'journey.3': '💻 Bootcamp · UpgradeHub',
    'journey.4': '🥊 Backend developer at a fintech',

    'topics.title': 'Browse by topic',
    'topics.link': 'See the archive →',
    'latest.title': 'Latest chapters',
    'latest.link': 'See the archive →',
    'archive.spanishNote':
      'Only chapters translated into English appear here. The full diary — {n} chapters — is written in Spanish.',
    'archive.spanishLink': 'Read the Spanish archive →',

    'cta.title': 'Learning to code from zero, without giving up',
    'cta.text':
      'If something you read here keeps you company or helps you, then this blog has already done its job.',
    'cta.button': 'Start with the latest chapter →',

    'archive.pageTitle': 'Every chapter',
    'archive.pageDescription':
      'Every article translated into English: the road from accountant to backend developer, chapter by chapter.',
    'archive.title': 'Every',
    'archive.titleEm': 'chapter',
    'archive.lede':
      '{n} chapters, in order. From the first doubts to my first job as a backend developer.',
    'archive.empty': 'Nothing in this topic yet.',
    'filters.label': 'Filter',
    'filters.all': 'All',
    'filters.group': 'Filter by topic',

    'about.pageTitle': 'About me',
    'about.pageDescription':
      'Former chartered accountant, mum, and a developer under construction. The story behind a 180-degree turn into programming.',
    'about.kicker': 'About me',
    'about.titleLead': 'A turn of',
    'about.titleEm': '180 degrees',
    'about.text':
      'Former chartered accountant, mum, and a developer under construction. This is the story of why I decided to start over.',
    'about.imageAlt': 'Laura Montironi working at her computer',

    'article.back': '← Back to the blog',
    'article.chapter': 'Chapter',
    'article.readingTime': 'min read',
    'article.topics': 'Topics',
    'article.prev': '← Previous chapter',
    'article.next': 'Next chapter →',
    'article.pager': 'More chapters',
    'article.toc': 'In this article',

    'footer.big': 'Thanks for stopping by',
    'footer.browse': 'Browse',
    'footer.find': 'Find me',
    'footer.articles': 'Articles',
    'footer.language': 'Language',
    'footer.spanish': 'Español',
    'footer.english': 'English',
  },
} as const;

export type UIKey = keyof (typeof UI)['es'];

/** t('nav.blog') for a locale, with optional {placeholder} substitution. */
export function useTranslations(lang: Locale) {
  return function t(key: UIKey, vars?: Record<string, string | number>): string {
    let s: string = (UI[lang] as Record<string, string>)[key] ?? (UI.es as Record<string, string>)[key] ?? key;
    if (vars) for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, String(v));
    return s;
  };
}

export function formatDate(date: Date, lang: Locale): string {
  return new Intl.DateTimeFormat(DATE_LOCALE[lang], {
    day: 'numeric', month: 'long', year: 'numeric',
  }).format(date);
}

export function formatMonth(date: Date, lang: Locale): string {
  return new Intl.DateTimeFormat(DATE_LOCALE[lang], { month: 'short', year: 'numeric' }).format(date);
}
