import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import SEO from "../components/SEO";

const exampleUrl = "https://x.com/i/status/2037222810733662265";

function FaqChevron({ expanded }: { expanded: boolean }) {
  return (
    <svg
      className={`size-5 shrink-0 text-sky-600 transition-transform duration-200 ease-out ${expanded ? "" : "rotate-180"}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      aria-hidden
    >
      <path d="M6 15l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const API_BASE = import.meta.env.VITE_API_BASE ?? "";

type Mp4Variant = {
  url: string;
  bitrate: number | null;
  width: number | null;
  height: number | null;
};

type ResolveResponse = {
  tweetId: string;
  videos: Array<{
    poster: string | null;
    variants: Mp4Variant[];
  }>;
};

type ApiErrorBody = {
  error?: string;
  message?: string;
};

async function resolvePostUrl(postUrl: string): Promise<ResolveResponse> {
  const q = new URLSearchParams({ url: postUrl.trim() });
  const res = await fetch(`${API_BASE}/api/resolve?${q}`);
  const data = (await res.json().catch(() => ({}))) as ResolveResponse & ApiErrorBody;
  if (!res.ok) {
    throw new Error(data.message || data.error || `Request failed (${res.status})`);
  }
  if (!data.tweetId || !Array.isArray(data.videos)) {
    throw new Error("Invalid response format");
  }
  return data as ResolveResponse;
}

function BlogCardArt() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.12]" aria-hidden>
      <svg className="size-28 text-white" viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r="52" stroke="currentColor" strokeWidth="2" />
        <path
          d="M60 28v36l18-18M42 64h36"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function HomePage() {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || 'en';
  const [url, setUrl] = useState("");
  
  // Only use translated SEO for non-English languages
  const seoTitle = currentLang === 'en' 
    ? 'X Video Download — Free MP4 Downloader for X (Twitter) Posts'
    : t('home.seoTitle');
  const seoDescription = currentLang === 'en'
    ? 'X video download – The best X video downloader HD to download your favorite X videos in MP4 format. Download Twitter videos online with a single click free!'
    : t('home.seoDescription');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ResolveResponse | null>(null);
  const [openFaq, setOpenFaq] = useState(() => new Set([0, 1, 2, 3, 4, 5]));

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const data = await resolvePostUrl(url);
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not resolve this URL");
    } finally {
      setLoading(false);
    }
  };

  const formatBitrate = (bps: number | null): string => {
    if (bps == null || !Number.isFinite(bps)) return t('home.bitrateUnknown');
    if (bps >= 1_000_000) return `${(bps / 1_000_000).toFixed(1)} Mbps`;
    return `${Math.round(bps / 1000)} kbps`;
  };

  const formatResolution = (v: Mp4Variant): string => {
    if (v.width && v.height) return `${v.width}×${v.height}`;
    return t('home.resolutionUnknown');
  };

  const faqItems = [
    { q: t('home.faq1Q'), a: t('home.faq1A') },
    { q: t('home.faq2Q'), a: t('home.faq2A') },
    { q: t('home.faq3Q'), a: t('home.faq3A') },
    { q: t('home.faq4Q'), a: t('home.faq4A') },
    { q: t('home.faq5Q'), a: t('home.faq5A') },
    { q: t('home.faq6Q'), a: t('home.faq6A') },
  ];

  return (
    <>
      <SEO 
        title={seoTitle}
        description={seoDescription}
        lang={currentLang}
      />
      <main className="flex-1 bg-white">
        <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-10">
          <div className="flex justify-center overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <h1 className="heading-brand w-max max-w-none whitespace-nowrap text-center text-3xl leading-tight text-neutral-950 sm:text-4xl md:text-5xl">
              {t('home.title')}
            </h1>
          </div>
          <p className="heading-brand mx-auto mt-1.5 max-w-2xl text-center text-sm font-normal text-neutral-600 sm:mt-2 sm:text-base">
            {t('home.subtitle')}
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-6 w-full rounded-2xl border border-neutral-200 bg-[var(--color-surface-muted)] p-2 shadow-sm ring-1 ring-black/5 sm:mt-8"
          >
            <label htmlFor="post-url" className="sr-only">
              X post URL
            </label>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
              <input
                id="post-url"
                type="url"
                name="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder={t('home.inputPlaceholder')}
                className="min-h-12 flex-1 rounded-xl border border-neutral-200 bg-white px-4 text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-neutral-400 focus:ring-2 focus:ring-neutral-900/10"
                autoComplete="off"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-neutral-950 px-6 font-semibold text-amber-400 transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? t('home.downloadingButton') : t('home.downloadButton')}
              </button>
            </div>
            <p className="mt-3 px-2 text-center text-xs text-neutral-500 sm:text-left">
              {t('home.example')}{" "}
              <button
                type="button"
                className="text-neutral-600 underline decoration-neutral-300 underline-offset-2 hover:text-neutral-950"
                onClick={() => setUrl(exampleUrl)}
              >
                {exampleUrl}
              </button>
            </p>
          </form>

          {error && (
            <p
              className="mt-6 w-full rounded-lg border border-neutral-200 bg-neutral-100 px-4 py-3 text-center text-sm text-neutral-800"
              role="alert"
            >
              {error}
            </p>
          )}

          {result && (
            <div className="mt-10 w-full space-y-8">
              {result.videos.map((vid, vi) => (
                <div
                  key={`${result.tweetId}-${vi}`}
                  className="rounded-2xl border border-neutral-200 bg-[var(--color-surface-muted)] p-5 shadow-sm ring-1 ring-black/5"
                >
                  <h3 className="heading-brand text-sm font-medium text-neutral-950">
                    {result.videos.length > 1 ? `${t('home.video')} ${vi + 1}` : t('home.mp4Links')}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {vid.variants.map((v, i) => (
                      <li
                        key={v.url}
                        className="flex flex-col gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div className="text-sm text-neutral-600">
                          <span className="font-medium text-neutral-950">#{i + 1}</span>
                          <span className="mx-2 text-neutral-300">·</span>
                          {formatResolution(v)}
                          <span className="mx-2 text-neutral-300">·</span>
                          {formatBitrate(v.bitrate)}
                        </div>
                        <a
                          href={v.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex shrink-0 items-center justify-center rounded-lg bg-neutral-950 px-4 py-2 text-sm font-semibold text-white ring-1 ring-black/10 transition hover:bg-neutral-800"
                        >
                          {t('home.openDownload')}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </section>

        <section id="features" className="border-t border-neutral-200 bg-[var(--color-surface-muted)] pb-16 pt-10 sm:pb-20 sm:pt-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="heading-brand text-center text-2xl text-neutral-950 sm:text-3xl">
              {t('home.featuresTitle')}
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-relaxed text-neutral-600 sm:mt-6">
              {t('home.featuresDesc')}
            </p>
          </div>
        </section>

        <section id="how" className="border-t border-neutral-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="heading-brand text-center text-2xl text-neutral-950 sm:text-3xl">
              {t('home.howTitle')}
            </h2>
            <ul className="mt-10 grid w-full gap-6 sm:grid-cols-3">
              <li className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm ring-1 ring-black/5">
                <div className="flex h-32 w-full items-center justify-center bg-neutral-100 sm:h-40 md:h-48">
                  <img
                    src="/step1.jpg"
                    alt="Step 1"
                    className="max-h-full w-full object-contain object-center"
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-5">
                  <h3 className="heading-brand font-medium text-neutral-950">{t('home.step1Title')}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {t('home.step1Desc')}
                  </p>
                </div>
              </li>
              <li className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm ring-1 ring-black/5">
                <div className="flex h-32 w-full items-center justify-center bg-neutral-100 sm:h-40 md:h-48">
                  <img
                    src="/step2.jpg"
                    alt="Step 2"
                    className="max-h-full w-full object-contain object-center"
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-5">
                  <h3 className="heading-brand font-medium text-neutral-950">{t('home.step2Title')}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {t('home.step2Desc')}
                  </p>
                </div>
              </li>
              <li className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm ring-1 ring-black/5">
                <div className="flex h-32 w-full items-center justify-center bg-neutral-100 sm:h-40 md:h-48">
                  <img
                    src="/step3.jpg"
                    alt="Step 3"
                    className="max-h-full w-full object-contain object-center"
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-5">
                  <h3 className="heading-brand font-medium text-neutral-950">{t('home.step3Title')}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {t('home.step3Desc')}
                  </p>
                </div>
              </li>
            </ul>
            <ol className="mx-auto mt-12 max-w-2xl list-decimal space-y-4 pl-6 text-neutral-700 marker:text-neutral-400 sm:mt-14">
              <li>{t('home.step1Desc')}</li>
              <li>{t('home.step2Desc')}</li>
              <li>{t('home.step3Desc')}</li>
            </ol>
          </div>
        </section>

        <section id="how-download" className="scroll-mt-16 border-t border-neutral-200 bg-[var(--color-surface-muted)] py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
            <h2 className="heading-brand mx-auto max-w-4xl text-xl leading-snug text-neutral-950 sm:text-2xl md:text-3xl">
              {t('home.howDownloadTitle')}
            </h2>
            <div className="mx-auto mt-6 max-w-3xl space-y-4 text-left text-sm leading-relaxed text-neutral-600 sm:text-base">
              <p>{t('home.howDownloadP1')}</p>
              <p>{t('home.howDownloadP2')}</p>
              <p>{t('home.howDownloadP3')}</p>
            </div>
          </div>
        </section>

        <section id="why-choose" className="scroll-mt-16 border-t border-neutral-200 bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
            <h2 className="heading-brand mx-auto max-w-4xl text-xl leading-snug text-neutral-950 sm:text-2xl md:text-3xl">
              {t('home.whyChooseTitle')}
            </h2>
            <div className="mx-auto mt-6 max-w-3xl space-y-4 text-left text-sm leading-relaxed text-neutral-600 sm:text-base">
              <p>{t('home.whyChooseP1')}</p>
              <p>{t('home.whyChooseP2')}</p>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-16 border-t border-neutral-200 bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="heading-brand text-center text-2xl font-semibold text-neutral-950 sm:text-3xl">{t('home.faqTitle')}</h2>
            <div className="mx-auto mt-8 max-w-3xl space-y-3">
              {faqItems.map((item, i) => {
                const expanded = openFaq.has(i);
                return (
                  <div
                    key={i}
                    className="overflow-hidden rounded-xl border border-neutral-200/90 bg-neutral-100 shadow-sm ring-1 ring-black/[0.03]"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(i)}
                      className="flex w-full items-start justify-between gap-4 px-4 py-4 text-left transition hover:bg-neutral-200/40 sm:px-5 sm:py-4"
                      aria-expanded={expanded}
                    >
                      <span className="heading-brand text-sm font-semibold leading-snug text-neutral-950 sm:text-base">
                        {item.q}
                      </span>
                      <FaqChevron expanded={expanded} />
                    </button>
                    {expanded ? (
                      <div className="border-t border-neutral-200/80 px-4 pb-4 pt-0 text-xs leading-relaxed text-neutral-600 sm:px-5 sm:pb-5 sm:text-sm">
                        <div className="pt-3">{item.a}</div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="blog" className="scroll-mt-16 border-t border-neutral-200 bg-[var(--color-surface-muted)] py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="heading-brand text-center text-2xl font-semibold text-neutral-950 sm:text-3xl">
              {t('home.blogTitle')}
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-neutral-600">
              {t('home.blogSubtitle')}
            </p>
            <ul className="mt-10 grid gap-6 sm:grid-cols-3">
              <li>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm ring-1 ring-black/[0.04] transition hover:shadow-md">
                  <div className="relative min-h-[132px] bg-neutral-950 px-4 pb-4 pt-5 sm:min-h-[148px] sm:px-5">
                    <BlogCardArt />
                    <div className="relative z-[1]">
                      <p className="text-[10px] font-bold uppercase leading-snug tracking-wider text-white sm:text-[11px]">
                        {t('home.blog1Kicker')}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col border-t border-neutral-200 bg-white px-4 pb-5 pt-4 sm:px-5">
                    <h3 className="text-sm font-semibold leading-snug text-sky-600 sm:text-[0.95rem]">{t('home.blog1Title')}</h3>
                    <p className="mt-3 flex-1 text-xs leading-relaxed text-neutral-600 sm:text-sm">{t('home.blog1Excerpt')}</p>
                    <span className="mt-4 inline-flex text-xs font-medium text-neutral-400">{t('home.blogReadMore')}</span>
                  </div>
                </article>
              </li>
              <li>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm ring-1 ring-black/[0.04] transition hover:shadow-md">
                  <div className="relative min-h-[132px] bg-neutral-950 px-4 pb-4 pt-5 sm:min-h-[148px] sm:px-5">
                    <BlogCardArt />
                    <div className="relative z-[1]">
                      <p className="text-[10px] font-bold uppercase leading-snug tracking-wider text-white sm:text-[11px]">
                        {t('home.blog2Kicker1')} <span className="text-amber-400">{t('home.blog2Kicker2')}</span> {t('home.blog2Kicker3')}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col border-t border-neutral-200 bg-white px-4 pb-5 pt-4 sm:px-5">
                    <h3 className="text-sm font-semibold leading-snug text-sky-600 sm:text-[0.95rem]">{t('home.blog2Title')}</h3>
                    <p className="mt-3 flex-1 text-xs leading-relaxed text-neutral-600 sm:text-sm">{t('home.blog2Excerpt')}</p>
                    <span className="mt-4 inline-flex text-xs font-medium text-neutral-400">{t('home.blogReadMore')}</span>
                  </div>
                </article>
              </li>
              <li>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm ring-1 ring-black/[0.04] transition hover:shadow-md">
                  <div className="relative min-h-[132px] bg-neutral-950 px-4 pb-4 pt-5 sm:min-h-[148px] sm:px-5">
                    <BlogCardArt />
                    <div className="relative z-[1]">
                      <p className="text-sm font-bold leading-tight tracking-wide text-white sm:text-base">{t('home.blog3Kicker1')}</p>
                      <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-widest text-amber-400 sm:text-xs">
                        {t('home.blog3Kicker2')}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col border-t border-neutral-200 bg-white px-4 pb-5 pt-4 sm:px-5">
                    <h3 className="text-sm font-semibold leading-snug text-sky-600 sm:text-[0.95rem]">{t('home.blog3Title')}</h3>
                    <p className="mt-3 flex-1 text-xs leading-relaxed text-neutral-600 sm:text-sm">{t('home.blog3Excerpt')}</p>
                    <span className="mt-4 inline-flex text-xs font-medium text-neutral-400">{t('home.blogReadMore')}</span>
                  </div>
                </article>
              </li>
            </ul>
          </div>
        </section>
    </main>
    </>
  );
}
