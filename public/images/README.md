# Images Directory Structure

This folder contains all images used in the IACTS Conference 2026 website.

## Folder Structure

```
images/
├── committee/          # Organizing committee member photos
├── collaborations/     # Partner/collaboration logos
├── mumbai/            # Mumbai city images
├── venue/             # Venue and location images
└── logos/             # Brand logos (IACTS, VAMA)
```

---

## Required Images

### Committee Photos (`committee/`)

Place committee member photos here. Required files:

- `anvay-mulay.png` - Dr. Anvay Mulay (Organising Chairman)
- `Bejoy-Kutty.png` - Dr. Bijoy Kutty (Organising Secretary)
- `Zainul-Hamdulay.png` - Dr. Zainul Hamdulay (Organising Secretary)
- `Neeraj-Kamat.png` - Dr. Neeraj Kamat (Treasurer)
- `Sandeep-Sinha.png` - Dr. Sandeep Sinha (General Manager)

**Recommended specs:**

- Format: PNG or JPG
- Size: 400x400px minimum
- Aspect ratio: 1:1 (square)
- File size: < 200KB each

---

### Collaboration Logos (`collaborations/`)

Place partner organization logos here. Required files:

- `logo1.jpg` - Partner 1 (Naveen)
- `logo2.jpg` - Partner 2 (Pooja)
- `logo3.jpg` - Partner 3 (SaiRam)
- `logo4.jpg` - Partner 4 (Narender)

**Recommended specs:**

- Format: JPG or PNG (transparent background preferred)
- Size: 300x200px minimum
- Aspect ratio: 3:2
- File size: < 100KB each

---

### Mumbai Images (`mumbai/`)

Place Mumbai city landmark photos here. Required files:

- `gateway-of-india.jpg` - Gateway of India monument
- `marine-drive.jpg` - Marine Drive promenade
- `taj-hotel.jpg` - Taj Mahal Palace Hotel
- `mumbai-skyline.jpg` - Mumbai city skyline
- `cst-station.jpg` - Chhatrapati Shivaji Terminus
- `sea-link.jpg` - Bandra-Worli Sea Link

**Recommended specs:**

- Format: JPG
- Size: 800x600px minimum
- Aspect ratio: 16:9
- File size: < 300KB each
- High quality landscape photos

---

### Venue Images (`venue/`)

Place venue-related images here. Required files:

- `jio-world-exterior.jpg` - Jio World Convention Centre exterior
- `jio-world-interior.jpg` - Convention centre interior/hall

**Recommended specs:**

- Format: JPG
- Size: 1200x800px minimum
- Aspect ratio: 3:2 or 16:9
- File size: < 500KB each
- Professional quality photos

---

### Logos (`logos/`)

Place official logos here. Required files:

- `iacts-logo.png` - IACTS official logo
- `vama-logo.png` - VAMA Events logo

**Recommended specs:**

- Format: PNG (transparent background)
- Size: 512x512px minimum
- Aspect ratio: 1:1 or original
- File size: < 150KB each
- High resolution for clarity

---

## Adding Images

### Option 1: Manual Upload

1. Place your images in the appropriate folder
2. Ensure filenames match exactly as listed above
3. Restart the development server if needed

### Option 2: Replace Placeholders

If you don't have actual images yet:

- The application includes fallback placeholders
- Components will show text placeholders if images fail to load
- Replace placeholder images gradually as they become available

---

## Image Optimization Tips

### Before Adding Images:

1. **Compress images**: Use tools like TinyPNG, ImageOptim, or Squoosh
2. **Resize properly**: Don't use 4000x3000px images when 800x600px works
3. **Choose correct format**:
   - JPG: Photos, complex images
   - PNG: Logos, images needing transparency
   - WebP: Modern format, smaller size (if browser support OK)

### Online Tools:

- [TinyPNG](https://tinypng.com/) - PNG/JPG compression
- [Squoosh](https://squoosh.app/) - Image optimization
- [ImageOptim](https://imageoptim.com/) - Mac app for optimization

---

## Fallback Behavior

All images have fallback handling:

- If an image fails to load, a placeholder appears
- No broken image icons
- Graceful degradation for better UX

---

## Testing Images

After adding images:

1. Run `npm run dev`
2. Check each section visually
3. Open browser DevTools Console
4. Look for 404 errors on images
5. Verify all images load correctly

---

## Image Licensing

**Important**: Ensure you have proper rights to use all images:

- Committee photos: Get consent from individuals
- Mumbai photos: Use licensed/royalty-free images
- Venue photos: Get permission from Jio World Convention Centre
- Partner logos: Get approval from partner organizations
- Use stock photo sites with proper licenses if needed

### Recommended Stock Photo Sites:

- [Unsplash](https://unsplash.com/) - Free high-quality photos
- [Pexels](https://pexels.com/) - Free stock photos
- [Pixabay](https://pixabay.com/) - Free images and videos

---

## Performance Notes

- All images lazy load automatically (React handles this)
- Images are cached by browser after first load
- Consider using Next.js Image component for further optimization in future
- Current setup works well for conference websites

---

## Need Help?

If images aren't showing:

1. Check filenames match exactly (case-sensitive)
2. Check file format (PNG vs JPG)
3. Check browser console for 404 errors
4. Verify files are in correct folder
5. Clear browser cache and reload

---

**Note**: The application will work without images - placeholders will display until you add actual image files.
