// js/app.js

const App = (() => {
    // --- Hardcoded User Data ---
    const users = {
        demo: { password: "123", name: "demo", role: "freemium" },
        rameez: { password: "123", name: "rameez", role: "paid" }
    };

    // --- Gemini API Key ---
    const GEMINI_API_KEY = "AIzaSyAOrxgQY1KnKdo3RQhBPJ3qiu5kAAjR__8"; // YOUR API KEY
    // const OPENROUTER_API_KEY = "sk-or-v1-..."; // <<<<  REMOVE OR COMMENT OUT OPENROUTER KEY



    // --- Application Data (Simulating lib/data from TSX) ---
    const CHAPTERS_DATA = [
        {
            id: "unit-1",
            title: "Unit 1: Atomic Structure & Chemistry",
            icon: "fa-atom",
            topics: [
                {
                    id: "periodic-table",
                    slug: "periodic-table",
                    title: "Interactive Periodic Table",
                    unit: "Unit 1: Atomic Structure & Chemistry",
                    description: "Explore the elements, their properties...",
                    access: ["freemium", "paid"],
                    page: "simulation_page_template.html?slug=periodic-table",
                    explanationKey: "periodic-table",
                    simulationFile: "simulations/periodic_table_simulation.html" // <<<< ADD THIS
                }
            ]
        },
        {
            id: "unit-2",
            title: "Unit 2: Kinematics",
            icon: "fa-person-running",
            topics: [
                {
                    id: "motion-1d",
                    slug: "motion-1d",
                    title: "Motion in One Dimension",
                    unit: "Unit 2: Kinematics",
                    description: "Understanding displacement, velocity...",
                    access: ["freemium", "paid"],
                    page: "simulation_page_template.html?slug=motion-1d",
                    iconMap: "fa-chart-line",
                    simulationFile: "simulations/motion_1d_simulation.html" // <<<< ADD THIS
                },
                {
                    id: "vectors-scalars",
                    slug: "vectors-scalars",
                    title: "Vectors and Scalars",
                    unit: "Unit 2: Kinematics",
                    description: "Differentiating between vector quantities...",
                    access: ["freemium", "paid"],
                    page: "simulation_page_template.html?slug=vectors-scalars",
                    iconMap: "fa-right-left",
                    simulationFile: "simulations/vectors_scalars_simulation.html" // <<<< ADD THIS
                },
                {
                    id: "projectile-motion",
                    slug: "projectile-motion",
                    title: "Projectile Motion",
                    unit: "Unit 2: Kinematics",
                    description: "Analyzing the motion of objects launched...",
                    access: ["paid"],
                    page: "simulation_page_template.html?slug=projectile-motion",
                    iconMap: "fa-bullseye",
                    simulationFile: "simulations/projectile_motion_simulation.html" // <<<< ADD THIS (if ready)
                }
            ]
        },
        {
            id: "unit-3",
            title: "Unit 3: Dynamics",
            icon: "fa-gears", // Or fa-cogs, fa-balance-scale
            topics: [
                {
                    id: "newtons-first-law",
                    slug: "newtons-first-law",
                    title: "Newton's First Law (Inertia)",
                    unit: "Unit 3: Dynamics",
                    description: "Objects at rest stay at rest, and objects in motion stay in motion with the same speed and in the same direction unless acted upon by an unbalanced force.",
                    access: ["paid"], // Assuming paid based on previous structure
                    page: "simulation_page_template.html?slug=newtons-first-law",
                    iconMap: "fa-object-group", // Represents inertia/objects
                    simulationFile: "simulations/newtons_first_law_simulation.html"
                },
                {
                    id: "newtons-second-law",
                    slug: "newtons-second-law",
                    title: "Newton's Second Law (F=ma)",
                    unit: "Unit 3: Dynamics",
                    description: "The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.",
                    access: ["paid"],
                    page: "simulation_page_template.html?slug=newtons-second-law",
                    iconMap: "fa-scale-balanced", // Represents F=ma, balance of forces
                    simulationFile: "simulations/newtons_second_law_simulation.html"
                },
                {
                    id: "newtons-third-law",
                    slug: "newtons-third-law",
                    title: "Newton's Third Law (Action-Reaction)",
                    unit: "Unit 3: Dynamics",
                    description: "For every action, there is an equal and opposite reaction.",
                    access: ["paid"],
                    page: "simulation_page_template.html?slug=newtons-third-law",
                    iconMap: "fa-handshake-angle", // Represents action-reaction
                    simulationFile: "simulations/newtons_third_law_simulation.html"
                },
                {
                    id: "friction",
                    slug: "friction",
                    title: "Friction",
                    unit: "Unit 3: Dynamics",
                    description: "Understanding the forces that oppose motion between surfaces in contact (static and kinetic friction).",
                    access: ["paid"],
                    page: "simulation_page_template.html?slug=friction",
                    iconMap: "fa-hands-holding", // Can represent surfaces in contact/friction
                    simulationFile: "simulations/friction_simulation.html"
                },
                {
                    id: "work-energy",
                    slug: "work-energy",
                    title: "Work and Energy",
                    unit: "Unit 3: Dynamics",
                    description: "Exploring concepts of work, kinetic energy, potential energy, and the work-energy theorem.",
                    access: ["paid"],
                    page: "simulation_page_template.html?slug=work-energy",
                    iconMap: "fa-bolt", // Represents energy
                    simulationFile: "simulations/work_energy_simulation.html"
                }
            ]
        },
        {
            id: "unit-4",
            title: "Unit 4: Modern Physics",
            icon: "fa-satellite-dish", // Represents modern/advanced tech
            topics: [
                {
                    id: "spacetime-curvature",
                    slug: "space-time-curvature",
                    title: "Space-Time Curvature",
                    unit: "Unit 4: Modern Physics",
                    description: "Visualize how mass and energy curve spacetime according to Einstein's theory of General Relativity.",
                    access: ["paid"],
                    page: "simulation_page_template.html?slug=space-time-curvature",
                    iconMap: "fa-globe-europe", // Represents spacetime/gravity
                    simulationFile: "simulations/spacetime_curvature_simulation.html"
                },
                {
                    id: "quantum-phenomena",
                    slug: "quantum-phenomena",
                    title: "Quantum Phenomena",
                    unit: "Unit 4: Modern Physics",
                    description: "Explore wave-particle duality, quantum tunneling, superposition, and probabilistic behavior in the quantum realm.",
                    access: ["paid"],
                    page: "simulation_page_template.html?slug=quantum-phenomena",
                    iconMap: "fa-wave-square", // Represents wave-particle duality
                    simulationFile: "simulations/quantum_phenomena_simulation.html"
                },
                {
                    id: "electromagnetic-spectrum",
                    slug: "electromagnetic-spectrum",
                    title: "Electromagnetic Spectrum",
                    unit: "Unit 4: Modern Physics",
                    description: "Interactive simulation of the electromagnetic spectrum, exploring different types of waves, their properties, and applications.",
                    access: ["paid"],
                    page: "simulation_page_template.html?slug=electromagnetic-spectrum",
                    iconMap: "fa-wifi", // Represents waves/spectrum
                    simulationFile: "simulations/electromagnetic_spectrum_simulation.html"
                }
            ]
        }
    ];

    const getTopicBySlug = (slug) => {
        for (const chapter of CHAPTERS_DATA) {
            const topic = chapter.topics.find(t => t.slug === slug);
            if (topic) return topic;
        }
        return null;
    };

    let currentUser = null;

    // --- DOM Elements ---
    const getElement = (selector) => document.querySelector(selector);
    const getAllElements = (selector) => document.querySelectorAll(selector);

    // --- Utility Functions ---
    const showToast = (message, type = 'success') => {
        const toastContainer = getElement('#toastContainer') || (() => {
            const tc = document.createElement('div');
            tc.id = 'toastContainer';
            document.body.appendChild(tc);
            return tc;
        })();

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i> ${message}`;
        toastContainer.appendChild(toast);
        
        anime({
            targets: toast,
            translateY: [20, 0], opacity: [0, 1], duration: 500, easing: 'easeOutExpo',
            complete: () => {
                setTimeout(() => {
                    anime({
                        targets: toast,
                        translateY: [0, 20], opacity: [1, 0], duration: 500, easing: 'easeInExpo',
                        complete: () => toast.remove()
                    });
                }, 3000);
            }
        });
    };

    const openModal = (modalId) => {
        const modal = getElement(modalId);
        if (modal) {
            modal.style.display = 'flex';
            anime({
                targets: modal.querySelector('.modal-content'),
                scale: [0.95, 1], opacity: [0, 1], translateY: [-20, 0], duration: 300, easing: 'easeOutCubic'
            });
        }
    };

    const closeModal = (modalId) => {
        const modal = getElement(modalId);
        if (modal) {
            anime({
                targets: modal.querySelector('.modal-content'),
                scale: [1, 0.95], opacity: [1, 0], translateY: [0, -20], duration: 250, easing: 'easeInCubic',
                complete: () => modal.style.display = 'none'
            });
        }
    };

    // --- Authentication ---
    const handleLogin = (event) => {
        event.preventDefault();
        const usernameInput = getElement('#username');
        const passwordInput = getElement('#password');
        const errorMessageElement = getElement('#loginErrorMessage');

        const username = usernameInput.value.trim().toLowerCase(); // Ensure consistent casing
        const password = passwordInput.value;

        if (users[username] && users[username].password === password) {
            currentUser = users[username];
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            localStorage.removeItem('subscriptionModalDismissed_' + currentUser.name); // Reset for new login session of this user

            showToast(`Login Successful! Welcome back, ${currentUser.name}!`);
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1200);
        } else {
            errorMessageElement.textContent = 'Invalid username or password.';
            errorMessageElement.style.display = 'block';
            anime({
                targets: errorMessageElement,
                translateX: [{value: -10}, {value: 10}, {value: -5}, {value: 5}, {value: 0}],
                duration: 500, easing: 'easeInOutSine'
            });
        }
    };

    const handleLogout = () => {
        currentUser = null;
        localStorage.removeItem('currentUser');
        // No need to remove subscriptionModalDismissed here, it's user-specific.
        window.location.href = 'login.html';
    };

    const checkLoginStatus = () => {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            currentUser = JSON.parse(storedUser);
            return true;
        }
        return false;
    };
    
    const populateHeaderUserInfo = () => {
        if (!currentUser) return;
        getElement('#usernameDisplay').textContent = currentUser.name;
        const statusBadge = getElement('#userStatusBadge');
        statusBadge.textContent = currentUser.role.charAt(0).toUpperCase() + currentUser.role.slice(1);
        statusBadge.className = `user-status ${currentUser.role}`; // 'paid' or 'freemium'
    };


    // --- Dashboard Rendering ---
    const renderDashboard = () => {
        populateHeaderUserInfo();
        getElement('#welcomeName').textContent = currentUser.name;

        const simulationsContainer = getElement('#simulationsContainer');
        simulationsContainer.innerHTML = ''; 

        CHAPTERS_DATA.forEach(chapter => {
            const unitSection = document.createElement('section');
            unitSection.className = 'unit-section';
            unitSection.innerHTML = `
                <div class="unit-header">
                    <i class="fas ${chapter.icon || 'fa-book-open'} unit-icon"></i>
                    <h2>${chapter.title}</h2>
                </div>
                <div class="simulations-grid"></div>
            `;
            const grid = unitSection.querySelector('.simulations-grid');
            chapter.topics.forEach(topic => {
                grid.appendChild(createTopicCard(topic, currentUser.role));
            });
            simulationsContainer.appendChild(unitSection);
        });

        anime({
            targets: '.unit-section, .welcome-banner-dashboard',
            translateY: [20, 0], opacity: [0, 1], delay: anime.stagger(100, {start: 100}),
            duration: 600, easing: 'easeOutExpo'
        });

        if (currentUser.role === 'freemium' && !localStorage.getItem('subscriptionModalDismissed_' + currentUser.name)) {
            setTimeout(() => openModal('#subscriptionModal'), 1500);
        }
    };

    const createTopicCard = (topic, userRole) => {
        const card = document.createElement('div');
        card.className = 'simulation-card topic-card'; // Added topic-card for specific styles

        const canAccess = topic.access.includes(userRole) || (topic.access.includes('paid') && userRole === 'paid') || topic.access.includes('freemium');

        card.innerHTML = `
            <div class="card-header">
                <h3>${topic.title}</h3>
                <i class="fas ${canAccess ? 'fa-unlock text-accent' : 'fa-lock text-destructive'} lock-icon"></i>
            </div>
            <span class="unit-tag">${topic.unit}</span>
            <p class="card-description">${topic.description}</p>
            <div class="card-footer">
                ${canAccess 
                    ? `<a href="${topic.page}" class="btn btn-primary">Open Simulation <i class="fas fa-arrow-right"></i></a>`
                    : `<button class="btn btn-disabled" disabled><i class="fas fa-lock"></i> Premium Access Required</button>`
                }
            </div>
        `;
        return card;
    };

    // --- Simulation Page Rendering ---
    const renderSimulationPage = () => {
        populateHeaderUserInfo();
        const urlParams = new URLSearchParams(window.location.search);
        const slug = urlParams.get('slug');
        const topic = getTopicBySlug(slug);

        const pageContent = getElement('#simulationPageContent');
        if (!pageContent) return;


        if (!topic || !topic.access.includes(currentUser.role) && !(topic.access.includes('paid') && currentUser.role === 'paid') && !topic.access.includes('freemium')) {
            pageContent.innerHTML = `
                <div class="container py-8 mx-auto text-center">
                    <div class="alert alert-destructive">
                        <i class="fas fa-exclamation-triangle"></i>
                        <strong>Error:</strong> Simulation topic not found or access denied.
                    </div>
                    <a href="dashboard.html" class="btn btn-link mt-4"><i class="fas fa-arrow-left"></i> Back to Dashboard</a>
                </div>`;
            return;
        }

        getElement('#simulationPageTitle').textContent = topic.title;
        getElement('#simulationPageUnit').textContent = topic.unit;
        const iconEl = getElement('#simulationPageIcon');
        iconEl.className = `fas ${topic.iconMap || 'fa-flask'} w-10 h-10 mr-3 text-primary`;


        // Placeholder for actual simulation rendering
               // Actual Simulation Rendering using iframe
        // Inside renderSimulationPage function in app.js

        // Actual Simulation Rendering using iframe
        const simulationArea = getElement('#simulationActualArea');
        if (topic.simulationFile) {
            simulationArea.innerHTML = `
                <iframe src="${topic.simulationFile}"
                        width="100%"
                        height="800px" /* You can adjust this default height */
                        frameborder="0"
                        style="border:none; border-radius: 8px; overflow:hidden; display:block; margin: 0 auto;" /* display:block and margin for potential centering if container is wider */
                        title="${topic.title} Simulation">
                </iframe>`;
            // Clean up placeholder styles if they were applied
            simulationArea.classList.remove('simulation-placeholder-content');
            simulationArea.style.border = 'none';
            simulationArea.style.backgroundColor = 'transparent';
            simulationArea.style.padding = '0';
            simulationArea.style.minHeight = '550px'; // Match iframe height or make it flexible
        } else {
            // Fallback placeholder if no simulationFile is defined for the topic
            simulationArea.innerHTML = `<div class="simulation-placeholder-content">
                <p class="text-xl font-semibold text-primary">Interactive ${topic.title} Simulation</p>
                <p class="text-muted-foreground">Simulation content for this topic is not yet available.</p>
            </div>`;
        }
        


        // Explanation Area
        const explanationHTML = getSimulationExplanationHTML(topic);
        getElement('#simulationExplanationArea').innerHTML = explanationHTML;

        // AI Tutor Button Setup
        getElement('#openAiTutorModalBtn').onclick = () => openAiTutorModal(topic.title);

        // Premium Tools
        const premiumToolsSection = getElement('#premiumToolsSection');
        if (currentUser.role === 'paid') {
            premiumToolsSection.style.display = 'block';
            getElement('#quizTopicName').textContent = topic.title.toLowerCase();
            // Add event listeners for quiz/teacher interaction if they lead somewhere
        } else {
            premiumToolsSection.style.display = 'none';
        }

        anime({
            targets: '#simulationPageContent .card, #simulationPageContent .alert, #simulationPageContent .content-section',
            translateY: [20, 0], opacity: [0, 1], delay: anime.stagger(100),
            duration: 600, easing: 'easeOutExpo'
        });
    };
    
    const getSimulationExplanationHTML = (topic) => {
        let content = `<h3 class="text-2xl font-semibold text-primary">Understanding ${topic.title}</h3>
                       <p class="text-muted-foreground">${topic.description}</p>`;
        if (topic.explanationKey === 'periodic-table') {
            content = `
                <h3 class="text-2xl font-semibold text-primary">Understanding the Periodic Table</h3>
                <p class="text-muted-foreground">
                    The periodic table is a tabular arrangement of chemical elements, ordered by their atomic number, electron configuration,
                    and recurring chemical properties. Elements are presented in order of increasing atomic number (number of protons).
                    The table is organized into rows (periods) and columns (groups).
                </p>
                <ul class="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li><strong>Periods:</strong> Horizontal rows. Elements in the same period have the same number of electron shells.</li>
                    <li><strong>Groups:</strong> Vertical columns. Elements in the same group typically have similar chemical properties and the same number of valence electrons.</li>
                    <li><strong>Blocks:</strong> Regions of the periodic table (s, p, d, f) corresponding to the filling of electron subshells.</li>
                </ul>
                <p class="text-muted-foreground">
                    This interactive simulation allows you to explore each element, view its properties, understand its atomic structure,
                    and learn about its real-world applications. Click on an element to see detailed information and an animated representation
                    of its atomic model.
                </p>
            `;
        }
        // Add more cases for other topic.explanationKey if needed
        return `<div class="my-8 space-y-4">${content}</div>`;
    };


    
    // --- AI Tutor Modal Logic ---
    let currentSimulationNameForAI = ''; // This global variable is fine for now
    const openAiTutorModal = (simulationName) => {
        currentSimulationNameForAI = simulationName;
        getElement('#aiTutorSimulationName').textContent = `"${simulationName}"`;
        getElement('#aiInteractionDescription').value = '';
        getElement('#aiUserKnowledgeLevel').value = 'beginner';
        getElement('#aiExplanationResult').innerHTML = '';
        getElement('#aiErrorResult').innerHTML = '';
        getElement('#aiErrorResult').style.display = 'none';
        getElement('#aiExplanationResult').style.display = 'none';
        openModal('#aiTutorModal');
    };

    const handleAiTutorSubmit = async (event) => {
        event.preventDefault();
        const interactionDescription = getElement('#aiInteractionDescription').value;
        const userKnowledgeLevel = getElement('#aiUserKnowledgeLevel').value;

        const errorDiv = getElement('#aiErrorResult');
        const explanationDiv = getElement('#aiExplanationResult');
        const loadingSpinner = getElement('#aiLoadingSpinner');
        const submitButton = getElement('#aiSubmitBtn');

        if (!interactionDescription) {
            errorDiv.textContent = "Please describe your interaction.";
            errorDiv.style.display = 'block';
            return;
        }
        errorDiv.style.display = 'none';
        explanationDiv.style.display = 'none';
        explanationDiv.innerHTML = '';
        loadingSpinner.style.display = 'inline-block';
        submitButton.disabled = true;

        // Construct the messages array for OpenRouter
        // The system prompt helps set the context for the AI
           const systemInstruction = `You are a helpful and friendly physics tutor. The user is exploring the "${currentSimulationNameForAI}" simulation. Their current knowledge level is "${userKnowledgeLevel}". Please provide a clear, concise, and easy-to-understand explanation based on their query. Tailor the depth of your explanation to their stated knowledge level. Focus on explaining the physics concepts relevant to their query.`;

        // Construct the request body for Gemini API
        const requestBody = {
            contents: [
                {
                    role: "user", // For single-turn, the first message is often 'user'
                    parts: [
                        { "text": systemInstruction + "\n\nUser's query: " + interactionDescription }
                    ]
                }
            ],
            generationConfig: {
                // "temperature": 0.7, // Optional: Adjust creativity (0.0 to 1.0)
                // "maxOutputTokens": 350, // Optional: Limit response length
                // "topK": 40,             // Optional
                // "topP": 0.95,           // Optional
            },
            safetySettings: [ // Optional but recommended
                { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
                { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
                { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
                { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" }
            ]
        };

          // --- Using Gemini API directly ---
        // Model: gemini-1.5-flash-latest is a good choice for speed and capability.
        // If "latest" tag causes issues, try a specific version like "gemini-1.5-flash-001"
        // or simply "gemini-1.5-flash" if available in your project.
        const modelToUse = "gemini-1.5-flash-latest"; // Or "gemini-1.5-flash"

        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelToUse}:generateContent?key=${GEMINI_API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Gemini API Error Data:", errorData);
                let detailedErrorMessage = errorData.error?.message || `Gemini API request failed with status ${response.status}`;
                if (errorData.error?.details) {
                    detailedErrorMessage += ` Details: ${JSON.stringify(errorData.error.details)}`;
                }
                throw new Error(detailedErrorMessage);
            }

            const data = await response.json();

            // Standard Gemini API response structure for generateContent
            const AITextExplanation = data.candidates?.[0]?.content?.parts?.[0]?.text;

            if (AITextExplanation) {
                explanationDiv.innerHTML = `<h4 class="alert-title">AI Explanation</h4><div class="prose">${AITextExplanation.replace(/\n/g, '<br />')}</div>`;
                explanationDiv.style.display = 'block';
            } else {
                console.error("No text content in Gemini AI response:", data);
                if (data.promptFeedback && data.promptFeedback.blockReason) {
                     throw new Error(`Content blocked by safety filters. Reason: ${data.promptFeedback.blockReason}. Details: ${JSON.stringify(data.promptFeedback.safetyRatings)}`);
                } else {
                    throw new Error("No explanation received from AI or response format was unexpected.");
                }
            }
        } catch (err) {
            errorDiv.textContent = `AI Tutor Error: ${err.message}. Please check the console for more details. Ensure your API key is correct, the Generative Language API is enabled, and the model "${modelToUse}" is available for your project.`;
            errorDiv.style.display = 'block';
            console.error("Full AI Tutor Error Object:", err);
        } finally {
            loadingSpinner.style.display = 'none';
            submitButton.disabled = false;
        }
    };

    
    // --- Mobile Warning ---
    const checkMobileWarning = () => {
        const isMobile = window.innerWidth < 768; // Simple check
        if (isMobile && !sessionStorage.getItem('mobileWarningDismissed')) {
            openModal('#mobileWarningModal');
        }
    };


    // --- Event Listeners Setup ---
    const setupEventListeners = () => {
        // Login Page
        const loginForm = getElement('#loginForm');
        if (loginForm) loginForm.addEventListener('submit', handleLogin);

        // Logout Button (common)
        const logoutBtn = getElement('#logoutButton');
        if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);

        // Modal Close Buttons
        getAllElements('.close-btn').forEach(btn => {
            btn.onclick = () => closeModal('#' + btn.closest('.modal').id);
        });
        window.onclick = (event) => {
            if (event.target.classList.contains('modal')) closeModal('#' + event.target.id);
        };

        // Subscription Modal
        const subModalContinueBtn = getElement('#subscriptionModalContinueBtn');
        if(subModalContinueBtn) subModalContinueBtn.onclick = () => {
            localStorage.setItem('subscriptionModalDismissed_' + currentUser.name, 'true');
            closeModal('#subscriptionModal');
        };
        const subModalUpgradeBtn = getElement('#subscriptionModalUpgradeBtn');
        if(subModalUpgradeBtn) subModalUpgradeBtn.onclick = () => {
            alert('Upgrade to Premium clicked! (Actual payment integration required)');
            // Potentially: update user role and re-render, or redirect to payment
            localStorage.setItem('subscriptionModalDismissed_' + currentUser.name, 'true'); // Assume dismissal after click
            closeModal('#subscriptionModal');
        };
        
        // AI Tutor Modal
        const aiTutorForm = getElement('#aiTutorForm');
        if (aiTutorForm) aiTutorForm.addEventListener('submit', handleAiTutorSubmit);
        const aiTutorCancelBtn = getElement('#aiTutorCancelBtn');
        if(aiTutorCancelBtn) aiTutorCancelBtn.onclick = () => closeModal('#aiTutorModal');
        
        // Mobile Warning Modal
        const dismissMobileWarningBtn = getElement('#dismissMobileWarningBtn');
        if (dismissMobileWarningBtn) dismissMobileWarningBtn.onclick = () => {
            sessionStorage.setItem('mobileWarningDismissed', 'true');
            closeModal('#mobileWarningModal');
        };
    };

    // --- Initialization ---
    const init = () => {
        const page = window.location.pathname.split("/").pop();
        
        if (page === 'login.html' || page === '') {
            // Login page specific init if any (animations are in login.html)
        } else { // Authenticated pages
            if (!checkLoginStatus()) {
                window.location.href = 'login.html';
                return;
            }
            populateHeaderUserInfo(); // Populate header early
            checkMobileWarning(); // Show mobile warning if applicable

            if (page === 'dashboard.html') {
                renderDashboard();
            } else if (page === 'simulation_page_template.html') {
                renderSimulationPage();
            }
        }
        setupEventListeners(); // Setup common event listeners after page-specific rendering
    };
    
    return { init, initLoginForm: () => { if (getElement('#loginForm')) getElement('#loginForm').addEventListener('submit', handleLogin); } };
})();

document.addEventListener('DOMContentLoaded', App.init);