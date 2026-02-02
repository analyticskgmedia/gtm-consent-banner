# GTM Consent Banner - Advanced Consent Mode v2

A complete GDPR-compliant consent banner implementation for Google Tag Manager with Consent Mode v2 support. This template provides a professional, customizable, and accessible consent management solution with **built-in consent logging** for GDPR compliance.

## Features

- ✅ **Google Consent Mode v2** - Full integration with all consent types
- ✅ **Two-step consent flow** - Users must view details before accepting selected cookies
- ✅ **Multi-language support** - All 24 official EU languages included
- ✅ **Fully customizable** - Colors, logos, and text can be configured
- ✅ **WCAG compliant** - Keyboard navigation and screen reader support
- ✅ **Responsive design** - Works on all devices
- ✅ **Lightweight** - Minimal performance impact
- ✅ **No dependencies** - Pure vanilla JavaScript
- ✅ **Consent Logging** - Log all consent actions to Google Sheets for GDPR compliance (NEW in v2.0)

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

### Consent Logging (GDPR Compliance) - NEW in v2.0

Enable consent logging to maintain a complete audit trail of all user consent decisions.

- **Enable consent logging**: Toggle to enable/disable logging to Google Sheets
- **Google Apps Script Web App URL**: The URL of your deployed Apps Script (see setup below)
- **Banner/Policy Version**: Version identifier to track which consent banner/policy version users consented to

#### Setting Up Consent Logging

1. **Create a Google Sheet**
   - Go to [sheets.google.com](https://sheets.google.com)
   - Create a new spreadsheet
   - Name it (e.g., "Consent Log")

2. **Add the Apps Script**
   - In your Sheet, go to **Extensions** → **Apps Script**
   - Delete any existing code
   - Copy and paste the code from `google-apps-script.js`
   - Save the project (Ctrl+S)

3. **Deploy as Web App**
   - Click **Deploy** → **New deployment**
   - Click the gear icon → **Web app**
   - Set **Execute as**: "Me"
   - Set **Who has access**: "Anyone"
   - Click **Deploy**
   - **Authorize** when prompted (click through the warnings)
   - Copy the **Web App URL**

4. **Configure in GTM**
   - Open your consent banner tag
   - Enable "Enable consent logging to Google Sheets"
   - Paste your Web App URL
   - Set your Banner/Policy Version
   - Save and publish

#### What Gets Logged

Each consent action logs:

| Field | Description |
|-------|-------------|
| timestamp | ISO 8601 timestamp of the consent action |
| consent_id | Persistent anonymous identifier for the user |
| action | Type of action: `accept_all`, `reject_all`, or `custom` |
| analytics_storage | `granted` or `denied` |
| ad_storage | `granted` or `denied` |
| ad_user_data | `granted` or `denied` |
| ad_personalization | `granted` or `denied` |
| functionality_storage | `granted` or `denied` |
| personalization_storage | `granted` or `denied` |
| page_url | URL where consent was given |
| user_agent | Browser user agent |
| banner_version | Version of your consent banner/policy |

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

## Cookies Used

| Cookie Name | Purpose | Expiry |
|-------------|---------|--------|
| `kg_consent_preferences` | Stores user's consent choices | 365 days (configurable) |
| `kg_consent_id` | Anonymous identifier for consent logging | 2 years |

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

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari, Chrome for Android

## GDPR Compliance

This consent banner helps you comply with GDPR by:

1. **Collecting explicit consent** before setting non-essential cookies
2. **Providing granular control** over different cookie categories
3. **Maintaining consent records** (when logging is enabled) with:
   - Timestamp of consent
   - User's consent choices
   - Version of the consent banner/policy
   - Anonymous identifier for audit purposes
4. **Allowing users to change preferences** at any time via the floating button

## Version History

### v2.0 (Current)
- Added consent logging feature for GDPR compliance
- Consent actions logged to Google Sheets via Apps Script
- Persistent consent ID for tracking user consent history
- Banner version tracking for policy changes

### v1.2
- Added complete EU language support (24 languages)
- Fixed Slovenian language code (si)
- Improved mobile button layout
- UI enhancements

### v1.1
- Added floating button position control
- Removed company logo field
- Improved mobile responsiveness

### v1.0
- Initial release

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
