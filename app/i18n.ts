export type Language = 'en' | 'my';

export const languageLabels: Record<Language, string> = {
  en: 'English',
  my: 'မြန်မာ',
};

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
    };
  };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    validation: string;
    success: string;
    mailtoAlternative: string;
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
};

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
      },
    },
    contact: {
      title: 'Start a conversation',
      name: 'Name',
      email: 'Email',
      message: 'How can we help?',
      submit: 'Create WhatsApp inquiry',
      validation: 'Complete the required fields with a valid email address.',
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
      },
    },
    contact: {
      title: 'စကားစတင်ပြောကြရအောင်',
      name: 'အမည်',
      email: 'အီးမေးလ်',
      message: 'မည်သို့ကူညီပေးရမလဲ?',
      submit: 'WhatsApp မေးမြန်းမှုဖန်တီးရန်',
      validation: 'လိုအပ်သောအချက်များကို မှန်ကန်သောအီးမေးလ်ဖြင့် ဖြည့်ပါ။',
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
  },
};

export function getTranslations(language: Language): TranslationDictionary {
  return translations[language];
}
