# ASETT CMS Complaint Submission Portal

This is a React-based web application that enables users to submit complaints in a structured, step-by-step manner. The application supports masked/unmasked data handling for anonymous complainants and includes form validations, step navigation, and PDF generation.

---

## 🔧 Tech Stack

- **React**
- **Vite** (for fast development builds)
- **Radix UI** (for accessible UI primitives like forms, modals, radio groups, selects)
- **Tailwind CSS**
- **Lucide Icons**
- **React Router DOM**

---

## 🚀 Features

- Multi-step complaint form (Stepper UI)
- Conditional rendering based on anonymity
- Input validations (including masking for phone numbers and ZIP code)
- Modal preview before final submission
- Role-based data collection (Complainant, FAE, Complaint Details)
- Organization-specific field rendering
- Auto-formatting for phone numbers (e.g., `(123) 456-7890`)
- Dynamic display with masked/unmasked logic for anonymous submissions
- Ready-to-integrate backend submission logic

---

## 📁 Project Structure

├── components/
│   ├── Navbar.jsx          # Dynamic step-based progress UI
│   └── complainantForm.jsx  # Modal to show complaint summary
|   ├── stepper.jsx          # Dynamic step-based progress UI
│   └── footer.jsx  # Modal to show complaint summary
│
├── pages/
│   └── complainantDetails.jsx            # Main app page
|   └── complaintType.jsx
|   └── home.jsx
│
├── styles/
│   └── globals.css          # Tailwind & base styles
│
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
└── README.md 

---

## 📝 Form Logic Highlights

- **Anonymous Toggle:**
  - If set to **Yes**, personal information will be masked in the review modal.
  - The form handles radio group changes via `@radix-ui/react-radio-group`.

- **Masked Display Example:**
  - `John Doe` ➝ `J*** D**`
  - `email@example.com` ➝ `e****@******.com`

- **Validation Checks:**
  - Required fields are checked on submit.
  - Phone number must match the format: `(123) 456-7890`
  - Email format is verified using regex.

---

## 📦 Installation

```bash
npm install
# or
yarn

## 📦 Running the App

npm run dev

This will start the app on http://localhost:5173.



