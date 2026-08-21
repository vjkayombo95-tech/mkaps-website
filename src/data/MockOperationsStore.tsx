import { useMemo, useState, type PropsWithChildren } from 'react'
import { mockAdminAnnouncements, mockManagedSpeakers, mockProgramme, mockRegistrations, mockSettings, mockStaff } from './mockPlatform'
import { MockOperationsContext, type MockOperationsStore } from './mockOperationsContext'

// Frontend prototype only — real authorization and persistence must be enforced server-side.
export function MockOperationsProvider({ children }: PropsWithChildren) {
  const [registrations, setRegistrations] = useState(mockRegistrations)
  const [announcements, setAnnouncements] = useState(mockAdminAnnouncements)
  const [programme, setProgramme] = useState(mockProgramme)
  const [speakers, setSpeakers] = useState(mockManagedSpeakers)
  const [staff, setStaff] = useState(mockStaff)
  const [settings, setSettings] = useState(mockSettings)
  const store = useMemo<MockOperationsStore>(() => ({
    registrations, announcements, programme, speakers, staff, settings,
    checkIn: (id, checkedIn) => setRegistrations((items) => items.map((item) => item.id === id ? { ...item, checkedIn } : item)),
    markPaid: (id) => setRegistrations((items) => items.map((item) => item.id === id ? { ...item, paymentStatus: 'paid', paidAmount: item.expectedAmount, lastPayment: 'Today' } : item)),
    publishAnnouncement: (announcement) => setAnnouncements((items) => [{ ...announcement, id: `announcement-${Date.now()}` }, ...items]),
    cancelSession: (id) => setProgramme((items) => items.map((item) => item.id === id ? { ...item, category: `${item.category} · Cancelled` } : item)),
    duplicateSession: (id) => setProgramme((items) => { const source = items.find((item) => item.id === id); return source ? [...items, { ...source, id: `${id}-copy-${Date.now()}`, title: `${source.title} (Copy)` }] : items }),
    assignFacility: (participantId, facilityName) => setRegistrations((items) => items.map((item) => item.id === participantId ? { ...item, accommodation: facilityName } : item)),
    saveSpeaker: (speaker) => setSpeakers((items) => items.some((item) => item.id === speaker.id) ? items.map((item) => item.id === speaker.id ? speaker : item) : [...items, speaker]),
    removeSpeaker: (id) => setSpeakers((items) => items.filter((item) => item.id !== id)),
    setSpeakerStatus: (id, status) => setSpeakers((items) => items.map((item) => item.id === id ? { ...item, status } : item)),
    toggleFeaturedSpeaker: (id) => setSpeakers((items) => items.map((item) => item.id === id ? { ...item, featured: !item.featured } : item)),
    saveStaff: (member) => setStaff((items) => items.some((item) => item.id === member.id) ? items.map((item) => item.id === member.id ? member : item) : [...items, member]),
    toggleStaffStatus: (id) => setStaff((items) => items.map((item) => item.id === id ? { ...item, status: item.status === 'Active' ? 'Inactive' : 'Active' } : item)),
    updateSettings: setSettings,
  }), [announcements, programme, registrations, settings, speakers, staff])
  return <MockOperationsContext.Provider value={store}>{children}</MockOperationsContext.Provider>
}
