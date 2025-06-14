import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Play, ChevronDown } from "lucide-react";
import { SiDiscord, SiYoutube } from "react-icons/si";
import Particles from "./particles";
import { useToast } from "@/hooks/use-toast";

export default function HeroSection() {
  const { toast } = useToast();
  const serverIP = "mtasa://5.252.103.60:22000";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(serverIP);
      toast({
        title: "تم نسخ عنوان السيرفر بنجاح!",
        description: "يمكنك الآن لصق العنوان في MTA",
      });
    } catch (err) {
      toast({
        title: "خطأ في النسخ",
        description: "حاول مرة أخرى",
        variant: "destructive",
      });
    }
  };

  const connectToServer = () => {
    window.location.href = serverIP;
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-custom overflow-hidden">
      <Particles />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="animate-fadeIn"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-orbitron font-black text-gradient mb-4">
              STONEHILL
            </h1>
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-blue-400">
              CITY
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            اكتشف عالم جديد من المغامرات في سيرفر MTA الأكثر إثارة
            <br />
            انضم إلى مجتمعنا واعيش تجربة لعب لا تُنسى
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mb-8"
          >
            <Card className="server-card rounded-2xl max-w-md mx-auto">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-blue-400">عنوان السيرفر</h3>
                <div className="flex items-center justify-between bg-gray-900 rounded-lg p-4">
                  <span className="font-mono text-sm md:text-base">{serverIP}</span>
                  <Button
                    onClick={copyToClipboard}
                    variant="secondary"
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    نسخ
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={connectToServer}
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 px-8 py-4 text-lg font-bold animate-glow transition-all duration-300"
              size="lg"
            >
              <Play className="w-5 h-5 mr-3" />
              العب الآن
            </Button>
            
            <div className="flex gap-4">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-gray-800 hover:bg-gray-700 border-gray-600 transition-all duration-300 hover:scale-105"
              >
                <a href="https://discord.gg/3SF5CQU6CX" target="_blank" rel="noopener noreferrer">
                  <SiDiscord className="w-6 h-6 text-indigo-400" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-gray-800 hover:bg-gray-700 border-gray-600 transition-all duration-300 hover:scale-105"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <SiYoutube className="w-6 h-6 text-red-500" />
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="scroll-indicator"
      >
        <ChevronDown className="w-8 h-8 text-blue-400" />
      </motion.div>
    </section>
  );
}
