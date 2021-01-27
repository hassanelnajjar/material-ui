import MaterialUI from './components/MaterialUI';
import AntD from './components/AntD';
import { ContextProvide } from './components/Context';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';

// App Component
export default function App() {
	return (
		<ContextProvide>
			<Router>
				<Switch>
					<Route exact path='/material-ui' component={MaterialUI} />
					<Route exact path='/AntD' component={AntD} />
					<Redirect to='/material-ui'></Redirect>
				</Switch>
			</Router>
		</ContextProvide>
	);
}
