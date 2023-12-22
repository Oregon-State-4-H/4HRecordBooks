import { Font } from "@react-pdf/renderer";
import localFont from '@next/font/local'

// OSU Fonts
var Stratum2LightPath = "./Stratum2-Light.otf";
var Stratum2MediumPath = "./Stratum2-Medium.otf";
var Stratum2RegularPath = "./Stratum2-Regular.otf";

var KievitPath = "./KievitOffc.ttf";
var KievitBoldPath = "./KievitOffc-Bold.ttf";
var KievitBoldItalicPath = "./KievitOffc-BoldIta.ttf";
var KievitItalicPath = "./KievitOffc-Ita.ttf";
var KievitMediumPath = "./KievitOffc-Medi.ttf";
var KievitMediumItalicPath = "./KievitOffc-MediIta.ttf";


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


export const Stratum2Light = localFont({ family: 'Stratum2', weight: 'light', variable: '--Stratum2Light-font' })
export const Stratum2Medium = localFont({ family: 'Stratum2', weight: 'medium', variable: '--Stratum2Medium-font' })
export const Stratum2Regular = localFont({ family: 'Stratum2', weight: 'normal', variable: '--Stratum2Regular-font' })

export const Kievit = localFont({ family: 'Kievit', weight: 'normal', variable: '--Kievit-font' })
export const KievitBold = localFont({ family: 'Kievit', weight: 'bold', variable: '--KievitBold-font' })
export const KievitBoldItalic = localFont({ family: 'Kievit', weight: 'bold', style: 'italic', variable: '--KievitBoldItalic-font' })
export const KievitItalic = localFont({ family: 'Kievit', weight: 'normal', style: 'italic', variable: '--KievitItalic-font' })
export const KievitMedium = localFont({ family: 'Kievit', weight: 'medium', variable: '--KievitMedium-font' })
export const KievitMediumItalic = localFont({ family: 'Kievit', weight: 'medium', style: 'italic', variable: '--KievitMediumItalic-font' })