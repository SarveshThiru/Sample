// Simple state
let loggedIn = false;
let passStatus = [
  { id: 1, userId: "192210206", route: "Kolathur 5A", payment: "Success", admin: "Pending" }
];

// DOM Elements
const loginSection = document.getElementById('login-section');
const statusSection = document.getElementById('status-section');
const requestSection = document.getElementById('request-section');
const statusTableBody = document.getElementById('status-table-body');

// Navigation
document.getElementById('nav-home').onclick = showStatus;
document.getElementById('nav-pass').onclick = showStatus;
document.getElementById('nav-request').onclick = showRequest;
document.getElementById('nav-logout').onclick = logout;

// Login Form
document.getElementById('login-form').onsubmit = function(e) {
  e.preventDefault();
  loggedIn = true;
  showStatus();
};

// Pass Request Form
document.getElementById('request-form').onsubmit = function(e) {
  e.preventDefault();
  // Get form values
  const userId = "192210206"; // For demo, static user
  const route = document.getElementById('route-name').value;
  const bus = document.getElementById('bus-number').value;
  const payment = "Success";
  const admin = "Pending";
  // Add to status
  passStatus.push({
    id: passStatus.length + 1,
    userId,
    route: `${route} ${bus}`,
    payment,
    admin
  });
  showStatus();
};

// Show/Hide Sections
function showStatus() {
  if (!loggedIn) {
    loginSection.classList.remove('hidden');
    statusSection.classList.add('hidden');
    requestSection.classList.add('hidden');
    return;
  }
  loginSection.classList.add('hidden');
  statusSection.classList.remove('hidden');
  requestSection.classList.add('hidden');
  renderStatusTable();
}
function showRequest() {
  if (!loggedIn) {
    loginSection.classList.remove('hidden');
    statusSection.classList.add('hidden');
    requestSection.classList.add('hidden');
    return;
  }
  loginSection.classList.add('hidden');
  statusSection.classList.add('hidden');
  requestSection.classList.remove('hidden');
}
function logout() {
  loggedIn = false;
  showStatus();
}

// Render Table
function renderStatusTable() {
  statusTableBody.innerHTML = "";
  passStatus.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${row.id}</td><td>${row.userId}</td><td>${row.route}</td><td>${row.payment}</td><td>${row.admin}</td>`;
    statusTableBody.appendChild(tr);
  });
}

// Initial view
showStatus();
