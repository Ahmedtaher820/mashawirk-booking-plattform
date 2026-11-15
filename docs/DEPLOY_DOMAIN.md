# رفع مشاويرك على الدومين — قائمة تجهيز SEO

## قبل الرفع

1. انسخ `.env.example` إلى `.env` (أو اضبط المتغيرات في لوحة الاستضافة):

```bash
NUXT_PUBLIC_SITE_URL=https://YOUR-DOMAIN.com
NUXT_PUBLIC_WHATSAPP_PHONE=971544313696
NUXT_PUBLIC_CONTACT_PHONE_DISPLAY="+971 54 431 3696"
```

2. لو الدومين مش `mashawirk.com` عدّل كمان:
   - `public/robots.txt` → سطر `Sitemap` و `Host`
   - `public/sitemap.xml` → كل روابط `https://mashawirk.com` → دومينك

3. ابني للإنتاج:

```bash
npm install
npm run build
```

مخرجات السيرفر: `.output/`  
(أو `npm run generate` لو الاستضافة Static بالكامل)

## بعد الرفع مباشرة

1. افتح:
   - `https://YOUR-DOMAIN.com/robots.txt`
   - `https://YOUR-DOMAIN.com/sitemap.xml`
2. Google Search Console → أضف الدومين → Submit sitemap: `https://YOUR-DOMAIN.com/sitemap.xml`
3. تأكد HTTPS شغال (شهادة SSL)
4. اختبر مشاركة اللينك (Open Graph): العنوان + الصورة تظهر

## ملفات SEO الجاهزة في المشروع

| ملف | الوظيفة |
|---|---|
| `public/sitemap.xml` | خريطة الصفحات عربي/إنجليزي |
| `public/robots.txt` | تعليمات محركات البحث |
| `app/composables/useSeoPage.ts` | title / description / canonical / hreflang / OG |
| `app/plugins/seo-jsonld.client.ts` | Schema LocalBusiness |
| `i18n/locales/ar.json` + `en.json` | نصوص SEO لكل صفحة |
| `.env.example` | متغيرات الدومين والواتساب |

## ملاحظات SEO عضوي (بدون إعلانات)

- الكلمات المفتاحية موجودة في العناوين والوصف والمحتوى
- تاج `keywords` مساعد فقط — جوجل يعتمد أكتر على Title + Description + H1 + المحتوى
- بعد الإطلاق: أضف Google Business Profile (القصيص، دبي) واربطه بنفس الدومين
