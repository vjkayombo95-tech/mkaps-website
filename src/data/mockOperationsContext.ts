import { createContext, useContext } from 'react'
import type { AdminAnnouncement, EventSettings, ManagedSpeaker, ProgrammeSession, RegistrationRecord, SpeakerStatus, StaffMember } from '../types/operations'

export type MockOperationsStore = {
  registrations: RegistrationRecord[]
  announcements: AdminAnnouncement[]
  programme: ProgrammeSession[]
  speakers: ManagedSpeaker[]
  staff: StaffMember[]
  settings: EventSettings
  checkIn: (id: string, checkedIn: boolean) => void
  markPaid: (id: string) => void
  publishAnnouncement: (announcement: Omit<AdminAnnouncement, 'id'>) => void
  cancelSession: (id: string) => void
  duplicateSession: (id: string) => void
  assignFacility: (participantId: string, facilityName: string) => void
  saveSpeaker: (speaker: ManagedSpeaker) => void
  removeSpeaker: (id: string) => void
  setSpeakerStatus: (id: string, status: SpeakerStatus) => void
  toggleFeaturedSpeaker: (id: string) => void
  saveStaff: (staff: StaffMember) => void
  toggleStaffStatus: (id: string) => void
  updateSettings: (settings: EventSettings) => void
}

export const MockOperationsContext = createContext<MockOperationsStore | null>(null)

export function useMockOperations() {
  const store = useContext(MockOperationsContext)
  if (!store) throw new Error('useMockOperations must be used within MockOperationsProvider')
  return store
}
