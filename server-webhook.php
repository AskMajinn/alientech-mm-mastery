<?php
// webhook.php - cPanel GitHub webhook handler
// Upload this file to your /public_html/alientech/ directory

$secret = 'your_github_webhook_secret_here'; // Change this to a secure random string
$payload = file_get_contents('php://input');
$headers = getallheaders();
$signature = $headers['X-Hub-Signature-256'] ?? '';

// Verify GitHub signature
$expected = 'sha256=' . hash_hmac('sha256', $payload, $secret);
if (!hash_equals($expected, $signature)) {
    http_response_code(403);
    die('Invalid signature');
}

// Parse payload
$data = json_decode($payload, true);

// Check if it's a push to main branch
if ($data['ref'] === 'refs/heads/main') {
    
    // Log the deployment attempt
    $log = date('Y-m-d H:i:s') . " - Webhook received from GitHub\n";
    file_put_contents('deployment.log', $log, FILE_APPEND);
    
    // Execute deployment
    $output = shell_exec('./deploy.sh 2>&1');
    
    // Log the result
    $log = date('Y-m-d H:i:s') . " - Deployment output: " . $output . "\n";
    file_put_contents('deployment.log', $log, FILE_APPEND);
    
    // Respond to GitHub
    http_response_code(200);
    echo json_encode([
        'status' => 'success',
        'message' => 'Deployment triggered for alientech.mm-mastery.com',
        'timestamp' => date('c')
    ]);
    
} else {
    http_response_code(200);
    echo json_encode([
        'status' => 'ignored',
        'message' => 'Not a push to main branch',
        'ref' => $data['ref']
    ]);
}
?>
