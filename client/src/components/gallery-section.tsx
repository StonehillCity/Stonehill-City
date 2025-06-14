import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
}

export default function GallerySection() {
  const galleryImages: GalleryImage[] = [
    {
      id: "police",
      src: "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Police station scene",
      title: "محطة الشرطة",
      description: "نظام شرطة متطور"
    },
    {
      id: "cars",
      src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Luxury sports car on city street",
      title: "السيارات الفاخرة",
      description: "مجموعة ضخمة من السيارات"
    },
    {
      id: "hospital",
      src: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Modern hospital building",
      title: "المستشفى المركزي",
      description: "خدمات طبية شاملة"
    },
    {
      id: "city",
      src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Busy city intersection",
      title: "وسط المدينة",
      description: "حياة المدينة النابضة"
    },
    {
      id: "bank",
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Modern bank building",
      title: "البنك المركزي",
      description: "نظام مصرفي متطور"
    },
    {
      id: "garage",
      src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Motorcycle outside garage",
      title: "ورشة الإصلاح",
      description: "خدمات الصيانة والتطوير"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-orbitron font-bold text-gradient mb-4">معرض الصور</h2>
          <p className="text-lg text-gray-400">شاهد لقطات من داخل السيرفر واكتشف عالم Stonehill City</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-xl"
            >
              <Card className="border-0 overflow-hidden">
                <div className="relative">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-bold text-lg">{image.title}</h3>
                      <p className="text-sm text-gray-300">{image.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
