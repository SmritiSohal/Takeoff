import { ReactNode } from 'react';
import { createBrowserRouter } from 'react-router';

import Landing from './pages/Landing';
import Auth from './pages/Auth';
import ResetPassword from './pages/ResetPassword';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import EligibilityLanding from './pages/eligibility/EligibilityLanding';
import EligibilityQuiz from './pages/eligibility/EligibilityQuiz';
import EligibilityResult from './pages/eligibility/EligibilityResult';
import FinancialPlanner from './pages/eligibility/FinancialPlanner';
import PaperworkHub from './pages/paperwork/PaperworkHub';
import EgcaGuides from './pages/paperwork/EgcaGuides';
import MedicalGuidance from './pages/medical/MedicalGuidance';
import MedicalResources from './pages/medical/MedicalResources';
import ExamPrep from './pages/exam/ExamPrep';
import ExamPrepResources from './pages/exam/ExamPrepResources';
import FlyingSchools from './pages/schools/FlyingSchools';
import SchoolDatabase from './pages/schools/SchoolDatabase';
import ProtectedRoute from './components/ProtectedRoute';

const protectedElement = (component: ReactNode) => <ProtectedRoute>{component}</ProtectedRoute>;

export const router = createBrowserRouter([
  { path: '/', Component: Landing },
  { path: '/auth', Component: Auth },
  { path: '/reset-password', Component: ResetPassword },
  { path: '/about', Component: About },
  { path: '/dashboard', element: protectedElement(<Dashboard />) },
  // Free pages — no sign-in required
  { path: '/eligibility', Component: EligibilityLanding },
  { path: '/eligibility/quiz', Component: EligibilityQuiz },
  { path: '/eligibility/result', Component: EligibilityResult },
  { path: '/paperwork', Component: PaperworkHub },
  { path: '/medical', Component: MedicalGuidance },
  { path: '/exam-prep', Component: ExamPrep },
  { path: '/flying-schools', Component: FlyingSchools },
  // Premium pages — require sign-in (and premium unlock)
  { path: '/eligibility/financial-planner', element: protectedElement(<FinancialPlanner />) },
  { path: '/paperwork/egca-guides', element: protectedElement(<EgcaGuides />) },
  { path: '/medical/resources', element: protectedElement(<MedicalResources />) },
  { path: '/exam-prep/resources', element: protectedElement(<ExamPrepResources />) },
  { path: '/flying-schools/database', element: protectedElement(<SchoolDatabase />) },
]);
