# DexSwap Lion 🦁
DexSwap Lion is a cutting-edge blockchain-based application designed to streamline token swapping processes efficiently and securely. This project leverages modern technologies and robust API integrations to deliver a seamless user experience.

## 🚀 Features

### Token Exchange
- Real-time token price tracking
- Support for multiple exchanges (Tether Land, OK Exchange, Wallex, Exir)
- Token swap functionality with price calculations
- Support for both ETH and BSC networks

### Token List
- Infinite scroll pagination
- Real-time price updates
- Price display in both USD and Toman
- Smooth animations using Framer Motion
- Responsive table design with horizontal scroll
- Search functionality for tokens

### Support System
- User support ticket system
- Email-based communication
- Subject categorization
- Real-time form validation

### General Features
- Responsive design for all screen sizes
- Dark mode UI
- RTL support for Persian language
- Smooth animations and transitions
- Loading states and error handling

## 🛠 Tech Stack

- **Library:** React.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Animations:** Framer Motion
- **Internationalization:** i18next
- **HTTP Client:** Axios
- **UI Components:** Headless UI
- **Toast Notifications:** React Hot Toast
- **Icons:** React Icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/sohseyedi-web/dexswap-lion
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

## 🔧 Configuration

Create a `.env` file in the root directory with the following variables:
```env
VITE_API_ADDRESS=https://deep-index.moralis.io/api/v2
VITE_API_KEY= get api key from moralis.io
VITE_API_TETHERLAND=https://api.tetherland.com
VITE_API_OK=https://api.ok-ex.io/oapi/v1/market/ticker
VITE_API_WALLEX=https://api.wallex.ir/v1/markets
VITE_API_EXIR=https://api.exir.io/v2/ticker
```

## 📁 Project Structure
src/
├── components/ # Reusable UI components
├── features/ # Feature-specific components
│ ├── home/ # Home page features
│ ├── tokenList/ # Token listing features
│ └── tetherprice/ # Tether price tracking
├── hooks/ # Custom React hooks
├── store/ # Zustand store configurations
├── types/ # TypeScript type definitions
├── utils/ # Utility functions
├── constant/ # Constants and configurations
├── pages/ # React pages
└── ui/ # Basic UI components


## 🔄 State Management

The application uses Zustand for state management with the following stores:
- `useTokenStore`: Manages token-related state
- `useTableStore`: Handles token table pagination and filtering
- `useThemeStore`: Controls theme preferences

## 🌐 API Integration

The application integrates with multiple APIs:
- CoinGecko API for token prices
- Custom backend for user support
- Exchange-specific APIs for real-time prices

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔍 Search and Filtering

- Real-time token search
- Network filtering (ETH/BSC)
- Price sorting capabilities
- Exchange selection

## 🎨 UI/UX Features

- Smooth loading states
- Error boundaries
- Toast notifications
- Modal dialogs
- Infinite scroll
- Animated transitions

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.



## 🙏 Acknowledgments

- CoinGecko API for cryptocurrency data
- Iranian exchanges for real-time Toman prices
- Open-source community for various tools and libraries
