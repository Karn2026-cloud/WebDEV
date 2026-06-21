import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Messages from "./pages/Messages";
import Testimonials from "./pages/Testimonials";
import Settings from "./pages/Settings";
import ContentManager from "./pages/ContentManager";
import Pricing from "./pages/Pricing";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
path="/content"
element={
<ProtectedRoute>
<ContentManager/>
</ProtectedRoute>
}
/>

        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          }
        />

        <Route
          path="/messages"
          element={
            <ProtectedRoute>
              <Messages />
            </ProtectedRoute>
          }
        />
        <Route
path="/testimonials"
element={
<ProtectedRoute>
<Testimonials/>
</ProtectedRoute>
}
/>
<Route
path="/pricing"
element={
<ProtectedRoute>
<Pricing/>
</ProtectedRoute>
}
/>
<Route
path="/settings"
element={
<ProtectedRoute>
<Settings/>
</ProtectedRoute>
}
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;