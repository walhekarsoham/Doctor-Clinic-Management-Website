/* ===================================================
   components.js - Shared Navbar & Footer Injection
   =================================================== */

const NAVBAR_HTML = `
<div id="loading-screen">
  <div class="loader-logo">
    <div class="loader-icon">🏥</div>
    <span data-i18n="brand_name">Dr. John Smith</span>
  </div>
  <div class="loader-bar"><div class="loader-fill"></div></div>
</div>
<div id="scroll-progress"></div>

<nav id="mainNav" class="navbar navbar-expand-lg" style="padding-top:0.6rem;padding-bottom:0.6rem;">
  <div class="container">
    <a class="navbar-brand" href="index.html">
      <div class="brand-icon">🏥</div>
      <div class="brand-name"><span data-i18n="brand_name">Dr. John Smith</span><span data-i18n="brand_clinic">Medical Clinic</span></div>
    </a>
    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navMenu">
      <ul class="navbar-nav mx-auto gap-1">
        <li class="nav-item"><a class="nav-link" href="index.html" data-page="index.html" data-i18n="nav_home">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="about.html" data-page="about.html" data-i18n="nav_about">About</a></li>
        <li class="nav-item"><a class="nav-link" href="services.html" data-page="services.html" data-i18n="nav_services">Services</a></li>
        <li class="nav-item"><a class="nav-link" href="schedule.html" data-page="schedule.html" data-i18n="nav_schedule">Schedule</a></li>
        <li class="nav-item"><a class="nav-link" href="blog.html" data-page="blog.html" data-i18n="nav_blog">Blog</a></li>
        <li class="nav-item"><a class="nav-link" href="contact.html" data-page="contact.html" data-i18n="nav_contact">Contact</a></li>
      </ul>
      <div class="d-flex align-items-center gap-3">
        <select id="languageSwitcher" class="lang-select">
          <option value="en">🌐 EN</option>
          <option value="mr">🇮🇳 MR</option>
        </select>
        <div class="dropdown">
          <div class="profile-avatar" id="profileAvatar" data-bs-toggle="dropdown">👤</div>
          <ul class="dropdown-menu dropdown-menu-end shadow-sm border-0" style="border-radius:12px;min-width:180px;margin-top:8px;">
            <li><a class="dropdown-item py-2" href="login.html" id="navLoginBtn" data-i18n="nav_login">🔑 Login</a></li>
            <li><a class="dropdown-item py-2" href="dashboard.html" id="navDashBtn" style="display:none" data-i18n="nav_dashboard">📊 Dashboard</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item py-2 text-danger" href="#" onclick="doLogout()" id="navLogoutBtn" style="display:none" data-i18n="nav_logout">🚪 Logout</a></li>
          </ul>
        </div>
        <a class="nav-link nav-cta" href="schedule.html" data-i18n="nav_cta">Book Appointment</a>
      </div>
    </div>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer id="footer">
  <div class="container">
    <div class="row g-4">
      <div class="col-lg-4">
        <div class="footer-brand d-flex align-items-center gap-2 mb-3">
          <div class="brand-icon" style="background:rgba(255,255,255,0.1)">🏥</div>
          <div class="brand-name" style="color:white"><span data-i18n="brand_name">Dr. John Smith</span><span style="color:rgba(255,255,255,0.5)" data-i18n="brand_clinic">Medical Clinic</span></div>
        </div>
        <p class="footer-desc" data-i18n="footer_desc">Providing compassionate, evidence-based healthcare to our community since 2004. Your health is our highest calling.</p>
        <div class="social-links mt-3">
          <a class="social-btn" href="#" title="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a class="social-btn" href="#" title="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
          <a class="social-btn" href="#" title="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
          <a class="social-btn" href="#" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
        </div>
      </div>
      <div class="col-6 col-lg-2">
        <h6 class="footer-heading" data-i18n="footer_quick_links">Quick Links</h6>
        <ul class="footer-links">
          <li><a href="index.html" data-i18n="nav_home">Home</a></li>
          <li><a href="about.html" data-i18n="nav_about">About</a></li>
          <li><a href="services.html" data-i18n="nav_services">Services</a></li>
          <li><a href="schedule.html" data-i18n="footer_book_appointment">Book Appointment</a></li>
          <li><a href="blog.html" data-i18n="nav_blog">Blog</a></li>
        </ul>
      </div>
      <div class="col-6 col-lg-2">
        <h6 class="footer-heading" data-i18n="nav_services">Services</h6>
        <ul class="footer-links">
          <li><a href="services.html" data-i18n="service_cardiology_title">Cardiology</a></li>
          <li><a href="services.html" data-i18n="service_general_medicine_title">General Medicine</a></li>
          <li><a href="services.html" data-i18n="service_pediatrics_title">Pediatrics</a></li>
          <li><a href="services.html" data-i18n="service_orthopedics_title">Orthopedics</a></li>
          <li><a href="services.html" data-i18n="service_neurology_title">Neurology</a></li>
        </ul>
      </div>
      <div class="col-lg-4">
        <h6 class="footer-heading" data-i18n="footer_newsletter">Newsletter</h6>
        <p style="font-size:0.85rem;margin-bottom:1rem;" data-i18n="footer_newsletter_desc">Get health tips and clinic updates delivered to your inbox.</p>
        <div class="input-group mb-3" style="border-radius:8px;overflow:hidden;">
          <input type="email" class="form-control" data-i18n="footer_newsletter_placeholder" placeholder="Your email" style="border:none;font-size:0.85rem;">
          <button class="btn" data-i18n="common_subscribe" style="background:var(--blue-500);color:white;font-size:0.85rem;padding:0 1rem;">Subscribe</button>
        </div>
        <p style="font-size:0.78rem;opacity:0.5;" data-i18n="footer_newsletter_note">No spam. Unsubscribe anytime.</p>
      </div>
    </div>
    <hr class="footer-divider">
    <div class="footer-bottom">
      <p data-i18n="footer_copyright">© 2025 Dr. John Smith Medical Clinic. All rights reserved.</p>
      <div class="d-flex gap-3" style="font-size:0.82rem;">
        <a href="#" style="color:rgba(255,255,255,0.5)" data-i18n="footer_privacy">Privacy Policy</a>
        <a href="#" style="color:rgba(255,255,255,0.5)" data-i18n="footer_terms">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>`;

document.addEventListener("DOMContentLoaded", () => {
  const navPlaceholder = document.getElementById("nav-placeholder");
  if (navPlaceholder) navPlaceholder.outerHTML = NAVBAR_HTML;

  const footPlaceholder = document.getElementById("footer-placeholder");
  if (footPlaceholder) footPlaceholder.outerHTML = FOOTER_HTML;

  Auth.updateUI();
  setActiveNav();
  if (window.bindLanguageSwitcher) window.bindLanguageSwitcher();

  const savedLang = localStorage.getItem("lang") || "en";
  const switcher = document.getElementById("languageSwitcher");
  if (switcher) switcher.value = savedLang;
  if (window.updateLanguage) window.updateLanguage(savedLang);
});
