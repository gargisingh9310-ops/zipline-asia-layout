// ADVENTURE PARK SOLUTIONS (APS) — Official Website Content & Infrastructure Data

export const brandData = {
  name: "ADVENTURE PARK SOLUTIONS",
  shortName: "APS",
  tagline: "Engineering Experiences. Building Adventures.",
  positioning: "Complete Adventure Infrastructure Solutions Company",
  closingMessage: "From an Idea to an Attraction. From an Attraction to an Adventure Destination.",
  description: "Adventure Park Solutions is a complete adventure infrastructure solutions company specialising in the conceptualisation, design, engineering, fabrication and installation of adventure and recreational attractions."
};

export const heroData = {
  label: "COMPLETE ADVENTURE INFRASTRUCTURE SOLUTIONS",
  heading: "Engineering Experiences. Building Adventures.",
  supportingText: "Adventure Park Solutions is a complete adventure infrastructure solutions company specialising in the conceptualisation, design, engineering, fabrication and installation of adventure and recreational attractions. From individual adventure activities to fully integrated adventure parks, we help transform ideas and spaces into exciting destinations.",
  primaryCTA: {
    label: "EXPLORE OUR SOLUTIONS",
    href: "#solutions"
  },
  secondaryCTA: {
    label: "REQUEST A PROPOSAL",
    href: "#contact"
  },
  heroImage: "/images/hero-zipline.jpg",
  heroVideoPoster: "/images/hero-zipline.jpg",
  metrics: [
    { label: "Execution Standard", value: "Complete Turnkey Solutions" },
    { label: "Engineering Scope", value: "Concept to Commissioning" },
    { label: "Specialisation", value: "Integrated Adventure Parks" }
  ]
};

export const aboutData = {
  label: "ABOUT ADVENTURE PARK SOLUTIONS",
  heading: "ENGINEERING EXPERIENCES. BUILDING ADVENTURES.",
  supportingText: "At Adventure Park Solutions, we believe that adventure is more than an activity; it is an experience that brings people together, encourages exploration and creates lasting memories.",
  description: [
    "We bring together creativity, technical expertise and practical execution to develop customised adventure and recreational infrastructure.",
    "Our approach is based on understanding each client's vision, site conditions, target audience and project objectives before developing a suitable solution. Our services extend from initial concept development to final installation and ongoing support."
  ],
  subsections: [
    {
      title: "Company Profile",
      detail: "A complete adventure infrastructure solutions company specialising in conceptualisation, design, engineering, fabrication and installation of adventure and recreational attractions."
    },
    {
      title: "Vision & Mission",
      detail: "Transforming ideas and spaces into exciting, enduring destinations that bring people together, foster active exploration, and deliver commercial value."
    },
    {
      title: "Our Expertise",
      detail: "From high-altitude aerial systems and modular challenge courses to target sports, indoor entertainment zones, and custom-engineered structures."
    },
    {
      title: "Our Approach",
      detail: "Rigorous understanding of client objectives, topographical surveying, structural safety planning, precision fabrication, and lifelong maintenance."
    },
    {
      title: "Why Choose APS",
      detail: "One partner for the entire adventure infrastructure development process — delivering accountability, technical precision, and seamless handover."
    }
  ],
  pillars: [
    {
      title: "Company Profile",
      detail: "Complete adventure infrastructure solutions company specialising in design, engineering, fabrication and installation."
    },
    {
      title: "Our Expertise",
      detail: "Comprehensive aerial rides, challenge courses, indoor zones, and custom-built adventure structures."
    },
    {
      title: "Turnkey Approach",
      detail: "One partner from initial feasibility and master planning to certified commissioning and ongoing support."
    }
  ],
  ctaText: "EXPLORE OUR SOLUTIONS",
  ctaHref: "#solutions",
  image: "/images/zipline-tower-launch.jpg"
};

export const solutionsData = {
  label: "OUR SOLUTIONS & SERVICES",
  heading: "COMPLETE SOLUTIONS. LIMITLESS POSSIBILITIES.",
  mainMessage: "One partner for the entire adventure infrastructure development process.",
  supportingText: "One partner for the entire adventure infrastructure development process — from initial feasibility and master planning through precision engineering to final commissioning and ongoing support.",
  services: [
    {
      id: "sol-feasibility",
      number: "01",
      title: "Concept Development & Feasibility Studies",
      subtitle: "Strategic Ideation & Viability Analysis",
      description: "Evaluating project viability, target demographics, tourist footfall, and geographical terrain to formulate practical, high-impact adventure destination concepts.",
      image: "/images/zipline-infrastructure.jpg",
      features: ["Site viability & catchment analysis", "Attraction mix recommendations", "Phased development roadmaps"]
    },
    {
      id: "sol-site-assessment",
      number: "02",
      title: "Site Assessment & Planning",
      subtitle: "Topography & Environmental Surveying",
      description: "Comprehensive on-site evaluations including laser topography mapping, elevation profiling, geotechnical anchor feasibility, and natural resource integration.",
      image: "/images/engineering-inspection.jpg",
      features: ["Topographical laser surveying", "Geotechnical soil testing", "Environmental harmony planning"]
    },
    {
      id: "sol-master-planning",
      number: "03",
      title: "Adventure Park Master Planning",
      subtitle: "Circulation, Zoning & Visitor Flow",
      description: "Holistic master planning that harmonizes adventure attractions with ticketing, guest pathways, viewing platforms, safety perimeters, and future expansion zones.",
      image: "/images/adventure-park-infrastructure.jpg",
      features: ["Visitor circulation & queue design", "Multi-attraction zoning", "Operational safety perimeters"]
    },
    {
      id: "sol-3d-visualisation",
      number: "04",
      title: "Architectural Design & 3D Visualisation",
      subtitle: "Photo-Realistic Renders & Simulations",
      description: "Creating precise 3D architectural renders, fly-through visualizations, and spatial mockups to help stakeholders visualize the project before ground-breaking.",
      image: "/images/resort-park.jpg",
      features: ["3D architectural perspective renders", "Sightline and landscape modeling", "Stakeholder presentation packages"]
    },
    {
      id: "sol-structural-engineering",
      number: "05",
      title: "Structural & Mechanical Engineering",
      subtitle: "Load Calculations & Rigging Safety Factors",
      description: "Rigorous structural engineering including catenary curve math, dynamic tension modeling, wind load resistance, and high-tensile wire rope safety factors.",
      image: "/images/engineering-details.jpg",
      features: ["Wire rope catenary calculations", "Foundation load calculations", "Structural steel stress analysis"]
    },
    {
      id: "sol-fabrication",
      number: "06",
      title: "Equipment Design & Fabrication",
      subtitle: "Precision Manufacturing & Metallurgy",
      description: "In-house design and fabrication of commercial-grade adventure hardware, certified pulleys, structural launch towers, harness gear, and specialized bracketry.",
      image: "/images/engineering-details.jpg",
      features: ["Commercial-grade alloy fabrication", "Hot-dip galvanized steelwork", "Precision CNC-machined components"]
    },
    {
      id: "sol-installation",
      number: "07",
      title: "Installation & Project Execution",
      subtitle: "Certified On-Site Construction & Rigging",
      description: "Full-scale project execution by veteran rigging engineers, managing civil foundation pouring, tower erection, cable tensioning, and obstacle assembly.",
      image: "/images/zipline-tower-launch.jpg",
      features: ["Veteran rigging specialists", "Civil foundation oversight", "Milestone-driven project delivery"]
    },
    {
      id: "sol-testing",
      number: "08",
      title: "Testing & Commissioning",
      subtitle: "Proof-Load Validation & Operational Sign-off",
      description: "Exhaustive multi-tier testing protocols including non-destructive testing (NDT), calibrated proof-load drop tests, brake verification, and safety sign-offs.",
      image: "/images/bungee-tower.jpg",
      features: ["Proof-load tension testing", "Emergency brake deceleration checks", "Operational safety sign-off"]
    },
    {
      id: "sol-training",
      number: "09",
      title: "Operator Training",
      subtitle: "Safety Protocols & Operating Manuals",
      description: "Structured operator training programs covering guest briefing procedures, harness fitting, equipment daily inspection, evacuation drills, and routine maintenance.",
      image: "/images/rope-course.jpg",
      features: ["Staff operating procedures & manuals", "Daily safety inspection drills", "Guest management protocols"]
    },
    {
      id: "sol-maintenance",
      number: "10",
      title: "Annual Maintenance & Upgradation",
      subtitle: "Periodic Inspections & System Refurbishment",
      description: "Ongoing lifecycle support including scheduled cable inspections, hardware re-tensioning, wear-and-tear replacement, and facility upgrades for growing destinations.",
      image: "/images/giant-swing.jpg",
      features: ["Periodic safety audit inspections", "Cable & hardware replacement", "Facility upgrades & expansion"]
    },
    {
      id: "sol-turnkey",
      number: "11",
      title: "Complete Turnkey Project Development",
      subtitle: "End-to-End Single-Source Accountability",
      description: "Seamless turnkey management uniting feasibility, design, fabrication, on-site construction, and licensing into a single accountable partnership.",
      image: "/images/glass-bridge.jpg",
      features: ["Single-source commercial accountability", "Streamlined project timelines", "Complete destination delivery"]
    }
  ]
};
solutionsData.items = solutionsData.services;

export const productsData = {
  label: "ADVENTURE ATTRACTIONS",
  heading: "COMPREHENSIVE ATTRACTION PORTFOLIO.",
  supportingText: "Commercial-grade adventure attractions designed, engineered, and fabricated for high visitor engagement, structural longevity, and maximum operating safety.",
  categories: [
    "All",
    "Aerial & Height-Based",
    "Obstacle & Challenge",
    "Target & Skill-Based",
    "Indoor Entertainment",
    "Specialised & Custom"
  ],
  products: [
    // A. Aerial & Height-Based Adventures
    {
      id: "attr-zipline",
      category: "Aerial & Height-Based",
      name: "Commercial Zipline Systems",
      model: "APS-AERO-ZIP",
      image: "/images/zipline-infrastructure.jpg",
      description: "Engineered single, parallel dual, and long-span valley catenary ziplines with smooth magnetic or progressive spring deceleration for high-throughput guest throughput.",
      features: ["Engineered wire rope catenary curve", "Progressive magnetic/spring braking", "High-capacity launch & landing towers"],
      applications: "Resorts, adventure parks, mountain viewpoints, eco-tourism valleys",
      configurations: "Single Line, Dual Parallel, Mega Long-Span, Superman Harness Flight",
      specs: [
        { label: "Category", value: "Aerial Flight" },
        { label: "Configuration", value: "Single / Dual / Superman" },
        { label: "Safety System", value: "Redundant Cable Anchorages" }
      ]
    },
    {
      id: "attr-sky-cycle",
      category: "Aerial & Height-Based",
      name: "Sky Cycle Track Systems",
      model: "APS-SKY-CYCLE",
      image: "/images/engineering-details.jpg",
      description: "Suspended pedal-powered bicycle cable tracks spanning scenic heights, ravines, and water bodies with dual-cable stabilization and overhead safety arresters.",
      features: ["Dual-track high-tensile steel cable system", "Counterbalance stabilization bar", "Overhead continuous safety catch lanyards"],
      applications: "Resorts, lake crossings, scenic amusement parks, nature retreats",
      configurations: "Single Track, Parallel Twin Track, Tandem Pedal Units",
      specs: [
        { label: "Category", value: "Aerial Cable Ride" },
        { label: "Track Structure", value: "Dual High-Tensile Steel Wire" },
        { label: "Safety System", value: "Dual Overhead Lanyard Catch" }
      ]
    },
    {
      id: "attr-sky-roller",
      category: "Aerial & Height-Based",
      name: "Sky Roller Systems",
      model: "APS-SKY-ROLLER",
      image: "/images/hero-zipline.jpg",
      description: "Continuous elevated rail and cable roller systems combining sweeping aerial turns with smooth gravity-assisted glide dynamics through forest canopies and resorts.",
      features: ["Continuous tubular track / cable hybrid", "Centrifugal speed governor trollies", "Curved track panoramic flight corridors"],
      applications: "Adventure destinations, eco-parks, integrated leisure complexes",
      configurations: "Custom circuit lengths, terrain-following layouts",
      specs: [
        { label: "Category", value: "Aerial Rail Ride" },
        { label: "Speed Control", value: "Centrifugal Governor Brake" },
        { label: "Mounting", value: "Free-standing Steel Towers or Trees" }
      ]
    },
    {
      id: "attr-giant-swing",
      category: "Aerial & Height-Based",
      name: "Motorized Giant Swing",
      model: "APS-SWING-MAX",
      image: "/images/giant-swing.jpg",
      description: "Large-scale pendulum swing attraction engineered with motorized hoist, pneumatic quick-release release, and harmonic damping cables for intense adrenaline rushes.",
      features: ["Quick-release pneumatic launch mechanism", "Harmonic damping suspension cables", "Heavy-duty redundant pivot bearing assemblies"],
      applications: "Cliff edges, adventure park thrill zones, resort vantage points",
      configurations: "Solo Rider, Dual Rider, 3-Passenger Tandem",
      specs: [
        { label: "Category", value: "High-Arc Pendulum" },
        { label: "Arc Amplitude", value: "Up to 45m Pendulum Sweep" },
        { label: "Release Type", value: "Pneumatic Quick-Release Hook" }
      ]
    },
    {
      id: "attr-bungee",
      category: "Aerial & Height-Based",
      name: "Bungee Jumping Structures",
      model: "APS-BUNGEE-TOWER",
      image: "/images/bungee-tower.jpg",
      description: "Dedicated cantilever steel bungee platforms engineered for natural ravines, river bridges, and free-standing thrill towers with motorized guest retrieval systems.",
      features: ["Structural steel cantilever truss engineering", "Motorized variable-speed recovery winch", "Multi-point certified safety anchorages"],
      applications: "Natural canyons, dedicated thrill parks, iconic destination towers",
      configurations: "Free-standing Lattice Tower, Bridge Mount, Cliff Cantilever",
      specs: [
        { label: "Category", value: "Extreme Adrenaline" },
        { label: "Structure", value: "Hot-Dip Galvanized Truss" },
        { label: "Recovery", value: "Motorized High-Speed Winch" }
      ]
    },
    {
      id: "attr-high-rope",
      category: "Aerial & Height-Based",
      name: "High Rope Courses",
      model: "APS-ROPE-HIGH",
      image: "/images/rope-course.jpg",
      description: "Multi-tiered aerial obstacle challenge courses incorporating Burma bridges, swinging logs, spider nets, and zip transitions equipped with continuous belay tracking.",
      features: ["Continuous belay tracking safety channel", "Weather-treated timber and galvanized steel poles", "Modular progressive difficulty circuits"],
      applications: "Adventure parks, eco-resorts, outdoor training camps, nature reserves",
      configurations: "1, 2, or 3-Tier Multi-Level Layouts, Custom Obstacle Counts",
      specs: [
        { label: "Category", value: "Aerial Challenge" },
        { label: "Safety System", value: "Continuous Belay Track" },
        { label: "Structure", value: "Treated Timber & Steel Poles" }
      ]
    },

    // B. Obstacle & Challenge Courses
    {
      id: "attr-military-obstacle",
      category: "Obstacle & Challenge",
      name: "Military-Style Obstacle Courses",
      model: "APS-MIL-OBST",
      image: "/images/adventure-park-infrastructure.jpg",
      description: "Rugged ground and elevated tactical obstacle courses inspired by armed forces training regimens, engineered for stamina, team cohesion, and physical fitness.",
      features: ["Heavy-duty timber and steel tactical structures", "Modular commando crawl and scale obstacles", "High-durability all-weather components"],
      applications: "Institutional training, outdoor adventure parks, corporate camps, academies",
      configurations: "Linear 10-20 Obstacle Drills, Parallel Timed Challenge Lanes",
      specs: [
        { label: "Category", value: "Tactical Obstacle" },
        { label: "Material", value: "Heavy-Gauge Steel & Hardwood" },
        { label: "Capacity", value: "Continuous Group Progression" }
      ]
    },
    {
      id: "attr-commando-course",
      category: "Obstacle & Challenge",
      name: "Commando Training Courses",
      model: "APS-COMMANDO",
      image: "/images/rope-course.jpg",
      description: "Intense commando conditioning courses including monkey bars, trench crawls, tarzan swings, vertical cargo nets, and balancing bridges built to rigorous standards.",
      features: ["Reinforced climbing cargo nets", "Multi-height balance beam circuits", "Engineered fall-zone impact surfacing"],
      applications: "Schools, universities, police and cadet training, commercial adventure hubs",
      configurations: "Beginner, Intermediate, and Advanced Commando Tracks",
      specs: [
        { label: "Category", value: "Physical Conditioning" },
        { label: "Layout", value: "Multi-Segment Circuit" },
        { label: "Impact Surface", value: "Engineered Sand / Woodchips" }
      ]
    },
    {
      id: "attr-ninja-warrior",
      category: "Obstacle & Challenge",
      name: "Ninja Warrior Courses",
      model: "APS-NINJA-PRO",
      image: "/images/engineering-details.jpg",
      description: "Dynamic agility and upper-body challenge courses featuring warped walls, salmon ladders, quintuple steps, and balance rollers with safety landing airbags or foam pits.",
      features: ["Modular aluminum / steel truss grid framework", "Replaceable obstacle elements for varied difficulty", "High-density safety landing foam pit or air bag"],
      applications: "Indoor adventure zones, family entertainment centers, gymnasiums",
      configurations: "Dual Lane Head-to-Head Racing, Single Timed Course",
      specs: [
        { label: "Category", value: "Agility & Speed" },
        { label: "Truss Structure", value: "Heavy-Duty Modular Aluminum" },
        { label: "Safety Cushion", value: "Airbag or Deep Foam Cube Pit" }
      ]
    },
    {
      id: "attr-rope-challenge",
      category: "Obstacle & Challenge",
      name: "Rope Challenge Courses",
      model: "APS-ROPE-CHAL",
      image: "/images/rope-course.jpg",
      description: "Low and mid-level rope adventure circuits designed for family bonding, balance coordination, and active recreation in resorts and eco-tourism sites.",
      features: ["Continuous belay or smart carabiner integration", "Natural landscape contour integration", "Low-maintenance weather-resistant materials"],
      applications: "Resorts, hotels, community parks, children's camps",
      configurations: "Compact Circular Layout, Linear Trail Course",
      specs: [
        { label: "Category", value: "Family Adventure" },
        { label: "Elevation", value: "Ground to 3m Mid-Height" },
        { label: "User Age", value: "All Ages (Child to Adult)" }
      ]
    },
    {
      id: "attr-climbing-walls",
      category: "Obstacle & Challenge",
      name: "Artificial Climbing Walls",
      model: "APS-CLIMB-WALL",
      image: "/images/engineering-inspection.jpg",
      description: "Free-standing monolith and wall-mounted artificial climbing structures featuring top-rope anchor systems, auto-belay integration, and interchangeable route holds.",
      features: ["Textured fiberglass / treated ply panels", "Certified hydraulic auto-belay compatibility", "Interchangeable competition-grade climbing holds"],
      applications: "Adventure parks, hotels, school campuses, indoor fitness centers",
      configurations: "Vertical Wall, Incline/Overhang, 360-Degree Climbing Monolith",
      specs: [
        { label: "Category", value: "Sport Climbing" },
        { label: "Height", value: "6m to 18m Commercial Heights" },
        { label: "Belay System", value: "Auto-Belay & Manual Top-Rope" }
      ]
    },

    // C. Target & Skill-Based Activities
    {
      id: "attr-archery",
      category: "Target & Skill-Based",
      name: "Archery Ranges & Arenas",
      model: "APS-TARGET-ARC",
      image: "/images/adventure-park-infrastructure.jpg",
      description: "Custom-designed traditional and compound archery ranges equipped with safety backstop netting, distance lanes, target stands, and guest shooting bays.",
      features: ["Certified high-density arrow stop netting", "Covered shooting bay pergolas", "Official target bosses and scoring stands"],
      applications: "Resorts, adventure parks, corporate team building retreats",
      configurations: "3 to 10 Shooting Lanes, 10m to 30m Distance Markers",
      specs: [
        { label: "Category", value: "Skill Sport" },
        { label: "Safety Barrier", value: "Heavy-Duty Archery Backstop Net" },
        { label: "Lanes", value: "Custom Modular Bay Count" }
      ]
    },
    {
      id: "attr-target-shooting",
      category: "Target & Skill-Based",
      name: "Air Rifle Target Shooting",
      model: "APS-TARGET-RIFLE",
      image: "/images/engineering-details.jpg",
      description: "Precision target shooting ranges designed with armored pellet catchers, sound-dampening baffles, motorized target return systems, and safety dividers.",
      features: ["Heavy steel pellet traps with lead catchers", "Individual divider partitions", "Manual or motorized target carrier cables"],
      applications: "Resorts, recreational clubs, indoor gaming arenas",
      configurations: "Indoor Enclosed Range, Semi-Outdoor Canopy Range",
      specs: [
        { label: "Category", value: "Precision Target" },
        { label: "Trap System", value: "Armored Steel Pellet Trap" },
        { label: "Partitioning", value: "Acoustic Ballistic Dividers" }
      ]
    },
    {
      id: "attr-crossbow",
      category: "Target & Skill-Based",
      name: "Crossbow Activity Ranges",
      model: "APS-TARGET-XBOW",
      image: "/images/adventure-park-infrastructure.jpg",
      description: "Controlled crossbow activity lanes with high-impact target butts, enclosed safety firing perimeters, and specialized bolt arrestor curtains.",
      features: ["High-impact ballistic backstops", "Enclosed perimeter safety cage", "Calibrated lightweight recreational crossbow units"],
      applications: "Adventure destinations, thematic camps, outdoor skill arenas",
      configurations: "Dedicated 2 to 6 Lane Crossbow Layouts",
      specs: [
        { label: "Category", value: "Skill Sport" },
        { label: "Safety Boundary", value: "Enclosed Perimeter Netting" },
        { label: "Target Butt", value: "Layered High-Density Foam" }
      ]
    },
    {
      id: "attr-interactive-targets",
      category: "Target & Skill-Based",
      name: "Interactive Target Sports",
      model: "APS-TARGET-INT",
      image: "/images/glass-bridge.jpg",
      description: "Electronic interactive shooting and skill systems with digital hit sensors, LED lighting feedback, computerized scoring boards, and multiplayer challenges.",
      features: ["Electronic hit-detection target sensors", "Automated digital scoring displays", "Multiplayer tournament game modes"],
      applications: "Family entertainment centres, shopping mall attractions, modern resorts",
      configurations: "Interactive Wall, Shooting Gallery, Skill Arcade",
      specs: [
        { label: "Category", value: "Interactive Skill" },
        { label: "Sensor Technology", value: "Optical / Piezo Hit Sensors" },
        { label: "Scoring", value: "Real-Time Digital Display" }
      ]
    },

    // D. Indoor Entertainment
    {
      id: "attr-soft-play",
      category: "Indoor Entertainment",
      name: "Soft Play Areas",
      model: "APS-IND-SOFT",
      image: "/images/resort-park.jpg",
      description: "Vibrant, padded indoor soft play structures featuring ball pools, slides, spiral tunnels, foam obstacles, and interactive toddler sensory zones.",
      features: ["Flame-retardant non-toxic vinyl padding", "Anti-climb soft protective netting", "Multi-level modular crawl mazes"],
      applications: "Malls, hotels, resort kids clubs, family entertainment centers",
      configurations: "Compact 500 sq ft to Massive 10,000+ sq ft Complexes",
      specs: [
        { label: "Category", value: "Kids & Family" },
        { label: "Material", value: "High-Density Foam & Commercial PVC" },
        { label: "Age Group", value: "Toddlers to 10 Years" }
      ]
    },
    {
      id: "attr-indoor-adventure",
      category: "Indoor Entertainment",
      name: "Indoor Adventure Zones",
      model: "APS-IND-ADV",
      image: "/images/rope-course.jpg",
      description: "Climate-controlled multi-activity indoor hubs combining elevated rope bridges, indoor ziplines, boulder walls, roll-gliders, and interactive challenge circuits.",
      features: ["Ceiling-suspended structural steel framework", "High-throughput safety harnesses and tracks", "Year-round all-weather operation"],
      applications: "Shopping malls, indoor amusement centers, township clubs",
      configurations: "Custom ceiling height adaptations, multi-attraction zoning",
      specs: [
        { label: "Category", value: "Indoor Active" },
        { label: "Mounting", value: "Building Truss or Free-standing Grid" },
        { label: "Climate", value: "100% Indoor Weatherproof" }
      ]
    },
    {
      id: "attr-trampoline-parks",
      category: "Indoor Entertainment",
      name: "Commercial Trampoline Parks",
      model: "APS-IND-TRAMP",
      image: "/images/engineering-details.jpg",
      description: "Interconnected commercial trampoline arenas complete with angled wall trampolines, foam jump pits, dodgeball courts, and slam dunk basketball zones.",
      features: ["Heavy-duty commercial spring and bed assemblies", "Continuous safety padding across all frame rails", "Reinforced safety perimeter nets"],
      applications: "Commercial leisure facilities, fitness centers, malls",
      configurations: "Free Jump, Foam Pit, Dodgeball Arena, Battle Beam",
      specs: [
        { label: "Category", value: "Active Recreation" },
        { label: "Structure", value: "Heavy-Gauge Galvanized Steel Frame" },
        { label: "Springs", value: "High-Tensile Tapered Steel Springs" }
      ]
    },
    {
      id: "attr-arcade-games",
      category: "Indoor Entertainment",
      name: "Video Games & Arcade Centers",
      model: "APS-IND-ARCADE",
      image: "/images/resort-park.jpg",
      description: "Turnkey planning and installation of family video arcades, VR immersive experiences, simulator pods, prize redemption games, and card-swipe setups.",
      features: ["Turnkey power and data distribution cabling", "Smart card / RFID cashless management system", "Dynamic themed neon & ambient lighting"],
      applications: "Family entertainment centres, resort gaming lounges, malls",
      configurations: "Boutique Lounge to Large Commercial FEC",
      specs: [
        { label: "Category", value: "Digital Entertainment" },
        { label: "System", value: "RFID Cashless Card Management" },
        { label: "Scope", value: "Turnkey Interior & Equipment Setup" }
      ]
    },

    // E. Specialised & Custom Attractions
    {
      id: "attr-zip-coasters",
      category: "Specialised & Custom",
      name: "Zip Coasters & Roll Gliders",
      model: "APS-CUST-COAST",
      image: "/images/zipline-tower-launch.jpg",
      description: "Curved roller coaster style zipline attractions providing guests with dynamic banking turns, undulating drops, and 360-degree helical spins through tree canopies.",
      features: ["Curved rigid pipe rail track", "Custom four-wheel articulated trolley bogies", "Gravity or motorized lift hill options"],
      applications: "Destination theme parks, eco-resort valleys, forest canopies",
      configurations: "Custom terrain-following continuous circuits",
      specs: [
        { label: "Category", value: "Speciality Thrill" },
        { label: "Track Type", value: "Rigid Structural Steel Pipe" },
        { label: "Braking", value: "Magnetic Eddy-Current Terminal Brake" }
      ]
    },
    {
      id: "attr-adventure-towers",
      category: "Specialised & Custom",
      name: "Multi-Activity Adventure Towers",
      model: "APS-CUST-TOWER",
      image: "/images/bungee-tower.jpg",
      description: "Iconic landmark steel towers integrating climbing walls, abseiling faces, zipline launch platforms, free-fall drop devices, and scenic viewing decks in one footprint.",
      features: ["Engineered space-efficient vertical footprint", "Multiple simultaneous activity stations", "Architectural landmark beacon aesthetics"],
      applications: "Resort focal points, adventure parks, commercial waterfronts",
      configurations: "3-Sided, 4-Sided, or Hexagonal Towers, Heights 12m to 35m",
      specs: [
        { label: "Category", value: "Landmark Structure" },
        { label: "Height", value: "12m to 35m Engineered Heights" },
        { label: "Activities", value: "4 to 8 Simultaneous Attractions" }
      ]
    },
    {
      id: "attr-net-parks",
      category: "Specialised & Custom",
      name: "Suspended Canopy Net Parks",
      model: "APS-CUST-NET",
      image: "/images/rope-course.jpg",
      description: "Vast suspended net trampolines and aerial walking webs slung high in forest canopies or between custom steel columns, offering harness-free exploration.",
      features: ["Heavy-duty knotless marine-grade netting", "100% harness-free, fully enclosed safe play", "Multi-room aerial net villages with ball pits"],
      applications: "Eco-tourism forests, botanical gardens, luxury nature resorts",
      configurations: "Tree-to-Tree Suspended Web, Column-Supported Structure",
      specs: [
        { label: "Category", value: "Harness-Free Play" },
        { label: "Netting", value: "High-Tenacity UV-Treated Polypropylene" },
        { label: "Elevation", value: "3m to 12m Forest Canopy" }
      ]
    },
    {
      id: "attr-free-fall",
      category: "Specialised & Custom",
      name: "Free-Fall Drop Experiences",
      model: "APS-CUST-FALL",
      image: "/images/glass-bridge.jpg",
      description: "Controlled vertical free-fall sensations using magnetic eddy-current descent devices, providing a true leap-of-faith drop with gentle touchdown deceleration.",
      features: ["Magnetic eddy-current self-regulating brakes", "Zero-power mechanical reliability", "High-throughput quick-retracting line"],
      applications: "Adventure towers, ropes course exits, amusement parks",
      configurations: "Platform Drops from 8m to 25m",
      specs: [
        { label: "Category", value: "Controlled Drop" },
        { label: "Deceleration", value: "Pure Magnetic Eddy Current" },
        { label: "Fall Height", value: "8m to 25m Drop Heights" }
      ]
    },
    {
      id: "attr-custom-structures",
      category: "Specialised & Custom",
      name: "Custom-Built Adventure Structures",
      model: "APS-CUST-STRUCT",
      image: "/images/glass-bridge.jpg",
      description: "Bespoke architectural thrill structures, suspended glass footbridges, canyon viewing cantilevers, and terrain-specific experiential engineering marvels.",
      features: ["Custom structural FEA stress modeling", "High-altitude cliff anchorage engineering", "Architectural integration with natural landscapes"],
      applications: "Landmark tourism projects, government tourism developments, luxury resorts",
      configurations: "Bespoke custom engineering tailored to client vision",
      specs: [
        { label: "Category", value: "Custom Engineering" },
        { label: "Design", value: "100% Site-Specific Bespoke Design" },
        { label: "Scope", value: "Turnkey Design, Engineering & Execution" }
      ]
    }
  ]
};

export const industriesData = {
  label: "SECTOR EXPERTISE",
  heading: "INDUSTRIES WE SERVE.",
  supportingText: "We engineer customized adventure and recreational infrastructure for diverse client sectors — delivering destinations that drive footfall, engagement, and sustainable returns.",
  industries: [
    {
      id: "ind-hotels-resorts",
      number: "01",
      title: "Hotels & Resorts",
      description: "Low-impact adventure infrastructure designed to harmonize with resort topography, expanding guest amenities and commanding premium room nights."
    },
    {
      id: "ind-tourism-destinations",
      number: "02",
      title: "Adventure Tourism Destinations",
      description: "Iconic high-thrill attractions activating mountain ridges, river ravines, and scenic valleys to create regional tourism magnets."
    },
    {
      id: "ind-amusement-parks",
      number: "03",
      title: "Amusement & Theme Parks",
      description: "High-capacity commercial thrill rides, aerial zip coasters, and custom-engineered towers designed for seamless guest throughput."
    },
    {
      id: "ind-real-estate",
      number: "04",
      title: "Real Estate & Township Developers",
      description: "Recreational adventure hubs and community challenge circuits adding lifestyle value to masterplanned residential townships and commercial plazas."
    },
    {
      id: "ind-education",
      number: "05",
      title: "Schools, Colleges & Universities",
      description: "Safe, developmental obstacle courses and team building infrastructure fostering leadership, fitness, and outdoor education."
    },
    {
      id: "ind-defence",
      number: "06",
      title: "Defence & Institutional Training",
      description: "Heavy-duty commando challenge tracks, military-spec obstacle courses, and tactical confidence towers built for rigorous physical conditioning."
    },
    {
      id: "ind-fec-malls",
      number: "07",
      title: "Shopping Malls & FECs",
      description: "Space-efficient indoor adventure parks, soft play zones, trampoline parks, and digital interactive attractions maximizing retail dwell time."
    },
    {
      id: "ind-eco-tourism",
      number: "08",
      title: "Eco-Tourism & Outdoor Recreation",
      description: "Environmentally sensitive canopy circuits, suspended net parks, and nature trails that leave zero environmental footprint."
    },
    {
      id: "ind-government",
      number: "09",
      title: "Government Tourism Projects",
      description: "Turnkey destination infrastructure for state tourism boards, public recreation authorities, and landmark national park developments."
    },
    {
      id: "ind-corporate",
      number: "10",
      title: "Corporate Recreation & Team Building",
      description: "Dedicated challenge courses, obstacle arenas, and aerial circuits tailored for corporate offsites, problem-solving, and team cohesion."
    }
  ]
};

export const whyChooseData = {
  label: "WHY CHOOSE APS",
  heading: "ONE PARTNER. COMPLETE ADVENTURE INFRASTRUCTURE.",
  supportingText: "At Adventure Park Solutions, we combine engineering rigor, creative conceptualisation, and practical execution to deliver adventure destinations that stand the test of time.",
  capabilities: [
    {
      title: "Single-Source Accountability",
      description: "One unified partner overseeing concept, site assessment, engineering, equipment fabrication, construction, and handover."
    },
    {
      title: "Engineering Precision",
      description: "Rigorous structural calculations, wire rope catenary modeling, dynamic safety factors, and certified foundation engineering."
    },
    {
      title: "Customised Project Planning",
      description: "Attractions designed specifically around client vision, site topography, target audience, and commercial ROI goals."
    },
    {
      title: "Commercial-Grade Fabrication",
      description: "Precision in-house equipment manufacturing, hot-dip galvanized steelwork, and high-tensile hardware for longevity."
    },
    {
      title: "Comprehensive Safety Rigor",
      description: "Strict quality control checklists, proof-load testing, risk assessment, and operator certification manuals."
    },
    {
      title: "Lifecycle Support & Maintenance",
      description: "Dedicated technical support, annual safety audits, component replacement, and attraction expansion roadmaps."
    }
  ]
};

export const projectsData = {
  label: "PROJECTS & PORTFOLIO",
  heading: "Adventure Infrastructure Designed for Remarkable Destinations",
  supportingText: "Explore our portfolio of completed projects, ongoing developments, and conceptual engineering renders for leading commercial destinations.",
  disclaimer: "Representative Adventure Infrastructure Portfolio — clearly distinguishing completed commercial installations from conceptual 3D renders.",
  categories: [
    "All",
    "Completed Projects",
    "Projects Under Execution",
    "Conceptual Designs & 3D Renders",
    "Custom Fabrication",
    "Indoor Entertainment",
    "Outdoor Adventure Parks"
  ],
  projects: [
    {
      id: "proj-resort-zipline",
      title: "Commercial Long-Span Resort Zipline Installation",
      category: "Completed Projects",
      typology: "Valley Flight Corridor",
      specs: "Dual Wire High-Tensile Catenary",
      badge: "Completed Project",
      status: "Completed",
      scope: "Turnkey Engineering, Launch Towers & Commissioning",
      attractions: "Parallel Dual Zipline, Magnetic Brake",
      image: "/images/zipline-tower-launch.jpg",
      description: "High-velocity valley crossing connecting natural ridges with passive magnetic deceleration, engineered for high daily throughput and pristine landscape aesthetics."
    },
    {
      id: "proj-bungee-cliff",
      title: "Cantilever Steel Bungee Thrill Structure",
      category: "Completed Projects",
      typology: "Cantilever Adrenaline Drop",
      specs: "Galvanized Steel Truss Structure",
      badge: "Completed Project",
      status: "Completed",
      scope: "Structural Engineering, Cantilever Platform & Retrieval Winch",
      attractions: "Bungee Jump Platform, Motorized Winch",
      image: "/images/bungee-tower.jpg",
      description: "Custom structural steel cantilever thrill structure engineered for deep natural canyons, equipped with variable-speed motorized guest recovery systems."
    },
    {
      id: "proj-giant-swing-pen",
      title: "High-Amplitude Motorized Giant Swing System",
      category: "Completed Projects",
      typology: "Extreme Pendulum Flight",
      specs: "Harmonic Damping Suspension",
      badge: "Completed Project",
      status: "Completed",
      scope: "Fabrication, Pneumatic Release & Installation",
      attractions: "Multi-Rider Giant Pendulum Swing",
      image: "/images/giant-swing.jpg",
      description: "Automated hoist-and-release giant pendulum swing delivering thrilling 45m gravitational arcs with redundant pivot bearings and safety catch systems."
    },
    {
      id: "proj-park-execution",
      title: "Multi-Activity Outdoor Adventure Park Development",
      category: "Projects Under Execution",
      typology: "Comprehensive Masterplan",
      specs: "Phased Turnkey Execution",
      badge: "Under Execution",
      status: "Under Execution",
      scope: "Site Master Planning, Civil Foundations & Attraction Fabrication",
      attractions: "Ziplines, High Rope Course, Climbing Wall, Giant Swing",
      image: "/images/adventure-park-infrastructure.jpg",
      description: "Comprehensive multi-attraction adventure park under active phased execution, incorporating natural topography, visitor paths, and central ticketing."
    },
    {
      id: "proj-rope-multi",
      title: "Multi-Tier Aerial Obstacle Challenge Course",
      category: "Projects Under Execution",
      typology: "Canopy Challenge Circuit",
      specs: "Continuous Belay Safety Track",
      badge: "Under Execution",
      status: "Under Execution",
      scope: "Structural Pole Erection, Element Assembly & Belay Track",
      attractions: "3-Tier Rope Course, 24 Obstacle Bridges",
      image: "/images/rope-course.jpg",
      description: "Modular elevated obstacle course featuring continuous tracking safety channels, timber crossings, and progressive difficulty circuits."
    },
    {
      id: "proj-glass-render",
      title: "Suspended Structural Glass Bridge & Viewing Platform",
      category: "Conceptual Designs & 3D Renders",
      typology: "Architectural Panoramic Walkway",
      specs: "3D Render & Structural FEA Study",
      badge: "Conceptual 3D Render",
      status: "Conceptual Design",
      scope: "3D Architectural Render, Feasibility & Cable Modeling",
      attractions: "Laminated Glass Walkway, Cantilever Viewing Deck",
      image: "/images/glass-bridge.jpg",
      description: "Conceptual 3D visualization and finite element structural design for a scenic glass footbridge spanning an alpine gorge with tuned mass dampers."
    },
    {
      id: "proj-indoor-fec",
      title: "Integrated Indoor Adventure & Trampoline Park",
      category: "Indoor Entertainment",
      typology: "Indoor Multi-Attraction Hub",
      specs: "Climate-Controlled FEC Setup",
      badge: "Completed Project",
      status: "Completed",
      scope: "Interior Spatial Layout, Soft Play & Trampoline Grid",
      attractions: "Trampoline Arena, Soft Play, Ninja Obstacles",
      image: "/images/resort-park.jpg",
      description: "Complete turnkey indoor family entertainment installation featuring interconnected trampolines, soft play mazes, and child sensory zones."
    },
    {
      id: "proj-hardware-fab",
      title: "Precision Rigging Hardware & Trolley Manufacturing",
      category: "Custom Fabrication",
      typology: "Certified Rigging Components",
      specs: "CNC Aircraft-Grade Alloy",
      badge: "Custom Fabrication",
      status: "Completed",
      scope: "Precision Tooling, Load Testing & Fleet Delivery",
      attractions: "Commercial High-Speed Tandem Trollies, Shackles",
      image: "/images/engineering-details.jpg",
      description: "Specialized in-house CNC machining and metallurgical batch fabrication of high-speed commercial zipline trollies, safety lanyards, and proof-tested shackles."
    }
  ]
};

export const safetyData = {
  label: "SAFETY, ENGINEERING & QUALITY",
  heading: "ENGINEERING RIGOR. UNCOMPROMISING SAFETY.",
  supportingLine: "Every adventure attraction is developed with uncompromising attention to structural integrity, material quality control, verified proof-load testing, and operational discipline.",
  protocols: [
    {
      id: "proto-structural",
      code: "APS-ENG-STR",
      title: "Structural Engineering",
      category: "Structural Integrity",
      scope: "Rigorous civil and structural calculations including dynamic load simulations, wire rope catenary math, foundation anchor design, and wind oscillation analysis."
    },
    {
      id: "proto-materials",
      code: "APS-QAL-MAT",
      title: "Equipment Quality & Material Specifications",
      category: "Material Verification",
      scope: "High-tensile galvanized wire ropes, aircraft-grade alloys, structural steel trusses, and proof-tested rigging hardware with material mill test certificates."
    },
    {
      id: "proto-risk",
      code: "APS-SAF-RSK",
      title: "Risk Assessment",
      category: "Operational Risk Control",
      scope: "Comprehensive pre-construction hazard identification, environmental risk evaluation, terrain fault mapping, and fail-safe redundancy planning."
    },
    {
      id: "proto-safety-sys",
      code: "APS-SAF-SYS",
      title: "Safety Systems & Equipment",
      category: "Personal Protective & Belay",
      scope: "Continuous belay tracking systems, dual-lanyard harness integration, progressive magnetic/spring brakes, and secondary emergency arrestor mechanisms."
    },
    {
      id: "proto-install-qc",
      code: "APS-ENG-QCL",
      title: "Installation Quality Control",
      category: "On-Site Construction QC",
      scope: "Strict milestone-based supervision by seasoned rigging engineers, verifying anchor torque, weld inspections, foundation curing, and cable tension tolerances."
    },
    {
      id: "proto-testing",
      code: "APS-TST-COM",
      title: "Testing & Commissioning",
      category: "Verification Protocols",
      scope: "Calibrated multi-cycle proof-load drop tests, brake deceleration measurements, non-destructive testing, and formal operational handover sign-offs."
    },
    {
      id: "proto-training",
      code: "APS-TRN-OPS",
      title: "Operator Training",
      category: "Staff Capability Building",
      scope: "Hands-on operational training programs covering guest briefing procedures, harness inspection, emergency evacuation drills, and standard operating procedures."
    },
    {
      id: "proto-inspection",
      code: "APS-INS-PER",
      title: "Periodic Inspection",
      category: "Ongoing Compliance",
      scope: "Scheduled annual and semi-annual technical inspections, cable deflection audits, structural re-torque verification, and comprehensive audit reports."
    },
    {
      id: "proto-support",
      code: "APS-SUP-MNT",
      title: "Maintenance & Technical Support",
      category: "Lifecycle Support",
      scope: "Ongoing technical advisory, genuine replacement hardware supply, rapid field response, and attraction modernization support."
    }
  ]
};
// Backward compatibility alias
export const certificationsData = {
  label: safetyData.label,
  heading: safetyData.heading,
  supportingLine: safetyData.supportingLine,
  credentials: safetyData.protocols
};

export const knowledgeData = {
  label: "KNOWLEDGE HUB // ADVENTURE PARK INSIGHTS",
  heading: "PLANNING, ENGINEERING & INVESTMENT GUIDES.",
  supportingText: "Practical guides, technical perspectives, and planning frameworks for resort owners, developers, and operators looking to develop world-class adventure destinations.",
  articles: [
    {
      id: "art-how-to-develop",
      number: "01",
      title: "How to Develop an Adventure Park",
      category: "Development Framework",
      summary: "A step-by-step roadmap for developers — from initial site feasibility and zoning to master planning, equipment selection, and commercial commissioning.",
      keyPoints: ["Feasibility & site appraisal", "Zoning and circulation planning", "Attraction procurement & handover"]
    },
    {
      id: "art-investment-planning",
      number: "02",
      title: "Adventure Park Investment & Planning",
      category: "Business & Feasibility",
      summary: "Financial planning guidelines for adventure destinations: capital expenditure budgeting, revenue modeling, operational overheads, and ROI expectations.",
      keyPoints: ["CapEx breakdown by attraction", "Throughput vs ticketing revenue", "Payback period optimization"]
    },
    {
      id: "art-selecting-attractions",
      number: "03",
      title: "Selecting the Right Adventure Attractions",
      category: "Attraction Mix",
      summary: "How to choose between aerial ziplines, high rope courses, giant swings, and indoor zones based on site topography, visitor profile, and capacity.",
      keyPoints: ["Demographic matching", "Capacity and dwell time analysis", "Terrain-specific attraction choice"]
    },
    {
      id: "art-hotels-resorts",
      number: "04",
      title: "Adventure Parks for Hotels & Resorts",
      category: "Hospitality Integration",
      summary: "Integrating adventure attractions into luxury resorts to enhance guest experience, increase average length of stay, and generate ancillary revenue.",
      keyPoints: ["Low-impact landscape integration", "Exclusive guest experiences", "Operational safety in resort settings"]
    },
    {
      id: "art-indoor-vs-outdoor",
      number: "05",
      title: "Indoor vs Outdoor Adventure Parks",
      category: "Spatial Comparison",
      summary: "Analyzing climate dependency, spatial footprints, structural requirements, and operational dynamics between indoor family centers and outdoor parks.",
      keyPoints: ["Weatherproofing & all-season revenue", "Ceiling load & height requirements", "Comparative maintenance cycles"]
    },
    {
      id: "art-military-courses",
      number: "06",
      title: "Military-Style Obstacle Courses",
      category: "Tactical & Fitness",
      summary: "Designing tactical commando and obstacle challenge courses for institutional training, sports academies, and corporate team building camps.",
      keyPoints: ["Rugged physical conditioning elements", "Safety fall-zone specifications", "Durability for heavy group rotation"]
    },
    {
      id: "art-safety-maintenance",
      number: "07",
      title: "Adventure Park Safety & Maintenance",
      category: "Safety Protocols",
      summary: "Essential lifecycle management protocols: daily operational checklists, periodic wire rope audits, proof-load re-testing, and staff emergency training.",
      keyPoints: ["Daily vs annual inspection audits", "Wire rope catenary maintenance", "Emergency evacuation preparedness"]
    }
  ]
};

export const founderData = {
  label: "LEADERSHIP & ENGINEERING PHILOSOPHY",
  heading: "Meet the Vision Behind ADVENTURE PARK SOLUTIONS",
  supportingLine: "Three decades of specialized adventure infrastructure engineering, high-altitude rigging, and turnkey destination leadership.",
  founder: {
    name: "Satnam Singh",
    designation: "Founder & Technical Director",
    organization: "ADVENTURE PARK SOLUTIONS (APS)",
    heritage: "Adventure Infrastructure Engineering (Est. 1995)",
    intro: "Pioneering commercial adventure infrastructure, long-span wire rope systems, and integrated adventure park developments across India and Asia.",
    biography: [
      "With a foundation in technical rigging and adventure infrastructure established in 1995, Satnam Singh brings three decades of practical execution to adventure destination development, combining challenging terrain with engineering precision.",
      "His technical leadership spans structural integrity, load safety planning, specialized catenary calculations, and turnkey adventure installations — from resort zipline systems and bungee towers to large-scale commercial adventure parks."
    ],
    quote: "True adventure infrastructure begins long before the first wire rope is tensioned—it lives in the millimeter tolerances of civil anchorages, the math of dynamic deceleration, and an absolute commitment to safety and engineering excellence.",
    signature: "Satnam Singh",
    portrait: null,
    stats: [
      { value: "30+ Years", label: "Industry Legacy (Est. 1995)" },
      { value: "100%", label: "Turnkey Single-Source Delivery" },
      { value: "Engineering", label: "Structural & Rigging Oversight" }
    ]
  }
};

export const processData = {
  label: "OUR APPROACH",
  heading: "FROM FIRST IDEA TO REAL-WORLD EXPERIENCE.",
  supportingText: "Our structured project methodology ensures structural precision, commercial safety, and transparent execution from initial concept to final commissioning.",
  steps: [
    {
      step: "01",
      phase: "Concept & Requirements",
      title: "Understand the Vision",
      description: "We understand the client's concept, site vision, attraction objectives, target audience, and project scope before formulating a suitable plan."
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
      title: "Project Delivery & Training",
      description: "Complete full proof-load testing, system commissioning, operational documentation handover, and staff procedural training."
    }
  ]
};

export const contactData = {
  label: "START A DISCUSSION",
  heading: "REQUEST A PROJECT PROPOSAL.",
  supportingText: "Have an adventure infrastructure or park development project in mind? Share your project parameters and our engineering team will provide a tailored proposal.",
  ctaButton: "SUBMIT PROPOSAL REQUEST",
  projectTypes: [
    "Turnkey Adventure Park Development",
    "Zipline Design & Installation",
    "Sky Cycle & Aerial Cable Rides",
    "Giant Swing Systems",
    "Bungee Jumping Infrastructure",
    "High Rope & Challenge Courses",
    "Military & Commando Obstacle Courses",
    "Target & Skill-Based Ranges",
    "Indoor Entertainment & Soft Play",
    "Trampoline Park Installation",
    "Zip Coaster / Custom Aerial Ride",
    "Adventure Tower / Glass Sky Bridge",
    "Other Custom Adventure Infrastructure"
  ],
  budgetRanges: [
    "Under ₹25 Lakhs / Exploration",
    "₹25 Lakhs – ₹50 Lakhs",
    "₹50 Lakhs – ₹1 Crore",
    "₹1 Crore – ₹3 Crores",
    "₹3 Crores – ₹5 Crores+",
    "International / Custom Scale"
  ],
  contactPoints: [
    {
      label: "B2B Project Consultation",
      value: "Direct coordination for resort owners, developers, theme parks & institutions"
    },
    {
      label: "Geographic Coverage",
      value: "Turnkey adventure infrastructure across India, Asia & International markets"
    },
    {
      label: "Core Philosophy",
      value: "From an Idea to an Attraction. From an Attraction to an Adventure Destination."
    }
  ]
};

export const footerData = {
  wordmark: "ADVENTURE PARK SOLUTIONS",
  shortName: "APS",
  tagline: "Engineering Experiences. Building Adventures.",
  positioning: "Complete Adventure Infrastructure Solutions Company",
  closingMessage: "From an Idea to an Attraction. From an Attraction to an Adventure Destination.",
  intro: "Adventure Park Solutions is a complete adventure infrastructure solutions company specialising in the conceptualisation, design, engineering, fabrication and installation of adventure and recreational attractions.",
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About Us", href: "#about" },
    { label: "Our Solutions", href: "#solutions" },
    { label: "Adventure Attractions", href: "#products" },
    { label: "Industries We Serve", href: "#industries" },
    { label: "Projects & Portfolio", href: "#projects" },
    { label: "Safety & Engineering", href: "#safety" },
    { label: "Knowledge Hub", href: "#knowledge" },
    { label: "Contact Us", href: "#contact" }
  ],
  solutionsLinks: [
    { label: "Concept & Feasibility Studies", href: "#solutions" },
    { label: "Master Planning & 3D Design", href: "#solutions" },
    { label: "Aerial Ziplines & Sky Cycles", href: "#products" },
    { label: "Obstacle & Challenge Courses", href: "#products" },
    { label: "Indoor Entertainment Zones", href: "#products" },
    { label: "Bungee & Giant Swing Systems", href: "#products" },
    { label: "Equipment Design & Fabrication", href: "#solutions" },
    { label: "Complete Turnkey Development", href: "#solutions" }
  ],
  copyright: `© ${new Date().getFullYear()} ADVENTURE PARK SOLUTIONS (APS). All rights reserved. Complete Adventure Infrastructure Solutions Company.`
};
