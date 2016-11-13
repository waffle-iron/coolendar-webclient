var React = require('react');
import {browserHistory, match, Router, Route, RouterContext, IndexRoute} from 'react-router';
import Container from '../../components/Container.jsx';
import SidebarWraper from '../../components/sidebar/SidebarWrapper.jsx';
import RegistrationWrapper from '../../components/sidebar/registration/RegistrationWrapper.jsx';
import LoginWrapper from '../../components/sidebar/login/LoginWrapper.jsx';
import ForgotPassword from '../../components/sidebar/login/ForgotPassword.jsx';

export default (
	<Route component={Container}>
		<Route component={SidebarWraper}>
			<Route path='/' ></Route>
			<Route path='user'>
				<IndexRoute component={LoginWrapper} />
				<Route path='login' component={LoginWrapper} />
				<Route path='register' component={RegistrationWrapper} />
				<Route path='reset-password' component={ForgotPassword} />
			</Route>
		</Route>
	</Route>
);