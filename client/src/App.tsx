import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Education from "@/pages/Education";
import Health from "@/pages/Health";
import Development from "@/pages/Development";
import Humanitarian from "@/pages/Humanitarian";
import Advocacy from "@/pages/Advocacy";
import ScienceOutreach from "@/pages/ScienceOutreach";
import Partner from "@/pages/Partner";
import Volunteer from "@/pages/Volunteer";
import Careers from "@/pages/Careers";
import DonationOptions from "@/pages/DonationOptions";
import WhyDonate from "@/pages/WhyDonate";
import DonorRecognition from "@/pages/DonorRecognition";
import SourceOfFunds from "@/pages/SourceOfFunds";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/education" component={Education} />
      <Route path="/health" component={Health} />
      <Route path="/development" component={Development} />
      <Route path="/humanitarian" component={Humanitarian} />
      <Route path="/advocacy" component={Advocacy} />
      <Route path="/science-outreach" component={ScienceOutreach} />
      <Route path="/partner" component={Partner} />
      <Route path="/volunteer" component={Volunteer} />
      <Route path="/careers" component={Careers} />
      <Route path="/donation-options" component={DonationOptions} />
      <Route path="/why-donate" component={WhyDonate} />
      <Route path="/donor-recognition" component={DonorRecognition} />
      <Route path="/source-of-funds" component={SourceOfFunds} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
