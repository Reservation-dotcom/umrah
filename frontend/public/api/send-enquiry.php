<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

const ENQUIRY_TO_EMAIL = 'admin@umrahplaners.co.uk';
const ENQUIRY_FROM_EMAIL = 'admin@umrahplaners.co.uk';

function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload);
    exit;
}

function escapeHtml(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, ['success' => false, 'errors' => ['Method not allowed.']]);
}

$rawBody = file_get_contents('php://input');
$body = json_decode($rawBody === false ? '' : $rawBody, true);

if (!is_array($body)) {
    respond(400, ['success' => false, 'errors' => ['Invalid request body.']]);
}

$name = isset($body['name']) && is_string($body['name']) ? trim($body['name']) : '';
$email = isset($body['email']) && is_string($body['email']) ? trim($body['email']) : '';
$phone = isset($body['phone']) && is_string($body['phone']) ? trim($body['phone']) : '';
$errors = [];

if (strlen($name) < 2 || strlen($name) > 120) {
    $errors[] = 'Name must be between 2 and 120 characters.';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Please enter a valid email address.';
}
if (strlen($phone) > 30 || !preg_match('/^[\d\s+\-()]{7,30}$/', $phone) || preg_match_all('/\d/', $phone) < 7) {
    $errors[] = 'Please enter a valid phone number.';
}

if ($errors) {
    respond(422, ['success' => false, 'errors' => $errors]);
}

$fields = [
    'Full Name' => $name,
    'Email Address' => $email,
    'Phone Number' => $phone,
    'No. of Passengers' => $body['passengers'] ?? 'Not specified',
    'Travel Date / Preferred Month' => $body['travelDate'] ?? 'Not specified',
    'Number of Days' => $body['numberOfDays'] ?? 'Not specified',
    'Departure City' => $body['city'] ?? 'Not specified',
    'Package / Enquiry From' => $body['enquirySource'] ?? 'Website',
    'Message' => $body['message'] ?? 'Not specified',
];

$rows = '';
foreach ($fields as $label => $value) {
    $value = is_scalar($value) ? (string) $value : 'Not specified';
    $rows .= '<tr><th align="left" style="padding:10px;border-bottom:1px solid #e5e7eb">'
        . escapeHtml($label)
        . '</th><td style="padding:10px;border-bottom:1px solid #e5e7eb">'
        . nl2br(escapeHtml($value))
        . '</td></tr>';
}

$html = '<!doctype html><html lang="en"><body style="font-family:Arial,sans-serif;color:#1f2937">'
    . '<h2>New Umrah Planers website enquiry</h2>'
    . '<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:640px">'
    . $rows
    . '</table></body></html>';

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: Umrah Planner <' . ENQUIRY_FROM_EMAIL . '>',
    'Reply-To: ' . $email,
];

if (!function_exists('mail')) {
    error_log('[send-enquiry] PHP mail() is not available on this host.');
    respond(500, ['success' => false, 'errors' => ['Email sending is not enabled on this server.']]);
}

$sent = mail(
    ENQUIRY_TO_EMAIL,
    'New Website Enquiry - Umrah Planner',
    $html,
    implode("\r\n", $headers)
);

if (!$sent) {
    error_log('[send-enquiry] PHP mail() failed to send an enquiry.');
    respond(500, ['success' => false, 'errors' => ['We could not send your enquiry. Please try again later.']]);
}

respond(200, ['success' => true, 'message' => 'Enquiry sent successfully.']);
