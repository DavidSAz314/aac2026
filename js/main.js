/* Advanced Aircraft Company - Site JS */
(function () {
 const path = window.location.pathname.split('/').pop() || 'index.html';

 function isActive(href) {
 if (!href) return false;
 const h = href.split('/').pop().split('#')[0];
 if (h === path) return true;
 if (path === '' && (h === 'index.html' || h === '')) return true;
 return false;
 }

 /* ========== HEADER ========== */
 function buildHeader() {
 const header = document.getElementById('site-header');
 if (!header) return;
 header.innerHTML = `
 <div class="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
 <a href="index.html" class="flex items-center shrink-0 site-logo-link">
 <img src="assets/logos/aac-logo-web.png" alt="AAC" class="site-logo" />
 </a>

 <nav class="desktop-nav flex items-center gap-0.5">
 <!-- UAS -->
 <div class="nav-dropdown">
 <a href="uas.html" class="nav-link ${isActive('uas.html') ? 'active' : ''}">UAS</a>
 <div class="nav-dropdown-panel">
 <a href="uas.html#hsi">HSI<span><span class="status-pre-production">in development</span> · group 2</span></a>
 <a href="uas.html#zevo">ZEVO<span><span class="status-production">early access</span> · group 1</span></a>
 <a href="uas.html#hamr">HAMR<span><span class="status-production">production</span> · group 2</span></a>
 </div>
 </div>
 <!-- Missions -->
 <div class="nav-dropdown">
 <a href="missions.html" class="nav-link ${isActive('missions.html') ? 'active' : ''}">Missions</a>
 <div class="nav-dropdown-panel" style="min-width:360px">
 <a href="missions.html#organic-distributed-fires">Distributed Kinetics<span><span class="status-in-air">Domain: in air</span> · kinetics at longer range and higher speed</span></a>
 <a href="missions.html#clinical-triage">Clinical Triage<span><span class="status-on-ground">Domain: on ground</span> · Edge triage, casualty care, endure longer holds</span></a>
 <a href="missions.html#actionable-edge-intelligence">Actionable Edge Intelligence<span><span class="status-in-air">Domain: in air</span> · Multi-sensor fused track & C2 integration</span></a>
 <a href="missions.html#sustainment">Sustainment / Logistics<span><span class="status-on-ground">Domain: on ground</span> · Parts, batteries, medical supplies to the distributed force</span></a>
 <a href="missions.html#power">Power Delivery / Recharge<span><span class="status-on-ground">Domain: on ground</span> · power delivery and recharge batteries</span></a>
 <a href="missions.html#cbrn">CBRN<span><span class="status-ground-air">Domain: on ground and in air</span> · analysis and decision making support</span></a>
 </div>
 </div>
 <!-- Customers -->
 <div class="nav-dropdown">
 <a href="services.html" class="nav-link ${isActive('services.html') ? 'active' : ''}">Customers</a>
 <div class="nav-dropdown-panel">
 <a href="services.html#usmc">Marine Expeditionary</a>
 <a href="services.html#army">Army</a>
 <a href="services.html#navy">Navy Littoral</a>
 <a href="services.html#usaf">USAF ACE</a>
 <a href="services.html#uscg">Coast Guard</a>
        <a href="services.html#dhs">DHS</a>
        <a href="services.html#fema">FEMA</a>
      </div>
 </div>
 <!-- Compliance -->
 <div class="nav-dropdown">
 <a href="compliance.html" class="nav-link ${isActive('compliance.html') ? 'active' : ''}">Compliance</a>
 <div class="nav-dropdown-panel">
 <a href="compliance.html#cots">COTS</a>
 <a href="compliance.html#ndaa">NDAA</a>
 <a href="compliance.html#mosa">MOSA</a>
 </div>
 </div>
 <!-- Integrations -->
 <div class="nav-dropdown">
 <a href="integrations.html" class="nav-link ${isActive('integrations.html') ? 'active' : ''}">Integrations</a>
 <div class="nav-dropdown-panel">
 <a href="integrations.html#sensors">Sensors</a>
 <a href="integrations.html#gps">GPS-D / Nav</a>
 <a href="integrations.html#power">Power / Fuel</a>
 <a href="integrations.html#comms">Comms</a>
 </div>
 </div>
 <a href="company.html" class="nav-link ${isActive('company.html') ? 'active' : ''}">Company</a>
 <a href="investors.html" class="btn-primary ml-3 !py-2 !px-4 !text-xs">Investors</a>
 </nav>

 <button id="menu-btn" class="mobile-toggle flex items-center justify-center w-10 h-10 rounded-lg border border-[var(--border)] text-slate-300" aria-label="Menu">
 <svg id="menu-icon-open" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h14M4 11h14M4 15h14"/></svg>
 <svg id="menu-icon-close" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" class="hidden"><path d="M6 6l10 10M16 6L6 16"/></svg>
 </button>
 </div>`;
 }

 function buildMobileMenu() {
 let menu = document.getElementById('mobile-menu');
 if (!menu) {
 menu = document.createElement('div');
 menu.id = 'mobile-menu';
 document.body.appendChild(menu);
 }
 menu.innerHTML = `
 <div class="space-y-6 pb-20">
 <div>
 <div class="text-xs font-mono text-amber-500 tracking-widest mb-2">UAS</div>
 <a href="uas.html" class="block py-2 text-slate-200 font-medium">All Platforms</a>
 <a href="uas.html#hsi" class="block py-2 text-slate-400 text-sm pl-3">HSI <span class="text-xs"><span class="status-pre-production">pre-production</span> · group 2</span></a>
 <a href="uas.html#zevo" class="block py-2 text-slate-400 text-sm pl-3">ZEVO <span class="text-xs"><span class="status-production">production</span> · group 1</span></a>
 <a href="uas.html#hamr" class="block py-2 text-slate-400 text-sm pl-3">HAMR <span class="text-xs"><span class="status-production">production</span> · group 2</span></a>
 </div>
 <div>
 <div class="text-xs font-mono text-amber-500 tracking-widest mb-2">MISSIONS</div>
 <a href="missions.html" class="block py-2 text-slate-200 font-medium">All Missions</a>
 <a href="missions.html#organic-distributed-fires" class="block py-2 text-slate-400 text-sm pl-3">Distributed Kinetics</a>
 <a href="missions.html#clinical-triage" class="block py-2 text-slate-400 text-sm pl-3">Clinical Triage</a>
 <a href="missions.html#actionable-edge-intelligence" class="block py-2 text-slate-400 text-sm pl-3">Actionable Edge Intelligence</a>
 <a href="missions.html#sustainment" class="block py-2 text-slate-400 text-sm pl-3">Sustainment</a>
 <a href="missions.html#power" class="block py-2 text-slate-400 text-sm pl-3">Power Delivery</a>
 <a href="missions.html#cbrn" class="block py-2 text-slate-400 text-sm pl-3">CBRN</a>
 </div>
 <div>
 <div class="text-xs font-mono text-amber-500 tracking-widest mb-2">CUSTOMERS</div>
 <a href="services.html" class="block py-2 text-slate-200 font-medium">All Customers</a>
 </div>
 <div>
 <a href="compliance.html" class="block py-2 text-slate-200 font-medium">Compliance</a>
 <a href="integrations.html" class="block py-2 text-slate-200 font-medium">Integrations</a>
 <a href="company.html" class="block py-2 text-slate-200 font-medium">Company</a>
 <a href="investors.html" class="block py-2 text-amber-400 font-medium">Investors</a>
 </div>
 </div>`;
 }

 /* ========== FOOTER ========== */
 function buildFooter() {
 const footer = document.getElementById('site-footer');
 if (!footer) return;
 footer.innerHTML = `
 <div class="max-w-7xl mx-auto px-4 sm:px-6">
 <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
 <div class="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
 <img src="assets/logos/aac-logo-web.png" alt="AAC" class="site-logo site-logo--footer mb-4" />
 <p class="text-xs font-mono text-slate-500 leading-relaxed mb-4">Veteran-owned. Building tactical UAS for contested environments.</p>
          <p class="text-xs font-mono text-slate-600">CAGE 84M95 · UEI NBN3LGEXEH39</p>
          <p class="text-xs font-mono text-slate-600 mt-2 leading-relaxed">
            1100 Exploration Way, Suite 316M<br />
            Hampton, VA 23666
          </p>
          <p class="text-xs font-mono text-slate-600 mt-2">
            <a href="tel:+17573256712" class="hover:text-amber-500">757.325.6712</a><br />
            <a href="mailto:info@flyaac.com" class="hover:text-amber-500">info@flyaac.com</a>
          </p>
 <img src="assets/logos/veteran-owned-small-business-1.png" alt="Veteran Owned" class="h-12 mt-4 opacity-80" />
 </div>
 <div>
 <h4>Our Work</h4>
 <ul class="space-y-2">
 <li><a href="uas.html">Software Platform</a></li>
 <li><a href="missions.html">Missions</a></li>
 <li><a href="compliance.html">Compliance</a></li>
 <li><a href="integrations.html">Integrations</a></li>
 <li><a href="services.html">Customers</a></li>
 </ul>
 </div>
 <div>
 <h4>Company</h4>
 <ul class="space-y-2">
 <li><a href="company.html#mission">Mission</a></li>
 <li><a href="company.html#partnerships">Partnerships</a></li>
 <li><a href="company.html#team">Team</a></li>
 <li><a href="company.html#roles">Roles / Careers</a></li>
 <li><a href="investors.html">Investors</a></li>
 </ul>
 </div>
 <div>
 <h4>Social</h4>
 <ul class="space-y-2">
 <li><a href="https://www.linkedin.com/company/advanced-aircraft-company" target="_blank" rel="noopener">LinkedIn</a></li>
 <li><a href="#" class="opacity-50 cursor-not-allowed" title="Coming soon">X / Twitter</a></li>
 <li><a href="#" class="opacity-50 cursor-not-allowed" title="Coming soon">YouTube</a></li>
 </ul>
 </div>
 <div>
 <h4>Information</h4>
 <ul class="space-y-2">
 <li><a href="privacy.html">Privacy Policy</a></li>
 <li><a href="terms.html">Terms of Use</a></li>
 <li><a href="anti-slavery.html">Modern Anti-Slavery</a></li>
 <li><a href="suppliers.html">Supplier Relations</a></li>
 <li><a href="investors.html">Investors</a></li>
 </ul>
 </div>
 </div>
 <div class="border-t border-[var(--border)] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
 <p class="text-xs text-slate-600">© ${new Date().getFullYear()} Advanced Aircraft Company. All rights reserved. SPEARHEAD™ platform.</p>
 <p class="text-xs text-slate-600 font-mono">NDAA · COTS · MOSA · Built in USA</p>
 </div>
 </div>`;
 }

 /* ========== COOKIES ========== */
 function initCookies() {
 if (localStorage.getItem('aac_cookies') === 'accepted') return;
 const banner = document.getElementById('cookie-banner');
 if (!banner) return;
 banner.classList.add('show');
 banner.innerHTML = `
 <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
 <div class="flex-1">
 <p class="text-sm text-slate-300 font-medium mb-1">We use cookies</p>
 <p class="text-xs text-slate-500 leading-relaxed">We use essential cookies to make our site work and optional analytics cookies to improve it. By clicking “Accept,” you consent to our use of cookies. See our <a href="privacy.html" class="text-amber-500 underline">Privacy Policy</a>.</p>
 </div>
 <div class="flex gap-2 shrink-0">
 <button id="cookie-reject" class="btn-outline !py-2 !px-4 !text-xs">Reject non-essential</button>
 <button id="cookie-accept" class="btn-primary !py-2 !px-4 !text-xs">Accept</button>
 </div>
 </div>`;
 document.getElementById('cookie-accept')?.addEventListener('click', () => {
 localStorage.setItem('aac_cookies', 'accepted');
 banner.classList.remove('show');
 });
 document.getElementById('cookie-reject')?.addEventListener('click', () => {
 localStorage.setItem('aac_cookies', 'essential');
 banner.classList.remove('show');
 });
 }

 /* ========== MOBILE TOGGLE ========== */
 function initMobile() {
 const btn = document.getElementById('menu-btn');
 const menu = document.getElementById('mobile-menu');
 if (!btn || !menu) return;
 btn.addEventListener('click', () => {
 menu.classList.toggle('open');
 document.getElementById('menu-icon-open')?.classList.toggle('hidden');
 document.getElementById('menu-icon-close')?.classList.toggle('hidden');
 document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
 });
 menu.querySelectorAll('a').forEach(a => {
 a.addEventListener('click', () => {
 menu.classList.remove('open');
 document.body.style.overflow = '';
 document.getElementById('menu-icon-open')?.classList.remove('hidden');
 document.getElementById('menu-icon-close')?.classList.add('hidden');
 });
 });
 }

 /* ========== INIT ========== */
 document.addEventListener('DOMContentLoaded', () => {
 buildHeader();
 buildMobileMenu();
 buildFooter();
 initCookies();
 initMobile();
 });
})();
