export type RegistrationStatus = 'draft' | 'submitted' | 'pending_payment' | 'confirmed' | 'cancelled'
export type PaymentStatus = 'unpaid' | 'partial' | 'paid' | 'refunded'
export type DevRole = 'Participant' | 'Registration Officer' | 'Finance Officer' | 'Event Administrator' | 'Super Admin'

export type Participant = {
  id: string
  name: string
  country: string
  registrationNumber: string
  registrationStatus: RegistrationStatus
  paymentStatus: PaymentStatus
  accommodation: string
  transport: string
  kilimanjaroActivity: string
}

export type DashboardMetric = { label: string; value: string; detail: string }
export type ProgrammeSession = { id: string; time: string; title: string; speaker: string; venue: string; category: string }
export type Announcement = { id: string; title: string; message: string; category: 'Important' | 'General' | 'Travel' | 'Programme' | 'Emergency'; date: string }
export type PaymentRecord = { id: string; participantId: string; date: string; reference: string; method: string; amount: number; status: PaymentStatus }
export type RegistrationRecord = Participant & { registrationDate: string; church: string; category: string; checkedIn: boolean; expectedAmount: number; paidAmount: number; paymentMethod: string; lastPayment: string }
export type Facility = { id: string; name: string; type: string; capacity: number; occupied: number; location: string; status: 'Available' | 'Limited' | 'Full' }
export type Arrival = { id: string; participant: string; flight: string; airport: string; arrivalTime: string; pickupPoint: string; vehicle: string; driver: string; status: 'Scheduled' | 'Pending' | 'Collected' }
export type AdminAnnouncement = { id: string; title: string; message: string; category: string; audience: string; priority: string; publishDate: string }
export type SpeakerStatus = 'Draft' | 'Invited' | 'Pending' | 'Confirmed' | 'Declined' | 'Published'
export type ManagedSpeaker = { id: string; fullName: string; title: string; country: string; ministry: string; role: string; category: string; shortBio: string; fullBio: string; session: string; featured: boolean; status: SpeakerStatus; imageReference: string }
export type StaffStatus = 'Active' | 'Inactive'
export type StaffMember = { id: string; name: string; email: string; role: string; department: string; status: StaffStatus; lastActive: string }
export type PermissionLevel = 'None' | 'View' | 'Manage'
export type RoleDefinition = { name: string; description: string; permissions: Record<string, PermissionLevel> }
export type EventSettings = {
  eventName: string; theme: string; startDate: string; endDate: string; venue: string; city: string; country: string; attendanceTarget: number
  registrationOpen: boolean; registrationDeadline: string; registrationCapacity: number; allowWaitlist: boolean; requirePayment: boolean; allowKilimanjaro: boolean
  primaryColor: string; secondaryColor: string; themeText: string
  emailConfirmations: boolean; smsUpdates: boolean; whatsappUpdates: boolean; pushNotifications: boolean
  qrCheckIn: boolean; manualCheckIn: boolean; accommodationAllocation: boolean; airportTransfers: boolean; emergencyMode: boolean
}

export type RegistrationDraft = {
  fullName: string
  gender: string
  dateOfBirth: string
  nationality: string
  countryOfResidence: string
  phone: string
  email: string
  documentType: string
  documentNumber: string
  churchName: string
  denomination: string
  churchCity: string
  churchCountry: string
  ministry: string
  churchRole: string
  emergencyName: string
  emergencyRelationship: string
  emergencyPhone: string
  emergencyAlternativePhone: string
  accommodation: string
  budgetPreference: string
  roomSharing: string
  airportTransfer: string
  arrivalAirport: string
  arrivalDate: string
  arrivalTime: string
  localShuttle: string
  ownTransport: string
  kilimanjaroActivity: string
  paymentPreference: string
  confirmedAccurate: boolean
}
