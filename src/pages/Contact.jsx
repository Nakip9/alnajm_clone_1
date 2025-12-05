import { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        }, 2000);
    };

    return (
        <div className="contact-page">
            <div className="services-hero">
                <div className="services-hero-overlay"></div>
                <div className="container services-hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="services-title"
                    >
                        تواصل معنا
                    </motion.h1>
                    <p className="services-subtitle">
                        نحن هنا للإجابة على استفساراتك ومساعدتك في تخطيط رحلتك القادمة
                    </p>
                </div>
            </div>

            <div className="container section">
                <div className="contact-grid">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="contact-info-wrapper"
                    >
                        <h2 className="contact-title">معلومات الاتصال</h2>
                        <p className="contact-desc">يمكنك التواصل معنا عبر القنوات التالية أو زيارة مقرنا الرئيسي.</p>

                        <div className="contact-items">
                            <div className="contact-item">
                                <div className="icon-box">📞</div>
                                <div>
                                    <h4>الهاتف</h4>
                                    <p>+966 50 000 0000</p>
                                    <p>+966 11 000 0000</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="icon-box">✉️</div>
                                <div>
                                    <h4>البريد الإلكتروني</h4>
                                    <p>info@alnajm-travel.com</p>
                                    <p>support@alnajm-travel.com</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="icon-box">📍</div>
                                <div>
                                    <h4>العنوان</h4>
                                    <p>شارع الملك فهد، الرياض</p>
                                    <p>المملكة العربية السعودية</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="icon-box">⏰</div>
                                <div>
                                    <h4>ساعات العمل</h4>
                                    <p>السبت - الخميس: 9:00 ص - 10:00 م</p>
                                    <p>الجمعة: 4:00 م - 10:00 م</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="contact-form-wrapper"
                    >
                        <h2 className="contact-title">أرسل لنا رسالة</h2>

                        {status === 'success' ? (
                            <div className="success-message-box">
                                <div className="success-icon-lg">✓</div>
                                <h3>تم إرسال رسالتك بنجاح!</h3>
                                <p>سيقوم فريقنا بالتواصل معك في أقرب وقت ممكن.</p>
                                <button
                                    className="btn btn-outline mt-md"
                                    onClick={() => setStatus('idle')}
                                >
                                    إرسال رسالة أخرى
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label>الاسم الكامل</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                        placeholder="أدخل اسمك الكامل"
                                    />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>البريد الإلكتروني</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                            placeholder="example@email.com"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>رقم الهاتف</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                            placeholder="05xxxxxxxx"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>الموضوع</label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="form-input"
                                    >
                                        <option value="">اختر الموضوع</option>
                                        <option value="booking">حجز جديد</option>
                                        <option value="inquiry">استفسار عام</option>
                                        <option value="complaint">شكوى أو اقتراح</option>
                                        <option value="other">أخرى</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>الرسالة</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="form-textarea"
                                        rows="5"
                                        placeholder="اكتب رسالتك هنا..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className={`btn btn-primary w-full ${status === 'loading' ? 'loading' : ''}`}
                                    disabled={status === 'loading'}
                                >
                                    {status === 'loading' ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
