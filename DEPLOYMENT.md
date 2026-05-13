# 🚀 Deployment Guide

## Quick Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Vite
   - Click "Deploy"
   - Done! Your site will be live in ~1 minute

## Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Or connect your GitHub repo
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`

## Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## Environment Variables

Currently, the site doesn't require environment variables. 

For future integrations, create a `.env` file:
```
VITE_ADSTERRA_ID=your_id_here
VITE_ADSENSE_ID=your_id_here
```

## Adding Ads

### Adsterra Integration
1. Sign up at [adsterra.com](https://adsterra.com)
2. Get your ad codes
3. Replace `AdPlaceholder` components with actual ad code
4. Test in production environment

### Google AdSense Integration
1. Apply for AdSense approval
2. Add AdSense script to `index.html`
3. Place ad units in designated zones
4. Wait for approval (can take 1-2 weeks)

## Custom Domain

### On Vercel
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### On Netlify
1. Go to "Domain settings"
2. Add custom domain
3. Configure DNS (CNAME or A record)
4. Enable HTTPS (automatic)

## Performance Optimization

The site is already optimized, but for further improvements:

1. **Enable Compression** (done automatically on Vercel/Netlify)
2. **CDN** (included with hosting)
3. **Image Optimization**
   - Images are already lazy-loaded
   - Consider using WebP format
4. **Analytics**
   - Add Google Analytics
   - Add Pinterest Analytics
   - Track conversion rates

## SEO Setup

1. **Google Search Console**
   - Add your site
   - Submit sitemap
   - Monitor indexing

2. **Pinterest**
   - Verify your domain
   - Enable Rich Pins
   - Create boards for each category

3. **Facebook**
   - Add Open Graph meta tags (already included)
   - Create Facebook Page
   - Share planners regularly

## Monitoring

### Free Tools
- **Google Analytics** - Traffic tracking
- **Google Search Console** - SEO monitoring
- **Vercel Analytics** - Performance metrics
- **Pinterest Analytics** - Pin performance

### Recommended Setup
```javascript
// Add to index.html for Google Analytics
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Backup Strategy

1. **Git Repository** - Always push changes
2. **Database** - Not needed (static site)
3. **Content Backup** - Keep planner data in version control

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Routing Issues (404 on refresh)
Add `_redirects` file to public folder:
```
/*    /index.html   200
```

### Images Not Loading
- Check image URLs
- Ensure images are in public folder
- Verify CORS settings

## Next Steps After Deployment

1. ✅ Submit to Google Search Console
2. ✅ Verify Pinterest domain
3. ✅ Add analytics tracking
4. ✅ Create social media accounts
5. ✅ Start Pinterest marketing campaign
6. ✅ Apply for AdSense
7. ✅ Set up Adsterra ads
8. ✅ Create content calendar
9. ✅ Monitor performance
10. ✅ Scale and optimize

## Support

For deployment issues:
- Check build logs
- Review hosting documentation
- Verify all dependencies are installed
- Test locally before deploying

---

Happy Deploying! 🎉
