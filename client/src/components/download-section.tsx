import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Monitor, Smartphone } from "lucide-react";

export default function DownloadSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-orbitron font-bold text-gradient mb-4">تحميل MTA San Andreas</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            لتتمكن من اللعب في سيرفر Stonehill City، تحتاج لتحميل وتثبيت Multi Theft Auto (MTA) أولاً
          </p>
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
                <div className="text-6xl text-blue-400 mb-6 flex justify-center">
                  <Monitor />
                </div>
                <h3 className="text-2xl font-bold mb-4">MTA للكمبيوتر</h3>
                <p className="text-gray-400 mb-6">
                  النسخة الكاملة من Multi Theft Auto لأجهزة الكمبيوتر (Windows)
                  <br />
                  مجاني 100% وآمن تماماً
                </p>
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold transition-all duration-300 animate-glow"
                  size="lg"
                >
                  <a href="https://multitheftauto.com/" target="_blank" rel="noopener noreferrer">
                    <Download className="w-5 h-5 mr-3" />
                    تحميل MTA
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
          >
            <Card className="server-card rounded-2xl h-full">
              <CardContent className="p-8">
                <div className="text-blue-400 mb-6 flex justify-center">
                  <Smartphone className="text-6xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">تعليمات التثبيت</h3>
                <div className="space-y-4 text-right">
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold ml-3 mt-1 flex-shrink-0">1</span>
                    <p className="text-gray-300">قم بتحميل MTA من الموقع الرسمي</p>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold ml-3 mt-1 flex-shrink-0">2</span>
                    <p className="text-gray-300">تأكد من أن لديك لعبة GTA San Andreas مثبتة</p>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold ml-3 mt-1 flex-shrink-0">3</span>
                    <p className="text-gray-300">قم بتثبيت MTA واتبع التعليمات</p>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold ml-3 mt-1 flex-shrink-0">4</span>
                    <p className="text-gray-300">افتح MTA وأضف عنوان سيرفرنا للعب</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-green-400 mb-3">نصيحة مهمة</h3>
            <p className="text-gray-300 leading-relaxed">
              تأكد من تحميل MTA من الموقع الرسمي فقط لضمان الأمان والحصول على آخر التحديثات.
              بعد التثبيت، يمكنك الاتصال مباشرة بسيرفرنا باستخدام عنوان السيرفر أعلاه.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}