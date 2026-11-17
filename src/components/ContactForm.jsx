import { Mail, Send, User, MessageSquareText } from 'lucide-react';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) nextErrors.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Please provide a valid email.';
    if (!formData.subject.trim()) nextErrors.subject = 'Please add a subject.';
    if (!formData.message.trim()) nextErrors.message = 'Please enter your message.';

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        setSubmissionStatus('Demo mode: EmailJS is not configured yet. Add your keys in .env.local to enable real sending.');
        setIsSubmitting(false);
        return;
      }

      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }, publicKey);

      setSubmissionStatus('Message sent successfully!');
      setFormData(initialState);
    } catch (error) {
      setSubmissionStatus('Something went wrong while sending the email. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-soft backdrop-blur-sm">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">Full Name</label>
          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/40 px-3 py-2.5">
            <User size={16} className="text-slate-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
              placeholder="Your full name"
            />
          </div>
          {errors.name && <p className="mt-2 text-xs text-red-400">{errors.name}</p>}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">Email Address</label>
          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/40 px-3 py-2.5">
            <Mail size={16} className="text-slate-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
              placeholder="your@email.com"
            />
          </div>
          {errors.email && <p className="mt-2 text-xs text-red-400">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-200">Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-3 py-2.5 text-sm text-slate-100 outline-none placeholder:text-slate-500"
          placeholder="Project inquiry or collaboration"
        />
        {errors.subject && <p className="mt-2 text-xs text-red-400">{errors.subject}</p>}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-200">Message</label>
        <div className="flex items-start gap-2 rounded-2xl border border-white/10 bg-slate-950/40 px-3 py-2.5">
          <MessageSquareText size={16} className="mt-1 text-slate-400" />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full resize-none bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
            placeholder="Tell me about your project, idea, or opportunity..."
          />
        </div>
        {errors.message && <p className="mt-2 text-xs text-red-400">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
        <Send size={16} />
      </button>

      {submissionStatus && <p className="text-sm text-cyan-300">{submissionStatus}</p>}
    </form>
  );
}
