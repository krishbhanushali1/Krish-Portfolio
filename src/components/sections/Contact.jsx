import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLoader } from 'react-icons/fi';
import { personalData } from '../../data/personalData';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { sendEmail } from '../../utils/emailService';
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from '../../animations/variants';

/**
 * Premium Contact Form and details.
 * Integrated with EmailJS using sendEmail helper, featuring visual alert popups.
 */
export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'All fields are required.' });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await sendEmail(formData);
      setStatus({ type: 'success', message: 'Your message has been sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again or email directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden section-alt">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading title="Get In Touch" subtitle="Contact Me" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info Details */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={slideInLeft}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-2xl font-bold font-heading text-dark-900 dark:text-white mb-4">
              Let's build something great together.
            </h3>
            <p className="text-dark-600 dark:text-dark-400 leading-relaxed mb-8">
              Feel free to reach out for software development opportunities, internship positions,
              collaborations, or simply to say hello!
            </p>

            <div className="space-y-4">
              {/* Mail Detail */}
              <GlassCard hover={false} className="p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-500">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-dark-400 block font-semibold uppercase">Email</span>
                  <a
                    href={`mailto:${personalData.email}`}
                    className="text-sm md:text-base font-semibold text-dark-800 dark:text-white hover:text-primary-500 transition-colors"
                  >
                    {personalData.email}
                  </a>
                </div>
              </GlassCard>

              {/* Phone Detail */}
              <GlassCard hover={false} className="p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-dark-400 block font-semibold uppercase">Phone</span>
                  <a
                    href={`tel:${personalData.phone}`}
                    className="text-sm md:text-base font-semibold text-dark-800 dark:text-white hover:text-blue-500 transition-colors"
                  >
                    {personalData.phone}
                  </a>
                </div>
              </GlassCard>

              {/* Location Detail */}
              <GlassCard hover={false} className="p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-dark-400 block font-semibold uppercase">Location</span>
                  <span className="text-sm md:text-base font-semibold text-dark-800 dark:text-white">
                    {personalData.location}
                  </span>
                </div>
              </GlassCard>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={slideInRight}
            className="lg:col-span-7"
          >
            <GlassCard hover={false} className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-wider text-dark-600 dark:text-dark-400 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-dark-200 dark:border-white/10 bg-transparent text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-dark-600 dark:text-dark-400 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-dark-200 dark:border-white/10 bg-transparent text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-transparent transition-all duration-300"
                    placeholder="johndoe@example.com"
                    required
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-dark-600 dark:text-dark-400 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-dark-200 dark:border-white/10 bg-transparent text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                {/* Success/Error Alerts */}
                {status.message && (
                  <div
                    className={`p-4 rounded-xl text-sm font-semibold border ${
                      status.type === 'success'
                        ? 'bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400'
                        : 'bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                {/* Submit Action */}
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full py-4 gap-2 flex items-center justify-center"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <FiLoader className="animate-spin w-4 h-4" /> Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
