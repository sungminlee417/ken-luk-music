# Dark/Light Mode Implementation

This document describes the comprehensive dark/light mode implementation for the Ken Luk Music website.

## Features

✅ **Theme Context & Provider** - React context for global theme state management
✅ **Theme Toggle Component** - Animated sun/moon icon toggle button  
✅ **CSS Variables System** - Dynamic color tokens that adapt to theme
✅ **Persistent Storage** - User preference saved in localStorage
✅ **System Preference Detection** - Respects user's OS theme setting
✅ **FOUC Prevention** - No flash of unstyled content on page load
✅ **SSR Safe** - Proper hydration handling

## File Structure

```
src/
├── components/
│   ├── ThemeProvider.tsx     # React context and theme logic
│   └── ThemeToggle.tsx       # Toggle button component
├── app/
│   ├── layout.tsx           # Theme provider wrapper + FOUC script
│   ├── globals.css          # CSS variables and theme definitions
│   └── (pages)/             # All pages updated for dark mode
└── tailwind.config.ts       # Theme-aware color configuration
```

## CSS Variables

### Light Mode
- Background: `#ffffff`
- Text: `#32373c` (dark gray)
- Borders: `#e5e7eb` (light gray)
- Cards: `#ffffff`

### Dark Mode  
- Background: `#0f172a` (dark navy)
- Text: `#e2e8f0` (light gray)
- Borders: `#334155` (dark gray)
- Cards: `#1e293b` (slightly lighter dark)

## Usage

The theme toggle appears in both desktop and mobile navigation. Users can:
- Click to manually toggle between light/dark mode
- System automatically detects OS preference on first visit
- Preference persists across browser sessions

## Technical Implementation

1. **Theme Context**: Manages theme state and toggle function
2. **CSS Variables**: `[data-theme="dark"]` selector switches color tokens
3. **Tailwind Config**: Extended with theme-aware color classes
4. **Component Updates**: All components use CSS variable classes
5. **Hydration Safety**: Prevents SSR mismatches with mounting checks

## Browser Support

- All modern browsers with CSS custom properties support
- Graceful fallback to light mode in older browsers
- localStorage persistence supported in all modern browsers