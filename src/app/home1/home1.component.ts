import { Component } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrl: './home1.component.css'
})
export class Home1Component {
  items = [
    {
      image: '../../assets/img/interview.png',
      altText: 'Community Interviews',
      title: 'Community Interviews',
      description: 'At Apna College, we conduct community interviews to understand the unique challenges and needs of aspiring software developers. These interviews help us gather valuable insights into how our coaching programs can be tailored to better support learners. By engaging with students and professionals, we refine our curriculum and coaching strategies to address specific pain points, ensuring our community benefits from the most relevant and effective guidance. Our goal is to empower each individual with the skills and knowledge required to excel in the ever-evolving tech landscape.',
      link: '#'
    },
    {
      image: '../../assets/img/data.png',
      altText: 'Data analysis',
      title: 'Data analysis',
      description: 'At Apna College, our data analysis process plays a crucial role in enhancing our software coaching programs. We meticulously analyze feedback and performance data from our learners to identify trends, strengths, and areas needing improvement. This data-driven approach allows us to refine our coaching methodologies, develop targeted training modules, and provide personalized support to ensure that each student achieves their full potential. By leveraging detailed analytics, we continuously enhance our offerings and ensure our coaching aligns with industry standards and learner needs.',
      link: '#'
    },
    {
      image: '../../assets/img/plan.png',  
      altText: 'Collaborative Planning',
      title: 'Collaborative Planning',
      description: 'At Apna College, collaborative planning is key to optimizing our software coaching programs. We actively engage with students, industry experts, and faculty to co-create and refine our curriculum. This collaborative approach ensures that our coaching strategies are aligned with current industry trends and student needs. By involving all stakeholders in the planning process, we develop tailored learning paths, address specific challenges, and set clear goals for success. Our commitment to collaborative planning helps us deliver impactful coaching that drives real-world skills and career growth.',
      link: '#'
    },
    {
      image: '../../assets/img/proj.png',  
      altText: 'Project Implementation',
      title: 'Project Implementation',
      description: 'At Apna College, our project implementation phase is designed to turn theoretical knowledge into practical expertise. We guide students through hands-on projects that mirror real-world challenges, allowing them to apply their skills in a structured environment. Each project is meticulously planned and executed with clear objectives, milestones, and deliverables. By providing mentorship and resources throughout the implementation process, we ensure that students gain valuable experience and build a robust portfolio. This practical approach bridges the gap between learning and professional application, preparing our students for success in the software industry.'
      ,
      link: '#'
    }
  ];
}
