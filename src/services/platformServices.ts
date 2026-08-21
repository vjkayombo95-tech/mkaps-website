import { adminMetrics, mockAnnouncements, mockParticipant, mockProgramme, participantMetrics } from '../data/mockPlatform'
import type { RegistrationDraft } from '../types/operations'

// Frontend prototype only. Replace these mock boundaries with authenticated APIs later.
export const participantService = { getDashboard: async () => ({ participant: mockParticipant, metrics: participantMetrics, nextSession: mockProgramme[0], announcement: mockAnnouncements[0] }) }
export const adminService = { getDashboard: async () => ({ metrics: adminMetrics, announcements: mockAnnouncements }) }
export const registrationService = {
  submit: async (draft: RegistrationDraft) => ({ registrationNumber: 'MKAPS-2027-002431', participantName: draft.fullName, status: 'pending_payment' as const }),
}
