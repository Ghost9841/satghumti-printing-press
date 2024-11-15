import logo from "../assets/logo.png"
import digitalprinting from "./digitalprinting.png"
import digitalprinting1 from "./digital printing-1.png"
import largeprint from "./offset printing 2.jpg"

export const assets = {
    logo,
}


export const printing_data = [
{
    id:1,
    title: "Digital Printing",
    description: "High-quality digital printing services with quick turnaround times",
    image: digitalprinting1,
    completion: "2-3 days"
  },
  {
    id:2,
    title: "Offset Printing",
    description: "Professional offset printing for large volume requirements",
    image: digitalprinting,
    completion: "3-5 days"
  },
  {
    id:3,
    title: "Large Format",
    description: "Wide format printing for banners, posters and displays",
    image: largeprint,
    completion: "1-2 days"
  }
]