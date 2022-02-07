import { HiShare, HiTemplate } from "react-icons/hi";
import { IoColorPaletteSharp, IoText } from "react-icons/io5";
import { MdPhotoCamera } from "react-icons/md";
import { FaSmile } from "react-icons/fa";

export const NavData = [
  {
    index: 0,
    label: "Templates",
    icon: <HiTemplate />,
  },
  {
    index: 1,
    label: "Background",
    icon: <IoColorPaletteSharp />,
  },
  {
    index: 2,
    label: "Text",
    icon: <IoText />,
  },
  {
    index: 3,
    label: "Media",
    icon: <MdPhotoCamera />,
  },
  {
    index: 4,
    label: "Objects",
    icon: <FaSmile />,
  },
  {
    index: 5,
    label: "Sharing",
    icon: <HiShare />,
  },
];
