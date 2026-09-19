import { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';
import { doctors } from '@/data/doctors';
import { services } from '@/data/services';
import { clinicConfig } from '@/data/clinicConfig';

interface AppointmentFormProps {
  preselectedDoctor?: string;
}

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function AppointmentForm({ preselectedDoctor }: AppointmentFormProps) {
  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    doctor: preselectedDoctor ?? '',
    department: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  // Basic honeypot field — bots fill this, real users don't see it.
  const [honeypot, setHoneypot] = useState('');

  const update = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: '' }));
  };

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!formData.fullName.trim()) e.fullName = 'Please enter your full name';
    if (!formData.phone.trim()) e.phone = 'Please enter your phone number';
    else if (!/^[0-9+\-\s()]{7,15}$/.test(formData.phone)) e.phone = 'Please enter a valid phone number';
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = 'Please enter a valid email address';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    // Honeypot check
    if (honeypot) return;

    if (!validate()) return;

    setState('submitting');
    try {
      // Supabase-ready: when database is connected, this will insert into the appointments table.
      // For now, we simulate a submission.
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setState('success');
    } catch {
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6">
        <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mb-5">
          <CheckCircle2 className="w-8 h-8 text-teal-600" />
        </div>
        <h3 className="text-xl font-display font-bold text-ink-900">Appointment Request Received</h3>
        <p className="text-ink-500 mt-2 max-w-md">
          Thank you, {formData.fullName.split(' ')[0]}. We have received your appointment request.
          Our team will contact you at {formData.phone} shortly to confirm your appointment.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={`tel:${clinicConfig.phones[0]}`}
            className="text-sm font-semibold text-brand-700 hover:text-brand-800 transition-colors"
          >
            Or call us now: {clinicConfig.phones[0]}
          </a>
        </div>
        <button
          onClick={() => {
            setState('idle');
            setFormData({
              fullName: '',
              phone: '',
              email: '',
              doctor: '',
              department: '',
              preferredDate: '',
              preferredTime: '',
              message: '',
            });
          }}
          className="mt-4 text-sm text-ink-400 hover:text-ink-600 transition-colors underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const inputClass =
    'w-full px-4 py-3 text-sm bg-white border rounded-xl transition-colors placeholder:text-ink-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20';
  const labelClass = 'block text-sm font-medium text-ink-700 mb-1.5';
  const errorBorder = 'border-red-300 focus:border-red-400';
  const normalBorder = 'border-ink-200 focus:border-brand-400';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {/* Honeypot field */}
      <input
        type="text"
        name="company"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="absolute -left-[9999px] opacity-0"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            value={formData.fullName}
            onChange={(e) => update('fullName', e.target.value)}
            className={`${inputClass} ${errors.fullName ? errorBorder : normalBorder}`}
            placeholder="Your full name"
            aria-invalid={!!errors.fullName}
          />
          {errors.fullName && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={`${inputClass} ${errors.phone ? errorBorder : normalBorder}`}
            placeholder="Your phone number"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-ink-400 font-normal">(optional)</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => update('email', e.target.value)}
            className={`${inputClass} ${errors.email ? errorBorder : normalBorder}`}
            placeholder="Your email address"
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="doctor" className={labelClass}>
            Preferred Doctor
          </label>
          <select
            id="doctor"
            value={formData.doctor}
            onChange={(e) => update('doctor', e.target.value)}
            className={`${inputClass} ${normalBorder} cursor-pointer`}
          >
            <option value="">No preference</option>
            {doctors.map((doc) => (
              <option key={doc.id} value={doc.slug}>
                {doc.name} — {doc.specialty}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <label htmlFor="department" className={labelClass}>
            Department / Specialty
          </label>
          <select
            id="department"
            value={formData.department}
            onChange={(e) => update('department', e.target.value)}
            className={`${inputClass} ${normalBorder} cursor-pointer`}
          >
            <option value="">Select department</option>
            {services.map((svc) => (
              <option key={svc.id} value={svc.title}>
                {svc.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="preferredDate" className={labelClass}>
            Preferred Date
          </label>
          <input
            id="preferredDate"
            type="date"
            value={formData.preferredDate}
            onChange={(e) => update('preferredDate', e.target.value)}
            className={`${inputClass} ${normalBorder}`}
          />
        </div>

        <div>
          <label htmlFor="preferredTime" className={labelClass}>
            Preferred Time
          </label>
          <select
            id="preferredTime"
            value={formData.preferredTime}
            onChange={(e) => update('preferredTime', e.target.value)}
            className={`${inputClass} ${normalBorder} cursor-pointer`}
          >
            <option value="">Select time</option>
            <option value="morning">Morning (8 AM – 2 PM)</option>
            <option value="evening">Evening (5 PM – 9 PM)</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-ink-400 font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => update('message', e.target.value)}
          className={`${inputClass} ${normalBorder} resize-none`}
          placeholder="Briefly describe your concern or any information you'd like us to know"
        />
      </div>

      {state === 'error' && (
        <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 px-4 py-3 rounded-xl">
          <AlertCircle className="w-4 h-4 shrink-0" />
          Something went wrong. Please try again or call us at {clinicConfig.phones[0]}.
        </div>
      )}

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="inline-flex items-center justify-center gap-2 bg-brand-600 text-white font-semibold px-7 py-3.5 rounded-xl text-base hover:bg-brand-700 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:pointer-events-none"
      >
        {state === 'submitting' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Request Appointment
          </>
        )}
      </button>

      <p className="text-xs text-ink-400 text-center">
        By submitting, you agree to be contacted by {clinicConfig.name} regarding your appointment.
      </p>
    </form>
  );
}
