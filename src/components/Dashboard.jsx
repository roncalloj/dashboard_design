import { useState } from 'react';
import '../ColombiaDashboard.css';
import { Tab1 } from './Tab1';
import { Tab2 } from './Tab2';

export function Dashboard() {
	const [activeTab, setActiveTab] = useState('tab1');

	const renderContent = () => {
		switch (activeTab) {
			case 'tab1':
				return <Tab1 />;
			case 'tab2':
				return <Tab2 />;
			case 'tab3':
				return <div>Contenido de Tab 3</div>;
			case 'tab4':
				return <div>Contenido de Tab 4</div>;
			default:
				return <Tab1 />;
		}
	};

	return (
		<>
			<h1>Colombia Dashboard</h1>
			<nav>
				<ul className="nav-tabs">
					<li className={activeTab === 'tab1' ? 'active' : ''} onClick={() => setActiveTab('tab1')}>
						Tab 1
					</li>
					<li className={activeTab === 'tab2' ? 'active' : ''} onClick={() => setActiveTab('tab2')}>
						Tab 2
					</li>
					<li className={activeTab === 'tab3' ? 'active' : ''} onClick={() => setActiveTab('tab3')}>
						Tab 3
					</li>
					<li className={activeTab === 'tab4' ? 'active' : ''} onClick={() => setActiveTab('tab4')}>
						Tab 4
					</li>
				</ul>
			</nav>
			<div className="dash-content">{renderContent()}</div>
		</>
	);
}
