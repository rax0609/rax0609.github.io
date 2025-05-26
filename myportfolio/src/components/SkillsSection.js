// 技能區塊組件
import React from 'react';
import '../App.css';

function SkillsSection() {
  const skillsData = [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 80 },
    { name: 'JavaScript', level: 80 },
    { name: 'UI/UX 設計', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'TypeScript', level: 60 },
    { name: 'Git', level: 55 },
    { name: 'React.js', level: 35 }
  ];

  return (
    <div className="skills-container" id="skills">
      <div className="section-title">
        <h2>我的技能</h2>
        <div className="underline"></div>
      </div>
      <div className="skills-content">
        <p className="skills-description">
          以下是我在各個前端技術領域的專業技能水平。我持續學習並精進這些技術，以確保我能提供最高品質的開發服務。
        </p>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
