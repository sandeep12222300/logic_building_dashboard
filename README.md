# Logic Building DSA Dashboard

## Progress persistence

The live GitHub Pages dashboard stores checkbox progress in the browser's `localStorage`, so closing the browser and returning to the same live URL in the same browser will keep your progress.

The dashboard also includes:
- Export Progress: downloads `logic-building-progress.json`
- Import Progress: restores a previously exported backup
- Last Saved timestamp

### Important
Browser localStorage is tied to the browser/device. It does not automatically sync across multiple devices or browsers.

## Publish with GitHub Pages

1. Create a GitHub repository.
2. Upload `index.html` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save.
