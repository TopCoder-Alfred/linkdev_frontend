// import { useDispatch, useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
// import { checkTokenExpire } from "../../../actions";

// const AutoLogin = ({ children }) => {
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const hasToken = localStorage.getItem("token");
//   if (hasToken) {
//     checkTokenExpire(dispatch);
//   } else {
//     <Navigate to="/login" />;
//   }
//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

// export default AutoLogin;
