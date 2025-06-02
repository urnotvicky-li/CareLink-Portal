// src/components/Patient/BloodPressure.jsx

export default function BloodPressure() {
    return (
      <div className="blood-pressure-container">
        <h3 className="section-title">Blood Pressure Measurements</h3>
        
        <div className="consistency-status">
          <div className="status-header">
            <span className="status-label">Medication Consistency: Okay</span>
            <button className="trend-btn">Trend ▼</button>
          </div>
          <p className="status-description">You've missed your pill once this week.</p>
        </div>
        
        <div className="chart-container">
          <div className="chart-placeholder">
            <svg width="100%" height="200" viewBox="0 0 500 200">
              {/* Chart background */}
              <rect width="500" height="200" fill="#f8f9fa" rx="10"/>
              
              {/* Grid lines */}
              <defs>
                <pattern id="grid" width="50" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 20" fill="none" stroke="#e0e0e0" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              
              {/* Sample data lines */}
              <polyline
                fill="none"
                stroke="#ff6b6b"
                strokeWidth="2"
                points="50,60 100,80 150,70 200,90 250,75 300,85 350,80 400,95 450,90"
              />
              <polyline
                fill="none"
                stroke="#4ecdc4"
                strokeWidth="2"
                points="50,120 100,130 150,125 200,140 250,135 300,145 350,140 400,150 450,145"
              />
              
              {/* Highlighted area */}
              <rect x="80" y="50" width="40" height="100" fill="rgba(255, 107, 107, 0.2)" rx="5"/>
              
              {/* Y-axis labels */}
              <text x="20" y="50" fontSize="12" fill="#666">140</text>
              <text x="20" y="100" fontSize="12" fill="#666">120</text>
              <text x="20" y="150" fontSize="12" fill="#666">100</text>
              <text x="20" y="180" fontSize="12" fill="#666">80</text>
              
              {/* X-axis labels */}
              <text x="80" y="195" fontSize="12" fill="#666">Week 1</text>
              <text x="180" y="195" fontSize="12" fill="#666">Week 2</text>
              <text x="280" y="195" fontSize="12" fill="#666">Week 3</text>
              <text x="380" y="195" fontSize="12" fill="#666">Week 4</text>
            </svg>
          </div>
          
          <div className="chart-legend">
            <div className="legend-item">
              <div className="legend-color systolic"></div>
              <span>Systolic</span>
            </div>
            <div className="legend-item">
              <div className="legend-color diastolic"></div>
              <span>Diastolic</span>
            </div>
          </div>
        </div>
      </div>
    );
  }