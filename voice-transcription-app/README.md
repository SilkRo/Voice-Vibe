# 🎤 VoiceVibe - AI That Hits Different ✨

*The voice transcription app that actually gets you*

A next-gen AI-powered voice transcription platform built with cutting-edge tech that transforms your voice into text with unmatched accuracy and style.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- [NPM](https://www.npmjs.com/) v7 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/voicevibe.git
   cd voicevibe
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Run the development server:

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploying VoiceVibe

1. Make sure you have a [Vercel account](https://vercel.com/signup) and the [Vercel CLI](https://vercel.com/download) installed.

2. Configure the secrets for your deployment environment:
   ```bash
   vercel secrets add openai-api-key YOUR_OPENAI_API_KEY
   ```

3. Deploy the app:
   ```bash
   vercel --prod
   ```

For more details, check out the [Vercel deployment documentation](https://vercel.com/docs/concepts/deployments).

## Learn More

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
