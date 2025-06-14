import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiDiscord, SiYoutube } from "react-icons/si";

export default function CommunitySection() {
  return (
    <section id="community" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-orbitron font-bold text-gradient mb-4">انضم إلى المجتمع</h2>
          <p className="text-lg text-gray-400">تواصل معنا عبر منصاتنا الاجتماعية وكن جزءاً من عائلة Stonehill City</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="server-card rounded-2xl h-full">
              <CardContent className="p-8 text-center">
                <div className="text-6xl text-indigo-400 mb-6 flex justify-center">
                  <SiDiscord />
                </div>
                <h3 className="text-2xl font-bold mb-4">Discord</h3>
                <p className="text-gray-400 mb-6">انضم إلى سيرفر الديسكورد للدردشة مع اللاعبين والحصول على آخر الأخبار</p>
                <Button
                  asChild
                  className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 font-semibold transition-all duration-300"
                  size="lg"
                >
                  <a href="https://discord.gg/3SF5CQU6CX" target="_blank" rel="noopener noreferrer">
                    انضم الآن
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="server-card rounded-2xl h-full">
              <CardContent className="p-8 text-center">
                <div className="text-6xl text-red-500 mb-6 flex justify-center">
                  <SiYoutube />
                </div>
                <h3 className="text-2xl font-bold mb-4">YouTube</h3>
                <p className="text-gray-400 mb-6">شاهد أحدث الفيديوهات والأحداث من داخل السيرفر</p>
                <Button
                  asChild
                  className="bg-red-600 hover:bg-red-700 px-6 py-3 font-semibold transition-all duration-300"
                  size="lg"
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    شاهد الآن
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
