import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Copy } from "lucide-react";
import { SiDiscord, SiYoutube } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
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

  return (
    <footer className="bg-gray-900 py-12 border-t border-blue-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-3xl font-orbitron font-bold text-gradient mb-4">STONEHILL CITY</div>
          <p className="text-gray-400 mb-6">أفضل تجربة MTA Roleplay في المنطقة</p>
          
          <Card className="server-card rounded-lg max-w-md mx-auto mb-6">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm">{serverIP}</span>
                <Button
                  onClick={copyToClipboard}
                  variant="secondary"
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 px-3 py-1 text-sm transition-all duration-300 hover:scale-105"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center space-x-6 rtl:space-x-reverse mb-6">
            <a 
              href="https://discord.gg/3SF5CQU6CX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <SiDiscord className="text-2xl" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors"
            >
              <SiYoutube className="text-2xl" />
            </a>
          </div>
          
          <p className="text-gray-500 text-sm">
            جميع الحقوق محفوظة © 2024 Stonehill City MTA Server
          </p>
        </div>
      </div>
    </footer>
  );
}
