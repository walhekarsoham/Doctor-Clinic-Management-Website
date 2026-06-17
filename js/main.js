/* ===================================================
   DR. JOHN SMITH MEDICAL CLINIC WEBSITE
   main.js - Core JavaScript + i18n
   =================================================== */

window.addEventListener("load", () => {
  setTimeout(() => {
    const ls = document.getElementById("loading-screen");
    if (ls) ls.classList.add("hidden");
  }, 1800);
});

const scrollBar = document.getElementById("scroll-progress");
window.addEventListener("scroll", () => {
  if (!scrollBar) return;
  const h = document.documentElement;
  const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  scrollBar.style.width = pct + "%";
});

const nav = document.getElementById("mainNav");
window.addEventListener("scroll", () => {
  if (!nav) return;
  nav.classList.toggle("scrolled", window.scrollY > 40);
});

function setActiveNav() {
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link[data-page]").forEach((link) => {
    link.classList.toggle("active", link.dataset.page === page);
  });
}
setActiveNav();

const translations = { en: {}, mr: {} };

Object.assign(translations.en, {
  brand_name: "Dr. John Smith",
  brand_clinic: "Medical Clinic",
  nav_home: "Home",
  nav_about: "About",
  nav_services: "Services",
  nav_schedule: "Schedule",
  nav_blog: "Blog",
  nav_contact: "Contact",
  nav_login: "🔑 Login",
  nav_dashboard: "📊 Dashboard",
  nav_logout: "🚪 Logout",
  nav_cta: "Book Appointment",
  footer_desc: "Providing compassionate, evidence-based healthcare to our community since 2004. Your health is our highest calling.",
  footer_quick_links: "Quick Links",
  footer_book_appointment: "Book Appointment",
  footer_newsletter: "Newsletter",
  footer_newsletter_desc: "Get health tips and clinic updates delivered to your inbox.",
  footer_newsletter_placeholder: "Your email",
  footer_newsletter_note: "No spam. Unsubscribe anytime.",
  footer_copyright: "© 2025 Dr. John Smith Medical Clinic. All rights reserved. Soham Walhekar",
  footer_privacy: "Privacy Policy",
  footer_terms: "Terms of Service",
  common_subscribe: "Subscribe",
  common_subscribe_arrow: "Subscribe →",
  common_book_now: "Book Now",
  common_patients_treated: "Patients Treated",
  common_years_experience: "Years Experience",
  common_specializations: "Specializations",
  common_publications: "Publications",
  hero_title: "Your <em>Health</em>,<br>Our Priority",
  hero_sub: "Experience world-class medical care with Dr. John Smith. Board-certified specialist with 20+ years of dedicated patient care.",
  hero_cta: "Make an Appointment",
  index_hero_badge: "Now accepting new patients",
  index_hero_learn_more: "Learn More →",
  index_stat_patients: "Satisfied Patients",
  index_calendar_month: "📅 March 2025",
  cal_sun: "S",
  cal_mon: "M",
  cal_tue: "T",
  cal_wed: "W",
  cal_thu: "T",
  cal_fri: "F",
  cal_sat: "S",
  index_specialty_dentistry: "Dentistry",
  index_specialty_pulmonology: "Pulmonology",
  index_about_badge: "Years of Excellence",
  index_about_label: "About the Doctor",
  index_about_title: "Dedicated to Your Health & Well-being",
  index_about_p1: "Dr. John Smith is a board-certified physician specializing in internal medicine and cardiology. He received his medical degree from Harvard Medical School and completed his residency at Johns Hopkins Hospital.",
  index_about_p2: "With a patient-first philosophy, Dr. Smith combines the latest medical advancements with compassionate, personalized care for every patient.",
  index_about_tag_internal: "Internal Medicine",
  index_about_tag_harvard: "Harvard Medical School",
  index_about_tag_board: "Board Certified",
  index_about_tag_experience: "20+ Years Experience",
  index_about_read_bio: "Read Full Bio →",
  index_services_title: "Comprehensive Medical Care",
  index_services_label: "Our Services",
  index_services_subtitle: "We offer a wide range of medical services tailored to keep you and your family healthy.",
  index_view_all_services: "View All Services →",
  index_testimonials_label: "Testimonials",
  index_testimonials_title: "What Our Patients Say",
  index_testimonial_1_text: "\"Dr. Smith's care completely transformed my health. His attention to detail and genuine concern for my well-being is unmatched. I finally feel like I have a doctor who truly listens.\"",
  index_testimonial_1_name: "Sarah Johnson",
  index_testimonial_1_role: "Patient since 2019",
  index_testimonial_2_text: "\"After seeing three other doctors, Dr. Smith was the one who finally diagnosed my condition correctly. The clinic staff is wonderful and the wait times are minimal.\"",
  index_testimonial_2_name: "Michael Rodriguez",
  index_testimonial_2_role: "Patient since 2021",
  index_testimonial_3_text: "\"The online appointment booking is seamless. Dr. Smith takes time to explain everything clearly and I never feel rushed. This clinic has set the gold standard for patient care.\"",
  index_testimonial_3_name: "Anita Patel",
  index_testimonial_3_role: "Patient since 2020",
  index_faq_label: "FAQ",
  index_faq_title: "Frequently Asked Questions",
  index_faq_q1: "Do you accept walk-in patients?",
  index_faq_a1: "Yes, we accept walk-in patients during regular clinic hours. However, we strongly recommend booking an appointment online to minimize your wait time and ensure Dr. Smith has adequate time to address all your concerns.",
  index_faq_q2: "What insurance plans do you accept?",
  index_faq_a2: "We accept most major insurance plans including Blue Cross Blue Shield, Aetna, UnitedHealth, Cigna, and Medicare. Please contact our office to verify your specific coverage before your appointment.",
  index_faq_q3: "How do I book an appointment?",
  index_faq_a3: "You can book an appointment online through our Schedule page, call our office at (555) 123-4567, or visit us in person. Online booking is available 24/7 and you'll receive an instant confirmation email.",
  index_faq_q4: "What should I bring to my first visit?",
  index_faq_a4: "Please bring a valid photo ID, your insurance card, a list of current medications, any previous medical records relevant to your visit, and arrive 15 minutes early to complete the new patient registration forms.",
  index_faq_q5: "Are telehealth appointments available?",
  index_faq_a5: "Yes! We offer telehealth appointments for follow-up consultations, medication reviews, and non-emergency concerns. Telehealth sessions are available Monday through Friday, 9 AM to 5 PM.",
  index_cta_title: "Ready to Take Charge of Your Health?",
  index_cta_subtitle: "Book your appointment today and take the first step toward better health.",
  index_cta_schedule: "Schedule Now →",
  index_cta_call: "Call Us"
});

Object.assign(translations.mr, {
  brand_name: "डॉ. जॉन स्मिथ",
  brand_clinic: "मेडिकल क्लिनिक",
  nav_home: "मुख्यपृष्ठ",
  nav_about: "आमच्याविषयी",
  nav_services: "सेवा",
  nav_schedule: "वेळापत्रक",
  nav_blog: "ब्लॉग",
  nav_contact: "संपर्क",
  nav_login: "🔑 लॉगिन",
  nav_dashboard: "📊 डॅशबोर्ड",
  nav_logout: "🚪 लॉगआउट",
  nav_cta: "अपॉइंटमेंट बुक करा",
  footer_desc: "2004 पासून आम्ही आमच्या समुदायाला सहानुभूतीपूर्ण आणि पुराव्यावर आधारित आरोग्यसेवा देत आहोत. तुमचे आरोग्य हेच आमचे सर्वोच्च ध्येय आहे.",
  footer_quick_links: "द्रुत दुवे",
  footer_book_appointment: "अपॉइंटमेंट बुक करा",
  footer_newsletter: "न्यूजलेटर",
  footer_newsletter_desc: "आरोग्य टिप्स आणि क्लिनिक अपडेट्स थेट तुमच्या इनबॉक्समध्ये मिळवा.",
  footer_newsletter_placeholder: "तुमचा ईमेल",
  footer_newsletter_note: "स्पॅम नाही. कधीही सदस्यता रद्द करा.",
  footer_copyright: "© 2025 डॉ. जॉन स्मिथ मेडिकल क्लिनिक. सर्व हक्क राखीव.",
  footer_privacy: "गोपनीयता धोरण",
  footer_terms: "सेवेच्या अटी",
  common_subscribe: "सदस्यता घ्या",
  common_subscribe_arrow: "सदस्यता घ्या →",
  common_book_now: "आता बुक करा",
  common_patients_treated: "उपचार केलेले रुग्ण",
  common_years_experience: "वर्षांचा अनुभव",
  common_specializations: "विशेषता",
  common_publications: "प्रकाशने",
  hero_title: "तुमचे <em>आरोग्य</em>,<br>आमचे प्राधान्य",
  hero_sub: "डॉ. जॉन स्मिथ यांच्यासोबत जागतिक दर्जाची वैद्यकीय सेवा अनुभव करा. 20+ वर्षांचा समर्पित अनुभव असलेले बोर्ड-प्रमाणित तज्ज्ञ.",
  hero_cta: "अपॉइंटमेंट बुक करा",
  index_hero_badge: "आम्ही नवीन रुग्ण स्वीकारत आहोत",
  index_hero_learn_more: "अधिक जाणून घ्या →",
  index_stat_patients: "समाधानी रुग्ण",
  index_calendar_month: "📅 मार्च 2025",
  cal_sun: "र",
  cal_mon: "सो",
  cal_tue: "मं",
  cal_wed: "बु",
  cal_thu: "गु",
  cal_fri: "शु",
  cal_sat: "श",
  index_specialty_dentistry: "दंतचिकित्सा",
  index_specialty_pulmonology: "फुफ्फुसरोग विभाग",
  index_about_badge: "उत्कृष्टतेची वर्षे",
  index_about_label: "डॉक्टरांविषयी",
  index_about_title: "तुमच्या आरोग्य आणि कल्याणासाठी समर्पित",
  index_about_p1: "डॉ. जॉन स्मिथ हे अंतर्गत औषधशास्त्र आणि हृदयरोगतज्ज्ञतेत विशेष प्रावीण्य असलेले बोर्ड-प्रमाणित डॉक्टर आहेत. त्यांनी हार्वर्ड मेडिकल स्कूलमधून वैद्यकीय पदवी घेतली आणि जॉन्स हॉपकिन्स हॉस्पिटलमध्ये रेसिडेन्सी पूर्ण केली.",
  index_about_p2: "रुग्ण-केंद्रित दृष्टिकोनासह, डॉ. स्मिथ प्रत्येक रुग्णासाठी आधुनिक वैद्यकीय प्रगती आणि वैयक्तिक, सहानुभूतीपूर्ण सेवा यांचा संगम घडवतात.",
  index_about_tag_internal: "अंतर्गत औषधशास्त्र",
  index_about_tag_harvard: "हार्वर्ड मेडिकल स्कूल",
  index_about_tag_board: "बोर्ड-प्रमाणित",
  index_about_tag_experience: "20+ वर्षांचा अनुभव",
  index_about_read_bio: "पूर्ण माहिती वाचा →",
  index_services_title: "सर्वसमावेशक वैद्यकीय सेवा",
  index_services_label: "आमच्या सेवा",
  index_services_subtitle: "तुम्ही आणि तुमचे कुटुंब निरोगी राहावे यासाठी आम्ही विविध वैद्यकीय सेवा देतो.",
  index_view_all_services: "सर्व सेवा पहा →",
  index_testimonials_label: "अनुभव",
  index_testimonials_title: "आमचे रुग्ण काय म्हणतात",
  index_testimonial_1_text: "\"डॉ. स्मिथ यांच्या सेवेमुळे माझ्या आरोग्यात मोठा बदल झाला. त्यांचे बारकाईने लक्ष आणि काळजी अतुलनीय आहे. मला अखेर असा डॉक्टर मिळाला जो खरोखर ऐकतो.\"",
  index_testimonial_1_name: "सारा जॉन्सन",
  index_testimonial_1_role: "2019 पासून रुग्ण",
  index_testimonial_2_text: "\"तीन डॉक्टरांना भेटल्यानंतर माझा आजार योग्य प्रकारे ओळखणारे डॉ. स्मिथच ठरले. क्लिनिकमधील कर्मचारी उत्कृष्ट आहेत आणि प्रतीक्षा वेळ खूप कमी आहे.\"",
  index_testimonial_2_name: "मायकल रॉड्रिग्झ",
  index_testimonial_2_role: "2021 पासून रुग्ण",
  index_testimonial_3_text: "\"ऑनलाइन अपॉइंटमेंट बुकिंग अतिशय सोपे आहे. डॉ. स्मिथ प्रत्येक गोष्ट शांतपणे समजावतात आणि मला कधीही घाई वाटत नाही. या क्लिनिकने रुग्णसेवेचा उच्च दर्जा निर्माण केला आहे.\"",
  index_testimonial_3_name: "अनीता पटेल",
  index_testimonial_3_role: "2020 पासून रुग्ण",
  index_faq_label: "सामान्य प्रश्न",
  index_faq_title: "नेहमी विचारले जाणारे प्रश्न",
  index_faq_q1: "तुम्ही वॉक-इन रुग्ण स्वीकारता का?",
  index_faq_a1: "होय, नियमित क्लिनिक वेळेत आम्ही वॉक-इन रुग्ण स्वीकारतो. मात्र प्रतीक्षा कमी ठेवण्यासाठी आणि डॉ. स्मिथ यांना तुमच्या सर्व प्रश्नांसाठी पुरेसा वेळ मिळावा म्हणून ऑनलाइन अपॉइंटमेंट घेण्याचा सल्ला देतो.",
  index_faq_q2: "तुम्ही कोणती विमा योजना स्वीकारता?",
  index_faq_a2: "आम्ही Blue Cross Blue Shield, Aetna, UnitedHealth, Cigna आणि Medicare यांसह बहुतांश प्रमुख विमा योजना स्वीकारतो. कृपया तुमच्या भेटीपूर्वी विशिष्ट कव्हरेज तपासण्यासाठी आमच्या कार्यालयाशी संपर्क साधा.",
  index_faq_q3: "मी अपॉइंटमेंट कशी बुक करू?",
  index_faq_a3: "तुम्ही आमच्या Schedule पानावरून ऑनलाइन अपॉइंटमेंट बुक करू शकता, (555) 123-4567 वर कॉल करू शकता किंवा प्रत्यक्ष भेट देऊ शकता. ऑनलाइन बुकिंग 24/7 उपलब्ध आहे आणि तुम्हाला त्वरित पुष्टीकरण ईमेल मिळेल.",
  index_faq_q4: "पहिल्या भेटीसाठी मला काय आणावे लागेल?",
  index_faq_a4: "कृपया वैध फोटो आयडी, विमा कार्ड, सध्या घेत असलेल्या औषधांची यादी, संबंधित जुनी वैद्यकीय नोंदी आणि नवीन रुग्ण नोंदणी फॉर्मसाठी 15 मिनिटे आधी या.",
  index_faq_q5: "टेलिहेल्थ अपॉइंटमेंट उपलब्ध आहेत का?",
  index_faq_a5: "होय! फॉलो-अप सल्लामसलत, औषध पुनरावलोकन आणि आपत्कालीन नसलेल्या तक्रारींसाठी आम्ही टेलिहेल्थ अपॉइंटमेंट देतो. या सेवा सोमवार ते शुक्रवार सकाळी 9 ते संध्याकाळी 5 पर्यंत उपलब्ध आहेत.",
  index_cta_title: "तुमच्या आरोग्याची जबाबदारी घ्यायला तयार आहात?",
  index_cta_subtitle: "आजच अपॉइंटमेंट बुक करा आणि उत्तम आरोग्याकडे पहिले पाऊल टाका.",
  index_cta_schedule: "आता वेळ ठरवा →",
  index_cta_call: "आम्हाला कॉल करा"
});

Object.assign(translations.en, {
  about_page_title: "About Dr. John Smith",
  about_page_sub: "Board-Certified Physician · 20+ Years of Excellence",
  about_badge_degree: "MD",
  about_badge_text: "Harvard Medical School",
  about_meet_label: "Meet the Doctor",
  about_doctor_name: "Dr. John Smith, MD, FACC",
  about_intro_p1: "Dr. John Smith is a distinguished board-certified physician specializing in Internal Medicine and Cardiology. With over two decades of clinical experience, he has dedicated his career to providing exceptional, evidence-based healthcare to thousands of patients.",
  about_intro_p2: "He completed his undergraduate studies at Yale University before earning his medical degree from Harvard Medical School with highest honors. His residency and fellowship training at Johns Hopkins Hospital gave him specialized expertise in complex cardiac conditions and preventive medicine.",
  about_tag_harvard: "🎓 Harvard Medical School",
  about_tag_hopkins: "🏥 Johns Hopkins Residency",
  about_tag_facc: "🫀 Cardiology Fellow (FACC)",
  about_tag_research: "🔬 Research Published",
  about_tag_award: "🏆 Top Doctor Award 2023",
  about_book_appointment: "Book an Appointment →",
  about_credentials_label: "Credentials",
  about_education_title: "Education & Training",
  about_education_year_1: "2000 - 2004",
  about_education_title_1: "Medical Degree (MD)",
  about_education_desc_1: "Harvard Medical School, Boston, MA. Graduated with Distinction.",
  about_education_year_2: "2004 - 2007",
  about_education_title_2: "Internal Medicine Residency",
  about_education_desc_2: "Johns Hopkins Hospital, Baltimore, MD. Chief Resident, final year.",
  about_education_year_3: "2007 - 2009",
  about_education_title_3: "Cardiology Fellowship",
  about_education_desc_3: "Mayo Clinic, Rochester, MN. FACC designation awarded in 2009.",
  about_education_year_4: "2009 - Present",
  about_education_title_4: "Private Practice",
  about_education_desc_4: "Founder & Chief of Medicine, Dr. John Smith Medical Clinic.",
  about_recognition_label: "Recognition",
  about_awards_title: "Awards & Achievements",
  about_awards_intro: "Dr. Smith's commitment to excellence has been recognized by leading medical organizations and patient advocacy groups across the nation.",
  about_award_title_1: "Top Doctor Award 2023",
  about_award_desc_1: "U.S. News & World Report - Cardiology",
  about_award_title_2: "Patient Choice Award 2022",
  about_award_desc_2: "Vitals.com - 5 consecutive years",
  about_award_title_3: "Research Excellence Award",
  about_award_desc_3: "American College of Cardiology, 2021",
  about_award_title_4: "47 Peer-Reviewed Publications",
  about_award_desc_4: "NEJM, JAMA, The Lancet, and more",
  about_philosophy_label: "Philosophy",
  about_philosophy_title: "Our Care Philosophy",
  about_philosophy_quote: "\"Medicine is not merely the treatment of disease - it is the restoration of hope, dignity, and quality of life.\"",
  about_philosophy_p1: "At our clinic, we believe in treating the whole person, not just the symptoms. Every patient receives a thorough evaluation and a personalized care plan developed collaboratively with their input and values in mind.",
  about_philosophy_p2: "We stay at the forefront of medical innovation while never losing sight of the fundamentals: listening carefully, communicating clearly, and caring deeply.",
  about_schedule_consultation: "Schedule a Consultation →",
  about_testimonials_title: "Patients Share Their Stories",
  about_testimonial_1_text: "\"Dr. Smith's thorough approach revealed a heart condition that could have been serious. I am genuinely grateful for his thoroughness and expertise.\"",
  about_testimonial_1_name: "David Kim",
  about_testimonial_1_role: "Cardiology Patient",
  about_testimonial_2_text: "\"The level of personal attention I receive every visit is extraordinary. Dr. Smith remembers details from our previous conversations. He truly cares.\"",
  about_testimonial_2_name: "Linda Martinez",
  about_testimonial_2_role: "Long-term Patient",
  about_testimonial_3_text: "\"My whole family sees Dr. Smith - from my 80-year-old mother to my teenage son. The breadth of his expertise and warmth is remarkable.\"",
  about_testimonial_3_name: "Patricia Wong",
  about_testimonial_3_role: "Family Patient",
  service_cardiology_title: "Cardiology",
  service_cardiology_desc: "Comprehensive heart care including ECG, echocardiography, and cardiac stress testing by certified cardiologists.",
  service_neurology_title: "Neurology",
  service_neurology_desc: "Advanced neurological evaluations, EEG, and treatment for headaches, epilepsy, and neurological disorders.",
  service_orthopedics_title: "Orthopedics",
  service_orthopedics_desc: "Expert care for bone, joint, and muscle conditions. Minimally invasive surgeries and physical therapy.",
  service_pediatrics_title: "Pediatrics",
  service_pediatrics_desc: "Specialized healthcare for infants, children, and adolescents with a child-friendly environment.",
  service_ophthalmology_title: "Ophthalmology",
  service_ophthalmology_desc: "Complete eye care from routine exams to complex surgical procedures using advanced technology.",
  service_general_medicine_title: "General Medicine",
  service_general_medicine_desc: "Preventive care, annual physicals, and management of chronic conditions for all age groups."
});

Object.assign(translations.mr, {
  about_page_title: "डॉ. जॉन स्मिथ यांच्याविषयी",
  about_page_sub: "बोर्ड-प्रमाणित डॉक्टर · 20+ वर्षांची उत्कृष्ट सेवा",
  about_badge_degree: "MD",
  about_badge_text: "हार्वर्ड मेडिकल स्कूल",
  about_meet_label: "डॉक्टरांना भेटा",
  about_doctor_name: "डॉ. जॉन स्मिथ, MD, FACC",
  about_intro_p1: "डॉ. जॉन स्मिथ हे अंतर्गत औषधशास्त्र आणि हृदयरोगतज्ज्ञतेत विशेष प्रावीण्य असलेले प्रतिष्ठित बोर्ड-प्रमाणित डॉक्टर आहेत. दोन दशकांहून अधिक क्लिनिकल अनुभवासह त्यांनी हजारो रुग्णांना उत्कृष्ट, पुराव्यावर आधारित आरोग्यसेवा दिली आहे.",
  about_intro_p2: "येल विद्यापीठातील पदवी शिक्षणानंतर त्यांनी हार्वर्ड मेडिकल स्कूलमधून उच्च सन्मानाने वैद्यकीय पदवी घेतली. जॉन्स हॉपकिन्स हॉस्पिटलमधील रेसिडेन्सी आणि फेलोशिपमुळे त्यांना गुंतागुंतीच्या हृदयविकार आणि प्रतिबंधात्मक औषधशास्त्रात विशेष कौशल्य मिळाले.",
  about_tag_harvard: "🎓 हार्वर्ड मेडिकल स्कूल",
  about_tag_hopkins: "🏥 जॉन्स हॉपकिन्स रेसिडेन्सी",
  about_tag_facc: "🫀 कार्डिओलॉजी फेलो (FACC)",
  about_tag_research: "🔬 संशोधन प्रकाशित",
  about_tag_award: "🏆 टॉप डॉक्टर पुरस्कार 2023",
  about_book_appointment: "अपॉइंटमेंट बुक करा →",
  about_credentials_label: "पात्रता",
  about_education_title: "शिक्षण आणि प्रशिक्षण",
  about_education_year_1: "2000 - 2004",
  about_education_title_1: "वैद्यकीय पदवी (MD)",
  about_education_desc_1: "हार्वर्ड मेडिकल स्कूल, बोस्टन, MA. विशेष प्राविण्यासह पदवी संपादन.",
  about_education_year_2: "2004 - 2007",
  about_education_title_2: "अंतर्गत औषधशास्त्र रेसिडेन्सी",
  about_education_desc_2: "जॉन्स हॉपकिन्स हॉस्पिटल, बाल्टिमोर, MD. अंतिम वर्षी मुख्य रेसिडेंट.",
  about_education_year_3: "2007 - 2009",
  about_education_title_3: "कार्डिओलॉजी फेलोशिप",
  about_education_desc_3: "मेयो क्लिनिक, रोचेस्टर, MN. 2009 मध्ये FACC मान्यता मिळाली.",
  about_education_year_4: "2009 - आजपर्यंत",
  about_education_title_4: "खाजगी प्रॅक्टिस",
  about_education_desc_4: "संस्थापक आणि मुख्य वैद्यकीय प्रमुख, डॉ. जॉन स्मिथ मेडिकल क्लिनिक.",
  about_recognition_label: "सन्मान",
  about_awards_title: "पुरस्कार आणि उपलब्धी",
  about_awards_intro: "डॉ. स्मिथ यांच्या उत्कृष्टतेच्या बांधिलकीला देशभरातील अग्रगण्य वैद्यकीय संस्था आणि रुग्ण संघटनांनी मान्यता दिली आहे.",
  about_award_title_1: "टॉप डॉक्टर पुरस्कार 2023",
  about_award_desc_1: "U.S. News & World Report - कार्डिओलॉजी",
  about_award_title_2: "पेशंट चॉइस पुरस्कार 2022",
  about_award_desc_2: "Vitals.com - सलग 5 वर्षे",
  about_award_title_3: "संशोधन उत्कृष्टता पुरस्कार",
  about_award_desc_3: "अमेरिकन कॉलेज ऑफ कार्डिओलॉजी, 2021",
  about_award_title_4: "47 समकक्ष-पुनरावलोकित प्रकाशने",
  about_award_desc_4: "NEJM, JAMA, The Lancet आणि इतर",
  about_philosophy_label: "तत्त्वज्ञान",
  about_philosophy_title: "आमचे उपचार तत्त्वज्ञान",
  about_philosophy_quote: "\"औषधोपचार म्हणजे केवळ रोगाचे उपचार नाहीत - ते आशा, सन्मान आणि जीवनमान पुन्हा उभे करण्याचे कार्य आहे.\"",
  about_philosophy_p1: "आमच्या क्लिनिकमध्ये आम्ही फक्त लक्षणांवर नाही तर संपूर्ण व्यक्तीवर उपचार करण्यावर विश्वास ठेवतो. प्रत्येक रुग्णाला सखोल मूल्यमापन आणि त्यांच्या मतांचा आदर करणारी वैयक्तिक काळजी योजना दिली जाते.",
  about_philosophy_p2: "आम्ही वैद्यकीय नवोन्मेषाच्या अग्रभागी राहतो, पण मूलभूत गोष्टी विसरत नाही: काळजीपूर्वक ऐकणे, स्पष्टपणे संवाद साधणे आणि मनापासून सेवा करणे.",
  about_schedule_consultation: "सल्लामसलत ठरवा →",
  about_testimonials_title: "रुग्ण त्यांच्या कथा सांगतात",
  about_testimonial_1_text: "\"डॉ. स्मिथ यांच्या सखोल दृष्टिकोनामुळे माझ्या हृदयाशी संबंधित गंभीर समस्या वेळेत लक्षात आली. त्यांच्या कौशल्याबद्दल मी मनापासून आभारी आहे.\"",
  about_testimonial_1_name: "डेव्हिड किम",
  about_testimonial_1_role: "हृदयरोग विभागातील रुग्ण",
  about_testimonial_2_text: "\"प्रत्येक भेटीत मिळणारे वैयक्तिक लक्ष विलक्षण आहे. डॉ. स्मिथ आपल्या आधीच्या संभाषणांमधील तपशील लक्षात ठेवतात. त्यांना खरोखर काळजी असते.\"",
  about_testimonial_2_name: "लिंडा मार्टिनेझ",
  about_testimonial_2_role: "दीर्घकालीन रुग्ण",
  about_testimonial_3_text: "\"माझ्या 80 वर्षांच्या आईपासून ते किशोरवयीन मुलापर्यंत संपूर्ण कुटुंब डॉ. स्मिथ यांच्याकडे येते. त्यांच्या कौशल्याचा व्याप्ती आणि आपुलकी खरोखर उल्लेखनीय आहे.\"",
  about_testimonial_3_name: "पॅट्रिशिया वाँग",
  about_testimonial_3_role: "कौटुंबिक रुग्ण",
  service_cardiology_title: "कार्डिओलॉजी",
  service_cardiology_desc: "प्रमाणित हृदयरोगतज्ज्ञांकडून ECG, इकोकार्डिओग्राफी आणि कार्डिअक स्ट्रेस टेस्टसह सर्वंकष हृदयसेवा.",
  service_neurology_title: "न्यूरोलॉजी",
  service_neurology_desc: "EEG आणि डोकेदुखी, अपस्मार तसेच न्यूरोलॉजिकल विकारांसाठी प्रगत मूल्यमापन आणि उपचार.",
  service_orthopedics_title: "ऑर्थोपेडिक्स",
  service_orthopedics_desc: "हाडे, सांधे आणि स्नायूंसाठी तज्ज्ञ उपचार. कमी आक्रमक शस्त्रक्रिया आणि फिजिओथेरपी उपलब्ध.",
  service_pediatrics_title: "बालरोग",
  service_pediatrics_desc: "बालस्नेही वातावरणात बाळ, मुले आणि किशोरवयीन मुलांसाठी विशेष आरोग्यसेवा.",
  service_ophthalmology_title: "नेत्ररोग",
  service_ophthalmology_desc: "नियमित तपासणीपासून प्रगत शस्त्रक्रियापर्यंत संपूर्ण डोळ्यांची सेवा.",
  service_general_medicine_title: "जनरल मेडिसिन",
  service_general_medicine_desc: "सर्व वयोगटांसाठी प्रतिबंधात्मक सेवा, वार्षिक तपासणी आणि दीर्घकालीन आजारांचे व्यवस्थापन."
});

Object.assign(translations.en, {
  services_page_title: "Our Medical Services",
  services_page_sub: "Comprehensive care across 15+ specializations under one roof",
  services_filter_all: "All Services",
  services_filter_heart: "Heart & Vascular",
  services_filter_neuro: "Neurology",
  services_filter_primary: "Primary Care",
  services_filter_surgical: "Surgical",
  services_cardiology_desc_long: "Comprehensive heart care including ECG, echocardiography, Holter monitoring, and cardiac stress testing performed by ACC-certified cardiologists.",
  services_cardiology_item_1: "Electrocardiogram (ECG/EKG)",
  services_cardiology_item_2: "Echocardiography",
  services_cardiology_item_3: "Cardiac Stress Testing",
  services_cardiology_item_4: "Heart Failure Management",
  service_vascular_title: "Vascular Medicine",
  services_vascular_desc: "Diagnosis and treatment of disorders affecting the arterial, venous, and lymphatic systems including peripheral artery disease and varicose veins.",
  services_vascular_item_1: "Carotid Artery Duplex",
  services_vascular_item_2: "Peripheral Vascular Studies",
  services_vascular_item_3: "Venous Insufficiency",
  services_vascular_item_4: "Varicose Vein Treatment",
  services_neurology_desc_long: "Advanced neurological evaluations and treatment for headaches, epilepsy, stroke, movement disorders, and neurodegenerative diseases.",
  services_neurology_item_1: "EEG & Brain Mapping",
  services_neurology_item_2: "Migraine Management",
  services_neurology_item_3: "Epilepsy Treatment",
  services_neurology_item_4: "Memory & Cognitive Testing",
  services_general_medicine_desc_long: "Preventive care, annual physicals, and comprehensive management of chronic conditions for patients of all ages.",
  services_general_medicine_item_1: "Annual Physical Exams",
  services_general_medicine_item_2: "Diabetes Management",
  services_general_medicine_item_3: "Hypertension Control",
  services_general_medicine_item_4: "Preventive Screenings",
  services_pediatrics_desc_long: "Specialized healthcare for infants, children, and adolescents in a child-friendly, welcoming environment.",
  services_pediatrics_item_1: "Well-Child Visits",
  services_pediatrics_item_2: "Immunizations & Vaccines",
  services_pediatrics_item_3: "Childhood Illness Care",
  services_pediatrics_item_4: "Growth & Development",
  services_orthopedics_desc_long: "Expert care for bone, joint, and musculoskeletal conditions including minimally invasive surgical procedures.",
  services_orthopedics_item_1: "Joint Replacement",
  services_orthopedics_item_2: "Sports Medicine",
  services_orthopedics_item_3: "Fracture Care",
  services_orthopedics_item_4: "Physical Therapy",
  services_ophthalmology_desc_long: "Complete eye care from routine vision exams to advanced surgical procedures using state-of-the-art technology.",
  services_ophthalmology_item_1: "Comprehensive Eye Exams",
  services_ophthalmology_item_2: "Cataract Surgery",
  services_ophthalmology_item_3: "Glaucoma Management",
  services_ophthalmology_item_4: "LASIK Consultation",
  service_lab_title: "Laboratory & Diagnostics",
  services_lab_desc: "In-house laboratory services with rapid results for blood work, urinalysis, cultures, and specialized diagnostic panels.",
  services_lab_item_1: "Complete Blood Count (CBC)",
  services_lab_item_2: "Metabolic Panels",
  services_lab_item_3: "Thyroid Function Tests",
  services_lab_item_4: "COVID-19 Testing",
  service_mental_health_title: "Mental Health",
  services_mental_health_desc: "Holistic mental health support including counseling, psychiatric evaluations, and integrated behavioral health programs.",
  services_mental_health_item_1: "Anxiety & Depression",
  services_mental_health_item_2: "Psychiatric Evaluation",
  services_mental_health_item_3: "Medication Management",
  services_mental_health_item_4: "Telehealth Counseling",
  services_why_us_label: "Why Us",
  services_why_us_title: "Why Patients Choose Our Clinic",
  services_feature_title_1: "Same-Day Appointments",
  services_feature_desc_1: "We prioritize urgent care needs with same-day slots available Monday through Friday.",
  services_feature_title_2: "Telehealth Available",
  services_feature_desc_2: "Consult from the comfort of your home via our secure, HIPAA-compliant video platform.",
  services_feature_title_3: "HIPAA Compliant",
  services_feature_desc_3: "Your medical records and personal data are protected with enterprise-grade security.",
  services_feature_title_4: "Multilingual Staff",
  services_feature_desc_4: "We serve patients in English, Marathi, Spanish, and Mandarin for inclusive healthcare.",
  schedule_page_title: "Book an Appointment",
  schedule_page_sub: "Select your preferred date, time, and service below",
  schedule_new_appointment: "New Appointment",
  schedule_fill_details: "Fill in Your Details",
  form_first_name: "First Name *",
  form_first_name_placeholder: "John",
  form_last_name: "Last Name *",
  form_last_name_placeholder: "Smith",
  form_email_address: "Email Address *",
  form_email_placeholder: "john@example.com",
  form_phone_number: "Phone Number *",
  form_phone_number_optional: "Phone Number",
  form_phone_placeholder: "+1 (555) 123-4567",
  schedule_department_label: "Department / Service *",
  schedule_service_placeholder: "Select a service...",
  schedule_appointment_type_label: "Appointment Type *",
  schedule_type_placeholder: "Select type...",
  schedule_type_new_patient: "New Patient Visit",
  schedule_type_follow_up: "Follow-up Consultation",
  schedule_type_annual_physical: "Annual Physical",
  schedule_type_telehealth: "Telehealth",
  schedule_type_urgent_care: "Urgent Care",
  schedule_preferred_date: "Preferred Date *",
  schedule_select_time_slot: "Select Time Slot *",
  schedule_busy: "Busy",
  schedule_selected: "Selected",
  schedule_additional_notes: "Additional Notes",
  schedule_notes_placeholder: "Please describe your symptoms or reason for visit...",
  schedule_consent_prefix: "I consent to the clinic's",
  schedule_consent_suffix: "and agree to receive appointment reminders via email and SMS.",
  schedule_confirm_appointment: "Confirm Appointment",
  schedule_clinic_hours: "Clinic Hours",
  schedule_hours_weekdays: "Monday - Friday",
  schedule_hours_saturday: "Saturday",
  schedule_hours_sunday: "Sunday",
  schedule_hours_closed: "Closed",
  schedule_urgent_care_title: "🚨 After-Hours Urgent Care",
  schedule_urgent_care_desc: "For medical emergencies, please call 911 or visit the nearest ER. Our on-call physician can be reached at (555) 911-CARE",
  schedule_what_to_bring: "What to Bring",
  schedule_bring_item_1: "Valid photo ID",
  schedule_bring_item_2: "Insurance card",
  schedule_bring_item_3: "List of current medications",
  schedule_bring_item_4: "Previous medical records",
  schedule_bring_item_5: "Insurance referral (if required)",
  schedule_bring_item_6: "Arrive 15 min early (new patients)",
  schedule_need_help: "📞 Need Help?",
  schedule_need_help_desc: "Our team is available to assist you with booking and any questions.",
  schedule_need_help_hours: "Mon-Fri: 8 AM - 6 PM"
});

Object.assign(translations.mr, {
  services_page_title: "आमच्या वैद्यकीय सेवा",
  services_page_sub: "15+ विशेष विभागांसह सर्वसमावेशक सेवा एका छताखाली",
  services_filter_all: "सर्व सेवा",
  services_filter_heart: "हृदय व रक्तवाहिन्या",
  services_filter_neuro: "न्यूरोलॉजी",
  services_filter_primary: "प्राथमिक सेवा",
  services_filter_surgical: "शस्त्रक्रिया",
  services_cardiology_desc_long: "ACC-प्रमाणित हृदयरोगतज्ज्ञांकडून ECG, इकोकार्डिओग्राफी, होल्टर मॉनिटरिंग आणि कार्डिअक स्ट्रेस टेस्टसह सर्वंकष हृदयसेवा.",
  services_cardiology_item_1: "इलेक्ट्रोकार्डिओग्राम (ECG/EKG)",
  services_cardiology_item_2: "इकोकार्डिओग्राफी",
  services_cardiology_item_3: "कार्डिअक स्ट्रेस टेस्ट",
  services_cardiology_item_4: "हार्ट फेल्युअर व्यवस्थापन",
  service_vascular_title: "वॅस्क्युलर मेडिसिन",
  services_vascular_desc: "धमनी, शिरा आणि लसीका प्रणालीवरील आजारांचे निदान आणि उपचार, ज्यात peripheral artery disease आणि varicose veins यांचा समावेश आहे.",
  services_vascular_item_1: "कॅरोटिड आर्टरी डुप्लेक्स",
  services_vascular_item_2: "पेरिफेरल वॅस्क्युलर स्टडीज",
  services_vascular_item_3: "व्हेनस इन्सफिशियन्सी",
  services_vascular_item_4: "व्हेरिकोज वेन उपचार",
  services_neurology_desc_long: "डोकेदुखी, अपस्मार, स्ट्रोक, हालचालीतील विकार आणि न्यूरोडिजेनेरेटिव्ह आजारांसाठी प्रगत न्यूरोलॉजिकल तपासणी आणि उपचार.",
  services_neurology_item_1: "EEG आणि ब्रेन मॅपिंग",
  services_neurology_item_2: "मायग्रेन व्यवस्थापन",
  services_neurology_item_3: "अपस्मार उपचार",
  services_neurology_item_4: "स्मृती आणि संज्ञानात्मक चाचण्या",
  services_general_medicine_desc_long: "सर्व वयोगटातील रुग्णांसाठी प्रतिबंधात्मक सेवा, वार्षिक शारीरिक तपासणी आणि दीर्घकालीन आजारांचे सर्वंकष व्यवस्थापन.",
  services_general_medicine_item_1: "वार्षिक शारीरिक तपासणी",
  services_general_medicine_item_2: "मधुमेह व्यवस्थापन",
  services_general_medicine_item_3: "उच्च रक्तदाब नियंत्रण",
  services_general_medicine_item_4: "प्रतिबंधात्मक तपासण्या",
  services_pediatrics_desc_long: "बालस्नेही आणि स्वागतार्ह वातावरणात बाळ, मुले आणि किशोरवयीन मुलांसाठी विशेष आरोग्यसेवा.",
  services_pediatrics_item_1: "नियमित बालआरोग्य भेटी",
  services_pediatrics_item_2: "लसीकरण आणि व्हॅक्सिन्स",
  services_pediatrics_item_3: "बालरोग उपचार",
  services_pediatrics_item_4: "वाढ आणि विकास तपासणी",
  services_orthopedics_desc_long: "हाडे, सांधे आणि स्नायू-संबंधित विकारांसाठी तज्ज्ञ सेवा, ज्यात कमी आक्रमक शस्त्रक्रिया पद्धतींचा समावेश आहे.",
  services_orthopedics_item_1: "जॉइंट रिप्लेसमेंट",
  services_orthopedics_item_2: "स्पोर्ट्स मेडिसिन",
  services_orthopedics_item_3: "फ्रॅक्चर उपचार",
  services_orthopedics_item_4: "फिजिकल थेरपी",
  services_ophthalmology_desc_long: "आधुनिक तंत्रज्ञानाचा वापर करून नियमित दृष्टी तपासणीपासून प्रगत शस्त्रक्रियापर्यंत संपूर्ण नेत्रसेवा.",
  services_ophthalmology_item_1: "सर्वंकष डोळ्यांची तपासणी",
  services_ophthalmology_item_2: "मोतीबिंदू शस्त्रक्रिया",
  services_ophthalmology_item_3: "ग्लॉकोमा व्यवस्थापन",
  services_ophthalmology_item_4: "LASIK सल्लामसलत",
  service_lab_title: "लॅब आणि डायग्नॉस्टिक्स",
  services_lab_desc: "रक्ततपासणी, मूत्रतपासणी, कल्चर आणि विशेष निदान पॅनेल्ससाठी जलद निकाल देणारी इन-हाउस लॅब सेवा.",
  services_lab_item_1: "पूर्ण रक्तचित्र (CBC)",
  services_lab_item_2: "मेटाबॉलिक पॅनेल्स",
  services_lab_item_3: "थायरॉईड फंक्शन चाचण्या",
  services_lab_item_4: "COVID-19 चाचणी",
  service_mental_health_title: "मानसिक आरोग्य",
  services_mental_health_desc: "समुपदेशन, मानसोपचार मूल्यमापन आणि समन्वित कार्यक्रमांसह सर्वंकष मानसिक आरोग्य सहाय्य.",
  services_mental_health_item_1: "चिंता आणि नैराश्य",
  services_mental_health_item_2: "मानसोपचार मूल्यमापन",
  services_mental_health_item_3: "औषध व्यवस्थापन",
  services_mental_health_item_4: "टेलिहेल्थ समुपदेशन",
  services_why_us_label: "आम्हीच का",
  services_why_us_title: "रुग्ण आमचे क्लिनिक का निवडतात",
  services_feature_title_1: "त्याच दिवशी अपॉइंटमेंट",
  services_feature_desc_1: "सोमवार ते शुक्रवार उपलब्ध त्याच दिवशी स्लॉटसह आम्ही तातडीच्या रुग्णसेवेला प्राधान्य देतो.",
  services_feature_title_2: "टेलिहेल्थ उपलब्ध",
  services_feature_desc_2: "HIPAA-अनुरूप सुरक्षित व्हिडिओ प्लॅटफॉर्मद्वारे घरबसल्या सल्ला घ्या.",
  services_feature_title_3: "HIPAA अनुरूप",
  services_feature_desc_3: "तुमच्या वैद्यकीय नोंदी आणि वैयक्तिक माहितीचे उच्चस्तरीय सुरक्षेद्वारे संरक्षण केले जाते.",
  services_feature_title_4: "बहुभाषिक कर्मचारी",
  services_feature_desc_4: "समावेशक आरोग्यसेवेसाठी आम्ही इंग्रजी, मराठी, स्पॅनिश आणि मँडरिनमध्ये सेवा देतो.",
  schedule_page_title: "अपॉइंटमेंट बुक करा",
  schedule_page_sub: "तुमची पसंतीची तारीख, वेळ आणि सेवा खाली निवडा",
  schedule_new_appointment: "नवीन अपॉइंटमेंट",
  schedule_fill_details: "तुमची माहिती भरा",
  form_first_name: "पहिले नाव *",
  form_first_name_placeholder: "जॉन",
  form_last_name: "आडनाव *",
  form_last_name_placeholder: "स्मिथ",
  form_email_address: "ईमेल पत्ता *",
  form_email_placeholder: "john@example.com",
  form_phone_number: "फोन नंबर *",
  form_phone_number_optional: "फोन नंबर",
  form_phone_placeholder: "+1 (555) 123-4567",
  schedule_department_label: "विभाग / सेवा *",
  schedule_service_placeholder: "सेवा निवडा...",
  schedule_appointment_type_label: "अपॉइंटमेंट प्रकार *",
  schedule_type_placeholder: "प्रकार निवडा...",
  schedule_type_new_patient: "नवीन रुग्ण भेट",
  schedule_type_follow_up: "फॉलो-अप सल्लामसलत",
  schedule_type_annual_physical: "वार्षिक तपासणी",
  schedule_type_telehealth: "टेलिहेल्थ",
  schedule_type_urgent_care: "तातडीची सेवा",
  schedule_preferred_date: "पसंतीची तारीख *",
  schedule_select_time_slot: "वेळ स्लॉट निवडा *",
  schedule_busy: "व्यस्त",
  schedule_selected: "निवडलेले",
  schedule_additional_notes: "अतिरिक्त नोंदी",
  schedule_notes_placeholder: "कृपया तुमची लक्षणे किंवा भेटीचे कारण लिहा...",
  schedule_consent_prefix: "मी क्लिनिकच्या",
  schedule_consent_suffix: "ला संमती देतो/देते आणि ईमेल व SMS द्वारे अपॉइंटमेंट स्मरणपत्रे स्वीकारतो/स्वीकारते.",
  schedule_confirm_appointment: "अपॉइंटमेंट निश्चित करा",
  schedule_clinic_hours: "क्लिनिक वेळा",
  schedule_hours_weekdays: "सोमवार - शुक्रवार",
  schedule_hours_saturday: "शनिवार",
  schedule_hours_sunday: "रविवार",
  schedule_hours_closed: "बंद",
  schedule_urgent_care_title: "🚨 कामकाजानंतरची तातडीची सेवा",
  schedule_urgent_care_desc: "वैद्यकीय आपत्कालीन स्थितीत कृपया 911 वर कॉल करा किंवा जवळच्या ER मध्ये जा. आमचे ऑन-कॉल डॉक्टर (555) 911-CARE वर उपलब्ध आहेत.",
  schedule_what_to_bring: "काय आणावे",
  schedule_bring_item_1: "वैध फोटो आयडी",
  schedule_bring_item_2: "विमा कार्ड",
  schedule_bring_item_3: "सध्याच्या औषधांची यादी",
  schedule_bring_item_4: "मागील वैद्यकीय नोंदी",
  schedule_bring_item_5: "विमा रेफरल (आवश्यक असल्यास)",
  schedule_bring_item_6: "15 मिनिटे आधी या (नवीन रुग्णांसाठी)",
  schedule_need_help: "📞 मदत हवी आहे?",
  schedule_need_help_desc: "बुकिंग आणि इतर प्रश्नांसाठी आमची टीम तुमच्या मदतीसाठी उपलब्ध आहे.",
  schedule_need_help_hours: "सोम-शुक्र: सकाळी 8 ते संध्याकाळी 6"
});

Object.assign(translations.en, {
  blog_page_title: "Health & Wellness Blog",
  blog_page_sub: "Expert insights, medical tips, and health news from Dr. Smith and our team",
  blog_search_placeholder: "Search articles...",
  blog_filter_all: "All",
  blog_category_nutrition: "Nutrition",
  blog_category_general: "General",
  blog_category_general_health: "General Health",
  blog_featured_tag: "CARDIOLOGY · FEATURED",
  blog_featured_title: "Understanding Heart Disease: The Silent Killer You Can Prevent",
  blog_featured_excerpt: "Heart disease remains the leading cause of death globally, yet many of its risk factors are entirely preventable. In this comprehensive guide, Dr. Smith walks you through the warning signs, lifestyle modifications, and medical interventions that can dramatically reduce your risk...",
  blog_featured_meta: "📅 March 15, 2025 · 8 min read",
  blog_read_article: "Read Article →",
  blog_read_short: "Read →",
  blog_post_1_title: "The Heart-Healthy Diet: What to Eat (and Avoid) in 2025",
  blog_post_1_excerpt: "Discover the latest evidence-based nutritional strategies that cardiologists recommend for maintaining optimal cardiovascular health through smart food choices.",
  blog_post_1_meta: "📅 Mar 10, 2025",
  blog_post_2_title: "How Chronic Stress Damages Your Heart - And What to Do About It",
  blog_post_2_excerpt: "The mind-heart connection is stronger than most people realize. Dr. Smith explains the physiological pathways linking psychological stress to cardiac events.",
  blog_post_2_meta: "📅 Mar 5, 2025",
  blog_post_3_title: "Why Your Annual Physical Exam Could Save Your Life",
  blog_post_3_excerpt: "Many serious medical conditions are asymptomatic in early stages. Regular check-ups allow for early detection when treatment is most effective.",
  blog_post_3_meta: "📅 Feb 28, 2025",
  blog_post_4_title: "5 Proven Ways to Lower Your Blood Pressure Naturally",
  blog_post_4_excerpt: "Before reaching for medication, try these evidence-based lifestyle interventions that have been shown to significantly reduce hypertension in clinical studies.",
  blog_post_4_meta: "📅 Feb 20, 2025",
  blog_post_5_title: "Reversing Prediabetes: A Step-by-Step Guide from Dr. Smith",
  blog_post_5_excerpt: "Prediabetes affects 1 in 3 Americans - yet most don't know it. The good news: with the right dietary and lifestyle changes, it is fully reversible.",
  blog_post_5_meta: "📅 Feb 14, 2025",
  blog_post_6_title: "The Science of Sleep: Why 7-9 Hours Is Not Negotiable",
  blog_post_6_excerpt: "Sleep deprivation is linked to heart disease, obesity, depression, and immune dysfunction. Dr. Smith shares the science and practical tips for better rest.",
  blog_post_6_meta: "📅 Feb 7, 2025",
  blog_load_more: "Load More Articles",
  blog_load_more_loading: "Loading...",
  blog_load_more_done: "No more posts",
  blog_newsletter_label: "Stay Informed",
  blog_newsletter_title: "Get Health Tips in Your Inbox",
  blog_newsletter_desc: "Subscribe to Dr. Smith's monthly newsletter for the latest health research, clinic news, and wellness tips - no spam, ever.",
  blog_newsletter_placeholder: "Enter your email",
  blog_newsletter_note: "We respect your privacy. Unsubscribe at any time.",
  contact_page_title: "Get in Touch",
  contact_page_sub: "We're here to help with all your healthcare needs",
  contact_details_label: "Contact Details",
  contact_info_title: "We'd Love to<br>Hear From You",
  contact_address_label: "Clinic Address",
  contact_address_value: "123 Medical Center Drive<br>Suite 400, New York, NY 10001",
  contact_phone_label: "Phone Number",
  contact_email_label: "Email Address",
  contact_hours_label: "Working Hours",
  contact_hours_value: "Mon-Fri: 9 AM - 5 PM<br>Saturday: 10 AM - 2 PM",
  contact_parking_label: "Parking",
  contact_parking_value: "Free parking in Building C lot",
  contact_send_message: "Send a Message",
  contact_help_title: "How Can We Help?",
  contact_phone_placeholder: "(555) 000-0000",
  contact_subject_label: "Subject *",
  contact_subject_placeholder: "Select a topic...",
  contact_subject_1: "Appointment Inquiry",
  contact_subject_2: "Insurance & Billing",
  contact_subject_3: "Medical Records",
  contact_subject_4: "General Question",
  contact_subject_5: "Feedback / Complaint",
  contact_subject_6: "Telehealth Setup",
  contact_subject_7: "Other",
  contact_message_label: "Message *",
  contact_message_placeholder: "Please describe how we can help you...",
  contact_privacy_prefix: "I agree to the",
  contact_privacy_suffix: "and consent to having my data processed to respond to my inquiry.",
  contact_send_button: "Send Message",
  contact_map_address_line_1: "123 Medical Center Drive, Suite 400",
  contact_map_address_line_2: "New York, NY 10001",
  contact_open_maps: "Open in Google Maps →",
  contact_emergency_title: "Medical Emergency?",
  contact_emergency_desc: "Do not contact the clinic. Call 911 immediately or go to your nearest emergency room.",
  contact_call_911: "Call 911 Now",
  toast_logged_out: "You have been logged out.",
  toast_select_time_slot: "Please select a time slot.",
  toast_appointment_success: "Appointment booked successfully! We'll confirm via email.",
  toast_fill_required: "Please fill in all required fields.",
  toast_message_sent: "Message sent! We'll get back to you within 24 hours.",
  toast_fill_required_contact: "Please fill all required fields.",
  toast_all_posts_loaded: "All posts have been loaded."
});

Object.assign(translations.mr, {
  blog_page_title: "आरोग्य आणि वेलनेस ब्लॉग",
  blog_page_sub: "डॉ. स्मिथ आणि आमच्या टीमकडून तज्ज्ञ मार्गदर्शन, वैद्यकीय टिप्स आणि आरोग्यविषयक बातम्या",
  blog_search_placeholder: "लेख शोधा...",
  blog_filter_all: "सर्व",
  blog_category_nutrition: "पोषण",
  blog_category_general: "सामान्य",
  blog_category_general_health: "सामान्य आरोग्य",
  blog_featured_tag: "कार्डिओलॉजी · विशेष लेख",
  blog_featured_title: "हृदयरोग समजून घ्या: टाळता येणारा शांत घातक",
  blog_featured_excerpt: "हृदयरोग हा जगभरातील मृत्यूचे प्रमुख कारण आहे, तरीही त्याचे अनेक जोखीम घटक पूर्णपणे टाळता येतात. या सविस्तर मार्गदर्शिकेत डॉ. स्मिथ चेतावणीची चिन्हे, जीवनशैलीतील बदल आणि वैद्यकीय उपाय सांगतात...",
  blog_featured_meta: "📅 15 मार्च 2025 · 8 मिनिटे वाचा",
  blog_read_article: "लेख वाचा →",
  blog_read_short: "वाचा →",
  blog_post_1_title: "हृदयासाठी उपयुक्त आहार: 2025 मध्ये काय खावे आणि काय टाळावे",
  blog_post_1_excerpt: "हृदयाचे आरोग्य टिकवण्यासाठी तज्ज्ञ सुचवतात त्या पुराव्यावर आधारित आहारनीती जाणून घ्या.",
  blog_post_1_meta: "📅 10 मार्च 2025",
  blog_post_2_title: "दीर्घकालीन ताण तुमच्या हृदयाला कसा इजा पोहोचवतो - आणि काय करावे",
  blog_post_2_excerpt: "मन आणि हृदय यांचा संबंध बहुतेकांना वाटते त्यापेक्षा अधिक मजबूत आहे. डॉ. स्मिथ मानसिक ताण आणि हृदयविकार यातील संबंध स्पष्ट करतात.",
  blog_post_2_meta: "📅 5 मार्च 2025",
  blog_post_3_title: "तुमची वार्षिक शारीरिक तपासणी तुमचे आयुष्य वाचवू शकते",
  blog_post_3_excerpt: "अनेक गंभीर आजार सुरुवातीला लक्षणांशिवाय असतात. नियमित तपासण्यांमुळे वेळेवर निदान आणि प्रभावी उपचार शक्य होतात.",
  blog_post_3_meta: "📅 28 फेब्रुवारी 2025",
  blog_post_4_title: "नैसर्गिक पद्धतीने रक्तदाब कमी करण्याचे 5 सिद्ध मार्ग",
  blog_post_4_excerpt: "औषधांकडे वळण्यापूर्वी, क्लिनिकल अभ्यासांनी प्रभावी ठरवलेल्या या जीवनशैलीतील बदलांचा विचार करा.",
  blog_post_4_meta: "📅 20 फेब्रुवारी 2025",
  blog_post_5_title: "प्रीडायबेटीस उलटवणे: डॉ. स्मिथ यांचे टप्प्याटप्प्याने मार्गदर्शन",
  blog_post_5_excerpt: "प्रीडायबेटीस प्रत्येक 3 पैकी 1 व्यक्तीला होतो, तरी अनेकांना त्याची जाणीव नसते. योग्य आहार आणि जीवनशैलीमुळे तो उलटवता येतो.",
  blog_post_5_meta: "📅 14 फेब्रुवारी 2025",
  blog_post_6_title: "झोपेचे विज्ञान: 7-9 तासांची झोप का आवश्यक आहे",
  blog_post_6_excerpt: "अपुरी झोप हृदयरोग, स्थूलता, नैराश्य आणि रोगप्रतिकारक शक्तीतील कमतरतेशी जोडली जाते. उत्तम झोपेसाठी डॉ. स्मिथ विज्ञान आणि व्यावहारिक टिप्स शेअर करतात.",
  blog_post_6_meta: "📅 7 फेब्रुवारी 2025",
  blog_load_more: "आणखी लेख लोड करा",
  blog_load_more_loading: "लोड होत आहे...",
  blog_load_more_done: "आणखी पोस्ट नाहीत",
  blog_newsletter_label: "माहितीपूर्ण रहा",
  blog_newsletter_title: "आरोग्य टिप्स तुमच्या इनबॉक्समध्ये मिळवा",
  blog_newsletter_desc: "डॉ. स्मिथ यांच्या मासिक न्यूजलेटरसाठी सदस्यता घ्या आणि ताजे आरोग्य संशोधन, क्लिनिक बातम्या आणि वेलनेस टिप्स मिळवा - स्पॅमशिवाय.",
  blog_newsletter_placeholder: "तुमचा ईमेल टाका",
  blog_newsletter_note: "आम्ही तुमच्या गोपनीयतेचा आदर करतो. कधीही सदस्यता रद्द करा.",
  contact_page_title: "संपर्क साधा",
  contact_page_sub: "तुमच्या सर्व आरोग्यविषयक गरजांसाठी आम्ही मदतीसाठी आहोत",
  contact_details_label: "संपर्क तपशील",
  contact_info_title: "आम्हाला तुमच्याकडून<br>ऐकायला आवडेल",
  contact_address_label: "क्लिनिकचा पत्ता",
  contact_address_value: "123 मेडिकल सेंटर ड्राइव्ह<br>सुइट 400, न्यूयॉर्क, NY 10001",
  contact_phone_label: "फोन नंबर",
  contact_email_label: "ईमेल पत्ता",
  contact_hours_label: "कामकाजाच्या वेळा",
  contact_hours_value: "सोम-शुक्र: सकाळी 9 ते संध्याकाळी 5<br>शनिवार: सकाळी 10 ते दुपारी 2",
  contact_parking_label: "पार्किंग",
  contact_parking_value: "बिल्डिंग C पार्किंगमध्ये मोफत पार्किंग",
  contact_send_message: "संदेश पाठवा",
  contact_help_title: "आम्ही कशी मदत करू शकतो?",
  contact_phone_placeholder: "(555) 000-0000",
  contact_subject_label: "विषय *",
  contact_subject_placeholder: "विषय निवडा...",
  contact_subject_1: "अपॉइंटमेंट चौकशी",
  contact_subject_2: "विमा आणि बिलिंग",
  contact_subject_3: "वैद्यकीय नोंदी",
  contact_subject_4: "सामान्य प्रश्न",
  contact_subject_5: "अभिप्राय / तक्रार",
  contact_subject_6: "टेलिहेल्थ सेटअप",
  contact_subject_7: "इतर",
  contact_message_label: "संदेश *",
  contact_message_placeholder: "कृपया आम्ही तुम्हाला कशी मदत करू शकतो ते सांगा...",
  contact_privacy_prefix: "मी",
  contact_privacy_suffix: "ला सहमती देतो/देते आणि माझ्या चौकशीस उत्तर देण्यासाठी माझ्या माहितीस प्रक्रिया करण्यास संमती देतो/देते.",
  contact_send_button: "संदेश पाठवा",
  contact_map_address_line_1: "123 मेडिकल सेंटर ड्राइव्ह, सुइट 400",
  contact_map_address_line_2: "न्यूयॉर्क, NY 10001",
  contact_open_maps: "Google Maps मध्ये उघडा →",
  contact_emergency_title: "वैद्यकीय आपत्कालीन स्थिती?",
  contact_emergency_desc: "क्लिनिकशी संपर्क साधू नका. त्वरित 911 वर कॉल करा किंवा जवळच्या आपत्कालीन विभागात जा.",
  contact_call_911: "आता 911 वर कॉल करा",
  toast_logged_out: "तुम्ही यशस्वीपणे लॉगआउट झाला आहात.",
  toast_select_time_slot: "कृपया एक वेळ स्लॉट निवडा.",
  toast_appointment_success: "अपॉइंटमेंट यशस्वीपणे बुक झाली! आम्ही ईमेलद्वारे पुष्टी करू.",
  toast_fill_required: "कृपया सर्व आवश्यक माहिती भरा.",
  toast_message_sent: "संदेश पाठवला गेला! आम्ही 24 तासांच्या आत उत्तर देऊ.",
  toast_fill_required_contact: "कृपया सर्व आवश्यक फील्ड भरा.",
  toast_all_posts_loaded: "सर्व पोस्ट लोड झाल्या आहेत."
});

function getCurrentLanguage() {
  const stored = localStorage.getItem("lang") || "en";
  return stored in translations ? stored : "en";
}

function translateKey(key, lang = getCurrentLanguage()) {
  return translations[lang]?.[key] ?? translations.en[key] ?? "";
}

function stripMarkup(value) {
  return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function updateLanguage(lang) {
  const activeLang = lang in translations ? lang : "en";
  document.documentElement.lang = activeLang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = translateKey(key, activeLang);
    if (!value) return;

    if (el.dataset.i18nHtml === "true") {
      el.innerHTML = value;
    } else if (["INPUT", "TEXTAREA"].includes(el.tagName)) {
      el.placeholder = value;
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-data-title]").forEach((el) => {
    const key = el.dataset.i18nDataTitle;
    const value = translateKey(key, activeLang);
    if (value) el.dataset.title = stripMarkup(value);
  });

  const switcher = document.getElementById("languageSwitcher");
  if (switcher) switcher.value = activeLang;

  localStorage.setItem("lang", activeLang);
}

window.updateLanguage = updateLanguage;
window.switchLang = updateLanguage;
window.getCurrentLanguage = getCurrentLanguage;
window.bindLanguageSwitcher = function bindLanguageSwitcher() {
  const switcher = document.getElementById("languageSwitcher");
  if (!switcher || switcher.dataset.bound === "true") return;
  switcher.dataset.bound = "true";
  switcher.addEventListener("change", (e) => updateLanguage(e.target.value));
};

document.addEventListener("DOMContentLoaded", () => {
  window.bindLanguageSwitcher();
  updateLanguage(getCurrentLanguage());
});

const Auth = {
  isLoggedIn() {
    return !!sessionStorage.getItem("dr_user");
  },
  getUser() {
    try {
      return JSON.parse(sessionStorage.getItem("dr_user"));
    } catch {
      return null;
    }
  },
  login(name, email) {
    sessionStorage.setItem("dr_user", JSON.stringify({ name, email, avatar: name.charAt(0).toUpperCase() }));
    this.updateUI();
  },
  logout() {
    sessionStorage.removeItem("dr_user");
    this.updateUI();
    showToast(translateKey("toast_logged_out"), "info");
    setTimeout(() => { window.location.href = "index.html"; }, 800);
  },
  updateUI() {
    const user = this.getUser();
    const profileAvatar = document.getElementById("profileAvatar");
    const loginBtn = document.getElementById("navLoginBtn");
    const logoutBtn = document.getElementById("navLogoutBtn");
    const dashBtn = document.getElementById("navDashBtn");
    if (profileAvatar) profileAvatar.textContent = user ? user.avatar : "👤";
    if (loginBtn) loginBtn.style.display = user ? "none" : "";
    if (logoutBtn) logoutBtn.style.display = user ? "" : "none";
    if (dashBtn) dashBtn.style.display = user ? "" : "none";
  }
};
document.addEventListener("DOMContentLoaded", () => Auth.updateUI());

window.Auth = Auth;
window.doLogout = () => Auth.logout();

window.showToast = function showToast(msg, type = "success") {
  let tc = document.querySelector(".toast-container");
  if (!tc) {
    tc = document.createElement("div");
    tc.className = "toast-container";
    document.body.appendChild(tc);
  }
  const icons = { success: "✅", error: "❌", info: "ℹ️" };
  const t = document.createElement("div");
  t.className = `toast ${type}`;
  t.innerHTML = `<span>${icons[type] || "ℹ️"}</span><span>${msg}</span>`;
  tc.appendChild(t);
  setTimeout(() => t.remove(), 4000);
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".faq-q").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach((i) => i.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".time-slot:not(.busy)").forEach((slot) => {
    slot.addEventListener("click", () => {
      document.querySelectorAll(".time-slot").forEach((s) => s.classList.remove("selected"));
      slot.classList.add("selected");
      const input = document.getElementById("selectedTime");
      if (input) input.value = slot.textContent.trim();
    });
  });
});

window.validateBooking = function validateBooking(e) {
  e.preventDefault();
  const form = e.target;
  let valid = true;

  form.querySelectorAll("[required]").forEach((field) => {
    field.classList.remove("error");
    if (!field.value.trim()) {
      field.classList.add("error");
      valid = false;
    }
  });

  const email = form.querySelector('[type="email"]');
  if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    email.classList.add("error");
    valid = false;
  }

  const time = document.getElementById("selectedTime");
  if (!time || !time.value) {
    showToast(translateKey("toast_select_time_slot"), "error");
    valid = false;
  }

  if (valid) {
    showToast(translateKey("toast_appointment_success"), "success");
    form.reset();
    document.querySelectorAll(".time-slot").forEach((s) => s.classList.remove("selected"));
    if (time) time.value = "";
  } else {
    showToast(translateKey("toast_fill_required"), "error");
  }
  return false;
};

window.validateContact = function validateContact(e) {
  e.preventDefault();
  const form = e.target;
  let valid = true;
  form.querySelectorAll("[required]").forEach((field) => {
    field.classList.remove("error");
    if (!field.value.trim()) {
      field.classList.add("error");
      valid = false;
    }
  });
  if (valid) {
    showToast(translateKey("toast_message_sent"), "success");
    form.reset();
  } else {
    showToast(translateKey("toast_fill_required_contact"), "error");
  }
  return false;
};

function animateCounter(el, target, duration = 1800) {
  const start = performance.now();
  const update = (time) => {
    const elapsed = time - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target.toLocaleString() + (el.dataset.suffix || "");
  };
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !entry.target.dataset.counted) {
      entry.target.dataset.counted = "true";
      animateCounter(entry.target, parseInt(entry.target.dataset.target, 10));
    }
  });
}, { threshold: 0.5 });

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-counter]").forEach((el) => counterObserver.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
  if (document.querySelector(".hero-badge")) {
    heroTl
      .from(".hero-badge", { opacity: 0, y: 20, duration: 0.5, delay: 0.3 })
      .from(".hero-title", { opacity: 0, y: 40, duration: 0.7 }, "-=0.2")
      .from(".hero-subtitle", { opacity: 0, y: 30, duration: 0.6 }, "-=0.4")
      .from(".hero-btns", { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
      .from(".hero-stats", { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
      .from(".hero-img-wrap", { opacity: 0, x: 60, duration: 0.9, ease: "power2.out" }, "-=0.6")
      .from(".float-card", { opacity: 0, scale: 0.8, duration: 0.5, stagger: 0.2 }, "-=0.4");
  }

  gsap.utils.toArray(".gsap-reveal").forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" }
    });
  });

  gsap.utils.toArray(".gsap-stagger").forEach((container) => {
    gsap.from(container.children, {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: { trigger: container, start: "top 85%" }
    });
  });
});

function initTestimonialSlider(slider) {
  if (!slider) return;

  const viewport = slider.querySelector(".testimonial-slider-viewport");
  const track = slider.querySelector(".testimonial-slider-track");
  const prevBtn = slider.querySelector('[data-direction="prev"]');
  const nextBtn = slider.querySelector('[data-direction="next"]');
  const dotsContainer = slider.querySelector(".testimonial-dots");

  if (!viewport || !track || !prevBtn || !nextBtn || !dotsContainer) return;

  const originalSlides = Array.from(track.children).filter((slide) => slide.classList.contains("testimonial-slide"));
  const originalCount = originalSlides.length;
  if (originalCount < 2) return;

  originalSlides.forEach((slide, index) => {
    slide.dataset.originalIndex = String(index);
  });

  const createClone = (slide) => {
    const clone = slide.cloneNode(true);
    clone.dataset.clone = "true";
    clone.setAttribute("aria-hidden", "true");
    return clone;
  };

  const prependFragment = document.createDocumentFragment();
  originalSlides.slice().reverse().forEach((slide) => {
    prependFragment.appendChild(createClone(slide));
  });
  track.insertBefore(prependFragment, track.firstChild);

  const appendFragment = document.createDocumentFragment();
  originalSlides.forEach((slide) => {
    appendFragment.appendChild(createClone(slide));
  });
  track.appendChild(appendFragment);

  let allSlides = Array.from(track.children).filter((slide) => slide.classList.contains("testimonial-slide"));
  let slidesPerView = 3;
  let currentIndex = originalCount;
  let slideStep = 0;
  let autoPlayTimer = null;
  let resizeTimer = null;
  let isAnimating = false;

  const drag = {
    active: false,
    pointerId: null,
    startX: 0,
    deltaX: 0,
    baseX: 0
  };

  const dots = originalSlides.map((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "testimonial-dot";
    dot.setAttribute("aria-label", "Go to testimonial " + (index + 1));
    dot.dataset.index = String(index);
    dotsContainer.appendChild(dot);
    return dot;
  });

  const getSlidesPerView = () => {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 991) return 2;
    return 3;
  };

  const getGap = () => {
    const styles = window.getComputedStyle(track);
    return parseFloat(styles.gap || styles.columnGap || "0");
  };

  const measureSlideStep = () => {
    const referenceSlide = allSlides[currentIndex] || allSlides[0];
    if (!referenceSlide) return 0;
    return referenceSlide.getBoundingClientRect().width + getGap();
  };

  const mod = (value, length) => ((value % length) + length) % length;

  const getXForIndex = (index) => -(index * slideStep);

  const setTrackX = (x) => {
    if (typeof gsap !== "undefined") {
      gsap.set(track, { x });
    } else {
      track.style.transform = "translate3d(" + x + "px, 0, 0)";
    }
  };

  const updateActiveStates = () => {
    const focusOffset = slidesPerView === 1 ? 0 : Math.floor(slidesPerView / 2);
    const focusIndex = Math.min(currentIndex + focusOffset, allSlides.length - 1);
    const activeDotIndex = mod(currentIndex, originalCount);

    allSlides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === focusIndex);
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle("is-active", index === activeDotIndex);
      dot.setAttribute("aria-pressed", index === activeDotIndex ? "true" : "false");
    });
  };

  const refreshMetrics = () => {
    slidesPerView = getSlidesPerView();
    slider.style.setProperty("--slides-per-view", String(slidesPerView));
    slideStep = measureSlideStep();
  };

  const normalizeLoopPosition = () => {
    let normalizedIndex = currentIndex;

    if (currentIndex >= originalCount * 2) {
      normalizedIndex = currentIndex - originalCount;
    } else if (currentIndex < originalCount) {
      normalizedIndex = currentIndex + originalCount;
    }

    if (normalizedIndex !== currentIndex) {
      currentIndex = normalizedIndex;
      refreshMetrics();
      setTrackX(getXForIndex(currentIndex));
    }

    updateActiveStates();
  };

  const animateToIndex = (nextIndex, immediate) => {
    currentIndex = nextIndex;
    refreshMetrics();
    updateActiveStates();

    if (immediate || typeof gsap === "undefined") {
      isAnimating = false;
      setTrackX(getXForIndex(currentIndex));
      normalizeLoopPosition();
      return;
    }

    isAnimating = true;
    gsap.to(track, {
      x: getXForIndex(currentIndex),
      duration: 0.8,
      ease: "power2.inOut",
      overwrite: true,
      onComplete: () => {
        isAnimating = false;
        normalizeLoopPosition();
      }
    });
  };

  const stopAutoplay = () => {
    if (autoPlayTimer) {
      window.clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  };

  const startAutoplay = () => {
    stopAutoplay();
    const delay = Number(slider.dataset.autoplay) || 4500;
    autoPlayTimer = window.setInterval(() => {
      if (!isAnimating && !drag.active) {
        animateToIndex(currentIndex + 1, false);
      }
    }, delay);
  };

  const getNearestLoopIndex = (targetOriginalIndex) => {
    const baseIndex = originalCount + targetOriginalIndex;
    const candidates = [baseIndex - originalCount, baseIndex, baseIndex + originalCount];

    return candidates.reduce((closest, candidate) => {
      return Math.abs(candidate - currentIndex) < Math.abs(closest - currentIndex) ? candidate : closest;
    }, candidates[0]);
  };

  prevBtn.addEventListener("click", () => {
    if (isAnimating) return;
    stopAutoplay();
    animateToIndex(currentIndex - 1, false);
    startAutoplay();
  });

  nextBtn.addEventListener("click", () => {
    if (isAnimating) return;
    stopAutoplay();
    animateToIndex(currentIndex + 1, false);
    startAutoplay();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      if (isAnimating) return;
      stopAutoplay();
      animateToIndex(getNearestLoopIndex(Number(dot.dataset.index)), false);
      startAutoplay();
    });
  });

  slider.addEventListener("mouseenter", stopAutoplay);
  slider.addEventListener("mouseleave", startAutoplay);
  slider.addEventListener("focusin", stopAutoplay);
  slider.addEventListener("focusout", (event) => {
    if (!slider.contains(event.relatedTarget)) startAutoplay();
  });

  viewport.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    if (event.target.closest(".testimonial-nav, .testimonial-dot") || isAnimating) return;

    drag.active = true;
    drag.pointerId = event.pointerId;
    drag.startX = event.clientX;
    drag.deltaX = 0;
    drag.baseX = getXForIndex(currentIndex);

    track.classList.add("is-dragging");
    stopAutoplay();

    if (typeof gsap !== "undefined") {
      gsap.killTweensOf(track);
      gsap.set(track, { x: drag.baseX });
    }

    if (viewport.setPointerCapture) viewport.setPointerCapture(event.pointerId);
  });

  viewport.addEventListener("pointermove", (event) => {
    if (!drag.active) return;

    drag.deltaX = event.clientX - drag.startX;
    setTrackX(drag.baseX + drag.deltaX);
  });

  const finishDrag = () => {
    if (!drag.active) return;

    if (drag.pointerId !== null && viewport.releasePointerCapture && viewport.hasPointerCapture && viewport.hasPointerCapture(drag.pointerId)) {
      viewport.releasePointerCapture(drag.pointerId);
    }

    drag.active = false;
    track.classList.remove("is-dragging");

    const swipeThreshold = Math.max(60, slideStep * 0.18);

    if (drag.deltaX <= -swipeThreshold) {
      animateToIndex(currentIndex + 1, false);
    } else if (drag.deltaX >= swipeThreshold) {
      animateToIndex(currentIndex - 1, false);
    } else {
      animateToIndex(currentIndex, false);
    }

    drag.pointerId = null;
    drag.deltaX = 0;
    startAutoplay();
  };

  viewport.addEventListener("pointerup", finishDrag);
  viewport.addEventListener("pointercancel", finishDrag);

  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      if (typeof gsap !== "undefined") {
        gsap.killTweensOf(track);
      }

      currentIndex = originalCount + mod(currentIndex, originalCount);
      refreshMetrics();
      updateActiveStates();
      setTrackX(getXForIndex(currentIndex));
    }, 120);
  });

  refreshMetrics();
  updateActiveStates();
  setTrackX(getXForIndex(currentIndex));
  startAutoplay();
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".testimonial-slider").forEach((slider) => {
    initTestimonialSlider(slider);
  });
});

window.loadMorePosts = function loadMorePosts() {
  const btn = document.getElementById("loadMoreBtn");
  if (!btn) return;
  btn.dataset.i18n = "blog_load_more_loading";
  updateLanguage(getCurrentLanguage());
  setTimeout(() => {
    btn.dataset.i18n = "blog_load_more_done";
    btn.disabled = true;
    updateLanguage(getCurrentLanguage());
    showToast(translateKey("toast_all_posts_loaded"), "info");
  }, 1200);
};

document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const target = document.querySelector(a.getAttribute("href"));
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
