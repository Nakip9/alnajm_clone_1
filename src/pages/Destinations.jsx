import { motion } from 'framer-motion';
import { allDestinations } from '../data';
import LazyImage from '../components/common/LazyImage';
import './Destinations.css';

const Destinations = () => {
    return (
        <div className="destinations-page">
            <div className="services-hero">
                <div className="services-hero-overlay"></div>
                <div className="container services-hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="services-title"
                    >
                        وجهاتنا السياحية
                    </motion.h1>
                    <p className="services-subtitle">
                        اختر وجهتك القادمة من بين أجمل مدن العالم
                    </p>
                </div>
            </div>

            <div className="container section">
                <div className="destinations-grid-layout">
                    {allDestinations.map((dest, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="destination-card-full"
                        >
                            <div className="dest-img-wrapper">
                                <LazyImage src={dest.image} alt={dest.name} className="dest-full-img" />
                                <div className="dest-price-badge">{dest.startingPrice || dest.price}</div>
                            </div>

                            <div className="dest-content">
                                <div className="dest-header">
                                    <h3 className="dest-title">{dest.name}</h3>
                                    <span className="dest-country">{dest.country}</span>
                                </div>

                                <p className="dest-desc">{dest.description}</p>

                                <div className="dest-features">
                                    {dest.features.map((feature, i) => (
                                        <span key={i} className="dest-feature-tag">{feature}</span>
                                    ))}
                                </div>

                                <button className="btn btn-outline w-full mt-md">عرض التفاصيل</button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Destinations;
