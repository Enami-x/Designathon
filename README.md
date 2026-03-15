# Designathon MVP

This project is a Minimum Viable Product (MVP) for a designathon challenge. It is built using React and Vite, with Tailwind CSS for styling.

## Project Structure

- **index.html**: Main HTML entry point.
- **package.json**: Project dependencies and scripts.
- **postcss.config.js**: PostCSS configuration.
- **tailwind.config.js**: Tailwind CSS configuration.
- **vite.config.js**: Vite configuration.
- **src/**: Source code directory
  - **App.jsx**: Main React app component.
  - **index.css**: Global styles.
  - **main.jsx**: Entry point for React.
  - **components/**: Reusable React components
  - **data/**: Mock data for development
  - **pages/**: Page-level React components
  - **utils/**: Utility functions

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm

### Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd "Designathon mvp"
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Development Server
```sh
npm run dev
```

### Building for Production
```sh
npm run build
```

### Preview Production Build
```sh
npm run preview
```

## Features
- Dashboard with charts and metrics
- Live alert feed
- Fraud network graph visualization
- Analyst view page

## Folder Overview
- **components/**: BaselineChart, FraudNetworkGraph, LiveAlertFeed, MetricTile, Navbar, RiskScoreChart, ShapPanel, TransactionDrawer, TrendChart
- **data/**: mockData.js
- **pages/**: AnalystView.jsx
- **utils/**: format.js

## License
Specify your license here.
