// ZIPLINE ASIA — Verified Modern B2B Adventure Engineering & Infrastructure Data

export const brandData = {
  name: "ZIPLINE ASIA",
  tagline: "Adventure Infrastructure & Engineering",
  description: "ZIPLINE ASIA provides integrated design, engineering, manufacturing, and installation solutions for luxury resorts, hotels, adventure parks, and commercial tourism destinations."
};

export const heroData = {
  label: "ADVENTURE INFRASTRUCTURE & ENGINEERING",
  heading: "Engineering Adventure Destinations. From Vision to Reality.",
  supportingText: "End-to-end adventure infrastructure solutions for resorts, tourism destinations and adventure parks.",
  primaryCTA: {
    label: "EXPLORE OUR SOLUTIONS",
    href: "#solutions"
  },
  secondaryCTA: {
    label: "DISCUSS YOUR PROJECT",
    href: "#contact"
  },
  heroImage: "/images/hero-zipline.jpg",
  heroVideoPoster: "/images/hero-zipline.jpg",
  metrics: [
    { label: "Execution Standard", value: "Turnkey Infrastructure" },
    { label: "Engineering Scope", value: "Custom Site-Specific Design" },
    { label: "Target Sectors", value: "Resorts, Parks & Destinations" }
  ]
};

export const aboutData = {
  label: "ABOUT ZIPLINE ASIA",
  heading: "BUILT FOR ADVENTURE. ENGINEERED FOR IMPACT.",
  supportingText: "We bring together engineering, design, and adventure infrastructure solutions to help create engaging experiences and distinctive destinations.",
  description: [
    "ZIPLINE ASIA focuses on developing adventure infrastructure and equipment solutions for destinations across the hospitality, tourism, and recreation industries.",
    "From initial consultation and concept development to engineering, manufacturing, and installation, the company brings different aspects of adventure project development together under one integrated approach.",
    "Whether it is an individual zipline installation, a cantilever bungee tower, an aerial rope course, or a complete adventure park setup, our focus remains on understanding site topography and delivering solutions built for longevity."
  ],
  ctaText: "EXPLORE OUR CAPABILITIES",
  ctaHref: "#solutions",
  image: "/images/zipline-tower-launch.jpg",
  pillars: [
    {
      title: "Hospitality & Resort Integration",
      detail: "Attractions engineered to complement hospitality environments and expand unique guest activities."
    },
    {
      title: "Precision Engineering & Safety",
      detail: "Structural load calculations, wire rope catenary modeling, and high-tensile hardware specifications."
    },
    {
      title: "End-to-End Turnkey Delivery",
      detail: "Single-source coordination across feasibility, civil foundations, fabrication, rigging, and operational handover."
    }
  ]
};

export const solutionsData = {
  label: "SOLUTIONS & SERVICES",
  heading: "COMPLETE SOLUTIONS. LIMITLESS POSSIBILITIES.",
  supportingText: "Explore integrated adventure infrastructure solutions designed to turn destination concepts into engaging real-world experiences.",
  services: [
    {
      id: "zipline-systems",
      number: "01",
      title: "Zipline Design & Installation",
      subtitle: "Mega, Superman, Sky Bicycle & Dual Systems",
      description: "Custom-engineered zipline infrastructure adapted to mountain terrain, natural gorges, and resort properties. Solutions include Mega Ziplines, Superman fly harnesses, elevated Sky Bicycles, and high-capacity parallel Dual lines.",
      image: "/images/zipline-infrastructure.jpg",
      backImage: "/images/engineering-details.jpg",
      isFeatured: true,
      features: ["Custom catenary curve engineering", "Passive and magnetic braking systems", "High-throughput launch towers"]
    },
    {
      id: "bungee-jumping",
      number: "02",
      title: "Bungee Jumping Systems",
      subtitle: "Cantilever Platforms & Thrill Towers",
      description: "Dedicated bungee jumping infrastructure, cantilever steel platform planning, and high-altitude drop structures engineered for dramatic natural canyons and commercial thrill destinations.",
      image: "/images/bungee-tower.jpg",
      isFeatured: false,
      features: ["Structural cantilever load calculations", "Custom recovery winch systems", "Multi-point safety anchorages"]
    },
    {
      id: "giant-swings",
      number: "03",
      title: "Giant Swing Systems",
      subtitle: "High-Amplitude Pendulum Attractions",
      description: "Large-scale pendulum swing attraction systems developed to create distinctive adrenaline experiences within recreation destinations, cliff edges, and scenic viewing points.",
      image: "/images/giant-swing.jpg",
      isFeatured: false,
      features: ["Quick-release pneumatic launch mechanisms", "Dynamic harmonic damping", "Dual-rider and solo configurations"]
    },
    {
      id: "rope-courses",
      number: "04",
      title: "Rope Courses & Climbing Walls",
      subtitle: "Aerial Obstacles & Artificial Monoliths",
      description: "Structured multi-tier high-rope circuits, canopy challenge crossings, and free-standing climbing wall infrastructure for adventure parks, eco-resorts, and commercial facilities.",
      image: "/images/rope-course.jpg",
      isFeatured: false,
      features: ["Continuous belay tracking channels", "Weather-resistant timber & steel elements", "Modular difficulty circuits"]
    },
    {
      id: "adventure-parks",
      number: "05",
      title: "Adventure Park Development",
      subtitle: "Comprehensive Masterplanned Complexes",
      description: "Integrated planning, layout design, and infrastructure development for comprehensive adventure parks, combining multiple attractions, cable transfers, and visitor circulation pathways.",
      image: "/images/adventure-park-infrastructure.jpg",
      isFeatured: false,
      features: ["Master site planning & zoning", "Multi-attraction operational flow", "Long-term expansion phasing"]
    },
    {
      id: "glass-bridges",
      number: "06",
      title: "Glass Sky Bridges",
      subtitle: "Elevated Pedestrian Viewpoints",
      description: "Specialized suspended structural glass walkways that combine scenic pedestrian vantage points with breathtaking destination design over ravines, rivers, and mountain valleys.",
      image: "/images/glass-bridge.jpg",
      isFeatured: false,
      features: ["Multi-laminated structural glass panels", "Wind-oscillation tuned mass dampers", "High-altitude cable suspension"]
    },
    {
      id: "equipment-manufacturing",
      number: "07",
      title: "Adventure Equipment & Infrastructure",
      subtitle: "Precision Hardware & Rigging Components",
      description: "Specialized equipment and component manufacturing for ziplines, adventure rides, rope courses, and outdoor recreation infrastructure built to international commercial standards.",
      image: "/images/engineering-details.jpg",
      isFeatured: false,
      features: ["Aircraft-grade aluminum trollies", "Load-rated anchor shackles & turnbuckles", "Commercial impact dampeners"]
    },
    {
      id: "engineering-construction",
      number: "08",
      title: "Engineering, Design & Construction",
      subtitle: "Turnkey On-Site Infrastructure Execution",
      description: "Multidisciplinary project consultation, 3D site topography mapping, civil foundation engineering, steel fabrication, certified rigging, and final operational commissioning.",
      image: "/images/engineering-inspection.jpg",
      isFeatured: false,
      features: ["Topographical laser survey & modeling", "Civil foundation engineering", "Rigging inspection & documentation"]
    }
  ]
};
solutionsData.items = solutionsData.services;

export const productsData = {
  label: "ENGINEERED PRODUCTS",
  heading: "ENGINEERED SYSTEMS. EXTRAORDINARY EXPERIENCES.",
  supportingText: "Commercial-grade adventure systems, specialized rigging hardware, and high-tensile attraction equipment built for continuous destination operation.",
  categories: ["All", "Cable Systems", "Thrill Rides", "Hardware & Rigging"],
  products: [
    {
      id: "prod-mega-zipline",
      category: "Cable Systems",
      name: "Mega & Superman Zipline Systems",
      model: "ZA-ZIP-MEGA",
      image: "/images/zipline-infrastructure.jpg",
      backImage: "/images/hero-zipline.jpg",
      description: "Engineered long-span wire rope systems supporting standard seated, tandem, or horizontal Superman flying postures with high-velocity aerodynamic stability.",
      specs: [
        { label: "Span Capability", value: "Up to 1,500+ meters" },
        { label: "Configuration", value: "Single, Dual or Superman" },
        { label: "Braking", value: "Progressive Magnetic / Spring" }
      ]
    },
    {
      id: "prod-sky-bicycle",
      category: "Cable Systems",
      name: "Sky Bicycle Zipline Tracks",
      model: "ZA-AERO-BIKE",
      image: "/images/engineering-details.jpg",
      backImage: "/images/adventure-park-infrastructure.jpg",
      description: "Suspended dual-track bicycle cable systems engineered for scenic resort crossings over lakes, ravines, and forest canopies with counterbalance stabilization.",
      specs: [
        { label: "Track System", value: "Dual High-Tensile Steel Cable" },
        { label: "Safety System", value: "Dual Overhead Lanyard Catch" },
        { label: "Drive Type", value: "Direct Pedal Gear Propulsion" }
      ]
    },
    {
      id: "prod-commercial-trolley",
      category: "Hardware & Rigging",
      name: "Commercial Zipline Trollies & Pulleys",
      model: "ZA-TROLLEY-PRO",
      image: "/images/engineering-details.jpg",
      backImage: "/images/zipline-infrastructure.jpg",
      description: "Precision CNC-machined aircraft-grade aluminum alloy trollies with dual high-speed sealed ceramic/steel bearings, integrated carabiner attachment eyelets, and backup safety lanyards.",
      specs: [
        { label: "Material", value: "6061-T6 Anodized Aluminum" },
        { label: "Rated Speed", value: "Up to 120 km/h" },
        { label: "Proof Load", value: "Commercial Certified Rigging" }
      ]
    },
    {
      id: "prod-cantilever-bungee",
      category: "Thrill Rides",
      name: "Cantilever Bungee Platforms",
      model: "ZA-BUNGEE-TOWER",
      image: "/images/bungee-tower.jpg",
      backImage: "/images/glass-bridge.jpg",
      description: "Custom structural steel cantilever platforms engineered for natural cliff tops, suspension towers, and integrated resort thrill towers with built-in retrieval winch systems.",
      specs: [
        { label: "Structure", value: "Hot-Dip Galvanized Truss" },
        { label: "Recovery", value: "Motorized Variable Speed Winch" },
        { label: "Application", value: "Gorges, Cliffs & Free Towers" }
      ]
    },
    {
      id: "prod-giant-swing",
      category: "Thrill Rides",
      name: "Motorized Giant Swing Systems",
      model: "ZA-SWING-MAX",
      image: "/images/giant-swing.jpg",
      backImage: "/images/bungee-tower.jpg",
      description: "Automated hoist-and-release giant pendulum swings delivering a high-arc gravitational free-fall with harmonic damping wire ropes and redundant pivot bearings.",
      specs: [
        { label: "Arc Amplitude", value: "Up to 45m Pendulum Sweep" },
        { label: "Release Mechanism", value: "Pneumatic Quick-Release Hook" },
        { label: "Capacity", value: "1, 2, or 3 Riders" }
      ]
    },
    {
      id: "prod-rope-course-elements",
      category: "Hardware & Rigging",
      name: "Modular Aerial High-Rope Elements",
      model: "ZA-ROPE-MODULAR",
      image: "/images/rope-course.jpg",
      backImage: "/images/engineering-inspection.jpg",
      description: "Pre-fabricated obstacle bridges, suspended logs, spider nets, and zip transitions equipped with continuous belay safety tracks for uninterrupted participant progression.",
      specs: [
        { label: "Safety System", value: "Continuous Belay Track" },
        { label: "Timber Treatment", value: "Kiln-Dried Hardwood / Steel" },
        { label: "Modularity", value: "Expandable Multi-Tier Grid" }
      ]
    }
  ]
};

export const whyChooseData = {
  label: "WHY CHOOSE US",
  heading: "WHERE ENGINEERING MEETS ADVENTURE.",
  supportingText: "Developing an adventure destination requires multidisciplinary coordination. ZIPLINE ASIA brings together engineering precision, equipment manufacturing, and turnkey project delivery.",
  capabilities: [
    {
      title: "Engineering-Focused Approach",
      description: "Every installation begins with topographical site analysis, structural engineering calculations, and environmental load assessments."
    },
    {
      title: "Integrated Project Solutions",
      description: "Single-source accountability covering feasibility, civil foundations, structural fabrication, hardware supply, and commissioning."
    },
    {
      title: "Adventure Infrastructure Expertise",
      description: "Specialized mastery in high-altitude, valley-spanning, and resort-integrated aerial attractions designed for heavy commercial use."
    },
    {
      title: "Customised Project Planning",
      description: "Attractions tailored to match unique client site topography, landscape aesthetics, and visitor capacity requirements."
    },
    {
      title: "Equipment & Installation Solutions",
      description: "Commercial-grade hardware, precision rigging components, and certified on-site construction executed by experienced engineers."
    },
    {
      title: "End-to-End Project Coordination",
      description: "Transparent project milestones, detailed handover documentation, staff training guidelines, and ongoing technical support."
    }
  ]
};

export const projectsData = {
  label: "PROJECTS & CAPABILITIES",
  heading: "Adventure Infrastructure Designed for Remarkable Destinations",
  supportingText: "Explore adventure installations, engineered structures and destination-focused infrastructure.",
  disclaimer: "Representative Adventure Infrastructure Concepts illustrating engineered typologies for commercial destinations.",
  projects: [
    {
      id: "proj-zipline-installations",
      title: "Commercial Mega Zipline & Dual Flight Systems",
      category: "Zipline Installations",
      image: "/images/zipline-tower-launch.jpg",
      typology: "High-Altitude Flight Corridor",
      specs: "Dual Wire High-Tensile Catenary",
      badge: "Representative Concept",
      description: "Engineered long-span wire rope systems spanning dramatic mountain valleys with multi-factor tension calculations and magnetic deceleration braking."
    },
    {
      id: "proj-bungee-towers",
      title: "Cantilever Steel Bungee Thrill Towers",
      category: "Bungee Jumping Structures",
      image: "/images/bungee-tower.jpg",
      typology: "Cantilever Adrenaline Drop",
      specs: "Galvanized Steel Truss Structure",
      badge: "Representative Concept",
      description: "Custom structural steel cantilever platforms engineered for natural cliff tops and integrated thrill towers with mechanized recovery winches."
    },
    {
      id: "proj-giant-swings",
      title: "High-Amplitude Motorized Giant Swings",
      category: "Giant Swing Rides",
      image: "/images/giant-swing.jpg",
      typology: "Extreme Pendulum Flight",
      specs: "Harmonic Damping Suspension",
      badge: "Representative Concept",
      description: "Automated hoist-and-release pendulum systems delivering a 45-meter gravitational free-fall with multi-rider capacity and pneumatic release hooks."
    },
    {
      id: "proj-rope-courses",
      title: "Multi-Tier Aerial Courses & Monoliths",
      category: "Rope Courses & Climbing Walls",
      image: "/images/rope-course.jpg",
      typology: "Canopy Challenge Circuit",
      specs: "Continuous Belay Tracking Channel",
      badge: "Representative Concept",
      description: "Modular elevated obstacle courses and free-standing climbing monoliths built with weather-resistant timber and hot-dip galvanized structural poles."
    },
    {
      id: "proj-glass-bridges",
      title: "Suspended Structural Glass Sky Bridges",
      category: "Glass Sky Bridges",
      image: "/images/glass-bridge.jpg",
      typology: "Pedestrian Scenic Span",
      specs: "Laminated Multi-Layer Glass Panels",
      badge: "Representative Concept",
      description: "Specialized pedestrian suspension walkways engineered over deep ravines and rivers, combining scenic viewpoints with tuned mass vibration dampening."
    },
    {
      id: "proj-adventure-parks",
      title: "Comprehensive Commercial Adventure Parks",
      category: "Adventure Park Infrastructure",
      image: "/images/adventure-park-infrastructure.jpg",
      typology: "Multi-Attraction Masterplan",
      specs: "Turnkey Destination Execution",
      badge: "Representative Concept",
      description: "Masterplanned adventure complexes integrating multiple aerial crossings, zipline stations, and visitor circulation infrastructure into natural topography."
    },
    {
      id: "proj-canopy-valley",
      title: "Long-Span Valley Catenary Flight Crossings",
      category: "Zipline Installations",
      image: "/images/hero-zipline.jpg",
      typology: "Deep Gorge Catenary Span",
      specs: "High-Factor Wire Rope Anchorages",
      badge: "Representative Concept",
      description: "Engineered high-speed descent lines connecting mountain ridges with specialized passive terminal spring blocks and dual safety arresters."
    },
    {
      id: "proj-precision-rigging",
      title: "Engineered High-Load Cable Rigging Systems",
      category: "Adventure Park Infrastructure",
      image: "/images/engineering-inspection.jpg",
      typology: "Proof-Load Tested Rigging",
      specs: "Certified Hardware & Turnbuckles",
      badge: "Representative Concept",
      description: "Field-verified tensioning hardware, heavy-duty cable terminations, and load-rated anchor assemblies calibrated to strict commercial safety factors."
    }
  ],
  environments: [
    {
      id: "app-resorts",
      title: "Resorts & Hospitality",
      category: "Destination Development",
      description: "Low-impact adventure infrastructure designed to harmonize with luxury resort landscapes, expanding premium guest recreation offerings.",
      image: "/images/zipline-tower-launch.jpg",
      specs: "Integrated Canyon & Mountain Properties"
    },
    {
      id: "app-parks",
      title: "Adventure Parks",
      category: "Recreation Hubs",
      description: "High-capacity commercial facilities featuring parallel multi-line ziplines, interconnected rope courses, and dynamic thrill attractions.",
      image: "/images/zipline-infrastructure.jpg",
      specs: "Turnkey Multi-Attraction Masterplans"
    },
    {
      id: "app-tourism",
      title: "Tourism Destinations",
      category: "Scenic Activation",
      description: "Infrastructure solutions activating natural viewpoints, river gorges, and alpine valleys to create regional tourism drawcards.",
      image: "/images/hero-zipline.jpg",
      specs: "Long-Span Valley & Canyon Crossings"
    },
    {
      id: "app-bridges",
      title: "Glass Sky Bridges",
      category: "Architectural Walkways",
      description: "Suspended architectural glass footbridges connecting scenic vantage points, offering visitors an unforgettable elevated vista.",
      image: "/images/glass-bridge.jpg",
      specs: "Laminated Structural Glass Assemblies"
    },
    {
      id: "app-thrill",
      title: "Commercial Thrill Facilities",
      category: "Extreme Attractions",
      description: "Dedicated adrenaline hubs incorporating cantilever bungee towers, high-amplitude giant swings, and technical free-fall drops.",
      image: "/images/bungee-tower.jpg",
      specs: "Structural Steel Cantilever Towers"
    },
    {
      id: "app-rope-facilities",
      title: "Outdoor Recreation Spaces",
      category: "Active Canopy Circuits",
      description: "Canopy-level aerial obstacles and climbing monoliths designed for team building, family recreation, and ecotourism complexes.",
      image: "/images/rope-course.jpg",
      specs: "Multi-Tier Forest & Pole Systems"
    }
  ]
};

export const founderData = {
  label: "LEADERSHIP & ENGINEERING PHILOSOPHY",
  heading: "Meet the Vision Behind ZIPLINE ASIA",
  supportingLine: "Leadership, vision and a commitment to developing remarkable adventure infrastructure.",
  founder: {
    name: "Satnam Singh",
    designation: "Founder & Technical Director",
    organization: "ZIPLINE ASIA",
    heritage: "Sports Academy of Mountaineering (Est. 1995)",
    intro: "Pioneering commercial adventure infrastructure, long-span wire rope systems, and high-altitude challenge courses across India and Asia.",
    biography: [
      "With a foundation in mountaineering and technical rigging established in 1995 through the Sports Academy of Mountaineering, Satnam Singh brings three decades of experience in adventure infrastructure development, combining challenging terrain with engineering precision.",
      "His technical leadership spans structural integrity, load safety planning, specialized catenary calculations, and commercial adventure installations — from resort zipline systems and bungee towers to large-scale adventure park developments."
    ],
    quote: "True adventure infrastructure begins long before the first wire rope is tensioned—it lives in the millimeter tolerances of civil anchorages, the math of dynamic deceleration, and an absolute respect for the mountains we build upon.",
    signature: "Satnam Singh",
    portrait: null,
    stats: [
      { value: "30+ Years", label: "Industry Heritage (Est. 1995)" },
      { value: "EN & ACCT", label: "Safety Standard Alignment" },
      { value: "Turnkey", label: "Engineering & Rigging Oversight" }
    ]
  }
};

export const certificationsData = {
  label: "STANDARDS & CREDENTIALS",
  heading: "Professional Standards & Credentials",
  supportingLine: "Commercial adventure systems engineered in alignment with international safety standards, certified rigging hardware, and verifiable structural criteria.",
  dossierNote: "Structural calculations, proof-load test records, and material mill test certificates are compiled into project-specific engineering dossiers for regulatory audit and client handover.",
  credentials: [
    {
      id: "en-15567",
      code: "EN 15567:2015",
      title: "Ropes Courses & Ziplines Safety Standard",
      standard: "Part 1: Construction & Safety Requirements",
      authority: "European Committee for Standardization (CEN)",
      scope: "Governs site surveys, structural safety factors (≥5x), wire rope tensions, catenary limits, and periodic inspection criteria.",
      image: null
    },
    {
      id: "ansi-acct",
      code: "ANSI / ACCT 03-2019",
      title: "Canopy & Zipline Tour Standards",
      standard: "American National Standard for Aerial Attractions",
      authority: "Association for Challenge Course Technology (ACCT)",
      scope: "Specifies catenary trajectory tolerances, anchor installation proof-loads, braking deceleration limits, and operational risk controls.",
      image: null
    },
    {
      id: "ce-uiaa",
      code: "CE & UIAA Conformity",
      title: "Rigging Hardware & PPE Safety Labels",
      standard: "EN 12278 (Pulleys) • EN 362 (Connectors) • UIAA 105",
      authority: "European Notified Bodies & UIAA Federation",
      scope: "Mandates 22kN+ minimum breaking strength on connectors, cyclic fatigue testing, and high-velocity thermal dissipation on tandem trollies.",
      image: null
    },
    {
      id: "is-metallurgy",
      code: "IS & ASTM Metallurgy Codes",
      title: "Wire Ropes & Civil Foundation Standards",
      standard: "High-Tensile Galvanized Steel & Geotechnical Norms",
      authority: "Bureau of Indian Standards & ASTM International",
      scope: "Covers high-grade structural steel fabrication, dual galvanized high-tensile wire rope redundancy, and calibrated geotechnical soil anchors.",
      image: null
    }
  ]
};

export const processData = {
  label: "HOW WE WORK",
  heading: "FROM FIRST IDEA TO REAL-WORLD EXPERIENCE.",
  supportingText: "Our structured four-stage project methodology ensures precision, structural integrity, and transparent execution from initial concept to final handover.",
  steps: [
    {
      step: "01",
      title: "Understand the Vision",
      phase: "Concept & Requirements",
      description: "We understand the client's concept, site vision, attraction objectives, and destination requirements to determine project scope."
    },
    {
      step: "02",
      phase: "Engineering & Feasibility",
      title: "Plan & Engineer",
      description: "Evaluate site terrain, calculate wire rope catenary curves, model structural foundations, and develop comprehensive engineering plans."
    },
    {
      step: "03",
      phase: "Fabrication & Construction",
      title: "Build the Solution",
      description: "Coordinate precision equipment fabrication, civil foundation works, structural steel erection, and certified cable rigging."
    },
    {
      step: "04",
      phase: "Commissioning & Handover",
      title: "Project Delivery",
      description: "Complete full proof-load testing, system commissioning, operational documentation handover, and staff procedural training."
    }
  ]
};

export const contactData = {
  label: "START A DISCUSSION",
  heading: "LET'S BUILD SOMETHING EXTRAORDINARY.",
  supportingText: "Have an adventure infrastructure project in mind? Tell us about your vision and let's explore the possibilities.",
  ctaButton: "SUBMIT ENQUIRY",
  projectTypes: [
    "Zipline Design & Installation",
    "Bungee Jumping Systems",
    "Giant Swing Systems",
    "Rope Courses & Climbing Walls",
    "Adventure Park Development",
    "Glass Sky Bridges",
    "Adventure Equipment & Infrastructure",
    "Engineering, Design & Construction"
  ],
  contactPoints: [
    {
      label: "B2B Project Consultation",
      value: "Direct coordination for resort owners, developers & operators"
    },
    {
      label: "Geographic Coverage",
      value: "Turnkey adventure infrastructure across India, Asia & International markets"
    },
    {
      label: "Engineering Standards",
      value: "Strict adherence to commercial safety factors & structural load calculations"
    }
  ]
};

export const footerData = {
  wordmark: "ZIPLINE ASIA",
  tagline: "ADVENTURE INFRASTRUCTURE & ENGINEERING",
  intro: "ZIPLINE ASIA provides integrated adventure infrastructure, engineering, equipment manufacturing, and installation solutions for hotels, luxury resorts, tourism destinations, and adventure parks.",
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About Us", href: "#about" },
    { label: "Solutions", href: "#solutions" },
    { label: "Products", href: "#products" },
    { label: "Engineering Approach", href: "#process" },
    { label: "Founder", href: "#founder" },
    { label: "Projects Carousel", href: "#projects" },
    { label: "Professional Standards", href: "#certifications" },
    { label: "Contact", href: "#contact" }
  ],
  solutionsLinks: [
    { label: "Zipline Design & Installation", href: "#solutions" },
    { label: "Bungee Jumping Systems", href: "#solutions" },
    { label: "Giant Swing Systems", href: "#solutions" },
    { label: "Rope Courses & Climbing Walls", href: "#solutions" },
    { label: "Adventure Park Development", href: "#solutions" },
    { label: "Glass Sky Bridges", href: "#solutions" },
    { label: "Adventure Equipment & Rigging", href: "#products" },
    { label: "Engineering & Construction", href: "#solutions" }
  ],
  copyright: `© ${new Date().getFullYear()} ZIPLINE ASIA. All rights reserved. Adventure Infrastructure, Engineering & Equipment Solutions.`
};
