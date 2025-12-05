import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="hero-overlay"></div>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="about-hero-content"
                    >
                        <h1>من نحن</h1>
                        <p>رحلة من التميز والإبداع في عالم السفر والسياحة</p>
                    </motion.div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="about-content">
                        <motion.div
                            className="about-text"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2>النجم الأزرق للسفريات والسياحة</h2>
                            <p>
                                مع أكثر من 15 عاماً من الخبرة والتميز في مجال السفر والسياحة،
                                أصبحت النجم الأزرق الخيار الأول للآلاف من العملاء الذين يبحثون
                                عن تجربة سفر استثنائية.
                            </p>
                            <p>
                                نفخر بتقديم خدمات متكاملة تشمل حجوزات الطيران والفنادق، برامج
                                الحج والعمرة، خدمات التأشيرات، تأجير السيارات، والترجمة
                                المعتمدة، وأكثر من ذلك بكثير.
                            </p>
                        </motion.div>

                        <motion.div
                            className="about-vision"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="vision-card">
                                <h3>🎯 رؤيتنا</h3>
                                <p>
                                    أن نكون الوكالة الرائدة في المنطقة في تقديم خدمات السفر
                                    والسياحة المتميزة
                                </p>
                            </div>
                            <div className="vision-card">
                                <h3>💫 رسالتنا</h3>
                                <p>
                                    توفير تجارب سفر استثنائية لعملائنا من خلال خدمات عالية الجودة
                                    وأسعار تنافسية
                                </p>
                            </div>
                            <div className="vision-card">
                                <h3>⭐ قيمنا</h3>
                                <p>الاحترافية، الأمانة، الجودة، رضا العملاء</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
