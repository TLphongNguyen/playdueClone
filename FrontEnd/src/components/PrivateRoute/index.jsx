import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Hoặc sử dụng localStorage

const PrivateRoute = ({ children }) => {
	const userInfo = useSelector((state) => state.user.userInfo);
	if (!userInfo) {
		return <Navigate to="/register" />;
	}
	return children;
};

export default PrivateRoute;
