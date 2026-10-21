/* jshint esversion: 6 */
(function () {
  'use strict';

  /* â”€â”€ Constants â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  const WA_NUMBER = "251999087712";
  const STORAGE_KEY = "CrownGym_lang";

  // Gym operating hours – two sessions, East Africa Time (UTC+3)
  // Morning: 6:30 AM – 10:00 AM  |  Evening: 3:00 PM (15:00) – 10:00 PM (22:00)
  const GYM_SESSIONS = [
    { openH: 6,  openM: 30, closeH: 10, closeM: 0  }, // Morning
    { openH: 15, openM: 0,  closeH: 22, closeM: 0  }  // Evening
  ];

  /* â”€â”€ 1. Translations Dictionary â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  const TRANSLATIONS = {
    en: {
      // Navigation
      "nav-home": "Home",
      "nav-why": "Why Us",
      "nav-memberships": "Memberships",
      "nav-services": "Services",
      "nav-gallery": "Gallery",
      "nav-reviews": "Reviews",
      "nav-visit": "Visit",
      "nav-faq": "FAQ",
      "nav-btn-wa": "WhatsApp",
      "btn-join-wa": "Join on WhatsApp",
      "btn-call-now": "Call Now",

      // Hero
      "hero-heading": "STRONGER<br />EVERY<br />DAY.",
      "hero-body": "Your fitness journey starts here. Train at CROWN GYM in Dukem with flexible membership options and a motivating environment.",
      "hero-fact-1": "Plans from <strong>150 ETB</strong> a day",
      "hero-fact-2": "Open <strong>12 hours every day</strong>, Monday to Sunday",
      "hero-fact-3": "<strong>Beginners welcome</strong> - start at any level",

      // Why Us
      "why-heading": "Why Choose CROWN GYM",
      "benefit-1-title": "Strength Training",
      "benefit-1-desc": "Full-range free weights and resistance equipment for building real strength.",
      "benefit-2-title": "Cardio Workouts",
      "benefit-2-desc": "Dedicated cardio zone to build endurance and keep your fitness consistent.",
      "benefit-3-title": "Beginners Welcome",
      "benefit-3-desc": "No experience needed. Start from zero and build at your own pace.",
      "benefit-4-title": "Open Every Day",
      "benefit-4-desc": "Train Monday to Sunday, 12 hours a day - fit sessions around your schedule.",
      "benefit-5-title": "Flexible Pricing",
      "benefit-5-desc": "Daily, monthly or multi-month plans - from 150 ETB a day to as low as 1,250 ETB per month on the 6-month plan.",
      "benefit-6-title": "Based in Dukem",
      "benefit-6-desc": "Right here in Dukem, Oromia - convenient for the local community.",

      // Memberships
      "memberships-heading": "Membership Plans",
      "memberships-subtext": "Message CROWN GYM on WhatsApp or visit the gym to ask about membership.",
      "calc-badge": "Smart Savings Calculator",
      "calc-title": "How often do you plan to train?",
      "calc-sub": "See how much you save with a membership versus paying 150 ETB single daily passes.",
      "calc-visits-8": "~8 visits / mo",
      "calc-visits-14": "~14 visits / mo",
      "calc-visits-22": "~22 visits / mo",
      "calc-daily-cost-label": "Paying Daily Passes",
      "calc-monthly-cost-label": "With Monthly Membership",
      "calc-unlimited-access": "Unlimited 30-day access (50 ETB/day)",
      "calc-savings-badge": "You Save",
      "badge-daily": "Single Visit",
      "badge-monthly": "★ Most Popular",
      "badge-3m": "Save 500 ETB",
      "badge-6m": "✦ Best Value • 1,500 ETB Off",
      "plan-daily-title": "Daily Pass",
      "plan-daily-dur": "per visit • no commitment",
      "feat-daily-1": "Full weights & cardio zone access",
      "feat-daily-2": "Valid for morning or evening session",
      "feat-daily-3": "Locker & changing room access",
      "feat-daily-4": "Pay as you train, zero contract",
      "plan-daily-note": "10 daily visits equals 1,500 ETB - the same as one month.",
      "plan-monthly-title": "Monthly",
      "plan-monthly-dur": "per month • only 50 ETB/day",
      "feat-month-1": "Unlimited gym access for 30 days",
      "feat-month-2": "Open 12 hours daily, Monday to Sunday",
      "feat-month-3": "Beginner orientation & guidance",
      "feat-month-4": "Free lockers & changing facilities",
      "plan-monthly-note": "Cheaper than daily passes after 10 visits.",
      "plan-3m-title": "3 Months",
      "plan-3m-dur": "for 3 months • 1,333 ETB/mo",
      "feat-3m-1": "90 days of unlimited training",
      "feat-3m-2": "Save 500 ETB vs paying monthly",
      "feat-3m-3": "Habit-building quarterly consistency",
      "feat-3m-4": "Full gym amenities & coach advice",
      "plan-3m-note": "3 monthly payments = 4,500 ETB. You save 500 ETB.",
      "plan-6m-title": "6 Months",
      "plan-6m-dur": "for 6 months • 1,250 ETB/mo (Lowest Rate)",
      "feat-6m-1": "180 days of unlimited gym access",
      "feat-6m-2": "Save 1,500 ETB (1 month free equivalent)",
      "feat-6m-3": "Lowest rate: 1,250 ETB/month",
      "feat-6m-4": "Full facility, equipment & trainer support",
      "plan-6m-note": "6 monthly payments = 9,000 ETB. You save 1,500 ETB.",
      "btn-ask-wa": "Ask on WhatsApp",

      // Services
      "services-heading": "What We Offer",
      "service-1-title": "Strength Training",
      "service-1-desc": "Build muscle and increase strength with free weights, barbells, and resistance machines.",
      "service-2-title": "Cardio Workouts",
      "service-2-desc": "Improve endurance and heart health with dedicated cardio equipment and training zones.",
      "service-3-title": "Beginner-Friendly Training",
      "service-3-desc": "New to the gym? CROWN GYM welcomes members of all experience levels. Start where you are.",

      // Gallery
      "gallery-heading": "Inside CROWN GYM",
      "gallery-subtext": "Take a look inside our gym floor, weights area, and cardio zone. Tap any image to enlarge.",

      // Reviews
      "reviews-heading": "What Our Members Say",
      "reviews-subtext": "Real experiences and feedback from lifters, athletes, and beginners at CROWN GYM in Dukem.",
      "review-1-tag": "Monthly Member",
      "review-1-quote": "\"Best gym in Dukem without question. The free weights and dumbbells are well-maintained, and the evening training atmosphere gives you real motivation. The 3-month membership saved me money and kept me consistent.\"",
      "review-1-name": "Dawit T.",
      "review-1-role": "Dukem • Member for 6 Months",
      "review-2-tag": "Beginner Friendly",
      "review-2-quote": "\"I had zero fitness experience before joining CROWN GYM. The trainers showed me how to use the equipment properly on my first day. Very welcoming, respectful, and safe for beginners.\"",
      "review-2-name": "Hana M.",
      "review-2-role": "Dukem • 3 Months Member",
      "review-3-tag": "Consistent Training",
      "review-3-quote": "\"Being open 12 hours a day every day is a lifesaver. I can get my workout in at 6:30 AM before work or come late at 8:00 PM. Clean lockers, great treadmills, and solid power racks.\"",
      "review-3-name": "Biniyam K.",
      "review-3-role": "Dukem • Regular Trainee",

      // Visit
      "visit-heading": "Find Us",
      "visit-loc-title": "Location",
      "visit-loc-val": "Dukem, Oromia, Ethiopia",
      "visit-hours-title": "Hours",
      "visit-hours-val": "Open 12 hours every day, Monday to Sunday",
      "visit-phone-title": "Phone",
      "visit-cta-wa": "Message on WhatsApp",
      "visit-cta-tg": "Telegram",
      "btn-maps": "Google Maps",
      "btn-copy": "Copy",
      "toast-copied": "Phone number copied to clipboard!",

      // FAQ
      "faq-heading": "Frequently Asked Questions",
      "faq-subtext": "Everything you need to know about joining and training at CROWN GYM in Dukem.",
      "faq-q1": "Where is CROWN GYM located in Dukem?",
      "faq-a1": "CROWN GYM is conveniently located in Dukem, Oromia, Ethiopia. You can reach out directly via WhatsApp (+251 999 087 712) for landmark directions or exact pin location.",
      "faq-q2": "What are CROWN GYM's opening and training hours?",
      "faq-a2": "We are open 12 hours every day, Monday through Sunday across two convenient sessions: Morning session from 6:30 AM – 10:00 AM, and Evening session from 3:00 PM – 10:00 PM.",
      "faq-q3": "How much does gym membership cost at CROWN GYM?",
      "faq-a3": "We offer flexible packages: Daily Pass is 150 ETB per visit; Monthly membership is 1,500 ETB (50 ETB/day); 3-Month plan is 4,000 ETB (save 500 ETB); and 6-Month plan is 7,500 ETB (save 1,500 ETB - lowest rate at 1,250 ETB/mo).",
      "faq-q4": "Can beginners join CROWN GYM without prior fitness experience?",
      "faq-a4": "Yes, absolutely! CROWN GYM is designed to be beginner-friendly. Our team provides equipment orientation, basic movement coaching, and a welcoming environment for newcomers of all fitness levels.",
      "faq-q5": "What equipment and workout facilities are available at the gym?",
      "faq-a5": "CROWN GYM is equipped with full-range free weights (dumbbells, barbells, weight plates), power racks, bench press stations, resistance machines, a dedicated cardio training zone (treadmills, ellipticals), as well as secure lockers and changing rooms.",

      // Final CTA
      "final-cta-heading": "Ready to Start Your Fitness Journey?",
      "final-cta-desc": "Find a membership that fits your goals and budget. Contact CROWN GYM to get started.",

      "loader-tagline": "STRONGER EVERY DAY.",
      "footer-tagline": "A gym in Dukem, Oromia, Ethiopia offering strength and cardio training with flexible memberships from 150 ETB a day.",
      "footer-quick-links": "Quick Links",
      "footer-contact-title": "Contact",
      "footer-hours-val": "Open every day - 12 hours daily",
      "footer-rights": "All rights reserved.",
      "fab-label": "WhatsApp",

      // Live Gym Status
      "status-open": "Open Now • Closes {time}",
      "status-closing-soon": "Closing Soon • Closes {time}",
      "status-closed": "Closed Now • Opens {time}",
      "status-closed-tomorrow": "Closed Now • Opens tomorrow {time}",
      "time-open-morning": "6:30 AM",
      "time-close-morning": "10:00 AM",
      "time-open-evening": "3:00 PM",
      "time-close-evening": "10:00 PM",

      // WhatsApp messages
      "wa-default": "Hello CROWN GYM, I found your website and want to ask about membership.",
      "wa-plan": "Hello CROWN GYM, I found your website. I am interested in the {plan} membership ({price} ETB)."
    },

    om: {
      // Navigation
      "nav-home": "Fuula Duraa",
      "nav-why": "Maaliif Nuti",
      "nav-memberships": "Miseensummaa",
      "nav-services": "Tajaajila",
      "nav-gallery": "Suuraalee",
      "nav-reviews": "Yaada Miseensotaa",
      "nav-visit": "Nu Daawwadhaa",
      "nav-faq": "Gaaffilee",
      "nav-btn-wa": "WhatsApp",
      "btn-join-wa": "WhatsApp'n Makamaa",
      "btn-call-now": "Amma Bilbilaa",

      // Hero
      "hero-heading": "STRONGER<br />EVERY<br />DAY.",
      "hero-body": "Imalli fayyummaa keessanii asitti eegala. CROWN GYM Dukamitti filannoowwan miseensummaa mijaawaa fi naannoo kakaasummaa qabutti leenji'aa.",
      "hero-fact-1": "Kaffaltii guyyaatti <strong>150 ETB</strong> irraa eegalu",
      "hero-fact-2": "Wiixata hanga Dilbataa, guyyatti <strong>sa'aatii 12</strong> banaadha",
      "hero-fact-3": "<strong>Jalqabdoonni ni simatamu</strong> - sadarkaa kamiinuu eegalaa",

      // Why Us
      "why-heading": "Maaliif CROWN GYM Filattu",
      "benefit-1-title": "Leenjii Jabinaa",
      "benefit-1-desc": "Ulfaatina guutuu fi meeshaalee jabina ijaaruuf gargaaran.",
      "benefit-2-title": "Leenjii Kaardiyoo",
      "benefit-2-desc": "Dandeettii fi fayyummaa onnee keessanii cimsuuf iddoo addaa.",
      "benefit-3-title": "Jalqabdoonni Ni Simatamu",
      "benefit-3-desc": "Muxannoo hin barbaachisu. Zero irraa eegalaa sadarkaa keessaniin gabbisaa.",
      "benefit-4-title": "Guyyaa Hundumaa Banaadha",
      "benefit-4-desc": "Wiixata hanga Dilbataa, guyyatti sa'aatii 12 leenji'aa - sagantaa keessan wajjin walsimsiisaa.",
      "benefit-5-title": "Kaffaltii Mijaawaa",
      "benefit-5-desc": "Guyyaa, ji'a ykn ji'oota hedduu - guyyaatti 150 ETB irraa hanga ji'atti 1,250 ETB tti.",
      "benefit-6-title": "Dukam Keessatti",
      "benefit-6-desc": "Asuma Dukam, Oromiyaa - hawaasa naannoof baay'ee dhihoo fi mijataa.",

      // Memberships
      "memberships-heading": "Sagantaalee Miseensummaa",
      "memberships-subtext": "Waa'ee miseensummaa gaafachuuf CROWN GYM WhatsApp'n ergaa ykn qaamaan daawwadhaa.",
      "calc-badge": "Herrega Qusannaa",
      "calc-title": "Torbanitti yeroo meeqa leenji'uuf karoorsitan?",
      "calc-sub": "Tikkeettii guyyaa 150 ETB kaffaluu caalaa miseensummaan hammam akka qusatu ilaalaa.",
      "calc-visits-8": "~daawwannaa 8 / ji'atti",
      "calc-visits-14": "~daawwannaa 14 / ji'atti",
      "calc-visits-22": "~daawwannaa 22 / ji'atti",
      "calc-daily-cost-label": "Tikkeettii Guyyaan Kaffaluu",
      "calc-monthly-cost-label": "Miseensummaa Ji'aan",
      "calc-unlimited-access": "Guyyaa 30f daangaa malee (guyyaatti 50 ETB)",
      "calc-savings-badge": "Ni Qusattu",
      "badge-daily": "Daawwannaa Tokko",
      "badge-monthly": "★ Baay'ee Filatamaa",
      "badge-3m": "500 ETB Qusadhaa",
      "badge-6m": "✦ Faayidaa Olaanaa • 1,500 ETB Hir'isa",
      "plan-daily-title": "Tikkeettii Guyyaa",
      "plan-daily-dur": "daawwannaatti • dirqama malee",
      "feat-daily-1": "Ulfaatina fi kaardiyoo guutuu fayyadamaa",
      "feat-daily-2": "Ganama ykn galgala leenji'uuf banaadha",
      "feat-daily-3": "Iddoo meeshaa fi uffataa qaba",
      "feat-daily-4": "Akka leenjitanitti kaffalaa, dirqama malee",
      "plan-daily-note": "Daawwannaan guyyaa 10 kaffaltii ji'a tokkoon wal-qixa (1,500 ETB).",
      "plan-monthly-title": "Ji'aan",
      "plan-monthly-dur": "ji'atti • guyyaatti 50 ETB qofa",
      "feat-month-1": "Guyyaa 30f daangaa malee leenji'aa",
      "feat-month-2": "Wiixata-Dilbata, guyyatti sa'aatii 12 banaadha",
      "feat-month-3": "Jalqabdootaaf gorsa fi qajeelfama bilisaa",
      "feat-month-4": "Iddoo meeshaa fi uffataa bilisaan",
      "plan-monthly-note": "Ji'atti daawwannaa 10 booda kaffaltii guyyaa irra qusataadha.",
      "plan-3m-title": "Ji'a 3",
      "plan-3m-dur": "ji'a 3f • ji'atti 1,333 ETB",
      "feat-3m-1": "Guyyoota 90f daangaa malee leenji'aa",
      "feat-3m-2": "Kaffaltii ji'aa irraa 500 ETB qusadhaa",
      "feat-3m-3": "Hojii qaamaa itti fufiinsaan ijaaruuf",
      "feat-3m-4": "Tajaajila guutuu fi gorsa leenjisaa",
      "plan-3m-note": "Ji'aan sadii kaffaluun 4,500 ETB ta'a. Sagantaan kun 500 ETB qusata.",
      "plan-6m-title": "Ji'a 6",
      "plan-6m-dur": "ji'a 6f • ji'atti 1,250 ETB (Gatii Xiqqaa)",
      "feat-6m-1": "Guyyoota 180f daangaa malee leenji'aa",
      "feat-6m-2": "1,500 ETB qusadhaa (ji'a 1 bilisaan)",
      "feat-6m-3": "Gatii hundarra gadi aanaa: ji'atti 1,250 ETB",
      "feat-6m-4": "Meeshaalee guutuu fi gorsa leenjisaa cimaa",
      "plan-6m-note": "Ji'aan ja'a kaffaluun 9,000 ETB ta'a. Sagantaan kun 1,500 ETB qusata.",
      "btn-ask-wa": "WhatsApp irratti Gaafadhaa",

      // Services
      "services-heading": "Tajaajiloota Keenya",
      "service-1-title": "Leenjii Jabinaa",
      "service-1-desc": "Ulfaatina, baarbeelii fi meeshaalee jabinaatiin maashaa ijaaraa, humna dabalaa.",
      "service-2-title": "Leenjii Kaardiyoo",
      "service-2-desc": "Meeshaalee kaardiyootiin dandeettii dandamannaafi fayyummaa onnee fooyyessaa.",
      "service-3-title": "Leenjii Jalqabdootaaf Mijaawaa",
      "service-3-desc": "Jiimiif haaraadhaa? CROWN GYM sadarkaa kamiyyuu ni simata. Bakka jirtanirraa eegalaa.",

      // Gallery
      "gallery-heading": "CROWN GYM Keessa",
      "gallery-subtext": "Iddoo meeshaalee fi sochii qaamaa keenya daawwadhaa. Guddisanii ilaaluuf suuraa tuqaa.",

      // Reviews
      "reviews-heading": "Yaada Miseensota Keenyaa",
      "reviews-subtext": "Muuxannoo qabatamaa namoota CROWN GYM Dukamitti leenji'anii.",
      "review-1-tag": "Miseensa Ji'aa",
      "review-1-quote": "\"Dukam keessatti jiimii hunda caaluudha. Ulfaatinni fi dambeelonni qulqullinaan qabamu, galgala immoo kaka'umsa guddaa qaba. Miseensummaan ji'a 3 maallaqa na qusatee amala leenjii cimaa naaf ijaare.\"",
      "review-1-name": "Daawiit T.",
      "review-1-role": "Dukam • Ji'a 6f Miseensa",
      "review-2-tag": "Jalqabdootaaf Mijaawaa",
      "review-2-quote": "\"Jiimii kanaan dura leenji'ee hin beeku ture. Leenjistonni guyyaa jalqabaa akkamitti akka fayyadaman na barsiisan. Baay'ee kabajaa fi nagaa kan qabuudha.\"",
      "review-2-name": "Haannaa M.",
      "review-2-role": "Dukam • Ji'a 3f Miseensa",
      "review-3-tag": "Leenjii Itti Fufiinsaa",
      "review-3-quote": "\"Guyyatti sa'aatii 12 banaa ta'uunsaa baay'ee na gargaare. Ganama sa'aatii 6:30 hojii dura ykn galgala sa'aatii 8:00 leenji'uu nan danda'a. Qulqullina gaarii fi meeshaalee ammayyaa qaba.\"",
      "review-3-name": "Biiniyaam K.",
      "review-3-role": "Dukam • Leenji'aa Dhaabbataa",

      // Visit
      "visit-heading": "Nu Argachuuf",
      "visit-loc-title": "Iddoo",
      "visit-loc-val": "Dukam, Oromiyaa, Itoophiyaa",
      "visit-hours-title": "Sa'aatii",
      "visit-hours-val": "Wiixata hanga Dilbataa, guyyatti sa'aatii 12 banaadha",
      "visit-phone-title": "Bilbila",
      "visit-cta-wa": "WhatsApp irratti Nu Qunnamaa",
      "visit-cta-tg": "Telegram",
      "btn-maps": "Google Maps",
      "btn-copy": "Koppii",
      "toast-copied": "Lakkoofsi bilbilaa qabameera!",

      // FAQ
      "faq-heading": "Gaaffilee Yeroo Baay'ee Gaafataman",
      "faq-subtext": "Waa'ee CROWN GYM Dukamitti makamuu fi leenji'uu wantoota beekuu qabdan hunda.",
      "faq-q1": "CROWN GYM Dukam keessatti eessatti argama?",
      "faq-a1": "CROWN GYM Dukam, Oromiyaa, Itoophiyaa keessatti iddoo mijatoo irratti argama. Kallattii fi teessoo sirrii argachuuf WhatsApp (+251 999 087 712) irratti nu dubbisuu dandeessu.",
      "faq-q2": "Sa'aatiin hojii fi leenjii CROWN GYM akkami?",
      "faq-a2": "Wiixata hanga Dilbataatti guyyaa hundumaa sa'aatii 12 banaadha: Ganama sa'aatii 6:30 AM – 10:00 AM, fi Waaree booda sa'aatii 3:00 PM – 10:00 PM.",
      "faq-q3": "Kaffaltiin miseensummaa CROWN GYM meeqadha?",
      "faq-a3": "Kaffaltii mijaawaa dhiyeessina: Kaffaltiin guyyaa tokkoo 150 ETB; Ji'atti 1,500 ETB (guyyaatti 50 ETB); Ji'a 3f 4,000 ETB (500 ETB qusadhaa); Ji'a 6f 7,500 ETB (1,500 ETB qusadhaa - ji'atti 1,250 ETB qofa).",
      "faq-q4": "Jalqabdoonni muuxannoo duraa malee CROWN GYMtti makamuu danda'uu?",
      "faq-a4": "Eeyyee, sirriitti! CROWN GYM jalqabdootaaf baay'ee mijaawaadha. Gareen keenya haala itti fayyadama meeshaalee, gorsa sochii bu'uuraa fi simannaa gaarii ni dhiyeessa.",
      "faq-q5": "Meeshaalee fi tajaajiloota akkamiitu jiimii keessa jira?",
      "faq-a5": "CROWN GYM ulfaatina guutuu (dambeelii, baarbeelii), meeshaalee maashaa, iddoo kaardiyoo (tiriidmiilii), saanduqa qabeenyaa eegan (lockers) fi kutaa uffata jijjiirraa guutuu qaba.",

      // Final CTA
      "final-cta-heading": "Imala Fayyummaa Keessanii Eegaluuf Qophiidhaa?",
      "final-cta-desc": "Miseensummaa galma fi baajata keessaniin walsimu filadhaa. Eegaluuf CROWN GYM qunnamaa.",

      "loader-tagline": "STRONGER EVERY DAY.",
      "footer-tagline": "Dukam, Oromiyaatti kan argamu, leenjii jabinaa fi kaardiyoo kaffaltii guyyaatti 150 ETB irraa eegaluun kan dhiyeessu.",
      "footer-quick-links": "Liinkiiwwan Saffisaa",
      "footer-contact-title": "Qunnamtii",
      "footer-hours-val": "Guyyaa hundumaa - guyyatti sa'aatii 12 banaadha",
      "footer-rights": "Mirgi hundaa kan eegame.",
      "fab-label": "WhatsApp",

      // Live Gym Status
      "status-open": "Banaadha • {time}tti cufama",
      "status-closing-soon": "Dhihootti Cufama • {time}tti",
      "status-closed": "Cufaadha • {time}tti banama",
      "status-closed-tomorrow": "Cufaadha • Boru {time}tti banama",
      "time-open-morning": "6:30 AM",
      "time-close-morning": "10:00 AM",
      "time-open-evening": "3:00 PM",
      "time-close-evening": "10:00 PM",

      // WhatsApp messages
      "wa-default": "Akkam CROWN GYM, weebsaayitii keessan argeen waa'ee miseensummaa gaafachuu barbaada.",
      "wa-plan": "Akkam CROWN GYM, weebsaayitii keessan irraa argeen miseensummaa {plan} ({price} ETB) fudhachuu barbaada."
    },

    am: {
          "nav-home": "ዋና ገጽ",
          "nav-why": "ለምን እኛን",
          "nav-memberships": "አባልነት",
          "nav-services": "አገልግሎቶች",
          "nav-gallery": "ጋለሪ",
          "nav-reviews": "አስተያየቶች",
          "nav-visit": "አድራሻ",
          "nav-faq": "ጥያቄዎች",
          "nav-btn-wa": "WhatsApp",
          "btn-join-wa": "በ WhatsApp ይቀላቀሉ",
          "btn-call-now": "አሁን ይደውሉ",
          "hero-heading": "STRONGER<br />EVERY<br />DAY.",
          "hero-body": "የአካል ብቃት ጉዞዎ ከዚህ ይጀምራል። በዱከም በሚገኘው ክሮውን ጅም (CROWN GYM) በተመጣጣኝ ዋጋ እና በሚያነቃቃ ድባብ ውስጥ ይሰልጥኑ።",
          "hero-fact-1": "በቀን ከ<strong>150 ብር</strong> ጀምሮ",
          "hero-fact-2": "ከሰኞ እስከ እሁድ፣ በቀን <strong>12 ሰዓታት</strong> ክፍት ነው",
          "hero-fact-3": "<strong>ለጀማሪዎች ተስማሚ</strong> — በማንኛውም ደረጃ መጀመር ይችላሉ",
          "why-heading": "ለምን ክሮውን ጅምን (CROWN GYM) ይመርጣሉ?",
          "benefit-1-title": "የጥንካሬ ስልጠና",
          "benefit-1-desc": "ለእውነተኛ ጥንካሬ ግንባታ የተሟሉ የክብደት ማንሻ እና የመቋቋሚያ መሣሪያዎች።",
          "benefit-2-title": "የካርዲዮ ስፖርት",
          "benefit-2-desc": "የልብ ጤንነትን እና የመቋቋም አቅምን የሚያዳብሩ ዘመናዊ መሣሪያዎች።",
          "benefit-3-title": "ጀማሪዎች እንኳን ደህና መጡ",
          "benefit-3-desc": "ቅድመ ልምድ አያስፈልግዎትም። ከዜሮ ጀምረው በራስዎ ፍጥነት ያሳድጉ።",
          "benefit-4-title": "በየቀኑ ክፍት ነው",
          "benefit-4-desc": "ከሰኞ እስከ እሁድ በቀን 12 ሰዓታት ክፍት — ከፕሮግራምዎ ጋር በሚመች መልኩ ይሰልጥኑ።",
          "benefit-5-title": "ተመጣጣኝ ዋጋ",
          "benefit-5-desc": "የቀን፣ የወር እና የብዙ ወራት አማራጮች — በቀን ከ150 ብር እስከ በወር 1,250 ብር በ6 ወር እቅድ።",
          "benefit-6-title": "በዱከም ከተማ",
          "benefit-6-desc": "እዚሁ ዱከም፣ ኦሮሚያ ውስጥ — ለአካባቢው ማህበረሰብ እጅግ ምቹ እና ቅርብ።",
          "memberships-heading": "የአባልነት እቅዶች",
          "memberships-subtext": "ስለ አባልነት ዝርዝር መረጃ ለማግኘት በWhatsApp መልእክት ይላኩ ወይም ጅሙን በአካል ይጎብኙ።",
          "calc-badge": "የቁጠባ ማስያ",
          "calc-title": "በወር ስንት ጊዜ ለመስራት አቅደዋል?",
          "calc-sub": "በቀን 150 ብር ከመክፈል ይልቅ በአባልነት ምን ያህል እንደሚቆጥቡ ይመልከቱ።",
          "calc-visits-8": "~8 ቀናት / በወር",
          "calc-visits-14": "~14 ቀናት / በወር",
          "calc-visits-22": "~22 ቀናት / በወር",
          "calc-daily-cost-label": "በየቀኑ ክፍያ ሲሰላ",
          "calc-monthly-cost-label": "በወርሃዊ አባልነት",
          "calc-unlimited-access": "ያልተገደበ የ30 ቀናት ስልጠና (በቀን 50 ብር ብቻ)",
          "calc-savings-badge": "የሚቆጥቡት",
          "badge-daily": "የአንድ ቀን",
          "badge-monthly": "★ ተወዳጅ ምርጫ",
          "badge-3m": "500 ብር ቅናሽ",
          "badge-6m": "✦ ምርጥ ዋጋ • 1,500 ብር ቅናሽ",
          "plan-daily-title": "የዕለት ማሰልጠኛ",
          "plan-daily-dur": "በአንድ ጉብኝት • ያለ ግዴታ",
          "feat-daily-1": "የሙሉ ክብደት እና የካርዲዮ መሣሪያዎች አጠቃቀም",
          "feat-daily-2": "ለውድድር ወይም ለምሽት ክፍለ-ጊዜ የሚያገለግል",
          "feat-daily-3": "የእቃ ማስቀመጫ እና የልብስ መቀየሪያ ያለው",
          "feat-daily-4": "በሰሩበት ቀን ብቻ የሚከፍሉት — ያለ ውል",
          "plan-daily-note": "10 የቀን ጉብኝት 1,500 ብር ሲሆን ይህም የአንድ ወር ክፍያ ጋር እኩል ነው።",
          "plan-monthly-title": "ወርሃዊ",
          "plan-monthly-dur": "በወር • በቀን 50 ብር ብቻ",
          "feat-month-1": "ለ30 ቀናት ያልተገደበ ሙሉ ስልጠና",
          "feat-month-2": "ከሰኞ እስከ እሁድ በቀን ለ12 ሰዓታት ክፍት",
          "feat-month-3": "ለጀማሪዎች የስልጠና መመሪያና ድጋፍ",
          "feat-month-4": "የእቃ ማስቀመጫ እና የሻወር/ልብስ መቀየሪያ ክፍል",
          "plan-monthly-note": "በወር ውስጥ ከ10 ቀን በላይ ለሚሰለጥኑ ከቀን ክፍያ እጅግ ያተርፋል።",
          "plan-3m-title": "የ3 ወር",
          "plan-3m-dur": "ለ3 ወራት • በወር 1,333 ብር",
          "feat-3m-1": "ለ90 ቀናት ያልተገደበ ስልጠና",
          "feat-3m-2": "ከወርሃዊ ክፍያ ጋር ሲነፃፀር የ500 ብር ቅናሽ",
          "feat-3m-3": "የአካል ብቃት ልምድዎን በቋሚነት ለመገንባት",
          "feat-3m-4": "ሙሉ አገልግሎቶች እና የአሰልጣኝ ድጋፍ",
          "plan-3m-note": "3 ወር በወርሃዊ ሲከፈል 4,500 ብር ሲሆን በዚህ እቅድ 500 ብር ይቆጥባሉ።",
          "plan-6m-title": "የ6 ወር",
          "plan-6m-dur": "ለ6 ወራት • በወር 1,250 ብር (ዝቅተኛው ዋጋ)",
          "feat-6m-1": "ለ180 ቀናት ያልተገደበ ሙሉ ስልጠና",
          "feat-6m-2": "የ1,500 ብር ቅናሽ (የአንድ ወር ነፃ ስልጠና ጋር እኩል)",
          "feat-6m-3": "ዝቅተኛው ወርሃዊ ዋጋ: በወር 1,250 ብር ብቻ",
          "feat-6m-4": "ሁሉንም መገልገያዎች እና የአሰልጣኝ ድጋፍ ያካትታል",
          "plan-6m-note": "6 ወር በወርሃዊ ሲከፈል 9,000 ብር ሲሆን በዚህ እቅድ 1,500 ብር ይቆጥባሉ።",
          "btn-ask-wa": "በ WhatsApp ይጠይቁ",
          "services-heading": "አገልግሎቶቻችን",
          "service-1-title": "የጥንካሬ ስልጠና",
          "service-1-desc": "በዳምብሎች፣ ባርቤሎች እና ዘመናዊ መሣሪያዎች ጡንቻዎችዎን ይገንቡ፣ ጥንካሬዎን ያሳድጉ።",
          "service-2-title": "የካርዲዮ ስፖርት",
          "service-2-desc": "በትሬድሚል እና በካርዲዮ መሣሪያዎች የልብ ጤንነትዎን እና የመቋቋም አቅምዎን ያዳብሩ።",
          "service-3-title": "ለጀማሪዎች ተስማሚ ስልጠና",
          "service-3-desc": "ለጅም አዲስ ነዎት? ክሮውን ጅም በማንኛውም ደረጃ ላይ ያሉትን ይቀበላል። ከያሉበት ይጀምሩ።",
          "gallery-heading": "የክሮውን ጅም ገጽታዎች",
          "gallery-subtext": "የጂማችንን የስልጠና ክፍል እና መሣሪያዎች ይመልከቱ። ለማጉላት ፎቶውን ይጫኑ።",
          "reviews-heading": "የአባላቶቻችን ምስክርነት",
          "reviews-subtext": "በዱከም ክሮውን ጅም (CROWN GYM) ውስጥ የሰለጠኑ አባላት እውነተኛ አስተያየቶች።",
          "review-1-tag": "ወርሃዊ አባል",
          "review-1-quote": "\"በዱከም ውስጥ ካሉ ጂሞች ሁሉ ምርጡ ነው! የክብደት ማንሻዎቹ ንጹህና ዘመናዊ ናቸው፣ የምሽት ስልጠናው ደግሞ ልዩ መነቃቃትን ይሰጣል። የ3 ወር አባልነቴ ብዙ ገንዘብ አስቀርቶልኛል!\"",
          "review-1-name": "ዳዊት ተ.",
          "review-1-role": "ዱከም • የ6 ወር አባል",
          "review-2-tag": "ለጀማሪዎች ምቹ",
          "review-2-quote": "\"ከዚህ በፊት ጅም ሰርቼ አላውቅም ነበር። አሰልጣኞቹ በመጀመሪያው ቀን መሣሪያዎችን እንዴት እንደምጠቀም አሳዩኝ። በጣም ተግባቢ እና አክብሮት የተሞላበት ቦታ ነው።\"",
          "review-2-name": "ሃና መ.",
          "review-2-role": "ዱከም • የ3 ወር አባል",
          "review-3-tag": "ቋሚ ስልጠና",
          "review-3-quote": "\"በቀን 12 ሰዓታት ክፍት መሆኑ በጣም ረድቶኛል። ጧት ከስራ በፊት 6:30 ወይም ማታ 8:00 መስራት እችላለሁ። ንጽህናቸው እና መሣሪያዎቻቸው እጅግ አሪፍ ናቸው።\"",
          "review-3-name": "ቢንያም ከ.",
          "review-3-role": "ዱከም • ቋሚ ሰልጣኝ",
          "visit-heading": "አድራሻዎቻችን",
          "visit-loc-title": "አድራሻ",
          "visit-loc-val": "ዱከም፣ ኦሮሚያ፣ ኢትዮጵያ",
          "visit-hours-title": "የስራ ሰዓት",
          "visit-hours-val": "ከሰኞ እስከ እሁድ በቀን 12 ሰዓታት ክፍት ነው",
          "visit-phone-title": "ስልክ",
          "visit-cta-wa": "በ WhatsApp ያነጋግሩን",
          "visit-cta-tg": "Telegram",
          "btn-maps": "Google Maps",
          "btn-copy": "ኮፒ",
          "toast-copied": "የስልክ ቁጥር ኮፒ ተደርጓል!",
          "faq-heading": "ተደጋጋሚ ጥያቄዎች",
          "faq-subtext": "በዱከም በሚገኘው ክሮውን ጅም (CROWN GYM) ለመመዝገብ እና ለመሰልጠን ማወቅ የሚፈልጉት ሙሉ መረጃ።",
          "faq-q1": "ክሮውን ጅም በዱከም የት ይገኛል?",
          "faq-a1": "ክሮውን ጅም በዱከም ከተማ፣ ኦሮሚያ ውስጥ ምቹ ቦታ ላይ ይገኛል። ትክክለኛውን አድራሻና አቅጣጫ ለማግኘት በWhatsApp (+251 999 087 712) በቀጥታ ሊያገኙን ይችላሉ።",
          "faq-q2": "የክሮውን ጅም የስራ እና የስልጠና ሰዓት ስንት ነው?",
          "faq-a2": "ከሰኞ እስከ እሁድ በቀን ለ12 ሰዓታት በሁለት ክፍለ-ጊዜዎች ክፍት ነው፡ የጧት ክፍለ-ጊዜ ከጧቱ 6:30 – 10:00 እንዲሁም የምሽት ክፍለ-ጊዜ ከሰዓት 3:00 – 10:00 ማታ።",
          "faq-q3": "በክሮውን ጅም የአባልነት ክፍያ ዋጋ ስንት ነው?",
          "faq-a3": "ተመጣጣኝ አማራጮች አሉን፡ የቀን ማሰልጠኛ 150 ብር፣ ወርሃዊ አባልነት 1,500 ብር (በቀን 50 ብር ብቻ)፣ የ3 ወር እቅድ 4,000 ብር (የ500 ብር ቅናሽ) እና የ6 ወር እቅድ 7,500 ብር (የ1,500 ብር ቅናሽ — በወር 1,250 ብር ብቻ)።",
          "faq-q4": "ጀማሪዎች ያለ ቅድመ ልምድ ክሮውን ጅም መቀላቀል ይችላሉ?",
          "faq-a4": "አዎ፣ በእርግጥ! ክሮውን ጅም ለጀማሪዎች እጅግ ምቹ ነው። ሰራተኞቻችን የመሣሪያዎች አጠቃቀም መመሪያ፣ መሰረታዊ የስልጠና ድጋፍ እና ሞቅ ያለ አቀባበል ያደርጉልዎታል።",
          "faq-q5": "በጅም ውስጥ ምን ምን መሣሪያዎች እና መገልገያዎች ይገኛሉ?",
          "faq-a5": "ክሮውን ጅም ሙሉ የክብደት ማንሻዎች (ዳምብሎች፣ ባርቤሎች)፣ የጡንቻ ማዳበሪያ መሣሪያዎች፣ የካርዲዮ ማሰልጠኛ ክፍል (ትሬድሚሎች)፣ እንዲሁም አስተማማኝ የእቃ ማስቀመጫ ሎከሮች እና የልብስ መቀየሪያ ክፍሎች አሉት።",
          "final-cta-heading": "የአካል ብቃት ጉዞዎን ለመጀመር ዝግጁ ነዎት?",
          "final-cta-desc": "ከግብዎ እና ከበጀትዎ ጋር የሚስማማውን የአባልነት እቅድ ይምረጡ። ለመጀመር ክሮውን ጅምን (CROWN GYM) ያነጋግሩ።",
          "loader-tagline": "STRONGER EVERY DAY.",
          "footer-tagline": "በዱከም፣ ኦሮሚያ የሚገኝ በቀን ከ150 ብር ጀምሮ በተመጣጣኝ ዋጋ የጥንካሬ እና የካርዲዮ ስልጠናዎችን የሚሰጥ ዘመናዊ ጅም ማዕከል",
          "footer-quick-links": "ፈጣን ሊንኮች",
          "footer-contact-title": "አድራሻ",
          "footer-hours-val": "በየቀኑ ክፍት — በቀን ለ12 ሰዓታት",
          "footer-rights": "መብቱ በህግ የተጠበቀ ነው።",
          "fab-label": "WhatsApp",
          "status-open": "አሁን ክፍት ነው • {time} ይዘጋል",
          "status-closing-soon": "በቅርቡ ይዘጋል • {time}",
          "status-closed": "አሁን ዝግ ነው • {time} ይከፍታል",
          "status-closed-tomorrow": "አሁን ዝግ ነው • ነገ {time} ይከፍታል",
          "time-open-morning": "6:30 ጧት",
          "time-close-morning": "10:00 ጧት",
          "time-open-evening": "3:00 ከሰዓት",
          "time-close-evening": "10:00 ማታ",
          "wa-default": "ጤና ይስጥልኝ ክሮውን ጅም (CROWN GYM)፣ ድህረ ገጻችሁን አይቼ ስለ አባልነት ለመጠየቅ ፈልጌ ነበር።",
          "wa-plan": "ጤና ይስጥልኝ ክሮውን ጅም (CROWN GYM)፣ በድህረ ገጻችሁ ላይ ያየሁትን የ{plan} አባልነት ({price} ብር) መውሰድ እፈልጋለሁ።"
    }
  };

  /* â”€â”€ 2. Mark JS as available â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  document.documentElement.classList.add("js-loaded");

  const header = document.querySelector(".site-header");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobileScreen = window.matchMedia("(max-width: 767px)").matches;
  const isDataSaver = navigator.connection && (navigator.connection.saveData || navigator.connection.effectiveType === "2g" || navigator.connection.effectiveType === "3g");
  const heroVideo = document.querySelector(".hero-video");

  if (heroVideo) {
    if (prefersReducedMotion || isMobileScreen || isDataSaver) {
      heroVideo.pause();
      heroVideo.removeAttribute("autoplay");
      heroVideo.preload = "none";
    } else {
      heroVideo.preload = "metadata";
      heroVideo.addEventListener("loadeddata", function () {
        heroVideo.classList.add("is-ready");
      }, { once: true });
    }
  }

  if (header) {
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* â”€â”€ 3. Footer year â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  const yearEl = document.getElementById("footer-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* â”€â”€ 4. Current Language State â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  let currentLang = "en";

  function buildWaUrl(message) {
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(message);
  }

  function refreshWaLinks() {
    const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
    const links = document.querySelectorAll('a[href*="wa.me"]');

    links.forEach(link => {
      const plan = link.getAttribute("data-plan");
      const price = link.getAttribute("data-price");
      let msg;

      if (plan && price) {
        const planKeyMap = {
          "Daily Pass": "plan-daily-title",
          "Monthly": "plan-monthly-title",
          "3 Months": "plan-3m-title",
          "6 Months": "plan-6m-title"
        };
        const localizedPlan = planKeyMap[plan] && dict[planKeyMap[plan]] ? dict[planKeyMap[plan]] : plan;
        msg = dict["wa-plan"].replace("{plan}", localizedPlan).replace("{price}", price);
      } else {
        msg = dict["wa-default"];
      }

      link.href = buildWaUrl(msg);
    });
  }

  /* â”€â”€ 5. Live Gym Status (Ethiopia Local Time UTC+3) â”€â”€â”€â”€ */
  function getEthiopiaDate() {
    const now = new Date();
    // Convert current user local time to UTC, then add 3 hours for East Africa Time (EAT)
    const utcMs = now.getTime() + (now.getTimezoneOffset() * 60000);
    return new Date(utcMs + (3 * 3600000));
  }

  function updateGymStatus() {
    const etDate = getEthiopiaDate();
    const nowMins = etDate.getHours() * 60 + etDate.getMinutes();
    const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

    // Convert each session boundary to total minutes for easy comparison
    const sessions = GYM_SESSIONS.map(s => ({
      openMins:  s.openH  * 60 + s.openM,
      closeMins: s.closeH * 60 + s.closeM
    }));

    const CLOSING_SOON_MINS = 60; // warn 60 min before close

    let state = "is-closed";
    let statusText = "";

    // Check if currently inside any session
    let activeSession = null;
    for (let i = 0; i < sessions.length; i++) {
      if (nowMins >= sessions[i].openMins && nowMins < sessions[i].closeMins) {
        activeSession = i;
        break;
      }
    }

    if (activeSession !== null) {
      const s = sessions[activeSession];
      const sessionKey = activeSession === 0 ? "morning" : "evening";
      const closeTimeStr = dict["time-close-" + sessionKey];
      const minsUntilClose = s.closeMins - nowMins;

      if (minsUntilClose <= CLOSING_SOON_MINS) {
        state = "is-closing-soon";
        statusText = dict["status-closing-soon"].replace("{time}", closeTimeStr);
      } else {
        state = "is-open";
        statusText = dict["status-open"].replace("{time}", closeTimeStr);
      }
    } else {
      // Closed – find the next session opening
      state = "is-closed";
      let nextSession = null;
      for (let i = 0; i < sessions.length; i++) {
        if (nowMins < sessions[i].openMins) {
          nextSession = i;
          break;
        }
      }

      if (nextSession !== null) {
        // Opens later today (either morning or evening session)
        const sessionKey = nextSession === 0 ? "morning" : "evening";
        const openTimeStr = dict["time-open-" + sessionKey];
        statusText = dict["status-closed"].replace("{time}", openTimeStr);
      } else {
        // Past all sessions today – opens tomorrow at morning session
        const openTimeStr = dict["time-open-morning"];
        statusText = dict["status-closed-tomorrow"].replace("{time}", openTimeStr);
      }
    }

    // Update all status pills on the page
    const pills = document.querySelectorAll(".live-status-pill");
    pills.forEach(pill => {
      pill.classList.remove("is-open", "is-closing-soon", "is-closed");
      pill.classList.add(state);
    });

    // Update text elements (hero and visit)
    ["status-text-hero", "status-text-visit"].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.textContent = statusText;
      }
    });
  }

  /* â”€â”€ Calculator state – declared here so setLanguage() can safely call
     updateCalculatorDisplay() before section 9 initialises the function body. */
  let currentFreq = "3";
  let updateCalculatorDisplay = function () {};

  function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) {
      lang = "en";
    }
    currentLang = lang;
    document.documentElement.lang = lang;

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore private browsing localStorage errors */
    }

    // Sync URL query param (?lang=om / ?lang=am) so links can be shared and hreflang works
    try {
      if (window.history && window.history.replaceState) {
        const url = new URL(window.location.href);
        if (lang === "en") {
          url.searchParams.delete("lang");
        } else {
          url.searchParams.set("lang", lang);
        }
        window.history.replaceState({}, "", url.toString());
      }
    } catch (e) {}

    // Update active state on language buttons
    const langButtons = document.querySelectorAll("[data-lang-choice]");
    langButtons.forEach(btn => {
      const isActive = btn.getAttribute("data-lang-choice") === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    // Translate DOM elements
    const dict = TRANSLATIONS[lang];
    const translatableElements = document.querySelectorAll("[data-i18n]");
    translatableElements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        if (dict[key].includes("<")) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // Refresh dynamic WhatsApp links with localized messages
    refreshWaLinks();

    // Re-render live gym status with the new language
    updateGymStatus();

    // Re-render savings calculator with current language
    if (typeof updateCalculatorDisplay === "function") {
      updateCalculatorDisplay();
    }
  }

  // Setup click listeners on all language switcher buttons
  document.addEventListener("click", function (e) {
    const btn = e.target.closest("[data-lang-choice]");
    if (btn) {
      const selectedLang = btn.getAttribute("data-lang-choice");
      setLanguage(selectedLang);
    }
  });

  const sectionLinks = document.querySelectorAll('.primary-nav a[href^="#"]');
  const sections = [...document.querySelectorAll("main section[id]")];
  const updateActiveNav = () => {
    const offset = window.scrollY + 140;
    let activeId = sections[0]?.id || "hero";

    sections.forEach(section => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      if (offset >= top && offset < bottom) {
        activeId = section.id;
      }
    });

    sectionLinks.forEach(link => {
      const href = link.getAttribute("href");
      const isActive = href === "#" + activeId;
      link.classList.toggle("is-active", isActive);
      link.setAttribute("aria-current", isActive ? "page" : "false");
    });
  };

  updateActiveNav();
  window.addEventListener("scroll", updateActiveNav, { passive: true });

  // Determine initial language: URL query parameter (?lang=om / ?lang=am) > localStorage > 'en'
  let initialLang = "en";
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const queryLang = urlParams.get("lang");
    const saved = localStorage.getItem(STORAGE_KEY);

    if (queryLang && TRANSLATIONS[queryLang]) {
      initialLang = queryLang;
    } else if (saved && TRANSLATIONS[saved]) {
      initialLang = saved;
    }
  } catch (e) {}

  setLanguage(initialLang);

  // Periodically refresh the status every 30 seconds
  setInterval(updateGymStatus, 30000);

  /* â”€â”€ 6. Mobile hamburger menu â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("primary-nav");

  function openMenu() {
    nav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close navigation menu");
    const firstLink = nav.querySelector("a, button");
    if (firstLink) {
      firstLink.focus();
    }
  }

  function closeMenu() {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const isOpen = nav.classList.contains("is-open");
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close on nav link click
    const navLinks = nav.querySelectorAll("a");
    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        closeMenu();
        toggle.focus();
      });
    });

    // Close on Escape key
    document.addEventListener("keydown", function (e) {
      if ((e.key === "Escape" || e.keyCode === 27) && nav.classList.contains("is-open")) {
        closeMenu();
        toggle.focus();
      }
    });

    // Close on outside click
    document.addEventListener("click", function (e) {
      if (nav.classList.contains("is-open") &&
          !nav.contains(e.target) &&
          !toggle.contains(e.target)) {
        closeMenu();
      }
    });
  }

  /* â”€â”€ 7. Scroll reveal (IntersectionObserver) â”€â”€â”€â”€ */
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const revealEls = document.querySelectorAll(".reveal");

  function triggerImmediateReveal() {
    const vh = window.innerHeight;
    revealEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < vh + 150 && rect.bottom > -150) {
        el.classList.add("is-visible");
      }
    });
  }

  if (!prefersReduced && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "200px 0px 100px 0px", threshold: 0.01 });

    revealEls.forEach(el => observer.observe(el));
    triggerImmediateReveal();
    window.addEventListener("scroll", triggerImmediateReveal, { passive: true });
  } else {
    revealEls.forEach(el => el.classList.add("is-visible"));
  }

  // If page loaded with a hash (e.g. #visit, #pricing), reveal target immediately
  if (window.location.hash) {
    try {
      const target = document.querySelector(window.location.hash);
      if (target) {
        target.querySelectorAll(".reveal").forEach(el => el.classList.add("is-visible"));
        if (target.classList.contains("reveal")) target.classList.add("is-visible");
      }
    } catch (e) {}
  }

  /* â”€â”€ 8. Runtime & UI Loaders â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  const uiLoader = document.getElementById("ui-loader");
  const loaderFill = document.getElementById("ui-loader-fill");
  const loaderPercent = document.getElementById("ui-loader-percent");
  const loaderStatus = document.getElementById("ui-loader-status");

  if (uiLoader) {
    let progress = 15;
    let targetProgress = 35;
    let isFinished = false;

    const renderProgress = () => {
      const clamped = Math.min(Math.max(progress, 0), 100);
      if (loaderFill) loaderFill.style.width = clamped + "%";
      if (loaderPercent) loaderPercent.textContent = Math.floor(clamped) + "%";
      const track = uiLoader.querySelector(".ui-loader-track");
      if (track) track.setAttribute("aria-valuenow", Math.floor(clamped));
    };

    renderProgress();

    const stepInterval = setInterval(() => {
      if (progress < targetProgress) {
        progress += (targetProgress - progress) * 0.22 + 0.4;
        if (progress > targetProgress) progress = targetProgress;
        renderProgress();
      }
    }, 25);

    targetProgress = 70;

    const finishLoading = () => {
      if (isFinished) return;
      isFinished = true;
      targetProgress = 100;
      progress = 100;
      renderProgress();
      if (loaderStatus) loaderStatus.textContent = "Ready";

      setTimeout(() => {
        clearInterval(stepInterval);
        uiLoader.classList.add("is-loaded");
        document.querySelectorAll("#hero .reveal").forEach(el => el.classList.add("is-visible"));
      }, 100);
    };

    if (document.readyState === "interactive" || document.readyState === "complete") {
      finishLoading();
    } else {
      document.addEventListener("DOMContentLoaded", finishLoading, { once: true });
      window.addEventListener("load", finishLoading, { once: true });
      setTimeout(finishLoading, 450);
    }
  }

  // Runtime Scroll Progress Bar
  const scrollBar = document.getElementById("scroll-progress-bar");
  if (scrollBar) {
    let ticking = false;
    const updateScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      scrollBar.style.width = Math.min(Math.max(pct, 0), 100) + "%";
      ticking = false;
    };
    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    }, { passive: true });
    updateScroll();
  }

  // Progressive image fill for gallery
  const galleryImgs = document.querySelectorAll(".gallery-item img");
  galleryImgs.forEach(img => {
    const parent = img.closest(".gallery-item");
    const onImgReady = () => {
      img.classList.add("is-loaded");
      if (parent) parent.classList.add("img-loaded");
    };
    if (img.complete && img.naturalWidth > 0) {
      onImgReady();
    } else {
      img.addEventListener("load", onImgReady, { once: true });
      img.addEventListener("error", onImgReady, { once: true });
    }
  });

  /* â”€â”€ 9. Interactive Savings Calculator â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  const calcContainer = document.getElementById("savings-calc");
  if (calcContainer) {
    const freqBtns = calcContainer.querySelectorAll(".calc-freq-btn");
    const dailyTotalEl = document.getElementById("calc-daily-total");
    const dailyNoteEl = document.getElementById("calc-daily-note");
    const memberTotalEl = document.getElementById("calc-member-total");
    const savingsValEl = document.getElementById("calc-savings-val");
    const savingsSubEl = document.getElementById("calc-savings-sub");
    const savingsBanner = document.getElementById("calc-savings-banner");

    const FREQ_DATA = {
      "2": { visits: 8,  daily: 1200, member: 1500, save: -300, pct: 0 },
      "3": { visits: 14, daily: 2100, member: 1500, save: 600,  pct: 29 },
      "5": { visits: 22, daily: 3300, member: 1500, save: 1800, pct: 55 }
    };

    updateCalculatorDisplay = function () {
      const data = FREQ_DATA[currentFreq] || FREQ_DATA["3"];
      freqBtns.forEach(btn => {
        const isActive = btn.getAttribute("data-freq") === String(currentFreq);
        btn.classList.toggle("is-active", isActive);
        btn.setAttribute("aria-pressed", isActive ? "true" : "false");
      });

      if (dailyTotalEl) dailyTotalEl.textContent = data.daily.toLocaleString();
      if (dailyNoteEl) {
        if (currentLang === "am") {
          dailyNoteEl.textContent = data.visits + " ቀናት × 150 ብር";
        } else if (currentLang === "om") {
          dailyNoteEl.textContent = data.visits + " daawwannaa × 150 ETB";
        } else {
          dailyNoteEl.textContent = data.visits + " visits × 150 ETB";
        }
      }
      if (memberTotalEl) memberTotalEl.textContent = data.member.toLocaleString();

      if (data.save > 0) {
        if (savingsBanner) savingsBanner.classList.remove("is-tip");
        if (savingsValEl) {
          if (currentLang === "am") {
            savingsValEl.textContent = data.save.toLocaleString() + " ብር በየወሩ ይቆጥባሉ";
          } else if (currentLang === "om") {
            savingsValEl.textContent = data.save.toLocaleString() + " ETB ji'atti ni qusattu";
          } else {
            savingsValEl.textContent = data.save.toLocaleString() + " ETB every month";
          }
        }
        if (savingsSubEl) {
          if (currentLang === "am") {
            savingsSubEl.textContent = "ከቀን ክፍያ " + data.pct + "% ቅናሽ";
          } else if (currentLang === "om") {
            savingsSubEl.textContent = "Kaffaltii guyyaa irraa " + data.pct + "% qusannaa";
          } else {
            savingsSubEl.textContent = "Save " + data.pct + "% vs paying daily";
          }
        }
      } else {
        if (savingsBanner) savingsBanner.classList.add("is-tip");
        if (savingsValEl) {
          if (currentLang === "am") {
            savingsValEl.textContent = "ተጨማሪ 2 ቀናት ቢሰለጥኑ ወርሃዊው እቅድ የበለጠ ያተርፋል";
          } else if (currentLang === "om") {
            savingsValEl.textContent = "Yeroo 2 dabalataan leenji'uun kaffaltii ji'aa caalchisa";
          } else {
            savingsValEl.textContent = "Train just 2 more times to break even on Monthly";
          }
        }
        if (savingsSubEl) {
          if (currentLang === "am") {
            savingsSubEl.textContent = "በወር 10 ቀናት = 1,500 ብር (ሙሉ 30 ቀናት ያልተገደበ)";
          } else if (currentLang === "om") {
            savingsSubEl.textContent = "Ji'atti daawwannaa 10 = 1,500 ETB (guyyaa 30 guutuu)";
          } else {
            savingsSubEl.textContent = "10 visits/month = 1,500 ETB (gives you 30 days unlimited)";
          }
        }
      }
    };

    freqBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        currentFreq = btn.getAttribute("data-freq");
        updateCalculatorDisplay();
      });
    });

    updateCalculatorDisplay();
  }

  /* â”€â”€ 10. Gallery Lightbox Modal â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  const lightbox = document.getElementById("image-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxBackdrop = document.getElementById("lightbox-backdrop");
  let lastFocusedTrigger = null;

  function openLightbox(src, caption, triggerEl) {
    if (!lightbox || !lightboxImg) return;
    lastFocusedTrigger = triggerEl;
    lightboxImg.src = src;
    lightboxImg.alt = caption || "Enlarged gym photo";
    if (lightboxCaption) lightboxCaption.textContent = caption || "";
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-locked");
    if (lightboxClose) lightboxClose.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-locked");
    if (lastFocusedTrigger) {
      lastFocusedTrigger.focus();
      lastFocusedTrigger = null;
    }
  }

  document.querySelectorAll(".gallery-zoomable").forEach(item => {
    const trigger = () => {
      const src = item.getAttribute("data-lightbox-src") || item.querySelector("img")?.src;
      const caption = item.getAttribute("data-lightbox-caption") || item.querySelector("img")?.alt;
      if (src) openLightbox(src, caption, item);
    };

    item.addEventListener("click", trigger);
    item.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        trigger();
      }
    });
  });

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && lightbox && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });

  /* â”€â”€ 11. Copy Phone Number with Toast â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  const copyBtn = document.getElementById("btn-copy-num");
  const toast = document.getElementById("toast-notification");
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    const toastText = document.getElementById("toast-text");
    if (toastText && message) toastText.textContent = message;
    toast.classList.add("is-visible");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 2800);
  }

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const phoneNumber = "0999087712";
      const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
      const msg = dict["toast-copied"] || "Phone number copied to clipboard!";

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(phoneNumber).then(() => {
          showToast(msg);
        }).catch(() => {
          showToast(phoneNumber);
        });
      } else {
        const tempInput = document.createElement("input");
        tempInput.value = phoneNumber;
        document.body.appendChild(tempInput);
        tempInput.select();
        try {
          document.execCommand("copy");
          showToast(msg);
        } catch (e) {
          showToast(phoneNumber);
        }
        document.body.removeChild(tempInput);
      }
    });
  }

}());




