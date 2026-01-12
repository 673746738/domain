// i18n Language Data
const translations = {
    zh: {
        // Meta
        metaDescription: "globalnav.ai - 全球AI导航与聚合入口，涵盖所有主流AI工具和模型，域名出售",
        metaKeywords: "AI导航,AI大全,AI聚合,AI目录,globalnav.ai,域名出售",
        pageTitle: "globalnav.ai - 全球AI导航 | 域名出售",
        
        // Hero Section
        heroSubtitle: "全球AI导航与聚合入口",
        heroDescription: "涵盖市面上所有主流AI工具、模型和平台的一站式导航",
        btnConsultDomain: "咨询域名购买",
        btnBrowseAI: "浏览AI列表",
        
        // Domain Value
        domainValueTitle: "为什么选择 globalnav.ai？",
        valueGlobal: "全球视野",
        valueGlobalDesc: "Global + Navigation 的组合，完美诠释全球AI导航的定位",
        valuePrecise: "精准定位",
        valuePreciseDesc: "专为AI导航、聚合、搜索和社区平台设计的最佳域名",
        valueBrand: "品牌价值",
        valueBrandDesc: "简洁易记，具有极高的品牌识别度和商业价值",
        valueMarket: "市场潜力",
        valueMarketDesc: "AI行业爆发式增长，导航类平台需求巨大",
        
        // AI Categories
        aiCategoriesTitle: "涵盖所有主流AI工具",
        sectionSubtitle: "本页面持续更新，展示市面上最热门的AI产品",
        categoryLLM: "🤖 大语言模型 (LLM)",
        categoryAISearch: "🔍 AI搜索",
        categoryOffice: "💼 AI办公与生产力",
        categoryDesign: "🎨 AI设计与图像生成",
        categoryVideo: "🎬 AI视频生成",
        categoryAudio: "🎵 AI音频与音乐",
        categoryCoding: "💻 AI编程工具",
        categoryDataAnalysis: "📊 AI数据分析",
        categoryAssistant: "🤝 AI助手与聊天机器人",
        categoryOther: "🔧 其他AI工具",
        
        // Stats
        statTools: "AI工具覆盖",
        statCategories: "AI分类",
        statUpdatesText: "持续更新",
        statUpdates: "最新AI产品",
        
        // Contact
        contactTitle: "域名出售咨询",
        contactDescription: "globalnav.ai 域名现对外出售，适合AI导航、聚合、搜索平台使用",
        contactEmail: "邮箱联系",
        contactDomain: "域名信息",
        contactDomainDesc: ".ai 顶级域名，AI行业专属",
        contactNote: "💡 提示：本域名非常适合用于构建AI工具导航、聚合平台、AI搜索引擎或AI社区网站。如有购买意向，请通过邮箱联系。",
        
        // Footer
        footerCopyright: "© 2024 globalnav.ai - 全球AI导航 | 域名出售",
        footerNote: "本页面仅用于展示域名价值和AI工具列表，域名现对外出售",
        
        // Language Switcher
        langSwitch: "Switch to English"
    },
    en: {
        // Meta
        metaDescription: "globalnav.ai - Global AI Navigation & Aggregation Hub, covering all mainstream AI tools and models, domain for sale",
        metaKeywords: "AI navigation,AI directory,AI aggregation,AI tools,globalnav.ai,domain for sale",
        pageTitle: "globalnav.ai - Global AI Navigation | Domain for Sale",
        
        // Hero Section
        heroSubtitle: "Global AI Navigation & Aggregation Hub",
        heroDescription: "One-stop navigation covering all mainstream AI tools, models and platforms in the market",
        btnConsultDomain: "Consult Domain Purchase",
        btnBrowseAI: "Browse AI List",
        
        // Domain Value
        domainValueTitle: "Why Choose globalnav.ai?",
        valueGlobal: "Global Vision",
        valueGlobalDesc: "The combination of Global + Navigation perfectly interprets the positioning of global AI navigation",
        valuePrecise: "Precise Positioning",
        valuePreciseDesc: "The best domain name designed specifically for AI navigation, aggregation, search and community platforms",
        valueBrand: "Brand Value",
        valueBrandDesc: "Simple and memorable, with extremely high brand recognition and commercial value",
        valueMarket: "Market Potential",
        valueMarketDesc: "Explosive growth in the AI industry, huge demand for navigation platforms",
        
        // AI Categories
        aiCategoriesTitle: "Covering All Mainstream AI Tools",
        sectionSubtitle: "This page is continuously updated, showcasing the hottest AI products in the market",
        categoryLLM: "🤖 Large Language Models (LLM)",
        categoryAISearch: "🔍 AI Search",
        categoryOffice: "💼 AI Office & Productivity",
        categoryDesign: "🎨 AI Design & Image Generation",
        categoryVideo: "🎬 AI Video Generation",
        categoryAudio: "🎵 AI Audio & Music",
        categoryCoding: "💻 AI Coding Tools",
        categoryDataAnalysis: "📊 AI Data Analysis",
        categoryAssistant: "🤝 AI Assistants & Chatbots",
        categoryOther: "🔧 Other AI Tools",
        
        // Stats
        statTools: "AI Tools Covered",
        statCategories: "AI Categories",
        statUpdatesText: "Continuously Updated",
        statUpdates: "Latest AI Products",
        
        // Contact
        contactTitle: "Domain Sale Inquiry",
        contactDescription: "globalnav.ai domain is now for sale, suitable for AI navigation, aggregation, and search platforms",
        contactEmail: "Email Contact",
        contactDomain: "Domain Information",
        contactDomainDesc: ".ai top-level domain, exclusive to AI industry",
        contactNote: "💡 Tip: This domain is perfect for building AI tool navigation, aggregation platforms, AI search engines or AI community websites. If you are interested in purchasing, please contact via email.",
        
        // Footer
        footerCopyright: "© 2024 globalnav.ai - Global AI Navigation | Domain for Sale",
        footerNote: "This page is only for displaying domain value and AI tool list, domain is currently for sale",
        
        // Language Switcher
        langSwitch: "切换到中文"
    }
};

// i18n Manager
class I18n {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'zh';
        this.init();
    }

    init() {
        this.setLanguage(this.currentLang);
        this.updateLanguageSwitcher();
    }

    setLanguage(lang) {
        if (!translations[lang]) {
            lang = 'zh'; // fallback to Chinese
        }
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        
        // Update HTML lang attribute
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
        
        // Update meta tags
        document.querySelector('meta[name="description"]').setAttribute('content', translations[lang].metaDescription);
        document.querySelector('meta[name="keywords"]').setAttribute('content', translations[lang].metaKeywords);
        document.title = translations[lang].pageTitle;
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (element.tagName === 'INPUT' && element.type === 'text') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        
        // Update elements with data-i18n-html for HTML content
        document.querySelectorAll('[data-i18n-html]').forEach(element => {
            const key = element.getAttribute('data-i18n-html');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
    }

    updateLanguageSwitcher() {
        const switcher = document.getElementById('lang-switcher');
        if (switcher) {
            switcher.textContent = translations[this.currentLang].langSwitch;
        }
    }

    toggleLanguage() {
        const newLang = this.currentLang === 'zh' ? 'en' : 'zh';
        this.setLanguage(newLang);
        this.updateLanguageSwitcher();
    }
}

// Initialize i18n when DOM is ready
let i18n;

function initI18n() {
    i18n = new I18n();
    window.i18n = i18n;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
} else {
    initI18n();
}

