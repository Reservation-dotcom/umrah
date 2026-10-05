# Umrah Planner frontend

## Build for cPanel

This project is exported as a static site because the cPanel hosting account does not run Node.js. From the `frontend` folder, run:

```bash
npm ci
npm run build
```

Upload the **contents** of the generated `out` folder to the document root for `umrahPlanner.co.uk` (usually `public_html` or the domain's configured document root). Do not upload `.env.local` or the source project. The export contains static HTML, JavaScript, CSS, images, and `api/send-enquiry.php`.

The PHP endpoint requires PHP with the `mail()` function enabled. Create the `admin@umrahplaners.co.uk` mailbox in cPanel, and make sure it is permitted as the sender. If you use a different mailbox, update `ENQUIRY_TO_EMAIL` and `ENQUIRY_FROM_EMAIL` at the top of `public/api/send-enquiry.php` before building. Configure the domain's SPF/DKIM email records in cPanel to improve delivery.

After uploading, test both the homepage and a direct page URL, then submit each enquiry form and confirm delivery to the mailbox. If the form reports a sending error, check cPanel's PHP error log and mail delivery reports; some hosts require authenticated SMTP instead of PHP `mail()`.

## Local development

```bash
npm ci
npm run dev
```

The PHP enquiry endpoint must be hosted by a PHP-enabled web server; it is not served by `next dev`.
