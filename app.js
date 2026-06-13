/*
   ==========================================================================
   APP.JS - APPLICATION LOGIC, NAVIGATION, PYODIDE RUNNER & QUIZ CONTROLLER
   ==========================================================================
*/

// 1. GLOBAL STATE MANAGEMENT
let pyodideEngine = null;
let currentLesson = null;
let currentModuleIndex = 0;
let currentLessonIndex = 0;

// User state with local storage fallback
let userState = {
    completedLessons: {}, // { lessonId: true/false }
    quizScores: {},       // { lessonId_quizIndex: true/false }
    savedCode: {}         // { lessonId: "code string" }
};

// Load state from local storage
function loadUserState() {
    const saved = localStorage.getItem('python_freshmen_state');
    if (saved) {
        try {
            userState = JSON.parse(saved);
            if (!userState.completedLessons) userState.completedLessons = {};
            if (!userState.quizScores) userState.quizScores = {};
            if (!userState.savedCode) userState.savedCode = {};
        } catch (e) {
            console.error("Error parsing user state", e);
        }
    }
}

// Save state to local storage
function saveUserState() {
    localStorage.setItem('python_freshmen_state', JSON.stringify(userState));
    updateProgressUI();
}

// 2. PYODIDE (PYTHON IN WASM) ENGINE INITIALIZATION
async function initPyodideEngine() {
    const statusDot = document.querySelector('#pyodideStatus .status-dot');
    const statusText = document.querySelector('#pyodideStatus .status-text');
    const runBtn = document.getElementById('btnRunCode');
    
    if (runBtn) runBtn.disabled = true;

    try {
        // Initialize Pyodide
        pyodideEngine = await loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.1/full/"
        });
        
        // Setup standard output and error hooks
        pyodideEngine.setStdout({
            batched: (text) => appendToConsole(text, 'output')
        });
        pyodideEngine.setStderr({
            batched: (text) => appendToConsole(text, 'error')
        });

        // Update status UI
        statusDot.className = "status-dot success";
        statusText.textContent = "Python Engine Ready";
        if (runBtn) runBtn.disabled = false;
        
        console.log("Pyodide Engine loaded successfully!");
        
        // Mock virtual file creation for lesson 4 (File Handling)
        await prepareVirtualFiles();
        
    } catch (error) {
        statusDot.className = "status-dot error";
        statusText.textContent = "Engine offline (ต้องการเน็ต)";
        console.error("Pyodide loading error:", error);
        appendToConsole("⚠️ ไม่สามารถโหลดระบบรันโค้ด Python ในบราวเซอร์ได้เนื่องจากไม่ได้เชื่อมต่ออินเทอร์เน็ต แต่คุณยังคงสามารถอ่านเนื้อหาและทำข้อสอบได้ตามปกติ\n", "error");
    }
}

// Prepare virtual files inside Pyodide MemFS for lessons
async function prepareVirtualFiles() {
    if (!pyodideEngine) return;
    try {
        // Create grades.txt for lesson 4_1 coding quiz
        pyodideEngine.FS.writeFile("grades.txt", "3.5\n3.0\n4.0\n3.5");
        console.log("Virtual file system initialized with grades.txt");
    } catch (e) {
        console.error("FS setup failed", e);
    }
}

// Redirect and print helper to custom console UI
function appendToConsole(text, type = 'output') {
    const consoleOutput = document.getElementById('consoleOutput');
    if (!consoleOutput) return;
    
    // Clear default placeholder text if first print
    if (consoleOutput.textContent.includes("ตู้คอนโซลผลลัพธ์การรันโปรแกรม...") || 
        consoleOutput.textContent.includes("กำลังรันโค้ดโปรแกรม...")) {
        consoleOutput.textContent = "";
    }
    
    const span = document.createElement('span');
    span.textContent = text + '\n';
    
    if (type === 'error') {
        span.className = 'console-error';
    } else if (type === 'success') {
        span.className = 'console-success';
    } else if (type === 'info') {
        span.className = 'console-info';
    }
    
    consoleOutput.appendChild(span);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

// Run user code using Pyodide
async function runPythonCode(codeToRun) {
    const consoleOutput = document.getElementById('consoleOutput');
    const runBtn = document.getElementById('btnRunCode');
    const statusDot = document.querySelector('#pyodideStatus .status-dot');
    const statusText = document.querySelector('#pyodideStatus .status-text');
    
    if (!pyodideEngine) {
        appendToConsole("❌ Python Engine ยังไม่พร้อมใช้งาน กรุณารอเชื่อมต่ออินเทอร์เน็ต...", "error");
        return;
    }

    try {
        runBtn.disabled = true;
        statusDot.className = "status-dot running";
        statusText.textContent = "กำลังรันโค้ด...";
        consoleOutput.textContent = "กำลังรันโค้ดโปรแกรม...\n";
        
        // Execute Python Code
        await pyodideEngine.runPythonAsync(codeToRun);
        
        statusDot.className = "status-dot success";
        statusText.textContent = "Python Engine Ready";
    } catch (err) {
        statusDot.className = "status-dot success";
        statusText.textContent = "Python Engine Ready";
        appendToConsole(err.message, "error");
    } finally {
        runBtn.disabled = false;
    }
}

// 3. UI GENERATION & RENDERING
function renderSidebarMenu() {
    const sidebarNav = document.getElementById('sidebarNav');
    if (!sidebarNav) return;
    
    // Clear dynamic parts but keep dashboard link
    const ul = sidebarNav.querySelector('.nav-list');
    
    // Remove existing lessons and modules from sidebar
    const itemsToRemove = ul.querySelectorAll('.nav-module-title, .lesson-nav-li');
    itemsToRemove.forEach(el => el.remove());
    
    // Generate modules & lessons menu
    courseContent.modules.forEach((module, mIdx) => {
        // Module Title
        const moduleLi = document.createElement('li');
        moduleLi.className = 'nav-module-title';
        
        let iconHtml = '<i class="fa-solid fa-code-branch"></i>';
        if (mIdx === 0) iconHtml = '<i class="fa-solid fa-cube"></i>';
        else if (mIdx === 1) iconHtml = '<i class="fa-solid fa-database"></i>';
        else if (mIdx === 2) iconHtml = '<i class="fa-solid fa-gears"></i>';
        else if (mIdx === 3) iconHtml = '<i class="fa-solid fa-file-shield"></i>';

        moduleLi.innerHTML = `${iconHtml} ${module.title}`;
        ul.appendChild(moduleLi);
        
        // Lessons list
        module.lessons.forEach((lesson, lIdx) => {
            const lessonLi = document.createElement('li');
            lessonLi.className = 'lesson-nav-li';
            
            const isCompleted = userState.completedLessons[lesson.id];
            const statusIcon = isCompleted ? 
                '<i class="status-icon fa-solid fa-circle-check completed"></i>' : 
                '<i class="status-icon fa-regular fa-circle unlocked"></i>';
                
            lessonLi.innerHTML = `
                <a href="#lesson/${lesson.id}" class="nav-link lesson-item-link" id="nav-${lesson.id}">
                    ${lesson.title}
                    ${statusIcon}
                </a>
            `;
            ul.appendChild(lessonLi);
        });
    });
    
    setupMenuListeners();
}

function setupMenuListeners() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', () => {
            // On mobile, close sidebar after selecting menu
            const sidebar = document.getElementById('sidebar');
            if (sidebar && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
            }
        });
    });
}

// Update lessons progress percentage in UI
function updateProgressUI() {
    let totalLessons = 0;
    let completedCount = 0;
    
    courseContent.modules.forEach(module => {
        module.lessons.forEach(lesson => {
            totalLessons++;
            if (userState.completedLessons[lesson.id]) {
                completedCount++;
            }
            
            // Sync checkmark icons in sidebar
            const navLink = document.getElementById(`nav-${lesson.id}`);
            if (navLink) {
                const statusIcon = navLink.querySelector('.status-icon');
                if (statusIcon) {
                    if (userState.completedLessons[lesson.id]) {
                        statusIcon.className = 'status-icon fa-solid fa-circle-check completed';
                    } else {
                        statusIcon.className = 'status-icon fa-regular fa-circle unlocked';
                    }
                }
            }
        });
    });
    
    const percentage = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
    
    const progressText = document.getElementById('overallProgressText');
    const progressBar = document.getElementById('overallProgressBar');
    const completedCountEl = document.getElementById('completedLessonsCount');
    const totalCountEl = document.getElementById('totalLessonsCount');
    
    if (progressText) progressText.textContent = `${percentage}%`;
    if (progressBar) progressBar.style.width = `${percentage}%`;
    if (completedCountEl) completedCountEl.textContent = completedCount;
    if (totalCountEl) totalCountEl.textContent = totalLessons;
}

// 4. ROUTING & CONTROLLER FOR SPA NAVIGATION
function handleRoute() {
    const hash = window.location.hash || '#dashboard';
    
    // De-activate all links first
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    if (hash === '#dashboard') {
        showSection('dashboardSection');
        document.getElementById('navDashboard').classList.add('active');
        updateBreadcrumb(['หน้าหลัก', 'ยินดีต้อนรับ']);
    } else if (hash.startsWith('#lesson/')) {
        const lessonId = hash.split('#lesson/')[1];
        loadLesson(lessonId);
    }
}

function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(sec => {
        sec.style.display = 'none';
        sec.classList.remove('active');
    });
    const activeSec = document.getElementById(sectionId);
    if (activeSec) {
        activeSec.style.display = 'block';
        activeSec.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function updateBreadcrumb(parts) {
    const breadcrumb = document.getElementById('breadcrumb');
    if (!breadcrumb) return;
    breadcrumb.innerHTML = parts.map((part, index) => {
        if (index === parts.length - 1) {
            return `<span>${part}</span>`;
        }
        return `<span>${part}</span> &gt; `;
    }).join('');
}

// 5. LESSON CONTROLLER - LOAD CONTENT & QUIZZES
function loadLesson(lessonId) {
    // Find lesson in curriculum data
    let foundLesson = null;
    let foundModule = null;
    
    courseContent.modules.forEach((mod, mIdx) => {
        mod.lessons.forEach((les, lIdx) => {
            if (les.id === lessonId) {
                foundLesson = les;
                foundModule = mod;
                currentModuleIndex = mIdx;
                currentLessonIndex = lIdx;
            }
        });
    });
    
    if (!foundLesson) {
        window.location.hash = '#dashboard';
        return;
    }
    
    currentLesson = foundLesson;
    
    // Highlight Active Link
    const navLink = document.getElementById(`nav-${lessonId}`);
    if (navLink) navLink.classList.add('active');
    
    // Set breadcrumb
    updateBreadcrumb([foundModule.title.split('.')[1].trim(), foundLesson.title]);
    
    // Render Content
    const lessonBody = document.getElementById('lessonBody');
    lessonBody.innerHTML = foundLesson.content;
    
    // Load Code Playground Code
    const codeEditor = document.getElementById('codeEditor');
    const saved = userState.savedCode[lessonId];
    codeEditor.value = saved || foundLesson.playgroundCode;
    
    // Clear playground console
    const consoleOutput = document.getElementById('consoleOutput');
    consoleOutput.textContent = "ตู้คอนโซลผลลัพธ์การรันโปรแกรม...";
    
    // Render Quizzes
    renderQuizzes(foundLesson);
    
    // Show view
    showSection('lessonSection');
    
    // Highlight Code blocks loaded dynamically
    if (window.Prism) {
        Prism.highlightAllUnder(lessonBody);
    }
    
    // Configure buttons for navigation
    updateLessonNavButtons();
}

function updateLessonNavButtons() {
    const prevBtn = document.getElementById('btnPrevLesson');
    const nextBtn = document.getElementById('btnNextLesson');
    const markCompleteBtn = document.getElementById('btnMarkComplete');
    
    // Check if there is a previous lesson
    let prevLesson = null;
    let nextLesson = null;
    
    // Flatten lessons list
    const flatLessons = [];
    courseContent.modules.forEach(mod => {
        mod.lessons.forEach(les => {
            flatLessons.push(les);
        });
    });
    
    const currentIndex = flatLessons.findIndex(les => les.id === currentLesson.id);
    if (currentIndex > 0) prevLesson = flatLessons[currentIndex - 1];
    if (currentIndex < flatLessons.length - 1) nextLesson = flatLessons[currentIndex + 1];
    
    // Previous button config
    if (prevLesson) {
        prevBtn.style.display = 'inline-flex';
        prevBtn.onclick = () => window.location.hash = `#lesson/${prevLesson.id}`;
    } else {
        prevBtn.style.display = 'none';
    }
    
    // Next button config
    if (nextLesson) {
        nextBtn.style.display = 'inline-flex';
        nextBtn.onclick = () => window.location.hash = `#lesson/${nextLesson.id}`;
    } else {
        nextBtn.style.display = 'none';
    }
    
    // Mark Complete button config
    const isCompleted = userState.completedLessons[currentLesson.id];
    if (isCompleted) {
        markCompleteBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> เรียนรู้บทเรียนนี้เสร็จสิ้นแล้ว';
        markCompleteBtn.className = 'btn btn-success';
    } else {
        markCompleteBtn.innerHTML = '<i class="fa-solid fa-check-double"></i> เสร็จสิ้นบทเรียนนี้';
        markCompleteBtn.className = 'btn btn-primary';
    }
    
    markCompleteBtn.onclick = () => {
        userState.completedLessons[currentLesson.id] = true;
        saveUserState();
        updateLessonNavButtons();
        renderSidebarMenu();
        // Visual alert
        alert("🎉 ยินดีด้วย! คุณเรียนจบเรื่อง " + currentLesson.title + " เรียบร้อยแล้ว");
    };
}

// 6. QUIZ CONTROLLER - GENERATION & SCORE EVALUATION
function renderQuizzes(lesson) {
    const container = document.getElementById('quizzesContainer');
    container.innerHTML = "";
    
    if (!lesson.quizzes || lesson.quizzes.length === 0) {
        container.innerHTML = "<p class='tip-text'>ยังไม่มีแบบทดสอบสำหรับบทนี้</p>";
        return;
    }
    
    lesson.quizzes.forEach((quiz, index) => {
        const quizCard = document.createElement('div');
        quizCard.className = 'quiz-card';
        quizCard.dataset.level = index + 1; // 1: Remember, 2: Apply, 3: Create
        
        let levelName = "";
        let levelIcon = "";
        if (index === 0) {
            levelName = "ระดับ 1: ความจำและความเข้าใจ (Remember & Understand)";
            levelIcon = "fa-brain";
        } else if (index === 1) {
            levelName = "ระดับ 2: การคิดวิเคราะห์ (Apply & Analyze)";
            levelIcon = "fa-magnifying-glass-chart";
        } else if (index === 2) {
            levelName = "ระดับ 3: การสร้างสรรค์และประเมินค่า (Evaluate & Create)";
            levelIcon = "fa-lightbulb";
        }
        
        const isCompleted = userState.quizScores[`${lesson.id}_${index}`];
        const completeBadge = isCompleted ? 
            '<span class="bloom-badge" style="background-color: var(--color-success-light); color: var(--color-success); border-color: #a7f3d0;"><i class="fa-solid fa-check"></i> ผ่านแล้ว</span>' : 
            '';

        let quizContentHtml = "";
        
        // Render according to quiz types
        if (quiz.type === 'choice') {
            // Multiple Choice Quiz
            quizContentHtml = `
                <div class="options-grid">
                    ${quiz.options.map((opt, optIdx) => `
                        <button class="option-btn" onclick="checkChoiceAnswer('${lesson.id}', ${index}, ${optIdx}, this)">
                            <span class="option-prefix">${String.fromCharCode(65 + optIdx)}</span>
                            <span>${escapeHtml(opt)}</span>
                        </button>
                    `).join('')}
                </div>
            `;
        } else if (quiz.type === 'output') {
            // Code Output Prediction Quiz
            quizContentHtml = `
                <div class="quiz-code-display">
                    <pre><code class="language-python">${escapeHtml(quiz.code)}</code></pre>
                </div>
                <div class="input-group-row">
                    <input type="text" class="input-control" placeholder="พิมพ์ผลลัพธ์ที่ได้จากการ print..." id="fillQuizInput_${lesson.id}_${index}">
                    <button class="btn btn-primary" onclick="checkFillAnswer('${lesson.id}', ${index})">ส่งคำตอบ</button>
                </div>
            `;
        } else if (quiz.type === 'coding') {
            // Live Coding Challenge Quiz
            quizContentHtml = `
                <div class="coding-hint">
                    <i class="fa-solid fa-circle-info"></i> เขียนโค้ดแก้โจทย์ปัญหาด้านล่างนี้ โดยระบบจะทำการรันโค้ดของคุณเพื่อตรวจสอบกับ TestCase อัตโนมัติ
                </div>
                <div class="quiz-coding-box">
                    <textarea id="challengeEditor_${lesson.id}_${index}" spellcheck="false">${quiz.initialCode}</textarea>
                </div>
                <div>
                    <button class="btn btn-success" id="codingSubmitBtn_${lesson.id}_${index}" onclick="checkCodingAnswer('${lesson.id}', ${index})">
                        <i class="fa-solid fa-play"></i> ทดสอบโค้ดและส่งตรวจ
                    </button>
                </div>
            `;
        }
        
        quizCard.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap;">
                <span class="bloom-badge"><i class="fa-solid ${levelIcon}"></i> ${levelName}</span>
                ${completeBadge}
            </div>
            <div class="quiz-question">${quiz.question}</div>
            ${quizContentHtml}
            <div class="quiz-feedback-box" id="feedback_${lesson.id}_${index}"></div>
        `;
        
        container.appendChild(quizCard);
        
        // Highlight Code if loaded
        if (quiz.type === 'output' && window.Prism) {
            Prism.highlightAllUnder(quizCard);
        }
        
        // Show saved status for input values/codes if already completed
        if (isCompleted) {
            showPassedFeedback(lesson.id, index, quiz);
        }
    });
}

function showPassedFeedback(lessonId, index, quiz) {
    const feedbackBox = document.getElementById(`feedback_${lessonId}_${index}`);
    if (!feedbackBox) return;
    
    feedbackBox.className = "quiz-feedback-box correct";
    feedbackBox.style.display = "block";
    feedbackBox.innerHTML = `
        <h4><i class="fa-solid fa-circle-check"></i> ถูกต้อง! (คุณผ่านการประเมินนี้แล้ว)</h4>
        <p><strong>คำอธิบาย:</strong> ${quiz.explanation || "โค้ดของคุณผ่านเกณฑ์การทดสอบทั้งหมดอย่างถูกต้อง!"}</p>
    `;
    
    // Disable inputs
    if (quiz.type === 'choice') {
        const card = feedbackBox.closest('.quiz-card');
        const buttons = card.querySelectorAll('.option-btn');
        buttons.forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === quiz.answer) {
                btn.classList.add('correct');
            }
        });
    } else if (quiz.type === 'output') {
        const input = document.getElementById(`fillQuizInput_${lessonId}_${index}`);
        const btn = input.nextElementSibling;
        input.value = quiz.answer;
        input.disabled = true;
        btn.disabled = true;
    } else if (quiz.type === 'coding') {
        const textarea = document.getElementById(`challengeEditor_${lessonId}_${index}`);
        const btn = document.getElementById(`codingSubmitBtn_${lessonId}_${index}`);
        textarea.disabled = true;
        btn.disabled = true;
    }
}

// Choice answer grading
function checkChoiceAnswer(lessonId, quizIndex, selectedOption, buttonEl) {
    const lesson = findLessonById(lessonId);
    const quiz = lesson.quizzes[quizIndex];
    const feedbackBox = document.getElementById(`feedback_${lessonId}_${quizIndex}`);
    
    const card = buttonEl.closest('.quiz-card');
    const buttons = card.querySelectorAll('.option-btn');
    
    // Clear selections
    buttons.forEach(btn => {
        btn.classList.remove('selected', 'correct', 'incorrect');
    });
    
    if (selectedOption === quiz.answer) {
        buttonEl.classList.add('correct');
        feedbackBox.className = "quiz-feedback-box correct";
        feedbackBox.innerHTML = `
            <h4><i class="fa-solid fa-circle-check"></i> ตอบถูก! ยอดเยี่ยมมาก</h4>
            <p><strong>คำอธิบาย:</strong> ${quiz.explanation}</p>
        `;
        userState.quizScores[`${lessonId}_${quizIndex}`] = true;
        saveUserState();
        checkAndCompleteLesson(lessonId);
    } else {
        buttonEl.classList.add('incorrect');
        // Highlight correct option
        buttons[quiz.answer].classList.add('correct');
        feedbackBox.className = "quiz-feedback-box incorrect";
        feedbackBox.innerHTML = `
            <h4><i class="fa-solid fa-circle-xmark"></i> ยังไม่ถูก! ลองคิดใหม่อีกครั้ง</h4>
            <p><strong>คำอธิบาย:</strong> ${quiz.explanation}</p>
        `;
    }
    
    feedbackBox.style.display = "block";
}

// Text output prediction grading
function checkFillAnswer(lessonId, quizIndex) {
    const lesson = findLessonById(lessonId);
    const quiz = lesson.quizzes[quizIndex];
    const feedbackBox = document.getElementById(`feedback_${lessonId}_${quizIndex}`);
    const inputEl = document.getElementById(`fillQuizInput_${lessonId}_${quizIndex}`);
    
    const userAnswer = inputEl.value.trim();
    
    if (userAnswer === quiz.answer.trim()) {
        feedbackBox.className = "quiz-feedback-box correct";
        feedbackBox.innerHTML = `
            <h4><i class="fa-solid fa-circle-check"></i> ถูกต้อง! ผลลัพธ์ตรงเป๊ะ</h4>
            <p><strong>คำอธิบาย:</strong> ${quiz.explanation}</p>
        `;
        inputEl.disabled = true;
        inputEl.nextElementSibling.disabled = true;
        userState.quizScores[`${lessonId}_${quizIndex}`] = true;
        saveUserState();
        checkAndCompleteLesson(lessonId);
    } else {
        feedbackBox.className = "quiz-feedback-box incorrect";
        feedbackBox.innerHTML = `
            <h4><i class="fa-solid fa-circle-xmark"></i> คำตอบไม่ตรง! ลองตรวจสอบไวยากรณ์และค่าการแสดงผลอีกที</h4>
            <p>คำแนะนำ: ดูจำนวนช่องว่าง พิมพ์พิมพ์ใหญ่พิมพ์เล็ก หรืออัญประกาศให้ตรงกับเอาท์พุตจริง</p>
        `;
    }
    feedbackBox.style.display = "block";
}

// Code challenge runtime grading using Pyodide
async function checkCodingAnswer(lessonId, quizIndex) {
    const lesson = findLessonById(lessonId);
    const quiz = lesson.quizzes[quizIndex];
    const feedbackBox = document.getElementById(`feedback_${lessonId}_${quizIndex}`);
    const textareaEl = document.getElementById(`challengeEditor_${lessonId}_${quizIndex}`);
    const submitBtn = document.getElementById(`codingSubmitBtn_${lessonId}_${quizIndex}`);
    
    if (!pyodideEngine) {
        alert("กรุณารอระบบรันโค้ด Python โหลดให้เรียบร้อยก่อนทำการกดส่งตรวจ!");
        return;
    }
    
    const userCode = textareaEl.value;
    const testCode = quiz.testCode;
    
    // Assemble driver test program
    const escapedUserCode = userCode.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
    const fullExecutionCode = `
${userCode}

# Driver test execution
code_submitted = """${escapedUserCode}"""
${testCode}
`;
    
    try {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> กำลังตรวจโค้ด...`;
        
        // Create an isolated state for capturing output
        let consoleBuffer = [];
        pyodideEngine.setStdout({
            batched: (text) => consoleBuffer.push(text)
        });
        pyodideEngine.setStderr({
            batched: (text) => consoleBuffer.push(text)
        });
        
        // Execute code in Pyodide
        await pyodideEngine.runPythonAsync(fullExecutionCode);
        
        const results = consoleBuffer.join('\n');
        
        // Restore default console redirect hooks
        pyodideEngine.setStdout({
            batched: (text) => appendToConsole(text, 'output')
        });
        pyodideEngine.setStderr({
            batched: (text) => appendToConsole(text, 'error')
        });
        
        if (results.includes("SUCCESS:")) {
            // Parse success message
            const successMsg = results.split("SUCCESS:")[1].split('\n')[0].trim();
            feedbackBox.className = "quiz-feedback-box correct";
            feedbackBox.innerHTML = `
                <h4><i class="fa-solid fa-circle-check"></i> ตรวจผ่าน! ยินดีด้วยคุณบรรลุ Bloom ระดับ 3</h4>
                <p><strong>ผลตรวจ:</strong> ${successMsg}</p>
            `;
            textareaEl.disabled = true;
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> ส่งแล้ว`;
            userState.quizScores[`${lessonId}_${quizIndex}`] = true;
            saveUserState();
            checkAndCompleteLesson(lessonId);
        } else {
            // Test case failed
            let failMsg = "โค้ดทำงานได้แต่ไม่ผ่านเคสทดสอบ";
            if (results.includes("FAIL:")) {
                failMsg = results.split("FAIL:")[1].split('\n')[0].trim();
            } else if (results.includes("ERROR:")) {
                failMsg = results.split("ERROR:")[1].split('\n')[0].trim();
            }
            feedbackBox.className = "quiz-feedback-box incorrect";
            feedbackBox.innerHTML = `
                <h4><i class="fa-solid fa-circle-xmark"></i> การทดสอบล้มเหลว (Test Case Failed)</h4>
                <p><strong>ปัญหา:</strong> ${failMsg}</p>
                <p class="tip-text">ลองปรับตรรกะ ชื่อฟังก์ชัน หรือค่าสะสมผลลัพธ์ใหม่ แล้วกดทดสอบส่งอีกครั้ง</p>
            `;
            submitBtn.disabled = false;
            submitBtn.innerHTML = `<i class="fa-solid fa-play"></i> ทดสอบโค้ดและส่งตรวจ`;
        }
    } catch (err) {
        // Syntax error or other python runtime issues outside driver assertions
        feedbackBox.className = "quiz-feedback-box incorrect";
        feedbackBox.innerHTML = `
            <h4><i class="fa-solid fa-bug"></i> เกิดข้อผิดพลาดของไวยากรณ์ (Syntax/Runtime Error)</h4>
            <pre style="font-size: 0.8rem; background-color: var(--color-error-light); padding: 0.5rem; border-radius: var(--border-radius-sm); border: 1px solid #fecaca; white-space: pre-wrap; margin-top: 0.5rem;">${err.message}</pre>
        `;
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<i class="fa-solid fa-play"></i> ทดสอบโค้ดและส่งตรวจ`;
        
        // Restore default console redirects
        pyodideEngine.setStdout({
            batched: (text) => appendToConsole(text, 'output')
        });
        pyodideEngine.setStderr({
            batched: (text) => appendToConsole(text, 'error')
        });
    }
    
    feedbackBox.style.display = "block";
}

// Check if all quizzes in the current lesson are completed. If so, auto mark lesson as completed
function checkAndCompleteLesson(lessonId) {
    const lesson = findLessonById(lessonId);
    if (!lesson || !lesson.quizzes) return;
    
    let allPassed = true;
    lesson.quizzes.forEach((quiz, index) => {
        if (!userState.quizScores[`${lessonId}_${index}`]) {
            allPassed = false;
        }
    });
    
    if (allPassed && !userState.completedLessons[lessonId]) {
        userState.completedLessons[lessonId] = true;
        saveUserState();
        renderSidebarMenu();
        updateLessonNavButtons();
        // Visual reward
        showSparkleEffect();
    }
}

// Visual effect on completing a lesson
function showSparkleEffect() {
    // Just a clean console message and a small float alert
    appendToConsole("\n✨ ยอดเยี่ยมมาก! คุณทำแบบทดสอบผ่านเกณฑ์ครบถ้วนสมบูรณ์ของบทเรียนนี้แล้ว ระบบได้บันทึกความสำเร็จนี้ไว้เรียบร้อย! 🎓", "info");
}

// 7. UTILITY HELPER FUNCTIONS
function findLessonById(lessonId) {
    let result = null;
    courseContent.modules.forEach(mod => {
        mod.lessons.forEach(les => {
            if (les.id === lessonId) {
                result = les;
            }
        });
    });
    return result;
}

function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// 8. EVENT BINDINGS & APP SETUP
document.addEventListener('DOMContentLoaded', async () => {
    // Load state
    loadUserState();
    
    // Dynamic Layout Rendering
    renderSidebarMenu();
    updateProgressUI();
    
    // Routing configuration
    window.addEventListener('hashchange', handleRoute);
    handleRoute(); // Call once at start
    
    // Mobile Drawer Setup
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');
    const sidebar = document.getElementById('sidebar');
    
    if (mobileMenuBtn && sidebar) {
        mobileMenuBtn.addEventListener('click', () => {
            sidebar.classList.add('open');
        });
    }
    
    if (closeSidebarBtn && sidebar) {
        closeSidebarBtn.addEventListener('click', () => {
            sidebar.classList.remove('open');
        });
    }
    
    // Playground Actions
    const btnRunCode = document.getElementById('btnRunCode');
    const btnResetCode = document.getElementById('btnResetCode');
    const btnClearConsole = document.getElementById('btnClearConsole');
    const codeEditor = document.getElementById('codeEditor');
    
    if (btnRunCode && codeEditor) {
        btnRunCode.addEventListener('click', () => {
            const code = codeEditor.value;
            // Save draft
            if (currentLesson) {
                userState.savedCode[currentLesson.id] = code;
                saveUserState();
            }
            runPythonCode(code);
        });
    }
    
    if (btnResetCode && codeEditor) {
        btnResetCode.addEventListener('click', () => {
            if (currentLesson && confirm("คุณแน่ใจหรือไม่ที่จะรีเซ็ตโค้ดของหน้าต่างนี้กลับไปเป็นตัวอย่างเริ่มต้น?")) {
                codeEditor.value = currentLesson.playgroundCode;
                userState.savedCode[currentLesson.id] = currentLesson.playgroundCode;
                saveUserState();
                appendToConsole("--- รีเซ็ตตัวอย่างโค้ดเรียบร้อย ---", "info");
            }
        });
    }
    
    if (btnClearConsole) {
        btnClearConsole.addEventListener('click', () => {
            const consoleOutput = document.getElementById('consoleOutput');
            if (consoleOutput) {
                consoleOutput.textContent = "ตู้คอนโซลผลลัพธ์การรันโปรแกรม...";
            }
        });
    }
    
    // Handle autosave of code editor draft on input change
    if (codeEditor) {
        codeEditor.addEventListener('input', () => {
            if (currentLesson) {
                userState.savedCode[currentLesson.id] = codeEditor.value;
                // Save quietly in memory/localstorage
                localStorage.setItem('python_freshmen_state', JSON.stringify(userState));
            }
        });
    }
    
    // Dashboard Start Button
    const btnStartLearning = document.getElementById('btnStartLearning');
    if (btnStartLearning) {
        btnStartLearning.addEventListener('click', () => {
            // Direct to the first lesson in the curriculum
            if (courseContent.modules[0] && courseContent.modules[0].lessons[0]) {
                window.location.hash = `#lesson/${courseContent.modules[0].lessons[0].id}`;
            }
        });
    }
    
    // Run Pyodide asynchronous engine in the background
    await initPyodideEngine();
});
