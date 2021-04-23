import { Route, Redirect } from "react-router-dom";
import { userStore } from "../context/store";

const PrivateRouter = ({ component: Component, ...rest }) => {
  const { user } = userStore();

  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    ></Route>
  );
};

export default PrivateRouter;
