export const jobs = [
    {
        role: "Data Scientist I",
        company: "Aereo",
        logo: "https://github.com/SusanketSarkar/github-portfolio/blob/main/public/aereo.jpg", // Replace with actual logo path
        duration: "May 2024 - Present · 10 mos",
        description: [
            "Developed a path-finding and generation algorithm for haul roads in mining sites using geospatial aerial imagery.",
            "Optimized a path-finding algorithm using Dijkstra's Algorithm and implemented a path generation algorithm with Q* (Q-star).",
            "Deployed the solution, reducing path planning time by 54% and increasing accuracy by 27%, leading to a 12% increase in project adoption across clients.",
            "Integrated a feature to calculate the optimal route for dumper vehicles, incorporating key metrics such as travel time and slope analysis, resulting in a further 5% increase in project adoption."
        ],
        link: "https://aereo.com", 
        images: [], 
        skills: ["AWS", "Computer Vision", "Python", "Machine Learning", "Deep Learning", "CI/CD", "Docker", "GIS", "Data Structures", "Weights and Biases", "Client Interaction"],
    },
    {
        role: "Data Science Intern",
        company: "Aereo",
        logo: "https://github.com/SusanketSarkar/github-portfolio/blob/main/public/aereo.jpg",
        duration: "May 2023 - July 2023 · 3 mo",
        location: "Bengaluru, Karnataka, India · On-site",
        description: [
            "Worked with geospatial drone imagery and utilized computer vision techniques to derive actionable insights, such as tree counts in forests, building footprints in villages, etc.",
            "Assisted with the collection of over 30GB of data from 150+ geographical sites, identifying and improving quality issues.",
            "Developed multiple deep learning models tailored to various tasks, addressing data scarcity challenges, and achieved an average precision of 92% and recall of 89% across all objectives.",
            "Integrated these features into production, resulting in cost savings of Rs. 10 lakhs annually, reducing weekly workload by over 40 hours, and boosting the monthly adoption rate by 27%."
        ],
        link: "https://aereo.com", // Replace with actual company website
        images: [], // Add project screenshots or visuals if available
        skills: ["Python", "SQL", "Deep Learning", "Computer Vision", "CI/CD", "GIS", ],
    },
    {
        role: "Data Scientist",
        company: "Vitt.AI",
        logo: "https://github.com/SusanketSarkar/github-portfolio/blob/main/public/vittai.png",
        duration: "Jan 2023 - Mar 2023 · 3 mos",
        location: "Bengaluru, Karnataka, India · Remote",
        description: [
            "Developed an automated system within Apache Spark to transcribe and translate 18 hours of audio data containing conversations between customer service representatives and clients in 10 different Indian languages.",
            "Ingested and preprocessed the audio data in Apache Spark, leveraging Spark's distributed computing capabilities.",
            "Extracted audio features using MFCC within the Spark environment, preparing the data for transcription and translation tasks.",
            "Trained a deep learning model on the audio data, achieving a word error rate (WER) of less than 19 for transcribing and translating the conversations into English.",
            "Enhanced the efficiency of the pipeline by 15% by automating the transcription and translation process, saving the company 27 hours of manual work previously required for language processing tasks."
        ],
        link: "https://vitt.ai", // Replace with actual company website
        images: [], // Add project screenshots or visuals if available
        skills: ["Python", "Apache Spark", "MFCC", "Deep Learning"],
    },
    {
        role: "Data Analyst",
        company: "The KinCare",
        logo: "https://github.com/SusanketSarkar/github-portfolio/blob/main/public/kincare.jpeg",
        duration: "Nov 2022 - Jan 2023 · 3 mos",
        location: "Bengaluru, Karnataka, India · Remote",
        description: [
            "Developed, tested, and deployed the data pipeline for an in-app chatbot system, enabling users to upload PDF medical reports for analysis and question answering.",
            "Organized and structured the data from over 1500 customers, ensuring data accuracy and reliability for analysis and insights.",
            "Collaborated with the development team to monitor and optimize the user interface of the iOS and Android app, enhancing the user experience and increasing app engagement by 2x.",
            "Designed and built custom dashboards using Google Analytics and Power BI, visualizing over 30 key performance indicators (KPIs) relevant to the app, providing actionable insights for decision-making.",
            "Planned and presented data models with Power BI and insights to more than 40 non-technical stakeholders, effectively communicating complex concepts and influencing strategic decisions.",
            "Additionally, automated 10+ manual processes using Python scripts, reducing data analysis time by 52%."
        ],
        link: "https://kincare.com", // Replace with actual company website
        images: [], // Add project screenshots or visuals if available
        skills: ["Python", "Apache Spark", "MFCC", "Deep Learning"],
    },
    {
        role: "Machine Learning Engineer",
        company: "FitBuddy",
        logo: "https://github.com/SusanketSarkar/github-portfolio/blob/main/public/fitbuddy.jpeg",
        duration: "Sep 2022 - Nov 2022 · 3 mos",
        location: "Delhi, India · Remote",
        description: [
            "Leveraged OpenCV and MediaPipe libraries to establish the core logic of a highly accurate Body Pose Detection Model, enabling precise landmark detection in parsed videos of various positions.",
            "Developed relational matrices by establishing relationships between relevant landmarks, serving as the foundation for training the model using machine learning algorithms such as SVM, KNN, and Random Forest.",
            "Optimized the existing codebase, enhancing the accuracy of exercise detection while extending functionality to include yoga poses, resulting in an impressive F1 score of 0.87 on newly implemented yoga positions.",
            "Implemented the feature into the production environment, leading to a remarkable 20% increase in application download rates due to the enhanced user experience and accurate exercise pose detection."
        ],
        link: "https://fitbuddy.com", // Replace with actual company website
        images: [], // Add project screenshots or visuals if available
        skills: ["Python", "Apache Spark", "MFCC", "Deep Learning"],
    },
    {
        role: "Data Scientist",
        company: "Shortlyst AI",
        logo: "https://github.com/SusanketSarkar/github-portfolio/blob/main/public/sh.png",
        duration: "Sep 2022 - Oct 2022 · 2 mos",
        location: "Remote",
        description: [],
        link: "https://shortlyst.ai", // Replace with actual company website
        images: [], // Add project screenshots or visuals if available
        skills: ["Python", "Apache Spark", "MFCC", "Deep Learning"],
    },
    {
        role: "Deep Learning Engineer",
        company: "TechyAI",
        logo: "https://github.com/SusanketSarkar/github-portfolio/blob/main/public/ta.jpeg",
        duration: "Aug 2022 - Sep 2022 · 2 mos",
        location: "Remote",
        description: [],
        link: "https://techy.ai", // Replace with actual company website
        images: [], // Add project screenshots or visuals if available
        skills: ["Python", "Apache Spark", "MFCC", "Deep Learning"],
    },
    {
        role: "Algorithm Developer",
        company: "REACH Technologies",
        logo: "https://github.com/SusanketSarkar/github-portfolio/blob/main/public/rt.jpeg",
        duration: "Jun 2022 - Jul 2022 · 2 mos",
        location: "Remote",
        description: [],
        link: "https://reach.com", // Replace with actual company website
        images: [], // Add project screenshots or visuals if available
        skills: ["Python", "Apache Spark", "MFCC", "Deep Learning"],
    },
];