# 🇨🇴 Colombia Dashboard

![React Badge](https://img.shields.io/badge/React-18.0.0-blue)
![Vite Badge](https://img.shields.io/badge/Vite-Latest-purple)
![API-Colombia Badge](https://img.shields.io/badge/API--Colombia-Data-green)
![License Badge](https://img.shields.io/badge/License-MIT-yellow)

An interactive data visualization dashboard that presents key information about Colombia in an intuitive and visually appealing interface. Built with React and featuring both light and dark themes, this dashboard consumes data from the API-Colombia to display insights about presidents, tourist attractions, and airports.

## ✨ Features

### 📊 Data Visualization

- **Presidents**: Grouped and counted by their political party
- **Tourist Attractions**: Grouped and counted by city or department
- **Airports**: Grouped and counted by city, department, or region
- Interactive tables with sortable data
- Clean data presentation with optimized spacing

### 🎨 UI/UX

- **Dual Theme Support**: Toggle between light and dark modes
- **Responsive Design**: Adapts to different screen sizes
- **Modern Interface**: Clean, intuitive layout with consistent styling

### 🔄 API Integration

- Real-time data fetching from API-Colombia
- Efficient data processing and grouping
- Error handling and loading states

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/colombia-dashboard.git

# Navigate to the project directory
cd colombia-dashboard

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
```

## 🎯 Usage Guide

### Switching Themes

Click the theme toggle in the top-right corner to switch between light and dark modes.

### Exploring Data

1. Use the navigation tabs to switch between different data categories
2. Select grouping options from the dropdowns to reorganize the data
3. View detailed counts and distributions in the tables

## 🛠️ Technical Details

### Project Structure

```
colombia-dashboard/
├── public/
├── src/
│   ├── components/      # UI components
│   ├── context/         # React context for state management
│   ├── hooks/           # Custom React hooks
│   ├── styles/          # CSS modules and variables
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Entry point
├── package.json
└── README.md
```

### Technologies Used

- **React**: Frontend library for building the user interface
- **CSS Variables**: For theme switching and consistent styling
- **Context API**: For global state management (theme)
- **Custom Hooks**: For data fetching and processing
- **API-Colombia**: Data source for Colombian information

## 📚 Additional Resources

- [API-Colombia Documentation](https://api-colombia.com/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to help improve this project.

## 🙏 Acknowledgments

- [API-Colombia](https://api-colombia.com/) for providing the data
- All contributors who have helped improve this dashboard

---

Made with 🎧 by roncalloj
