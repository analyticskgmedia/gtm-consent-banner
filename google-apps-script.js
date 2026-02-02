/**
 * Google Apps Script - Consent Log Receiver
 * 
 * This script receives consent data from the KG Media Consent Banner
 * and logs it to a Google Sheet for GDPR compliance.
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet
 * 2. Go to Extensions → Apps Script
 * 3. Delete any existing code and paste this entire script
 * 4. Click "Deploy" → "New deployment"
 * 5. Select type: "Web app"
 * 6. Set "Execute as": "Me"
 * 7. Set "Who has access": "Anyone"
 * 8. Click "Deploy" and authorize when prompted
 * 9. Copy the Web App URL and paste it in your GTM template
 * 
 * The script will automatically create headers on first run.
 */

// Configuration
const SHEET_NAME = 'Consent Log'; // Name of the sheet tab
const HEADERS = [
  'timestamp',
  'consent_id', 
  'action',
  'analytics_storage',
  'ad_storage',
  'ad_user_data',
  'ad_personalization',
  'functionality_storage',
  'personalization_storage',
  'page_url',
  'user_agent',
  'banner_version'
];

/**
 * Handles GET requests from the consent banner (used for cross-origin compatibility)
 */
function doGet(e) {
  try {
    // Check if this is a data submission (has parameters) or just a test
    if (e.parameter && e.parameter.consent_id) {
      // Get or create the sheet
      const sheet = getOrCreateSheet();
      
      // Prepare the row data in the correct order
      const rowData = HEADERS.map(header => e.parameter[header] || '');
      
      // Append the row
      sheet.appendRow(rowData);
      
      // Return 1x1 transparent pixel for image beacon
      return ContentService
        .createTextOutput('')
        .setMimeType(ContentService.MimeType.TEXT);
    }
    
    // If no parameters, return status message
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'ok', 
        message: 'Consent Log endpoint is working.' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing consent log:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handles POST requests from the consent banner (fallback)
 */
function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Get or create the sheet
    const sheet = getOrCreateSheet();
    
    // Prepare the row data in the correct order
    const rowData = HEADERS.map(header => data[header] || '');
    
    // Append the row
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log error and return error response
    console.error('Error processing consent log:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Gets the sheet or creates it with headers if it doesn't exist
 */
function getOrCreateSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  
  // If sheet doesn't exist, create it
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    // Add headers
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    // Format headers
    sheet.getRange(1, 1, 1, HEADERS.length)
      .setFontWeight('bold')
      .setBackground('#4285f4')
      .setFontColor('white');
    // Freeze header row
    sheet.setFrozenRows(1);
    // Auto-resize columns
    for (let i = 1; i <= HEADERS.length; i++) {
      sheet.autoResizeColumn(i);
    }
  }
  
  return sheet;
}

/**
 * Manual function to set up the sheet (run this first if you want to create the sheet before receiving data)
 */
function setupSheet() {
  const sheet = getOrCreateSheet();
  SpreadsheetApp.getActiveSpreadsheet().toast('Consent Log sheet is ready!', 'Setup Complete', 5);
}

/**
 * Test function to verify the script is working
 */
function testScript() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toISOString(),
        consent_id: 'test_123',
        action: 'accept_all',
        analytics_storage: 'granted',
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        functionality_storage: 'granted',
        personalization_storage: 'granted',
        page_url: 'https://example.com/test',
        user_agent: 'Test User Agent',
        banner_version: '1.0'
      })
    }
  };
  
  const result = doPost(testData);
  Logger.log(result.getContent());
  SpreadsheetApp.getActiveSpreadsheet().toast('Test data added to sheet!', 'Test Complete', 5);
}
