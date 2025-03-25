import { useState } from 'react';
import '../ColombiaDashboard.css';
import { Tab1 } from './Tab1';
import { Tab2 } from './Tab2';
import { Tab3 } from './Tab3';

export function Dashboard() {
	const [activeTab, setActiveTab] = useState('tab1');

	const renderContent = () => {
		switch (activeTab) {
			case 'tab1':
				return <Tab1 />;
			case 'tab2':
				return <Tab2 />;
			case 'tab3':
				return <Tab3 />;
			default:
				return <Tab1 />;
		}
	};

	return (
		<>
			<h1>Dashboard de Colombia</h1>
			<nav>
				<ul className="nav-tabs">
					<li className={activeTab === 'tab1' ? 'active' : ''} onClick={() => setActiveTab('tab1')}>
						Presidentes
					</li>
					<li className={activeTab === 'tab2' ? 'active' : ''} onClick={() => setActiveTab('tab2')}>
						Atracciones turísticas
					</li>
					<li className={activeTab === 'tab3' ? 'active' : ''} onClick={() => setActiveTab('tab3')}>
						Aeropuertos
					</li>
				</ul>
			</nav>
			<div className="dash-content">{renderContent()}</div>
		</>
	);
}
