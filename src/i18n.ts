import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ja } from './i18n/ja';
import { zhTW } from './i18n/zh-TW';
import { es } from './i18n/es';
import { hi } from './i18n/hi';
import { ar } from './i18n/ar';
import { pt } from './i18n/pt';
import { ptBR } from './i18n/pt-BR';
import { ru } from './i18n/ru';
import { de } from './i18n/de';
import { fr } from './i18n/fr';
import { ko } from './i18n/ko';
import { it } from './i18n/it';
import { tr } from './i18n/tr';
import { id } from './i18n/id';
import { vi } from './i18n/vi';
import { th } from './i18n/th';
import { pl } from './i18n/pl';
import { nl } from './i18n/nl';
import { uk } from './i18n/uk';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        howDownload: 'How it downloads',
        whyChoose: 'Why choose',
        faq: 'FAQ',
        blog: 'Blog',
      },
      footer: {
        description: 'Save public X (Twitter) videos in your browser—paste a post link, pick an MP4, and download. No account, no desktop app.',
        howToUse: 'How to use',
        copyright: '© {{year}} X Video Download. Not affiliated with or endorsed by X Corp. "X" and "Twitter" are trademarks of their respective owners.',
        disclaimer: 'Use this tool only for content you have the right to save. Respect X\'s Terms of Service, copyright, and local law.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Use',
      },
      privacy: {
        title: 'Privacy Policy',
      },
      terms: {
        title: 'Terms of Use',
      },
      home: {
        title: 'X Video Download: Video Downloader for X',
        subtitle: 'Instantly Download high quality X (Twitter) Videos for Free in HD',
        seoTitle: 'X Video Download — Free MP4 Downloader for X (Twitter) Posts',
        seoDescription: 'X video download – The best X video downloader HD to download your favorite X videos in MP4 format. Download Twitter videos online with a single click free!',
        inputPlaceholder: 'Paste an X / Twitter video post URL…',
        downloadButton: 'Download Video',
        downloadingButton: 'Resolving…',
        example: 'Example:',
        mp4Links: 'MP4 links',
        video: 'Video',
        openDownload: 'Open / download',
        bitrateUnknown: 'Bitrate unknown',
        resolutionUnknown: 'Resolution unknown',
        
        featuresTitle: 'All-in-One X Video Download Free!',
        featuresDesc: 'Welcome to X Video Download – your ultimate free tool to download X（Twitter） videos in HD with simply one click. Whether you\'re looking for a quick online X video（Twitter ）to MP4 converter or want to save videos for viewing them offline, our X Video Downloader is secure, fast, and completely free.',
        
        howTitle: 'How to use X Video Download to download X videos?',
        step1Title: 'Step 1',
        step1Desc: 'Open the X (Twitter) post on browser or app, then click the share button.',
        step2Title: 'Step 2',
        step2Desc: 'Click the "Copy link" button to copy the public X (Twitter) video post URL.',
        step3Title: 'Step 3',
        step3Desc: 'Paste the public X (Twitter) video post URL into the input field, then click "Download Video" and wait until the MP4 links are ready.',
        
        howDownloadTitle: 'How does our X Video Downloader download X videos?',
        howDownloadP1: 'Our X Video Downloader only needs a modern browser and enough disk space to save the file. You don\'t have to install an app or third-party software—visit this site, paste a public X (Twitter) video post URL, click Download Video, and pick an MP4 link. The whole flow takes just a few clicks.',
        howDownloadP2: 'We typically have links ready in about three seconds. We don\'t host the video you download; data streams directly from X\'s (formerly Twitter\'s) content delivery network to your device, which keeps the path simple and supports your privacy. We don\'t save information about your downloads.',
        howDownloadP3: 'Because you\'re using X\'s own published video/mp4 variants, you usually get the same quality X makes available—including full HD or 4K when those renditions exist—without us recompressing the media. Want audio only? Choose the highest-bitrate MP4 we list, save it, and extract the soundtrack with a converter you trust; we surface X\'s streams rather than re-encoding them on our servers.',
        
        whyChooseTitle: 'Why choose X Video Download as your go-to video download online free?',
        whyChooseP1: 'Ever lost a great clip in the endless X timeline? A reliable, free online X video downloader helps you keep what matters. Whether you\'re a creator building a reference library, a marketer saving viral posts for inspiration, or you just want funny memes available offline, X Video Download stays out of the way: open this site, paste a public post URL, and save an MP4 in a few clicks—no app install, no sign-up, and without the clutter of pop-ups.',
        whyChooseP2: 'We focus on clarity and quality. X Video Download surfaces the video/mp4 variants X publishes for each post, so when full HD or 4K renditions exist you can pick them—without us re-compressing the stream. We don\'t host the files and we don\'t log your downloads, which keeps things lightweight and privacy-minded. If you later need audio-only edits, batch workflows, or broadcast captures, use the saved MP4 as your source in the tools you already trust; our job is to make the first step fast, free, and straightforward.',
        
        faqTitle: 'FAQs',
        faq1Q: 'How to download X videos from private accounts with X Video Download?',
        faq1A: 'It isn\'t possible to download restricted or private X videos through this website—we only read public post metadata. Some browser extensions can save media from your own logged-in session without sending files through our servers; use any third-party tool only if you trust it and X\'s rules allow it.',
        faq2Q: 'How to download X videos on iPhone with X Video Download?',
        faq2A: 'On iOS 13 or later, open this site in Safari (or another up-to-date browser), paste your public post URL, and follow the same steps as on desktop. On older iOS versions, you may need an app with a built-in browser (for example Documents by Readdle) to open this page and save the MP4 link.',
        faq3Q: 'Are there limits when using X Video Download to download X videos?',
        faq3A: 'There\'s no fixed quota on how many posts you can resolve while the service is running. The tool stays free to use; fair use and rate limits may still apply on X\'s side or on our infrastructure to keep things reliable for everyone.',
        faq4Q: 'How to download X videos on Android with X Video Download?',
        faq4A: 'On Android, open this site in Chrome or another modern mobile browser—there\'s no separate app required. Paste the public video post URL and follow the instructions on the homepage; you can bookmark the page for quicker access later.',
        faq5Q: 'How to convert X videos to MP4 with X Video Download?',
        faq5A: 'X (Twitter) already serves posts as MP4 for many videos. Paste the post link here, click Download Video, and pick one of the video/mp4 links—usually in a few seconds you can open or save the file. We don\'t re-encode the stream; you get the variants X exposes for that tweet.',
        faq6Q: 'Do I need to sign up to use X Video Download online?',
        faq6A: 'No. Open the site, paste a public X video post URL, and go—no account, no extra software install, and no paywall for the core downloader flow.',
        
        blogTitle: 'X Video Download Blog',
        blogSubtitle: 'Guides and tips for saving public X posts—honest, browser-first, no fluff.',
        blogReadMore: 'Read more — coming soon',
        blog1Kicker: 'X VIDEO DOWNLOAD FOR MAC',
        blog1Title: 'Best X (Twitter) Video Downloader for Mac—Right in Your Browser',
        blog1Excerpt: 'Picture this: you\'re scrolling X on your Mac, you spot a clip you want to keep—a meme, a highlight reel, or a tutorial—and there\'s still no download button. X Video Download uses your paste URL to list public MP4 links so you can save what X already publishes, without installing a heavy desktop suite.',
        blog2Kicker1: 'TOP',
        blog2Kicker2: 'X VIDEO',
        blog2Kicker3: 'TIPS FOR 2026',
        blog2Title: 'How to Choose a Safe, Free Online X Video Downloader',
        blog2Excerpt: 'Not every "Twitter saver" is built the same. Look for tools that explain where files come from, avoid sketchy executables, and prefer flows that pull official streams instead of mystery servers. When a site only asks for a public post URL and returns direct MP4 variants, you stay closer to X\'s own delivery path—and that\'s easier to reason about.',
        blog3Kicker1: 'HowTo: X Video Download',
        blog3Kicker2: 'THE ULTIMATE GUIDE',
        blog3Title: 'How to Download X Videos: Desktop, iPhone & Android (Step-by-Step Mindset)',
        blog3Excerpt: 'People save X clips to watch offline, archive inspiration, or share outside the app. Start from a public post, copy its link, paste it into a downloader that surfaces syndicated MP4 URLs, then open your preferred quality in the browser and save. The exact taps differ on iOS, Android, or desktop—but the idea stays the same: public link in, direct file out.',
      },
    },
  },
  ja,
  'zh-CN': {
    translation: {
      nav: {
        home: '首页',
        howDownload: '下载原理',
        whyChoose: '为什么选择',
        faq: '常见问题',
        blog: '博客',
      },
      footer: {
        description: '在浏览器中保存公开的 X (Twitter) 视频——粘贴推文链接，选择 MP4 格式，即可下载。无需账号，无需桌面应用。',
        howToUse: '使用方法',
        copyright: '© {{year}} X Video Download。不隶属于或受 X Corp 认可。"X" 和 "Twitter" 是其各自所有者的商标。',
        disclaimer: '仅对您有权保存的内容使用此工具。请遵守 X 的服务条款、版权和当地法律。',
        privacy: '隐私政策',
        terms: '使用条款',
      },
      privacy: {
        title: '隐私政策',
      },
      terms: {
        title: '使用条款',
      },
      home: {
        title: 'X Video Download: X 视频下载器',
        subtitle: '免费高清下载 X (Twitter) 视频',
        seoTitle: 'X Video Download — 免费 X (Twitter) MP4 下载器',
        seoDescription: 'X 视频下载 – 最佳 X 视频下载器 HD，下载您喜爱的 X 视频为 MP4 格式。一键免费在线下载 Twitter 视频！',
        inputPlaceholder: '粘贴 X / Twitter 视频推文链接…',
        downloadButton: '下载视频',
        downloadingButton: '解析中…',
        example: '示例：',
        mp4Links: 'MP4 链接',
        video: '视频',
        openDownload: '打开 / 下载',
        bitrateUnknown: '比特率未知',
        resolutionUnknown: '分辨率未知',
        
        featuresTitle: '一站式免费 X 视频下载！',
        featuresDesc: '欢迎使用 X Video Download——您的终极免费工具，只需一键即可下载高清 X（Twitter）视频。无论您是在寻找快速的在线 X 视频（Twitter）转 MP4 转换器，还是想保存视频以便离线观看，我们的 X 视频下载器都安全、快速且完全免费。',
        
        howTitle: '如何使用 X Video Download 下载 X 视频？',
        step1Title: '步骤 1',
        step1Desc: '在浏览器或应用中打开 X (Twitter) 推文，然后点击分享按钮。',
        step2Title: '步骤 2',
        step2Desc: '点击"复制链接"按钮，复制公开的 X (Twitter) 视频推文链接。',
        step3Title: '步骤 3',
        step3Desc: '将公开的 X (Twitter) 视频推文链接粘贴到输入框中，然后点击"下载视频"并等待 MP4 链接准备就绪。',
        
        howDownloadTitle: '我们的 X 视频下载器如何下载 X 视频？',
        howDownloadP1: '我们的 X 视频下载器只需要一个现代浏览器和足够的磁盘空间来保存文件。您无需安装应用或第三方软件——访问本网站，粘贴公开的 X (Twitter) 视频推文链接，点击下载视频，然后选择一个 MP4 链接。整个流程只需几次点击。',
        howDownloadP2: '我们通常在大约三秒内准备好链接。我们不托管您下载的视频；数据直接从 X（前身为 Twitter）的内容分发网络流式传输到您的设备，这使路径保持简单并支持您的隐私。我们不保存有关您下载的信息。',
        howDownloadP3: '因为您使用的是 X 自己发布的 video/mp4 变体，所以您通常会获得 X 提供的相同质量——包括全高清或 4K（当这些版本存在时）——而无需我们重新压缩媒体。想要仅音频？选择我们列出的最高比特率 MP4，保存它，然后使用您信任的转换器提取音轨；我们展示 X 的流而不是在我们的服务器上重新编码它们。',
        
        whyChooseTitle: '为什么选择 X Video Download 作为您的首选免费在线视频下载工具？',
        whyChooseP1: '是否曾在无尽的 X 时间线中丢失过精彩片段？可靠的免费在线 X 视频下载器可帮助您保留重要内容。无论您是创作者构建参考库、营销人员保存病毒式传播的帖子以获取灵感，还是只想离线观看有趣的表情包，X Video Download 都不会妨碍您：打开本网站，粘贴公开帖子 URL，只需几次点击即可保存 MP4——无需安装应用、无需注册，也没有弹窗的干扰。',
        whyChooseP2: '我们专注于清晰度和质量。X Video Download 展示 X 为每个帖子发布的 video/mp4 变体，因此当全高清或 4K 版本存在时，您可以选择它们——而无需我们重新压缩流。我们不托管文件，也不记录您的下载，这使事情保持轻量级和注重隐私。如果您以后需要仅音频编辑、批处理工作流程或广播捕获，请使用保存的 MP4 作为您已经信任的工具中的源；我们的工作是使第一步快速、免费且简单。',
        
        faqTitle: '常见问题',
        faq1Q: '如何使用 X Video Download 下载私人账户的 X 视频？',
        faq1A: '无法通过本网站下载受限或私人 X 视频——我们只读取公开帖子元数据。某些浏览器扩展可以从您自己的登录会话中保存媒体，而无需通过我们的服务器发送文件；仅在您信任它且 X 的规则允许的情况下使用任何第三方工具。',
        faq2Q: '如何在 iPhone 上使用 X Video Download 下载 X 视频？',
        faq2A: '在 iOS 13 或更高版本上，在 Safari（或其他最新浏览器）中打开本网站，粘贴您的公开帖子 URL，然后按照与桌面相同的步骤操作。在较旧的 iOS 版本上，您可能需要一个带有内置浏览器的应用（例如 Documents by Readdle）来打开此页面并保存 MP4 链接。',
        faq3Q: '使用 X Video Download 下载 X 视频时有限制吗？',
        faq3A: '在服务运行期间，您可以解析的帖子数量没有固定配额。该工具保持免费使用；公平使用和速率限制可能仍然适用于 X 方面或我们的基础设施，以保持对每个人的可靠性。',
        faq4Q: '如何在 Android 上使用 X Video Download 下载 X 视频？',
        faq4A: '在 Android 上，在 Chrome 或其他现代移动浏览器中打开本网站——无需单独的应用。粘贴公开视频帖子 URL 并按照主页上的说明操作；您可以将页面添加为书签以便以后更快地访问。',
        faq5Q: '如何使用 X Video Download 将 X 视频转换为 MP4？',
        faq5A: 'X (Twitter) 已经为许多视频提供 MP4 格式的帖子。在此处粘贴帖子链接，点击下载视频，然后选择其中一个 video/mp4 链接——通常在几秒钟内您就可以打开或保存文件。我们不重新编码流；您获得 X 为该推文公开的变体。',
        faq6Q: '我需要注册才能在线使用 X Video Download 吗？',
        faq6A: '不需要。打开网站，粘贴公开的 X 视频帖子 URL，然后开始——无需账户、无需额外的软件安装，核心下载器流程也没有付费墙。',
        
        blogTitle: 'X Video Download 博客',
        blogSubtitle: '保存公开 X 帖子的指南和技巧——诚实、浏览器优先、无废话。',
        blogReadMore: '阅读更多 — 即将推出',
        blog1Kicker: 'MAC 版 X 视频下载',
        blog1Title: '最佳 Mac 版 X (Twitter) 视频下载器——就在您的浏览器中',
        blog1Excerpt: '想象一下：您在 Mac 上浏览 X，发现了一个想要保留的片段——一个表情包、一个精彩集锦或一个教程——但仍然没有下载按钮。X Video Download 使用您粘贴的 URL 列出公开的 MP4 链接，因此您可以保存 X 已经发布的内容，而无需安装笨重的桌面套件。',
        blog2Kicker1: '顶级',
        blog2Kicker2: 'X 视频',
        blog2Kicker3: '2026 年技巧',
        blog2Title: '如何选择安全、免费的在线 X 视频下载器',
        blog2Excerpt: '并非每个"Twitter 保存器"都是一样的。寻找解释文件来源的工具，避免可疑的可执行文件，并优先选择拉取官方流而不是神秘服务器的流程。当一个网站只要求公开帖子 URL 并返回直接的 MP4 变体时，您就更接近 X 自己的交付路径——这更容易理解。',
        blog3Kicker1: '操作指南：X 视频下载',
        blog3Kicker2: '终极指南',
        blog3Title: '如何下载 X 视频：桌面、iPhone 和 Android（分步思维）',
        blog3Excerpt: '人们保存 X 片段以离线观看、存档灵感或在应用外分享。从公开帖子开始，复制其链接，将其粘贴到显示联合 MP4 URL 的下载器中，然后在浏览器中打开您喜欢的质量并保存。iOS、Android 或桌面上的确切点击有所不同——但想法保持不变：公开链接输入，直接文件输出。',
      },
    },
  },
  'zh-TW': zhTW,
  es,
  hi,
  ar,
  pt,
  'pt-BR': ptBR,
  ru,
  de,
  fr,
  ko,
  it,
  tr,
  id,
  vi,
  th,
  pl,
  nl,
  uk,
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
