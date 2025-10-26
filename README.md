# Trivia Statistics Dashboard

A React application that provides interactive statistics and visualizations for trivia questions from the Open Trivia Database API.

## Features

- **Category Selection**: Browse and select from various trivia categories
- **Interactive Statistics**: View data visualizations for:
  - Distribution by difficulty level (Easy, Medium, Hard)
  - Distribution by question type (Multiple Choice, True/False)
  - Distribution by category (when viewing all categories)
- **Real-time Data**: Fetches fresh data from the Open Trivia Database API
- **Responsive Design**: Modern UI with CSS modules and responsive layout
- **Loading States**: Skeleton loading components for better UX
- **Error Handling**: Graceful error handling with retry logic for rate limits

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **React Router** for navigation
- **Recharts** for data visualization
- **Axios** for API requests
- **CSS Modules** for styling
- **ESLint** for code quality

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd jetbrains_task
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── CategoriesList/  # Category selection component
│   ├── Statistics/      # Main statistics container
│   ├── DistributionBy*/ # Chart components for different data types
│   ├── Header/          # Application header
│   ├── Skeleton/        # Loading skeleton component
│   └── ui/              # Basic UI components (Button)
├── hooks/               # Custom React hooks
│   └── useFetch.ts      # API fetching hook with retry logic
├── pages/               # Page components
│   ├── Home.tsx         # Main application page
│   └── NotFound/        # 404 error page
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
├── consts/              # Application constants
└── main.tsx             # Application entry point
```

## API Integration

The application integrates with the [Open Trivia Database API](https://opentdb.com/) to fetch trivia questions and generate statistics. The API provides:

- Questions across multiple categories
- Different difficulty levels (easy, medium, hard)
- Various question types (multiple choice, true/false)

## Key Components

### Statistics Component

The main component that orchestrates data fetching and visualization. It:

- Fetches 50 questions from the API
- Groups data by difficulty, type, and category
- Renders appropriate charts based on the selected category

### useFetch Hook

A custom hook that handles API requests with:

- Loading states
- Error handling
- Automatic retry logic for rate limiting (429 errors)
- Cleanup to prevent memory leaks

### Distribution Components

Three specialized chart components using Recharts:

- `DistributionByDifficulty`: Bar chart showing question distribution by difficulty
- `DistributionByType`: Bar chart showing question distribution by type
- `DistributionByCategory`: Bar chart showing question distribution by category

## Styling

The application uses CSS Modules for component-scoped styling, ensuring:

- No style conflicts
- Better maintainability
- Improved performance

## Error Handling

The application includes comprehensive error handling:

- Network error recovery
- API rate limit handling with exponential backoff
- User-friendly error messages
- Graceful fallbacks for missing data

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
