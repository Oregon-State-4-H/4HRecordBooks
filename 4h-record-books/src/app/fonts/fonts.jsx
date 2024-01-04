import { Font } from "@react-pdf/renderer";
import localFont from "next/font/local"

// OSU Fonts
var Stratum2LightPath = "/fonts/Stratum2-Light.otf";
var Stratum2MediumPath = "/fonts/Stratum2-Medium.otf";
var Stratum2RegularPath = "/fonts/Stratum2-Regular.otf";

var KievitPath = "/fonts/KievitOffc.ttf";
var KievitBoldPath = "/fonts/KievitOffc-Bold.ttf";
var KievitBoldItalicPath = "/fonts/KievitOffc-BoldIta.ttf";
var KievitItalicPath = "/fonts/KievitOffc-Ita.ttf";
var KievitMediumPath = "/fonts/KievitOffc-Medi.ttf";
var KievitMediumItalicPath = "/fonts/KievitOffc-MediIta.ttf";


Font.register({ family: 'Stratum2', fonts: [
  { src: Stratum2LightPath, fontWeight: 'light' },
  { src: Stratum2MediumPath, fontWeight: 'medium' },
  { src: Stratum2RegularPath, fontWeight: 'normal' }
]});

Font.register({ family: 'Kievit', fonts: [
  { src: KievitPath, fontWeight: 'normal' },
  { src: KievitBoldPath, fontWeight: 'bold' },
  { src: KievitBoldItalicPath, fontWeight: 'bold', fontStyle: 'italic' },
  { src: KievitItalicPath, fontWeight: 'normal', fontStyle: 'italic' },
  { src: KievitMediumPath, fontWeight: 'medium' },
  { src: KievitMediumItalicPath, fontWeight: 'medium', fontStyle: 'italic' },
]});


export const Stratum2Light = localFont({ src: './Stratum2-Light.otf', family: 'Stratum2', weight: 'light', variable: '--Stratum2Light-font' })
export const Stratum2Medium = localFont({ src: './Stratum2-Medium.otf', family: 'Stratum2', weight: 'medium', variable: '--Stratum2Medium-font' })
export const Stratum2Regular = localFont({ src: './Stratum2-Regular.otf', family: 'Stratum2', weight: 'normal', variable: '--Stratum2Regular-font' })

export const Kievit = localFont({ src: './KievitOffc.ttf', family: 'Kievit', weight: 'normal', variable: '--Kievit-font' })
export const KievitBold = localFont({ src: './KievitOffc-Bold.ttf', family: 'Kievit', weight: 'bold', variable: '--KievitBold-font' })
export const KievitBoldItalic = localFont({ src: './KievitOffc-BoldIta.ttf', family: 'Kievit', weight: 'bold', style: 'italic', variable: '--KievitBoldItalic-font' })
export const KievitItalic = localFont({ src: './KievitOffc-Ita.ttf', family: 'Kievit', weight: 'normal', style: 'italic', variable: '--KievitItalic-font' })
export const KievitMedium = localFont({ src: './KievitOffc-Medi.ttf', family: 'Kievit', weight: 'medium', variable: '--KievitMedium-font' })
export const KievitMediumItalic = localFont({ src: './KievitOffc-MediIta.ttf', family: 'Kievit', weight: 'medium', style: 'italic', variable: '--KievitMediumItalic-font' })