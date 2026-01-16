// ========== الأسئلة الكاملة (20 سؤال) ==========
const questions = [
    {
        text: 'أكثر شيء تستمتع به أثناء التعلّم؟',
        options: [
            {
                text: 'أ) حل المشكلات وتحليلها',
                weights: { 'هندسة البرمجيات': 3, 'الأمن السيبراني': 3, 'الذكاء الاصطناعي': 2 }
            },
            {
                text: 'ب) مساعدة الناس والتعامل معهم',
                weights: { 'الطب': 3, 'التمريض': 3, 'التعليم': 2 }
            },
            {
                text: 'ج) الإبداع والتصميم',
                weights: { 'التصميم الجرافيكي': 3, 'الإعلام الرقمي': 2 }
            },
            {
                text: 'د) التنظيم واتخاذ القرار',
                weights: { 'إدارة الأعمال': 3, 'الهندسة المدنية': 2 }
            }
        ]
    },
    {
        text: 'كيف تتعامل مع الضغط والضغوط النفسية؟',
        options: [
            {
                text: 'أ) أعمل أفضل تحت ضغط عالي جداً',
                weights: { 'الطب': 3, 'الأمن السيبراني': 3 }
            },
            {
                text: 'ب) أتحمل ضغط متوسط',
                weights: { 'الهندسة المدنية': 2, 'إدارة الأعمال': 2, 'هندسة البرمجيات': 1 }
            },
            {
                text: 'ج) أفضل بيئة هادئة وإبداعية',
                weights: { 'التصميم الجرافيكي': 3, 'التعليم': 2, 'الإعلام الرقمي': 2 }
            }
        ]
    },
    {
        text: 'طبيعة الخطأ في عملك تفضّل أن تكون؟',
        options: [
            {
                text: 'أ) لا تحتمل الخطأ إطلاقًا (عالي جداً)',
                weights: { 'الطب': 3, 'التمريض': 2, 'الأمن السيبراني': 2 }
            },
            {
                text: 'ب) يمكن إصلاحها بسهولة',
                weights: { 'هندسة البرمجيات': 3, 'الهندسة المدنية': 2 }
            },
            {
                text: 'ج) غير مؤثرة ويمكن التعلم منها',
                weights: { 'التصميم الجرافيكي': 3, 'الإعلام الرقمي': 2, 'الذكاء الاصطناعي': 1 }
            }
        ]
    },
    {
        text: 'كم سنة دراسة تستطيع الالتزام بها؟',
        options: [
            {
                text: 'أ) 6 سنوات أو أكثر',
                weights: { 'الطب': 4 }
            },
            {
                text: 'ب) 4–5 سنوات',
                weights: { 'الهندسة المدنية': 3, 'التمريض': 2, 'الأمن السيبراني': 2 }
            },
            {
                text: 'ج) أقل من 4 سنوات',
                weights: { 'الإعلام الرقمي': 3, 'التصميم الجرافيكي': 3, 'إدارة الأعمال': 2 }
            }
        ]
    },
    {
        text: 'أي المواد الدراسية أقرب لك؟',
        options: [
            {
                text: 'أ) أحياء وكيمياء',
                weights: { 'الطب': 3, 'التمريض': 2 }
            },
            {
                text: 'ب) رياضيات ومنطق',
                weights: { 'الهندسة المدنية': 3, 'هندسة البرمجيات': 3, 'الذكاء الاصطناعي': 3 }
            },
            {
                text: 'ج) لغات وتواصل',
                weights: { 'التعليم': 3, 'الإعلام الرقمي': 2 }
            },
            {
                text: 'د) فن وتصميم',
                weights: { 'التصميم الجرافيكي': 4 }
            }
        ]
    },
    {
        text: 'هل تفضل العمل بمفردك أم مع فريق؟',
        options: [
            {
                text: 'أ) وحدي بشكل كامل',
                weights: { 'هندسة البرمجيات': 2, 'التصميم الجرافيكي': 2 }
            },
            {
                text: 'ب) مزيج من العمل الفردي والجماعي',
                weights: { 'الهندسة المدنية': 3, 'إدارة الأعمال': 2, 'الأمن السيبراني': 2 }
            },
            {
                text: 'ج) مع فريق بشكل أساسي',
                weights: { 'الطب': 2, 'التمريض': 3, 'التعليم': 2 }
            }
        ]
    },
    {
        text: 'ما رأيك بالعمل الروتيني والتكراري؟',
        options: [
            {
                text: 'أ) أحب الروتين والاستقرار',
                weights: { 'التعليم': 3, 'الطب': 2 }
            },
            {
                text: 'ب) أحتمله لكن أفضل التنوع',
                weights: { 'إدارة الأعمال': 2, 'الهندسة المدنية': 2, 'التمريض': 1 }
            },
            {
                text: 'ج) أكره الروتين وأحب التنوع المستمر',
                weights: { 'الإعلام الرقمي': 3, 'التصميم الجرافيكي': 3, 'الأمن السيبراني': 2 }
            }
        ]
    },
    {
        text: 'هل تحب التعلم المستمر والتطور؟',
        options: [
            {
                text: 'أ) نعم، بشغف كبير جداً',
                weights: { 'الذكاء الاصطناعي': 3, 'الأمن السيبراني': 3, 'هندسة البرمجيات': 2 }
            },
            {
                text: 'ب) نعم، لكن بمعدل طبيعي',
                weights: { 'الهندسة المدنية': 2, 'إدارة الأعمال': 2, 'التعليم': 1 }
            },
            {
                text: 'ج) أفضل الاستقرار والثبات',
                weights: { 'التمريض': 2, 'التصميم الجرافيكي': 1 }
            }
        ]
    },
    {
        text: 'ما أهمية الراتب والمكاسب المالية بالنسبة لك؟',
        options: [
            {
                text: 'أ) أولوية أولى',
                weights: { 'الطب': 3, 'الأمن السيبراني': 3, 'هندسة البرمجيات': 2 }
            },
            {
                text: 'ب) مهمة لكن ليست الأساس',
                weights: { 'إدارة الأعمال': 2, 'الهندسة المدنية': 2 }
            },
            {
                text: 'ج) أهتم أكثر بتحقيق الذات والإبداع',
                weights: { 'التعليم': 3, 'التصميم الجرافيكي': 2, 'الإعلام الرقمي': 2 }
            }
        ]
    },
    {
        text: 'كيف ترى نفسك في المستقبل؟',
        options: [
            {
                text: 'أ) متخصص وخبير في مجال واحد عميق',
                weights: { 'الطب': 3, 'الأمن السيبراني': 2, 'هندسة البرمجيات': 1 }
            },
            {
                text: 'ب) قائد ومدير فريق ومشروع',
                weights: { 'إدارة الأعمال': 3, 'الهندسة المدنية': 2 }
            },
            {
                text: 'ج) رائد أعمال أو صاحب مشروع خاص',
                weights: { 'التصميم الجرافيكي': 2, 'الإعلام الرقمي': 3 }
            },
            {
                text: 'د) باحث ومكتشف ومخترع',
                weights: { 'الذكاء الاصطناعي': 3, 'الأمن السيبراني': 1 }
            }
        ]
    },
    {
        text: 'هل تفضل العمل في بيئة منظمة أم ديناميكية؟',
        options: [
            {
                text: 'أ) منظمة وهادئة وآمنة',
                weights: { 'التعليم': 3, 'إدارة الأعمال': 2, 'التمريض': 1 }
            },
            {
                text: 'ب) ديناميكية وسريعة ومتطورة',
                weights: { 'هندسة البرمجيات': 3, 'الأمن السيبراني': 2, 'الإعلام الرقمي': 2 }
            },
            {
                text: 'ج) مزيج من الاثنين',
                weights: { 'الهندسة المدنية': 2, 'الطب': 2, 'التصميم الجرافيكي': 1 }
            }
        ]
    },
    {
        text: 'مدى أهمية التأثير الاجتماعي الإيجابي لك؟',
        options: [
            {
                text: 'أ) بالغة الأهمية جداً',
                weights: { 'الطب': 3, 'التمريض': 3, 'التعليم': 3 }
            },
            {
                text: 'ب) مهمة إلى حد ما',
                weights: { 'الهندسة المدنية': 2, 'إدارة الأعمال': 2, 'الأمن السيبراني': 1 }
            },
            {
                text: 'ج) ليست الأولوية الأساسية',
                weights: { 'هندسة البرمجيات': 2, 'التصميم الجرافيكي': 2 }
            }
        ]
    },
    {
        text: 'هل تحب السفر والعمل بأماكن مختلفة؟',
        options: [
            {
                text: 'أ) نعم، أحب المغامرة والتنقل',
                weights: { 'الهندسة المدنية': 3, 'إدارة الأعمال': 2, 'الطب': 1 }
            },
            {
                text: 'ب) أفضل الاستقرار في مكان واحد',
                weights: { 'هندسة البرمجيات': 3, 'التعليم': 2, 'التصميم الجرافيكي': 1 }
            },
            {
                text: 'ج) لا يهمني الموقع الجغرافي',
                weights: { 'الإعلام الرقمي': 2, 'الأمن السيبراني': 1 }
            }
        ]
    },
    {
        text: 'ما نوع المشاكل التي تحب حلها؟',
        options: [
            {
                text: 'أ) مشاكل تقنية ومنطقية معقدة',
                weights: { 'هندسة البرمجيات': 3, 'الأمن السيبراني': 3, 'الذكاء الاصطناعي': 2 }
            },
            {
                text: 'ب) مشاكل إنسانية واجتماعية',
                weights: { 'التعليم': 3, 'التمريض': 2, 'الطب': 1 }
            },
            {
                text: 'ج) مشاكل تنظيمية وإدارية',
                weights: { 'إدارة الأعمال': 3, 'الهندسة المدنية': 2 }
            },
            {
                text: 'د) مشاكل فنية وإبداعية',
                weights: { 'التصميم الجرافيكي': 3, 'الإعلام الرقمي': 2 }
            }
        ]
    },
    {
        text: 'هل أنت شخص يفضل الاتصال المباشر مع الناس؟',
        options: [
            {
                text: 'أ) نعم، أحب التواصل المباشر والقيادة',
                weights: { 'الطب': 3, 'التمريض': 3, 'التعليم': 3, 'إدارة الأعمال': 2 }
            },
            {
                text: 'ب) أفضل التواصل الرقمي والعمل عن بعد',
                weights: { 'هندسة البرمجيات': 3, 'الإعلام الرقمي': 2, 'التصميم الجرافيكي': 1 }
            },
            {
                text: 'ج) لا يهمني الطريقة طالما العمل متقن',
                weights: { 'الذكاء الاصطناعي': 2, 'الأمن السيبراني': 1 }
            }
        ]
    },
    {
        text: 'مستوى تحملك للمسؤولية والمحاسبية؟',
        options: [
            {
                text: 'أ) مسؤولية عالية جداً (أتحمل الضغط)',
                weights: { 'الطب': 3, 'الأمن السيبراني': 3 }
            },
            {
                text: 'ب) مسؤولية معتدلة ومتوازنة',
                weights: { 'هندسة البرمجيات': 2, 'الهندسة المدنية': 2, 'إدارة الأعمال': 1 }
            },
            {
                text: 'ج) أفضل مسؤولية خفيفة وحرية أكثر',
                weights: { 'التصميم الجرافيكي': 2, 'التعليم': 2, 'الإعلام الرقمي': 1 }
            }
        ]
    },
    {
        text: 'هل تستمتع بالعمل مع البيانات والتحليل؟',
        options: [
            {
                text: 'أ) نعم، بشكل كبير جداً',
                weights: { 'الذكاء الاصطناعي': 3, 'الأمن السيبراني': 2, 'إدارة الأعمال': 2 }
            },
            {
                text: 'ب) إلى حد ما وبشكل متوسط',
                weights: { 'الهندسة المدنية': 2, 'الطب': 2, 'هندسة البرمجيات': 1 }
            },
            {
                text: 'ج) لا، أفضل العمل الإبداعي والعملي',
                weights: { 'التصميم الجرافيكي': 3, 'الإعلام الرقمي': 2, 'التمريض': 1 }
            }
        ]
    },
    {
        text: 'ما درجة اهتمامك بالعمل الحر والاستقلالية؟',
        options: [
            {
                text: 'أ) أحب الاستقلالية الكاملة تماماً',
                weights: { 'التصميم الجرافيكي': 3, 'الإعلام الرقمي': 3 }
            },
            {
                text: 'ب) استقلالية مع إشراف وتوجيه',
                weights: { 'هندسة البرمجيات': 2, 'الأمن السيبراني': 2, 'الهندسة المدنية': 1 }
            },
            {
                text: 'ج) أفضل العمل المنظم والموجه بوضوح',
                weights: { 'التعليم': 3, 'الطب': 2, 'التمريض': 1 }
            }
        ]
    },
    {
        text: 'كيف تتعامل مع التطور التكنولوجي السريع؟',
        options: [
            {
                text: 'أ) أستمتع به وأتابعه بشغف كبير',
                weights: { 'الذكاء الاصطناعي': 3, 'الأمن السيبراني': 3, 'هندسة البرمجيات': 2 }
            },
            {
                text: 'ب) أتقبله ولكن بمعدل أبطأ',
                weights: { 'الهندسة المدنية': 2, 'التعليم': 2, 'الطب': 1 }
            },
            {
                text: 'ج) أفضل الاستقرار والتقاليد المثبتة',
                weights: { 'التمريض': 2, 'التصميم الجرافيكي': 1 }
            }
        ]
    }
];

// ========== متغيرات الحالة ==========
let currentQuestionIndex = 0;
let userAnswers = [];
let scores = {};
let testStarted = false;
let testStartTime = null;

// ========== تهيئة ==========
function initializeScores() {
    Object.keys(specializations).forEach(spec => {
        scores[spec] = 0;
    });
}

// ========== وظائف الاختبار الأساسية ==========
function startTest() {
    if (!questions || questions.length === 0) {
        console.error('الأسئلة غير محملة');
        document.getElementById('questionTitle').textContent = 'خطأ: الأسئلة غير محملة';
        return;
    }
    
    initializeScores();
    currentQuestionIndex = 0;
    userAnswers = [];
    testStarted = true;
    testStartTime = Date.now();
    displayQuestion();
    logEvent('test_started', { total_questions: questions.length });
}

function displayQuestion() {
    if (!questions || questions.length === 0) {
        showNotification('خطأ: الأسئلة لم تُحمل بشكل صحيح', 'error');
        return;
    }
    
    if (currentQuestionIndex >= questions.length) {
        finishTest();
        return;
    }

    const question = questions[currentQuestionIndex];
    
    // تحديث السؤال
    const questionTitle = document.getElementById('questionTitle');
    if (questionTitle) {
        questionTitle.textContent = question.text;
    }
    
    const optionsContainer = document.getElementById('optionsContainer');
    if (!optionsContainer) {
        console.error('optionsContainer غير موجود');
        return;
    }
    
    optionsContainer.innerHTML = '';

    if (!question.options || question.options.length === 0) {
        showNotification('خطأ: الخيارات غير محملة', 'error');
        return;
    }

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.innerHTML = `<span>${option.text}</span>`;
        
        if (userAnswers[currentQuestionIndex] === index) {
            optionDiv.classList.add('selected');
        }

        optionDiv.onclick = () => selectOption(index, optionDiv);
        optionDiv.style.cursor = 'pointer';
        
        optionDiv.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                selectOption(index, optionDiv);
            }
        });
        optionsContainer.appendChild(optionDiv);
    });

    // تحديث شريط التقدم بانيميشن
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    animateProgressBar(progress);
    
    // تحديث النص
    const currentQ = document.getElementById('currentQuestion');
    const totalQ = document.getElementById('totalQuestions');
    if (currentQ) currentQ.textContent = currentQuestionIndex + 1;
    if (totalQ) totalQ.textContent = questions.length;

    // إظهار/إخفاء زر السابق
    const prevBtn = document.getElementById('prevBtn');
    if (prevBtn) {
        prevBtn.style.display = currentQuestionIndex > 0 ? 'block' : 'none';
    }

    // Scroll to top
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
}

function animateProgressBar(targetPercent) {
    const progressFill = document.getElementById('progressFill');
    const currentPercent = parseFloat(progressFill.style.width) || 0;
    const increment = (targetPercent - currentPercent) / 20;
    let current = currentPercent;

    const animate = () => {
        current += increment;
        if ((increment > 0 && current < targetPercent) || (increment < 0 && current > targetPercent)) {
            progressFill.style.width = current + '%';
            requestAnimationFrame(animate);
        } else {
            progressFill.style.width = targetPercent + '%';
        }
    };
    animate();
}

function selectOption(index, element) {
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    userAnswers[currentQuestionIndex] = index;
    
    // Haptic feedback
    if (navigator.vibrate) {
        navigator.vibrate(100);
    }

    // تأخير صغير قبل الانتقال
    setTimeout(() => {
        showNotification('تم تسجيل إجابتك ✓', 'success');
    }, 100);
}

function nextQuestion() {
    if (userAnswers[currentQuestionIndex] === undefined) {
        showNotification('الرجاء اختيار خيار قبل المتابعة', 'warning');
        return;
    }

    const question = questions[currentQuestionIndex];
    const selectedOption = question.options[userAnswers[currentQuestionIndex]];
    
    // إضافة النقاط
    Object.keys(selectedOption.weights).forEach(spec => {
        scores[spec] += selectedOption.weights[spec];
    });

    currentQuestionIndex++;
    
    if (currentQuestionIndex >= questions.length) {
        finishTest();
    } else {
        displayQuestion();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function finishTest() {
    const testDuration = Math.round((Date.now() - testStartTime) / 1000);
    logEvent('test_completed', { duration: testDuration, questions: questions.length });
    calculateResults();
}

function calculateResults() {
    const resultsData = {
        scores: scores,
        answers: userAnswers,
        timestamp: new Date().toISOString(),
        duration: Math.round((Date.now() - testStartTime) / 1000)
    };
    localStorage.setItem('testResults', JSON.stringify(resultsData));
    saveResults();
    
    // إعادة توجيه إلى صفحة النتائج
    window.location.href = 'results.html';
}

function calculatePercentage(spec, scoresObj = scores) {
    const maxScore = questions.length * 4;
    const percentage = Math.round((scoresObj[spec] / maxScore) * 100);
    return Math.min(100, Math.max(0, percentage));
}

function showSpecializationDetails(specName) {
    const spec = specializations[specName];
    const percentage = calculatePercentage(specName);

    let html = `
        <div class="specialization-header">
            <h2>${spec.emoji} ${spec.name}</h2>
            <p>نسبة التوافق: <strong>${percentage}%</strong></p>
            <p style="margin-top: 8px; color: #999; font-size: 0.9rem;">مستوى الصعوبة: ${spec.difficulty} • مدة الدراسة: ${spec.duration}</p>
        </div>

        <div class="spec-section">
            <h3>📝 نبذة</h3>
            <p>${spec.description}</p>
        </div>

        <div class="spec-section">
            <h3>💪 المهارات المطلوبة</h3>
            <ul>
                ${spec.skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        </div>

        <div class="spec-section">
            <h3>✅ الميزات والفوائد</h3>
            <ul>
                ${spec.advantages.map(adv => `<li>${adv}</li>`).join('')}
            </ul>
        </div>

        <div class="spec-section">
            <h3>⚠️ التحديات والعيوب</h3>
            <ul>
                ${spec.disadvantages.map(dis => `<li>${dis}</li>`).join('')}
            </ul>
        </div>

        <div class="spec-section">
            <h3>👥 يناسبك إذا كنت:</h3>
            <p>${spec.fitFor}</p>
        </div>

        <div class="spec-section">
            <h3>🚀 المسارات الوظيفية المستقبلية</h3>
            <p>${spec.futureCareer}</p>
        </div>
    `;

    if (document.getElementById('specializationDetails')) {
        document.getElementById('specializationDetails').innerHTML = html;
    }
}

// حفظ النتائج
function saveResults() {
    const resultsData = {
        scores: scores,
        answers: userAnswers,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('testResults', JSON.stringify(resultsData));
}

function getResults() {
    const data = localStorage.getItem('testResults');
    return data ? JSON.parse(data) : null;
}

// ========== Logging & Analytics ==========
function logEvent(eventName, eventData = {}) {
    const analytics = JSON.parse(localStorage.getItem('analytics') || '{}');
    if (!analytics.events) analytics.events = [];
    
    analytics.events.push({
        name: eventName,
        timestamp: new Date().toISOString(),
        data: eventData
    });
    
    // احتفظ بآخر 100 حدث فقط
    if (analytics.events.length > 100) {
        analytics.events = analytics.events.slice(-100);
    }
    
    localStorage.setItem('analytics', JSON.stringify(analytics));
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'warning' ? '#ff9800' : type === 'error' ? '#f44336' : type === 'success' ? '#4caf50' : '#2196F3'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        font-weight: 500;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// تهيئة البرنامج عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('optionsContainer')) {
        initializeScores();
    }
});
