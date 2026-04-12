<a name="readme-top"></a>

# 💰 FINTEENS - Financial Literacy Learning Platform

> Master money management, investing, budgeting, and financial decision-making with interactive lessons designed for teens.

Master financial literacy with interactive lessons, quizzes, and progress tracking. Learn banking basics, budgeting strategies, investing fundamentals, and credit management through an engaging, gamified learning experience.

[![GitHub license](https://flat.badgen.net/github/license/harshDhiman3344/FinTeensAPP?icon=github&color=black&scale=1.01)](https://github.com/harshDhiman3344/FinTeensAPP/blob/main/LICENSE "GitHub license")
[![Maintenance](https://flat.badgen.net/static/Status/Active?icon=github&color=black&scale=1.01)](https://github.com/harshDhiman3344/FinTeensAPP "Maintenance")
[![GitHub issues](https://flat.badgen.net/github/issues/harshDhiman3344/FinTeensAPP?icon=github&color=black&scale=1.01)](https://github.com/harshDhiman3344/FinTeensAPP/issues "GitHub issues")
[![Next.js](https://img.shields.io/badge/Next.js-16.2.1-black?style=flat-square&logo=next.js)](https://nextjs.org/ "Next.js Version")

<!-- Table of Contents -->
<details>

<summary>

# 📚 Table of Contents

</summary>

- [Features](#-features)
- [Courses](#courses)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Running the Application](#-running-the-application)
- [Contributing](#-contributing)
- [License](#-license)

</details>

## ⭐ Features

- **Interactive Lessons** - Engaging, bite-sized financial education modules
- **Progress Tracking** - Monitor your financial literacy journey with real-time progress
- **Gamified Learning** - Earn points, hearts, and unlock achievements
- **Multiple Courses** - Learn banking basics, budgeting, investing, and credit management
- **Responsive Design** - Beautiful UI that works on desktop, tablet, and mobile devices
- **No Authentication Required** - Get started immediately with demo mode
- **Mock Data System** - Fully functional demo without database requirements

## 📖 Courses

### 1. **Banking Basics** 🏦
- What is a Bank?
- Types of Bank Accounts
- How to Open an Account
- Interest Rates Explained
- Online Banking Safety

### 2. **Budgeting 101** 📊
- Creating Your Budget
- Income vs. Expenses
- Savings Strategies
- Emergency Funds
- Budget Tools & Apps

### 3. **Investing Fundamentals** 📈
- Stock Market Basics
- Types of Investments
- Risk vs. Reward
- Diversification
- Long-term Planning

### 4. **Credit & Debt** 💳
- Understanding Credit
- Credit Scores
- Debt Management
- Loan Types
- Building Credit History

## 🗂️ Project Structure

```
finteens/
  ├── actions/                 # Server actions for progress & challenges
  │   ├── challenge-progress.ts
  │   ├── user-progress.ts
  │   └── user-subscription.ts
  ├── app/                     # Next.js app directory
  │   ├── (auth)/             # Authentication pages
  │   ├── (main)/             # Main application routes
  │   ├── (marketing)/        # Landing page
  │   ├── admin/              # Admin panel
  │   ├── api/                # API endpoints
  │   └── lesson/             # Lesson pages
  ├── components/             # Reusable UI components
  │   ├── ui/                 # Base components (buttons, dialogs, etc)
  │   ├── modals/             # Modal components
  │   └── layout components
  ├── db/                     # Database configuration
  │   ├── queries.ts          # Mock data & database queries
  │   ├── schema.ts           # Database schema
  │   └── drizzle.ts          # Drizzle ORM config
  ├── lib/                    # Utility functions
  ├── public/                 # Static assets
  ├── store/                  # Zustand state management
  └── config/                 # App configuration


## 🚀 Getting Started

### Prerequisites

- **Git** - For version control
- **Node.js** (v18+) - JavaScript runtime
- **Bun** (optional, but recommended) - Fast JavaScript runtime and package manager
- **npm** or **pnpm** - Package managers (if not using Bun)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/harshDhiman3344/FinTeensAPP.git
   cd FinTeensAPP
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env.local
   ```

4. **Start the development server**
   ```bash
   bun run dev
   # or
   npm run dev
   ```

5. **Open in your browser**
   ```
   http://localhost:3000
   ```

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory:

```env
# Next.js Telemetry
NEXT_TELEMETRY_DISABLED=1

# Clerk Authentication (Optional - for production)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key_here
CLERK_SECRET_KEY=your_key_here

# Database (Optional - for production)
DATABASE_URL=your_database_url

# Stripe (Optional - for payment features)
STRIPE_API_SECRET_KEY=your_stripe_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Note**: The app works in demo mode without these environment variables. They're only needed for production deployment with authentication and real database.

## 🏃 Running the Application

### Development Mode
```bash
bun run dev
npm run dev
```
Server will run on `http://localhost:3000`

### Production Build
```bash
bun run build
npm run build
```

### Run Production Build
```bash
bun run start
npm start
```

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Next.js 16.2** - React framework with App Router and Turbopack
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - High-quality React components
- **Zustand** - Lightweight state management

### Backend & Database
- **Next.js Server Actions** - Backend operations (no separate API needed)
- **Drizzle ORM** - Type-safe database access
- **PostgreSQL** (Neon) - Relational database
- **Clerk** - Authentication system (optional for production)

### Development Tools
- **Bun** - Fast JavaScript runtime and package manager
- **ESLint** - Code linting and quality
- **Prettier** - Automatic code formatting
- **Turbopack** - Fast bundler

### Deployment
- **Vercel** - Platform for deployment
- **Docker** - Containerization (optional)

## 🤝 Contributing

We welcome contributions to FINTEENS! Whether you find bugs, have feature suggestions, or want to improve the codebase, here's how you can help:

### How to Contribute

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/FinTeensAPP.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Write clean, readable code
   - Add comments where necessary
   - Follow the existing code style

4. **Test your changes**
   ```bash
   bun run dev
   # or
   npm run dev
   ```

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: description of your changes"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a pull request**
   - Describe what you changed and why
   - Reference any related issues
   - Wait for review and feedback

### Code Style Guidelines

- Use TypeScript for all new code
- Follow the existing project structure
- Keep components small and focused
- Write meaningful commit messages
- Test your changes before submitting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

FINTEENS was inspired by modern educational platforms and built with the goal of making financial literacy accessible and engaging for teenagers everywhere.

### Special Thanks

- The open-source community for amazing libraries and tools
- Next.js and Vercel for the excellent framework and hosting
- Shadcn/ui for beautiful, accessible components
- All contributors and users who help improve FINTEENS

## 📞 Support

If you have any questions or need help:

- Open an [Issue](https://github.com/harshDhiman3344/FinTeensAPP/issues)
- Check existing discussions and documentation
- Feel free to reach out through the repository

---

<p align="center">
  Made with ❤️ for financial education
</p>

**[⬆ Back to Top](#-finteens---financial-literacy-learning-platform)

[![Follow Me](https://img.shields.io/github/followers/sanidhyy?style=social&label=Follow&maxAge=2592000)](https://github.com/sanidhyy "Follow Me")
[![Tweet about this project](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fx.com%2F_sanidhyy)](https://x.com/intent/tweet?text=Check+out+this+amazing+app:&url=https%3A%2F%2Fgithub.com%2Fsanidhyy%2Fduolingo-clone "Tweet about this project")

## :books: Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## :page_with_curl: Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

## :star2: Star History

<a href="https://star-history.com/#sanidhyy/duolingo-clone&Timeline">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=sanidhyy/duolingo-clone&type=Timeline&theme=dark" />
  <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=sanidhyy/duolingo-clone&type=Timeline" />
  <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=sanidhyy/duolingo-clone&type=Timeline" />

