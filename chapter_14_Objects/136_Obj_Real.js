// ENV = a settings box for your test environment
// Think of it like a remote control — all the buttons (settings) in one place
const ENV = {
    BASE_URL: "https://staging.myapp.com",  // the website address you're testing
    TIMEOUT: 5000,                           // wait up to 5 seconds before giving up (5000ms = 5s)
    RETRIES: 2,                              // if a test fails, try again 2 more times
    BROWSER: "Chrome"                        // which browser to run the tests in
}

// EXPECTED_RESPONSE = what a correct API reply should look like
// When you call an API, you check if what came back matches this
const EXPECTED_RESPONSE = {
    status: 200,                             // 200 means "success" in web language
    body: {
        user: {role: "admin", active: true}  // the logged-in user should be an admin and active
    }
}

// config = a bigger settings object used by the whole test project
const config = {
  // the address of the app running on your own computer
  baseUrl: 'http://localhost:3000',
  apiBaseUrl: 'http://localhost:3000/api',   // the address for API calls specifically

  // fake test account used to log in during tests
  testUser: {
    username: 'testuser@example.com',
    password: 'SecurePass123',
  },

  // how much detail to print in logs — INFO means print normal messages
  logLevel: 'INFO',

  // how many times to retry a failed test
  // checks the system environment variable first — if not set, defaults to 3
  retryCount: parseInt(process.env.RETRY_COUNT || '3', 10),
};
