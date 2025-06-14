import React from "react";

function EducationForm({ education, setEducation }) {
  const handleChange = (idx, field, value) => {
    const updated = [...education];
    updated[idx][field] = value;
    setEducation(updated);
  };
  const handleDetailChange = (idx, didx, value) => {
    const updated = [...education];
    updated[idx].details[didx] = value;
    setEducation(updated);
  };
  const handleAddDetail = idx => {
    const updated = [...education];
    updated[idx].details.push("");
    setEducation(updated);
  };
  const handleRemoveDetail = (idx, didx) => {
    const updated = [...education];
    updated[idx].details.splice(didx, 1);
    setEducation(updated);
  };
  const handleAdd = () =>
    setEducation([
      ...education,
      { school: "", degree: "", major: "", location: "", end: "", details: [""] },
    ]);
  const handleRemove = idx =>
    setEducation(education.filter((_, i) => i !== idx));

  return (
    <div style={{ margin: "2em 0" }}>
      {education.map((edu, idx) => (
        <div key={idx} style={{ borderBottom: "1px solid #eee", marginBottom: 10, paddingBottom: 6 }}>
          <input type="text" placeholder="School" value={edu.school}
            onChange={e => handleChange(idx, "school", e.target.value)} style={{ width: "99%", marginBottom: 2 }} />
          <input type="text" placeholder="Degree (e.g. MBA)" value={edu.degree}
            onChange={e => handleChange(idx, "degree", e.target.value)} style={{ width: "99%", marginBottom: 2 }} />
          <input type="text" placeholder="Major" value={edu.major}
            onChange={e => handleChange(idx, "major", e.target.value)} style={{ width: "99%", marginBottom: 2 }} />
          <input type="text" placeholder="Location" value={edu.location}
            onChange={e => handleChange(idx, "location", e.target.value)} style={{ width: "99%", marginBottom: 2 }} />
          <input type="text" placeholder="Graduation (e.g. May 2021)" value={edu.end}
            onChange={e => handleChange(idx, "end", e.target.value)} style={{ width: "60%", marginBottom: 6 }} />
          <b>Details (Awards, Activities):</b>
          {edu.details.map((d, didx) => (
            <div key={didx} style={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
              <textarea
                value={d}
                onChange={e => handleDetailChange(idx, didx, e.target.value)}
                style={{ width: "95%" }}
                rows={1}
              />
              {edu.details.length > 1 && (
                <button type="button" onClick={() => handleRemoveDetail(idx, didx)}>-</button>
              )}
            </div>
          ))}
          <button type="button" onClick={() => handleAddDetail(idx)}>+ Add Detail</button>
          {education.length > 1 && <button type="button" onClick={() => handleRemove(idx)} style={{ marginLeft: 6 }}>Remove Degree</button>}
        </div>
      ))}
      <button type="button" onClick={handleAdd}>Add Education</button>
    </div>
  );
}

export default EducationForm;