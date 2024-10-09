import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from './components/Dashboard';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/colombia_dash" element={<Dashboard />} />
				<Route path="*" element={<Navigate to="/colombia_dash" replace />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
