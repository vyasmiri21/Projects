import React from "react";

function ListInput({ label, items, onChange, placeholder }) {
  const handleItemChange = (idx, value) => {
    const updated = items.slice();
    updated[idx] = value;
    onChange(updated);
  };
  const handleRemove = idx => onChange(items.filter((_, i) => i !== idx));
  return (
    <div style={{ marginBottom: 6 }}>
      <label><b>{label}</b></label>
      {items.map((item, idx) =>
        <div key={idx} style={{ display: "flex", marginBottom: 2 }}>
          <input
            value={item}
            onChange={e => handleItemChange(idx, e.target.value)}
            placeholder={placeholder}
            style={{ width: "92%" }}
          />
          {items.length > 1 &&
            <button type="button" onClick={() => handleRemove(idx)} style={{ marginLeft: 4, fontSize: "1em" }}> - </button>
          }
        </div>
      )}
    </div>
  );
}

function OtherForm({ other, setOther }) {
  return (
    <div style={{ margin: "2em 0" }}>
      <ListInput
        label="Technical Skills:"
        items={other.techSkills}
        onChange={skills => setOther({ ...other, techSkills: skills })}
        placeholder="e.g. SQL, Tableau, Excel"
      />

      <ListInput
        label="Soft Skills:"
        items={other.softSkills}
        onChange={skills => setOther({ ...other, softSkills: skills })}
        placeholder="e.g. Leadership, Communication"
      />

      <ListInput
        label="Certifications & Training:"
        items={other.certifications}
        onChange={certs => setOther({ ...other, certifications: certs })}
        placeholder="e.g. Certified Scrum Master"
      />

      <ListInput
        label="Languages:"
        items={other.languages}
        onChange={langs => setOther({ ...other, languages: langs })}
        placeholder="e.g. English (native)"
      />
    </div>
  );
}

export default OtherForm;