# 🚀 Quick Start Guide

## Get Started in 5 Minutes

### 1. Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

### 2. Make It Yours

#### Add New Planners
Edit `src/data/planners.ts`:

```typescript
{
  id: 'your-planner-id',
  title: 'Your Planner Title',
  description: 'Brief description...',
  category: 'daily', // or weekly, budget, study, meal, habit, fitness
  imageUrl: 'https://your-image-url.jpg',
  pdfUrl: '#', // Will implement actual PDFs later
  tags: ['tag1', 'tag2', 'tag3'],
  featured: true, // Shows on homepage
}
```

#### Change Colors
Edit `tailwind.config.js` or update the pink-* classes in components:
- `pink-500` - Primary color (buttons, links)
- `pink-50` - Light backgrounds
- `pink-600` - Hover states

#### Update Branding
1. **Site Name:** Search and replace "Printable Planner Hub" in:
   - `src/components/Header.tsx`
   - `src/components/Footer.tsx`
   - `index.html`

2. **Logo:** Replace emoji (📋) in Header with your logo

3. **Contact Email:** Update in `src/pages/ContactPage.tsx`

### 3. Build & Deploy

```bash
# Build for production
npm run build

# Test production build locally
npm run preview
```

Then deploy to Vercel:
1. Push to GitHub
2. Import to Vercel
3. Deploy!

## File Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Top navigation
│   ├── Footer.tsx      # Bottom footer
│   ├── PlannerCard.tsx # Planner card component
│   ├── SearchModal.tsx # Search functionality
│   ├── AdPlaceholder.tsx # Ad zones
│   └── ScrollToTop.tsx # Auto scroll on navigation
├── data/
│   └── planners.ts     # All planner data & categories
├── pages/              # Page components
│   ├── HomePage.tsx    # Main landing page
│   ├── PlannerDetailPage.tsx # Single planner view
│   ├── CategoryPage.tsx # Category filtered view
│   ├── CategoriesListPage.tsx # All categories
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   ├── PrivacyPage.tsx
│   └── TermsPage.tsx
├── App.tsx            # Main app with routing
├── index.css          # Global styles
└── main.tsx          # App entry point
```

## Key Features Explained

### 1. Categories System
7 built-in categories with icons:
- Daily Planner 📅
- Weekly Planner 📆
- Budget Planner 💰
- Study Planner 📚
- Meal Planner 🍽️
- Habit Tracker ✅
- Fitness Planner 💪

### 2. Search Functionality
Click search icon → Type → See results instantly
Searches: titles, descriptions, and tags

### 3. Responsive Design
Automatically adjusts for:
- Mobile phones (1 column)
- Tablets (2 columns)
- Laptops (3 columns)
- Desktops (4 columns)

### 4. Ad Placement Ready
`<AdPlaceholder />` components mark where ads go:
- Horizontal: Below hero, between sections
- Vertical: Sidebars
- Square: Content breaks

Replace with real ad code when ready!

### 5. SEO Optimized
Every planner page has:
- Unique URL: `/planner/planner-name`
- Meta title and description
- Clean HTML structure
- Fast loading (90KB gzipped)

## Common Tasks

### Add a Category
Edit `src/data/planners.ts`:
```typescript
{ id: 'new-category', name: 'New Category', icon: '🎯' }
```

### Change Homepage Hero
Edit `src/pages/HomePage.tsx`:
```tsx
<h1>Your New Headline</h1>
<p>Your new subheading</p>
```

### Update Contact Form
Edit `src/pages/ContactPage.tsx`
Add email service integration (EmailJS, Formspree, etc.)

### Add Analytics
Add to `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

### Implement Real PDFs
1. Create PDF files
2. Place in `public/pdfs/` folder
3. Update `pdfUrl` in planners.ts:
   ```typescript
   pdfUrl: '/pdfs/planner-name.pdf'
   ```

## Marketing Checklist

### Before Launch
- [ ] Add 20+ planners
- [ ] Test all links
- [ ] Check mobile responsiveness
- [ ] Add Google Analytics
- [ ] Create social media accounts

### After Launch
- [ ] Submit to Google Search Console
- [ ] Create Pinterest account
- [ ] Design Pinterest pins
- [ ] Join Facebook groups
- [ ] Start daily pinning
- [ ] Apply for Adsterra
- [ ] Share on social media

### First Week
- [ ] Pin 5-10 times daily
- [ ] Share in groups
- [ ] Post on Instagram
- [ ] Monitor analytics
- [ ] Respond to comments

### First Month
- [ ] Add 5-10 new planners
- [ ] Optimize top pages
- [ ] Build email list (optional)
- [ ] Apply for AdSense
- [ ] Create content calendar

## Troubleshooting

### Site won't build?
```bash
rm -rf node_modules
npm install
npm run build
```

### Changes not showing?
Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)

### Images not loading?
- Use full URLs (https://...)
- Check image format (jpg, png, webp)
- Verify image URL is accessible

### 404 on page refresh?
Add `public/_redirects` file:
```
/*    /index.html   200
```

## Next Steps

1. **Content Creation**
   - Design planners (Canva recommended)
   - Export as PDF
   - Create preview images

2. **Marketing Setup**
   - Pinterest Business Account
   - Instagram Business Account
   - Facebook Page
   - Google Analytics

3. **Monetization**
   - Adsterra Account
   - Google AdSense (after traffic)
   - Affiliate Programs (Amazon, Canva)

4. **Growth**
   - Follow CONTENT_STRATEGY.md
   - Pin consistently
   - Add new planners weekly
   - Engage with audience

## Resources

- **Design Tool:** [Canva](https://canva.com) - Free planner templates
- **Images:** [Unsplash](https://unsplash.com) - Free high-quality photos
- **Hosting:** [Vercel](https://vercel.com) - Free hosting
- **Analytics:** [Google Analytics](https://analytics.google.com)
- **Pinterest:** [Pinterest Business](https://business.pinterest.com)
- **Icons:** [Lucide Icons](https://lucide.dev)

## Support

Need help? Check:
1. README.md - Full documentation
2. DEPLOYMENT.md - Hosting guides
3. CONTENT_STRATEGY.md - Growth strategies

---

**You're all set! Start adding planners and launch your site!** 🎉

Built with React + Vite + Tailwind CSS + TypeScript
