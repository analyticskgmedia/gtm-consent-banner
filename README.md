# GTM Consent Banner - Advanced Consent Mode v2

A complete GDPR-compliant consent banner implementation for Google Tag Manager with Consent Mode v2 support. This template provides a professional, customizable, and accessible consent management solution.

## Features

- ✅ **Google Consent Mode v2** - Full integration with all consent types
- ✅ **Two-step consent flow** - Users must view details before accepting selected cookies
- ✅ **Multi-language support** - All 24 official EU languages included
- ✅ **Fully customizable** - Colors, logos, and text can be configured
- ✅ **WCAG compliant** - Keyboard navigation and screen reader support
- ✅ **Responsive design** - Works on all devices
- ✅ **Lightweight** - Minimal performance impact
- ✅ **No dependencies** - Pure vanilla JavaScript

## Installation

### 1. Upload the Template to GTM

1. Download the template file: `template.tpl`
2. In GTM, go to **Templates** → **Tag Templates** → **New**
3. Click the three dots menu → **Import**
4. Select the template file and import it

### 2. Host the JavaScript File

The file `banner-v1.js` has been uploaded to our server at this URL:
```
https://kg-media.eu/banner/banner-v1.js
```

Alternatively, you can use your own hosting location and update the script URL in the template settings.

### 3. Create a New Tag

1. Go to **Tags** → **New**
2. Choose your imported "Advanced Consent Mode v2 Banner" template
3. Configure the settings (see below)
4. Set trigger to "Consent Initialisation - All Pages"
5. Save and publish

## Configuration

### General Settings

- **Banner ID**: Unique identifier for the banner instance
- **Default Language**: Fallback language (all 24 EU official languages supported)
- **Auto-detect Language**: Automatically detect from URL path

### Consent Mode Settings

- **ads_data_redaction**: Redact ads data when consent is denied (default: enabled)
- **url_passthrough**: Pass ad click information through URLs (default: enabled)
- **Wait for update**: Milliseconds to wait for consent (default: 2000)

### Appearance

- **Primary Button Color**: Color for "Accept All" button
- **Primary Button Text Color**: Text color for primary button
- **Secondary Button Color**: Color for "Details" and "Reject All" buttons
- **Secondary Button Text Color**: Text color for secondary buttons
- **Background Color**: Banner background color
- **Text Color**: Main text color

### Logo

- **Website Logo URL**: Your website logo (optional)

### Floating Button Settings

- **Show floating settings button**: Enable/disable the floating button (default: enabled)
- **Button Position**: Choose corner position (bottom-left, bottom-right, top-left, top-right)

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

This template is provided under the Apache License version 2.0. See LICENSE file for details.

## Support

For issues or questions:
- GitHub Issues: [https://github.com/analyticskgmedia/gtm-consent-banner/issues](https://github.com/analyticskgmedia/gtm-consent-banner/issues)
- Email: filip.aldic@kg-media.hr

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## Credits

Developed by [KG Media](https://kg-media.eu)

---

Made with ❤️ for the GTM community
