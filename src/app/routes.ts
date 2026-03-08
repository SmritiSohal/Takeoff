import { createBrowserRouter } from "react-router";

import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import EligibilityLanding from "./pages/eligibility/EligibilityLanding";
import EligibilityQuiz from "./pages/eligibility/EligibilityQuiz";
import EligibilityResult from "./pages/eligibility/EligibilityResult";
import FinancialPlanner from "./pages/eligibility/FinancialPlanner";
import PaperworkHub from "./pages/paperwork/PaperworkHub";
import EgcaGuides from "./pages/paperwork/EgcaGuides";
import MedicalGuidance from "./pages/medical/MedicalGuidance";
import MedicalResources from "./pages/medical/MedicalResources";
import ExamPrep from "./pages/exam/ExamPrep";
import ExamPrepResources from "./pages/exam/ExamPrepResources";
import FlyingSchools from "./pages/schools/FlyingSchools";
import SchoolDatabase from "./pages/schools/SchoolDatabase";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/auth",
    Component: Auth,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/eligibility",
    Component: EligibilityLanding,
  },
  {
    path: "/eligibility/quiz",
    Component: EligibilityQuiz,
  },
  {
    path: "/eligibility/result",
    Component: EligibilityResult,
  },
  {
    path: "/eligibility/financial-planner",
    Component: FinancialPlanner,
  },
  {
    path: "/paperwork",
    Component: PaperworkHub,
  },
  {
    path: "/paperwork/egca-guides",
    Component: EgcaGuides,
  },
  {
    path: "/medical",
    Component: MedicalGuidance,
  },
  {
    path: "/medical/resources",
    Component: MedicalResources,
  },
  {
    path: "/exam-prep",
    Component: ExamPrep,
  },
  {
    path: "/exam-prep/resources",
    Component: ExamPrepResources,
  },
  {
    path: "/flying-schools",
    Component: FlyingSchools,
  },
  {
    path: "/flying-schools/database",
    Component: SchoolDatabase,
  },
]);