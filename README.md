
  # TakeOff

  This is a code bundle for TakeOff. The original project is available at https://www.figma.com/design/DVgjHecnuJeIFESuaRyoqg/TakeOff.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Backend build + hosting launch plan (TakeOff)

  This section is a **no-code execution checklist** for building, deploying, and launching the backend described in the PRD.

  ### 1) Create core accounts and environments

  1. Create a dedicated project workspace (GitHub org/repo, Supabase org, Razorpay account, Vercel team/project).
  2. Define three environments from day one:
     - `local`
     - `staging`
     - `production`
  3. Create an environment variable matrix document (Notion/Google Doc) mapping every secret per environment.

  ### 2) Finalize backend architecture decisions

  1. Confirm backend pattern:
     - Supabase for Auth + Postgres + storage + optional Edge Functions.
     - Optional lightweight API layer only where business logic is sensitive (e.g., payment verification).
  2. Confirm access model:
     - Free vs Premium controlled via `users.is_premium`.
  3. Confirm module-level access matrix (exact premium-gated fields and pages).

  ### 3) Provision Supabase project

  1. Create a Supabase project in the correct region (closest to primary Indian users).
  2. Enable Email auth and configure:
     - email confirmation policy
     - password rules
     - session duration and refresh token policy
  3. Add initial secrets to your env manager:
     - Supabase URL
     - Supabase anon key
     - Supabase service-role key (server-only)

  ### 4) Design and create database schema

  Create the following tables (as per PRD) with production-ready metadata fields:

  1. `users`
     - `id` (UUID, references auth user id)
     - `email`
     - `is_premium` (default false)
     - `created_at`
     - recommended additions: `updated_at`, `premium_activated_at`, `payment_reference`

  2. `schools`
     - `id`, `name`, `location`, `fleet_size`, `cost_range`, `duration`, `hidden_fees`, `contact`
     - recommended additions: `is_featured`, `multi_engine_available`, `last_verified_at`

  3. `study_material`
     - `id`, `subject`, `title`, `pdf_url`, `premium`
     - recommended additions: `category`, `description`, `created_at`

  4. `medical_centers`
     - `id`, `name`, `location`, `type`, `contact`
     - recommended additions: `appointment_link`, `last_verified_at`

  5. Create indexes for high-frequency filters:
     - schools by `location`, `cost_range`, `fleet_size`, `multi_engine_available`
     - study_material by `subject`, `premium`

  ### 5) Configure Row Level Security (RLS)

  1. Enable RLS on every exposed table.
  2. Define baseline policies:
     - `users`: users can read/update only their own profile.
     - `schools`: public read for limited columns; premium read for full dataset.
     - `study_material`: free rows readable by all authenticated users; premium rows only if `users.is_premium = true`.
     - `medical_centers`: free subset public/authenticated; full directory premium-gated.
  3. Keep service-role bypass only for trusted server-side payment/webhook flows.

  ### 6) Seed and validate data quality

  1. Prepare master CSVs for schools, medical centers, and study materials.
  2. Add data validation rules before import:
     - normalized location names
     - consistent cost ranges
     - contact format standards
  3. Import seed data into staging first.
  4. Run manual QA on filter correctness (location, cost, fleet size, multi-engine).

  ### 7) Build authentication and user lifecycle

  1. Implement signup/login via Supabase Auth (email).
  2. On first login, ensure `users` row is created.
  3. Implement session persistence and logout behavior.
  4. Implement “premium status refresh” flow so UI always reads latest `is_premium`.

  ### 8) Implement payment integration (Razorpay)

  1. Create Razorpay account, complete KYC, and enable production access.
  2. Define product/price (₹1999–₹2999 one-time unlock).
  3. Implement secure backend payment flow:
     - create order server-side
     - verify signature server-side after payment success
     - update `users.is_premium = true` only after verified payment
  4. Store payment audit fields:
     - payment id
     - order id
     - signature verification result
     - timestamp
  5. Add idempotency strategy to avoid duplicate premium activations.

  ### 9) Add backend protections and governance

  1. Create role boundaries:
     - client (anon/auth)
     - server trusted (service role)
  2. Add rate limiting and abuse protection on sensitive endpoints (auth/payment).
  3. Set up structured logs for auth, payment verification, and premium unlock events.
  4. Add backup and restore policy for Postgres.

  ### 10) Testing checklist before launch

  1. Auth tests:
     - signup, login, logout, password reset, session expiry
  2. Access tests:
     - free user sees only free content
     - premium user sees all premium content
  3. Payment tests:
     - success path, failed payment, replay attack, tampered signature
  4. Data tests:
     - filters return correct school records
     - premium study material not leaked to free users
  5. Security tests:
     - direct API/table access attempts blocked by RLS

  ### 11) Deployment and hosting flow

  1. Frontend hosting: Vercel
     - connect GitHub repo
     - configure environment variables per environment
     - set preview deployments for PRs
  2. Backend hosting model:
     - Supabase-hosted DB/Auth
     - payment verification logic hosted in Supabase Edge Functions (or another secure server runtime)
  3. Configure custom domains:
     - app domain (e.g., `app.takeoff.in`)
     - optional API subdomain if using custom backend endpoints
  4. Enforce HTTPS and production CORS allowlist.

  ### 12) Production readiness and launch

  1. Set production env vars and rotate any test secrets.
  2. Run staging-to-production migration checks.
  3. Enable monitoring/alerts:
     - auth failures spike
     - payment verification failures
     - DB error rate
  4. Prepare support playbooks:
     - payment success but no premium access
     - account recovery
     - data correction requests
  5. Soft launch with limited users, monitor for 3–7 days, then public launch.

  ### 13) Post-launch operating cadence

  1. Weekly data verification cycle for schools and medical directories.
  2. Monthly security review (RLS policies, key rotation, audit logs).
  3. Continuous conversion optimization on premium paywall UX.
  4. Track KPIs:
     - signup conversion
     - free → premium conversion
     - refund rate
     - support ticket categories
  

## Supabase backend implementation added in this repo

### Files to use

- SQL schema + RLS: `supabase/migrations/202603161730_takeoff_backend.sql`
- Seed data: `supabase/seed.sql`
- Razorpay order function: `supabase/functions/create-razorpay-order/index.ts`
- Razorpay verify function: `supabase/functions/verify-razorpay-payment/index.ts`
- Frontend auth/data integration client: `src/app/lib/supabase.ts`

### Required frontend env vars

Create `.env`:

```bash
VITE_SUPABASE_URL=https://epfzobpinbvzfzgmwocc.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

### Required Supabase Edge Function secrets

Set these in Supabase project secrets:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`
- `PREMIUM_PRICE_PAISE` (example: `199900`)

### Deploy steps

1. Run the migration SQL in Supabase SQL Editor.
2. Run `supabase/seed.sql` in SQL Editor for starter records.
3. Deploy functions:
   - `supabase functions deploy create-razorpay-order`
   - `supabase functions deploy verify-razorpay-payment`
4. Configure auth URL allowlists for local + production app domains.
5. Add `https://checkout.razorpay.com/v1/checkout.js` script in app (already included in `index.html`).
