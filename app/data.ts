import type { Language } from './i18n';

export type LocalizedText = Record<Language, string>;

export type Destination = {
  id: string;
  city: LocalizedText;
  country: LocalizedText;
  description: LocalizedText;
  image: string;
  alt: LocalizedText;
};

export type Service = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  icon: 'plane' | 'globe' | 'repeat' | 'users' | 'briefcase' | 'compass';
  image?: string;
};

export type Benefit = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  icon: 'calendar' | 'globe' | 'headphones' | 'compass';
};

export type FAQItem = {
  id: string;
  question: LocalizedText;
  answer: LocalizedText;
};

export type Testimonial = {
  id: string;
  quote: LocalizedText;
  attribution: LocalizedText;
  isPlaceholder: true;
};

export type PromoContent = {
  title: LocalizedText;
  description: LocalizedText;
  image: string;
  videoUrl: string;
};

const image = (photoId: string, width = 900) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=80`;

export const destinations: Destination[] = [
  {
    id: 'bangkok',
    city: { en: 'Bangkok', my: 'ဘန်ကောက်' },
    country: { en: 'Thailand', my: 'ထိုင်းနိုင်ငံ' },
    description: { en: 'Vibrant city life, cuisine and culture.', my: 'မြို့ပြဘဝ၊ အစားအစာနှင့် ယဉ်ကျေးမှုများကို ရှာဖွေပါ။' },
    image: image('photo-1508009603885-50cf7c579365'),
    alt: { en: 'Bangkok city buildings and temple roof', my: 'ဘန်ကောက်မြို့၏ အဆောက်အအုံများနှင့် ဘုရားကျောင်းခေါင်မိုး' },
  },
  {
    id: 'singapore',
    city: { en: 'Singapore', my: 'စင်ကာပူ' },
    country: { en: 'Singapore', my: 'စင်ကာပူနိုင်ငံ' },
    description: { en: 'A polished gateway to Southeast Asia.', my: 'အရှေ့တောင်အာရှသို့ ခေတ်မီသော တံခါးပေါက်တစ်ခု။' },
    image: image('photo-1525625293386-3f8f99389edd'),
    alt: { en: 'Singapore skyline at dusk', my: 'ညနေခင်း စင်ကာပူမြို့ပြမြင်ကွင်း' },
  },
  {
    id: 'kuala-lumpur',
    city: { en: 'Kuala Lumpur', my: 'ကွာလာလမ်ပူ' },
    country: { en: 'Malaysia', my: 'မလေးရှားနိုင်ငံ' },
    description: { en: 'Modern energy, food and welcoming neighborhoods.', my: 'ခေတ်မီစွမ်းအင်၊ အစားအစာနှင့် နွေးထွေးသော ရပ်ကွက်များ။' },
    image: image('photo-1596422846543-75c6fc197f07'),
    alt: { en: 'Kuala Lumpur skyline', my: 'ကွာလာလမ်ပူမြို့ပြမြင်ကွင်း' },
  },
  {
    id: 'dubai',
    city: { en: 'Dubai', my: 'ဒူဘိုင်း' },
    country: { en: 'United Arab Emirates', my: 'အာရပ်စော်ဘွားများပြည်ထောင်စု' },
    description: { en: 'A modern city built for discovery.', my: 'ရှာဖွေလေ့လာရန် ဖန်တီးထားသော ခေတ်မီမြို့တစ်မြို့။' },
    image: image('photo-1512453979798-5ea266f8880c'),
    alt: { en: 'Dubai skyline with Burj Khalifa', my: 'ဘူဂျ်ခါလီဖာပါဝင်သော ဒူဘိုင်းမြို့ပြမြင်ကွင်း' },
  },
  {
    id: 'tokyo',
    city: { en: 'Tokyo', my: 'တိုကျို' },
    country: { en: 'Japan', my: 'ဂျပန်နိုင်ငံ' },
    description: { en: 'Tradition and innovation in one journey.', my: 'အစဉ်အလာနှင့် ဆန်းသစ်တီထွင်မှုတို့ကို ခရီးတစ်ခုတည်းတွင် တွေ့ကြုံပါ။' },
    image: image('photo-1540959733332-eab4deabeeaf'),
    alt: { en: 'Tokyo city street and skyline', my: 'တိုကျိုမြို့၏ လမ်းနှင့် မြို့ပြမြင်ကွင်း' },
  },
  {
    id: 'seoul',
    city: { en: 'Seoul', my: 'ဆိုးလ်' },
    country: { en: 'South Korea', my: 'တောင်ကိုရီးယားနိုင်ငံ' },
    description: { en: 'Energy, design and unforgettable flavors.', my: 'တက်ကြွမှု၊ ဒီဇိုင်းနှင့် မမေ့နိုင်သော အရသာများ။' },
    image: image('photo-1538485399081-7c897b4d7f0a'),
    alt: { en: 'Seoul city skyline at night', my: 'ညအချိန် ဆိုးလ်မြို့ပြမြင်ကွင်း' },
  },
  {
    id: 'phuket',
    city: { en: 'Phuket', my: 'ဖူးကက်' },
    country: { en: 'Thailand', my: 'ထိုင်းနိုင်ငံ' },
    description: { en: 'Island time, clear water and room to slow down.', my: 'ကျွန်းအပန်းဖြေမှု၊ ကြည်လင်သောရေနှင့် အေးဆေးအနားယူနိုင်သောနေရာ။' },
    image: image('photo-1589394815804-964ed0be2eb5'),
    alt: { en: 'Phuket tropical beach', my: 'ဖူးကက် အပူပိုင်းကမ်းခြေ' },
  },
  {
    id: 'yangon',
    city: { en: 'Yangon', my: 'ရန်ကုန်' },
    country: { en: 'Myanmar', my: 'မြန်မာနိုင်ငံ' },
    description: { en: 'A welcoming starting point for your next trip.', my: 'နောက်ထပ်ခရီးအတွက် နွေးထွေးစွာ စတင်နိုင်သောနေရာ။' },
    image: image('photo-1518005020951-eccb494ad742'),
    alt: { en: 'Yangon city and golden pagoda', my: 'ရန်ကုန်မြို့နှင့် ရွှေရောင်ဘုရား' },
  },
  {
    id: 'mandalay',
    city: { en: 'Mandalay', my: 'မန္တလေး' },
    country: { en: 'Myanmar', my: 'မြန်မာနိုင်ငံ' },
    description: { en: 'A local gateway to culture and heritage.', my: 'ယဉ်ကျေးမှုနှင့် အမွေအနှစ်များဆီသို့ ပြည်တွင်းတံခါးပေါက်။' },
    image: image('photo-1548013146-72479768bada'),
    alt: { en: 'Mandalay temple architecture', my: 'မန္တလေး ဘုရားကျောင်းဗိသုကာ' },
  },
];

export const services: Service[] = [
  {
    id: 'domestic-flights',
    title: { en: 'Domestic Flight Tickets', my: 'ပြည်တွင်းလေယာဉ်လက်မှတ်များ' },
    description: { en: 'Support for journeys across Myanmar.', my: 'မြန်မာနိုင်ငံအတွင်း ခရီးစဉ်များအတွက် ကူညီပေးမှု။' },
    icon: 'plane',
    image: image('photo-1436491865332-7a61a109cc05', 1200),
  },
  {
    id: 'international-flights',
    title: { en: 'International Flight Tickets', my: 'နိုင်ငံတကာလေယာဉ်လက်မှတ်များ' },
    description: { en: 'Explore routes and plans beyond borders.', my: 'နယ်စပ်များကျော်လွန်သော ခရီးစဉ်များနှင့် အစီအစဉ်များကို ရှာဖွေပါ။' },
    icon: 'globe',
    image: image('photo-1488646953014-85cb44e25828', 1200),
  },
  {
    id: 'round-trip',
    title: { en: 'Round-trip Bookings', my: 'အသွားအပြန် ကြိုတင်မှာယူမှုများ' },
    description: { en: 'Plan departure and return in one inquiry.', my: 'ထွက်ခွာခြင်းနှင့် ပြန်လာခြင်းကို မေးမြန်းမှုတစ်ခုတည်းဖြင့် စီစဉ်ပါ။' },
    icon: 'repeat',
  },
  {
    id: 'group-bookings',
    title: { en: 'Group Bookings', my: 'အဖွဲ့လိုက် ကြိုတင်မှာယူမှုများ' },
    description: { en: 'Share group travel details for a considered response.', my: 'အဖွဲ့လိုက်ခရီးစဉ် အချက်အလက်များမျှဝေ၍ သင့်တော်သော တုံ့ပြန်မှုရယူပါ။' },
    icon: 'users',
  },
  {
    id: 'corporate-travel',
    title: { en: 'Corporate Travel Assistance', my: 'ကုမ္ပဏီခရီးစဉ် ကူညီပေးမှု' },
    description: { en: 'Practical assistance for business travel needs.', my: 'စီးပွားရေးခရီးစဉ်လိုအပ်ချက်များအတွက် လက်တွေ့ကျသော ကူညီပေးမှု။' },
    icon: 'briefcase',
    image: image('photo-1556761175-b413da4baf72', 1200),
  },
  {
    id: 'consultation',
    title: { en: 'Travel Consultation', my: 'ခရီးသွား အကြံပေးမှု' },
    description: { en: 'Talk through options before you decide.', my: 'ဆုံးဖြတ်ချက်မချမီ ရွေးချယ်စရာများကို ဆွေးနွေးပါ။' },
    icon: 'compass',
    image: image('photo-1542296332-2e4473faf563', 1200),
  },
];

export const benefits: Benefit[] = [
  { id: 'convenient', title: { en: 'Convenient booking', my: 'အဆင်ပြေသော မေးမြန်းမှု' }, description: { en: 'Share your travel needs in one clear inquiry.', my: 'သင်၏ခရီးသွားလိုအပ်ချက်များကို မေးမြန်းမှုတစ်ခုတွင် ရှင်းလင်းစွာမျှဝေပါ။' }, icon: 'calendar' },
  { id: 'routes', title: { en: 'Domestic & international flights', my: 'ပြည်တွင်းနှင့် နိုင်ငံတကာလေယာဉ်များ' }, description: { en: 'Explore travel possibilities across local and international routes.', my: 'ပြည်တွင်းနှင့် နိုင်ငံတကာလမ်းကြောင်းများကို လေ့လာပါ။' }, icon: 'globe' },
  { id: 'support', title: { en: 'Dedicated customer support', my: 'ဖောက်သည်အတွက် အာရုံစိုက်ကူညီမှု' }, description: { en: 'Continue the conversation through configured contact channels.', my: 'ပြင်ဆင်ထားသော ဆက်သွယ်ရေးလမ်းကြောင်းများမှ ဆက်လက်ဆွေးနွေးပါ။' }, icon: 'headphones' },
  { id: 'assistance', title: { en: 'Travel assistance', my: 'ခရီးသွား ကူညီပေးမှု' }, description: { en: 'Discuss options before moving to your next step.', my: 'နောက်တစ်ဆင့်မတိုင်မီ ရွေးချယ်စရာများကို ဆွေးနွေးပါ။' }, icon: 'compass' },
];

export const faqs: FAQItem[] = [
  { id: 'book-ticket', question: { en: 'How can I book an airline ticket?', my: 'လေယာဉ်လက်မှတ်ကို မည်သို့မှာယူနိုင်ပါသလဲ?' }, answer: { en: 'Send an inquiry through the flight form or WhatsApp. The team can discuss available options and next steps.', my: 'လေယာဉ်ခရီးစဉ်ဖောင် သို့မဟုတ် WhatsApp မှတစ်ဆင့် မေးမြန်းပါ။ ရရှိနိုင်သောရွေးချယ်စရာများနှင့် နောက်တစ်ဆင့်ကို ဆွေးနွေးနိုင်ပါသည်။' } },
  { id: 'international', question: { en: 'Can I book international flights?', my: 'နိုင်ငံတကာလေယာဉ်များကို မှာယူနိုင်ပါသလား?' }, answer: { en: 'You can ask about international itineraries through the inquiry form. Availability and pricing are confirmed separately.', my: 'မေးမြန်းမှုဖောင်မှတစ်ဆင့် နိုင်ငံတကာခရီးစဉ်များအကြောင်း မေးမြန်းနိုင်ပါသည်။ ရရှိနိုင်မှုနှင့် စျေးနှုန်းကို သီးခြားအတည်ပြုပါမည်။' } },
  { id: 'round-trip', question: { en: 'Can I request round-trip tickets?', my: 'အသွားအပြန်လက်မှတ် တောင်းဆိုနိုင်ပါသလား?' }, answer: { en: 'Yes. Select Round trip and add your preferred return date to start an inquiry.', my: 'ရပါသည်။ အသွားအပြန်ကို ရွေးချယ်ပြီး နှစ်သက်သော ပြန်လာမည့်ရက်ကို ထည့်၍ မေးမြန်းနိုင်ပါသည်။' } },
  { id: 'information', question: { en: 'What information is required?', my: 'မည်သည့်အချက်အလက်များ လိုအပ်ပါသလဲ?' }, answer: { en: 'The first inquiry asks for your route, dates, passenger count and travel class.', my: 'ပထမဆုံးမေးမြန်းမှုတွင် ခရီးစဉ်လမ်းကြောင်း၊ ရက်စွဲ၊ ခရီးသည်အရေအတွက်နှင့် ခရီးသွားအတန်းကို မေးမြန်းပါသည်။' } },
  { id: 'contact', question: { en: 'How do I contact UNIVIA?', my: 'UNIVIA ကို မည်သို့ဆက်သွယ်နိုင်ပါသလဲ?' }, answer: { en: 'Use WhatsApp or email through the Contact page. Contact details are configurable placeholders.', my: 'ဆက်သွယ်ရန်စာမျက်နှာမှ WhatsApp သို့မဟုတ် အီးမေးလ်ကို အသုံးပြုပါ။ ဆက်သွယ်ရန်အချက်အလက်များသည် ပြင်ဆင်နိုင်သော နေရာယူစာသားများဖြစ်ပါသည်။' } },
  { id: 'group', question: { en: 'Can I request group bookings?', my: 'အဖွဲ့လိုက် လက်မှတ်မှာယူမှု တောင်းဆိုနိုင်ပါသလား?' }, answer: { en: 'Yes. Include your group size and travel details in a WhatsApp inquiry.', my: 'ရပါသည်။ WhatsApp မေးမြန်းမှုတွင် အဖွဲ့အရွယ်အစားနှင့် ခရီးစဉ်အချက်အလက်များ ထည့်ပါ။' } },
];

export const testimonials: Testimonial[] = [
  { id: 'placeholder', quote: { en: 'Testimonials will be added when approved customer feedback is available.', my: 'အတည်ပြုထားသော ဖောက်သည်တုံ့ပြန်ချက်ရရှိသောအခါ ထည့်သွင်းပါမည်။' }, attribution: { en: 'Placeholder content', my: 'နေရာယူစာသား' }, isPlaceholder: true },
];

export const promoContent: PromoContent = {
  title: { en: 'A thoughtful start to every journey.', my: 'ခရီးတိုင်းအတွက် စဉ်းစားပေးထားသော အစပြုမှု။' },
  description: { en: 'Use the configured inquiry channels to discuss your next route. No live pricing or availability is represented here.', my: 'နောက်ထပ်ခရီးစဉ်အကြောင်း ပြင်ဆင်ထားသော မေးမြန်းမှုလမ်းကြောင်းများမှ ဆွေးနွေးပါ။ ဤနေရာတွင် တိုက်ရိုက်စျေးနှုန်း သို့မဟုတ် ရရှိနိုင်မှုကို မဖော်ပြပါ။' },
  image: image('photo-1436491865332-7a61a109cc05', 1600),
  videoUrl: '',
};
