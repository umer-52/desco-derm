export interface Efficacy {
  bactericidal: boolean;
  fungicidal: boolean;
  virucidal: boolean;
  tuberculocidal: boolean;
  sporicidal?: boolean;
}

export interface MicrobiologicalActivity {
  activity: string;
  organisms?: string;
  testMethod?: string;
  concentration?: string;
  applicationDose?: string;
  applicationRange?: string;
  effectTime?: string;
}

export interface PackagingUnit {
  unit: string;
  piecesInBox: number;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  categoryColor: string;
  description: string;
  shortDescription: string;
  keyFeatures: string[];
  composition: string;
  efficacy: Efficacy;
  enStandards: string[];
  contactTime: string;
  materialCompatibility: string;
  pathogens?: string[];
  microbiologicalActivity: MicrobiologicalActivity[];
  packaging: PackagingUnit[];
  image: string;
}

export interface Collection {
  slug: string;
  name: string;
  description: string;
  categories: string[];
  color: string;
  image: string;
}

export const collections: Collection[] = [
  {
    slug: "hand-skin",
    name: "Hand & Skin",
    description: "Highly effective, skin-friendly solutions for professional hand hygiene and antisepsis.",
    categories: ["Hand and Skin Care", "First Aid Antiseptic"],
    color: "#D81B60",
    image: "/collections/hand-skin.png",
  },
  {
    slug: "surface-floor",
    name: "Surface & Floor",
    description: "Powerful cleaning and disinfection solutions for all hospital surfaces and floors.",
    categories: ["Floor and Surface Disinfection", "Alcohol Based Rapid Surface Disinfectants"],
    color: "#E6A817",
    image: "/collections/surface-floor.png",
  },
  {
    slug: "instruments-endoscopes",
    name: "Instruments & Endoscopes",
    description: "High-level disinfection and sterilization for surgical instruments and endoscopic equipment.",
    categories: ["Instruments and Endoscopes"],
    color: "#6A1B9A",
    image: "/collections/instruments-endoscopes.png",
  },
  {
    slug: "specialty",
    name: "Specialty",
    description: "Specialized disinfection solutions for hemodialysis devices and unique clinical applications.",
    categories: ["Hemodialysis Device Disinfection"],
    color: "#00796B",
    image: "/collections/specialty.png",
  },
];

export const products: Product[] = [
  // ─────────────────────────────────────────
  // A. HAND AND SKIN ANTISEPTICS
  // ─────────────────────────────────────────
  {
    id: "desco-derm",
    name: "DESCO® DERM",
    subtitle: "Hand and Skin Antiseptic with 2-Propanol 70% (V/V)",
    category: "Hand and Skin Care",
    categoryColor: "#D81B60",
    shortDescription: "Isopropanol-based (70% v/v) hygienic and surgical hand antisepsis.",
    description: "DESCO® DERM is an alcohol-based hand and skin antiseptic. Used for hygienic and surgical hand disinfection. Does not cause any allergic reaction. Dermatologically tested. Does not contain aldehyde, phenol, hydrogen peroxide, chlorhexidine and the like.",
    keyFeatures: [
      "Contains isopropyl alcohol",
      "Suitable for frequent usage",
      "Tested according to EN 1500 and EN 12791 standards",
      "30 seconds for hygienic hand antisepsis",
      "3 minutes for surgical hand antisepsis",
    ],
    composition: "Isopropanol (%70 v/v), glycerin, auxiliary substances.",
    efficacy: {
      bactericidal: true,
      fungicidal: true,
      virucidal: true,
      tuberculocidal: true,
    },
    enStandards: ["EN 1500", "EN 12791", "EN 13727", "EN 13624", "EN 14348", "EN 14476"],
    contactTime: "30 sec",
    materialCompatibility: "Safe for repeated skin use; contains emollients to prevent drying.",
    pathogens: ["E. coli", "S. aureus", "MRSA", "VRE", "A. baumannii", "C. albicans", "A. niger", "Corona", "Rota", "Vaccinia"],
    microbiologicalActivity: [
      { activity: "Bactericidal", organisms: "Inc. MRSA, VRE, A. baumannii", testMethod: "EN 13727", applicationDose: "3-5 ml", applicationRange: "As frequent as desired" },
      { activity: "Fungicidal", organisms: "C. albicans, A. niger", testMethod: "EN 13624", applicationDose: "3-5 ml", applicationRange: "As frequent as desired" },
      { activity: "Tuberculocidal / Mycobactericidal", testMethod: "EN 14348", applicationDose: "3-5 ml", applicationRange: "As frequent as desired" },
      { activity: "Virucidal", organisms: "Corona, Rota, Vaccinia", testMethod: "EN 14476", applicationDose: "3-5 ml", applicationRange: "As frequent as desired" },
    ],
    packaging: [
      { unit: "500 ml", piecesInBox: 20 },
      { unit: "1 L", piecesInBox: 12 },
      { unit: "5 L", piecesInBox: 4 },
      { unit: "Pouch 1L", piecesInBox: 10 },
    ],
    image: "/products/desco-derm.jpeg",
  },
  {
    id: "desco-hex",
    name: "DESCO® HEX",
    subtitle: "Liquid Soap for Hand and Skin Antisepsis",
    category: "Hand and Skin Care",
    categoryColor: "#D81B60",
    shortDescription: "4% Chlorhexidine gluconate liquid soap for surgical hand washing.",
    description: "Used as hygienic and surgical hand antiseptic before surgical procedures, hygienic hand antiseptic for healthcare personnel and patients, and body wash product before surgical procedures.",
    keyFeatures: [
      "Contains 4% Chlorhexidine gluconate",
      "Used in hygienic and surgical hand washing and body antisepsis",
      "Does not cause allergic reactions",
      "Compatible with skin pH",
      "Formulated for frequent use",
      "Efficient against bacteria, yeast, and viruses",
    ],
    composition: "4% Chlorhexidine gluconate, glycerin, dexpanthenol and auxiliary substances.",
    efficacy: {
      bactericidal: true,
      fungicidal: true,
      virucidal: true,
      tuberculocidal: false,
    },
    enStandards: ["EN 1499", "EN 13727"],
    contactTime: "30 sec",
    materialCompatibility: "Skin-friendly with added moisturizers. Compatible with skin pH.",
    pathogens: ["E. coli", "S. aureus", "Enterococcus", "C. albicans"],
    microbiologicalActivity: [
      { activity: "Bactericidal", concentration: "Direct use (Ready-to-use)", applicationDose: "For surgical and hygienic hand and skin disinfection, body disinfection before operation", applicationRange: "As frequent as desired" },
      { activity: "Yeasticidal", organisms: "C. albicans", concentration: "Direct use (Ready-to-use)", applicationDose: "For surgical and hygienic hand and skin disinfection, body disinfection before operation", applicationRange: "As frequent as desired" },
      { activity: "Virucidal", concentration: "Direct use (Ready-to-use)", applicationDose: "For surgical and hygienic hand and skin disinfection, body disinfection before operation", applicationRange: "As frequent as desired" },
    ],
    packaging: [
      { unit: "500 ml", piecesInBox: 20 },
      { unit: "1 L", piecesInBox: 12 },
    ],
    image: "/products/desco-hex.jpeg",
  },
  {
    id: "desco-hex-hexiprep",
    name: "DESCO® HEX (HexiPrep)",
    subtitle: "Skin Prepping Solution",
    category: "Hand and Skin Care",
    categoryColor: "#D81B60",
    shortDescription: "2% Chlorhexidine / 70% Alcohol prepping solution for IV and catheter insertions.",
    description: "15 seconds contact microbicidal 12 hours skin binder. Apply undiluted solution with clean surgical cotton swab on the skin prior to surgery. Presurgical preparation and asepsis solution for skin disinfection.",
    keyFeatures: [
      "Peripheral IV insertions",
      "Pre-operative skin preparation",
      "Surgical site cleansing after suturing",
      "Routine venipunctures",
      "Peripheral arterial line insertions",
      "Phlebotomy procedures",
      "Hemodialysis catheter insertions",
      "Cardiac catheterization",
    ],
    composition: "2% w/v Chlorhexidine Gluconate, 70% v/v Isopropyl alcohol.",
    efficacy: {
      bactericidal: true,
      fungicidal: true,
      virucidal: true,
      tuberculocidal: true,
    },
    enStandards: ["EN 12791", "EN 13727", "EN 13624"],
    contactTime: "15 sec",
    materialCompatibility: "Evaporates quickly, leaving an active protective film for 12 hours.",
    pathogens: ["S. epidermidis", "MRSA", "VRE", "C. albicans"],
    microbiologicalActivity: [
      { activity: "Bactericidal", concentration: "Direct use (Ready-to-use)", applicationDose: "For surgical and hygienic hand and skin disinfection, body disinfection before operation", applicationRange: "As frequent as desired" },
      { activity: "Yeasticidal", organisms: "C. albicans", concentration: "Direct use (Ready-to-use)", applicationDose: "For surgical and hygienic hand and skin disinfection, body disinfection before operation", applicationRange: "As frequent as desired" },
      { activity: "Virucidal", concentration: "Direct use (Ready-to-use)", applicationDose: "For surgical and hygienic hand and skin disinfection, body disinfection before operation", applicationRange: "As frequent as desired" },
    ],
    packaging: [
      { unit: "120 ml", piecesInBox: 30 },
      { unit: "1 L", piecesInBox: 12 },
    ],
    image: "/products/desco-hex-hexiprep.jpeg",
  },

  // ─────────────────────────────────────────
  // B. FIRST AID ANTISEPTIC SOLUTION
  // ─────────────────────────────────────────
  {
    id: "rapidine",
    name: "RAPIDINE",
    subtitle: "Antiseptic Solution",
    category: "First Aid Antiseptic",
    categoryColor: "#E65100",
    shortDescription: "10% Povidone-iodine first aid antiseptic solution for the whole family.",
    description: "Used for skin and mucosa antisepsis at operations of pre-surgery, precaution for gynecologic and birth treatments, biopsy, injection and blood draw. For wound care, burns, pyoderma, mycotic and bacteria infections and super infected dermatosises. It can be also used for first aid in the case of little injuries.",
    keyFeatures: [
      "Ready to use product",
      "Used in hygienic and surgical hand antisepsis",
      "Compatible with skin",
      "First aid for the whole family",
      "Helps protect against skin infection",
      "Golden brown color indicates area treated",
    ],
    composition: "%10 povidone iodine, auxiliary substances.",
    efficacy: {
      bactericidal: true,
      fungicidal: true,
      virucidal: true,
      tuberculocidal: true,
    },
    enStandards: ["EN 13727", "EN 13624"],
    contactTime: "30 sec - 1 min",
    materialCompatibility: "Can cause temporary skin staining. Do not use on hyperthyroid patients.",
    pathogens: ["MRSA", "Candida", "Norovirus"],
    microbiologicalActivity: [
      { activity: "Bactericidal", effectTime: "–" },
      { activity: "Fungicidal", effectTime: "–" },
      { activity: "Virucidal", effectTime: "–" },
      { activity: "Tuberculocidal", effectTime: "–" },
    ],
    packaging: [
      { unit: "120 ml", piecesInBox: 20 },
      { unit: "60 ml", piecesInBox: 40 },
    ],
    image: "/products/rapidine.jpg.jpeg",
  },

  // ─────────────────────────────────────────
  // C. FLOOR & SURFACE DISINFECTANTS
  // ─────────────────────────────────────────
  {
    id: "desco-san",
    name: "DESCO® SAN",
    subtitle: "Floor and Surface Disinfectant",
    category: "Floor and Surface Disinfection",
    categoryColor: "#E6A817",
    shortDescription: "Concentrated QAC-based formula, aldehyde and phenol-free.",
    description: "DESCO® SAN is a concentrated product containing quaternary ammonium compound. Performs cleaning and disinfection on the surface at the same time. Has a high material compatibility. Free of aldehyde and phenol. In risky areas of hospitals, it is used for cleaning and disinfection of all water-resistant floors, surfaces and fixtures, hard and PVC floors, acrylic glasses, incubators and kitchens contaminated with blood and body secretion.",
    keyFeatures: [
      "Contains quaternary ammonium compounds",
      "Aldehyde and phenol free",
      "Has high material compatibility",
      "Has bactericidal, fungicidal and virucidal action",
      "A concentrated product",
      "Thanks to its strong cleaning effect, it offers disinfection and cleaning in one step",
    ],
    composition: "Bis (3-aminopropyl) dodecylamine, didecyldimethylammonium chloride, benzalkonium chloride, auxiliary substances.",
    efficacy: {
      bactericidal: true,
      fungicidal: true,
      virucidal: true,
      tuberculocidal: true,
    },
    enStandards: ["EN 13697", "EN 13727", "EN 14476"],
    contactTime: "15 min",
    materialCompatibility: "Excellent compatibility with PVC, linoleum, ceramics, acrylic glasses, and metals.",
    pathogens: ["MRSA", "C. albicans", "A. niger", "Vaccinia", "BVDV"],
    microbiologicalActivity: [
      { activity: "Bactericidal (inc. MRSA)", concentration: "1%", effectTime: "15 min." },
      { activity: "Fungicidal", organisms: "C. albicans, A. niger", concentration: "1%", effectTime: "15 min." },
      { activity: "Tuberculocidal / Mycobactericidal", concentration: "1%", effectTime: "15 min." },
      { activity: "Virucidal", organisms: "Vaccinia, BVDV", concentration: "1%", effectTime: "15 min." },
    ],
    packaging: [
      { unit: "1 L", piecesInBox: 15 },
      { unit: "5 L", piecesInBox: 4 },
      { unit: "250 ml", piecesInBox: 40 },
    ],
    image: "/products/desco-san.jpeg",
  },

  // ─────────────────────────────────────────
  // D. ALCOHOL BASED RAPID SURFACE DISINFECTANTS
  // ─────────────────────────────────────────
  {
    id: "desco-sept-af",
    name: "DESCO® SEPT AF",
    subtitle: "Rapid Surface Disinfectant for Medical Device",
    category: "Alcohol Based Rapid Surface Disinfectants",
    categoryColor: "#00796B",
    shortDescription: "Rapid-acting alcohol-based spray for medical devices and surfaces.",
    description: "DESCO® SEPT AF is a fast acting ready-to-use surface disinfectant which contains alcohol. The product, which contains ethanol, 2-propanol and didecyldimethylammonium propionate, can be used for the fast disinfection of small surfaces with its widely effective spectrum and easy use. It is used for the fast disinfection of all kinds of surfaces except acrylic glass and alcohol-sensitive surfaces. It is suitable for the nursing desks, tables and chairs, medicine trolleys, areas where hands and skin can frequently contact, and the patient care units. It smells fresh and nice.",
    keyFeatures: [
      "It contains alcohol and didecyldimethylammonium propionate",
      "It does not contain aldehyde or phenol",
      "It has wide material compliance",
      "It has bactericidal, mycobactericidal, yeasticidal and virucidal effect",
      "It has fast drying feature",
    ],
    composition: "Ethyl alcohol, isopropyl alcohol, didecyldimethylammonium chlorid, parfum.",
    efficacy: {
      bactericidal: true,
      fungicidal: true,
      virucidal: true,
      tuberculocidal: true,
    },
    enStandards: ["EN 13727", "EN 13624", "EN 14348", "EN 14476"],
    contactTime: "30 sec",
    materialCompatibility: "Suitable for all kinds of surfaces except acrylic glass and alcohol-sensitive surfaces.",
    pathogens: ["MRSA", "VRE", "A. baumannii", "C. albicans", "Adenovirus", "Norovirus"],
    microbiologicalActivity: [
      { activity: "Bactericidal", organisms: "Inc. MRSA, VRE, A. baumannii", concentration: "Ready-to-use", effectTime: "30 sec." },
      { activity: "Yeasticidal", organisms: "C. albicans", concentration: "Ready-to-use", effectTime: "30 sec." },
      { activity: "Tuberculocidal / Mycobactericidal", concentration: "Ready-to-use", effectTime: "30 sec." },
      { activity: "Limited Virucidal", concentration: "Ready-to-use", effectTime: "30 sec." },
    ],
    packaging: [
      { unit: "1 L", piecesInBox: 20 },
      { unit: "5 L", piecesInBox: 4 },
    ],
    image: "/products/desco-sept-af.jpeg",
  },

  // ─────────────────────────────────────────
  // E. ENDOSCOPE AND MEDICAL DEVICE DISINFECTANTS
  // ─────────────────────────────────────────
  {
    id: "desco-sed",
    name: "DESCO® SED",
    subtitle: "Concentrated Disinfectant for Medical Instruments and Endoscopes",
    category: "Instruments and Endoscopes",
    categoryColor: "#6A1B9A",
    shortDescription: "Amine-based concentrate for surgical instruments and endoscopes.",
    description: "DESCO® SED is a disinfectant having wide spectrum effect and amine and quaternary ammonium compounds. It shows high material compliance and strong cleaning feature. It is suitable for daily usage in medical instrument disinfection. DESCO® SED is suitable for the pre-cleaning and disinfection of surgical instruments made from stainless steel, dentistry instruments, endoscopes, anesthesia equipment, and the materials, which are resistant or not resistant to heat, including MIC instruments by manually or in ultrasonic washing machines.",
    keyFeatures: [
      "Contains amine and quaternary ammonium compounds",
      "Used for the preparation of endoscopes for re-use and cleaning and disinfection of materials sensitive to heat and surgical instruments",
      "Aldehyde and phenol free",
      "High material compatibility",
      "Has bactericidal, yeasticidal, mycobactericidal, virucidal activity",
      "Suitable for manual use and in ultrasonic washing machines",
    ],
    composition: "100 g contains: 1.2 g N,N-bis(3-N-methly-poly (oxyethyl) ammonium propionate, 0.59 g N-(3-Aminopropyl)-N-dodecylpropane-1,3-diamine, corrosion inhibitors and auxiliary substances.",
    efficacy: {
      bactericidal: true,
      fungicidal: true,
      virucidal: true,
      tuberculocidal: true,
    },
    enStandards: ["EN 13727", "EN 13624", "EN 14348", "EN 14476"],
    contactTime: "15 min",
    materialCompatibility: "High compatibility with rubber, plastics, stainless steel, and sensitive optics in endoscopes.",
    pathogens: ["MRSA", "Tuberculosis", "Hepatitis B", "HIV", "C. albicans"],
    microbiologicalActivity: [
      { activity: "Bactericidal", concentration: "3%", effectTime: "15 min." },
      { activity: "Yeasticidal", organisms: "C. albicans", concentration: "3%", effectTime: "15 min." },
      { activity: "Tuberculocidal / Mycobactericidal", concentration: "3%", effectTime: "15 min." },
      { activity: "Virucidal", concentration: "3%", effectTime: "15 min." },
    ],
    packaging: [
      { unit: "1 L", piecesInBox: 12 },
      { unit: "5 L", piecesInBox: 4 },
      { unit: "200 ML", piecesInBox: 30 },
    ],
    image: "/products/desco-sed.jpeg",
  },
  {
    id: "desco-forte",
    name: "DESCO® FORTE",
    subtitle: "High Level Disinfectant for Endoscopes and Medical Instruments",
    category: "Instruments and Endoscopes",
    categoryColor: "#6A1B9A",
    shortDescription: "3% Gluteraldehyde high-level disinfectant (HLD) with sporicidal action.",
    description: "DESCO® FORTE provides high-level disinfection for endoscopes and medical instruments. It is available as a ready-to-use form. The DESCO® FORTE solution can be used for up to 15 days. The minimum effective concentration should be checked with the test strips. DESCO® FORTE can be used manually or with an endoscope washing machine for high-level disinfection of flexible and rigid endoscopes, surgical instruments made of stainless steel, including MIC instruments, anesthesia materials and non-heat-resistant medical instruments.",
    keyFeatures: [
      "Contains 3% Gluteraldehyde",
      "Used for high-level disinfection of previously cleaned instruments",
      "Offers safe use for medical instruments and endoscopes with high material compatibility",
      "Has bactericidal, mycobactericidal, virucidal, fungicidal and sporicidal activity",
      "Ready-to-use",
      "Can be used without any activator",
      "Suitable for use manually or with endoscope washing machine",
    ],
    composition: "100 g contains: 3% Gluteraldehyde, corrosion inhibitors and auxiliary substances.",
    efficacy: {
      bactericidal: true,
      fungicidal: true,
      virucidal: true,
      tuberculocidal: true,
      sporicidal: true,
    },
    enStandards: ["EN 13727", "EN 13624", "EN 14348", "EN 14476", "EN 17126"],
    contactTime: "15 min (HLD), 1 hour (Sporicidal)",
    materialCompatibility: "Anti-corrosive formulation protects delicate instruments. Suitable for stainless steel and endoscopic equipment.",
    pathogens: ["C. albicans", "A. brasiliensis", "Mycobacterium", "Adeno", "Polio", "MNV"],
    microbiologicalActivity: [
      { activity: "Bactericidal", concentration: "Ready-to-use", effectTime: "15 min." },
      { activity: "Fungicidal", organisms: "C. albicans, A. brasiliensis", concentration: "Ready-to-use", effectTime: "15 min." },
      { activity: "Tuberculocidal / Mycobactericidal", concentration: "Ready-to-use", effectTime: "15 min." },
      { activity: "Virucidal", organisms: "Adeno, Polio, MNV", concentration: "Ready-to-use", effectTime: "15 min." },
      { activity: "Sporicidal", concentration: "Ready-to-use", effectTime: "1 hour" },
    ],
    packaging: [
      { unit: "5 L", piecesInBox: 4 },
    ],
    image: "/products/desco-forte.png",
  },

  // ─────────────────────────────────────────
  // F. HEMODIALYSIS DEVICE DISINFECTION
  // ─────────────────────────────────────────
  {
    id: "desco-cit",
    name: "DESCO® CIT",
    subtitle: "Hemodialysis Device Disinfectant",
    category: "Hemodialysis Device Disinfection",
    categoryColor: "#E6A817",
    shortDescription: "Citric acid-based disinfectant for hemodialysis devices.",
    description: "DESCO® CIT breaks down calcium carbonate and removes blood residues. Used for thermochemical disinfection and decalcification in hemodialysis devices working with volumetric system. 100% biodegradable and non-toxic. Does not contain color and odor substances. Suitable for use on all hemodialysis devices.",
    keyFeatures: [
      "Used for thermochemical disinfection",
      "Contains citric acid",
      "Provides one-step disinfection and decalcification",
      "Has bactericidal (including Tbc), yeasticidal and virucidal action",
      "100% degradable, environment friendly",
      "Suitable for use on all hemodialysis devices",
    ],
    composition: "100 g contains: 21 g Citric acid, lactic acid, malic acid and excipients.",
    efficacy: {
      bactericidal: true,
      fungicidal: true,
      virucidal: true,
      tuberculocidal: true,
    },
    enStandards: ["EN 13727", "EN 13624", "EN 14476"],
    contactTime: "10 min at recommended concentration",
    materialCompatibility: "Optimized for hemodialysis machines (e.g., Fresenius, Braun). Does not damage internal tubing.",
    pathogens: ["MRSA", "VRE", "C. albicans", "Rotavirus"],
    microbiologicalActivity: [
      { activity: "Bactericidal", organisms: "Including MRSA, VRE", concentration: "1%", effectTime: "10 min." },
      { activity: "Yeasticidal", organisms: "C. albicans", concentration: "1%", effectTime: "10 min." },
      { activity: "Tuberculocidal", concentration: "1%", effectTime: "10 min." },
      { activity: "Virucidal", organisms: "Rotavirus", concentration: "5%", effectTime: "10 min." },
    ],
    packaging: [
      { unit: "5 L", piecesInBox: 4 },
    ],
    image: "/products/desco-cit.png",
  },
];
