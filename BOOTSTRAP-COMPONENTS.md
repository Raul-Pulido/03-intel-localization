# Bootstrap Interactive Components

This document explains the Bootstrap components added to enhance the Intel Sustainability website's user experience.

## Components Added

### 1. 🎠 Carousel Component

**Location:** After the hero section  
**Purpose:** Showcase key sustainability achievements in an engaging, rotating slideshow

**Features:**
- ✅ Auto-playing slides (transitions every 5 seconds)
- ✅ Manual navigation with previous/next buttons
- ✅ Clickable indicators (dots) to jump between slides
- ✅ Responsive layout with images and text side-by-side
- ✅ Three slides highlighting: Environmental Leadership, Innovation Heritage, and RISE Strategy

**How It Works:**
```html
<div id="achievementsCarousel" class="carousel slide" data-bs-ride="carousel">
  <!-- Indicators, slides, and controls -->
</div>
```

The `data-bs-ride="carousel"` attribute enables auto-play. Each slide contains:
- An image on the left (col-md-6)
- Text content on the right (col-md-6)
- Responsive stacking on mobile devices

**Customization:**
- Adjust timing with `data-bs-interval="3000"` (milliseconds)
- Disable auto-play by removing `data-bs-ride="carousel"`
- Add more slides by duplicating `carousel-item` divs

---

### 2. 🎯 Accordion Component (FAQ Section)

**Location:** After the newsletter section  
**Purpose:** Organize frequently asked questions in a space-efficient, interactive format

**Features:**
- ✅ Collapsible panels that expand/collapse on click
- ✅ Only one panel open at a time (controlled by `data-bs-parent`)
- ✅ First item open by default for immediate visibility
- ✅ Smooth animations and transitions
- ✅ Fully accessible with ARIA attributes

**How It Works:**
```html
<div class="accordion" id="sustainabilityAccordion">
  <div class="accordion-item">
    <h3 class="accordion-header">
      <button class="accordion-button" data-bs-toggle="collapse" 
              data-bs-target="#collapseOne">
        Question goes here
      </button>
    </h3>
    <div id="collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body">
        Answer goes here
      </div>
    </div>
  </div>
</div>
```

**Customization:**
- Add `show` class to `collapse` to start expanded
- Remove `data-bs-parent` to allow multiple panels open simultaneously
- Add more FAQ items by duplicating `accordion-item` divs

---

### 3. 📱 Bootstrap JavaScript Bundle

**Location:** Before closing `</body>` tag  
**Purpose:** Enable all interactive Bootstrap components

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

This enables:
- Carousel auto-play and navigation
- Accordion expand/collapse functionality
- Modal dialogs (available for future use)
- Tooltips and popovers
- All other Bootstrap interactive features

---

## Navigation Updates

Added "FAQ" link to the navigation bar:
```html
<li><a href="#faq">FAQ</a></li>
```

This allows users to jump directly to the FAQ section with smooth scrolling.

---

## CSS Customizations

### Carousel Styling
- Added Intel blue-themed controls
- Rounded images with shadows
- Minimum height for consistent slide sizing
- Responsive layout adjustments

### Accordion Styling
- Intel blue color scheme
- Expanded items have blue background with white text
- Collapsed items have white background with blue text
- Light gray background for answer content
- Custom focus states for accessibility

### Key CSS Classes:
```css
.carousel-slide-content    /* Container for carousel content */
.carousel-indicators       /* Styled with Intel blue */
.accordion-button          /* Intel blue theme */
.accordion-body            /* Light background for readability */
```

---

## Accessibility Features

All components include:
- ✅ **ARIA Labels:** Proper labeling for screen readers
- ✅ **Keyboard Navigation:** Full keyboard support
- ✅ **Focus Indicators:** Visible focus states
- ✅ **Semantic HTML:** Proper heading hierarchy
- ✅ **Screen Reader Text:** Hidden labels for controls

---

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance

- **Lazy Loading:** Carousel images can use `loading="lazy"`
- **Minimal JavaScript:** Bootstrap uses efficient event delegation
- **No jQuery Required:** Bootstrap 5 uses vanilla JavaScript
- **Small Footprint:** Only ~25KB gzipped for all components

---

## Testing the Components

### Carousel
1. Wait 5 seconds to see auto-advance
2. Click left/right arrows to navigate manually
3. Click indicator dots to jump to specific slides
4. Resize browser to test responsive layout

### Accordion
1. Click question headers to expand/collapse
2. Notice only one panel open at a time
3. Test keyboard navigation (Tab, Enter, Space)
4. Verify smooth animations

---

## Advanced Usage

### Adding a Modal

Modals are great for detailed timeline information. Example:

```html
<!-- Trigger Button -->
<button data-bs-toggle="modal" data-bs-target="#myModal">
  View Details
</button>

<!-- Modal Structure -->
<div class="modal fade" id="myModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        Content goes here
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
```

### Adding Tooltips

Tooltips need manual initialization:

```html
<button data-bs-toggle="tooltip" title="Helpful text">
  Hover Me
</button>

<script>
  const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  [...tooltips].map(el => new bootstrap.Tooltip(el));
</script>
```

---

## Demo Page

Open [bootstrap-components-demo.html](bootstrap-components-demo.html) to see:
- All Bootstrap components in action
- Implementation examples
- Code snippets
- Additional components (badges, progress bars, alerts, tooltips)

---

## Troubleshooting

### Carousel not auto-playing?
- Ensure Bootstrap JS is loaded
- Check `data-bs-ride="carousel"` attribute is present
- Verify no JavaScript errors in console

### Accordion not opening?
- Confirm matching IDs between button and collapse div
- Check `data-bs-target` points to correct element
- Ensure Bootstrap JS is loaded

### Styles not applying?
- Make sure custom CSS is loaded after Bootstrap CSS
- Use `!important` sparingly for override specificity issues
- Check browser DevTools for CSS conflicts

---

## Next Steps

Consider adding:
- **Modals** for detailed timeline event information
- **Tooltips** for quick hints on hover
- **Progress Bars** to visualize sustainability metrics
- **Tabs** to organize different sustainability categories
- **Offcanvas** for mobile-friendly navigation menu

---

## Resources

- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
- [Bootstrap Carousel Examples](https://getbootstrap.com/docs/5.3/components/carousel/)
- [Bootstrap Accordion Examples](https://getbootstrap.com/docs/5.3/components/accordion/)
- [Bootstrap JavaScript](https://getbootstrap.com/docs/5.3/getting-started/javascript/)

---

## Files Modified

1. **index.html** - Added carousel, accordion, and Bootstrap JS
2. **style.css** - Added custom styling for components
3. **bootstrap-components-demo.html** - Created demo page
4. **BOOTSTRAP-COMPONENTS.md** - This documentation

All components are production-ready and fully functional! 🎉
