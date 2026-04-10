import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import SEO from "../components/SEO";

export default function TermsPage() {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || 'en';
  
  // Only use translated title for non-English languages
  const seoTitle = currentLang === 'en'
    ? 'Terms of Use — X Video Download'
    : `${t('terms.title')} — X Video Download`;
  
  return (
    <>
      <SEO 
        title={seoTitle}
        description="Read the Terms of Use for X Video Download. Understand your rights and responsibilities when using our free X (Twitter) video downloader service."
        lang={currentLang}
      />
      <main className="flex-1 bg-white">
      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="heading-brand text-3xl font-semibold text-neutral-950 sm:text-4xl">{t('terms.title')}</h1>
        <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
          Welcome to <strong className="font-medium text-neutral-800">X Video Download</strong>. By accessing or using this
          website and its related services, you agree to these Terms of Use. If you do not agree, please do not use the service.
        </p>

        <h2 className="heading-brand mt-10 text-xl font-semibold text-neutral-950 sm:text-2xl">License and intellectual property</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
          You may not copy, modify, distribute, sell, or lease any part of this website or its branding in ways that violate
          applicable law or our rights. You may not attempt to reverse engineer or scrape the service in order to bypass normal
          use, overload our systems, or misrepresent the product. The site, its design, text, and trademarks used to identify{" "}
          <strong className="font-medium text-neutral-800">X Video Download</strong> remain owned by their respective rights
          holders. &quot;X&quot; and &quot;Twitter&quot; are trademarks of their respective owners; this site is not affiliated
          with or endorsed by X Corp.
        </p>

        <h2 className="heading-brand mt-10 text-xl font-semibold text-neutral-950 sm:text-2xl">The service</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
          We provide a <strong className="font-medium text-neutral-800">free, browser-based</strong> tool to help you locate
          publicly available <code className="text-neutral-800">video/mp4</code> links for X (Twitter) posts. We may change,
          suspend, or discontinue features at any time. If we ever introduce paid features, we will clearly disclose pricing and
          what you receive before you are charged.
        </p>

        <h2 className="heading-brand mt-10 text-xl font-semibold text-neutral-950 sm:text-2xl">Your responsibilities</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
          You are responsible for your device, browser, and network connection. You are responsible for any data or carrier charges
          from your internet provider or mobile operator when using the site.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
          You agree to use the service only for <strong className="font-medium text-neutral-800">lawful purposes</strong> and only
          for content you have the right to access and save. You must comply with <strong className="font-medium text-neutral-800">X&apos;s Terms of Service</strong>,{" "}
          copyright law, and the laws that apply where you live. Do not use this site to harass others, infringe intellectual
          property, or circumvent technical protections where that is prohibited.
        </p>

        <h2 className="heading-brand mt-10 text-xl font-semibold text-neutral-950 sm:text-2xl">Third-party services</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
          The service depends on <strong className="font-medium text-neutral-800">public information and infrastructure operated
          by X</strong> (Twitter) and other third parties. Those providers have their own terms and privacy policies. We do not
          control X&apos;s availability, rate limits, or syndication formats; if they change or block access, our tool may not work
          for some posts or at some times.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
          If we add analytics, advertising, or other embedded third-party scripts, their terms may also apply; we will describe
          material integrations on our <Link to={currentLang === 'en' ? '/privacy' : `/${currentLang}/privacy`} className="text-sky-700 underline decoration-sky-300 underline-offset-2 hover:text-sky-900">Privacy Policy</Link> page when we do.
        </p>

        <h2 className="heading-brand mt-10 text-xl font-semibold text-neutral-950 sm:text-2xl">Disclaimer of warranties</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
          The service is provided <strong className="font-medium text-neutral-800">&quot;as is&quot;</strong> and{" "}
          <strong className="font-medium text-neutral-800">&quot;as available&quot;</strong>. We strive to keep the site accurate
          and running, but we do not warrant uninterrupted or error-free operation. Results depend on third-party data; we do not
          guarantee that every post will resolve or that every link will remain valid.
        </p>

        <h2 className="heading-brand mt-10 text-xl font-semibold text-neutral-950 sm:text-2xl">Limitation of liability</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
          To the fullest extent permitted by law, <strong className="font-medium text-neutral-800">X Video Download</strong> and
          its operators will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any
          loss of data, profits, or goodwill, arising from your use of or inability to use the service, including reliance on any
          link or metadata returned by the tool.
        </p>

        <h2 className="heading-brand mt-10 text-xl font-semibold text-neutral-950 sm:text-2xl">Termination</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
          We may suspend or terminate access to the service at any time, with or without notice, for operational, legal, or abuse
          reasons. Upon termination, you must stop using the site in ways that violate these terms. Provisions that by their
          nature should survive (including intellectual property, disclaimers, and limitations of liability) will survive.
        </p>

        <h2 className="heading-brand mt-10 text-xl font-semibold text-neutral-950 sm:text-2xl">Changes to these Terms of Use</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
          We may update these Terms of Use from time to time. We will post the updated terms on this page and revise the effective
          date below. Continued use after changes constitutes acceptance of the updated terms.
        </p>
        <p className="mt-3 text-sm text-neutral-500">These terms are effective as of March 28, 2026.</p>

        <h2 className="heading-brand mt-10 text-xl font-semibold text-neutral-950 sm:text-2xl">Contact us</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
          If you have questions about these Terms of Use, please contact us using the contact information published on the main site
          when available. For how we handle data, see our{" "}
          <Link to={currentLang === 'en' ? '/privacy' : `/${currentLang}/privacy`} className="text-sky-700 underline decoration-sky-300 underline-offset-2 hover:text-sky-900">
            Privacy Policy
          </Link>
          .
        </p>
      </article>
    </main>
    </>
  );
}
