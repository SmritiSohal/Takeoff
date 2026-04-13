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
  { path: '/eligibility', element: protectedElement(<EligibilityLanding />) },
  { path: '/eligibility/quiz', element: protectedElement(<EligibilityQuiz />) },
  { path: '/eligibility/result', element: protectedElement(<EligibilityResult />) },
  { path: '/eligibility/financial-planner', element: protectedElement(<FinancialPlanner />) },
  { path: '/paperwork', element: protectedElement(<PaperworkHub />) },
  { path: '/paperwork/egca-guides', element: protectedElement(<EgcaGuides />) },
  { path: '/medical', element: protectedElement(<MedicalGuidance />) },
  { path: '/medical/resources', element: protectedElement(<MedicalResources />) },
  { path: '/exam-prep', element: protectedElement(<ExamPrep />) },
  { path: '/exam-prep/resources', element: protectedElement(<ExamPrepResources />) },
  { path: '/flying-schools', element: protectedElement(<FlyingSchools />) },
  { path: '/flying-schools/database', element: protectedElement(<SchoolDatabase />) },
]);
