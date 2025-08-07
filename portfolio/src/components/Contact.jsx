import { useState, useCallback } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = useCallback(() => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  }, [formData]);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  }, [errors]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // In production, replace this with your actual form submission logic
      // For example: await submitForm(formData);
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success
      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you within 24 hours.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact me directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'nitjaitwar@gmail.com',
      link: 'mailto:nitjaitwar@gmail.com',
      description: 'Send me an email anytime',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 7440800704',
      link: 'tel:+917440800704',
      description: 'Call me for quick discussions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Indore, Madhya Pradesh',
      link: 'https://maps.google.com/?q=Indore,Madhya+Pradesh',
      description: 'Available for local opportunities',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'niteshjaitwar',
      link: 'https://linkedin.com/in/niteshjaitwar',
      description: 'Let\'s connect professionally',
      color: 'from-blue-600 to-blue-700'
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center py-16 lg:py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 lg:mb-8">
            Let's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Connect
            </span>
          </h2>
          <div className="w-16 lg:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 lg:mb-8 rounded-full"></div>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. 
            Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
          {/* Contact Information - Enhanced */}
          <div className="order-2 lg:order-1 space-y-8 lg:space-y-10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">Get In Touch</h3>
              <p className="text-base lg:text-lg text-gray-700 mb-8 lg:mb-10 leading-relaxed">
                Whether you're looking for a skilled Java developer for your team, have a project in mind, 
                or just want to connect with a fellow developer, I'd love to hear from you. Let's discuss 
                how we can work together to build something amazing.
              </p>
            </div>

            {/* Enhanced Contact Info Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.title !== 'Phone' ? '_blank' : undefined}
                  rel={info.title !== 'Phone' ? 'noopener noreferrer' : undefined}
                  className="group block"
                >
                  <div className="relative overflow-hidden bg-white p-6 lg:p-7 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-transparent">
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    <div className="relative flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center text-xl lg:text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <span className="filter drop-shadow-sm">{info.icon}</span>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="text-xs lg:text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">
                          {info.title}
                        </div>
                        <div className="text-base lg:text-lg text-gray-900 font-bold group-hover:text-gray-800 transition-colors duration-300 truncate mb-1">
                          {info.value}
                        </div>
                        <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                          {info.description}
                        </div>
                      </div>
                      
                      {/* Arrow icon */}
                      <div className="flex-shrink-0">
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Enhanced Quick Actions */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-gray-900">Quick Actions</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:nitjaitwar@gmail.com"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-base lg:text-lg transform hover:scale-105 hover:-translate-y-1"
                >
                  <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  Send Email
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                
                <a
                  href="https://linkedin.com/in/niteshjaitwar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 border-2 border-gray-300 rounded-2xl hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-base lg:text-lg transform hover:scale-105 hover:-translate-y-1"
                >
                  <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
                  </svg>
                  LinkedIn
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border-2 border-gray-100">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center lg:text-left">
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {submitStatus && (
                  <div className={`p-6 rounded-2xl border-2 ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 text-green-800 border-green-200' 
                      : 'bg-red-50 text-red-800 border-red-200'
                  }`}>
                    <div className="flex items-center">
                      <svg className={`w-6 h-6 mr-3 flex-shrink-0 ${
                        submitStatus.type === 'success' ? 'text-green-600' : 'text-red-600'
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        {submitStatus.type === 'success' ? (
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        ) : (
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        )}
                      </svg>
                      <span className="font-semibold">{submitStatus.message}</span>
                    </div>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-6 py-4 border-2 rounded-2xl transition-all duration-300 text-base bg-gray-50 focus:bg-white ${
                        errors.name 
                          ? 'border-red-300 focus:ring-4 focus:ring-red-100 focus:border-red-500' 
                          : 'border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500'
                      }`}
                      placeholder="John Doe"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-2 text-sm text-red-600 flex items-center">
                        <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.name}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-6 py-4 border-2 rounded-2xl transition-all duration-300 text-base bg-gray-50 focus:bg-white ${
                        errors.email 
                          ? 'border-red-300 focus:ring-4 focus:ring-red-100 focus:border-red-500' 
                          : 'border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500'
                      }`}
                      placeholder="john@example.com"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-2 text-sm text-red-600 flex items-center">
                        <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-6 py-4 border-2 rounded-2xl transition-all duration-300 text-base bg-gray-50 focus:bg-white ${
                      errors.subject 
                        ? 'border-red-300 focus:ring-4 focus:ring-red-100 focus:border-red-500' 
                        : 'border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500'
                    }`}
                    placeholder="Job Opportunity / Project Discussion"
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-2 text-sm text-red-600 flex items-center">
                      <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={`w-full px-6 py-4 border-2 rounded-2xl transition-all duration-300 resize-none text-base bg-gray-50 focus:bg-white ${
                      errors.message 
                        ? 'border-red-300 focus:ring-4 focus:ring-red-100 focus:border-red-500' 
                        : 'border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500'
                    }`}
                    placeholder="Tell me about your project or opportunity..."
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  ></textarea>
                  {errors.message && (
                    <p id="message-error" className="mt-2 text-sm text-red-600 flex items-center">
                      <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus:outline-none focus:ring-4 focus:ring-blue-200 text-lg"
                  aria-describedby="submit-status"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      <span>Sending Message...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <span>Send Message</span>
                      <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                  )}
                </button>

                <p id="submit-status" className="text-sm text-gray-500 text-center">
                  I'll respond within 24 hours! 🚀
                </p>
              </form>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-gray-900">Quick Actions</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:nitjaitwar@gmail.com"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-base lg:text-lg transform hover:scale-105 hover:-translate-y-1"
                >
                  <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  Send Email
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                
                <a
                  href="https://linkedin.com/in/niteshjaitwar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 border-2 border-gray-300 rounded-2xl hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-base lg:text-lg transform hover:scale-105 hover:-translate-y-1"
                >
                  <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
                  </svg>
                  LinkedIn
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border-2 border-gray-100">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {submitStatus && (
                <div className={`p-4 rounded-lg ${
                  submitStatus.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  <div className="flex items-center">
                    <svg className={`w-5 h-5 mr-2 ${submitStatus.type === 'success' ? 'text-green-600' : 'text-red-600'}`} fill="currentColor" viewBox="0 0 20 20">
                      {submitStatus.type === 'success' ? (
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      ) : (
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      )}
                    </svg>
                    {submitStatus.message}
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 lg:py-3.5 border rounded-lg transition-colors duration-200 text-sm lg:text-base ${
                      errors.name 
                        ? 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                        : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                    }`}
                    placeholder="John Doe"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 lg:mt-2 text-xs lg:text-sm text-red-600">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 lg:py-3.5 border rounded-lg transition-colors duration-200 text-sm lg:text-base ${
                      errors.email 
                        ? 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                        : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                    }`}
                    placeholder="john@example.com"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 lg:mt-2 text-xs lg:text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 lg:py-3.5 border rounded-lg transition-colors duration-200 text-sm lg:text-base ${
                    errors.subject 
                      ? 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                      : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                  placeholder="Job Opportunity / Project Discussion"
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1 lg:mt-2 text-xs lg:text-sm text-red-600">{errors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 lg:py-3.5 border rounded-lg transition-colors duration-200 resize-none text-sm lg:text-base ${
                    errors.message 
                      ? 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                      : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                  placeholder="Tell me about your project or opportunity..."
                  aria-describedby={errors.message ? 'message-error' : undefined}
                ></textarea>
                {errors.message && (
                  <p id="message-error" className="mt-1 lg:mt-2 text-xs lg:text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm lg:text-base"
                aria-describedby="submit-status"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 lg:h-5 lg:w-5 border-b-2 border-white mr-2"></div>
                    <span>Sending Message...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>

            <p id="submit-status" className="text-xs lg:text-sm text-gray-500 mt-4 lg:mt-6 text-center">
              I'll respond within 24 hours!
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
