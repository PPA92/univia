export type Language = 'en' | 'my';

export const languageLabels: Record<Language, string> = {
  en: 'English',
  my: 'မြန်မာ',
};

export type TicketOptionCopy = {
  id: 'domestic' | 'international' | 'group' | 'corporate';
  title: LocalizedText;
  text: LocalizedText;
};

export type LocalizedText = { en: string; my: string };

export type PageCopy = {
  home: { eyebrow: string; title: string; description: string; explore: string; bookFlight: string; destinations: string; destinationsDescription: string; destinationsEyebrow: string; viewAllDestinations: string; reasons: string; reasonsDescription: string; reasonsEyebrow: string; services: string; servicesDescription: string; servicesEyebrow: string; viewAllServices: string; promoEyebrow: string; videoPlaceholder: string; videoLink: string; testimonials: string; testimonialsTitle: string; testimonialsDescription: string; faq: string; faqTitle: string; faqDescription: string; contactEyebrow: string; contactTitle: string; contactDescription: string; contactCta: string; heroStamp: string };
  about: { eyebrow: string; title: string; intro: string; foundation: string; placeholder: string; cta: string; mission: string; missionText: string; vision: string; visionText: string; values: string; valuesText: string; why: string; whyTitle: string; whyText: string };
  tickets: { eyebrow: string; title: string; description: string; note: string; inquiryOnly: string; contact: string; contactUs: string };
  destinations: { eyebrow: string; title: string; description: string; inquiry: string; ctaTitle: string; ctaDescription: string };
  services: { eyebrow: string; title: string; description: string; contact: string; contactDescription: string; contactCta: string };
  faq: { eyebrow: string; title: string; description: string; contact: string; contactCta: string };
  contact: { eyebrow: string; title: string; description: string; channels: string; whatsapp: string; email: string; address: string; hours: string; facebook: string; facebookPlaceholder: string; inquiryNote: string };
};

export type RouteMetadata = { title: string; description: string };

export type TranslationDictionary = {
  navigation: {
    home: string;
    about: string;
    airTickets: string;
    destinations: string;
    services: string;
    faq: string;
    contact: string;
    language: string;
  };
  common: {
    explore: string;
    inquire: string;
    flightInquiry: string;
    learnMore: string;
    sendWhatsApp: string;
    sendEmail: string;
    openMenu: string;
    closeMenu: string;
    required: string;
    optional: string;
    placeholderNotice: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    exploreDestinations: string;
    bookFlight: string;
  };
  inquiry: {
    title: string;
    oneWay: string;
    roundTrip: string;
    from: string;
    to: string;
    departureDate: string;
    returnDate: string;
    passengers: string;
    travelClass: string;
    economy: string;
    premiumEconomy: string;
    business: string;
    firstClass: string;
    submit: string;
    generatedLink: string;
    errors: {
      route: string;
      sameRoute: string;
      departure: string;
      returnRequired: string;
      returnBeforeDeparture: string;
      passengers: string;
      travelClass: string;
      whatsappUnavailable: string;
    };
  };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    validation: string;
    errors: { name: string; email: string; message: string; configuration: string };
    success: string;
    mailtoAlternative: string;
  };
  metadata: {
    locale: string;
    siteTitle: string;
    siteDescription: string;
    routes: Record<string, RouteMetadata>;
  };
  faq: {
    title: string;
    description: string;
  };
  footer: {
    explore: string;
    contact: string;
    placeholder: string;
    copyright: string;
  };
  pages: PageCopy;
};

export const ticketOptions: TicketOptionCopy[] = [
  { id: 'domestic', title: { en: 'Domestic flights', my: 'ပြည်တွင်းလေယာဉ်များ' }, text: { en: 'Share your preferred route and dates for travel within Myanmar.', my: 'မြန်မာနိုင်ငံအတွင်း ခရီးစဉ်အတွက် နှစ်သက်သောလမ်းကြောင်းနှင့် ရက်စွဲများကို မျှဝေပါ။' } },
  { id: 'international', title: { en: 'International flights', my: 'နိုင်ငံတကာလေယာဉ်များ' }, text: { en: 'Start a conversation about routes beyond the country.', my: 'နိုင်ငံအပြင်ဘက် ခရီးစဉ်လမ်းကြောင်းများအကြောင်း စကားစတင်ပြောပါ။' } },
  { id: 'group', title: { en: 'Group journeys', my: 'အဖွဲ့လိုက် ခရီးစဉ်များ' }, text: { en: 'Include your group size and travel context in the inquiry.', my: 'မေးမြန်းမှုတွင် အဖွဲ့အရွယ်အစားနှင့် ခရီးစဉ်အခြေအနေကို ထည့်ပါ။' } },
  { id: 'corporate', title: { en: 'Corporate travel', my: 'ကုမ္ပဏီခရီးစဉ်' }, text: { en: 'Discuss practical requirements for business travel planning.', my: 'စီးပွားရေးခရီးစဉ် စီစဉ်မှုအတွက် လိုအပ်ချက်များကို ဆွေးနွေးပါ။' } },
];

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    navigation: {
      home: 'Home',
      about: 'About',
      airTickets: 'Air Tickets',
      destinations: 'Destinations',
      services: 'Services',
      faq: 'FAQ',
      contact: 'Contact',
      language: 'Language',
    },
    common: {
      explore: 'Explore destinations',
      inquire: 'Ask about this journey',
      flightInquiry: 'Flight inquiry',
      learnMore: 'Learn more',
      sendWhatsApp: 'Send via WhatsApp',
      sendEmail: 'Send via email',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      required: 'Required',
      optional: 'Optional',
      placeholderNotice: 'Placeholder details require configuration before launch.',
    },
    hero: {
      eyebrow: 'Travel & airline ticketing',
      title: 'Your Journey. Our Commitment.',
      description:
        'Discover the world with UNIVIA. From domestic journeys to international adventures, we make flight inquiries simple and convenient.',
      exploreDestinations: 'Explore destinations',
      bookFlight: 'Book your flight',
    },
    inquiry: {
      title: 'Start a flight inquiry',
      oneWay: 'One way',
      roundTrip: 'Round trip',
      from: 'From',
      to: 'To',
      departureDate: 'Departure date',
      returnDate: 'Return date',
      passengers: 'Passengers',
      travelClass: 'Travel class',
      economy: 'Economy',
      premiumEconomy: 'Premium economy',
      business: 'Business',
      firstClass: 'First class',
      submit: 'Send flight inquiry via WhatsApp',
      generatedLink: 'Open generated WhatsApp inquiry',
      errors: {
        route: 'Enter both departure and arrival locations.',
        sameRoute: 'Departure and arrival locations must be different.',
        departure: 'Choose a departure date.',
        returnRequired: 'Choose a return date for a round trip.',
        returnBeforeDeparture: 'Return date must be on or after departure date.',
        passengers: 'Enter between 1 and 9 passengers.',
        travelClass: 'Choose a travel class.',
        whatsappUnavailable: 'WhatsApp is not configured yet. Replace the placeholder number in app/config.ts before launch.',
      },
    },
    contact: {
      title: 'Start a conversation',
      name: 'Name',
      email: 'Email',
      message: 'How can we help?',
      submit: 'Prepare inquiry',
      validation: 'Complete the required fields with a valid email address.',
      errors: { name: 'Enter your name.', email: 'Enter a valid email address.', message: 'Tell us how we can help.', configuration: 'Contact channels are not configured yet. Please replace the placeholders in app/config.ts before launch.' },
      success: 'Your inquiry link is ready. Choose WhatsApp or email below.',
      mailtoAlternative: 'Prefer email? Open a mailto inquiry',
    },
    faq: {
      title: 'Frequently asked questions',
      description: 'A few useful starting points before you contact UNIVIA.',
    },
    footer: {
      explore: 'Explore',
      contact: 'Configurable contact',
      placeholder: 'Placeholder contact details require configuration.',
      copyright: 'All rights reserved.',
    },
    metadata: {
      locale: 'en_US',
      siteTitle: 'UNIVIA | Your Journey. Our Commitment.',
      siteDescription: 'A premium travel and airline ticket inquiry experience for domestic and international journeys.',
      routes: {
        '/': { title: 'UNIVIA | Your Journey. Our Commitment.', description: 'Discover domestic and international travel with UNIVIA.' },
        '/about': { title: 'About UNIVIA | Your Journey. Our Commitment.', description: 'Learn about the configurable UNIVIA travel and airline ticketing experience.' },
        '/air-tickets': { title: 'Air ticket inquiries | UNIVIA', description: 'Ask UNIVIA about domestic, international, one-way, round-trip, and group flights.' },
        '/destinations': { title: 'Destinations | UNIVIA', description: 'Browse destination ideas for your next UNIVIA flight inquiry.' },
        '/services': { title: 'Services | UNIVIA', description: 'Explore UNIVIA travel and airline ticket inquiry services.' },
        '/faq': { title: 'FAQ | UNIVIA', description: 'Find answers to common UNIVIA travel inquiry questions.' },
        '/contact': { title: 'Contact UNIVIA', description: 'Prepare a travel or airline ticket inquiry for UNIVIA.' },
      },
    },
    pages: {
      home: { eyebrow: 'Travel & airline ticketing', title: 'Your Journey. Our Commitment.', description: 'Discover the world with UNIVIA. From domestic journeys to international adventures, we make flight inquiries simple, convenient, and clear.', explore: 'Explore destinations', bookFlight: 'Book your flight', destinationsEyebrow: 'Go further', destinations: 'Popular destinations', destinationsDescription: 'A considered starting point for domestic and international travel planning.', viewAllDestinations: 'View all destinations', reasonsEyebrow: 'Why UNIVIA', reasons: 'Why choose UNIVIA', reasonsDescription: 'A clear, conversation-led way to begin planning your next journey.', servicesEyebrow: 'Considered support', services: 'Our services', servicesDescription: 'Flexible support for the routes and travel plans you are considering.', viewAllServices: 'See all services', promoEyebrow: 'The thoughtful way to travel', videoPlaceholder: 'Optional promotional video placeholder', videoLink: 'Watch the promotional video', testimonials: 'Customer stories', testimonialsTitle: 'Feedback will be added with approval.', testimonialsDescription: 'Approved customer feedback will be added here when available.', faq: 'Questions before you go?', faqTitle: 'Useful answers before you go.', faqDescription: 'Find a few useful starting points, then continue the conversation when you are ready.', contactEyebrow: 'Your next step', contactTitle: 'Ready to plan your next journey?', contactDescription: 'Share what you need and begin an inquiry through your preferred channel.', contactCta: 'Contact UNIVIA', heroStamp: 'Thoughtful travel planning' },
      about: { eyebrow: 'About UNIVIA', title: 'A better way to begin a journey.', intro: 'UNIVIA is a configurable travel and airline ticketing experience for people planning domestic and international journeys.', foundation: 'A configurable foundation', placeholder: 'Company details, operating information, and contact channels remain clearly marked placeholders until supplied by the Univia team.', cta: 'Talk to UNIVIA', mission: 'Mission', missionText: 'Make travel planning clearer and more convenient through thoughtful conversations.', vision: 'Vision', visionText: 'Connect people to possibilities around the world, one considered inquiry at a time.', values: 'Values', valuesText: 'Professional, modern, customer-focused, and careful with the information we share.', why: 'Why UNIVIA', whyTitle: 'A clear starting point, without overpromising.', whyText: 'Use one clear starting point for route questions, travel options, and the next step. This website does not represent live availability or pricing.' },
      tickets: { eyebrow: 'Air tickets', title: 'Your route starts here.', description: 'Ask about domestic or international flights, one-way or round-trip travel, and group journeys through a simple inquiry.', note: 'This is an inquiry service. It does not show live availability or pricing, and no booking is completed on this website.', inquiryOnly: 'Inquiry only', contact: 'Need another kind of assistance?', contactUs: 'Contact us' },
      destinations: { eyebrow: 'Destinations', title: 'Places worth going.', description: 'Browse a selection of destinations to use as a starting point for your next flight inquiry.', inquiry: 'Ask about a destination', ctaTitle: 'Have a destination in mind?', ctaDescription: 'Tell us your preferred route and dates to start an inquiry.' },
      services: { eyebrow: 'Our services', title: 'Support for every kind of trip.', description: 'Explore the ways UNIVIA can help you frame a domestic, international, personal, group, or corporate travel inquiry.', contact: 'Talk through your travel plans', contactDescription: 'A short inquiry is enough to begin. Share the context and preferred route.', contactCta: 'Contact UNIVIA' },
      faq: { eyebrow: 'FAQ', title: 'Questions, answered simply.', description: 'Review the common starting points below. Availability, pricing, and company policies are confirmed separately through configured contact channels.', contact: 'Still have a question?', contactCta: 'Contact UNIVIA' },
      contact: { eyebrow: 'Contact UNIVIA', title: 'Let’s start a conversation.', description: 'Use the form to prepare an inquiry, then choose WhatsApp or email. The form does not submit to a backend.', channels: 'Configured contact channels', whatsapp: 'WhatsApp', email: 'Email', address: 'Office address', hours: 'Business hours', facebook: 'Facebook', facebookPlaceholder: '[Configure Facebook URL]', inquiryNote: 'These values are visible configuration placeholders. Replace them before launch.' },
    },
  },
  my: {
    navigation: {
      home: 'ပင်မ',
      about: 'UNIVIA အကြောင်း',
      airTickets: 'လေယာဉ်လက်မှတ်များ',
      destinations: 'ခရီးစဉ်နေရာများ',
      services: 'ဝန်ဆောင်မှုများ',
      faq: 'မေးလေ့ရှိသောမေးခွန်းများ',
      contact: 'ဆက်သွယ်ရန်',
      language: 'ဘာသာစကား',
    },
    common: {
      explore: 'ခရီးစဉ်နေရာများကြည့်ရန်',
      inquire: 'ဤခရီးစဉ်အကြောင်းမေးရန်',
      flightInquiry: 'လေယာဉ်ခရီးစဉ် မေးရန်',
      learnMore: 'ပိုမိုလေ့လာရန်',
      sendWhatsApp: 'WhatsApp ဖြင့်ပို့ရန်',
      sendEmail: 'အီးမေးလ်ဖြင့်ပို့ရန်',
      openMenu: 'မီနူးဖွင့်ရန်',
      closeMenu: 'မီနူးပိတ်ရန်',
      required: 'မဖြစ်မနေ',
      optional: 'ရွေးချယ်နိုင်သည်',
      placeholderNotice: 'စတင်အသုံးမပြုမီ နေရာယူစာသားများကို ပြင်ဆင်ပါ။',
    },
    hero: {
      eyebrow: 'ခရီးသွားနှင့် လေယာဉ်လက်မှတ်ဝန်ဆောင်မှု',
      title: 'သင်၏ခရီး။ ကျွန်ုပ်တို့၏ကတိကဝတ်။',
      description:
        'UNIVIA နှင့်အတူ ကမ္ဘာကိုရှာဖွေပါ။ ပြည်တွင်းခရီးမှ နိုင်ငံတကာစွန့်စားခရီးအထိ လေယာဉ်လက်မှတ်မေးမြန်းမှုကို ရိုးရှင်းလွယ်ကူစေပါသည်။',
      exploreDestinations: 'ခရီးစဉ်နေရာများကြည့်ရန်',
      bookFlight: 'လေယာဉ်ခရီးစဉ်မေးရန်',
    },
    inquiry: {
      title: 'လေယာဉ်ခရီးစဉ် မေးမြန်းရန်',
      oneWay: 'အသွားတစ်ကြောင်း',
      roundTrip: 'အသွားအပြန်',
      from: 'ထွက်ခွာရာ',
      to: 'သွားမည့်နေရာ',
      departureDate: 'ထွက်ခွာမည့်ရက်',
      returnDate: 'ပြန်လာမည့်ရက်',
      passengers: 'ခရီးသည်အရေအတွက်',
      travelClass: 'ခရီးသွားအတန်း',
      economy: 'Economy',
      premiumEconomy: 'Premium Economy',
      business: 'Business',
      firstClass: 'First Class',
      submit: 'WhatsApp ဖြင့် ခရီးစဉ်မေးရန်ပို့ပါ',
      generatedLink: 'ဖန်တီးထားသော WhatsApp မေးမြန်းမှုကိုဖွင့်ရန်',
      errors: {
        route: 'ထွက်ခွာရာနှင့် သွားမည့်နေရာ နှစ်ခုလုံးဖြည့်ပါ။',
        sameRoute: 'ထွက်ခွာရာနှင့် သွားမည့်နေရာ မတူညီရပါ။',
        departure: 'ထွက်ခွာမည့်ရက် ရွေးပါ။',
        returnRequired: 'အသွားအပြန်ခရီးအတွက် ပြန်လာမည့်ရက် ရွေးပါ။',
        returnBeforeDeparture: 'ပြန်လာမည့်ရက်သည် ထွက်ခွာမည့်ရက်နောက်ပိုင်း ဖြစ်ရပါမည်။',
        passengers: 'ခရီးသည် ၁ ဦးမှ ၉ ဦးအထိ ထည့်ပါ။',
        travelClass: 'ခရီးသွားအတန်း ရွေးပါ။',
        whatsappUnavailable: 'WhatsApp ကို မပြင်ဆင်ရသေးပါ။ စတင်အသုံးမပြုမီ app/config.ts တွင် နေရာယူစာသားနံပါတ်ကို ပြင်ဆင်ပါ။',
      },
    },
    contact: {
      title: 'စကားစတင်ပြောကြရအောင်',
      name: 'အမည်',
      email: 'အီးမေးလ်',
      message: 'မည်သို့ကူညီပေးရမလဲ?',
      submit: 'မေးမြန်းမှု ပြင်ဆင်ရန်',
      validation: 'လိုအပ်သောအချက်များကို မှန်ကန်သောအီးမေးလ်ဖြင့် ဖြည့်ပါ။',
      errors: { name: 'အမည်ထည့်ပါ။', email: 'မှန်ကန်သောအီးမေးလ်လိပ်စာ ထည့်ပါ။', message: 'မည်သို့ကူညီပေးရမလဲ ပြောပြပါ။', configuration: 'ဆက်သွယ်ရန်လမ်းကြောင်းများကို မပြင်ဆင်ရသေးပါ။ စတင်အသုံးမပြုမီ app/config.ts ရှိ နေရာယူစာသားများကို ပြင်ဆင်ပါ။' },
      success: 'မေးမြန်းမှုလင့်ခ် အသင့်ဖြစ်ပါပြီ။ WhatsApp သို့မဟုတ် အီးမေးလ်ကို ရွေးပါ။',
      mailtoAlternative: 'အီးမေးလ်အသုံးပြုလိုပါသလား? မေးမြန်းမှုကိုဖွင့်ရန်',
    },
    faq: {
      title: 'မေးလေ့ရှိသော မေးခွန်းများ',
      description: 'UNIVIA ကိုမဆက်သွယ်မီ သိထားနိုင်သော အချက်အလက်အချို့။',
    },
      footer: {
      explore: 'လေ့လာရန်',
      contact: 'ပြင်ဆင်နိုင်သော ဆက်သွယ်ရန်',
      placeholder: 'စတင်အသုံးမပြုမီ ဆက်သွယ်ရန်အချက်အလက်များကို ပြင်ဆင်ပါ။',
      copyright: 'မူပိုင်ခွင့်အားလုံး ရယူထားသည်။',
    },
    metadata: {
      locale: 'my_MM',
      siteTitle: 'UNIVIA | သင်၏ခရီး။ ကျွန်ုပ်တို့၏ကတိကဝတ်။',
      siteDescription: 'ပြည်တွင်းနှင့် နိုင်ငံတကာခရီးများအတွက် UNIVIA ၏ ခရီးသွားနှင့် လေယာဉ်လက်မှတ် မေးမြန်းမှုအတွေ့အကြုံ။',
      routes: {
        '/': { title: 'UNIVIA | သင်၏ခရီး။ ကျွန်ုပ်တို့၏ကတိကဝတ်။', description: 'UNIVIA နှင့် ပြည်တွင်း၊ နိုင်ငံတကာခရီးများကို ရှာဖွေပါ။' },
        '/about': { title: 'UNIVIA အကြောင်း', description: 'UNIVIA ၏ ပြင်ဆင်နိုင်သော ခရီးသွားနှင့် လေယာဉ်လက်မှတ် မေးမြန်းမှုအတွေ့အကြုံ။' },
        '/air-tickets': { title: 'လေယာဉ်လက်မှတ် မေးမြန်းမှု | UNIVIA', description: 'ပြည်တွင်း၊ နိုင်ငံတကာနှင့် အဖွဲ့လိုက် လေယာဉ်ခရီးစဉ်များအကြောင်း UNIVIA ကို မေးမြန်းပါ။' },
        '/destinations': { title: 'ခရီးစဉ်နေရာများ | UNIVIA', description: 'UNIVIA လေယာဉ်ခရီးစဉ် မေးမြန်းမှုအတွက် ခရီးစဉ်နေရာများကို ကြည့်ပါ။' },
        '/services': { title: 'ဝန်ဆောင်မှုများ | UNIVIA', description: 'UNIVIA ၏ ခရီးသွားနှင့် လေယာဉ်လက်မှတ် မေးမြန်းမှုဝန်ဆောင်မှုများ။' },
        '/faq': { title: 'မေးလေ့ရှိသောမေးခွန်းများ | UNIVIA', description: 'UNIVIA ခရီးသွား မေးမြန်းမှုများအတွက် အဖြေများကို ရှာဖွေပါ။' },
        '/contact': { title: 'UNIVIA သို့ ဆက်သွယ်ရန်', description: 'UNIVIA အတွက် ခရီးသွား သို့မဟုတ် လေယာဉ်လက်မှတ် မေးမြန်းမှု ပြင်ဆင်ပါ။' },
      },
    },
    pages: {
      home: { eyebrow: 'ခရီးသွားနှင့် လေယာဉ်လက်မှတ်ဝန်ဆောင်မှု', title: 'သင်၏ခရီး။ ကျွန်ုပ်တို့၏ကတိကဝတ်။', description: 'UNIVIA နှင့်အတူ ကမ္ဘာကိုရှာဖွေပါ။ ပြည်တွင်းခရီးမှ နိုင်ငံတကာခရီးအထိ လေယာဉ်ခရီးစဉ် မေးမြန်းမှုကို ရိုးရှင်းလွယ်ကူစေပါသည်။', explore: 'ခရီးစဉ်နေရာများကြည့်ရန်', bookFlight: 'လေယာဉ်ခရီးစဉ်မေးရန်', destinationsEyebrow: 'ပိုမိုဝေးဝေးသွားပါ', destinations: 'လူကြိုက်များသော ခရီးစဉ်နေရာများ', destinationsDescription: 'ပြည်တွင်းနှင့် နိုင်ငံတကာခရီးစဉ် စီစဉ်ရန် အစပြုနိုင်သော နေရာများ။', viewAllDestinations: 'ခရီးစဉ်နေရာအားလုံးကြည့်ရန်', reasonsEyebrow: 'UNIVIA ကိုရွေးချယ်ရန်', reasons: 'UNIVIA ကို ရွေးချယ်ရန်အကြောင်း', reasonsDescription: 'သင်၏နောက်ခရီးကို စီစဉ်ရန် ရှင်းလင်းသော ဆွေးနွေးမှုအခြေပြု နည်းလမ်း။', servicesEyebrow: 'စဉ်းစားပေးသော ကူညီမှု', services: 'ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများ', servicesDescription: 'သင်စဉ်းစားနေသော ခရီးစဉ်များနှင့် အစီအစဉ်များအတွက် လိုက်လျောညီထွေသော ကူညီမှု။', viewAllServices: 'ဝန်ဆောင်မှုအားလုံးကြည့်ရန်', promoEyebrow: 'စဉ်းစားပေးထားသော ခရီးသွားနည်းလမ်း', videoPlaceholder: 'ရွေးချယ်နိုင်သော ခရီးသွားဗီဒီယို နေရာယူစာသား', videoLink: 'ခရီးသွားဗီဒီယိုကို ကြည့်ရန်', testimonials: 'ဖောက်သည်အတွေ့အကြုံများ', testimonialsTitle: 'အတည်ပြုချက်ရရှိသောအခါ တုံ့ပြန်ချက်များ ထည့်သွင်းပါမည်။', testimonialsDescription: 'အတည်ပြုထားသော ဖောက်သည်တုံ့ပြန်ချက်ရရှိသောအခါ ထည့်သွင်းပါမည်။', faq: 'မသွားမီ မေးလိုသည်များ', faqTitle: 'မသွားမီ သိထားနိုင်သော အဖြေများ။', faqDescription: 'အသုံးဝင်သော အချက်အလက်အချို့ကို ကြည့်ပြီး အဆင်သင့်ဖြစ်သောအခါ ဆက်သွယ်ပါ။', contactEyebrow: 'သင်၏နောက်တစ်ဆင့်', contactTitle: 'နောက်ထပ်ခရီးကို စီစဉ်ရန် အသင့်ဖြစ်ပြီလား?', contactDescription: 'လိုအပ်ချက်ကို မျှဝေပြီး နှစ်သက်သော လမ်းကြောင်းမှ မေးမြန်းမှုစတင်ပါ။', contactCta: 'UNIVIA သို့ ဆက်သွယ်ရန်', heroStamp: 'စဉ်းစားပေးသော ခရီးသွားစီစဉ်မှု' },
      about: { eyebrow: 'UNIVIA အကြောင်း', title: 'ခရီးတစ်ခုစရန် ပိုမိုကောင်းမွန်သော နည်းလမ်း။', intro: 'UNIVIA သည် ပြည်တွင်းနှင့် နိုင်ငံတကာခရီးများ စီစဉ်သူများအတွက် ပြင်ဆင်နိုင်သော ခရီးသွားနှင့် လေယာဉ်လက်မှတ် မေးမြန်းမှုအတွေ့အကြုံဖြစ်ပါသည်။', foundation: 'ပြင်ဆင်နိုင်သော အခြေခံ', placeholder: 'ကုမ္ပဏီအချက်အလက်၊ လုပ်ငန်းဆိုင်ရာအချက်အလက်နှင့် ဆက်သွယ်ရန်လမ်းကြောင်းများကို Univia အဖွဲ့မှ ပေးအပ်သည်အထိ နေရာယူစာသားအဖြစ် ရှင်းလင်းစွာ ဖော်ပြထားပါသည်။', cta: 'UNIVIA နှင့် ဆွေးနွေးရန်', mission: 'ရည်မှန်းချက်', missionText: 'စဉ်းစားပေးသော ဆွေးနွေးမှုများဖြင့် ခရီးစဉ်စီစဉ်မှုကို ပိုမိုရှင်းလင်းလွယ်ကူစေရန်။', vision: 'မျှော်မှန်းချက်', visionText: 'ခရီးစဉ်မေးမြန်းမှုတစ်ခုချင်းမှတစ်ဆင့် ကမ္ဘာတစ်ဝန်းရှိ အခွင့်အလမ်းများနှင့် ချိတ်ဆက်ပေးရန်။', values: 'တန်ဖိုးများ', valuesText: 'ကျွမ်းကျင်မှု၊ ခေတ်မီမှု၊ ဖောက်သည်ကို အာရုံစိုက်မှုနှင့် မျှဝေသောအချက်အလက်များအပေါ် ဂရုစိုက်မှု။', why: 'UNIVIA ကို ရွေးချယ်ရန်', whyTitle: 'မလိုအပ်သော ကတိများမပါဘဲ ရှင်းလင်းသော အစပြုရာ။', whyText: 'လမ်းကြောင်းမေးခွန်းများ၊ ခရီးစဉ်ရွေးချယ်စရာများနှင့် နောက်တစ်ဆင့်အတွက် ရှင်းလင်းသော အစပြုရာနေရာတစ်ခုကို အသုံးပြုပါ။ ဤဝဘ်ဆိုက်တွင် တိုက်ရိုက်ရရှိနိုင်မှု သို့မဟုတ် စျေးနှုန်းကို မဖော်ပြပါ။' },
      tickets: { eyebrow: 'လေယာဉ်လက်မှတ်များ', title: 'သင်၏ခရီးစဉ်ကို ဤနေရာမှ စတင်ပါ။', description: 'ပြည်တွင်း သို့မဟုတ် နိုင်ငံတကာ၊ အသွားတစ်ကြောင်း သို့မဟုတ် အသွားအပြန်နှင့် အဖွဲ့လိုက်ခရီးများအကြောင်း ရိုးရှင်းသော မေးမြန်းမှုမှတစ်ဆင့် ဆွေးနွေးပါ။', note: 'ဤသည်မှာ မေးမြန်းမှုဝန်ဆောင်မှုသာ ဖြစ်ပါသည်။ တိုက်ရိုက်ရရှိနိုင်မှု သို့မဟုတ် စျေးနှုန်းကို မပြသဘဲ ဤဝဘ်ဆိုက်မှ ကြိုတင်မှာယူမှု မပြီးမြောက်ပါ။', inquiryOnly: 'မေးမြန်းမှုသာဖြစ်သည်', contact: 'အခြားအကူအညီလိုပါသလား?', contactUs: 'ဆက်သွယ်ရန်' },
      destinations: { eyebrow: 'ခရီးစဉ်နေရာများ', title: 'သွားရောက်သင့်သော နေရာများ။', description: 'နောက်ထပ်လေယာဉ်ခရီးစဉ် မေးမြန်းမှုအတွက် အစပြုရာအဖြစ် ခရီးစဉ်နေရာများကို ကြည့်ရှုပါ။', inquiry: 'ခရီးစဉ်နေရာအကြောင်း မေးရန်', ctaTitle: 'စိတ်ကူးထဲတွင် ခရီးစဉ်နေရာရှိပါသလား?', ctaDescription: 'မေးမြန်းမှုစတင်ရန် နှစ်သက်သောလမ်းကြောင်းနှင့် ရက်စွဲများကို မျှဝေပါ။' },
      services: { eyebrow: 'ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများ', title: 'ခရီးစဉ်တိုင်းအတွက် ကူညီမှု။', description: 'ပြည်တွင်း၊ နိုင်ငံတကာ၊ ကိုယ်ပိုင်၊ အဖွဲ့လိုက် သို့မဟုတ် ကုမ္ပဏီခရီးစဉ် မေးမြန်းမှုကို စီစဉ်နိုင်ရန် UNIVIA ကူညီနိုင်သည့် နည်းလမ်းများကို ကြည့်ပါ။', contact: 'သင်၏ ခရီးစဉ်အစီအစဉ်များကို ဆွေးနွေးရန်', contactDescription: 'စတင်ရန် မေးမြန်းမှုတိုတစ်ခု လုံလောက်ပါသည်။ အခြေအနေနှင့် နှစ်သက်သောလမ်းကြောင်းကို မျှဝေပါ။', contactCta: 'UNIVIA သို့ ဆက်သွယ်ရန်' },
      faq: { eyebrow: 'မေးလေ့ရှိသောမေးခွန်းများ', title: 'မေးခွန်းများကို ရိုးရှင်းစွာ ဖြေကြားထားပါသည်။', description: 'အောက်ပါအချက်များကို ပြန်လည်ကြည့်ရှုပါ။ ရရှိနိုင်မှု၊ စျေးနှုန်းနှင့် ကုမ္ပဏီမူဝါဒများကို ပြင်ဆင်ထားသော ဆက်သွယ်ရေးလမ်းကြောင်းမှ သီးခြားအတည်ပြုပါမည်။', contact: 'မေးစရာကျန်ပါသလား?', contactCta: 'UNIVIA သို့ ဆက်သွယ်ရန်' },
      contact: { eyebrow: 'UNIVIA သို့ ဆက်သွယ်ရန်', title: 'စကားစတင်ပြောကြရအောင်။', description: 'မေးမြန်းမှုတစ်ခု ပြင်ဆင်ပြီး WhatsApp သို့မဟုတ် အီးမေးလ်ကို ရွေးချယ်ပါ။ ဤဖောင်သည် backend သို့ ပေးပို့ခြင်းမပြုပါ။', channels: 'ပြင်ဆင်နိုင်သော ဆက်သွယ်ရေးလမ်းကြောင်းများ', whatsapp: 'WhatsApp', email: 'အီးမေးလ်', address: 'ရုံးလိပ်စာ', hours: 'လုပ်ငန်းချိန်', facebook: 'Facebook', facebookPlaceholder: '[Facebook URL ကို ပြင်ဆင်ပါ]', inquiryNote: 'ဤတန်ဖိုးများသည် ပြင်ဆင်နိုင်သော နေရာယူစာသားများဖြစ်ပါသည်။ စတင်အသုံးမပြုမီ ပြင်ဆင်ပါ။' },
    },
  },
};

export function getTranslations(language: Language): TranslationDictionary {
  return translations[language];
}
