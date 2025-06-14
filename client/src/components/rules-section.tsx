import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, MessageCircle, Car, Building, UserCheck } from "lucide-react";

export default function RulesSection() {
  const ruleCategories = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "القوانين العامة",
      rules: [
        "احترام جميع اللاعبين والإدارة",
        "منع السب والشتم والألفاظ النابية",
        "عدم استخدام أي برامج خارجية أو هاكات",
        "التحدث باللغة العربية في الشات العام"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "قوانين الرول بلاي",
      rules: [
        "البقاء في الشخصية (IC) في جميع الأوقات",
        "منع الـ Metagaming والـ Powergaming",
        "احترام الموت الشخصي (Death RP)",
        "عدم كسر الواقعية في اللعب"
      ]
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "قوانين الشات",
      rules: [
        "استخدام /ooc للأمور خارج الشخصية فقط",
        "منع الإعلانات والسبام",
        "عدم طلب المال أو الأشياء من اللاعبين",
        "احترام خصوصية اللاعبين الآخرين"
      ]
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "قوانين القيادة",
      rules: [
        "احترام إشارات المرور والقوانين",
        "عدم القيادة بطريقة غير واقعية",
        "التوقف عند طلب الشرطة",
        "عدم استخدام السيارات كسلاح"
      ]
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "قوانين الوظائف",
      rules: [
        "التزام دور الوظيفة والمسؤوليات",
        "عدم سوء استخدام صلاحيات الوظيفة",
        "التعاون مع الفرق الأخرى",
        "الحضور والانتظام في العمل"
      ]
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "قوانين الإدارة",
      rules: [
        "طاعة أوامر الإدارة في جميع الأوقات",
        "عدم الجدال مع الإدارة في اللعبة",
        "الإبلاغ عن المخالفات عبر القنوات الرسمية",
        "احترام قرارات الإدارة النهائية"
      ]
    }
  ];

  return (
    <section id="rules" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-orbitron font-bold text-gradient mb-4">قوانين الرول بلاي</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            لضمان تجربة لعب ممتعة وعادلة للجميع، يجب على كل لاعب اتباع هذه القوانين في سيرفر Stonehill City MTA Roleplay
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ruleCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="server-card rounded-xl h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-blue-400 ml-3">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gradient">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.rules.map((rule, ruleIndex) => (
                      <motion.li
                        key={ruleIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.1) + (ruleIndex * 0.05), duration: 0.4 }}
                        className="text-gray-300 text-sm leading-relaxed flex items-start"
                      >
                        <span className="text-blue-400 ml-2 mt-1">•</span>
                        {rule}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-red-400 mb-3">تحذير مهم</h3>
            <p className="text-gray-300 leading-relaxed">
              مخالفة هذه القوانين قد تؤدي إلى عقوبات تشمل التحذير، الطرد المؤقت، أو الحظر الدائم من السيرفر.
              نحن نهدف لخلق بيئة لعب ممتعة ومناسبة للجميع.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}