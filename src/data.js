// ============================================================
// DATA.JS — Edit this file to update all portfolio content.
// No need to touch any JSX/component files.
// ============================================================

// ── Personal Info ────────────────────────────────────────────
export const personal = {
  name: "Rashmi Sharma", // TODO: replace placeholder — your full name
  tagline: "Data Science Undergrad · ML & Analytics",
  intro: [
    "I'm a data science undergraduate passionate about turning messy, real-world data into clear insights and impactful ML-powered products.",
    "I love working at the intersection of statistics, machine learning, and thoughtful visualisation — building things that actually matter.",
    "Currently exploring large language models, time-series forecasting, and the occasional Kaggle competition.",
  ],
  email: "hello@youremail.com", // TODO: replace placeholder — your email
  github: "https://github.com/yourusername", // TODO: replace placeholder
  linkedin: "https://linkedin.com/in/yourusername", // TODO: replace placeholder
  kaggle: "https://kaggle.com/yourusername", // TODO: replace placeholder
  twitter: "https://twitter.com/yourusername", // TODO: replace placeholder (or remove)
  resumeUrl: "/resume.pdf", // TODO: add your resume.pdf to the /public folder
  // TODO: replace placeholder — add your photo to /public/profile.jpg
  avatarUrl: null, // e.g. "/profile.jpg"
};

// ── About ────────────────────────────────────────────────────
export const about = {
  bio: `I'm a third-year Data Science undergraduate who loves the challenge of
  extracting meaningful signal from noise. My work spans exploratory data
  analysis, building and deploying machine learning models, and crafting
  compelling data stories that help non-technical stakeholders make better
  decisions. Outside academia I contribute to open-source projects and write
  about what I learn.`, // TODO: replace placeholder — your actual bio

  education: {
    degree: "B.Tech in Data Science & Artificial Intelligence", // TODO: replace placeholder
    university: "IIT Hyderabad", // TODO: replace placeholder
    year: "2022 – 2026", // TODO: replace placeholder
    cgpa: "8.6 / 10.0", // TODO: replace placeholder (or remove field)
  },

  currentlyExploring: [
    "Fine-tuning LLMs with LoRA / QLoRA",
    "Time-series anomaly detection",
    "MLOps pipelines with MLflow & DVC",
  ], // TODO: keep this updated — it's a great conversation starter with recruiters
};

// ── Skills ───────────────────────────────────────────────────
// Add / remove items from any array — badges auto-render.
export const skills = [
  {
    category: "Languages",
    items: ["Python", "R", "SQL", "Bash"],
  },
  {
    category: "Libraries & Frameworks",
    items: [
      "NumPy", "Pandas", "Scikit-learn", "PyTorch", "TensorFlow",
      "HuggingFace Transformers", "Matplotlib", "Seaborn", "Plotly",
      "Streamlit", "FastAPI",
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Git", "Docker", "Jupyter", "VS Code", "Google Colab",
      "DVC", "MLflow", "Weights & Biases", "Kaggle", "GitHub Actions",
    ],
  },
  {
    category: "Concepts",
    items: [
      "Supervised Learning", "Unsupervised Learning", "Deep Learning",
      "NLP", "Computer Vision", "Time-Series Analysis", "Feature Engineering",
      "Statistical Inference", "A/B Testing", "Data Wrangling",
    ],
  },
];

// ── Projects ─────────────────────────────────────────────────
// Each object maps to one project card. Add new objects to add new projects.
export const projects = [
  {
    id: "proj-1",
    title: "Customer Churn Predictor",
    tagline: "Predicting telco churn 3 months in advance using tabular ML.",
    techStack: ["Python", "XGBoost", "SHAP", "Streamlit", "Pandas"],
    description:
      "Built an end-to-end churn prediction pipeline on a 70k-row telco dataset. Applied target encoding, SMOTE for class imbalance, and tuned XGBoost via Optuna. Deployed an interactive Streamlit dashboard so business teams could explore predictions without code.",
    result:
      "AUC-ROC of 0.91 on hold-out test set; flagging 78 % of churners 90 days before churn event.",
    learnings:
      "Learned how critical proper leakage prevention is during feature engineering, and how SHAP values dramatically improve stakeholder trust in black-box models.",
    image: null, // TODO: replace placeholder — e.g. "/projects/churn.png"
    liveDemo: "https://your-streamlit-app.streamlit.app", // TODO: replace placeholder — Streamlit / HF Spaces / Gradio URL
    github: "https://github.com/yourusername/churn-predictor", // TODO: replace placeholder
    featured: true,
  },
  {
    id: "proj-2",
    title: "ArXiv Abstract Classifier",
    tagline: "Multi-label NLP model to auto-tag ML papers by topic.",
    techStack: ["PyTorch", "HuggingFace", "BERT", "FastAPI", "Docker"],
    description:
      "Fine-tuned a DistilBERT model on 120k ArXiv abstracts for multi-label classification across 12 CS sub-domains. Wrapped the model in a FastAPI microservice and containerised with Docker for easy deployment.",
    result:
      "Macro F1 of 0.87; inference latency under 80 ms on CPU (quantised model).",
    learnings:
      "Gained hands-on experience with model quantisation, ONNX export, and designing RESTful ML APIs that handle edge cases gracefully.",
    image: null, // TODO: replace placeholder — e.g. "/projects/arxiv.png"
    liveDemo: "https://huggingface.co/spaces/yourusername/arxiv-classifier", // TODO: replace placeholder
    github: "https://github.com/yourusername/arxiv-classifier", // TODO: replace placeholder
    featured: true,
  },
  {
    id: "proj-3",
    title: "Air Quality Time-Series Forecasting",
    tagline: "Forecasting PM2.5 levels 24 hours ahead for 5 Indian cities.",
    techStack: ["Python", "Prophet", "LSTM", "Plotly", "Streamlit"],
    description:
      "Compared classical (SARIMA, Prophet) vs. deep-learning (LSTM, Temporal Fusion Transformer) approaches on hourly AQI data. Built a Plotly-powered dashboard showing forecast confidence intervals and decomposed seasonal components.",
    result:
      "TFT outperformed Prophet by 18 % on RMSE; dashboard adopted by a student climate-tech club.",
    learnings:
      "Time-series cross-validation (walk-forward) is non-negotiable; discovered how much holiday calendars matter for urban pollution cycles.",
    image: null, // TODO: replace placeholder
    liveDemo: "https://your-aq-dashboard.streamlit.app", // TODO: replace placeholder
    github: "https://github.com/yourusername/aq-forecast", // TODO: replace placeholder
    featured: true,
  },
  {
    id: "proj-4",
    title: "Reddit Sentiment Tracker",
    tagline: "Real-time sentiment analysis dashboard for financial subreddits.",
    techStack: ["Python", "VADER", "RoBERTa", "Kafka", "Grafana"],
    description:
      "Streamed Reddit posts via PRAW into a Kafka pipeline, scored sentiment with a fine-tuned RoBERTa model, and visualised live trends in Grafana. Compared VADER (baseline) vs. transformer-based scoring.",
    result:
      "Transformer model showed 23 % higher correlation with next-day stock moves vs. VADER on 60-day backtest.",
    learnings:
      "Stream processing fundamentals and the stark difference between lexicon-based and contextual sentiment models on financial jargon.",
    image: null, // TODO: replace placeholder
    liveDemo: null, // No public demo yet
    github: "https://github.com/yourusername/reddit-sentiment", // TODO: replace placeholder
    featured: false,
  },
  {
    id: "proj-5",
    title: "Medical Image Segmentation",
    tagline: "Segmenting lung nodules in CT scans with U-Net.",
    techStack: ["PyTorch", "U-Net", "OpenCV", "Albumentations", "Weights & Biases"],
    description:
      "Implemented U-Net from scratch on the LUNA16 dataset for lung nodule segmentation. Applied heavy augmentation (elastic transforms, random crops) to combat the limited labelled data. Tracked all experiments on W&B.",
    result: "Dice score of 0.82 on validation set; matched published U-Net baseline with 40 % less training data.",
    learnings:
      "The importance of augmentation strategy over architecture choice when data is scarce; learned to use mixed-precision training for 2× speed-up.",
    image: null, // TODO: replace placeholder
    liveDemo: null,
    github: "https://github.com/yourusername/lung-segmentation", // TODO: replace placeholder
    featured: false,
  },
];

// ── Achievements & Certifications ────────────────────────────
export const achievements = [
  {
    id: "ach-1",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    date: "Dec 2024",
    credentialUrl: "https://coursera.org/verify/XXXXXX", // TODO: replace placeholder
    type: "certification",
  },
  {
    id: "ach-2",
    title: "Deep Learning Specialisation",
    issuer: "deeplearning.ai / Coursera",
    date: "Aug 2024",
    credentialUrl: "https://coursera.org/verify/XXXXXX", // TODO: replace placeholder
    type: "certification",
  },
  {
    id: "ach-3",
    title: "Top 8% — Kaggle Titanic Competition",
    issuer: "Kaggle",
    date: "Mar 2024",
    credentialUrl: "https://kaggle.com/yourusername", // TODO: replace placeholder
    type: "achievement",
  },
  {
    id: "ach-4",
    title: "Runner-up — IIT-H DataHack Hackathon",
    issuer: "IIT Hyderabad Analytics Club",
    date: "Nov 2023",
    credentialUrl: null,
    type: "achievement",
  },
  {
    id: "ach-5",
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Jun 2023",
    credentialUrl: "https://aws.amazon.com/verification", // TODO: replace placeholder
    type: "certification",
  },
];

// ── Blog / Writing ────────────────────────────────────────────
// Leave this array empty [] to show the "Coming soon" placeholder state.
export const blogPosts = [
  // TODO: replace placeholder — add your blog posts. Example structure below:
  // {
  //   id: "post-1",
  //   title: "Why SHAP Values Changed How I Explain Models",
  //   excerpt: "Interpretability isn't optional when real people act on your predictions. Here's how I use SHAP daily.",
  //   date: "Jun 2025",
  //   readTime: "6 min read",
  //   url: "https://medium.com/@yourusername/shap-values-guide",
  // },
];
