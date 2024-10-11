import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Hoặc sử dụng localStorage

const PrivateRoute = ({ children, allowedTypes }) => {
	const userInfo = useSelector((state) => state.user.userInfo);
	const accountype = userInfo.account.accountTypeId;
	if (!userInfo) {
		return <Navigate to="/register" />;
	}
	if (!allowedTypes.includes(accountype)) {
		return <Navigate to="/" />;
	}
	return children;
};

export default PrivateRoute;
