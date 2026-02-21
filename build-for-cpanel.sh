# Build and Upload Script for cPanel
# Use this if your cPanel doesn't support Node.js

echo "🏗️ Building Alien Tech site locally..."

# Build the site
npm run build

echo "📦 Creating deployment package..."

# Create a zip file with the built site
cd dist
zip -r ../alientech-site.zip .
cd ..

echo "✅ Built site ready for upload!"
echo "📁 Upload the contents of /dist/ folder to /public_html/alientech/"
echo "📦 Or upload alientech-site.zip and extract it in cPanel File Manager"

# Optional: Open file manager
echo "Opening dist folder..."
open dist
