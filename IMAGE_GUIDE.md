# Image Assets Guide

## Quick Reference

All images should be placed in `/public/images/` folder.

### Image Paths Used in Components:

#### Logos

- `/images/logos/iacts-logo.png` - Main IACTS logo (Hero section)
- `/images/logos/vama-logo.png` - VAMA Events logo (Footer)

#### Committee Members

- `/images/committee/anvay-mulay.png`
- `/images/committee/Bejoy-Kutty.png`
- `/images/committee/Zainul-Hamdulay.png`
- `/images/committee/Neeraj-Kamat.png`
- `/images/committee/Sandeep-Sinha.png`

#### Collaboration Partners

- `/images/collaborations/logo1.jpg`
- `/images/collaborations/logo2.jpg`
- `/images/collaborations/logo3.jpg`
- `/images/collaborations/logo4.jpg`

#### Mumbai Images

- `/images/mumbai/gateway-of-india.jpg`
- `/images/mumbai/marine-drive.jpg`
- `/images/mumbai/taj-hotel.jpg`
- `/images/mumbai/mumbai-skyline.jpg`
- `/images/mumbai/cst-station.jpg`
- `/images/mumbai/sea-link.jpg`

#### Venue Images

- `/images/venue/jio-world-exterior.jpg`
- `/images/venue/jio-world-interior.jpg`

## Current Status

✅ Image folders created
✅ All components updated with image paths
✅ Fallback placeholders implemented
⏳ Waiting for actual image files

## Next Steps

1. **Add your images** to the appropriate folders
2. **Ensure filenames match exactly** (case-sensitive)
3. **Optimize images** before adding (compress to reduce size)
4. Images will automatically load when files are present
5. If images are missing, placeholders will display

## Testing

After adding images:

```bash
npm run dev
```

Then check:

- Hero section for IACTS logo
- Collaboration section for partner logos
- Committee section for member photos
- About Mumbai section for city images
- Venue section for location photos
- Footer for VAMA logo

## Fallback Behavior

All images have error handling:

- Missing images won't break the site
- Placeholder text/SVG appears instead
- No broken image icons
- Graceful degradation

## Image Sources

You can get images from:

- Official IACTS materials
- Partner organizations
- Licensed stock photos (Unsplash, Pexels)
- Professional photography
- Committee member photos (with permission)

---

**The site is fully functional with or without images!**
