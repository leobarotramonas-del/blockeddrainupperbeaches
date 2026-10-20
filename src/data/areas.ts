interface Seed {name:string;postcode:string;property:string;landmark:string;intro:string;localIssue:string;access:string;diagnosis:string;repair:string;focus:string[];neighbours:string[];questions:[string,string][]}
const seeds:Seed[]= [
  {
    "name": "Hornsby",
    "postcode": "2077",
    "property": "Town-centre buildings and shared drains",
    "landmark": "Storey Park",
    "intro": "A Hornsby drain call can involve a shop, apartment or established house. Start with the affected fixtures and property type, then explain whether access is from the street, a loading area or a common service corridor.",
    "localIssue": "Shared branches, concealed connections and heavily used amenities can complicate the distinction between a local obstruction and a building drain restriction",
    "access": "Arrange a building contact, clarify loading access and basement height restrictions, and identify service-room keys. Do not enter flooded plant areas",
    "diagnosis": "Compare symptoms across amenities, establish safe access and trace the restriction before selecting mechanical clearing or jetting. CCTV can document an accessible recurring fault and identify the section needing attention.",
    "repair": "A clear unit waste does not prove the shared line is sound. Discuss damaged common pipework and authorisation with the responsible contact before opening finishes or excavating.",
    "focus": [
      "sewer-drain-blockages",
      "cctv-drain-inspections",
      "blocked-toilets"
    ],
    "neighbours": [
      "waitara",
      "asquith",
      "wahroonga"
    ],
    "questions": [
      [
        "Should I ask other occupants about their drains?",
        "Reports from the same stack can help distinguish a fixture problem from a shared restriction. Do not ask anyone to keep flushing as a test."
      ],
      [
        "Can an office remain open during clearing?",
        "That depends on containment and safe access. Keep affected amenities out of use and agree temporary restrictions with the building contact."
      ]
    ]
  },
  {
    "name": "Gordon",
    "postcode": "2072",
    "property": "Renovated homes and apartment connections",
    "landmark": "Annie Forsyth Wyatt Garden",
    "intro": "In Gordon, a recently fitted kitchen may still empty into older underground drainage. Describe the age of the renovation, which wastes are slow and whether the problem also appears at an outside gully.",
    "localIssue": "Shared drains may carry several sources of wastewater, while an older house can have original and renewed pipework connected together",
    "access": "For an apartment building, provide the unit, level, loading entrance and manager’s contact. At a house, describe side access and any extension that changed the drainage route",
    "diagnosis": "Identify the affected fixtures and whether symptoms coincide with use elsewhere. A trap may need careful cleaning; a recurring common-line restriction may warrant jetting and camera inspection once visibility improves.",
    "repair": "New fixtures can discharge into older underground pipes. Locating a damaged transition or joint provides a more useful repair scope than repeatedly treating the newest bathroom.",
    "focus": [
      "blocked-sinks-showers",
      "sewer-drain-blockages",
      "cctv-drain-inspections"
    ],
    "neighbours": [
      "killara",
      "pymble",
      "st-ives"
    ],
    "questions": [
      [
        "Does a new bathroom rule out old drainage?",
        "No. Renovation may replace fixtures while retaining buried branches. Plans and renovation dates can help explain the connections."
      ],
      [
        "What if only my apartment is affected?",
        "A local waste or branch is possible, but this alone cannot establish ownership or fault location. Describe other fixtures and let assessment determine the section."
      ]
    ]
  },
  {
    "name": "Turramurra",
    "postcode": "2074",
    "property": "Garden lines and mature tree roots",
    "landmark": "Turramurra Memorial Park",
    "intro": "A repeat blockage at a Turramurra house deserves more than another blind clear. Tell us about previous root cutting, garden changes and any inspection openings beside the house or further down the block.",
    "localIssue": "Mature vegetation, changes in level and garden works can make roots, displaced joints or retained sediment worth investigating",
    "access": "Describe side-gate width, rear-yard steps, pets and the last visible inspection opening. Drainage plans help where landscaping hides the original route",
    "diagnosis": "Establish whether sewer or stormwater is affected, then assess an accessible opening. Suitable jetting can remove deposits; a camera can distinguish root entry from a section holding water.",
    "repair": "Root cutting is maintenance clearing. If an opening remains, discuss repair access and the garden separately. Restored flow does not mean the underground defect has closed.",
    "focus": [
      "tree-root-blockages",
      "stormwater-drains",
      "drain-repairs"
    ],
    "neighbours": [
      "south-turramurra",
      "north-turramurra",
      "warrawee"
    ],
    "questions": [
      [
        "Do garden trees automatically mean a root blockage?",
        "No. Roots need an entry point, and grease, wipes or damage can cause similar symptoms. Inspection provides stronger evidence than proximity alone."
      ],
      [
        "Should I uncover a buried opening?",
        "Describe where you believe it is and provide existing plans. Avoid digging around unknown services or lifting heavy covers yourself."
      ]
    ]
  },
  {
    "name": "East Lindfield",
    "postcode": "2070",
    "property": "Sloping gardens and stormwater routes",
    "landmark": "Wellington Road",
    "intro": "For an East Lindfield property with a sloping garden, water collecting at the bottom of the block does not identify the restriction. Describe when it appears, its direction of travel and which accessible pits remain full after rain.",
    "localIssue": "Sloping blocks, mature gardens and constrained paths can affect equipment access and investigation of repeated stormwater or sewer backups",
    "access": "Mention stairs, steep driveways, retaining walls and lower garden levels. Identify safe parking and locked gates before a hose or camera route is planned",
    "diagnosis": "Compare rain-related ponding with fixture-related backup, inspect accessible pits and trace the relevant line. Extraction or jetting may suit sediment; CCTV helps investigate a damaged connection or persistent restriction.",
    "repair": "Clearing a pit cannot correct every outlet or layout problem. If flow still struggles after deposits are removed, assess the route, fall and downstream conditions before proposing changes.",
    "focus": [
      "stormwater-drains",
      "high-pressure-water-jetting",
      "drain-repairs"
    ],
    "neighbours": [
      "lindfield",
      "east-killara",
      "roseville-chase"
    ],
    "questions": [
      [
        "Why does the lower terrace flood first?",
        "It may collect runoff or sit near a restricted drain. Report water direction and whether the problem occurs only during rain; position alone does not identify the fault."
      ],
      [
        "Can equipment be taken down garden stairs?",
        "Suitability depends on width, grade, footing and equipment weight. Describe the route before attendance so a safe approach can be assessed."
      ]
    ]
  },
  {
    "name": "Waitara",
    "postcode": "2077",
    "property": "Strata branches and common drainage",
    "landmark": "Waitara Park",
    "intro": "A Waitara apartment backup needs the unit and level as well as a street address. Reports from neighbouring units can help establish whether a single branch or a shared drain needs attention; arrange a building contact if common access is required.",
    "localIssue": "Shared stacks, compact service spaces and restricted parking can influence diagnosis and the practical clearing route",
    "access": "Provide unit and entry instructions, common-area access and parking restrictions. Keep contaminated corridors or service areas clear",
    "diagnosis": "Start with the accessible fixture and branch, then move downstream if several outlets are involved. Mechanical tools may suit a local restriction; common lines may need controlled jetting and camera evidence.",
    "repair": "Restoring one fixture may leave a common-line defect unresolved. Findings should identify the inspected section and limits so the responsible contact can consider a separate repair.",
    "focus": [
      "blocked-sinks-showers",
      "sewer-drain-blockages",
      "cctv-drain-inspections"
    ],
    "neighbours": [
      "hornsby",
      "wahroonga",
      "asquith"
    ],
    "questions": [
      [
        "Should strata be contacted before the visit?",
        "For suspected shared drainage, strata can arrange keys and clarify approval. If wastewater is overflowing, call promptly while coordinating access."
      ],
      [
        "Is a kitchen gurgle always a blocked sink?",
        "No. It may reflect a downstream restriction or another plumbing issue. Report whether it occurs when your sink or a different fixture is used."
      ]
    ]
  },
  {
    "name": "Lindfield",
    "postcode": "2070",
    "property": "Apartments and managed service access",
    "landmark": "Airman’s Park",
    "intro": "When arranging a Lindfield apartment drain visit, describe the service entrance as carefully as the symptoms. A blocked waste in one unit may need access elsewhere in the building, and a clear route for equipment saves confusion at arrival.",
    "localIssue": "Shared branches, concealed openings and restricted equipment routes can require access beyond the affected unit",
    "access": "Provide the unit, entry instructions, any loading restrictions and the building contact. Identify known service openings and mention pumps or alarms without entering flooded rooms",
    "diagnosis": "Distinguish affected fixtures and gravity drainage from other building systems. After establishing access, select equipment for the line and use CCTV where useful to document visible conditions.",
    "repair": "A pump alarm should not automatically be treated as a pipe obstruction. Identify the relevant system and scope before assuming jetting or replacement will solve the problem.",
    "focus": [
      "sewer-drain-blockages",
      "cctv-drain-inspections",
      "high-pressure-water-jetting"
    ],
    "neighbours": [
      "east-lindfield",
      "roseville",
      "killara"
    ],
    "questions": [
      [
        "What should a facilities manager prepare?",
        "Drainage plans, keys, affected tenancy and level, incident timing and safe observations of alarms. Clarify who can approve investigation of common services."
      ],
      [
        "Will jetting resolve every basement problem?",
        "No. The issue may involve a restriction, damaged connection or separate pumped system. Equipment and scope follow assessment rather than location alone."
      ]
    ]
  },
  {
    "name": "Roseville",
    "postcode": "2069",
    "property": "Established homes and altered branches",
    "landmark": "Hill Street",
    "intro": "A Roseville home can have drainage changed by several renovations. If a sink or shower repeatedly slows, explain which rooms were altered and whether the original buried branches were retained. A camera finding can help locate the problem before paving is opened.",
    "localIssue": "Older connections, confined yards and mixed residential buildings can leave branch routes less obvious than the visible fixture position suggests",
    "access": "Describe the narrowest path, gates, common courtyards and rear entrances. Arrange access if equipment must pass through another part of the building",
    "diagnosis": "Work from the symptom to a suitable opening rather than assuming the shortest pipe route. Compact tools may clear a branch; a camera can trace recurring restrictions before repair planning.",
    "repair": "On a tight site, locating the defect reduces unnecessary opening of paving or floors. Clearing, excavation and reinstatement should be explained as separate scopes.",
    "focus": [
      "blocked-sinks-showers",
      "cctv-drain-inspections",
      "drain-repairs"
    ],
    "neighbours": [
      "roseville-chase",
      "lindfield",
      "east-lindfield"
    ],
    "questions": [
      [
        "Can the drain run under an extension?",
        "It can, depending on previous work. Plans and renovation history help. A locator may relate a camera finding to the present building footprint."
      ],
      [
        "What if there is no side access?",
        "Explain this before booking. Alternative access may be possible, depending on the pipe and openings. Do not remove fixtures or paving simply to create access."
      ]
    ]
  },
  {
    "name": "Killara",
    "postcode": "2071",
    "property": "Older pipework beneath renewed homes",
    "landmark": "Abbotsholme Glen",
    "intro": "For an established Killara house, the age of a bathroom tells only part of the drainage story. Older garden lines and renewed branches may meet below ground; recurring symptoms need assessment of those connections as well as the visible fixture.",
    "localIssue": "Mixed pipe ages, mature trees and altered fixture layouts create several plausible explanations for repeat blockages",
    "access": "Keep renovation drawings available and describe new paving or extensions. Identify accessible inspection openings without removing covers or entering contaminated areas",
    "diagnosis": "Compare known old and new fixture routes, establish the blocked section and clear appropriately. Camera inspection may reveal an open joint, roots or a connection retaining debris after flow returns.",
    "repair": "The newest fixture is not necessarily the failed component. Base repair on the located defect and compatible materials, with excavation and reinstatement discussed before agreement.",
    "focus": [
      "tree-root-blockages",
      "cctv-drain-inspections",
      "drain-repairs"
    ],
    "neighbours": [
      "east-killara",
      "gordon",
      "lindfield"
    ],
    "questions": [
      [
        "Why did symptoms begin after renovation?",
        "Timing is evidence, not proof. Changed usage, debris or an older downstream restriction are possibilities. Explain what changed and when symptoms appeared."
      ],
      [
        "Can old and new pipe sections be joined?",
        "Repairs require appropriate compatible fittings and support. The plumber assesses the actual materials and connection rather than assuming all pipework needs replacement."
      ]
    ]
  },
  {
    "name": "Pymble",
    "postcode": "2073",
    "property": "Shared connections and equipment access",
    "landmark": "Grandview Street",
    "intro": "At a Pymble unit or townhouse, establish whether the affected waste serves just your property or connects with neighbouring homes. Keep common gates accessible and provide plans if they show a shared line beneath a driveway or landscaped area.",
    "localIssue": "Common lines, older private connections and narrow equipment routes can require coordination before clearing",
    "access": "For apartments arrange a common-area contact and basement access. At a house, describe gate width, steps and the position of known openings",
    "diagnosis": "Assess local fixtures with trap tools or a compact machine where suitable. Wider symptoms move investigation towards the shared line, where jetting and camera inspection may reveal a recurring cause.",
    "repair": "Tie camera findings to a location and inspected section. This separates branch maintenance from repair of a damaged line serving other parts of the property.",
    "focus": [
      "blocked-toilets",
      "blocked-sinks-showers",
      "sewer-drain-blockages"
    ],
    "neighbours": [
      "west-pymble",
      "gordon",
      "turramurra"
    ],
    "questions": [
      [
        "Does an outdoor overflow mean my toilet is faulty?",
        "Not necessarily. The opening may relieve a restriction elsewhere. Stop connected water use and report all affected outlets instead of repeatedly flushing."
      ],
      [
        "Can a small drain machine work in an apartment?",
        "It may suit an accessible branch. Pipe size, obstruction, condition and working space determine whether compact equipment or a different access point is appropriate."
      ]
    ]
  },
  {
    "name": "Warrawee",
    "postcode": "2074",
    "property": "House extensions and retained drains",
    "landmark": "Turramurra Memorial Park",
    "intro": "An extended Warrawee home may retain drainage beneath newer rooms or paving. Explain whether the blockage began after building work or has returned over several years, and keep any drainage drawings available for investigation.",
    "localIssue": "Mature vegetation, older joints and sloping land make root entry or displaced sections possibilities to investigate",
    "access": "Describe driveway grade, side steps and walls above the suspected route. Secure pets and provide a safe path to known inspection points",
    "diagnosis": "Establish whether the lowest outlet is restricted or simply where backup emerges. After suitable clearing, CCTV can examine joints and retained water; locating can mark a suspected fault at the surface.",
    "repair": "Surface slope does not prove adequate pipe fall. Persistent water or a displaced section needs interpretation before choosing maintenance clearing or structural repair.",
    "focus": [
      "tree-root-blockages",
      "cctv-drain-inspections",
      "drain-repairs"
    ],
    "neighbours": [
      "wahroonga",
      "turramurra",
      "south-turramurra"
    ],
    "questions": [
      [
        "Does a steep block mean drains clear themselves?",
        "No. Buried pipes may contain low sections despite the surface slope. Actual route and condition matter more than street grade."
      ],
      [
        "Can a fault be located under a retaining wall?",
        "A camera sonde and locator may help where access and signal allow. Safe excavation still needs separate consideration of the wall and surrounding services."
      ]
    ]
  },
  {
    "name": "North Turramurra",
    "postcode": "2074",
    "property": "Long garden runs and changing levels",
    "landmark": "Curagul Road",
    "intro": "A North Turramurra garden drain may be a considerable distance from the street entrance. Give the route through gates and steps, identify the last known access point and explain whether backup follows rainfall or use of indoor fixtures.",
    "localIssue": "Terraced yards and retaining structures can hide drainage routes or direct surface water towards low points",
    "access": "Mention stairs, steep drives, gates and walls beside the line. Describe lower yards from a safe position rather than entering floodwater",
    "diagnosis": "Separate runoff from sewer backup and inspect accessible pits or openings. Extraction and jetting may remove sediment; camera and locating work help assess inaccessible recurring faults.",
    "repair": "A blocked pipe and an unsuitable stormwater route are different problems. Test restored flow and define any wall-adjacent repair separately rather than assuming clearing fixes the layout.",
    "focus": [
      "stormwater-drains",
      "cctv-drain-inspections",
      "drain-repairs"
    ],
    "neighbours": [
      "turramurra",
      "st-ives-chase",
      "north-wahroonga"
    ],
    "questions": [
      [
        "Should I divert overflow down the slope?",
        "Do not redirect wastewater towards neighbours or public areas. Stop connected water use and call. Rainwater also needs care around walls and electrical equipment."
      ],
      [
        "Why is rear access important?",
        "It determines how hoses, cameras and repair equipment can be handled. Steps, turns and retaining walls may make the shortest route unsuitable."
      ]
    ]
  },
  {
    "name": "St Ives",
    "postcode": "2075",
    "property": "Leaf litter and rain-related ponding",
    "landmark": "Acron Oval",
    "intro": "When a St Ives driveway pit stays full after rain, note whether the surface grate is clear and whether nearby pits are also holding water. Leaves at the surface can coexist with silt or a damaged connection further along the line.",
    "localIssue": "Tree cover and changes in level can coincide with older pipe defects, while apartment access may depend on management",
    "access": "Arrange shared-area keys and explain parking, stairs and lower-garden access. Note whether multiple units or fixtures are affected",
    "diagnosis": "Start with the extent of backup, then establish a suitable clearing opening. If recurrence warrants it, inspect joints and root entry with CCTV and relate findings to a repair position using a locator.",
    "repair": "Root removal can restore flow without sealing the entry point. Pass shared-line evidence and proposed repair access to the responsible contact, separating immediate clearing from later work.",
    "focus": [
      "sewer-drain-blockages",
      "tree-root-blockages",
      "cctv-drain-inspections"
    ],
    "neighbours": [
      "st-ives-chase",
      "gordon",
      "east-killara"
    ],
    "questions": [
      [
        "Can roots affect a shared apartment line?",
        "They can enter defective buried sections through existing openings. Shared drainage is not automatically protected, but inspection is needed to confirm the cause."
      ],
      [
        "What should I report about a lower-level backup?",
        "Give the level, fixture and whether it rises when other water is used. Mention adjoining-unit reports, stop testing and isolate the contaminated area."
      ]
    ]
  },
  {
    "name": "Asquith",
    "postcode": "2077",
    "property": "Shared buildings and busy drainage",
    "landmark": "Amor Street Park",
    "intro": "An Asquith drain assessment starts with the use of the property: a house, workplace or shared building can present different access and approval needs. Describe the affected amenities and whether other occupants report the same problem.",
    "localIssue": "Compact layouts and changes in ground level can complicate the route between a fixture, inspection point and downstream connection",
    "access": "Describe steps, passage width, shared gates and parking. Arrange the relevant contact where access crosses common property",
    "diagnosis": "Identify the accessible branch and other affected fixtures. Toilet-safe or compact tools may suit a local blockage; deeper restrictions may need another opening and a camera to understand the route.",
    "repair": "Accurate location matters in confined spaces. Account for neighbouring services and reinstatement rather than assuming excavation beside the affected fixture will expose the defect.",
    "focus": [
      "blocked-toilets",
      "cctv-drain-inspections",
      "drain-repairs"
    ],
    "neighbours": [
      "hornsby",
      "waitara",
      "north-wahroonga"
    ],
    "questions": [
      [
        "Can the nearest opening always be used?",
        "Only after its connection and safe use are established. An opening may serve a shared or different line. Do not remove covers to experiment."
      ],
      [
        "Should I arrange a shared gate key?",
        "Yes, if the likely route uses it. Provide a contact who can open the gate and clarify restrictions on entering the common passage."
      ]
    ]
  },
  {
    "name": "Wahroonga",
    "postcode": "2076",
    "property": "Townhouse and shared-property drainage",
    "landmark": "Wahroonga Park",
    "intro": "For a Wahroonga townhouse or apartment, an outdoor overflow may sit on a common drainage route. Identify the affected fixtures and arrange the owner or strata contact who can open shared gates and authorise investigation.",
    "localIssue": "Common drainage and locked garden access can make coordination with other occupants necessary",
    "access": "Arrange common-area keys, a clear equipment route and an authorised contact. Mention any stairs or narrow gates between the entrance and drainage access",
    "diagnosis": "Consider reports from the affected stack or branch, establish safe access and select clearing equipment. Camera findings relate to the inspected section rather than certifying the whole building.",
    "repair": "A successful apartment flow test does not certify every common pipe. Explain inaccessible sections and defects so management can decide on further inspection or a separately scoped repair.",
    "focus": [
      "sewer-drain-blockages",
      "cctv-drain-inspections",
      "blocked-sinks-showers"
    ],
    "neighbours": [
      "warrawee",
      "north-wahroonga",
      "waitara"
    ],
    "questions": [
      [
        "Can reception arrange a drain visit?",
        "Reception can help with entry, but clarify who authorises work on common drainage. Have the manager or strata contact available if the fault extends beyond the unit."
      ],
      [
        "Can a camera inspect every branch?",
        "Only the accessible agreed route. Bends, standing water and pipe condition may limit visibility; these limits should be explained with the findings."
      ]
    ]
  },
  {
    "name": "East Killara",
    "postcode": "2071",
    "property": "Established paving and garden access",
    "landmark": "Allan Small Oval",
    "intro": "An East Killara line beneath established paving needs its fault located before a repair can be sensibly scoped. Tell us about repeated clearing, changes to the garden and any previous camera findings, including sections that could not be inspected.",
    "localIssue": "Older connections, confined paths and slopes can influence where backup appears and how repairs can be reached",
    "access": "Mention narrow passages, heritage finishes, shared gates and parking. Provide drainage records if available and arrange access through common areas",
    "diagnosis": "Start with affected fixtures and available openings, clear a suitable obstruction and investigate recurrence. Locating can position a camera finding before any excavation is discussed.",
    "repair": "Where established fabric would be disturbed, a defined repair location and reinstatement plan matter. Immediate clearing and planned underground repair are distinct tasks.",
    "focus": [
      "cctv-drain-inspections",
      "drain-repairs",
      "sewer-drain-blockages"
    ],
    "neighbours": [
      "killara",
      "east-lindfield",
      "st-ives"
    ],
    "questions": [
      [
        "Must old paving be lifted immediately?",
        "Not automatically. Inspection and locating may first establish whether a defect lies beneath it. Opening surfaces should follow evidence and an agreed scope."
      ],
      [
        "What if my neighbour also has slow drains?",
        "Mention it during the call. This may help trace shared drainage, but it does not establish responsibility or the exact restriction without assessment."
      ]
    ]
  },
  {
    "name": "Roseville Chase",
    "postcode": "2069",
    "property": "Lower garden levels and runoff",
    "landmark": "Echo Point Park",
    "intro": "On a Roseville Chase block with lower garden levels, distinguish water arriving during rain from a gully backing up during indoor use. Report what you can safely observe and describe steps or narrow paths between the road and the drain.",
    "localIssue": "Established drainage and changing ground levels can make the source of water less obvious than the place it collects",
    "access": "Describe stair-only routes, locked passages and lower levels. Keep away from flooded electrical or service areas and arrange the property contact",
    "diagnosis": "Distinguish rainfall collection from wastewater return and trace the affected section from suitable access. Jetting or extraction may address deposits; CCTV can inspect repeat faults after visibility is restored.",
    "repair": "Clearing does not change the level or route of a drain. Persistent ponding may need pipe repair or further layout investigation, with access and reinstatement included in the scope.",
    "focus": [
      "stormwater-drains",
      "sewer-drain-blockages",
      "cctv-drain-inspections"
    ],
    "neighbours": [
      "roseville",
      "east-lindfield",
      "lindfield"
    ],
    "questions": [
      [
        "Is courtyard water always stormwater?",
        "No. Note whether it follows rain or indoor use without touching it. Wastewater needs people and pets kept away, regardless of where it appears."
      ],
      [
        "Can a lower courtyard be reached from the street?",
        "It depends on the actual gates and steps. Describe the route rather than its straight-line distance so equipment handling can be considered."
      ]
    ]
  },
  {
    "name": "St Ives Chase",
    "postcode": "2075",
    "property": "Leafy blocks and recurring root entry",
    "landmark": "Wanganella Road",
    "intro": "Repeated root clearing at a St Ives Chase property can restore flow while leaving an opening in the pipe. Keep earlier findings and dates available so the next inspection can examine the entry point and distinguish maintenance from repair.",
    "localIssue": "Mature roots, slopes and concealed openings can make repeat clearing incomplete without investigating entry points or retained debris",
    "access": "Arrange common-garden access and a strata contact. Mention walls, steps, gates and inspection points shown on existing plans",
    "diagnosis": "Establish the affected section and clear with equipment suited to its condition. Following root removal, a camera may show an opening; locating relates the finding to the garden surface.",
    "repair": "Roots can be removed while the defect remains. Discuss evidence, location, excavation access and authorisation separately from routine maintenance clearing.",
    "focus": [
      "tree-root-blockages",
      "cctv-drain-inspections",
      "drain-repairs"
    ],
    "neighbours": [
      "st-ives",
      "north-turramurra",
      "turramurra"
    ],
    "questions": [
      [
        "Who arranges common-garden access?",
        "The owner, strata contact or manager should identify access arrangements and authorisation. Mention locked gates or landscaped inspection points."
      ],
      [
        "Will root cutting require garden excavation?",
        "Clearing is attempted through suitable access where available. Excavation is a separate option for a located defect; its impact should be discussed before agreement."
      ]
    ]
  },
  {
    "name": "South Turramurra",
    "postcode": "2074",
    "property": "Private garden drains and slopes",
    "landmark": "Turramurra Memorial Park",
    "intro": "At a South Turramurra home, a low outdoor overflow can be the first sign of a restriction further down the line. Mention previous blockages, retaining walls and known drainage routes under driveways so access can be planned around the actual property.",
    "localIssue": "Established pipework and level changes can involve displaced joints, root entry or sediment, but symptoms alone cannot confirm the cause",
    "access": "Describe driveway grade, rear steps, side access, pets and retaining walls. Note whether inspection openings remain visible after landscaping",
    "diagnosis": "Identify connected fixtures and suitable access, then clear where the pipe permits. CCTV and locating can distinguish repeat obstruction from a failed section requiring repair.",
    "repair": "Opening a narrow flow path can provide temporary relief. Displaced pipework or poor fall warrants a separate repair discussion, including what is known and what remains inaccessible.",
    "focus": [
      "sewer-drain-blockages",
      "tree-root-blockages",
      "drain-repairs"
    ],
    "neighbours": [
      "turramurra",
      "west-pymble",
      "warrawee"
    ],
    "questions": [
      [
        "Does a previous successful clear rule out damage?",
        "No. Damaged pipe can flow after obstruction removal and block again. Explain how long relief lasted and whether the symptoms are identical."
      ],
      [
        "Why mention a driveway above the drain?",
        "It affects access and reinstatement if repair is required. The suspected defect should be located and assessed before disturbing the surface."
      ]
    ]
  },
  {
    "name": "North Wahroonga",
    "postcode": "2076",
    "property": "Garden access and concealed pipe routes",
    "landmark": "Wahroonga Park",
    "intro": "For a North Wahroonga property with concealed garden pipework, describe known inspection points rather than guessing where the drain runs. Trees, walls and garden changes are useful access information, but camera evidence is needed to establish the fault.",
    "localIssue": "Garden routes and longer buried sections can conceal root entry, joint movement or points where debris settles",
    "access": "Describe gates, steps, inspection openings and easements shown on plans. Mention landscaping or access shared with another property",
    "diagnosis": "Compare fixture symptoms with outdoor observations and establish access to the line. Jetting can remove suitable deposits; camera inspection and locating can identify a repeated fault along a longer run.",
    "repair": "Distance from the house does not dictate replacement. Target a confirmed failed section where appropriate and explain inspection limits and access constraints.",
    "focus": [
      "high-pressure-water-jetting",
      "cctv-drain-inspections",
      "drain-repairs"
    ],
    "neighbours": [
      "wahroonga",
      "north-turramurra",
      "asquith"
    ],
    "questions": [
      [
        "Should I provide an easement plan?",
        "Yes, if available. It can clarify routes and access arrangements, but the actual line and agreed scope still need on-site assessment."
      ],
      [
        "Does a long drain need full replacement?",
        "Not necessarily. Evidence may identify a local defect or a need for further inspection. Length alone does not justify replacement."
      ]
    ]
  },
  {
    "name": "West Pymble",
    "postcode": "2073",
    "property": "Rear-yard lines and landscape changes",
    "landmark": "Applegum Way",
    "intro": "A West Pymble rear-yard blockage may involve a line hidden by later landscaping. Share the history of earlier clearing and any plans showing inspection openings. The equipment route and repair location matter when the drain runs behind a home.",
    "localIssue": "Private runs through mature gardens may need joints, root entry and recurring debris collection points checked carefully",
    "access": "Provide gate widths, driveway conditions, pets and known openings. Mention garden structures or walls that could restrict hoses or repair equipment",
    "diagnosis": "Identify the system and practical openings before selecting cleaning equipment. For roots or an uncertain route, CCTV and locating can connect internal evidence to a specific garden position.",
    "repair": "Maintenance root cutting and repair of the entry point serve different purposes. Agree materials, excavation access and reinstatement before treating the whole garden route as a replacement job.",
    "focus": [
      "tree-root-blockages",
      "high-pressure-water-jetting",
      "drain-repairs"
    ],
    "neighbours": [
      "pymble",
      "south-turramurra",
      "gordon"
    ],
    "questions": [
      [
        "What should I say about previous root clearing?",
        "Explain when it occurred, the access used and how long flow remained normal. Existing footage is useful, but current condition still needs assessment."
      ],
      [
        "Do wide gardens guarantee equipment access?",
        "No. Gates, steps, soft ground and landscaping can restrict the route. Describe its narrowest or steepest section, not just the size of the block."
      ]
    ]
  }
];
export const areas=seeds.map(a=>{const slug=a.name.toLowerCase().replaceAll(' ','-');return {...a,slug,title:`Blocked Drains ${a.name} NSW ${a.postcode}`,description:`Blocked drains in ${a.name} ${a.postcode}: ${a.property.toLowerCase()}. Diagnosis, access and repair guidance. Call to confirm coverage.`,image:a.focus[0]==='tree-root-blockages'?'/images/blocked-drain-excavation.webp':'/images/drain-camera-inspection.webp',imageAlt:a.focus[0]==='tree-root-blockages'?'Antons drain plumber exposing underground pipework':'Antons drain camera equipment used to inspect pipework',localOrientation:`When using ${a.landmark} as a nearby reference, give the full street address and the entrance to use. Coverage and attendance are confirmed for the individual property.`,faqs:[...a.questions.map(([question,answer])=>({question,answer})),{question:`How is a recurring blockage investigated in ${a.name}?`,answer:a.diagnosis},{question:`What access details matter for a ${a.name} visit?`,answer:a.access+'. Coverage is confirmed by full street address.'},{question:`Will clearing resolve the underlying problem in ${a.name}?`,answer:a.repair},{question:`How do I arrange an urgent call in ${a.name} ${a.postcode}?`,answer:`Call 0493 824 176 with the full ${a.name} address, affected fixtures and urgency. Calls are taken 24/7; current coverage and the next available response are confirmed individually. Stop connected water use and keep people away from wastewater.`}]};});
