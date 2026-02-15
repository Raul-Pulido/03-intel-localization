# RTL Language Detection System

This JavaScript-based system automatically detects when the page language changes and applies appropriate right-to-left (RTL) or left-to-right (LTR) layout.

## Features

✅ **Automatic RTL Detection** - Detects 12+ RTL languages including Arabic, Hebrew, Persian, and Urdu  
✅ **Google Translate Compatible** - Automatically detects language changes from Google Translate  
✅ **Bootstrap Integration** - Works seamlessly with Bootstrap's RTL support  
✅ **Real-time Monitoring** - Uses MutationObserver to watch for DOM changes  
✅ **Zero Configuration** - Works out of the box with no setup required  

## Supported RTL Languages

The system automatically detects the following RTL languages:

- **ar** - Arabic
- **arc** - Aramaic
- **dv** - Divehi
- **fa** - Persian/Farsi
- **ha** - Hausa (Arabic script)
- **he** - Hebrew
- **khw** - Khowar
- **ks** - Kashmiri
- **ku** - Kurdish (Sorani)
- **ps** - Pashto
- **ur** - Urdu
- **yi** - Yiddish

## How It Works

1. **Monitors Language Attribute**: Watches the `lang` attribute on the `<html>` element
2. **Detects Changes**: Uses MutationObserver to detect when the language changes
3. **Applies Direction**: Automatically sets `dir="rtl"` or `dir="ltr"` on the document
4. **Adds Classes**: Adds `.rtl-active` or `.ltr-active` classes for custom CSS styling
5. **Google Translate Support**: Detects Google Translate modifications and re-checks language

## Installation

### 1. Include the Script

Add the RTL detector script to your HTML file:

```html
<head>
  <link rel="stylesheet" href="style.css" />
  <script src="rtl-detector.js" defer></script>
</head>
```

### 2. Include RTL CSS (Already in style.css)

The RTL-specific styles are already included in `style.css`. They handle:
- Timeline positioning for RTL
- Navigation reversal
- Button positioning
- Footer alignment

### 3. That's It!

The system works automatically. No additional configuration needed.

## Testing

### Option 1: Use the Demo Page

Open `rtl-demo.html` in your browser to test the RTL detection:

```bash
# Start a local server
python3 -m http.server 8080

# Open in browser
# http://localhost:8080/rtl-demo.html
```

Click the language buttons to see RTL/LTR switching in action.

### Option 2: Manually Change Language

In your browser console:

```javascript
// Switch to Arabic (RTL)
document.documentElement.lang = 'ar';

// Switch to English (LTR)
document.documentElement.lang = 'en';

// Switch to Hebrew (RTL)
document.documentElement.lang = 'he';

// Manually trigger detection
window.detectRTL();
```

### Option 3: Use Google Translate

1. Add Google Translate widget to your page
2. Select an RTL language (Arabic, Hebrew, etc.)
3. The script will automatically detect and apply RTL layout

## API

### Global Functions

#### `window.detectRTL()`

Manually trigger RTL/LTR detection:

```javascript
// Force detection
window.detectRTL();
```

Returns the current language code.

## How to Add Google Translate

Add this code to your HTML to enable Google Translate:

```html
<!-- Add before closing </body> tag -->
<div id="google_translate_element"></div>

<script type="text/javascript">
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: 'ar,he,fa,ur,en,es,fr,de,zh-CN,ja',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
  }
</script>

<script type="text/javascript" 
  src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit">
</script>
```

## CSS Classes

The script adds these classes to the `<body>` element:

### `.rtl-active`
Applied when an RTL language is detected. Use for custom RTL styling:

```css
.rtl-active .my-element {
  text-align: right;
  direction: rtl;
}
```

### `.ltr-active`
Applied when an LTR language is detected. Use for custom LTR styling:

```css
.ltr-active .my-element {
  text-align: left;
  direction: ltr;
}
```

## Examples

### Example 1: Custom RTL Styling

```css
/* Custom styles for RTL mode */
[dir="rtl"] .custom-element {
  margin-left: 0;
  margin-right: 20px;
}

[dir="rtl"] .arrow {
  transform: scaleX(-1); /* Flip arrows */
}
```

### Example 2: JavaScript Detection

```javascript
// Check if page is in RTL mode
const isRTL = document.documentElement.dir === 'rtl';

if (isRTL) {
  console.log('Page is in RTL mode');
  // Your RTL-specific code
}
```

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ All modern browsers with MutationObserver support

## Debugging

Enable console logging to see detection events:

```javascript
// The script automatically logs to console:
// - "RTL layout applied" when RTL is activated
// - "LTR layout applied" when LTR is activated
// - "Language attribute changed" when lang changes
// - "Google Translate detected" when translation happens
```

Open your browser's Developer Console (F12) to see these messages.

## Performance

- **Lightweight**: ~3KB unminified
- **Efficient**: Uses native MutationObserver API
- **Optimized**: Polls only when necessary (every 2 seconds as fallback)
- **No Dependencies**: Pure vanilla JavaScript

## Troubleshooting

### RTL not applying?

1. Check that the script is loaded: Look for "RTL Language Detector initialized" in console
2. Verify language code: Must be a valid RTL language code (ar, he, fa, ur, etc.)
3. Check console for errors
4. Try manual trigger: `window.detectRTL()`

### Google Translate not working?

1. Make sure Google Translate widget is properly initialized
2. Check that the script is listening for changes (look for console logs)
3. Try manually changing language: `document.documentElement.lang = 'ar'`

### Custom styles not applying?

1. Make sure CSS is loaded after the script
2. Use `[dir="rtl"]` selector for RTL-specific styles
3. Check specificity - you may need `!important` for some Bootstrap overrides

## Files

- **rtl-detector.js** - Main RTL detection script
- **style.css** - Includes RTL-specific CSS rules
- **rtl-demo.html** - Demo page for testing
- **RTL-README.md** - This documentation file

## License

Free to use for educational purposes.

## Credits

Created for the Intel Sustainability Timeline project as part of accessibility and internationalization improvements.
