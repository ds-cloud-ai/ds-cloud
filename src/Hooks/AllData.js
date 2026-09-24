import { useEffect, useState } from "react";
// for work_images
import work1 from "../assets/images/work_images/devops-001.jpg";
import work2 from "../assets/images/work_images/cloud-002.jpg";
import work3 from "../assets/images/work_images/devops-003.jpg";
import work4 from "../assets/images/work_images/ai-automation-004.jpg";
import work5 from "../assets/images/work_images/devops-005.jpg";
import work6 from "../assets/images/work_images/cloud-006.jpg";
import work7 from "../assets/images/work_images/devops-007.jpg";
import work8 from "../assets/images/work_images/ai-automation-008.jpg";
import work9 from "../assets/images/work_images/devops-009.jpg";
// works small images
import workSmall1 from "../assets/images/work_images/small/devops-001.jpg";
import workSmall2 from "../assets/images/work_images/small/cloud-002.jpg";
import workSmall3 from "../assets/images/work_images/small/devops-003.jpg";
import workSmall4 from "../assets/images/work_images/small/ai-automation-004.jpg";
import workSmall5 from "../assets/images/work_images/small/devops-005.jpg";
import workSmall6 from "../assets/images/work_images/small/cloud-006.jpg";
import workSmall7 from "../assets/images/work_images/small/devops-007.jpg";
import workSmall8 from "../assets/images/work_images/small/ai-automation-008.jpg";
import workSmall9 from "../assets/images/work_images/small/devops-009.jpg";
// blog post images
import blog6 from "../assets/images/blog_images/6.jpg";
import blog4 from "../assets/images/blog_images/4.jpg";
import blog2 from "../assets/images/blog_images/2.jpg";
import blog1 from "../assets/images/blog_images/1.jpg";
import blog3 from "../assets/images/blog_images/3.jpg";
import blog5 from "../assets/images/blog_images/5.jpg";
// blog image small
import blogSmall6 from "../assets/images/blog_images/small/6.jpg";
import blogSmall4 from "../assets/images/blog_images/small/4.jpg";
import blogSmall2 from "../assets/images/blog_images/small/2.jpg";
import blogSmall1 from "../assets/images/blog_images/small/1.jpg";
import blogSmall3 from "../assets/images/blog_images/small/3.jpg";
import blogSmall5 from "../assets/images/blog_images/small/5.jpg";

import img1 from "../assets/images/slider/brand-1.png";
import img2 from "../assets/images/slider/brand-2.png";
import img3 from "../assets/images/slider/brand-3.png";
import img4 from "../assets/images/slider/brand-4.png";
import img5 from "../assets/images/slider/brand-5.png";
//  icon use as img here
import icon from "../assets/images/icons/icon-1.svg";
import icon1 from "../assets/images/icons/icon-2.svg";
import icon2 from "../assets/images/icons/icon-3.svg";
import icon3 from "../assets/images/icons/icon-4.svg";
import icon4 from "../assets/images/icons/icon-5.svg";
import icon5 from "../assets/images/icons/icon-6.svg";
// contact image
import iconPhone from "../assets/images/contact/phone-call 1.png";
import iconEmail from "../assets/images/contact/email 1.png";
import iconMap from "../assets/images/contact/map 1.png";
import { CgNotes } from "react-icons/cg";
import { FaBlogger, FaRegUser } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const AllData = () => {
  const [check, setCheck] = useState(false);
  const [local, setLocal] = useState(localStorage.getItem("theme"));
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  // dark and light theme controls
  useEffect(() => {
    const themeValue = localStorage?.getItem("theme");

    if (!themeValue) {
      setCheck(false);
      localStorage.setItem("theme", "light");
    } else {
      themeValue === "dark" && setCheck(true);
      themeValue === "light" && setCheck(false);
    }

    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, []);

  // Create and light theme function
  const handleTheme = (value) => {
    if (value === "light") {
      setCheck(false);
      localStorage.setItem("theme", "light");
      setLocal("light");
    } else {
      setCheck(true);
      localStorage.setItem("theme", "dark");
      setLocal("dark");
    }
    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  // fillter portfilo data
  const handleData = (text) => {
    if (text === "All") {
      setData(workItems);
    } else {
      const findData = workItems.filter((item) => item.tag === text);
      setData(findData);
    }
  };

  // find items for portfilo  modal open
  const handleModelData = (id) => {
    const find = workItems.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // find items for Blogs  modal open
  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // Active navlinks function
  function NavLink({
    to,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
  }) {
    let location = useLocation();
    let isActive = location.pathname === to;
    let allClassNames =
      className + (isActive ? `${activeClassName}` : `${inactiveClassName}`);
    return <Link className={allClassNames} to={to} {...rest} />;
  }

  // Elements for protfilo section
  const workItems = [
    {
      id: "1",
      tag: "DevOps",
      title: "Principal DevOps Engineer", // 003
      img: work1,
      imgSmall: workSmall1,
      bg: "#FFF0F0",
      client: "",
      langages: "",
      link: "",
      linkText: "",
      description:
        "Multi-Environment Kubernetes Deployment Architecture. The system implements a multi-environment GKE deployment with separate beta and production setups sharing common infrastructure. Deliverables: GCP, Kubernetes, Docker and DevOps.",
    },
    {
      id: "2",
      tag: "Cloud",
      title: "Senior Cloud Consultant", // 002
      img: work2,
      imgSmall: workSmall2,
      bg: "#FFF3FC",
      client: "",
      langages: "",
      link: "",
      linkText: "",
      description:
        "Hybrid Cloud Web Application with Serverless Backend. The hybrid cloud web application combines traditional hosting with serverless backend services on Google Cloud Platform. Deliverables: GCP, Firebase, SQL, Terraform and GitHub.",
    },
    {
      id: "3",
      tag: "DevOps",
      title: "Senior Devops Engineer", // 011
      img: work3,
      imgSmall: workSmall3,
      bg: "#FFF0F0",
      client: "",
      langages: "",
      link: "",
      linkText: "",
      description:
        "GitOps Deployments on AWS EKS with ArgoCD and Helm. Before: manual deployments, inconsistent environments, no audit trail, rollbacks under pressure. After: automated, repeatable releases with full history in Git and one-command rollback. Deployments became boring, which is exactly what a deployment should be. Deliverables: CI/CD, IaC, DevOps and Kubernetes.",
    },
    {
      id: "4",
      tag: "AI Automation",
      title: "AI | n8n Developer", // 018
      img: work4,
      imgSmall: workSmall4,
      bg: "#E9FAFF",
      client: "",
      langages: "",
      link: "",
      linkText: "",
      description:
        "AI Lead Qualification & Follow-Up in n8n. This project is an AI-powered lead qualification and sales follow-up system built using n8n. It automates the process of collecting, analyzing, organizing, and following up with potential customers. Deliverables: OpenAI API, n8n and Google Sheets.",
    },
    {
      id: "5",
      tag: "DevOps",
      title: "Sr DevOps Engineer", // 007
      img: work5,
      imgSmall: workSmall5,
      bg: "#FFFAE9",
      client: "",
      langages: "",
      link: "",
      linkText: "",
      description:
        "Custom Healthcare API Development & HIPAA-Compliant AWS Architecture. Implemented OAuth 2.0, role-based access control, encryption in transit and at rest, audit logging, secure data storage, monitoring, backups, and multi-zone availability to support HIPAA-aligned security and reliability requirements. Deliverables: AWS, HIPAA and DevOps.",
    },
    {
      id: "6",
      tag: "Cloud",
      title: "GCP Cloud Engineer", // 016
      img: work6,
      imgSmall: workSmall6,
      bg: "#F4F4FF",
      client: "",
      langages: "",
      link: "",
      linkText: "",
      description:
        "Multi-Environment CI/CD on GCP with Cloud Deploy and GKE. Built the delivery pipeline for a team shipping to GKE: GitHub mirrored to Cloud Source Repositories, Cloud Build running tests and pushing images to Artifact Registry, then Google Cloud Deploy promoting releases through staging into production with a manual approval gate. Deliverables: CI/CD, GCP, IaC, Kubernetes and DevOps.",
    },
    {
      id: "7",
      tag: "DevOps",
      title: "DevSecOps Engineer",  // 008
      img: work7,
      imgSmall: workSmall7,
      bg: "#FFF0F8",
      client: "",
      langages: "",
      link: "",
      linkText: "",
      description:
        "SOC 2 Compliance for a Healthcare Platform on AWS (99.99% Uptime). I rebuilt it across multiple AZs with Dockerized services, RDS for MSSQL with synchronous replication, S3 plus file server storage, VPN back to on-premise, WAF, and role-based access. Deliverables: SOC2, Docker, AWS, Amazon Virtual Private Cloud and HIPAA.",
    },
    {
      id: "8",
      tag: "AI Automation",
      title: "Cloud AI Developer", // 017
      img: work8,
      imgSmall: workSmall8,
      bg: "#FFF0F8",
      client: "",
      langages: "",
      link: "",
      linkText: "",
      description:
        "AI Voice Processing Automation in Make.com. This project is an AI-powered voice processing workflow developed using Make.com. It automates the complete process of receiving audio, converting speech into text, analyzing transcripts, generating structured content, storing results, and notifying relevant team members. Deliverables: OpenAI API and Slack",
    },
    {
      id: "9",
      tag: "DevOps",
      title: "Senior DevOps Engineer", // 014
      img: work9,
      imgSmall: workSmall9,
      bg: "#FCF4FF",
      client: "",
      langages: "",
      link: "",
      linkText: "",
      description:
        "GDPR-Compliant AWS Architecture with Full CI/CD Automation. I built the account & identity structure, application layer, data protection, delivery pipeline and security & monitoring. Deliverables: DevOps, AWS, Cloud Security and AWS CodePipeline.",
    },
  ];
  const [data, setData] = useState(workItems);

  // Elements for Blogs section
  const blogsData = [
    {
      id: "1",
      img: blog1,
      imgSmall: blogSmall1,
      date: "177 April",
      category: "Inspiration",
      title: "How to Own Your Audience by Creating an Email List.",
      bg: "#FCF4FF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "4",
      img: blog4,
      imgSmall: blogSmall4,
      date: "000 April",
      category: "Inspiration",
      title: "Everything You Need to Know About Web Accessibility.",
      bg: "#EEFBFF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "2",
      img: blog2,
      imgSmall: blogSmall2,
      date: "21 April",
      category: "Web Design",
      title: "The window know to say beside you",
      bg: "#FFF0F0",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "5",
      img: blog5,
      imgSmall: blogSmall5,
      date: "27 April",
      category: "Inspiration",
      title: "Top 10 Toolkits for Deep Learning in 2021.",
      bg: "#FCF4FF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "3",
      img: blog3,
      imgSmall: blogSmall3,
      date: "27 April",
      category: "Inspiration",
      title: "How to Own Your Audience by Creating an Email List.",
      bg: "#FCF4FF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "6",
      img: blog6,
      imgSmall: blogSmall6,
      date: "27 April",
      category: "Inspiration",
      title: "Everything You Need to Know About Web Accessibility.",
      bg: "#EEFBFF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
  ];

  // Menu items for Homepage One
  const menuItem = [
    {
      id: "01",
      name: "Home",
      link: "/homePage",
      icon: <AiOutlineHome />,
    },
    {
      id: "02",
      name: "About",
      link: "/about",
      icon: <FaRegUser />,
    },
    {
      id: "06",
      name: "Resume",
      link: "/resume",
      icon: <CgNotes />,
    },
    {
      id: "03",
      name: "Works",
      link: "/works",
      icon: <FiCodesandbox />,
    },
    // {
    //   id: "04",
    //   name: "Blogs",
    //   link: "/blogs",
    //   icon: <FaBlogger />,
    // },
    // {
    //   id: "05",
    //   name: "Contact",
    //   link: "/contact",
    //   icon: <RiContactsBookLine />,
    // },
  ];

  // Menu items for Homepage Two
  const menuItemTwo = [
    {
      id: "01",
      name: "About",
      link: "/about",
      icon: <FaRegUser />,
    },
    {
      id: "02",
      name: "Resume",
      link: "/resume",
      icon: <CgNotes />,
    },
    {
      id: "03",
      name: "Works",
      link: "/works",
      icon: <FiCodesandbox />,
    },
    // {
    //   id: "04",
    //   name: "Blogs",
    //   link: "/blogs",
    //   icon: <FaBlogger />,
    // },
    // {
    //   id: "05",
    //   name: "Contact",
    //   link: "/contact",
    //   icon: <RiContactsBookLine />,
    // },
  ];

  // Slider image for Clients
  const sliderImg = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img1,
    img2,
    img3,
    img4,
    img5,
  ];

  // serviceArray items for about page
  const serviceArray = [
    {
      id: "1",
      icon: icon,
      title: "Cloud infrastructure",
      des: "AWS (EKS, ECS, Fargate, Lambda, VPC, IAM, Aurora, RDS, S3, CloudFront), GCP (GKE, Cloud Armor, managed databases), Azure (Azure DevOps, AKS), Oracle Cloud.",
      color: "#D566FF",
      bg: "#FCF4FF",
    },
    {
      id: "2",
      icon: icon1,
      title: "Kubernetes",
      des: "Cluster design and management, Helm charts, HPA autoscaling, NGINX and Traefik ingress, Rancher, multi environment setups on GCP and AWS.",
      color: "#DDA10C",
      bg: "#FEFAF0",
    },
    {
      id: "3",
      icon: icon2,
      title: "CI/CD",
      des: "GitHub Actions, GitLab CI, Jenkins, CircleCI, Azure Pipelines, AWS CodePipeline, CodeBuild, CodeDeploy, TeamCity.",
      color: "#8774FF",
      bg: "#FCF4FF",
    },
    {
      id: "4",
      icon: icon3,
      title: "Monitoring and observability",
      des: "Prometheus, Grafana, ELK, CloudWatch, New Relic, Nagios, Telegraf, InfluxDB, alerting and on call runbooks.",
      color: "#FF6080",
      bg: "#FFF4F4",
    },
    {
      id: "5",
      icon: icon4,
      title: "Security and compliance",
      des: "HIPAA and SOC 2 aligned infrastructure, IAM hardening, VPN, network segmentation.",
      color: "#FF75D8",
      bg: "#FFF0F8",
    },
    {
      id: "6",
      icon: icon5,
      title: "Infrastructure as Code",
      des: "Terraform, Ansible, AWS CloudFormation, Puppet, Chef.",
      color: "#269FFF",
      bg: "#F3FAFF",
    },
  ];

  // educationArray items for Resume page
  const educationArray = [
    {
      id: 1,
      date: "2020 - Present",
      title: "AWS Certified SysOps Administrator",
      place: "Amazon Web Services (AWS)",
      bg: "#FFF4F4",
    },

    {
      id: 2,
      date: "2019 - Present",
      title: "Red Hat Certified Engineer (RHCE)",
      place: "Red Hat, Inc.",
      bg: "#FFF1FB",
    },

    {
      id: 3,
      date: "2012 - 2016",
      title: "MSc in Computer Science",
      place: "The Hong Kong University of Science and Technology",
      bg: "#FFF4F4",
    },

    {
      id: 4,
      date: "2007 - 2011",
      title: "BEng in Computer Science",
      place: "Universidade do Rio de Janeiro",
      bg: "#FFF1FB",
    },
  ];
  // experiencesArray items for Resume page
  const experiencesArray = [
    {
      id: 1,
      date: "2023 - 2025",
      title: "Senior Cloud Engineer",
      place: "Century Communities",
      bg: "#EEF5FA",
    },

    {
      id: 2,
      date: "2020 - 2022",
      title: "Senior DevOps Engineer",
      place: "Tripleseat",
      bg: "#F2F4FF",
    },
    
    {
      id: 3,
      date: "2018",
      title: "Top Rated DevOps Engineer",
      place: "Upwork Inc",
      bg: "#EEF5FA",
    },

    {
      id: 4,
      date: "2017 - 2018",
      title: "DevOps Engineer",
      place: "Zazmic Inc",
      bg: "#F2F4FF",
    },
  ];
  // awardsArray items for Resume page
  const awardsArray = [
    {
      id: 1,
      date: "2015-2017",
      title: "  Graphic Designer",
      place: "Web Graphy, Los Angeles, CA",
      bg: "#FCF4FF",
    },

    {
      id: 2,
      date: "2014 - 2015",
      title: "Jr. Web Developer",
      place: "Creative Gigs.",
      bg: "#FCF9F2",
    },

    {
      id: 3,
      date: "2015-2017",
      title: "Best Freelancer",
      place: "Fiver & Upwork Level 2 & Top Rated",
      bg: "#FCF4FF",
    },
  ];

  // Working Skills items for Resume page
  const lineArray = [
    {
      id: "01",
      color: "#FF6464",
      name: "AWS",
      number: "80",
    },
    {
      id: "02",
      color: "#9272D4",
      name: "GCP",
      number: "85",
    },
    {
      id: "03",
      color: "#5185D4",
      name: "Azure",
      number: "85",
    },
    {
      id: "04",
      color: "#CA56F2",
      name: "Kubernetes",
      number: "95",
    },
        {
      id: "05",
      color: "#218536",
      name: "Terraform",
      number: "90",
    },
    {
      id: "06",
      color: "#CA962C",
      name: "AI Automation",
      number: "85",
    },
  ];

  // Personal information for contact pages
  const contactArray = [
    {
      id: "01",
      icon: iconPhone,
      title: "Phone ",
      item1: "+452 666 386",
      item2: "+452 666 386",
      bg: "#FCF4FF",
    },
    {
      id: "02",
      icon: iconEmail,
      title: "Email ",
      item1: "support@gmail.com",
      item2: "example@gmail.com",
      bg: "#EEFBFF",
    },
    {
      id: "03",
      icon: iconMap,
      title: "Address ",
      item1: "Maount View, Oval",
      item2: "Road, New York, USA",
      bg: "#F2F4FF",
    },
  ];

  return {
    handleTheme,
    check,
    local,
    handleData,
    data,
    singleData,
    handleModelData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
    menuItem,
    NavLink,
    menuItemTwo,
    serviceArray,
    sliderImg,
    educationArray,
    experiencesArray,
    awardsArray,
    lineArray,
    contactArray,
  };
};

export default AllData;
