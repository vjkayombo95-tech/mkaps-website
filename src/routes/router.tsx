/* oxlint-disable react/only-export-components -- this router module intentionally owns lazy route component declarations */
import { lazy, Suspense, type ReactNode } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { AdminLayout } from '../components/platform/AdminLayout'
import { PortalLayout } from '../components/platform/PortalLayout'
import { RouteLoading } from '../components/platform/RouteLoading'
import { HomePage } from '../pages/HomePage'
import { SpeakersPage } from '../pages/SpeakersPage'

const RegistrationPage = lazy(() => import('../pages/RegistrationPage').then((module) => ({ default: module.RegistrationPage })))
const ParticipantDashboardPage = lazy(() => import('../pages/portal/ParticipantDashboardPage').then((module) => ({ default: module.ParticipantDashboardPage })))
const MyRegistrationPage = lazy(() => import('../pages/portal/ParticipantPages').then((module) => ({ default: module.MyRegistrationPage })))
const PassPage = lazy(() => import('../pages/portal/ParticipantPages').then((module) => ({ default: module.PassPage })))
const ProgrammePage = lazy(() => import('../pages/portal/ParticipantPages').then((module) => ({ default: module.ProgrammePage })))
const AccommodationPage = lazy(() => import('../pages/portal/ParticipantPages').then((module) => ({ default: module.AccommodationPage })))
const TransportPage = lazy(() => import('../pages/portal/ParticipantPages').then((module) => ({ default: module.TransportPage })))
const PaymentsPage = lazy(() => import('../pages/portal/ParticipantPages').then((module) => ({ default: module.PaymentsPage })))
const KilimanjaroPage = lazy(() => import('../pages/portal/ParticipantPages').then((module) => ({ default: module.KilimanjaroPage })))
const AnnouncementsPage = lazy(() => import('../pages/portal/ParticipantPages').then((module) => ({ default: module.AnnouncementsPage })))
const ProfilePage = lazy(() => import('../pages/portal/ParticipantPages').then((module) => ({ default: module.ProfilePage })))
const AdminDashboardPage = lazy(() => import('../pages/admin/AdminDashboardPage').then((module) => ({ default: module.AdminDashboardPage })))
const RegistrationsAdminPage = lazy(() => import('../pages/admin/AdminPages').then((module) => ({ default: module.RegistrationsAdminPage })))
const ParticipantsAdminPage = lazy(() => import('../pages/admin/AdminPages').then((module) => ({ default: module.ParticipantsAdminPage })))
const ParticipantDetailAdminPage = lazy(() => import('../pages/admin/AdminPages').then((module) => ({ default: module.ParticipantDetailAdminPage })))
const CheckInAdminPage = lazy(() => import('../pages/admin/AdminPages').then((module) => ({ default: module.CheckInAdminPage })))
const PaymentsAdminPage = lazy(() => import('../pages/admin/AdminPages').then((module) => ({ default: module.PaymentsAdminPage })))
const AccommodationAdminPage = lazy(() => import('../pages/admin/AdminPages').then((module) => ({ default: module.AccommodationAdminPage })))
const TransportAdminPage = lazy(() => import('../pages/admin/AdminPages').then((module) => ({ default: module.TransportAdminPage })))
const ProgrammeAdminPage = lazy(() => import('../pages/admin/AdminPages').then((module) => ({ default: module.ProgrammeAdminPage })))
const AnnouncementsAdminPage = lazy(() => import('../pages/admin/AdminPages').then((module) => ({ default: module.AnnouncementsAdminPage })))
const SpeakersAdminPage = lazy(() => import('../pages/admin/AdminRemainingPages').then((module) => ({ default: module.SpeakersAdminPage })))
const ReportsAdminPage = lazy(() => import('../pages/admin/AdminRemainingPages').then((module) => ({ default: module.ReportsAdminPage })))
const StaffAdminPage = lazy(() => import('../pages/admin/AdminRemainingPages').then((module) => ({ default: module.StaffAdminPage })))
const SettingsAdminPage = lazy(() => import('../pages/admin/AdminRemainingPages').then((module) => ({ default: module.SettingsAdminPage })))

const loading = (element: ReactNode) => <Suspense fallback={<RouteLoading />}>{element}</Suspense>

export const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/speakers', element: <SpeakersPage /> },
  { path: '/registration', element: loading(<RegistrationPage />) },
  {
    path: '/portal', element: <PortalLayout />, children: [
      { index: true, element: loading(<ParticipantDashboardPage />) },
      { path: 'registration', element: loading(<MyRegistrationPage />) }, { path: 'pass', element: loading(<PassPage />) },
      { path: 'programme', element: loading(<ProgrammePage />) }, { path: 'accommodation', element: loading(<AccommodationPage />) },
      { path: 'transport', element: loading(<TransportPage />) }, { path: 'payments', element: loading(<PaymentsPage />) },
      { path: 'kilimanjaro', element: loading(<KilimanjaroPage />) }, { path: 'announcements', element: loading(<AnnouncementsPage />) },
      { path: 'profile', element: loading(<ProfilePage />) },
    ],
  },
  {
    path: '/admin', element: <AdminLayout />, children: [
      { index: true, element: loading(<AdminDashboardPage />) },
      { path: 'registrations', element: loading(<RegistrationsAdminPage />) }, { path: 'participants', element: loading(<ParticipantsAdminPage />) },
      { path: 'participants/:id', element: loading(<ParticipantDetailAdminPage />) }, { path: 'check-in', element: loading(<CheckInAdminPage />) },
      { path: 'payments', element: loading(<PaymentsAdminPage />) }, { path: 'accommodation', element: loading(<AccommodationAdminPage />) },
      { path: 'transport', element: loading(<TransportAdminPage />) }, { path: 'programme', element: loading(<ProgrammeAdminPage />) },
      { path: 'announcements', element: loading(<AnnouncementsAdminPage />) }, { path: 'speakers', element: loading(<SpeakersAdminPage />) },
      { path: 'reports', element: loading(<ReportsAdminPage />) }, { path: 'staff', element: loading(<StaffAdminPage />) },
      { path: 'settings', element: loading(<SettingsAdminPage />) },
    ],
  },
])
