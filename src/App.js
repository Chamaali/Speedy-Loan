
import AboutPage from "./Views/AboutPage";
import HomePage from "./Views/HomePage";
import SignInPage from "./Views/SignInPage";
import ContactUsPage from "./Views/ContactUsPage";
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import OnlinePayment from "./Components/OnlinePayment";
import OnlinePaymentPage from "./Views/OnlinePaymentPage";

function App() {
  return (    
    <BrowserRouter>
        <OnlinePaymentPage />
        {/* <Routes>
             <Route index element={<HomePage />} />
             <Route path="/about" element={<AboutPage />} />
             <Route path="/repayment" element={<RepaymentPage />} />
             <Route path="/contactUs" element={<ContactUsPage />} />
             <Route path="/apply" element={<LoanApplicationPage />} />
             <Route path="/signin" element={<SignInPage />} />
         </Routes> */}
    </BrowserRouter>
  );
}

export default App;



