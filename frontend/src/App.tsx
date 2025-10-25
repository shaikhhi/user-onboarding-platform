import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { AuthProvider } from './hooks/useAuth';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/user" component={UserDashboard} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/" exact>
            <h1>Welcome to the User Onboarding Platform</h1>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;