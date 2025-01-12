import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './App.css'
//import App from './App.tsx'
import ShoppingCart from './ShoppingCart.tsx'
//import Parent from './Components/Parent.tsx'
import CardParent from './Components/CardParent.tsx'
import Button from './Components/Button.tsx'
import Profile from './Components/Profile.tsx'
import React, { useState, useCallback, useEffect, useRef, Suspense } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
//import store from './components/store'; // Your Redux store
import store from './redux/store'; // Your Redux store
//import { RootState, AppDispatch } from './Components/store';
import { increment, decrement, reset } from './Components/counterSlice';
//import { useReducer } from "react";
//import useWindowWidth from './Components/Window';
import UsersList from "./Components/UsersList";
import { BrowserRouter, Routes, Route, Link, useParams, useLocation, Navigate, Outlet } from "react-router-dom";
import Home from './Components/Home.tsx'
//import About from './Components/About.tsx'
//import Contact from './Components/Contact.tsx'
import HelloWorld from "./Components/HelloWorld";
import MyButton from './Components/MyButton';
import useCounter from './Components/useCounter';
import AxiosExample from './Components/AxiosExample.tsx'
import FetchExample from './Components/FetchExample.tsx'
import ErrorBoundary from "./Components/ErrorBoundary";
import BrokenComponent from './Components/BrokenComponent.tsx'
import DataFetchingComponent from './Components/DataFetchingComponent.tsx'
import BearCounter from './Components/BearCounter.tsx'
import { UserNotification } from './Components/UserNotification';
import { AdminPanel } from './Components/AdminPanel';
import Test from './Test.tsx'
import { useRecoilState, RecoilRoot } from 'recoil';
import { bearCountState } from './recoil/store';
import { useQuery } from "@tanstack/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { Tabs } from './Components/Tabs';
import { TabList } from './Components/TabList';
import { Tab } from './Components/Tab';
import { TabPanels } from './Components/TabPanels';
import { TabPanel } from './Components/TabPanel';
import { Login } from './Components/Login';

  const fetchPosts = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
  };

const Posts: React.FC = () => {
  // Use the "Object form" of useQuery
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],   // Key to identify this query
    queryFn: fetchPosts,   // The function to fetch data
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

/*queryClient.fetchQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });*/

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value); // Access state
  const dispatch = useDispatch<AppDispatch>(); // Dispatch actions

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

/*const withClickTracker = (WrappedComponent) => {
  return (props) => {
    const [clicks, setClicks] = React.useState(0);

    const handleClick = () => {
      setClicks(clicks + 1); // Increment click count
      console.log(`Button clicked ${clicks + 1} times`);
    };

    // Pass the click handler and other props to the wrapped component
    return <WrappedComponent onClick={handleClick} {...props} />;
  };
};

const TrackedButton = withClickTracker(Button);

const App = () => {
  return (
    <div>
      <h1>Higher-Order Component Example</h1>
      <TrackedButton label="Click Me!" />
    </div>
  );
};
*/
const withAuth = (WrappedComponent) => {
  return (props) => {
    const isLoggedIn = false; // Simulating login status

    if (!isLoggedIn) {
      return <div>Please log in to view this page.</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

const ProtectedProfile = withAuth(Profile);

const App = () => {
  return (
    <div>
      <ProtectedProfile />
    </div>
  );
};

// Higher-Order Component
/*const withBorder = (Component) => {
  return (props) => (
    <div style={{ border: "2px solid black", padding: "10px" }}>
      <Component {...props} />
    </div>
  );
};

// Base component
*/

// Enhanced component
//const BorderedComponent = withBorder(SimpleComponent);

// Usage
/*const App2 = () => {
  return <BorderedComponent text="This is a bordered component!" />;
};*/


// Step 1: Define the reducer function
/*const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }; // Update the count
    case "decrement":
      return { count: state.count - 1 }; // Update the count
    case "reset":
      return { count: 0 }; // Reset the count
    default:
      return state; // Return the current state if action is unknown
  }
};

function Counter() {
  // Step 2: Use the useReducer hook
  const [state, dispatch] = useReducer(reducer, { count: 0 }); // Initial state: { count: 0 }

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
*/
/*function WindowSizeComponent() {
  const windowWidth = useWindowWidth(); // Use the custom hook

  return <h1>Window width: {windowWidth}px</h1>;
}
*/

interface UserParams {
  id: string;
  id2: string;
}

const User: React.FC = () => {
  const { id, id2 } = useParams<UserParams>();
  
  return <h1>User ID: {id}/{id2}</h1>;
};

const Child: React.FC<ChildProps> = React.memo(function Child({ count }) {
  console.log("Child re-rendered");
  return <p>Child Count: {count}</p>;
});

/*const Child = React.memo(const Child: React.FC =  ({ count }) => {
console.log("Child re-rendered");
  return <p>Child Count: {count}</p>;
});*/


/*const Test: React.FC = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("John");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setName("Jane")}>Change Name</button>
      <Child count={count} />
    </div>
  );

};  
*/
/*const App: React.FC = () => {

  const location = useLocation();

  // Check if the current path starts with "/user"
  const showNav = !location.pathname.startsWith("/user");

  return (
    <div>
    {showNav && (
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | 
        <Link to="/user/1/2">User 1</Link> | <Link to="/user/2/3">User 2</Link>
      </nav>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id/:id2" element={<User />} />
      </Routes>
    </div>
  );
};
*/
const Dashboard: React.FC = () => <h1>Dashboard (Protected)</h1>;
//const Login: React.FC = () => <h1>Login Page</h1>;

type ProtectedRouteProps = {
  isAuthenticated: boolean;
  redirectPath?: string;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAuthenticated,
  redirectPath = "/login",
}) => {
  console.log("ProtectedRoute - isAuthenticated:", isAuthenticated);

  if (!isAuthenticated) {
    console.log("Redirecting to:", redirectPath);
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

const Auth: React.FC = () => {
  const isAuthenticated = false; // Replace with actual authentication logic

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

/*const App: React.FC = () => {
  const [bears, setBears] = useRecoilState(bearCountState);

  return (
    <div>
      <h1>Bears: {bears}</h1>
      <button onClick={() => setBears((prev) => prev + 1)}>Increase Bears</button>
      <button onClick={() => setBears((prev) => prev - 1)}>Decrease Bears</button>
    </div>
  );
};*/

//const queryClient = new QueryClient();

// Lazy load the component
const About = React.lazy(() => import('./Components/About.tsx'));
const Contact = React.lazy(() => import('./Components/Contact.tsx'));

/*const App: React.FC = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/about">Contact</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};*/

// Singleton instance for a shared counter
let singletonCounterInstance: { count: number; increment: () => void } | null = null;

const getCounterInstance = () => {
  if (!singletonCounterInstance) {
    singletonCounterInstance = {
      count: 0,
      increment() {
        this.count++;
      },
    };
  }
  return singletonCounterInstance;
};

// Singleton state using a hook
let counterInstance: { count: number; increment: () => void } | null = null;

const useSingletonCounter = () => {
  if (!counterInstance) {
    let count = 0;
    const increment = () => {
      count++;
      console.log("Count:", count);
    };
    counterInstance = { count, increment };
  }
  return counterInstance;
};

// React Component
const SingletonCounterWithHook = () => {
  const counter = useSingletonCounter(); // Get the shared instance

  return (
    <div>
      <p>Count: {counter.count}</p>
      <button onClick={() => counter.increment()}>Increment</button>
    </div>
  );
};

// Usage
const App3 = () => {
  return (
    <div>
      <h1>Singleton Pattern with Custom Hook</h1>
      <SingletonCounterWithHook />
      <SingletonCounterWithHook /> {/* Shares the same counter */}
    </div>
  );
};

// Button components
const PrimaryButton = () => <button className="primary">Primary</button>;
const SecondaryButton = () => <button className="secondary">Secondary</button>;

// Factory function
const ButtonFactory = (type: "primary" | "secondary") => {
  if (type === "primary") return <PrimaryButton />;
  if (type === "secondary") return <SecondaryButton />;
  return null;
};

const App4 = () => {
  return (
    <div>
      {ButtonFactory("primary")}
      {ButtonFactory("secondary")}
    </div>
  );
};

// PaymentProcessor.ts
interface PaymentProcessor {
  processPayment(amount: number): void;
}

class CreditCardPayment implements PaymentProcessor {
  processPayment(amount: number) {
    console.log(`Processing credit card payment of $${amount}`);
  }
}

class PayPalPayment implements PaymentProcessor {
  processPayment(amount: number) {
    console.log(`Processing PayPal payment of $${amount}`);
  }
}

class BankTransferPayment implements PaymentProcessor {
  processPayment(amount: number) {
    console.log(`Processing bank transfer payment of $${amount}`);
  }
}

// Factory function to choose payment processor
function createPaymentProcessor(type: string): PaymentProcessor {
  if (type === 'credit-card') return new CreditCardPayment();
  if (type === 'paypal') return new PayPalPayment();
  if (type === 'bank-transfer') return new BankTransferPayment();
  throw new Error('Unknown payment type');
}

// React Component with Radio Buttons
const PaymentComponent = () => {
  const [paymentType, setPaymentType] = React.useState<string>('credit-card');
  const [amount, setAmount] = React.useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const paymentProcessor = createPaymentProcessor(paymentType);
    paymentProcessor.processPayment(amount);
  };

  return (
    <div>
      <h2>Select Payment Method</h2>
      <form onSubmit={handleSubmit}>
        {/* Radio Buttons for Payment Methods */}
        <div>
          <label>
            <input
              type="radio"
              value="credit-card"
              checked={paymentType === 'credit-card'}
              onChange={(e) => setPaymentType(e.target.value)}
            />
            Credit Card
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="paypal"
              checked={paymentType === 'paypal'}
              onChange={(e) => setPaymentType(e.target.value)}
            />
            PayPal
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="bank-transfer"
              checked={paymentType === 'bank-transfer'}
              onChange={(e) => setPaymentType(e.target.value)}
            />
            Bank Transfer
          </label>
        </div>

        {/* Input for Amount */}
        <div>
          <label>
            Amount: 
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

const App5 = () => {
  return (
    <div>
      <PaymentComponent />
    </div>
  );
};

// Component with render props
const MouseTracker = ({ render }: { render: (position: { x: number; y: number }) => JSX.Element }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return <div onMouseMove={handleMouseMove}>{render(position)}</div>;
};

// Usage
const App6 = () => {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <p>
          Mouse position: ({x}, {y})
        </p>
      )}
    />
  );
};

function useHover(): {
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
} {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const onMouseEnter = (): void => setIsHovered(true);
  const onMouseLeave = (): void => setIsHovered(false);

  return { isHovered, onMouseEnter, onMouseLeave };
}

// TypeScript version of the App component
const App7: React.FC = () => {
  const { isHovered, onMouseEnter, onMouseLeave } = useHover();

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <button>{isHovered ? "Hovered!" : "Hover over me!"}</button>
    </div>
  );
};

// Higher-Order Component for fetching data
function withDataFetching(WrappedComponent, url) {
  return function WithDataFetching(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, [url]);

    return <WrappedComponent data={data} loading={loading} error={error} {...props} />;
  };
}

function UserList({ data, loading, error }) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// Wrap the component
const UserListWithData = withDataFetching(UserList, "https://jsonplaceholder.typicode.com/users");

const App9: React.FC = () => {
  return <UserListWithData />;
};

// Render Props Component
const ClickTracker: React.FC<{
  render: (clicks: number, handleClick: () => void) => React.ReactNode;
}> = ({ render }) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1); // Increment click count
    console.log(`Button clicked ${clicks + 1} times`);
  };

  return <>{render(clicks, handleClick)}</>;
};

const App10: React.FC = () => {
  return (
    <div>
      <h1>Render Props Example</h1>
      {/* Use ClickTracker with render props */}
      <ClickTracker
        render={(clicks, handleClick) => (
          <>
            <p>Button clicked {clicks} times</p>
            <Button label="Click Me!" onClick={handleClick} />
          </>
        )}
      />
    </div>
  );
};

// Render Props Component
const AuthGuard: React.FC<{
  render: (isLoggedIn: boolean) => React.ReactNode;
}> = ({ render }) => {
  const isLoggedIn = false; // Simulating login status

  return <>{render(isLoggedIn)}</>;
};


const App11: React.FC = () => {
  return (
    <div>
      <AuthGuard
        render={(isLoggedIn) =>
          isLoggedIn ? <Profile /> : <div>Please log in to view this page.</div>
        }
      />
    </div>
  );
};

// Render Props Component
const BorderWrapper: React.FC<{
  render: React.ReactNode;
}> = ({ children }) => {
  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>
      {children}
    </div>
  );
};

const SimpleComponent: React.FC<{ text: string }> = ({ text }) => <p>{text}</p>;

const App12: React.FC = () => {
  return (
    <BorderWrapper>
      <SimpleComponent text="This is a bordered component!" />
    </BorderWrapper>
  );
};

// Custom hook for data fetching
function useDataFetcher(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

const App13: React.FC = () => {
  const { data, loading, error } = useDataFetcher("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

function DataFetcher({ url, render }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [url]);

  return render({ data, loading, error });
}

const App14: React.FC = () => {
  return (
    <DataFetcher
      url="https://jsonplaceholder.typicode.com/users"
      render={({ data, loading, error }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;

        return (
          <ul>
            {data.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        );
      }}
    />
  );
}; 

class UserSession {
  private static instance: UserSession;
  private user: { id: string; name: string } | null = null;

  private constructor() {
    // Private constructor to prevent instantiation
  }

  static getInstance(): UserSession {
    if (!UserSession.instance) {
      UserSession.instance = new UserSession();
    }
    return UserSession.instance;
  }

  login(user: { id: string; name: string }): void {
    this.user = user;
    console.log(`${user.name} has logged in.`);
  }

  logout(): void {
    console.log(`${this.user?.name} has logged out.`);
    this.user = null;
  }

  getUser(): { id: string; name: string } | null {
    return this.user;
  }

  isLoggedIn(): boolean {
    return this.user !== null;
  }
}


const App15: React.FC = () => {
  const session = UserSession.getInstance();
  //const session2 = UserSession.getInstance();

  //console.log(session===session2);

  const handleLogin = () => {
    session.login({ id: "123", name: "John Doe" });
  };

  const handleLogout = () => {
    session.logout();
  };

  const handleCheckSession = () => {
    const user = session.getUser();
    if (user) {
      console.log(`Logged in user: ${user.name}`);
    } else {
      console.log("No user logged in.");
    }
  };

  return (
    <div>
      <h1>Singleton User Session Example</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleCheckSession}>Check Session</button>
    </div>
  );
};

class ThemeManager {
  private static instance: ThemeManager; // The single instance
  public theme: string;

  private constructor() {
    this.theme = "light"; // Default theme
  }

  static getInstance() {
    if (!ThemeManager.instance) {
      ThemeManager.instance = new ThemeManager(); // Create the instance if it doesn't exist
    }
    return ThemeManager.instance; // Return the single instance
  }

  setTheme(newTheme: string) {
    this.theme = newTheme;
  }

  getTheme() {
    return this.theme;
  }
}

const App16: React.FC = () => {
  const themeManager = ThemeManager.getInstance();

  return (
    <div>
      <h1>Current Theme: {themeManager.getTheme()}</h1>
      <button onClick={() => themeManager.setTheme("dark")}>
        Change to Dark Theme
      </button>
    </div>
  );
};

const App17: React.FC = () => {
  return (
    <div>
      <h1>Observer Pattern Example</h1>
      <AdminPanel />
      <UserNotification />
    </div>
  );
};

const App18: React.FC = () => {
  return (
    <Tabs>
      <TabList>
        <Tab index={0} label="Tab 1" />
        <Tab index={1} label="Tab 2" />
        <Tab index={2} label="Tab 3" />
      </TabList>
      <TabPanels>
        <TabPanel index={0}>Content for Tab 1</TabPanel>
        <TabPanel index={1}>Content for Tab 2</TabPanel>
        <TabPanel index={2}>Content for Tab 3</TabPanel>
      </TabPanels>
    </Tabs>
  );
};


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
