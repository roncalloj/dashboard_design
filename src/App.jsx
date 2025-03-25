import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './styles/layout.css';
import { Dashboard } from './components/Dashboard';
import { ThemeProvider } from './context/ThemeProvider';

function App() {
	return (
		<ThemeProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/colombia_dash" element={<Dashboard />} />
					<Route path="*" element={<Navigate to="/colombia_dash" replace />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
