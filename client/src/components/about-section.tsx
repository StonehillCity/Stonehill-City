import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import stonehillLogo from "@assets/imagاتe_1749867145719.png";

export default function AboutSection() {
  const features = [
    "نظام وظائف متنوع ومتطور",
    "أحداث وفعاليات يومية",
    "إدارة محترفة ومتفهمة",
    "مجتمع نشط وودود"
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.img
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            src={stonehillLogo}
            alt="Stonehill City Logo"
            className="mx-auto w-80 h-80 object-contain filter drop-shadow-2xl"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-orbitron font-bold text-gradient mb-6">حول Stonehill City</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              سيرفر Stonehill City هو واحد من أفضل سيرفرات MTA Roleplay في المنطقة. نقدم تجربة لعب واقعية ومثيرة مع نظام اقتصادي متطور وأحداث يومية مشوقة.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex items-center"
                >
                  <CheckCircle className="w-5 h-5 text-blue-400 ml-3 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.img
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Night cityscape with illuminated buildings"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
