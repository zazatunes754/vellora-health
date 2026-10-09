/* Vellora Health — central demonstration content.
   All clinical content is illustrative demo copy, not medical advice. */

export interface Service {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  image: string;
  intro: string;
  whoFor: string[];
  expect: { title: string; text: string }[];
  reasons: string[];
  closing: string;
}

export const serviceCategories = [
  "All",
  "Heart & circulation",
  "Brain & nerves",
  "Bones & movement",
  "Women & children",
  "Everyday care",
  "Tests & prevention",
] as const;

export const services: Service[] = [
  {
    slug: "cardiology",
    name: "Cardiology",
    category: "Heart & circulation",
    tagline: "Attentive heart care, from first concern to long-term plan.",
    image: "/images/hero.jpg",
    intro:
      "Our cardiology service focuses on understanding your heart health in context — your symptoms, your history, your lifestyle, and your worries. Consultations are unhurried, explanations are plain-spoken, and every investigation is chosen because it will genuinely change your care, not because it is routine.",
    whoFor: [
      "People experiencing chest discomfort, palpitations, breathlessness, or unexplained fatigue",
      "Anyone with high blood pressure, high cholesterol, or a family history of heart disease",
      "Patients seeking a second opinion on a cardiac finding or treatment plan",
      "Adults who want a structured, medically guided heart-health review",
    ],
    expect: [
      { title: "A conversation first", text: "Your appointment begins with listening — your symptoms, timeline, medications, and what matters most to you." },
      { title: "Focused assessment", text: "Examination and, where appropriate, tests such as ECG, echocardiography, rhythm monitoring, or exercise assessment." },
      { title: "A plan you understand", text: "Findings explained in everyday language, with written next steps and space for your questions." },
      { title: "Joined-up follow-up", text: "Results reviewed with you directly, and your referring clinician kept informed with your consent." },
    ],
    reasons: [
      "Chest pain, tightness, or pressure",
      "Palpitations or an irregular pulse",
      "Shortness of breath on exertion",
      "Blood pressure management",
      "Cholesterol and cardiovascular risk review",
      "Pre-operative cardiac assessment",
    ],
    closing:
      "If you are experiencing severe chest pain, collapse, or signs of a stroke, please seek emergency care immediately rather than booking a routine appointment.",
  },
  {
    slug: "neurology",
    name: "Neurology",
    category: "Brain & nerves",
    tagline: "Clear thinking about complex neurological concerns.",
    image: "/images/neuro.jpg",
    intro:
      "Neurological symptoms — headaches, dizziness, numbness, tremor, memory changes — can be unsettling precisely because they are hard to describe. Our neurology consultations give you time to describe what you feel in your own words, supported by careful examination and access to modern neuroimaging and nerve studies.",
    whoFor: [
      "People with recurrent headache or migraine seeking a structured diagnosis",
      "Anyone experiencing numbness, tingling, weakness, tremor, or balance problems",
      "Patients with concerns about memory, concentration, or cognitive change",
      "Those referred for interpretation of a neurological finding or scan",
    ],
    expect: [
      { title: "Detailed history-taking", text: "Neurological diagnosis rests on your story. We take the time to hear it fully." },
      { title: "Systematic examination", text: "A thorough assessment of nerves, strength, coordination, reflexes, and cognition." },
      { title: "Appropriate investigations", text: "MRI, CT, EEG, or nerve conduction studies arranged only when they will guide decisions." },
      { title: "Honest, paced guidance", text: "Where conditions are long-term, we plan around your life — work, family, and independence." },
    ],
    reasons: [
      "Headache and migraine",
      "Dizziness, vertigo, and balance difficulties",
      "Numbness, tingling, or nerve pain",
      "Tremor and movement concerns",
      "Memory and concentration concerns",
      "Seizure assessment and follow-up",
    ],
    closing:
      "Sudden weakness, speech difficulty, facial droop, or the worst headache of your life are emergencies — please seek urgent care without delay.",
  },
  {
    slug: "orthopaedics",
    name: "Orthopaedics",
    category: "Bones & movement",
    tagline: "Move with confidence again, one careful step at a time.",
    image: "/images/surgery-team.jpg",
    intro:
      "From sports injuries to arthritic joints, our orthopaedic service pairs careful diagnosis with realistic, staged treatment plans. Surgery is discussed only when conservative care — physiotherapy, medication, targeted injections, activity modification — has been properly considered first.",
    whoFor: [
      "People with persistent joint, back, or neck pain",
      "Sports injuries, sprains, fractures, and recovery after injury",
      "Patients considering joint replacement or arthroscopic procedures",
      "Anyone wanting a second opinion on an orthopaedic recommendation",
    ],
    expect: [
      { title: "Movement-focused assessment", text: "How you move matters as much as how you image. Expect hands-on examination of strength, range, and gait." },
      { title: "Imaging with judgement", text: "X-ray, ultrasound, or MRI arranged when the result will change the plan — and explained image by image." },
      { title: "Conservative care first", text: "Structured physiotherapy and rehabilitation plans before any discussion of intervention." },
      { title: "Straightforward surgical counsel", text: "If a procedure is appropriate, you will hear the benefits, risks, recovery timeline, and alternatives in plain terms." },
    ],
    reasons: [
      "Knee, hip, and shoulder pain",
      "Back and neck pain",
      "Sports injuries and ligament concerns",
      "Fractures and post-injury review",
      "Arthritis assessment and management",
      "Joint replacement counselling",
    ],
    closing:
      "After a significant injury with deformity, inability to bear weight, or loss of sensation, please attend urgent care promptly.",
  },
  {
    slug: "womens-health",
    name: "Women's Health",
    category: "Women & children",
    tagline: "Care that listens to women, at every stage of life.",
    image: "/images/newborn.jpg",
    intro:
      "Women's health deserves longer appointments and genuine listening. Our service covers gynaecological concerns, reproductive health, pregnancy guidance, menopause care, and preventive screening — delivered by clinicians who explain options without rushing you toward any single path.",
    whoFor: [
      "Routine well-woman reviews and cervical screening discussions",
      "Menstrual concerns, pelvic pain, or hormonal questions",
      "Preconception counselling and early pregnancy guidance",
      "Perimenopause and menopause symptom management",
    ],
    expect: [
      { title: "Unhurried, private consultations", text: "Your concerns set the agenda. Sensitive examinations are explained step by step, with a chaperone always available." },
      { title: "Screening made simple", text: "Clear guidance on which screenings suit your age and history, and help arranging them." },
      { title: "Whole-life perspective", text: "Care that connects adolescence, reproductive years, and menopause into one continuous conversation." },
      { title: "Respect for your choices", text: "Options are presented with benefits and trade-offs. Decisions remain yours." },
    ],
    reasons: [
      "Well-woman reviews and screening advice",
      "Menstrual and hormonal concerns",
      "Pelvic pain and endometriosis assessment",
      "Contraception counselling",
      "Menopause care",
      "Preconception and early pregnancy guidance",
    ],
    closing:
      "Heavy bleeding with dizziness, severe sudden pelvic pain, or pregnancy with concerning symptoms should be assessed urgently.",
  },
  {
    slug: "paediatrics",
    name: "Paediatrics",
    category: "Women & children",
    tagline: "Gentle, patient-centred care for children — and their parents.",
    image: "/images/paeds.jpg",
    intro:
      "Children are not small adults, and worried parents need answers, not jargon. Our paediatric consultations move at a child's pace, with play-friendly rooms, clinicians experienced in putting young patients at ease, and clear guidance that respects parents as partners in care.",
    whoFor: [
      "Newborn and infant reviews, feeding, and growth concerns",
      "Recurrent infections, asthma, allergies, and skin conditions",
      "Developmental and behavioural questions",
      "Second opinions on a child's diagnosis or treatment plan",
    ],
    expect: [
      { title: "Child-paced appointments", text: "Time to settle, to play, and to be heard — children included in the conversation at their level." },
      { title: "Parents as partners", text: "You know your child best. We combine your observations with clinical assessment." },
      { title: "Growth and development focus", text: "Milestones, nutrition, sleep, and school readiness discussed alongside any illness." },
      { title: "Clear escalation guidance", text: "You will leave knowing exactly which symptoms warrant a call back — and how to reach us." },
    ],
    reasons: [
      "Newborn and infant concerns",
      "Fever, infections, and recurrent illness",
      "Asthma, allergy, and eczema",
      "Growth and feeding questions",
      "Developmental reviews",
      "Vaccination guidance discussions",
    ],
    closing:
      "If a child is struggling to breathe, unusually drowsy, dehydrated, or has a non-fading rash with fever, seek urgent care immediately.",
  },
  {
    slug: "internal-medicine",
    name: "Internal Medicine",
    category: "Everyday care",
    tagline: "One thoughtful physician for the whole picture.",
    image: "/images/doc-tablet.jpg",
    intro:
      "When symptoms overlap, test results conflict, or several conditions need managing together, internal medicine brings the pieces into one coherent plan. Your physician coordinates across specialties so nothing falls between appointments.",
    whoFor: [
      "Adults with multiple or overlapping health conditions",
      "Persistent symptoms without a clear diagnosis",
      "Diabetes, thyroid, hypertension, and metabolic concerns",
      "Comprehensive adult health reviews",
    ],
    expect: [
      { title: "Whole-person review", text: "Medications, history, lifestyle, and all current symptoms considered together." },
      { title: "Diagnostic coordination", text: "Investigations sequenced sensibly, with results gathered into one clear summary." },
      { title: "Medication review", text: "A careful look at everything you take — and whether each item still earns its place." },
      { title: "Specialist liaison", text: "Referrals made with a proper clinical handover, and findings folded back into your plan." },
    ],
    reasons: [
      "Complex or overlapping symptoms",
      "Diabetes and metabolic care",
      "Thyroid disorders",
      "Hypertension management",
      "Fatigue and unexplained symptoms",
      "Adult health reviews",
    ],
    closing:
      "Internal medicine works best as an ongoing relationship — bring your full medication list and prior reports to your first visit.",
  },
  {
    slug: "diagnostics",
    name: "Diagnostics & Imaging",
    category: "Tests & prevention",
    tagline: "Answers you can trust, explained in words you understand.",
    image: "/images/diagnostics.jpg",
    intro:
      "Good decisions need good information. Our diagnostics service brings laboratory testing and medical imaging together with calm, well-organised appointments — and results that are explained to you, not just filed away.",
    whoFor: [
      "Patients referred for blood tests, imaging, or cardiac diagnostics",
      "Anyone seeking a structured executive-style health check",
      "Pre-employment and preventive screening investigations",
      "Second-look review of outside test results",
    ],
    expect: [
      { title: "Organised, on-time appointments", text: "Preparation instructions in advance, minimal waiting, and a calm testing environment." },
      { title: "Modern modalities", text: "Digital X-ray and ultrasound, ECG and rhythm monitoring, echocardiography, and comprehensive laboratory panels." },
      { title: "Results with meaning", text: "A clinician reviews findings with you and explains what each result does — and does not — signify." },
      { title: "Secure reporting", text: "Reports shared with your referring clinician with your consent, and copies available to you." },
    ],
    reasons: [
      "Laboratory blood panels",
      "Digital X-ray and ultrasound",
      "ECG and heart rhythm monitoring",
      "Echocardiography",
      "Preventive screening packages",
      "Pre-procedure investigations",
    ],
    closing:
      "Some tests need fasting or preparation — we will confirm exactly what to do before you arrive.",
  },
  {
    slug: "preventive-care",
    name: "Preventive Health",
    category: "Tests & prevention",
    tagline: "Stay ahead of illness with a plan built around you.",
    image: "/images/wellness.jpg",
    intro:
      "The best treatment is the one you never need. Preventive health at Vellora means structured screening, lifestyle medicine grounded in evidence, and vaccination guidance — assembled into a personal plan that fits your age, risk, and reality.",
    whoFor: [
      "Adults due for age-appropriate health screening",
      "People with family histories of heart disease, diabetes, or cancer",
      "Anyone wanting structured lifestyle and weight-management guidance",
      "Busy professionals seeking an annual health review",
    ],
    expect: [
      { title: "Risk assessment first", text: "Family history, lifestyle, and baseline measures shape which screenings make sense for you." },
      { title: "Screening without excess", text: "Evidence-based checks — no battery of low-value tests, no alarm without cause." },
      { title: "Lifestyle medicine", text: "Practical guidance on movement, sleep, nutrition, and stress that respects your actual life." },
      { title: "A living plan", text: "Your prevention plan is reviewed yearly and adjusted as evidence and circumstances change." },
    ],
    reasons: [
      "Annual health reviews",
      "Cardiovascular risk screening",
      "Diabetes risk assessment",
      "Cancer-screening guidance",
      "Lifestyle and weight counselling",
      "Vaccination guidance",
    ],
    closing:
      "Screening detects risk early — it does not guarantee future health. We will always explain both the value and the limits of each test.",
  },
  {
    slug: "physiotherapy",
    name: "Physiotherapy & Rehabilitation",
    category: "Bones & movement",
    tagline: "Recover strength, restore movement, rebuild confidence.",
    image: "/images/physio.jpg",
    intro:
      "Recovery is a partnership. Our physiotherapists assess how you move, design progressive exercise programmes, and use hands-on therapy where it helps — always with measurable goals, so you can feel progress week by week.",
    whoFor: [
      "Post-injury and post-surgical rehabilitation",
      "Back, neck, and persistent musculoskeletal pain",
      "Sports performance and return-to-play programmes",
      "Balance, strength, and falls-prevention for older adults",
    ],
    expect: [
      { title: "Movement assessment", text: "Strength, flexibility, balance, and function measured at baseline — in plain terms." },
      { title: "Personal exercise plan", text: "A progressive programme designed for your home, gym, or workplace — not a photocopied sheet." },
      { title: "Hands-on care where indicated", text: "Manual therapy and modalities used judiciously, alongside active rehabilitation." },
      { title: "Measured milestones", text: "Re-assessment at set intervals so you can see — not just feel — your improvement." },
    ],
    reasons: [
      "Sports injuries",
      "Post-surgical rehabilitation",
      "Back and neck pain",
      "Joint stiffness and arthritis support",
      "Balance and falls prevention",
      "Work-related strain",
    ],
    closing:
      "Wear comfortable clothing to your sessions, and bring any imaging or surgical reports you already have.",
  },
  {
    slug: "urgent-care",
    name: "Urgent Care",
    category: "Everyday care",
    tagline: "Prompt attention when something cannot wait.",
    image: "/images/surgery-light.jpg",
    intro:
      "Some concerns cannot wait for a routine slot. Our urgent-care information helps you decide the right level of care quickly — same-day clinical assessment for pressing problems, and clear direction to emergency services when minutes matter.",
    whoFor: [
      "High fever, severe pain, or rapidly worsening symptoms",
      "Minor injuries, cuts, sprains, and suspected fractures",
      "Concerning new symptoms that need same-day assessment",
      "Visitors unsure where to seek care",
    ],
    expect: [
      { title: "Rapid triage", text: "Your concern is assessed promptly and directed to the right level of care." },
      { title: "Same-day assessment", text: "Urgent slots held each day for problems that cannot safely wait." },
      { title: "Stabilise and refer", text: "When hospital-level care is needed, we stabilise and coordinate onward referral." },
      { title: "Follow-up arranged", text: "Urgent visits include a clear follow-up plan with your regular clinician." },
    ],
    reasons: [
      "High or persistent fever",
      "Severe or worsening pain",
      "Cuts, sprains, and minor injuries",
      "Breathing difficulty (seek emergency care)",
      "Chest pain (seek emergency care)",
      "Signs of stroke (seek emergency care)",
    ],
    closing:
      "This demonstration page describes illustrative services only. In a real emergency, always call your local emergency number first.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

/* ---------------- Specialists ---------------- */
export interface Specialist {
  slug: string;
  name: string;
  role: string;
  specialty: string;
  specialtyLabel: string;
  image: string;
  focus: string[];
  bio: string[];
  languages: string[];
  clinicDays: string;
}

export const specialists: Specialist[] = [
  {
    slug: "amara-osei",
    name: "Dr. Amara Osei",
    role: "Consultant Cardiologist",
    specialty: "cardiology",
    specialtyLabel: "Cardiology",
    image: "/images/doc-f1.jpg",
    focus: ["Preventive cardiology", "Hypertension", "Heart failure care", "Cardiac risk assessment"],
    bio: [
      "Dr. Osei is known for consultations that never feel rushed. Her approach centres on helping patients understand their own cardiovascular risk — and what, realistically, can change it.",
      "She has a particular interest in preventive cardiology and in supporting patients who arrive anxious after an unexpected finding, guiding them from uncertainty to a clear, staged plan.",
    ],
    languages: ["English", "French"],
    clinicDays: "Monday, Wednesday, Friday",
  },
  {
    slug: "daniel-kessler",
    name: "Dr. Daniel Kessler",
    role: "Consultant Neurologist",
    specialty: "neurology",
    specialtyLabel: "Neurology",
    image: "/images/doc-m1.jpg",
    focus: ["Headache & migraine", "Movement concerns", "Nerve disorders", "Cognitive assessment"],
    bio: [
      "Dr. Kessler believes the most important neurological instrument is careful listening. His assessments are methodical, and his explanations deliberately free of jargon.",
      "He works closely with imaging and rehabilitation colleagues so that patients with long-term neurological conditions receive one coherent plan rather than fragmented opinions.",
    ],
    languages: ["English", "German"],
    clinicDays: "Tuesday, Thursday, Saturday",
  },
  {
    slug: "rafael-marin",
    name: "Dr. Rafael Marin",
    role: "Consultant Orthopaedic Surgeon",
    specialty: "orthopaedics",
    specialtyLabel: "Orthopaedics",
    image: "/images/doc-m2.jpg",
    focus: ["Knee & hip care", "Sports injuries", "Arthritis management", "Joint replacement counselling"],
    bio: [
      "Dr. Marin is a firm believer that most orthopaedic problems improve without an operation — and that patients deserve to hear that honestly.",
      "When surgery is genuinely the best option, he is known for meticulous preparation, realistic recovery timelines, and close coordination with physiotherapy from day one.",
    ],
    languages: ["English", "Spanish"],
    clinicDays: "Monday, Tuesday, Thursday",
  },
  {
    slug: "priya-natarajan",
    name: "Dr. Priya Natarajan",
    role: "Consultant in Women's Health",
    specialty: "womens-health",
    specialtyLabel: "Women's Health",
    image: "/images/doc-f2.jpg",
    focus: ["Well-woman care", "Menopause management", "Menstrual disorders", "Preconception counselling"],
    bio: [
      "Dr. Natarajan has built her practice around longer appointments and genuine dialogue. Patients frequently remark that it is the first time they have felt fully heard about long-standing concerns.",
      "Her care spans adolescence through menopause, with an emphasis on evidence-based options presented without pressure.",
    ],
    languages: ["English", "Hindi", "Tamil"],
    clinicDays: "Monday, Wednesday, Saturday",
  },
  {
    slug: "jonas-weber",
    name: "Dr. Jonas Weber",
    role: "Consultant Paediatrician",
    specialty: "paediatrics",
    specialtyLabel: "Paediatrics",
    image: "/images/doc-m3.jpg",
    focus: ["Newborn & infant care", "Childhood asthma & allergy", "Growth & development", "Recurrent infections"],
    bio: [
      "Dr. Weber's consulting room is designed around children — unhurried, play-friendly, and free of white-coat ceremony.",
      "He treats parents as expert partners, combining their observations with careful clinical assessment, and is known for follow-up guidance that tells families exactly when to call back.",
    ],
    languages: ["English", "German"],
    clinicDays: "Tuesday, Friday, Saturday",
  },
  {
    slug: "lena-fischer",
    name: "Dr. Lena Fischer",
    role: "Consultant in Internal Medicine",
    specialty: "internal-medicine",
    specialtyLabel: "Internal Medicine",
    image: "/images/nurse-f1.jpg",
    focus: ["Complex diagnosis", "Diabetes & metabolic care", "Medication review", "Care coordination"],
    bio: [
      "Dr. Fischer specialises in patients whose stories do not fit a single specialty — overlapping symptoms, conflicting results, and long medication lists.",
      "Her reviews are comprehensive and structured, and she is valued for the clarity of the written summaries patients take home after every visit.",
    ],
    languages: ["English", "German", "French"],
    clinicDays: "Monday through Friday",
  },
  {
    slug: "samuel-adebayo",
    name: "Dr. Samuel Adebayo",
    role: "Consultant Radiologist",
    specialty: "diagnostics",
    specialtyLabel: "Diagnostics & Imaging",
    image: "/images/doc-m4.jpg",
    focus: ["Cardiac & general ultrasound", "Diagnostic interpretation", "Screening imaging", "Second-look reviews"],
    bio: [
      "Dr. Adebayo leads diagnostic imaging with a simple conviction: a test is only as good as the explanation that follows it.",
      "He reviews findings directly with patients where appropriate and provides referring clinicians with reports written for decisions, not archives.",
    ],
    languages: ["English"],
    clinicDays: "Monday, Wednesday, Thursday",
  },
  {
    slug: "sofia-lindqvist",
    name: "Dr. Sofia Lindqvist",
    role: "Lead Physiotherapist",
    specialty: "physiotherapy",
    specialtyLabel: "Physiotherapy",
    image: "/images/doc-tablet.jpg",
    focus: ["Sports rehabilitation", "Post-surgical recovery", "Back & neck pain", "Strength & balance"],
    bio: [
      "Sofia Lindqvist designs rehabilitation around real life — the stairs you climb, the sport you love, the work you do.",
      "Her programmes are progressive and measurable, and she is known for honest timelines: steady, visible progress rather than quick fixes.",
    ],
    languages: ["English", "Swedish"],
    clinicDays: "Tuesday through Saturday",
  },
];

export const getSpecialist = (slug: string) => specialists.find((s) => s.slug === slug);

/* ---------------- Articles ---------------- */
export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
}

export const articleCategories = ["All", "Heart health", "Mind & brain", "Movement", "Prevention", "Family health"] as const;

export const articles: Article[] = [
  {
    slug: "understanding-blood-pressure",
    title: "Blood pressure, explained calmly: what the numbers actually mean",
    category: "Heart health",
    date: "12 March 2026 (illustrative)",
    readTime: "6 min read",
    image: "/images/stethoscope.jpg",
    excerpt: "Systolic, diastolic, and everything in between — a plain-language guide to readings, risk, and sensible next steps.",
    intro:
      "Few numbers cause more quiet anxiety than a blood pressure reading slightly above target. This guide explains what the figures mean, why single readings mislead, and how clinicians think about blood pressure over time.",
    sections: [
      {
        heading: "What the two numbers describe",
        body: [
          "The upper (systolic) figure reflects the pressure when your heart contracts; the lower (diastolic) reflects the resting pressure between beats. Both matter, and both vary naturally through the day — with stress, caffeine, activity, and even the unfamiliarity of a clinic room.",
          "That is why clinicians rarely act on a single reading. Patterns across days and contexts tell the real story.",
        ],
      },
      {
        heading: "Why one high reading is not a diagnosis",
        body: [
          "A solitary elevated reading is common and often explained by timing, technique, or temporary factors. Home and ambulatory monitoring exist precisely to separate fleeting spikes from sustained elevation.",
          "If you measure at home, sit quietly for five minutes first, support your arm at heart level, and record the context alongside the number.",
        ],
      },
      {
        heading: "What genuinely moves the needle",
        body: [
          "Regular movement, steadier sleep, moderate alcohol, not smoking, and a diet rich in vegetables and whole foods remain the most powerful levers — more influential, for most people, than any single food or supplement.",
          "Medication, when recommended, is a tool rather than a failure. Modern blood pressure treatment is typically simple, well tolerated, and reviewed regularly.",
        ],
      },
      {
        heading: "When to seek advice promptly",
        body: [
          "Book a routine review if repeated readings run above your agreed target. Seek urgent care for severely elevated readings accompanied by chest pain, breathlessness, neurological symptoms, or visual changes.",
        ],
      },
    ],
  },
  {
    slug: "headaches-when-to-worry",
    title: "Headaches: sorting the common from the concerning",
    category: "Mind & brain",
    date: "28 February 2026 (illustrative)",
    readTime: "5 min read",
    image: "/images/neuro.jpg",
    excerpt: "Most headaches are benign but miserable. Here is how clinicians think about patterns — and the red flags that deserve urgent attention.",
    intro:
      "Headaches are among the most common reasons people seek neurological advice, and among the most varied. Understanding patterns — timing, triggers, associated symptoms — is the first step toward the right help.",
    sections: [
      {
        heading: "Common patterns clinicians recognise",
        body: [
          "Tension-type headaches typically feel like a band of pressure on both sides, often building through the day. Migraine tends to be one-sided and throbbing, frequently with nausea or sensitivity to light and sound, and sometimes preceded by visual aura.",
          "A headache diary — timing, duration, possible triggers, response to rest or medication — is one of the most useful things you can bring to an appointment.",
        ],
      },
      {
        heading: "Everyday measures that help",
        body: [
          "Regular sleep, steady hydration, regular meals, and limits on caffeine and alcohol reduce frequency for many people. Screen posture and uncorrected vision are worth addressing too.",
          "Frequent use of painkillers can itself perpetuate headaches — another reason a structured review beats self-treatment that escalates.",
        ],
      },
      {
        heading: "Red flags that need urgent care",
        body: [
          "Seek immediate care for a sudden, severe 'worst ever' headache, headache with fever and neck stiffness, new headache after head injury, or headache with weakness, speech change, vision loss, confusion, or seizure.",
        ],
      },
    ],
  },
  {
    slug: "back-pain-first-steps",
    title: "Back pain: sensible first steps before you worry",
    category: "Movement",
    date: "14 February 2026 (illustrative)",
    readTime: "7 min read",
    image: "/images/physio.jpg",
    excerpt: "Most back pain settles with time and movement. A physiotherapist's view on what helps, what harms, and when to get assessed.",
    intro:
      "Back pain interrupts work, sleep, and mood — yet most episodes are mechanical, self-limiting, and best managed with movement rather than rest. Here is how rehabilitation specialists approach the first weeks.",
    sections: [
      {
        heading: "Keep moving, wisely",
        body: [
          "Prolonged bed rest usually worsens back pain. Gentle, frequent movement — short walks, position changes, and light activity as tolerated — supports recovery better than stillness.",
          "Heat often eases muscular pain. Over-the-counter measures may help short term, but escalating doses without review deserve a clinical conversation.",
        ],
      },
      {
        heading: "What physiotherapy actually does",
        body: [
          "Assessment first: how you move, where strength or flexibility is limited, and which activities provoke symptoms. Then a progressive plan — targeted exercise, manual therapy where indicated, and advice on work setup and sleep positions.",
          "Imaging is not always needed. Scans show age-related changes in most adults, with or without pain — which is why clinical assessment, not pictures alone, guides treatment.",
        ],
      },
      {
        heading: "When assessment should not wait",
        body: [
          "Seek prompt care for back pain with leg weakness, numbness around the saddle area, bladder or bowel changes, unexplained weight loss, fever, or pain following significant trauma.",
        ],
      },
    ],
  },
  {
    slug: "annual-health-review",
    title: "What a good annual health review should include",
    category: "Prevention",
    date: "30 January 2026 (illustrative)",
    readTime: "5 min read",
    image: "/images/wellness.jpg",
    excerpt: "Not a battery of low-value tests, but a structured conversation: risk, screening, lifestyle, and a plan for the year ahead.",
    intro:
      "Annual reviews work best when they are personal. Age, family history, lifestyle, and prior results should shape the agenda — not a one-size-fits-all panel of tests.",
    sections: [
      {
        heading: "Start with risk, not tests",
        body: [
          "A good review begins with your story: family history, blood pressure, weight trends, sleep, activity, smoking, alcohol, and mood. These shape which screenings are genuinely worthwhile.",
          "Bring a list of all medications and supplements, recent results from elsewhere, and any symptoms you have been meaning to mention.",
        ],
      },
      {
        heading: "Screening with judgement",
        body: [
          "Evidence supports targeted screening — blood pressure, cholesterol and diabetes risk, age-appropriate cancer screening discussions — rather than exhaustive panels that generate anxiety without benefit.",
          "Ask your clinician two questions about any proposed test: will the result change what we do, and what happens if it is borderline?",
        ],
      },
      {
        heading: "Leave with a plan",
        body: [
          "The output of a review should be a short written plan: what was checked, what comes next, and which single lifestyle change matters most for you this year. Small, sustained changes outperform ambitious overhauls.",
        ],
      },
    ],
  },
  {
    slug: "child-fever-guide",
    title: "Childhood fever: a calm parent's guide",
    category: "Family health",
    date: "18 January 2026 (illustrative)",
    readTime: "6 min read",
    image: "/images/paeds.jpg",
    excerpt: "Fever is a symptom, not a disease. How to assess, what comforts, and the signs that mean calling your clinician.",
    intro:
      "Few things worry parents like a feverish child at midnight. Understanding what fever is — the body's normal response to infection — helps you respond calmly and spot the exceptions that matter.",
    sections: [
      {
        heading: "Assess the child, not just the number",
        body: [
          "Clinicians weigh behaviour alongside temperature: is your child alert, drinking fluids, and breathing comfortably? A playful child with a moderate fever is generally less concerning than a listless one with a mild temperature.",
          "Keep a simple log — temperature, time, fluids, wet nappies or toilet visits, and any other symptoms — to share if you call for advice.",
        ],
      },
      {
        heading: "Comfort measures",
        body: [
          "Offer fluids frequently, dress your child lightly, and keep the room comfortable. Fever-reducing medicines can improve comfort but do not treat the underlying cause — follow dosing guidance carefully and avoid alternating medicines without advice.",
        ],
      },
      {
        heading: "When to call promptly",
        body: [
          "Seek prompt care for fever in infants under three months, difficulty breathing, unusual drowsiness, persistent vomiting, signs of dehydration, a non-fading rash, seizures, or any fever that worries you despite these pages. Trust your instincts — clinicians would rather reassure you than meet you later.",
        ],
      },
    ],
  },
  {
    slug: "sleep-heart-connection",
    title: "Sleep and the heart: the overlooked vital sign",
    category: "Heart health",
    date: "5 January 2026 (illustrative)",
    readTime: "5 min read",
    image: "/images/consult.jpg",
    excerpt: "Short, fragmented sleep is linked with higher cardiovascular risk. Practical, realistic steps toward steadier nights.",
    intro:
      "Sleep rarely features in heart conversations, yet consistently short or fragmented sleep is associated with higher blood pressure and cardiovascular risk. The encouraging news: small routine changes often help meaningfully.",
    sections: [
      {
        heading: "Why sleep matters to the heart",
        body: [
          "During deep sleep, heart rate and blood pressure dip — a nightly reset for the cardiovascular system. Habitually short sleep curtails that recovery and often travels with higher stress hormones, weight gain, and blood pressure.",
          "Loud habitual snoring with daytime sleepiness can signal sleep apnoea, which deserves clinical assessment rather than stoic endurance.",
        ],
      },
      {
        heading: "Habits worth trying first",
        body: [
          "A consistent wake time, morning daylight, daytime movement, and a wind-down hour without work or bright screens form the foundation. Limit caffeine after midday and alcohol near bedtime — both fragment sleep architecture.",
          "If sleeplessness persists despite steady habits, or you gasp, choke, or stop breathing at night, discuss it at your next review.",
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

/* ---------------- FAQs ---------------- */
export interface Faq { q: string; a: string; cat: string; }

export const faqCategories = ["All", "Appointments", "Services & care", "Preparing for your visit", "Practical & admin", "Privacy"] as const;

export const faqs: Faq[] = [
  { cat: "Appointments", q: "How do I request an appointment?", a: "Use the appointment enquiry form and tell us your preferred specialty, dates, and contact method. Our demonstration team would confirm availability and offer you a time. The online form is an enquiry only — nothing is booked until it is confirmed with you directly." },
  { cat: "Appointments", q: "Can I choose a specific specialist?", a: "Yes. You can name a preferred clinician on the appointment form. If they are unavailable on your dates, we will offer the earliest suitable alternative and always confirm with you first." },
  { cat: "Appointments", q: "What if I need to reschedule?", a: "Contact us as early as you can using the details on your confirmation. Routine appointments can normally be moved without charge when you give reasonable notice." },
  { cat: "Appointments", q: "Do you offer same-day or urgent appointments?", a: "A number of urgent slots are held each day for pressing concerns. Describe your symptoms honestly on the form or by phone so they can be triaged appropriately. In an emergency, always call your local emergency number first." },
  { cat: "Services & care", q: "Which specialties does Vellora cover?", a: "Our demonstration directory includes cardiology, neurology, orthopaedics, women's health, paediatrics, internal medicine, diagnostics and imaging, preventive health, physiotherapy, and urgent-care guidance. Each service page explains what to expect." },
  { cat: "Services & care", q: "Will my regular doctor be kept informed?", a: "With your consent, yes. Summaries and results are shared with your referring clinician so your care stays joined up rather than fragmented across providers." },
  { cat: "Services & care", q: "Do you provide second opinions?", a: "Yes — second opinions on a diagnosis, scan, or treatment recommendation are a routine part of our specialty clinics. Bring prior reports and imaging so the review is meaningful." },
  { cat: "Preparing for your visit", q: "What should I bring to my appointment?", a: "Photo identification, your medication list (including doses), prior test results or imaging, referral letters, and a short note of your symptoms and questions. For children, bring vaccination records and growth charts if you have them." },
  { cat: "Preparing for your visit", q: "Should I fast before blood tests?", a: "Some tests require fasting and others do not. We confirm preparation instructions — fasting, hydration, medication timing — when your appointment is arranged, so you never have to guess." },
  { cat: "Preparing for your visit", q: "Can a family member join my consultation?", a: "Absolutely. You are welcome to bring a companion, and interpreters or chaperones can be arranged on request. Just mention it when booking so the appointment is set up appropriately." },
  { cat: "Practical & admin", q: "How much will my care cost?", a: "Costs depend on the specialty, the clinician, and the investigations your situation genuinely needs. Our pricing page shows clearly labelled illustrative examples, and you always receive a written estimate before any planned investigation or procedure." },
  { cat: "Practical & admin", q: "Is the building accessible?", a: "Our demonstration facility description includes step-free access, accessible consultation rooms, hearing-loop support on request, and assistance for visitors with reduced mobility. Tell us your needs in advance and we will prepare accordingly." },
  { cat: "Practical & admin", q: "What are the opening hours?", a: "Illustrative hours are Monday to Friday, 9:00–18:00, and Saturday, 8:00–16:00, with urgent slots held daily. Public-holiday arrangements are confirmed on the contact page." },
  { cat: "Privacy", q: "How is my information handled?", a: "Consultations are confidential. Information is shared with other clinicians only with your consent or where the law requires it. The demonstration website itself transmits nothing — enquiry forms show an on-screen confirmation only and send data nowhere." },
  { cat: "Privacy", q: "Does this website store my details?", a: "No. This is a frontend demonstration: form entries stay in your browser for the session, are never sent to a server, and are never stored in local storage. Do not enter real medical details into demo forms." },
];

/* ---------------- Navigation ---------------- */
export const serviceLinks = services.map((s) => ({ to: `/services/${s.slug}`, label: s.name }));
