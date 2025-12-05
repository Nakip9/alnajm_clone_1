import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../components/common';
import { allServices, testimonials } from '../data';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiAward, FiUsers, FiClock, FiPlus, FiMinus, FiStar } from 'react-icons/fi';
import LazyImage from '../components/common/LazyImage';
import './Services.css';

const Services = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const filters = [
        { id: 'all', label: 'الكل' },
        { id: 'flights', label: 'طيران' },
        { id: 'hotels', label: 'فنادق' },
        { id: 'tours', label: 'برامج سياحية' },
        { id: 'visa', label: 'تأشيرات' },
        { id: 'transport', label: 'مواصلات' }
    ];

    const filteredServices = activeFilter === 'all'
        ? allServices
        : allServices.filter(service => service.category === activeFilter || service.category === 'other');

    const faqs = [
        {
            question: "كيف يمكنني حجز رحلة؟",
            answer: "يمكنك الحجز بسهولة عن طريق التواصل معنا عبر الواتساب أو الهاتف، أو زيارة مكتبنا. سيقوم فريقنا بترتيب كافة التفاصيل لك."
        },
        {
            question: "هل تقدمون خدمات التأشيرات؟",
            answer: "نعم، نقدم خدمات استخراج التأشيرات لمعظم الدول السياحية مع متابعة دقيقة للطلب لضمان أعلى نسب قبول."
        },
        {
            question: "هل يمكنني تعديل الحجز؟",
            answer: "نعم، نوفر خيارات مرنة لتعديل الحجوزات حسب سياسة شركة الطيران أو الفندق. فريقنا سيساعدك في إجراء التعديلات بأقل التكاليف الممكنة."
        },
        {
            question: "هل لديكم عروض خاصة للمجموعات؟",
            answer: "بالتأكيد! نقدم خصومات وعروض خاصة للمجموعات والعائلات والشركات."
        }
    ];

    const features = [
        {
            icon: <FiAward />,
            title: "خبرة واسعة",
            desc: "أكثر من 15 عاماً في مجال السياحة"
        },
        {
            icon: <FiUsers />,
            title: "فريق متخصص",
            desc: "مستشارون سياحيون لخدمتك"
        },
        {
            icon: <FiClock />,
            title: "دعم متواصل",
            desc: "خدمة عملاء على مدار الساعة"
        },
        {
            icon: <FiCheckCircle />,
            title: "أفضل الأسعار",
            desc: "ضمان أفضل قيمة مقابل المال"
        }
    ];

    return (
        <div className="services-page">
            {/* Premium Hero Section */}
            <div className="services-hero-premium">
                <div className="services-hero-overlay"></div>
                <div className="container services-hero-content">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="hero-badge glass"
                    >
                        خدماتنا المتميزة
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="services-title-premium"
                    >
                        نصنع لك ذكريات <span className="text-gradient">لا تُنسى</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="services-subtitle-premium"
                    >
                        نقدم لك باقة متكاملة من الخدمات السياحية الراقية، مصممة خصيصاً لتلبية تطلعاتك وتجاوز توقعاتك
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-lg"
                    >
                        <Link to="/contact" className="btn btn-primary btn-lg">
                            ابدأ رحلتك الآن
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Features Strip */}
            <div className="features-strip glass">
                <div className="container">
                    <div className="features-strip-grid">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="strip-feature"
                            >
                                <div className="feature-icon-box">{feature.icon}</div>
                                <div>
                                    <h4>{feature.title}</h4>
                                    <p>{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Services Grid with Filter */}
            <div className="container section services-section-premium">
                <div className="section-header text-center">
                    <h2 className="section-title">باقاتنا وخدماتنا</h2>
                    <p className="section-subtitle">اختر ما يناسبك من خدماتنا المتنوعة</p>
                </div>

                {/* Filter Bar */}
                <div className="services-filter-bar">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter.id)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                <motion.div layout className="services-grid-premium">
                    <AnimatePresence mode="popLayout">
                        {filteredServices.map((service, index) => (
                            <Card
                                key={service.title} // Use title as key for animation stability
                                {...service}
                                delay={index * 0.05}
                                link="/contact"
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Testimonials Section */}
            <section className="section testimonials-section-alt bg-secondary">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">آراء عملائنا</h2>
                        <p className="section-subtitle">نفخر بثقة عملائنا ونسعد بخدمتهم</p>
                    </div>
                    <div className="testimonials-grid-alt">
                        {testimonials.slice(0, 3).map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="testimonial-card-alt"
                            >
                                <div className="testimonial-rating">
                                    {[...Array(5)].map((_, i) => (
                                        <FiStar key={i} className={i < Math.floor(testimonial.rating) ? "star-filled" : "star-empty"} />
                                    ))}
                                </div>
                                <p className="testimonial-text">"{testimonial.text}"</p>
                                <div className="testimonial-author">
                                    <h4>{testimonial.name}</h4>
                                    <span>{testimonial.location}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section faq-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">الأسئلة الشائعة</h2>
                        <p className="section-subtitle">إجابات على استفساراتكم المتكررة</p>
                    </div>
                    <div className="faq-grid">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`faq-item ${openFaqIndex === index ? 'open' : ''}`}
                                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                            >
                                <div className="faq-question">
                                    <h3>{faq.question}</h3>
                                    <span className="faq-icon">
                                        {openFaqIndex === index ? <FiMinus /> : <FiPlus />}
                                    </span>
                                </div>
                                <AnimatePresence>
                                    {openFaqIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="faq-answer"
                                        >
                                            <p>{faq.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Package CTA */}
            <section className="section custom-package-section">
                <div className="container">
                    <div className="custom-package-box glass">
                        <div className="custom-package-content">
                            <h2>لم تجد ما تبحث عنه؟</h2>
                            <p>دعنا نصمم لك رحلة أحلامك! تواصل معنا وسيقوم خبراؤنا بترتيب كل التفاصيل حسب رغبتك.</p>
                            <div className="cta-buttons">
                                <Link to="/contact" className="btn btn-primary btn-lg">
                                    صمم رحلتك الخاصة
                                </Link>
                                <Link to="/destinations" className="btn btn-outline btn-lg">
                                    تصفح الوجهات
                                </Link>
                            </div>
                        </div>
                        <div className="custom-package-image">
                            <LazyImage src="/hero-bg.png" alt="Custom Travel" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
