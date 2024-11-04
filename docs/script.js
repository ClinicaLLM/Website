document.addEventListener('DOMContentLoaded', function() {
        
    const examples = [
        {
            title: "Critical Care Response",
            icon: "🏥",
            tag: "Emergency Protocol",
            steps: [
                {
                    time: "00:00",
                    event: "Patient vitals deteriorate",
                    details: "BP drops below threshold, O2 saturation critical",
                    system: "Monitoring System"
                },
                {
                    time: "00:01",
                    event: "CliniRAG detects pattern",
                    details: "AI analysis indicates severe deterioration risk",
                    system: "AI Processing"
                },
                {
                    time: "00:02",
                    event: "Alerts transformed to HL7",
                    details: "Data standardized for system compatibility",
                    system: "Data Transform"
                },
                {
                    time: "00:03",
                    event: "Systems notified",
                    details: "Emergency team alerted, ICU prepared",
                    system: "Response Active"
                }
            ],
            stats: {
                responseTime: "3s",
                accuracy: "100%",
                systems: "5+"
            }
        },
        {
            title: "Medication Reconciliation",
            icon: "💊",
            tag: "Pharmacy Protocol",
            steps: [
                {
                    time: "00:00",
                    event: "New prescription received",
                    details: "Multiple medication order processed",
                    system: "Pharmacy System"
                },
                {
                    time: "00:01",
                    event: "Cross-reference medications",
                    details: "Checking against current prescriptions",
                    system: "Database Query"
                },
                {
                    time: "00:02",
                    event: "Interaction analysis",
                    details: "AI evaluates potential drug interactions",
                    system: "AI Analysis"
                },
                {
                    time: "00:03",
                    event: "Pharmacy notified",
                    details: "Order verified and queued",
                    system: "Order Management"
                }
            ],
            stats: {
                responseTime: "2s",
                accuracy: "99.9%",
                systems: "3+"
            }
        },
        {
            title: "Lab Results Processing",
            icon: "🧪",
            tag: "Clinical Protocol",
            steps: [
                {
                    time: "00:00",
                    event: "Lab results received",
                    details: "Multiple test results incoming",
                    system: "Lab Interface"
                },
                {
                    time: "00:01",
                    event: "AI analysis complete",
                    details: "Critical values identified",
                    system: "AI Processing"
                },
                {
                    time: "00:02",
                    event: "EHR integration",
                    details: "Results mapped to patient record",
                    system: "Data Integration"
                },
                {
                    time: "00:03",
                    event: "Notifications sent",
                    details: "Care team alerted to findings",
                    system: "Alert System"
                }
            ],
            stats: {
                responseTime: "4s",
                accuracy: "99.8%",
                systems: "4+"
            }
        },
        {
            title: "Critical Care Response",
            icon: "🏥",
            tag: "Emergency Protocol",
            steps: [
                {
                    time: "00:00",
                    event: "Patient vitals deteriorate",
                    details: "BP drops below threshold, O2 saturation critical",
                    system: "Monitoring System"
                },
                {
                    time: "00:01",
                    event: "CliniRAG detects pattern",
                    details: "AI analysis indicates severe deterioration risk",
                    system: "AI Processing"
                },
                {
                    time: "00:02",
                    event: "Alerts transformed to HL7",
                    details: "Data standardized for system compatibility",
                    system: "Data Transform"
                },
                {
                    time: "00:03",
                    event: "Systems notified",
                    details: "Emergency team alerted, ICU prepared",
                    system: "Response Active"
                }
            ],
            stats: {
                performance: "40K tokens/s",
                reliability: "High confidence alerts",
                systems: "5+"
            }
        },
        {
            title: "Clinical Progress Summary",
            icon: "📈",
            tag: "Progress Tracking",
            steps: [
                {
                    time: "00:00",
                    event: "Data collection initiated",
                    details: "Gathering clinical notes, vitals, and lab results",
                    system: "Data Aggregator"
                },
                {
                    time: "00:01",
                    event: "Llama processing",
                    details: "Analyzing clinical narrative and key events",
                    system: "NLP Analysis"
                },
                {
                    time: "00:02",
                    event: "Timeline generation",
                    details: "Creating temporal progression of patient status",
                    system: "Summary Engine"
                },
                {
                    time: "00:03",
                    event: "Summary delivered",
                    details: "Comprehensive progress report generated",
                    system: "Report Generator"
                }
            ],
            stats: {
                performance: "35K tokens/s",
                reliability: "Verified by clinicians",
                systems: "4+"
            }
        },
        {
            title: "Clinical Diary Analysis",
            icon: "📝",
            tag: "Data Extraction",
            steps: [
                {
                    time: "00:00",
                    event: "Diary entry received",
                    details: "Clinical observations and notes collected",
                    system: "Input Processing"
                },
                {
                    time: "00:01",
                    event: "Llama extraction",
                    details: "Key clinical elements identified and categorized",
                    system: "NLP Engine"
                },
                {
                    time: "00:02",
                    event: "Data standardization",
                    details: "Information mapped to standard terminology",
                    system: "Terminology Service"
                },
                {
                    time: "00:03",
                    event: "Integration complete",
                    details: "Structured data added to patient record",
                    system: "EHR Integration"
                }
            ],
            stats: {
                performance: "38K tokens/s",
                reliability: "Human-validated extraction",
                systems: "3+"
            }
        },
        {
            title: "Smart EHR Search",
            icon: "🔍",
            tag: "Data Access",
            steps: [
                {
                    time: "00:00",
                    event: "Search query received",
                    details: "Natural language query processing",
                    system: "Query Processor"
                },
                {
                    time: "00:01",
                    event: "Llama processing",
                    details: "Query translated to clinical concepts",
                    system: "Semantic Engine"
                },
                {
                    time: "00:02",
                    event: "Cross-system search",
                    details: "Querying multiple data sources",
                    system: "Search Service"
                },
                {
                    time: "00:03",
                    event: "Results compilation",
                    details: "Relevant data aggregated and presented",
                    system: "Results Manager"
                }
            ],
            stats: {
                performance: "42K tokens/s",
                reliability: "Clinically validated results",
                systems: "6+"
            }
        },
        {
            title: "Clinical Decision Support",
            icon: "🎯",
            tag: "Next Steps",
            steps: [
                {
                    time: "00:00",
                    event: "Patient context analyzed",
                    details: "Current status and history evaluated",
                    system: "Context Engine"
                },
                {
                    time: "00:01",
                    event: "<b>Llama</b> analysis",
                    details: "Clinical protocols and best practices identified",
                    system: "Medical AI Engine"
                },
                {
                    time: "00:02",
                    event: "Recommendations generated",
                    details: "Evidence-based next steps proposed",
                    system: "Decision Engine"
                },
                {
                    time: "00:03",
                    event: "Actions presented",
                    details: "Prioritized recommendations delivered",
                    system: "Presentation Layer"
                }
            ],
            stats: {
                performance: "30K tokens/s",
                reliability: "Evidence-based suggestions",
                systems: "5+"
            }
        },
        {
            title: "Diagnostic Assistant",
            icon: "🔬",
            tag: "Clinical Analysis",
            steps: [
                {
                    time: "00:00",
                    event: "Symptom analysis",
                    details: "Patient symptoms and findings collected",
                    system: "Data Collector"
                },
                {
                    time: "00:01",
                    event: "<b>Llama</b> processing",
                    details: "Comparing with known disease patterns",
                    system: "Medical AI Analysis"
                },
                {
                    time: "00:02",
                    event: "Probability ranking",
                    details: "Diagnostic possibilities scored",
                    system: "Ranking Engine"
                },
                {
                    time: "00:03",
                    event: "Diagnosis suggested",
                    details: "Top differential diagnoses presented",
                    system: "Suggestion Engine"
                }
            ],
            stats: {
                performance: "32K tokens/s",
                reliability: "Clinician-supervised analysis",
                systems: "4+"
            }
        },
        {
            title: "ICD Coding Assistant",
            icon: "🏷️",
            tag: "Coding Protocol",
            steps: [
                {
                    time: "00:00",
                    event: "Clinical text analyzed",
                    details: "Medical documentation processed",
                    system: "Text Analyzer"
                },
                {
                    time: "00:01",
                    event: "<b>Llama</b> mapping",
                    details: "Conditions matched to ICD codes",
                    system: "Medical AI Mapper"
                },
                {
                    time: "00:02",
                    event: "Code verification",
                    details: "Suggested codes validated",
                    system: "Validation Engine"
                },
                {
                    time: "00:03",
                    event: "Codes finalized",
                    details: "ICD-10/11 codes assigned",
                    system: "Code Assignment"
                }
            ],
            stats: {
                performance: "36K tokens/s",
                reliability: "Expert-reviewed coding",
                systems: "3+"
            }
        }
        
    ];

    // Blur functionality
    const blurredElements = document.querySelectorAll('.blur-content');
    
    blurredElements.forEach(element => {
        let timeoutId;
        
        element.addEventListener('mouseenter', function() {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            this.classList.remove('blur-out');
            this.classList.add('unblurred');
        });

        element.addEventListener('mouseleave', function() {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            this.classList.remove('unblurred');
            this.classList.add('blur-out');
            
            timeoutId = setTimeout(() => {
                this.classList.remove('blur-out');
            }, 90000);
        });
    });

    // Example rotation functionality
    let currentIndex = 0;
    let autoRotateInterval;

    function updateExample() {
        const example = examples[currentIndex];
        const timeline = document.querySelector('.example-timeline');
        
        // Update header
        timeline.querySelector('.scenario-header h4').textContent = example.title;
        timeline.querySelector('.scenario-icon').textContent = example.icon;
        timeline.querySelector('.scenario-tag').textContent = example.tag;
    
        // Update steps
        const stepsContainer = timeline.querySelector('.timeline-steps');
        stepsContainer.innerHTML = example.steps.map(step => `
            <div class="step">
                <div class="step-indicator">
                    <div class="time">${step.time}</div>
                    <div class="pulse-dot ${step.time === '00:03' ? 'active' : ''}"></div>
                </div>
                <div class="step-content">
                    <div class="event">${step.event}</div>
                    <div class="details">${step.details}</div>
                    <div class="system-tag">${step.system}</div>
                </div>
            </div>
        `).join('');
    
        // Update stats with fallback values
        const stats = example.stats;
        const performanceValue = stats.performance || stats.responseTime || 'N/A';
        const reliabilityValue = stats.reliability || stats.accuracy || 'N/A';
        const systemsValue = stats.systems || 'N/A';

        timeline.querySelector('.scenario-stats').innerHTML = `
            <div class="stat">
                <div class="stat-value">${performanceValue}</div>
                <div class="stat-label">Performance</div>
            </div>
            <div class="stat">
                <div class="stat-value">${reliabilityValue}</div>
                <div class="stat-label">Reliability</div>
            </div>
            <div class="stat">
                <div class="stat-value">${systemsValue}</div>
                <div class="stat-label">Systems Integrated</div>
            </div>
        `;
    }

    
    function startAutoRotate() {
        clearInterval(autoRotateInterval);  // Clear any existing interval
        autoRotateInterval = setInterval(() => rotateExample('next'), 20000);
    }

    function rotateExample(direction = 'next') {
        const timeline = document.querySelector('.example-timeline');
        timeline.style.opacity = '0';
        
        setTimeout(() => {
            if (direction === 'next') {
                currentIndex = (currentIndex + 1) % examples.length;
            } else {
                currentIndex = (currentIndex - 1 + examples.length) % examples.length;
            }
            updateExample();
            timeline.style.opacity = '1';
        }, 500);

        // Reset the auto-rotate timer whenever rotation occurs
        startAutoRotate();
    }

    // Initial setup
    updateExample();
    startAutoRotate();

    // Add click handlers for rotation buttons
    document.querySelector('.rotate-btn.prev').addEventListener('click', () => rotateExample('prev'));
    document.querySelector('.rotate-btn.next').addEventListener('click', () => rotateExample('next'));
    
});