import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Clock, Map, Trophy } from "lucide-react";
import { useEffect, useState } from "react";

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
  id: string;
}

export default function ServerStats() {
  const [playersOnline, setPlayersOnline] = useState(150);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlayersOnline(Math.floor(Math.random() * 50) + 120);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const stats: Stat[] = [
    {
      icon: <Users className="w-8 h-8" />,
      value: `${playersOnline}+`,
      label: "لاعب متصل",
      id: "players"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: "99.9%",
      label: "وقت التشغيل",
      id: "uptime"
    },
    {
      icon: <Map className="w-8 h-8" />,
      value: "25+",
      label: "خريطة مخصصة",
      id: "maps"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      value: "50+",
      label: "حدث شهرياً",
      id: "events"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="server-card rounded-xl h-full">
                <CardContent className="p-6 text-center">
                  <div className="text-blue-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
