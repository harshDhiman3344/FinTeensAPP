# Clerk Key Mismatch Fix

## Problem
The error says: **"your Clerk instance keys do not match - make sure to copy the correct publishable and secret keys from the Clerk dashboard."**

## Solution - Get Fresh Keys

### Step 1: Go to Clerk Dashboard
https://dashboard.clerk.com

### Step 2: Select Your Project
Click on the project you want to use

### Step 3: Get Your Keys
- Go to **Developers** → **API Keys** (left sidebar)
- You'll see two keys:
  1. **Publishable Key** (starts with `pk_test_`)
  2. **Secret Key** (starts with `sk_test_`)

### Step 4: Copy Both Keys
- Copy the **Publishable Key** completely (including the full string)
- Copy the **Secret Key** completely (including the full string)

### Step 5: Update .env File
Replace these lines in `.env`:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_[PASTE_YOUR_PUBLISHABLE_KEY_HERE]
CLERK_SECRET_KEY=sk_test_[PASTE_YOUR_SECRET_KEY_HERE]
```

**IMPORTANT:** Make sure BOTH keys are from the SAME Clerk project!

### Step 6: Restart Dev Server
1. Stop the current dev server (Ctrl+C)
2. Run `bun run dev` again

## Verify It Works
After restart, you should see:
- No "Clock skew" errors
- No "Clerk instance keys do not match" errors
- You can sign up/sign in normally

---

If you still get errors after this:
1. Double-check that you copied the ENTIRE key (no truncation)
2. Make sure both keys are from the same Clerk project
3. Clear browser cookies and try again
