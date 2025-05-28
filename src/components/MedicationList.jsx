// src/components/MedicationList.jsx

export default function MedicationList() {
    return (
      <div className="medication-list">
        <h3>Medication</h3>
        <div className="medication-card">
          <div>
            <p className="med-name">Valsartan (10mg)</p>
            <p className="med-brand">Brand name: Diovan</p>
            <p className="med-refill">Last Refill: Apr 27, 2025</p>
          </div>
          <button className="refill-btn">Send Refill</button>
        </div>
  
        <div className="medication-card">
          <div>
            <p className="med-name">Valsartan (10mg)</p>
            <p className="med-brand">Brand name: Diovan</p>
            <p className="med-refill">Last Refill: Apr 27, 2025</p>
          </div>
          <button className="refill-btn">Send Refill</button>
        </div>
      </div>
    );
  }