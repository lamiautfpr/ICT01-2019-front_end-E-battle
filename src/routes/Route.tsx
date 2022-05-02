import React, { useEffect } from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
  useLocation,
} from 'react-router-dom';

import { useAuth } from '../hooks/Auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
  permittedFor?: number[];
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  path,
  ...rest
}) => {
  const { access_token } = useAuth();

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        if (access_token) {
          if (path === '/login') {
            return (
              <Redirect
                to={{ pathname: '/myGames', state: { from: location } }}
              />
            );
          }

          //   if (permittedFor && !permittedFor.includes(member.office.value)) {
          //     return (
          //       <Redirect
          //         to={{ pathname: '/dashboard', state: { from: location } }}
          //       />
          //     );
          //   }

          return <Component />;
        }
        if (isPrivate) {
          return (
            <Redirect to={{ pathname: '/login', state: { from: location } }} />
          );
        }
        return <Component />;
      }}
    />
  );
};

export default Route;
