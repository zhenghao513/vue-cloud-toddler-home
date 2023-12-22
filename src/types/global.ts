export interface UserSuggestionModel {
  name: string
  phoneNumber: string
  isPublicInternet: boolean
  title: string
  content: string
}

export interface UserAppointmentModel {
  name: string
  phoneNumber: string
  appointmentDate: string
}

export interface ChildInfoModel {
  childName: string
  gender: string
  birthday: string
  guardian: string
  guardianPhone: string
  address: string
  healthStatus: string[]
  otherHealthStatus: string
  educationalExpectation: string
  hobby: string
  specialNeedsAndSuggestions: string
}
