document.addEventListener('DOMContentLoaded', function() {
    // Initialize workflow visualization
    const workflowData = [
        {
            title: "Clinical Care Response",
            steps: [
                { time: "00:00", event: "New patient admitted", details: "Patient registration initiated in emergency department", system: "Admission System" },
{ time: "00:01", event: "History verification", details: "AI scans EHR network for patient records, allergies, and past visits", system: "Record Integration" },
{ time: "00:02", event: "Clinical decision support", details: "AI analyzes symptoms and suggests exams, medications, and possible diagnoses", system: "AI Processing" },
{ time: "00:03", event: "Systems integration", details: "Auto-scheduling of exams, ICD-10 coding, billing system update", system: "Workflow Automation" }
            ],
            metrics: {
                performance: "40K tokens/s",
                reliability: "High confidence alerts",
                systems: "2+"
            }
        },
        // Add more workflows as needed
    ];

    // Function to create and animate workflow steps
    function initializeWorkflow() {
        const workflowContainer = document.querySelector('.workflow-steps');
        if (!workflowContainer) return;

        const currentWorkflow = workflowData[0]; // Start with first workflow
        
        const workflowHTML = `
            <div class="workflow-timeline">
                ${currentWorkflow.steps.map((step, index) => `
                    <div class="workflow-step" data-step="${index}">
                        <div class="step-time">${step.time}</div>
                        <div class="step-content">
                            <div class="step-event">${step.event}</div>
                            <div class="step-details">${step.details}</div>
                            <div class="step-system">${step.system}</div>
                        </div>
                        <div class="step-indicator"></div>
                    </div>
                `).join('')}
            </div>
            <br/>
            <br/>
            <div class="workflow-metrics" style="font-size:40px">
                <div class="metric">
                    <span class="metric-value">${currentWorkflow.metrics.performance}</span>
                    <span class="metric-label">Processing Speed</span>
                </div>
                <div class="metric">
                    <span class="metric-value">${currentWorkflow.metrics.reliability}</span>
                    <span class="metric-label">Reliability</span>
                </div>
                <div class="metric">
                    <span class="metric-value">${currentWorkflow.metrics.systems}</span>
                    <span class="metric-label">Integrated Systems</span>
                </div>
            </div>
        `;
        
        workflowContainer.innerHTML = workflowHTML;
        
        // Animate steps sequentially
        animateWorkflowSteps();
    }

    function animateWorkflowSteps() {
        const steps = document.querySelectorAll('.workflow-step');
        let currentStep = 0;

        function activateStep() {
            if (currentStep < steps.length) {
                steps[currentStep].classList.add('active');
                currentStep++;
                setTimeout(activateStep, 1000);
            } else {
                setTimeout(() => {
                    steps.forEach(step => step.classList.remove('active'));
                    currentStep = 0;
                    activateStep();
                }, 15000);
            }
        }

        activateStep();
    }

    // Enhanced blur functionality
    const blurredElements = document.querySelectorAll('.blur-content');
    
    blurredElements.forEach(element => {
        let timeoutId;
        
        element.addEventListener('mouseenter', function() {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            this.classList.add('unblurred');
            
            // Add floating privacy notice
            const notice = document.createElement('div');
            notice.className = 'privacy-notice';
            notice.textContent = this.dataset.privacy || 'Data encrypted in transit and at rest';
            this.appendChild(notice);
        });

        element.addEventListener('mouseleave', function() {
            const notice = this.querySelector('.privacy-notice');
            if (notice) {
                notice.remove();
            }
            
            this.classList.remove('unblurred');
            this.classList.add('blur-out');
            
            timeoutId = setTimeout(() => {
                this.classList.remove('blur-out');
            }, 180000); // 3 minutes
        });
    });

    // Model performance demo
    function initializeModelDemo() {
        const models = document.querySelectorAll('.model-card');
        
        models.forEach(model => {
            model.addEventListener('mouseenter', () => {
                const metric = model.querySelector('.performance-metric');
                metric.classList.add('pulse');
            });
            
            model.addEventListener('mouseleave', () => {
                const metric = model.querySelector('.performance-metric');
                metric.classList.remove('pulse');
            });
        });
    }

    // Data transformation animation
    function initializeTransformDemo() {
        const transformArrow = document.querySelector('.transform-arrow');
        if (!transformArrow) return;

        setInterval(() => {
            transformArrow.classList.add('pulse');
            setTimeout(() => {
                transformArrow.classList.remove('pulse');
            }, 1000);
        }, 3000);
    }

    // Standards badge rotation
    function initializeStandardsRotation() {
        const standards = document.querySelectorAll('.standard');
        let currentStandard = 0;

        setInterval(() => {
            standards.forEach(standard => standard.classList.remove('active'));
            standards[currentStandard].classList.add('active');
            currentStandard = (currentStandard + 1) % standards.length;
        }, 2000);
    }

    // Initialize all components
    initializeWorkflow();
    initializeModelDemo();
    initializeTransformDemo();
    initializeStandardsRotation();

    // Add necessary styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .pulse {
            animation: pulse 1s ease-in-out;
        }

        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }

        .privacy-notice {
            position: absolute;
            top: -30px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0,0,0,0.8);
            color: var(--accent);
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 0.9rem;
            pointer-events: none;
            white-space: nowrap;
            animation: fadeIn 0.3s ease-in;
        }

        .workflow-step {
            opacity: 0.5;
            transition: all 0.3s ease;
        }

        .workflow-step.active {
            font-size: 33px;
            opacity: 1;
            transform: translateX(10px);
        }

        .standard {
            transition: all 0.3s ease;
            opacity: 0.5;
        }

        .standard.active {
            opacity: 1;
            transform: scale(1.1);
        }
    `;
    document.head.appendChild(style);
});