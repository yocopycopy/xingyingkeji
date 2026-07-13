const sharedAssets = {
  headerLogoDark: "./assets/common/logo-header-dark.png",
  headerLogoWhite: "./assets/common/logo-header-white.png",
  footerLogo: "./assets/common/logo-footer.png",
};

const navItems = [
  {
    label: "产品中心",
    href: "products.html",
    productMenu: [
      {
        category: "下肢康复训练机器人",
        href: "products.html#rehab",
        items: [
          { label: "医用版", href: "product-medical.html", desc: "医疗机构适用" },
          { label: "家庭版", href: "product-home.html", desc: "居家康复训练" },
        ],
      },
      {
        category: "智能枕",
        href: "products.html#osa",
        items: [{ label: "OSA睡眠枕", href: "products.html#osa", desc: "睡眠健康管理" }],
      },
    ],
  },
  { label: "医疗合作", href: "medical.html" },
  {
    label: "服务支持",
    href: "support.html",
    children: [
      { label: "下载中心", href: "downloads.html" },
      { label: "售后服务", href: "after-sales.html" },
    ],
  },
  {
    label: "关于星荧",
    href: "about.html",
    children: [
      { label: "关于我们", href: "about.html" },
      { label: "新闻动态", href: "placeholder.html?feature=news" },
      { label: "联系我们", href: "contact.html" },
    ],
  },
  {
    label: "获取产品",
    href: "trial.html",
    children: [
      { label: "预约体验", href: "trial.html" },
      { label: "线上商城", href: "placeholder.html?feature=shop" },
    ],
  },
];

const siteSearchItems = [
  {
    title: "首页",
    href: "index.html",
    desc: "星荧科技官网首页",
    keywords: "首页 官网 星荧科技 STARLIGHT",
  },
  {
    title: "产品中心",
    href: "products.html",
    desc: "下肢康复训练机器人、OSA 智能枕等产品入口",
    keywords: "产品 产品中心 下肢康复 康复机器人 OSA 智能枕",
  },
  {
    title: "医用版下肢康复训练机器人",
    href: "product-medical.html",
    desc: "面向医疗机构的康复训练设备详情",
    keywords: "医用版 医疗机构 康复训练 下肢康复机器人 参数 交互",
  },
  {
    title: "家庭版下肢康复训练机器人",
    href: "product-home.html",
    desc: "面向居家康复训练的产品详情",
    keywords: "家庭版 居家康复 康复训练 下肢康复机器人 参数",
  },
  {
    title: "医疗合作",
    href: "medical.html",
    desc: "医院合作、临床验证与医疗服务方案",
    keywords: "医疗合作 医院 临床验证 医生指导 数据采集",
  },
  {
    title: "下载中心",
    href: "downloads.html",
    desc: "资料、手册与相关文件下载",
    keywords: "下载中心 下载 资料 手册 服务支持",
  },
  {
    title: "售后服务",
    href: "after-sales.html",
    desc: "售后服务入口与常见问题",
    keywords: "售后 服务支持 常见问题 FAQ 维修 咨询 投诉",
  },
  {
    title: "常见问题",
    href: "faq.html",
    desc: "FAQ 问题解答",
    keywords: "常见问题 FAQ 问答 售后 服务",
  },
  {
    title: "我要投诉",
    href: "complaint.html",
    desc: "投诉与反馈表单",
    keywords: "投诉 反馈 表单 客服 售后",
  },
  {
    title: "关于我们",
    href: "about.html",
    desc: "公司介绍与品牌信息",
    keywords: "关于我们 公司介绍 星荧科技 品牌",
  },
  {
    title: "联系我们",
    href: "contact.html",
    desc: "电话、邮箱、地址与社交媒体信息",
    keywords: "联系 联系我们 电话 邮箱 地址 微信 抖音 小红书 B站",
  },
  {
    title: "预约体验",
    href: "trial.html",
    desc: "提交产品体验预约",
    keywords: "预约 体验 试用 产品获取 表单",
  },
];

function currentFile() {
  const file = window.location.pathname.split("/").pop();
  return file || "index.html";
}

function currentRoute() {
  return `${currentFile()}${window.location.search || ""}`;
}

function navHref(href) {
  return href === "#" ? "#" : `./${href}`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[char];
  });
}

function createBaiduSearchUrl(query) {
  const host = window.location.hostname;
  const siteQuery = host ? `site:${host} ${query}` : query;
  return `https://www.baidu.com/s?wd=${encodeURIComponent(siteQuery)}`;
}

function renderSearchForm(id, modifierClass = "") {
  const className = modifierClass ? `site-search ${modifierClass}` : "site-search";
  return `<form class="${className}" role="search" autocomplete="off" data-site-search>
    <label class="sr-only" for="${id}">站内搜索</label>
    <input id="${id}" type="search" name="q" placeholder="站内搜索" data-search-input />
    <div class="search-panel" data-search-panel></div>
  </form>`;
}

let headerScrollCleanup;

function renderHeader() {
  const header = document.querySelector("[data-header]");
  if (!header) return;

  const file = currentFile();
  const route = currentRoute();
  const productFiles = new Set(["products.html", "product-medical.html", "product-home.html"]);
  const supportFiles = new Set(["downloads.html", "after-sales.html", "faq.html", "complaint.html"]);
  const isProduct = productFiles.has(file);
  const isDarkHeader = header.classList.contains("dark");
  const logoSrc = isDarkHeader ? sharedAssets.headerLogoWhite : sharedAssets.headerLogoDark;

  header.innerHTML = `
    <div class="nav-shell">
      <a class="brand" href="./index.html" aria-label="星荧科技首页">
        <img class="brand-logo" src="${logoSrc}" alt="STARLIGHT 星荧科技" />
      </a>
      <nav class="main-nav" aria-label="主导航">
        ${renderSearchForm("mobile-site-search-input", "mobile-search")}
        ${navItems
          .map(({ label, href, children = [], productMenu = [] }) => {
            const childActive = children.some((item) => item.href === file || item.href === route);
            const productActive = productMenu.some((group) =>
              group.items?.some((item) => item.href === file || item.href === route)
            );
            const active =
              (isProduct && href === "products.html") ||
              (supportFiles.has(file) && href === "support.html") ||
              file === href ||
              route === href ||
              childActive ||
              productActive;
            const trigger = children.length
              ? `<button class="nav-link nav-toggle" type="button" aria-expanded="false" data-nav-toggle>${label}</button>`
              : `<a class="nav-link" href="${navHref(href)}">${label}</a>`;
            const submenu = children.length
              ? `<div class="nav-submenu">${children
                  .map((item) => `<a href="${navHref(item.href)}">${item.label}</a>`)
                  .join("")}</div>`
              : "";
            const productFlyout = productMenu.length
              ? `<div class="nav-product-menu" aria-label="产品快速选择">${productMenu
                  .map(
                    (group) => `<section class="nav-product-group">
                      <a class="nav-product-category" href="${navHref(group.href)}">${group.category}</a>
                      <div class="nav-product-items">
                        ${(group.items || [])
                          .map(
                            (item) => `<a class="nav-product-link" href="${navHref(item.href)}">
                              <span>${item.label}</span>
                              <small>${item.desc}</small>
                            </a>`
                          )
                          .join("")}
                      </div>
                    </section>`
                  )
                  .join("")}</div>`
              : "";
            return `<div class="nav-item${children.length ? " has-submenu" : ""}${productMenu.length ? " has-product-menu" : ""}${active ? " active" : ""}">
              ${trigger}
              ${submenu}
              ${productFlyout}
            </div>`;
          })
          .join("")}
      </nav>
      <div class="nav-tools">
        ${renderSearchForm("site-search-input", "desktop-search")}
        <span class="language">中文/EN</span>
      </div>
      <button class="menu-button" type="button" aria-label="打开导航"><span></span></button>
    </div>
  `;

  initSiteSearch(header);

  header.querySelector(".menu-button")?.addEventListener("click", () => {
    header.classList.toggle("open");
  });

  if (typeof headerScrollCleanup === "function") headerScrollCleanup();
  const scrollThresholdValue = Number.parseFloat(
    header.dataset.scrollThreshold || (isDarkHeader ? "120" : "0")
  );
  const scrollThreshold = Number.isFinite(scrollThresholdValue) ? Math.max(0, scrollThresholdValue) : 0;
  const scrollResetValue = Number.parseFloat(
    header.dataset.scrollResetThreshold || (isDarkHeader ? "96" : String(scrollThreshold))
  );
  const scrollResetThreshold = Number.isFinite(scrollResetValue)
    ? Math.min(scrollThreshold, Math.max(0, scrollResetValue))
    : scrollThreshold;
  let isHeaderScrolled;
  const syncHeaderScrollState = () => {
    const shouldBeScrolled = isHeaderScrolled
      ? window.scrollY > scrollResetThreshold
      : window.scrollY > scrollThreshold;
    if (shouldBeScrolled === isHeaderScrolled) return;
    isHeaderScrolled = shouldBeScrolled;
    header.classList.toggle("scrolled", shouldBeScrolled);
  };
  syncHeaderScrollState();
  window.addEventListener("scroll", syncHeaderScrollState, { passive: true });
  headerScrollCleanup = () => window.removeEventListener("scroll", syncHeaderScrollState);

  const closeSubmenus = (except) => {
    header.querySelectorAll(".nav-item.has-submenu").forEach((item) => {
      if (item === except) return;
      item.classList.remove("submenu-open");
      item.classList.remove("submenu-click-closed");
      item.querySelector("[data-nav-toggle]")?.setAttribute("aria-expanded", "false");
    });
  };

  header.querySelectorAll(".nav-item.has-submenu").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.classList.remove("submenu-click-closed");
    });
  });

  header.querySelectorAll("[data-nav-toggle]").forEach((toggle) => {
    toggle.addEventListener("click", (event) => {
      event.preventDefault();
      const item = toggle.closest(".nav-item");
      if (!item) return;
      const willOpen = !item.classList.contains("submenu-open");
      closeSubmenus(item);
      item.classList.toggle("submenu-open", willOpen);
      item.classList.toggle("submenu-click-closed", !willOpen);
      if (!willOpen) toggle.blur();
      toggle.setAttribute("aria-expanded", String(willOpen));
    });
  });

  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) closeSubmenus();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeSubmenus();
  });
}

function initSiteSearch(header) {
  const getResults = (query) => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return [];
    return siteSearchItems
      .map((item) => {
        const title = item.title.toLowerCase();
        const keywords = item.keywords.toLowerCase();
        const haystack = `${item.title} ${item.desc} ${item.keywords}`.toLowerCase();
        const score = title.includes(normalizedQuery)
          ? 3
          : keywords.includes(normalizedQuery)
            ? 2
            : haystack.includes(normalizedQuery)
              ? 1
              : 0;
        return { ...item, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
  };

  header.querySelectorAll("[data-site-search]").forEach((form) => {
    const input = form.querySelector("[data-search-input]");
    const panel = form.querySelector("[data-search-panel]");
    if (!input || !panel) return;

    let isPanelOpen = false;

    const closePanel = () => {
      isPanelOpen = false;
      form.classList.remove("open");
      panel.innerHTML = "";
    };

    const renderPanel = () => {
      const query = input.value.trim();
      const escapedQuery = escapeHtml(query);
      const results = getResults(query);

      if (!query) {
        panel.innerHTML = `<div class="search-empty">输入关键词搜索站内内容</div>`;
      } else {
        const resultMarkup = results.length
          ? results
              .map(
                (item) => `<a class="search-result" href="${navHref(item.href)}">
                  <strong>${escapeHtml(item.title)}</strong>
                  <span>${escapeHtml(item.desc)}</span>
                </a>`
              )
              .join("")
          : `<div class="search-empty">没有找到“${escapedQuery}”的站内结果</div>`;
        panel.innerHTML = `
          ${resultMarkup}
          <a class="search-baidu" href="${createBaiduSearchUrl(query)}" target="_blank" rel="noopener">
            通过百度搜索本站“${escapedQuery}”
          </a>
        `;
      }

      isPanelOpen = true;
      form.classList.add("open");
    };

    input.addEventListener("focus", renderPanel);
    input.addEventListener("input", renderPanel);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = input.value.trim();
      if (!query) return;
      const firstResult = getResults(query)[0];
      window.location.href = firstResult ? navHref(firstResult.href) : createBaiduSearchUrl(query);
    });

    document.addEventListener("click", (event) => {
      if (isPanelOpen && !form.contains(event.target)) closePanel();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closePanel();
    });
  });
}

function renderFooter() {
  const footer = document.querySelector(".site-footer");
  if (!footer) return;

  footer.innerHTML = `
    <div class="footer-shell">
      <div class="footer-contact">
        <div class="footer-logo">
          <img src="${sharedAssets.footerLogo}" alt="STARLIGHT 星荧科技" />
        </div>
        <p>联系电话</p>
        <p>18513721835</p>
        <p>contact@softstarlight.com</p>
        <p>北京市朝阳区安贞里一区1号北京创业大厦A座302</p>
        <div class="socials">
          <img src="./assets/footer/wechat.png" alt="微信" />
          <img src="./assets/footer/douyin.png" alt="抖音" />
          <img src="./assets/footer/bilibili.png" alt="哔哩哔哩" />
          <img src="./assets/footer/redbook.png" alt="小红书" />
        </div>
      </div>
      <div class="footer-divider"></div>
      <div>
        <div class="footer-links">
          <section><h3>产品中心</h3><a href="./product-medical.html">下肢康复训练机器人</a><a href="./products.html">OSA智能枕</a></section>
          <section><h3>医疗合作</h3><a href="./medical.html">合作医院</a><a href="./medical.html">临床验证</a></section>
          <section><h3>服务支持</h3><a href="./downloads.html">下载中心</a><a href="./after-sales.html">售后服务</a></section>
          <section><h3>关于星荧</h3><a href="./about.html">关于我们</a><a href="./placeholder.html?feature=news">新闻动态</a><a href="./contact.html">联系我们</a></section>
          <section><h3>产品购买</h3><a href="./trial.html">预约体验</a><a href="./placeholder.html?feature=shop">线上商城</a></section>
        </div>
        <p class="copyright">Copyright © 2026 STARLIGHT 北京星荧科技有限公司 版权所有</p>
      </div>
    </div>
  `;
}

function initProductTabs() {
  const tabs = document.querySelectorAll("[data-product-tab]");
  const panels = document.querySelectorAll("[data-product-panel]");
  const showProductPanel = (target) => {
    const hasTarget = Array.from(tabs).some((tab) => tab.dataset.productTab === target);
    const nextTarget = hasTarget ? target : tabs[0]?.dataset.productTab;
    if (!nextTarget) return;
    tabs.forEach((item) => item.classList.toggle("active", item.dataset.productTab === nextTarget));
    panels.forEach((panel) => panel.classList.toggle("active", panel.dataset.productPanel === nextTarget));
  };

  showProductPanel(window.location.hash.replace("#", ""));

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.productTab;
      showProductPanel(target);
      if (target) window.history.replaceState(null, "", `#${target}`);
    });
  });
}

function initFaqPage() {
  const page = document.querySelector("[data-faq-page]");
  if (!page || !Array.isArray(window.faqGroups) || !window.faqGroups.length) return;

  const sidebar = page.querySelector("[data-faq-sidebar]");
  const content = page.querySelector("[data-faq-content]");
  if (!sidebar || !content) return;

  let activeGroup = 0;
  let activeItem = 0;
  const allItems = window.faqGroups.flatMap((group, groupIndex) =>
    group.items.map((item, itemIndex) => ({ ...item, groupIndex, itemIndex }))
  );

  const hashId = window.location.hash.replace("#", "");
  const matched = allItems.find((item) => item.id === hashId);
  if (matched) {
    activeGroup = matched.groupIndex;
    activeItem = matched.itemIndex;
  }

  function renderSidebar() {
    sidebar.innerHTML = window.faqGroups
      .map((group, groupIndex) => {
        const isOpen = groupIndex === activeGroup;
        const questions = isOpen
          ? `<div class="faq-question-list">${group.items
              .map(
                (item, itemIndex) =>
                  `<button class="faq-question${itemIndex === activeItem ? " active" : ""}" type="button" data-group="${groupIndex}" data-item="${itemIndex}">${item.title}</button>`
              )
              .join("")}</div>`
          : "";
        return `<section class="faq-category${isOpen ? " open" : ""}">
          <button class="faq-category-button" type="button" data-group="${groupIndex}">${group.category}</button>
          ${questions}
        </section>`;
      })
      .join("");
  }

  function renderContent() {
    const group = window.faqGroups[activeGroup];
    const item = group.items[activeItem];
    const paragraphs = item.answer.map((text) => `<p>${text}</p>`).join("");
    content.innerHTML = `
      <nav class="faq-breadcrumb" aria-label="常见问题路径">
        <span>售后服务</span><span>${group.category}</span><span>${item.title}</span>
      </nav>
      <h2>${item.title}</h2>
      <div class="faq-answer">${paragraphs}</div>
      <div class="faq-feedback" aria-label="反馈">
        <button class="helpful" type="button" aria-label="有帮助">&nbsp;有帮助</button>
        <button class="not-helpful" type="button" aria-label="暂无帮助">暂无帮助</button>
      </div>
    `;
  }

  function setActive(groupIndex, itemIndex = 0) {
    activeGroup = groupIndex;
    activeItem = itemIndex;
    const item = window.faqGroups[activeGroup].items[activeItem];
    if (item?.id) window.history.replaceState(null, "", `#${item.id}`);
    renderSidebar();
    renderContent();
  }

  sidebar.addEventListener("click", (event) => {
    const categoryButton = event.target.closest("[data-group]:not([data-item])");
    const questionButton = event.target.closest("[data-group][data-item]");
    if (questionButton) {
      setActive(Number(questionButton.dataset.group), Number(questionButton.dataset.item));
      return;
    }
    if (categoryButton) {
      setActive(Number(categoryButton.dataset.group), 0);
    }
  });

  content.addEventListener("click", (event) => {
    const button = event.target.closest(".faq-feedback button");
    if (!button) return;
    content.querySelectorAll(".faq-feedback button").forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
  });

  renderSidebar();
  renderContent();
}

function initComplaintForm() {
  const form = document.querySelector("[data-complaint-form]");
  if (!form) return;

  const status = form.querySelector("[data-complaint-status]");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    console.info("Complaint form payload ready for backend/email integration:", data);
    if (status) {
      status.textContent = "提交功能已预留，后续可接入数据库或邮件发送。";
    }
  });
}

function initDownloadTabs() {
  const tabs = document.querySelectorAll("[data-download-tab]");
  const panels = document.querySelectorAll("[data-download-panel]");
  if (!tabs.length || !panels.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.downloadTab;
      tabs.forEach((item) => item.classList.toggle("active", item === tab));
      panels.forEach((panel) => panel.classList.toggle("active", panel.dataset.downloadPanel === target));
    });
  });
}

function initTrialForm() {
  const form = document.querySelector("[data-trial-form]");
  if (!form) return;

  const status = form.querySelector("[data-trial-status]");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    console.info("Trial form payload ready for backend/email integration:", data);
    if (status) {
      status.textContent = "预约提交功能已预留，后续可接入数据库或邮件发送。";
    }
  });
}

renderHeader();
renderFooter();
initProductTabs();
initFaqPage();
initComplaintForm();
initDownloadTabs();
initTrialForm();
