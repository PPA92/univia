import { travelPhotos } from './config';
import type { Language, LocalizedText } from './i18n';

export type Destination = {
  id: string;
  city: LocalizedText;
  country: LocalizedText;
  description: LocalizedText;
  image: (typeof travelPhotos.destinations)[keyof typeof travelPhotos.destinations];
  alt: LocalizedText;
};

export type Service = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  image?: (typeof travelPhotos.services)[keyof typeof travelPhotos.services];
};

export type FAQItem = { id: string; question: LocalizedText; answer: LocalizedText };

export const destinations: Destination[] = [
  { id: 'bangkok', city: { en: 'Bangkok', my: 'ဘန်ကောက်' }, country: { en: 'Thailand', my: 'ထိုင်းနိုင်ငံ' }, description: { en: 'City routes, food and culture.', my: 'မြို့ပြလမ်းကြောင်း၊ အစားအစာနှင့် ယဉ်ကျေးမှု။' }, image: travelPhotos.destinations.bangkok, alt: { en: 'Bangkok city and temple roof', my: 'ဘန်ကောက်မြို့နှင့် ဘုရားကျောင်းခေါင်မိုး' } },
  { id: 'singapore', city: { en: 'Singapore', my: 'စင်ကာပူ' }, country: { en: 'Singapore', my: 'စင်ကာပူနိုင်ငံ' }, description: { en: 'A practical Southeast Asia gateway.', my: 'အရှေ့တောင်အာရှသို့ လက်တွေ့ကျသော တံခါးပေါက်။' }, image: travelPhotos.destinations.singapore, alt: { en: 'Singapore skyline', my: 'စင်ကာပူမြို့ပြမြင်ကွင်း' } },
  { id: 'kuala-lumpur', city: { en: 'Kuala Lumpur', my: 'ကွာလာလမ်ပူ' }, country: { en: 'Malaysia', my: 'မလေးရှားနိုင်ငံ' }, description: { en: 'Modern neighborhoods and easy connections.', my: 'ခေတ်မီရပ်ကွက်များနှင့် လွယ်ကူသော ချိတ်ဆက်မှုများ။' }, image: travelPhotos.destinations.kualaLumpur, alt: { en: 'Kuala Lumpur skyline', my: 'ကွာလာလမ်ပူမြို့ပြမြင်ကွင်း' } },
  { id: 'dubai', city: { en: 'Dubai', my: 'ဒူဘိုင်း' }, country: { en: 'United Arab Emirates', my: 'အာရပ်စော်ဘွားများပြည်ထောင်စု' }, description: { en: 'A long-haul city route to consider.', my: 'အဝေးခရီးအတွက် စဉ်းစားနိုင်သော မြို့လမ်းကြောင်း။' }, image: travelPhotos.destinations.dubai, alt: { en: 'Dubai skyline', my: 'ဒူဘိုင်းမြို့ပြမြင်ကွင်း' } },
  { id: 'tokyo', city: { en: 'Tokyo', my: 'တိုကျို' }, country: { en: 'Japan', my: 'ဂျပန်နိုင်ငံ' }, description: { en: 'Tradition, design and busy streets.', my: 'အစဉ်အလာ၊ ဒီဇိုင်းနှင့် တက်ကြွသောလမ်းများ။' }, image: travelPhotos.destinations.tokyo, alt: { en: 'Tokyo street and skyline', my: 'တိုကျိုလမ်းနှင့် မြို့ပြမြင်ကွင်း' } },
  { id: 'seoul', city: { en: 'Seoul', my: 'ဆိုးလ်' }, country: { en: 'South Korea', my: 'တောင်ကိုရီးယားနိုင်ငံ' }, description: { en: 'A city route with energy and detail.', my: 'တက်ကြွမှုနှင့် အသေးစိတ်ရှိသော မြို့လမ်းကြောင်း။' }, image: travelPhotos.destinations.seoul, alt: { en: 'Seoul city skyline', my: 'ဆိုးလ်မြို့ပြမြင်ကွင်း' } },
  { id: 'phuket', city: { en: 'Phuket', my: 'ဖူးကက်' }, country: { en: 'Thailand', my: 'ထိုင်းနိုင်ငံ' }, description: { en: 'Island travel with time to slow down.', my: 'အေးဆေးအနားယူနိုင်သော ကျွန်းခရီး။' }, image: travelPhotos.destinations.phuket, alt: { en: 'Phuket coastline', my: 'ဖူးကက်ကမ်းခြေ' } },
  { id: 'yangon', city: { en: 'Yangon', my: 'ရန်ကုန်' }, country: { en: 'Myanmar', my: 'မြန်မာနိုင်ငံ' }, description: { en: 'A local route and a familiar start.', my: 'ပြည်တွင်းလမ်းကြောင်းနှင့် ရင်းနှီးသောအစ။' }, image: travelPhotos.destinations.yangon, alt: { en: 'Yangon street and pagoda', my: 'ရန်ကုန်လမ်းနှင့် ဘုရား' } },
  { id: 'mandalay', city: { en: 'Mandalay', my: 'မန္တလေး' }, country: { en: 'Myanmar', my: 'မြန်မာနိုင်ငံ' }, description: { en: 'A route into culture and heritage.', my: 'ယဉ်ကျေးမှုနှင့် အမွေအနှစ်များဆီသို့ လမ်းကြောင်း။' }, image: travelPhotos.destinations.mandalay, alt: { en: 'Mandalay temple architecture', my: 'မန္တလေးဘုရားကျောင်းဗိသုကာ' } },
];

export const services: Service[] = [
  { id: 'domestic', title: { en: 'Domestic flight inquiries', my: 'ပြည်တွင်းလေယာဉ် မေးမြန်းမှု' }, description: { en: 'Share a route within Myanmar and the dates you are considering.', my: 'မြန်မာနိုင်ငံအတွင်း လမ်းကြောင်းနှင့် စဉ်းစားထားသောရက်စွဲများကို မျှဝေပါ။' }, image: travelPhotos.services.domestic },
  { id: 'international', title: { en: 'International flight inquiries', my: 'နိုင်ငံတကာလေယာဉ် မေးမြန်းမှု' }, description: { en: 'Start with a destination, travel dates and the kind of trip you need.', my: 'ခရီးစဉ်နေရာ၊ ရက်စွဲနှင့် လိုအပ်သောခရီးအမျိုးအစားဖြင့် စတင်ပါ။' }, image: travelPhotos.services.international },
  { id: 'groups', title: { en: 'Group travel planning', my: 'အဖွဲ့လိုက် ခရီးစဉ်စီစဉ်မှု' }, description: { en: 'Include passenger numbers and shared travel details in one inquiry.', my: 'ခရီးသည်အရေအတွက်နှင့် အဖွဲ့လိုက်အသေးစိတ်များကို မေးမြန်းမှုတစ်ခုတွင် ထည့်ပါ။' } },
  { id: 'corporate', title: { en: 'Corporate travel assistance', my: 'ကုမ္ပဏီခရီးစဉ် ကူညီမှု' }, description: { en: 'Discuss practical route and timing needs for business travel.', my: 'စီးပွားရေးခရီးအတွက် လမ်းကြောင်းနှင့်အချိန်လိုအပ်ချက်များကို ဆွေးနွေးပါ။' }, image: travelPhotos.services.corporate },
  { id: 'round-trip', title: { en: 'Round-trip planning', my: 'အသွားအပြန် ခရီးစဉ်စီစဉ်မှု' }, description: { en: 'Send departure and return details together for a clear starting point.', my: 'ထွက်ခွာနှင့် ပြန်လာမည့်အသေးစိတ်များကို အတူတကွပို့ပါ။' } },
  { id: 'consultation', title: { en: 'Travel consultation', my: 'ခရီးသွား အကြံပေးမှု' }, description: { en: 'Ask a question before choosing the next step.', my: 'နောက်တစ်ဆင့်မရွေးချယ်မီ မေးခွန်းတစ်ခုမေးပါ။' }, image: travelPhotos.services.assistance },
];

export const processSteps = [
  { id: 'share', title: { en: 'Share the route', my: 'လမ်းကြောင်းမျှဝေပါ' }, text: { en: 'Tell us where you are starting, where you want to go and when.', my: 'ဘယ်နေရာမှစမည်၊ ဘယ်နေရာသွားမည်နှင့် ဘယ်အချိန်ကို ပြောပြပါ။' }, image: travelPhotos.process },
  { id: 'review', title: { en: 'Review the options', my: 'ရွေးချယ်စရာများကို ပြန်လည်ကြည့်ပါ' }, text: { en: 'Continue the conversation through a configured inquiry channel.', my: 'ပြင်ဆင်ထားသော မေးမြန်းမှုလမ်းကြောင်းမှ ဆက်လက်ဆွေးနွေးပါ။' }, image: travelPhotos.services.review },
  { id: 'decide', title: { en: 'Choose the next step', my: 'နောက်တစ်ဆင့်ရွေးပါ' }, text: { en: 'Use the information you confirm to decide what happens next.', my: 'အတည်ပြုထားသောအချက်အလက်ဖြင့် နောက်တစ်ဆင့်ကို ဆုံးဖြတ်ပါ။' }, image: travelPhotos.services.decide },
];

export const faqs: FAQItem[] = [
  { id: 'book-ticket', question: { en: 'How do I start a flight inquiry?', my: 'လေယာဉ်ခရီးစဉ် မေးမြန်းမှုကို မည်သို့စတင်ရမလဲ?' }, answer: { en: 'Use the flight form to share your route, dates, passenger count and travel class. The form prepares an inquiry; it does not complete a booking.', my: 'လမ်းကြောင်း၊ ရက်စွဲ၊ ခရီးသည်အရေအတွက်နှင့် အတန်းကို လေယာဉ်ဖောင်တွင် ဖြည့်ပါ။ ဖောင်သည် မေးမြန်းမှုကို ပြင်ဆင်ပေးပြီး ကြိုတင်မှာယူမှု မပြီးမြောက်ပါ။' } },
  { id: 'international', question: { en: 'Can I ask about international flights?', my: 'နိုင်ငံတကာလေယာဉ်အကြောင်း မေးနိုင်ပါသလား?' }, answer: { en: 'Yes. Include the destination and preferred dates. Availability and pricing are confirmed separately through a configured channel.', my: 'မေးနိုင်ပါသည်။ ခရီးစဉ်နေရာနှင့် နှစ်သက်သောရက်စွဲများ ထည့်ပါ။ ရရှိနိုင်မှုနှင့် စျေးနှုန်းကို သီးခြားအတည်ပြုပါမည်။' } },
  { id: 'round-trip', question: { en: 'Can I request a round trip?', my: 'အသွားအပြန် ခရီးစဉ်တောင်းနိုင်ပါသလား?' }, answer: { en: 'Yes. Choose Round trip and add a return date to the inquiry.', my: 'ရပါသည်။ အသွားအပြန်ကို ရွေးပြီး ပြန်လာမည့်ရက်စွဲ ထည့်ပါ။' } },
  { id: 'information', question: { en: 'What information should I prepare?', my: 'မည်သည့်အချက်အလက်များ ပြင်ဆင်ရမလဲ?' }, answer: { en: 'Prepare the departure point, arrival point, travel dates, passenger count and class.', my: 'ထွက်ခွာရာ၊ ရောက်ရှိရာ၊ ခရီးရက်စွဲ၊ ခရီးသည်အရေအတွက်နှင့် အတန်းကို ပြင်ဆင်ပါ။' } },
  { id: 'contact', question: { en: 'How can I contact UNIVIA?', my: 'UNIVIA ကို မည်သို့ဆက်သွယ်ရမလဲ?' }, answer: { en: 'Use the contact form to prepare a message. WhatsApp and email links appear only after those channels are configured.', my: 'ဆက်သွယ်ရန်ဖောင်မှ စာတစ်စောင်ပြင်ဆင်ပါ။ WhatsApp နှင့် အီးမေးလ်လင့်ခ်များသည် လမ်းကြောင်းများပြင်ဆင်ပြီးမှသာ ပေါ်လာပါမည်။' } },
  { id: 'group', question: { en: 'Can I ask about group travel?', my: 'အဖွဲ့လိုက်ခရီးအကြောင်း မေးနိုင်ပါသလား?' }, answer: { en: 'Yes. Add the group size and the travel context to your inquiry.', my: 'မေးနိုင်ပါသည်။ အဖွဲ့အရွယ်အစားနှင့် ခရီးအကြောင်းအရာကို မေးမြန်းမှုတွင် ထည့်ပါ။' } },
];

export type LanguageValue<T> = T extends Record<Language, string> ? T : never;
