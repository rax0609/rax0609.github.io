// 作品集區塊組件
import React, { useState } from 'react';
import '../App.css';
import ziposimg from '../images/zipos.png';
import gcsimg from '../images/gcs.png';
import rxbotimg from '../images/rxbot.png';

function ProjectsSection() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Zipos 短網址服務",
      category: "web",
      image: ziposimg,
      description: "使用Node.js開發的全功能短網址服務，包含用戶註冊、網址縮短和統計分析。",
      link: "https://zipos.org/"
    },
    {
      id: 2,
      title: "GCS 測驗訓練",
      category: "web",
      image: gcsimg,
      description: "一個為一般民眾及醫護人員提供臨床判斷能力培訓的Web應用",
      link: "https://gcs.futuracept.com/"
    },
    {
      id: 3,
      title: "RX-BOT",
      category: "app",
      image: rxbotimg,
      description: "一個基於Discord的智能聊天機器人，提供自動化服務。",
      link: "https://bot.rxteam.net/"
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <div className="projects-container" id="projects">
      <div className="section-title">
        <h2>我的作品</h2>
        <div className="underline"></div>
      </div>
      <div className="projects-content">
        <div className="projects-filter">
          <button 
            className={filter === 'all' ? 'filter-btn active' : 'filter-btn'} 
            onClick={() => setFilter('all')}
          >
            全部
          </button>
          <button 
            className={filter === 'web' ? 'filter-btn active' : 'filter-btn'} 
            onClick={() => setFilter('web')}
          >
            網站
          </button>
          <button 
            className={filter === 'app' ? 'filter-btn active' : 'filter-btn'} 
            onClick={() => setFilter('app')}
          >
            應用程式
          </button>
          <button 
            className={filter === 'design' ? 'filter-btn active' : 'filter-btn'} 
            onClick={() => setFilter('design')}
          >
            設計
          </button>
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-img">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="btn-view-project" target="_blank" rel="noopener noreferrer">
                  查看詳情
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
