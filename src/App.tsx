import React from 'react'
import { Layout } from 'antd'
import { useResizable } from 'react-resizable-layout'
import { cn } from './utils/cn'
import SplitterLayout from "./components/SplitterLayout"
import { ClaimPanel } from './components/ClaimPanel'
import { MapPanel } from './components/MapPanel'
import './App.css'

const App: React.FC = () => {
	const { Content } = Layout;

	const {
		isDragging: isClaimPanelDragging,
		splitterProps: claimPanelDragBarProps
	} = useResizable({
		axis: "x",
		initial: 700,
		min: 0,
	});

	return (
		<Layout id="layout">
			<Layout className="site-layout">
				<Content className="site-layout-background" style={{ margin: 0 }}>
					<div className={"flex flex-column font-mono overflow-hidden"}>
						<div style={{flexDirection: 'column'}} className={"flex grow"}>
							<SplitterLayout isDragging={isClaimPanelDragging} {...claimPanelDragBarProps} />

							<div className={"flex grow"}>
								<div className={cn("shrink-0 contents", isClaimPanelDragging && "dragging")}>
									<MapPanel />
								</div>
							</div>

							<div className={cn("shrink-0 contents", isClaimPanelDragging && "dragging")} style={{ width: '100%' }}>
								<ClaimPanel />
							</div>

						</div>
					</div>
				</Content>
			</Layout>
		</Layout>
	);
};

export default App;
