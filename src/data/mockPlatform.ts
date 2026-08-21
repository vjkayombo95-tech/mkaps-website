import type { AdminAnnouncement, Announcement, Arrival, DashboardMetric, EventSettings, Facility, ManagedSpeaker, Participant, PaymentRecord, ProgrammeSession, RegistrationRecord, RoleDefinition, StaffMember } from '../types/operations'

export const mockParticipant: Participant = {
  id: 'participant-2431', name: 'Neema Mwakalinga', country: 'Tanzania', registrationNumber: 'MKAPS-2027-002431',
  registrationStatus: 'confirmed', paymentStatus: 'partial', accommodation: 'Summit Camping · Tent C-14',
  transport: 'Kilimanjaro Airport transfer requested', kilimanjaroActivity: 'Lower Slopes Prayer Experience',
}

export const participantMetrics = [
  { label: 'Registration', value: 'Confirmed', detail: 'Your place at MKAPS 2027 is reserved.' },
  { label: 'Payment', value: 'Partial', detail: 'TZS 180,000 balance remaining.' },
  { label: 'QR Pass', value: 'Ready', detail: 'Available before event check-in.' },
  { label: 'Accommodation', value: 'Assigned', detail: 'Summit Camping · Tent C-14' },
  { label: 'Transport', value: 'Requested', detail: 'Airport arrival details received.' },
  { label: 'Kilimanjaro', value: 'Selected', detail: 'Lower Slopes Prayer Experience' },
] satisfies DashboardMetric[]

export const adminMetrics = [
  { label: 'Total Registrations', value: '2,431', detail: '+184 this week' },
  { label: 'Confirmed Participants', value: '1,872', detail: '77% of registrations' },
  { label: 'Pending Payments', value: '438', detail: 'Follow-up required' },
  { label: 'Countries Represented', value: '46', detail: 'Africa and the nations' },
  { label: 'Accommodation Requests', value: '1,604', detail: '1,238 assigned' },
  { label: 'Airport Transfers', value: '714', detail: '312 arrivals scheduled' },
  { label: 'Kilimanjaro Climbers', value: '286', detail: 'Screening pending for 41' },
  { label: "Today's Check-ins", value: '128', detail: 'Last update 8 minutes ago' },
] satisfies DashboardMetric[]

export const mockProgramme: ProgrammeSession[] = [
  { id: 'session-1', time: '08:00', title: 'Morning Prayer Watch', speaker: 'Summit Prayer Team', venue: 'Main Prayer Pavilion', category: 'Prayer' },
  { id: 'session-2', time: '10:30', title: 'Faith for a Generation', speaker: 'Guest Minister', venue: 'Kilimanjaro Hall', category: 'Teaching' },
]

export const mockAnnouncements: Announcement[] = [
  { id: 'announcement-1', title: 'Registration desk opens at 07:00', message: 'Bring your registration number and identification document.', category: 'Important', date: '20 Aug 2027' },
  { id: 'announcement-2', title: 'Evening prayer venue update', message: 'The session will take place in the Main Prayer Pavilion.', category: 'Programme', date: '20 Aug 2027' },
]

export const mockRegistrations: RegistrationRecord[] = [
  { ...mockParticipant, id: 'participant-2431', name: 'Neema Mwakalinga', country: 'Tanzania', registrationDate: '12 May 2027', church: 'Grace Fellowship Moshi', category: 'General Participant', checkedIn: false, expectedAmount: 620000, paidAmount: 440000, paymentMethod: 'Mobile Money', lastPayment: '10 Aug 2027' },
  { ...mockParticipant, id: 'participant-2432', name: 'David Okello', country: 'Kenya', registrationNumber: 'MKAPS-2027-002432', registrationStatus: 'pending_payment', paymentStatus: 'unpaid', registrationDate: '13 May 2027', church: 'New Life Nairobi', category: 'Pastor', checkedIn: false, expectedAmount: 450000, paidAmount: 0, paymentMethod: 'Bank Transfer', lastPayment: '—' },
  { ...mockParticipant, id: 'participant-2433', name: 'Ruth Banda', country: 'Zambia', registrationNumber: 'MKAPS-2027-002433', registrationStatus: 'confirmed', paymentStatus: 'paid', accommodation: 'Kilimanjaro View Lodge', transport: 'Self arranged', kilimanjaroActivity: 'Guided Day Hike', registrationDate: '15 May 2027', church: 'Living Word Lusaka', category: 'Worship Leader', checkedIn: true, expectedAmount: 780000, paidAmount: 780000, paymentMethod: 'Card Payment', lastPayment: '2 Aug 2027' },
  { ...mockParticipant, id: 'participant-2434', name: 'Samuel Mensah', country: 'Ghana', registrationNumber: 'MKAPS-2027-002434', registrationStatus: 'submitted', paymentStatus: 'partial', registrationDate: '17 May 2027', church: 'Kingdom Centre Accra', category: 'Youth Leader', checkedIn: false, expectedAmount: 540000, paidAmount: 250000, paymentMethod: 'Mobile Money', lastPayment: '8 Aug 2027' },
]

export const mockPayments: PaymentRecord[] = [
  { id: 'pay-1', participantId: 'participant-2431', date: '10 Aug 2027', reference: 'MOMO-849201', method: 'Mobile Money', amount: 250000, status: 'paid' },
  { id: 'pay-2', participantId: 'participant-2431', date: '3 Jul 2027', reference: 'MOMO-711428', method: 'Mobile Money', amount: 190000, status: 'paid' },
]

export const mockFacilities: Facility[] = [
  { id: 'facility-1', name: 'MKAPS Summit Camp', type: 'Camping', capacity: 900, occupied: 712, location: 'Summit Grounds, Moshi', status: 'Available' },
  { id: 'facility-2', name: 'Kilimanjaro View Lodge', type: 'Lodge', capacity: 180, occupied: 164, location: 'Marangu Road', status: 'Limited' },
  { id: 'facility-3', name: 'Uhuru Conference Hotel', type: 'Hotel', capacity: 240, occupied: 240, location: 'Moshi Town', status: 'Full' },
]

export const mockArrivals: Arrival[] = [
  { id: 'arrival-1', participant: 'Neema Mwakalinga', flight: 'KQ 671', airport: 'Kilimanjaro International', arrivalTime: '19 Aug · 14:20', pickupPoint: 'Terminal 1 Arrivals', vehicle: 'Shuttle K-12', driver: 'John Mrema', status: 'Scheduled' },
  { id: 'arrival-2', participant: 'David Okello', flight: 'PW 433', airport: 'Kilimanjaro International', arrivalTime: '19 Aug · 17:45', pickupPoint: 'Terminal 1 Arrivals', vehicle: 'Unassigned', driver: 'Unassigned', status: 'Pending' },
]

export const mockAdminAnnouncements: AdminAnnouncement[] = mockAnnouncements.map((item) => ({ ...item, audience: 'All Participants', priority: item.category === 'Important' ? 'High' : 'Normal', publishDate: item.date }))

export const mockManagedSpeakers: ManagedSpeaker[] = [
  { id: 'speaker-1', fullName: 'Apostle Boniface Godwin Mwamposa', title: 'Apostle', country: 'Tanzania', ministry: 'Arise & Shine International', role: 'Founder & Senior Pastor', category: 'Prayer & Revival', shortBio: 'Tanzanian Christian minister associated with prayer and revival ministry.', fullBio: 'Illustrative sample profile for frontend design and workflow testing only.', session: 'Opening Prayer & Revival', featured: true, status: 'Draft', imageReference: 'boniface-mwamposa.png' },
  { id: 'speaker-2', fullName: 'Steven Furtick', title: 'Pastor', country: 'United States', ministry: 'Elevation Church', role: 'Founder & Lead Pastor', category: 'Faith & Leadership', shortBio: 'Author and preacher with an international digital ministry audience.', fullBio: 'Illustrative sample profile for frontend design and workflow testing only.', session: 'Faith for a Generation', featured: false, status: 'Invited', imageReference: 'steven-furtick.png' },
  { id: 'speaker-3', fullName: 'T.D. Jakes', title: 'Bishop', country: 'United States', ministry: "T.D. Jakes Group / The Potter's House", role: 'Founder & Chairman', category: 'Leadership & Transformation', shortBio: 'Faith leader, author and entrepreneur focused on leadership and empowerment.', fullBio: 'Illustrative sample profile for frontend design and workflow testing only.', session: 'Leadership & Transformation', featured: false, status: 'Pending', imageReference: 'td-jakes.png' },
]

export const mockStaff: StaffMember[] = [
  { id: 'staff-1', name: 'Grace Mushi', email: 'grace.mushi@mkaps.test', role: 'Event Administrator', department: 'Operations', status: 'Active', lastActive: 'Today · 09:31' },
  { id: 'staff-2', name: 'Peter Mwita', email: 'peter.mwita@mkaps.test', role: 'Registration Officer', department: 'Registration', status: 'Active', lastActive: 'Today · 08:54' },
  { id: 'staff-3', name: 'Anna Kweka', email: 'anna.kweka@mkaps.test', role: 'Finance Officer', department: 'Finance', status: 'Inactive', lastActive: '18 Aug · 17:20' },
]

const permissionAreas = ['Dashboard','Registrations','Participants','Payments','Accommodation','Transport','Programme','Speakers','Announcements','Reports','Staff','Settings']
const permissions = (manage: string[], view: string[] = permissionAreas) => Object.fromEntries(permissionAreas.map((area) => [area, manage.includes(area) ? 'Manage' : view.includes(area) ? 'View' : 'None'])) as RoleDefinition['permissions']
export const mockRoles: RoleDefinition[] = [
  { name: 'Super Admin', description: 'Prototype access to all operational areas.', permissions: permissions(permissionAreas) },
  { name: 'Event Administrator', description: 'Coordinates most event operations.', permissions: permissions(permissionAreas.filter((area) => area !== 'Settings')) },
  ...['Registration Officer','Finance Officer','Accommodation Officer','Transport Officer','Programme Officer','Media Officer','Check-In Officer','Volunteer Coordinator','Medical / Safety Officer','Viewer'].map((name) => {
    const area = name.replace(' Officer','').replace(' Coordinator','')
    return { name, description: `Prototype ${name.toLowerCase()} role.`, permissions: permissions(name === 'Viewer' ? [] : [area], name === 'Viewer' ? permissionAreas : ['Dashboard', area]) }
  }),
]

export const mockSettings: EventSettings = {
  eventName: 'Mount Kilimanjaro Annual Prayer Summit 2027', theme: 'A Mountain of Prayer', startDate: '2027-08-20', endDate: '2027-08-29', venue: 'MKAPS Summit Grounds', city: 'Moshi', country: 'Tanzania', attendanceTarget: 5000,
  registrationOpen: true, registrationDeadline: '2027-07-31', registrationCapacity: 5000, allowWaitlist: true, requirePayment: false, allowKilimanjaro: true,
  primaryColor: '#071a2f', secondaryColor: '#d7a536', themeText: 'A Mountain of Prayer for Africa and the Nations',
  emailConfirmations: false, smsUpdates: false, whatsappUpdates: false, pushNotifications: false,
  qrCheckIn: true, manualCheckIn: true, accommodationAllocation: true, airportTransfers: true, emergencyMode: false,
}
