import { useEffect } from "react";
import { Link, Outlet, useLocation, useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";

const SITE_ORIGIN = "https://x-video-download.net";
const GA_MEASUREMENT_ID = "G-4L2E7KKHQS";
const SUPPORTED_LANGS = ['ja', 'zh-CN', 'zh-TW', 'es', 'hi', 'ar', 'pt', 'pt-BR', 'ru', 'de', 'fr', 'ko', 'it', 'tr', 'id', 'vi', 'th', 'pl', 'nl', 'uk']; // Only non-default languages

function canonicalHref(pathname: string): string {
  const path = pathname.replace(/\/$/, "") || "/";
  return path === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${path}`;
}

export default function SiteLayout() {
  const { pathname, search } = useLocation();
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  // Determine current language: if lang param exists and is valid, use it; otherwise default to 'en'
  const currentLang = lang && SUPPORTED_LANGS.includes(lang) ? lang : 'en';

  // Validate and sync language
  useEffect(() => {
    if (lang && !SUPPORTED_LANGS.includes(lang)) {
      // Invalid language, redirect to root (English)
      navigate('/', { replace: true });
      return;
    }
    
    if (i18n.language !== currentLang) {
      i18n.changeLanguage(currentLang);
    }
  }, [lang, currentLang, i18n, navigate]);

  // Update hreflang tags for SEO
  useEffect(() => {
    // Update html lang attribute
    document.documentElement.lang = currentLang;

    // Remove existing hreflang tags
    document.querySelectorAll('link[hreflang]').forEach(el => el.remove());

    // Get base path without language prefix
    const basePath = lang ? pathname.replace(`/${lang}`, '') : pathname;
    
    // Add hreflang for English (default, no prefix)
    const enLink = document.createElement('link');
    enLink.rel = 'alternate';
    enLink.hreflang = 'en';
    enLink.href = `${SITE_ORIGIN}${basePath || '/'}`;
    document.head.appendChild(enLink);

    // Add hreflang tags for other languages
    SUPPORTED_LANGS.forEach(langCode => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = langCode;
      link.href = `${SITE_ORIGIN}/${langCode}${basePath}`;
      document.head.appendChild(link);
    });

    // Add x-default (English)
    const defaultLink = document.createElement('link');
    defaultLink.rel = 'alternate';
    defaultLink.hreflang = 'x-default';
    defaultLink.href = `${SITE_ORIGIN}${basePath || '/'}`;
    document.head.appendChild(defaultLink);
  }, [pathname, lang, currentLang]);

  // SPA: each React Router navigation must send a page_view (HTML gtag uses send_page_view: false).
  useEffect(() => {
    const pagePath = `${pathname}${search}` || "/";
    window.gtag?.("config", GA_MEASUREMENT_ID, {
      page_path: pagePath,
      page_title: document.title,
    });
  }, [pathname, search]);

  useEffect(() => {
    const href = canonicalHref(pathname);
    let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!el) {
      el = document.createElement("link");
      el.rel = "canonical";
      document.head.appendChild(el);
    }
    el.setAttribute("href", href);
  }, [pathname]);

  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <header className="border-b border-white/10 bg-[var(--color-nav)] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link
            to={currentLang === 'en' ? '/' : `/${currentLang}`}
            className="flex items-center gap-3 outline-none ring-offset-2 ring-offset-[var(--color-nav)] focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <img
              src="/x-video-download.jpg"
              alt="X Video Download logo"
              className="h-9 w-auto max-h-11 shrink-0 object-contain object-left sm:h-10"
              decoding="async"
            />
            <span className="brand-title text-sm text-white sm:text-base">X video download</span>
          </Link>
          <div className="flex items-center gap-4">
            <nav className="brand-title flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-xs text-neutral-400 sm:gap-x-5 sm:text-sm">
              <Link to={currentLang === 'en' ? '/' : `/${currentLang}`} className="transition hover:text-white">
                {t('nav.home')}
              </Link>
              <a href={currentLang === 'en' ? '/#how-download' : `/${currentLang}#how-download`} className="transition hover:text-white">
                {t('nav.howDownload')}
              </a>
              <a href={currentLang === 'en' ? '/#why-choose' : `/${currentLang}#why-choose`} className="transition hover:text-white">
                {t('nav.whyChoose')}
              </a>
              <a href={currentLang === 'en' ? '/#faq' : `/${currentLang}#faq`} className="transition hover:text-white">
                {t('nav.faq')}
              </a>
              <a href={currentLang === 'en' ? '/#blog' : `/${currentLang}#blog`} className="transition hover:text-white">
                {t('nav.blog')}
              </a>
            </nav>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <Outlet />

      <footer className="border-t border-neutral-200 bg-[var(--color-surface-muted)] py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:justify-between">
            <div className="flex w-full max-w-md flex-col items-start gap-3">
              <div className="flex flex-row items-center gap-3 sm:gap-4">
                <Link
                  to={currentLang === 'en' ? '/' : `/${currentLang}`}
                  className="shrink-0 outline-none ring-offset-2 ring-offset-[var(--color-surface-muted)] focus-visible:ring-2 focus-visible:ring-neutral-400"
                >
                  <img
                    src="/x-video-download.jpg"
                    alt="X Video Download logo"
                    className="h-10 w-auto max-h-12 object-contain object-left sm:h-11"
                    decoding="async"
                  />
                </Link>
                <p className="heading-brand min-w-0 text-base font-semibold text-neutral-950">X Video Download</p>
              </div>
              <p className="w-full text-left text-sm leading-relaxed text-neutral-600">
                {t('footer.description')}
              </p>
              <div className="flex items-center gap-4 mt-1">
                <a href="https://x.com" target="_blank" rel="nofollow" aria-label="X (Twitter)" className="text-neutral-400 transition hover:text-neutral-700">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://github.com" target="_blank" rel="nofollow" aria-label="GitHub" className="text-neutral-400 transition hover:text-neutral-700">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
                </a>
                <a href="https://www.producthunt.com" target="_blank" rel="nofollow" aria-label="Product Hunt" className="text-neutral-400 transition hover:text-neutral-700">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.604 8.4h-3.405V12h3.405a1.8 1.8 0 0 0 0-3.6M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0m1.604 14.4H10.2V18H7.8V6h5.804a4.2 4.2 0 0 1 0 8.4"/></svg>
                </a>
                <a href="mailto:contact@x-video-download.net" aria-label="Email" className="text-neutral-400 transition hover:text-neutral-700">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </a>
                <a href="https://jobhub.jp/co_workers/geminiwatermark" target="_blank" rel="nofollow" aria-label="JobHub" className="text-neutral-400 transition hover:text-neutral-700">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM4 16V19H20V16H4ZM4 14H20V7H4V14ZM9 3V5H15V3H9ZM11 11H13V13H11V11Z"/></svg>
                </a>
                <a href="https://note.com/witty_chimp3072/n/nd1e191fb3489" target="_blank" rel="nofollow" aria-label="Note" className="text-neutral-400 transition hover:text-neutral-700">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z"/></svg>
                </a>
                <a href="https://haveagood.holiday/users/487198" target="_blank" rel="nofollow" aria-label="Have a Good Holiday" className="text-neutral-400 transition hover:text-neutral-700">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM11 13V17H6V13H11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"/></svg>
                </a>
                <a href="https://make.rs/project/5990-xvideodownloader" target="_blank" rel="nofollow" aria-label="Make.rs" className="text-neutral-400 transition hover:text-neutral-700">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.33053 15.9288C5.115 14.9914 5.00054 14.0103 5.00054 12.9999C5.00054 7.91198 7.90319 3.5636 12.0005 1.81799C16.0979 3.5636 19.0005 7.91198 19.0005 12.9999C19.0005 14.0103 18.8861 14.9914 18.6706 15.9288L20.6907 17.7245C20.8704 17.8842 20.9109 18.1493 20.7872 18.3555L18.33 22.4508C18.1879 22.6876 17.8808 22.7644 17.644 22.6223C17.609 22.6013 17.5766 22.576 17.5477 22.5471L15.2934 20.2928C15.1059 20.1053 14.8515 19.9999 14.5863 19.9999H9.41476C9.14954 19.9999 8.89519 20.1053 8.70765 20.2928L6.45337 22.5471C6.2581 22.7424 5.94152 22.7424 5.74626 22.5471C5.71735 22.5182 5.6921 22.4859 5.67107 22.4508L3.21385 18.3555C3.09014 18.1493 3.13071 17.8842 3.31042 17.7245L5.33053 15.9288ZM12.0005 12.9999C13.1051 12.9999 14.0005 12.1045 14.0005 10.9999C14.0005 9.89537 13.1051 8.99994 12.0005 8.99994C10.896 8.99994 10.0005 9.89537 10.0005 10.9999C10.0005 12.1045 10.896 12.9999 12.0005 12.9999Z"/></svg>
                </a>
                <a href="https://teratail.com/users/syakadou" target="_blank" rel="nofollow" aria-label="Teratail" className="text-neutral-400 transition hover:text-neutral-700">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.45455 15L1 18.5V3C1 2.44772 1.44772 2 2 2H17C17.5523 2 18 2.44772 18 3V15H5.45455ZM4.76282 13H16V4H3V14.3851L4.76282 13ZM8 17H18.2372L20 18.3851V8H21C21.5523 8 22 8.44772 22 9V22.5L17.5455 19H9C8.44772 19 8 18.5523 8 18V17Z"/></svg>
                </a>
                <a href="https://lit.link/zh-tw/xvideodownloader" target="_blank" rel="nofollow" aria-label="Lit.link" className="text-neutral-400 transition hover:text-neutral-700">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.0607 8.11097L14.4749 9.52518C17.2086 12.2589 17.2086 16.691 14.4749 19.4247L14.1214 19.7782C11.3877 22.5119 6.95555 22.5119 4.22188 19.7782C1.48821 17.0446 1.48821 12.6124 4.22188 9.87874L5.6361 11.293C3.68348 13.2456 3.68348 16.4114 5.6361 18.364C7.58872 20.3166 10.7545 20.3166 12.7072 18.364L13.0607 18.0105C15.0133 16.0578 15.0133 12.892 13.0607 10.9394L11.6465 9.52518L13.0607 8.11097ZM19.7782 14.1214L18.364 12.7072C20.3166 10.7545 20.3166 7.58872 18.364 5.6361C16.4114 3.68348 13.2456 3.68348 11.293 5.6361L10.9394 5.98965C8.98678 7.94227 8.98678 11.1081 10.9394 13.0607L12.3536 14.4749L10.9394 15.8891L9.52518 14.4749C6.79151 11.7413 6.79151 7.30911 9.52518 4.57544L9.87874 4.22188C12.6124 1.48821 17.0446 1.48821 19.7782 4.22188C22.5119 6.95555 22.5119 11.3877 19.7782 14.1214Z"/></svg>
                </a>
              </div>
            </div>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-neutral-600" aria-label="Footer">
              <a href={currentLang === 'en' ? '/#how' : `/${currentLang}#how`} className="transition hover:text-neutral-950">
                {t('footer.howToUse')}
              </a>
              <a href={currentLang === 'en' ? '/#how-download' : `/${currentLang}#how-download`} className="transition hover:text-neutral-950">
                {t('nav.howDownload')}
              </a>
              <a href={currentLang === 'en' ? '/#faq' : `/${currentLang}#faq`} className="transition hover:text-neutral-950">
                {t('nav.faq')}
              </a>
              <a href={currentLang === 'en' ? '/#blog' : `/${currentLang}#blog`} className="transition hover:text-neutral-950">
                {t('nav.blog')}
              </a>
            </nav>
          </div>
          <div className="mt-8 border-t border-neutral-200/80 pt-6 text-center text-xs leading-relaxed text-neutral-500 sm:text-left">
            <p>
              {t('footer.copyright', { year: new Date().getFullYear() })}
            </p>
            <p className="mt-2 text-neutral-400">
              {t('footer.disclaimer')}
            </p>
            <p className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-neutral-400 sm:justify-start">
              <Link to={currentLang === 'en' ? '/privacy' : `/${currentLang}/privacy`} className="transition hover:text-neutral-600">
                {t('footer.privacy')}
              </Link>
              <span className="text-neutral-300" aria-hidden>
                ·
              </span>
              <Link to={currentLang === 'en' ? '/terms' : `/${currentLang}/terms`} className="transition hover:text-neutral-600">
                {t('footer.terms')}
              </Link>
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
              <a href="https://submitaitools.org" target="_blank" rel="noopener noreferrer">
                <img src="https://submitaitools.org/static_submitaitools/images/submitaitools.png" alt="Submit AI Tools" style={{ borderRadius: "8px", width: "120px", height: "36px" }} />
              </a>
              <a href="https://domainrank.app" target="_blank" rel="noopener noreferrer">
                <img src="https://domainrank.app/api/badge/x-video-download.net?style=small" alt="x-video-download.net Domain Rating" width="150" height="24" />
              </a>
              <a href="https://dang.ai/" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.prod.website-files.com/63d8afd87da01fb58ea3fbcb/6487e2868c6c8f93b4828827_dang-badge.png" alt="Dang.ai" style={{ width: "150px", height: "54px" }} width="150" height="54" />
              </a>
              <a href="https://wired.business" target="_blank" rel="noopener noreferrer">
                <img src="https://wired.business/badge0-dark.svg" alt="Featured on Wired Business" width="200" height="54" />
              </a>
              <a href="https://twelve.tools" target="_blank" rel="noopener noreferrer">
                <img src="https://twelve.tools/badge0-dark.svg" alt="Featured on Twelve Tools" width="200" height="54" />
              </a>
              <a href="https://productfame.com/products/x-video-download" target="_blank" rel="noopener noreferrer" title="ProductFame Top 1 Daily Winner">
                <img src="https://productfame.com/badges/top1-light.svg" alt="ProductFame Top 1 Daily Winner" style={{ width: "195px", height: "auto" }} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
