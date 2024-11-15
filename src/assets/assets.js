import logo from "../assets/logo.png";
import digitalprinting from "./digitalprinting.png";
import digitalprinting1 from "./digital printing-1.png";
import largeprint from "./offset printing 2.jpg";
import graphicdesign from "./printing and binding.png";
import finishingbinding from "./printing-press-3391580_1280.jpg";

export const assets = {
  logo,
};

export const printing_data = [
  {
    id: 1,
    title: "Digital Printing",
    description:
      "High-quality digital printing services with quick turnaround times. Perfect for small to medium runs of brochures, flyers, and business cards.",
    image: digitalprinting1,
    completion: "2-3 days",
    learnMore: "Learn More",
  },
  {
    id: 2,
    title: "Offset Printing",
    description:
      "Traditional offset printing for large volume jobs with consistent, high-quality results. Ideal for magazines, books, and high-volume marketing materials.",
    image: digitalprinting,
    completion: "3-5 days",
    learnMore: "Learn More",
  },
  {
    id: 3,
    title: "Large Format Printing",
    description:
      "Eye-catching large format prints for banners, posters, and signage. Make a big impact with our high-resolution wide format printing services.",
    image: largeprint,
    completion: "1-2 days",
    learnMore: "Learn More",
  },
  {
    id: 4,
    title: "Graphic Design",
    description:
      "Professional graphic design services to bring your ideas to life. Our team of experienced designers can help create stunning visuals for your print projects.",
    image: graphicdesign,
    completion: "Varies by project",
    learnMore: "Learn More",
  },
  {
    id: 5,
    title: "Finishing & Binding",
    description:
      "Complete your print projects with our range of finishing and binding services, including lamination, embossing, die-cutting, and various binding options.",
    image: finishingbinding,
    completion: "2-4 days",
    learnMore: "Learn More",
  },
];
