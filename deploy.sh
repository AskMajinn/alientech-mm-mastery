#!/bin/bash
# deploy-cpanel.sh - cPanel deployment script

echo "🚀 Starting cPanel deployment for Alien Tech..."

# Navigate to the repository directory
cd /home/YOUR_USERNAME/public_html/alientech

# Pull latest changes from GitHub
echo "📥 Pulling latest changes..."
git pull origin main

# Check if Node.js is available (some cPanel hosts have it)
if command -v node &> /dev/null; then
    echo "📦 Installing dependencies..."
    npm ci --production
    
    echo "🏗️ Building site..."
    npm run build
    
    echo "📋 Copying built files..."
    # Copy dist contents to web root
    cp -r dist/* ./
    
    # Clean up build files
    rm -rf node_modules dist
else
    echo "⚠️ Node.js not available - manual build required"
    echo "Upload pre-built files from local /dist/ folder"
fi

# Set proper permissions
echo "🔐 Setting file permissions..."
find . -type f -exec chmod 644 {} \;
find . -type d -exec chmod 755 {} \;

# Create .htaccess for clean URLs
echo "🔧 Creating .htaccess..."
cat > .htaccess << 'EOF'
# Astro static site configuration
Options -MultiViews
RewriteEngine On

# Handle client-side routing (if needed)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [QSA,L]

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType image/jpg "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 month"
    ExpiresByType image/gif "access plus 1 month"
    ExpiresByType image/svg+xml "access plus 1 month"
</IfModule>

# Compress files
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>
EOF

echo "✅ Deployment completed successfully!"
echo "🌐 Site should be live at: https://alientech.mm-mastery.com"
