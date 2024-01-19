export interface BaseFormModel {
  name: string
  phoneNumber: string
}

export interface SuggestionFormModel extends BaseFormModel {
  isPublicInternet: boolean
  title: string
  content: string
}

export interface AppointmentFormModel extends BaseFormModel {
  appointmentDate: string
}

export interface ToddlerInfoModel {
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
