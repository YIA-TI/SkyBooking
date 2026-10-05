import emailjs from '@emailjs/browser'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string
const TPL_APPROVE = import.meta.env.VITE_EMAILJS_TEMPLATE_APPROVED as string
const TPL_REJECT  = import.meta.env.VITE_EMAILJS_TEMPLATE_REJECTED as string
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string

export interface BookingEmailParams {
  to_email:     string
  to_name:      string
  booking_id:   string
  event_name:   string
  room_name:    string
  date:         string
  start_time:   string
  end_time:     string
  participants: number
  reject_reason?: string
  admin_note?:    string
}

export async function sendApprovalEmail(params: BookingEmailParams) {
  return emailjs.send(SERVICE_ID, TPL_APPROVE, params as unknown as Record<string, unknown>, PUBLIC_KEY)
}

export async function sendRejectionEmail(params: BookingEmailParams) {
  return emailjs.send(SERVICE_ID, TPL_REJECT, params as unknown as Record<string, unknown>, PUBLIC_KEY)
}
