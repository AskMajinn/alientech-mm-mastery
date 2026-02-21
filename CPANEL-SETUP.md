# cPanel Deployment Instructions

## Setting up alientech.mm-mastery.com subdomain

### 1. Create Subdomain in cPanel
- Login to cPanel
- Go to "Subdomains" 
- Create subdomain: "alientech"
- Document Root: /public_html/alientech/

### 2. Enable Git in cPanel
- Go to "Git Version Control" in cPanel
- Click "Create" 
- Repository URL: https://github.com/YOUR_USERNAME/alientech-mm-mastery.git
- Repository Path: /public_html/alientech/
- Branch: main

### 3. Set up Auto-Deployment
- In Git Version Control, click "Manage"
- Enable "Pull or Deploy" tab
- Create deployment script (see deploy-cpanel.sh)

### 4. Configure Webhook (Optional)
- In GitHub repo settings → Webhooks
- Add webhook URL: https://alientech.mm-mastery.com/webhook.php
- Content type: application/json
- Events: Just the push event
