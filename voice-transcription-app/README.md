# 🎤 VoiceVibe - AI Voice Transcription ✨

*The voice transcription app that actually gets you*

A next-gen AI-powered voice transcription platform built with cutting-edge tech that transforms your voice into text with unmatched accuracy and style.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SilkRo/Voice-Vibe)
[![GitHub stars](https://img.shields.io/github/stars/SilkRo/Voice-Vibe?style=social)](https://github.com/SilkRo/Voice-Vibe)

## 🌟 Features

- 🎙️ **Real-time Voice Recording** - High-quality audio capture with WebRTC
- 🤖 **AI-Powered Transcription** - OpenAI Whisper for accurate speech-to-text
- 🎨 **Modern UI/UX** - Beautiful interface with Tailwind CSS and Framer Motion
- 📱 **Responsive Design** - Works perfectly on desktop and mobile
- ⚡ **Fast Performance** - Optimized with Next.js 15 and Turbopack
- 🔒 **Secure** - Environment variables for API key protection
- 🌈 **Animated Effects** - Smooth animations and particle effects
- 📋 **Copy to Clipboard** - Easy text copying functionality

## 🚀 Live Demo

[**Try VoiceVibe Now**](https://voicevibe-h868z0071-silkros-projects.vercel.app) 🌐

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Animation**: Framer Motion
- **AI**: OpenAI Whisper API
- **UI Components**: Radix UI, Lucide React
- **Particles**: TSParticles
- **Deployment**: Vercel

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js 18+ installed
- npm or yarn package manager
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/SilkRo/Voice-Vibe.git
cd Voice-Vibe
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables
Create a `.env.local` file in the root directory:
```env
OPENAI_API_KEY=your_openai_api_key_here
```

### 4. Run the Development Server
```bash
npm run dev
# or
yarn dev
```

### 5. Open Your Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── api/transcribe/      # API route for transcription
│   ├── app/                 # App-specific pages
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── ui/                  # Reusable UI components
│   ├── LandingPage.tsx      # Landing page component
│   ├── TranscriptionDisplay.tsx # Transcription results
│   └── VoiceRecorder.tsx    # Voice recording component
├── hooks/
│   └── useAudioRecorder.ts  # Audio recording hook
└── lib/
    └── utils.ts             # Utility functions
```

## 🎯 Usage

1. **Grant Microphone Permission**: Allow the app to access your microphone
2. **Start Recording**: Click the record button to begin capturing audio
3. **Stop Recording**: Click stop when you're finished speaking
4. **Get Transcription**: The AI will process your audio and display the text
5. **Copy Text**: Use the copy button to copy transcribed text

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run tests with Jest
- `npm run format` - Format code with Prettier
- `npm run analyze` - Analyze bundle size

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   vercel
   ```

2. **Set Environment Variables**
   ```bash
   vercel env add OPENAI_API_KEY
   ```

3. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Deploy to Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- Render
- AWS Amplify
- Google Cloud Platform

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use conventional commit messages
- Ensure tests pass before submitting
- Update documentation for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenAI** for the powerful Whisper API
- **Vercel** for the amazing deployment platform
- **Next.js** team for the excellent framework
- All contributors and supporters of this project

## 📞 Support

Need help or have questions?

- 🐛 [Report Issues](https://github.com/SilkRo/Voice-Vibe/issues)
- 💬 [Discussions](https://github.com/SilkRo/Voice-Vibe/discussions)
- 📚 [Documentation](https://github.com/SilkRo/Voice-Vibe/wiki)

## 🔮 Roadmap

- [ ] Multi-language support
- [ ] File upload transcription
- [ ] Batch processing
- [ ] Export to different formats
- [ ] Voice commands
- [ ] Speaker identification
- [ ] Real-time streaming transcription

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ by [SilkRo](https://github.com/SilkRo)
