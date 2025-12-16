# AnnouncementAI

Generate or improve announcements for your Whop community using free AI-powered assistance with Mistral-7B.

## Features

- **Generate New Announcements** - Create professional, engaging announcements from scratch
- **Improve Existing Announcements** - Enhance announcements to be more engaging and impactful
- **100% Free** - Uses Hugging Face's free inference API, no API key required for AI generation
- **Beautiful UI** - Modern, responsive interface with gradient backgrounds
- **Easy Copy** - One-click copy functionality for generated announcements

## Tech Stack

- [Next.js](https://nextjs.org) - React framework
- [Mistral-7B](https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.2) - Free AI model via Hugging Face
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Lucide React](https://lucide.dev) - Icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Optional: Whop API credentials for future integrations

### Local Development

1. Clone the repository
   ```bash
   git clone <repo-url>
   cd announcement-ai
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env.local` file (optional - for Whop integration)
   ```bash
   cp .env.example .env.local
   # Edit .env.local and add your WHOP_API_KEY and NEXT_PUBLIC_WHOP_APP_ID
   ```

4. Run the development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to see the app

## Deployment to Vercel

### Quick Deploy

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and select your GitHub repository
4. Optional: Configure environment variables if using Whop API
   - Add `WHOP_API_KEY` with your Whop API key
   - Add `NEXT_PUBLIC_WHOP_APP_ID` with your Whop App ID
5. Click "Deploy"

### Using Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts to deploy your app.

### Environment Variables

Optional environment variables for Whop integration:

- `WHOP_API_KEY` - Your Whop API key (optional)
- `NEXT_PUBLIC_WHOP_APP_ID` - Your Whop App ID (optional, public)

**Note:** The AI announcement generation feature works without any additional configuration. Hugging Face free inference API is used automatically.

## Build & Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── globals.css               # Global styles
├── layout.tsx                # App layout
└── page.tsx                  # Main AnnouncementAI component
```

## How It Works

The app uses Hugging Face's free inference API with the Mistral-7B-Instruct-v0.2 model to generate announcements. The model is called directly from the client-side with no backend requirements.

### API Details

- **Model:** mistralai/Mistral-7B-Instruct-v0.2
- **Max Tokens:** 500
- **Temperature:** 0.7
- **Top P:** 0.95
- **Cost:** Completely free via Hugging Face

## Troubleshooting

**"Model is loading, please try again in a few seconds..."**
- The Hugging Face model may be starting up. Wait a moment and try again.

**Slow responses**
- First request may take longer as the model initializes. Subsequent requests are faster.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
