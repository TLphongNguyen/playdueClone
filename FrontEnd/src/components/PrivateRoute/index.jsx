import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Hoặc sử dụng localStorage

const PrivateRoute = ({ children, allowedTypes }) => {
	const userInfo = useSelector((state) => state.user.userInfo);
	const accountype = userInfo?.account.accountTypeId;
	if (!allowedTypes.includes(accountype) || !userInfo) {
		return <Navigate to="/" />;
	}
	return children;
};

export default PrivateRoute;
