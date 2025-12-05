import { Link } from 'react-router-dom';
import './Footer.css';
import LazyImage from '../../common/LazyImage';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Company Info */}
                    <div className="footer-col">
                        <Link to="/" className="footer-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <LazyImage src="/logo.png" alt="النجم الأزرق للسياحة والسفر" className="footer-logo-img" />
                        </Link>
                        <p className="footer-desc">
                            شريكك الموثوق في عالم السفر والسياحة. نقدم لك تجارب سفر استثنائية وخدمات راقية تليق بك.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link">𝕏</a>
                            <a href="#" className="social-link">📸</a>
                            <a href="#" className="social-link">📘</a>
                            <a href="#" className="social-link">👻</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h3 className="footer-title">روابط سريعة</h3>
                        <ul className="footer-links">
                            <li><Link to="/">الرئيسية</Link></li>
                            <li><Link to="/about">من نحن</Link></li>
                            <li><Link to="/destinations">الوجهات</Link></li>
                            <li><Link to="/contact">اتصل بنا</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-col">
                        <h3 className="footer-title">خدماتنا</h3>
                        <ul className="footer-links">
                            <li><Link to="/services">حجوزات الطيران</Link></li>
                            <li><Link to="/services">حجوزات الفنادق</Link></li>
                            <li><Link to="/services">البرامج السياحية</Link></li>
                            <li><Link to="/services">التأشيرات</Link></li>
                            <li><Link to="/services">السياحة العلاجية</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-col">
                        <h3 className="footer-title">تواصل معنا</h3>
                        <ul className="footer-contact">
                            <li>
                                <span className="icon">📞</span>
                                <span>+966 50 000 0000</span>
                            </li>
                            <li>
                                <span className="icon">✉️</span>
                                <span>info@alnajm-travel.com</span>
                            </li>
                            <li>
                                <span className="icon">📍</span>
                                <span>الرياض، المملكة العربية السعودية</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} النجم الأزرق للسفريات والسياحة. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
