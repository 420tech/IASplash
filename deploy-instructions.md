# GitHub Deployment Instructions

## After creating your GitHub repository, run these commands:

```bash
# Add GitHub repository as remote (replace with your actual repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

## Enable GitHub Pages:
1. Go to repository Settings
2. Click "Pages" in sidebar
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"

## Your website will be live at:
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/

## Future Updates:
To update your website, just:
```bash
git add .
git commit -m "Update website"
git push
```

The changes will automatically deploy to GitHub Pages within a few minutes.