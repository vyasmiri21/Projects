import React from "react";

function ExperienceForm({ experience, setExperience }) {
  const handleChange = (idx, field, value) => {
    const updated = [...experience];
    updated[idx][field] = value;
    setExperience(updated);
  };
  const handleBulletChange = (idx, bidx, value) => {
    const updated = [...experience];
    updated[idx].bullets[bidx] = value;
    setExperience(updated);
  };
  const handleAddBullet = (idx) => {
    const updated = [...experience];
    updated[idx].bullets.push("");
    setExperience(updated);
  };
  const handleRemoveBullet = (idx, bidx) => {
    const updated = [...experience];
    updated[idx].bullets.splice(bidx,1);
    setExperience(updated);
  };
  const handleAdd = () => setExperience([...experience, {role:"", company:"",location:"",start:"",end:"",bullets:[""]}]);
  const handleRemove = (idx) => setExperience(experience.filter((_, i)=>i!==idx));

  return (
    <div style={{margin:"2em 0"}}>
      {experience.map((exp, idx) => (
        <div key={idx} style={{borderBottom:"1px solid #eee", marginBottom:10, paddingBottom:6}}>
          <input type="text" placeholder="Company" value={exp.company}
            onChange={e => handleChange(idx, "company", e.target.value)} style={{width:'99%',marginBottom:2}} />
          <input type="text" placeholder="Job Title" value={exp.role}
            onChange={e => handleChange(idx, "role", e.target.value)} style={{width:'99%',marginBottom:2}} />
          <input type="text" placeholder="Location" value={exp.location}
            onChange={e => handleChange(idx, "location", e.target.value)} style={{width:'99%',marginBottom:2}} />
          <input type="text" placeholder="Start (e.g. Jan 2020)" value={exp.start}
            onChange={e => handleChange(idx, "start", e.target.value)} style={{width:'49%',marginRight:"2%"}}
          />
          <input type="text" placeholder="End (e.g. Dec 2022 or Present)" value={exp.end}
            onChange={e => handleChange(idx, "end", e.target.value)} style={{width:'49%'}}
          />
          <b>Bullets/Accomplishments:</b>
          {exp.bullets.map((b, bidx) => (
            <div key={bidx} style={{display:'flex',alignItems:'center',marginBottom:3}}>
              <textarea value={b} onChange={e=>handleBulletChange(idx,bidx,e.target.value)}
                style={{width:'95%'}} rows={2}/>
              {exp.bullets.length > 1 && (
                <button type="button" onClick={()=>handleRemoveBullet(idx,bidx)}>-</button>
              )}
            </div>
          ))}
          <button type="button" onClick={()=>handleAddBullet(idx)}>+ Add Bullet</button>
          {experience.length > 1 && <button type="button" onClick={()=>handleRemove(idx)} style={{marginLeft:6}}>Remove Job</button>}
        </div>
      ))}
      <button type="button" onClick={handleAdd}>Add Experience</button>
    </div>
  );
}

export default ExperienceForm;