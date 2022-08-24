import React from 'react'
import EventBus from "./EventBus";

interface IAppProps {}

interface IAppState {}

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
		};
	}
	componentDidMount(): void {
	}
	render() { return (
  <div className="App">
	HELLO WORLD
  </div>
	) }
}

export default App
