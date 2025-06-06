# GTM Consent Banner - Advanced Consent Mode v2

A complete GDPR-compliant consent banner implementation for Google Tag Manager with Consent Mode v2 support. This template provides a professional, customizable, and accessible consent management solution.

## Features

- ✅ **Google Consent Mode v2** - Full integration with all consent types
- ✅ **Two-step consent flow** - Users must view details before accepting selected cookies
- ✅ **Multi-language support** - 10 European languages included
- ✅ **Fully customizable** - Colors, logos, and text can be configured
- ✅ **WCAG compliant** - Keyboard navigation and screen reader support
- ✅ **Responsive design** - Works on all devices
- ✅ **Lightweight** - Minimal performance impact
- ✅ **No dependencies** - Pure vanilla JavaScript

## Installation

### 1. Upload the Template to GTM

1. Download the template file: `gtm-consent-banner-template.tpl`
2. In GTM, go to **Templates** → **Tag Templates** → **New**
3. Click the three dots menu → **Import**
4. Select the template file and import it

### 2. Host the JavaScript File

Upload `banner-v1.js` to your server at:
```
https://kg-media.eu/banner/banner-v1.js
```

Or use your own hosting location and update the script URL in the template settings.

### 3. Create a New Tag

1. Go to **Tags** → **New**
2. Choose your imported "Advanced Consent Mode v2 Banner" template
3. Configure the settings (see below)
4. Set trigger to "All Pages"
5. Save and publish

## Configuration

### General Settings

- **Banner ID**: Unique identifier for the banner instance
- **Default Language**: Fallback language (en, de, fr, es, it, nl, pl, pt, hr, cs)
- **Auto-detect Language**: Automatically detect from URL path

### Consent Mode Settings

- **Enable ads_data_redaction**: Redact ads data when consent is denied
- **Enable url_passthrough**: Pass ad click information through URLs
- **Wait for update**: Milliseconds to wait for consent (default: 2000)

### Appearance

- **Primary Button Color**: Color for "Accept All" button
- **Primary Button Text Color**: Text color for primary button
- **Secondary Button Color**: Color for "Details" and "Reject All" buttons
- **Secondary Button Text Color**: Text color for secondary buttons
- **Background Color**: Banner background color
- **Text Color**: Main text color

### Logos

- **Website Logo URL**: Your website logo (optional)
- **Company Logo URL**: Your company logo (optional)

### Privacy Policy Links

Add privacy policy URLs for each language your site supports.

## Consent Categories

The banner manages these consent types:

- **ad_storage**: Enables storage of ads-related cookies
- **ad_user_data**: Sets consent for sending user data to Google for ads
- **ad_personalization**: Sets consent for personalized advertising
- **analytics_storage**: Enables storage of analytics cookies
- **functionality_storage**: Enables storage of functional cookies
- **personalization_storage**: Enables storage for personalization
- **security_storage**: Always granted (necessary cookies)

## Events

The banner pushes these events to dataLayer:

- `consent_default`: Fired when default consent is set
- `consent_update`: Fired when user updates consent choices

## Customization

### Styling

The banner uses CSS custom properties that can be overridden:

```css
:root {
  --kg-bg-color: #ffffff;
  --kg-text-color: #111827;
  --kg-primary-color: #2563eb;
  --kg-primary-text: #ffffff;
  --kg-secondary-color: #f3f4f6;
  --kg-secondary-text: #374151;
}
```

### Translations

To add or modify translations, edit the `translations` object in `banner-v1.js`.

## Cookie Storage

Consent preferences are stored in a cookie named `kg_consent_preferences` (configurable) with the following structure:

```json
{
  "ad_storage": "granted|denied",
  "ad_user_data": "granted|denied",
  "ad_personalization": "granted|denied",
  "analytics_storage": "granted|denied",
  "functionality_storage": "granted|denied",
  "personalization_storage": "granted|denied",
  "security_storage": "granted"
}
```

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari, Chrome for Android

## License

This template is provided under the MIT License. See LICENSE file for details.

## Support

For issues or questions:
- GitHub Issues: [https://github.com/analyticskgmedia/gtm-consent-banner/issues](https://github.com/analyticskgmedia/gtm-consent-banner/issues)
- Email: info@kg-media.hr

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## Credits

Developed by [KG Media](https://kg-media.eu)

---

Made with ❤️ for the GTM community
