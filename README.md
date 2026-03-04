# Supabase Authentication with React — Complete Guide

---

## Prerequisites

- Node.js installed
- A React project (Vite recommended)
- A Supabase account → [supabase.com](https://supabase.com)

---

## Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click **"New Project"**
3. Fill in your project name, database password, and region
4. Wait for the project to finish setting up

---

## Step 2: Disable Email Confirmation ⚠️

> This is important for development so users can log in immediately after signup without needing to verify their email.

1. In your Supabase dashboard, go to **Authentication** in the left sidebar
2. Click **Providers**
3. Click on **Email**
4. Toggle **OFF** → `"Enable email confirmations"`
5. Click **Save**

```
Dashboard → Authentication → Providers → Email → Disable "Confirm email"
```

> ⚠️ Re-enable this in production to prevent fake signups.

---

## Step 3: Get Your Supabase Credentials

1. Go to **Settings → API** in your Supabase dashboard
2. Copy your:
   - `Project URL`
   - `anon / public` key

---

## Step 4: Install Supabase in Your React Project

```bash
npm install @supabase/supabase-js
```

---

## Step 5: Set Up Environment Variables

Create a `.env` file in your project root:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```


```bash
# .gitignore
.env
.env.local
```

---

## Step 6: Create the Supabase Client

Create a file `src/supabaseClient.js`:

```js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

---

## Step 7: Set Up React Router

Install React Router:

```bash
npm install react-router-dom
```
---

## Project Structure

```
src/
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   └── Register.jsx
├── supabaseClient.js
├── App.jsx
└── main.jsx
.env
.gitignore
```

---

## Special Thanks 🙏

A huge thank you to this YouTube channel for the guidance and support in implementing Supabase authentication with React:

👉 [Watch the tutorial here](https://www.youtube.com/watch?v=Q7-DI39epR8)

---

*Happy coding Everyone! 🚀*
