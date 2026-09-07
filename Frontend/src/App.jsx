import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/common/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <>
     <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
        }}
      />
      <ScrollToTop />
      <AppRoutes />
    </>
  );
}
