# CI/CD Pipeline Setup Guide

## 🚀 What is CI/CD?

**CI (Continuous Integration):** Automatically test and build code on every commit
**CD (Continuous Deployment):** Automatically deploy to production when tests pass

## 📊 Benefits

- Catch bugs early
- Automate testing
- Faster deployments
- Consistent quality
- Safe rollbacks

## 🔧 Step 1: GitHub Setup

### Create Repository

1. Go to [GitHub.com](https://github.com)
2. Create new repository: "my-site-atia"
3. Add `.gitignore`:
   ```
   node_modules/
   .env
   .env.local
   dist/
   build/
   *.log
   .DS_Store
   ```

4. Clone to local:
   ```bash
   git clone https://github.com/yourusername/my-site-atia.git
   cd my-site-atia
   ```

5. Add files:
   ```bash
   git add .
   git commit -m "Initial commit: Portfolio website"
   git push origin main
   ```

## 🔄 Step 2: GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Build and Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [18.x]
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Minify CSS and JS
      run: npm run build
    
    - name: Run tests
      run: npm test --if-present
    
    - name: Upload coverage
      uses: codecov/codecov-action@v3
      with:
        files: ./coverage/coverage-final.json

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
    
    - name: Deploy to Netlify
      uses: netlify/actions/cli@master
      with:
        args: deploy --prod
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## 🐙 Step 3: GitHub Secrets

1. Go to Settings > Secrets and variables > Actions
2. Add secrets:
   - `NETLIFY_AUTH_TOKEN`: Your Netlify token
   - `NETLIFY_SITE_ID`: Your Netlify site ID

To get Netlify tokens:
1. Go to [Netlify.com](https://netlify.com)
2. Settings > Applications > Personal access tokens
3. Create token and copy

## 🌐 Step 4: Deploy to Netlify

### Option A: Automatic Deploy

1. Connect GitHub repo to Netlify
2. Choose branch: `main`
3. Build command: `npm run build`
4. Publish directory: `./`

### Option B: Manual Deploy

```bash
npm install -g netlify-cli
netlify init
netlify deploy --prod
```

## ☁️ Step 5: Alternative Deployment Options

### Vercel

```bash
npm i -g vercel
vercel --prod
```

Create `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "./"
}
```

### GitHub Pages

1. Enable in Settings > Pages
2. Source: Deploy from a branch
3. Branch: gh-pages
4. Folder: / (root)

Then use workflow from Step 2

## 📋 Step 6: Add Linting

Add `.github/workflows/lint.yml`:

```yaml
name: Lint Code

on: [push, pull_request]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: 18
    - run: npm ci
    - run: npm run lint --if-present
```

Add to `package.json`:
```json
"scripts": {
  "lint": "eslint assets/js/**/*.js",
  "lint:fix": "eslint assets/js/**/*.js --fix"
}
```

## 📊 Step 7: Performance Monitoring

Add `.github/workflows/lighthouse.yml`:

```yaml
name: Lighthouse Check

on: [push, pull_request]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: treosh/lighthouse-ci-action@v9
      with:
        uploadArtifacts: true
        temporaryPublicStorage: true
```

## 🔔 Step 8: Notifications

### Slack Integration

Add to workflow:
```yaml
- name: Slack Notification
  if: failure()
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    text: 'Deployment failed!'
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

### Email Notifications

GitHub automatically sends emails on:
- Workflow failures
- Manual workflow runs

## 📝 Step 9: Setup Local Git Hooks

Create `.husky/pre-commit`:

```bash
#!/bin/sh
npm run lint
```

Install husky:
```bash
npm install husky --save-dev
npx husky install
chmod +x .husky/pre-commit
```

## 📋 Deployment Checklist

- [ ] Create GitHub repository
- [ ] Add `.gitignore`
- [ ] Add GitHub Actions workflows
- [ ] Configure secrets
- [ ] Choose deployment platform (Netlify/Vercel/GitHub Pages)
- [ ] Configure build command
- [ ] Configure publish directory
- [ ] Test workflow on PR
- [ ] Verify production deployment
- [ ] Set up monitoring

## 🎯 Workflow Status Checks

After setup:

```
✅ Build successful
✅ Tests passed
✅ Lint passed
✅ Performance good
✅ Deployed to production
```

## 📊 Monitoring Dashboard

After deployment, monitor:

1. **GitHub Actions:** github.com/yourusername/my-site-atia/actions
2. **Netlify:** app.netlify.com/sites/your-site
3. **Analytics:** analytics.google.com (if enabled)
4. **Performance:** pagespeed.web.dev

## 🔗 Useful Commands

```bash
# View workflow status
git log --oneline

# Trigger manual workflow
# Go to Actions tab > Select workflow > Run workflow

# View logs
# On GitHub Actions tab or Netlify deploy logs

# Rollback deployment
git revert <commit-hash>
git push origin main
```

## 📈 CI/CD Maturity Levels

**Level 1:** Manual deployment
**Level 2:** Automated builds on push
**Level 3:** Automated tests before deploy
**Level 4:** Continuous deployment to staging
**Level 5:** Continuous deployment to production

## 🚀 Expected Timeline

- Week 1: Setup GitHub + basic workflow
- Week 2: Add linting and tests
- Week 3: Add performance monitoring
- Week 4: Optimize and document

## 🔗 Resources

- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Netlify CI/CD](https://docs.netlify.com/configure-builds/overview/)
- [GitHub Pages Deploy](https://pages.github.com)
- [Vercel CI/CD](https://vercel.com/docs/concepts/git)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

## 💡 Pro Tips

1. **Semantic Commits:** Use conventional commits
   ```
   feat: add newsletter signup
   fix: correct mobile menu behavior
   docs: update deployment guide
   ```

2. **Branch Protection:** Require PR reviews before merge

3. **Staging Environment:** Deploy to preview before production

4. **Automated Rollback:** Keep previous versions for rollback

5. **Monitoring:** Set up alerts for deployment failures
