انسخ الملفات دي بنفس المسارات داخل:
A:\Projects\mashawirk-booking-platform

يعني مثلا:
i18n\locales\ar.json  ->  A:\Projects\mashawirk-booking-platform\i18n\locales\ar.json
public\sitemap.xml    ->  A:\Projects\mashawirk-booking-platform\public\sitemap.xml

بعد النسخ: Push على GitHub ثم Redeploy على Vercel.

كمان على Vercel Environment Variables:
NUXT_PUBLIC_SITE_URL=https://www.mashawirk.com
NUXT_PUBLIC_WHATSAPP_PHONE=971544313696
NUXT_PUBLIC_CONTACT_PHONE_DISPLAY=+971 54 431 3696
