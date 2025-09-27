"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  Star,
  Code,
  Database,
  Globe,
  Server,
  Download,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  Calendar,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTheme } from "next-themes";
import Lanyard from "@/components/Lanyard/Lanyard";

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const skills = [
    {
      category: "Frontend",
      technologies: [
        "React.js",
        "TypeScript",
        "JavaScript",
        "HTML/CSS",
        "Responsive Design",
        "UI/UX Design",
      ],
      icon: <Globe className="size-5" />,
    },
    {
      category: "Backend",
      technologies: [
        "Node.js",
        "PHP",
        "Laravel",
        "Express.js",
        "REST API",
        "MongoDB",
      ],
      icon: <Server className="size-5" />,
    },
    {
      category: "Database",
      technologies: ["MySQL", "PostgreSQL", "MongoDB"],
      icon: <Database className="size-5" />,
    },
    {
      category: "Tools & DevOps",
      technologies: ["Git & GitHub", "VS Code", "Postman", "Figma"],
      icon: <Code className="size-5" />,
    },
  ];

  const projects = [
    {
      title: "Penertbit Bangun Bangsa",
      description:
        "The official website for Penerbit Bangun Bangsa, a book publisher. This site features a comprehensive book catalog, publisher profile, news, and other information related to publishing activities. Built with WordPress and Elementor for easy content management and a professional appearance.",
      image: "/bangunbangsa.png",
      technologies: ["Wordpress", "Elementor"],
      challenges:
        "Designing a user-friendly interface to display book catalogs, ensuring easy navigation for visitors, and maintaining a professional and trustworthy publisher image.",
      github: null,
      demo: "https://penerbitbangunbangsa.id/",
      featured: false,
    },
    {
      title: "TriByte - Data Service Landing Page",
      description:
        "A modern landing page for TriByte, a data service provider offering data cleaning and visualization solutions for businesses. The website highlights services, showcases client benefits, and encourages conversions through a clean, modern UI and interactive elements.",
      image: "/tribyte.png",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      challenges:
        "Building a visually appealing and conversion-focused landing page, integrating smooth scroll-based animations, and ensuring responsive design across devices.",
      github: "https://github.com/rezkysyaputra/data-service-landingpage",
      demo: "https://tribyte.me/",
      featured: false,
    },
    {
      title: "CINETIX - Movie Discovery Platform",
      description:
        "A web application for online movie ticket sales. Users can browse movies, select showtimes, choose seats, and purchase tickets with integrated payment. Features include real-time seat availability, user authentication, and a responsive interface. Built with Laravel and MySQL, with payment handled by Midtrans.",
      image: "/cinetix.png",
      technologies: [
        "Laravel",
        "MySQL",
        "Tailwind CSS",
        "Midtrans",
        "Filament",
      ],
      challenges:
        "Implementing real-time seat selection, integrating secure payment with Midtrans, and optimizing the backend for fast data retrieval and smooth user experience.",
      github: "https://github.com/rezkysyaputra/cinema-laravel12",
      demo: "http://cine-tix.my.id/",
      featured: true,
    },
    {
      title: "API Beli Galon - Water Delivery API",
      description:
        "A RESTful API for a water gallon delivery service, developed as part of the MSIB 7 program. The API supports order management, payment integration with Midtrans, unit testing for reliability, and provides detailed Swagger documentation for easy integration by client apps.",
      image: "/begal.png",
      technologies: [
        "Express.js",
        "Node.js",
        "MongoDB",
        "Midtrans",
        "Swagger",
        "TypeScript",
        "Unit Testing",
      ],
      challenges:
        "Designing a scalable REST API, integrating secure payment with Midtrans, implementing unit testing for API endpoints, and documenting endpoints thoroughly with Swagger for developer usability.",
      github: "https://github.com/rezkysyaputra/begal-backend",
      demo: null,
      featured: true,
    },
  ];

  return (
    <div className="flex min-h-[100dvh]  flex-col scroll-smooth">
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
          isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <a href="" className="font-black text-foreground text-xl">
            Portfolio
          </a>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Projects
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Background
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex gap-4 items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {mounted && theme === "dark" ? (
                <Sun className="size-[18px]" />
              ) : (
                <Moon className="size-[18px]" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button className="rounded-full">
              <Download className="mr-2 size-4" />
              Resume
            </Button>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {mounted && theme === "dark" ? (
                <Sun className="size-[18px]" />
              ) : (
                <Moon className="size-[18px]" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
          >
            <div className="container py-4 flex flex-col gap-4">
              <Link
                href="#about"
                className="py-2 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#projects"
                className="py-2 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#experience"
                className="py-2 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Background
              </Link>
              <Link
                href="#contact"
                className="py-2 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t">
                <Button className="rounded-full">
                  <Download className="mr-2 size-4" />
                  Resume
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

            <div className="flex flex-col items-center justify-center  text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-2xl"
              >
                <Badge
                  className="mb-4 mt-10 rounded-full px-4 py-1.5 text-sm font-medium"
                  variant="secondary"
                >
                  Fullstack Web Developer
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  Hi, I&apos;m Rezky. I build web apps end-to-end.
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  Fullstack Web Developer focused on building modern, efficient,
                  and user-friendly web applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
                  <Button
                    size="lg"
                    className="rounded-full h-12 px-8 text-base"
                    asChild
                  >
                    <Link href="mailto:muhrezkysyaputra100@gmail.com">
                      <Mail className="mr-2 size-4" />
                      Get In Touch
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full h-12 px-8 text-base bg-transparent"
                    asChild
                  >
                    <Link
                      href="https://github.com/rezkysyaputra"
                      target="_blank"
                    >
                      <Github className="mr-2 size-4" />
                      View GitHub
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center gap-6 justify-center">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="size-4" />
                    <span>Sleman, Yogyakarta</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="size-4" />
                    <span>Fullstack Web Developer</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About/Skills Section */}
        <section id="about" className="w-full py-20 md:py-32 scroll-offset">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge
                className="rounded-full px-4 py-1.5 text-sm font-medium"
                variant="secondary"
              >
                About Me
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Skills & Tech
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg leading-relaxed">
                I&apos;m{" "}
                <span className="font-semibold text-foreground">
                  Muh. Rezky Syaputra
                </span>
                , an Informatics student at AMIKOM University Yogyakarta.
                Experienced in building end-to-end web apps using modern tools
                and frameworks. Ready to work solo or in a team.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {skills.map((skill, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                        {skill.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-4 tracking-wide">
                        {skill.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skill.technologies.map((tech, j) => (
                          <Badge
                            key={j}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden scroll-offset"
        >
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge
                className="rounded-full px-4 py-1.5 text-sm font-medium"
                variant="secondary"
              >
                Portfolio
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Featured Projects
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg leading-relaxed">
                Some projects I&apos;ve built, from landing pages and APIs to
                fullstack web apps.
              </p>
            </motion.div>

            <div className="grid gap-8 md:gap-12">
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`grid gap-8 items-center ${
                    i % 2 === 0 ? "lg:grid-cols-2" : "lg:grid-cols-2"
                  } ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  <div className={`${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border/40">
                      <Image
                        src={`/images${project.image}` || "/placeholder.svg"}
                        width={600}
                        height={400}
                        alt={project.title}
                        className="w-full h-auto object-cover"
                      />
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary text-primary-foreground">
                            <Star className="mr-1 size-3" />
                            Featured
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>
                  <div
                    className={`space-y-6 ${
                      i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        <strong className="font-semibold">Challenge:</strong>{" "}
                        {project.challenges}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, j) => (
                        <Badge key={j} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.demo ? (
                        <Button asChild>
                          <Link href={project.demo} target="_blank">
                            <ExternalLink className="mr-2 size-4" />
                            Live Demo
                          </Link>
                        </Button>
                      ) : (
                        <Button disabled>
                          <ExternalLink className="mr-2 size-4" />
                          No Live Demo
                        </Button>
                      )}
                      {typeof project.github === "string" && project.github ? (
                        <Button variant="outline" asChild>
                          <Link href={project.github} target="_blank">
                            <Github className="mr-2 size-4" />
                            Source Code
                          </Link>
                        </Button>
                      ) : (
                        <Button variant="outline" disabled>
                          <Github className="mr-2 size-4" />
                          No Source Code
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="w-full py-20 md:py-32 scroll-offset"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge
                className="rounded-full px-4 py-1.5 text-sm font-medium"
                variant="secondary"
              >
                Background
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Education & Certifications
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg leading-relaxed">
                My education and training history that supports my web
                development expertise.
              </p>
            </motion.div>

            <div className="mx-auto max-w-4xl">
              <Tabs defaultValue="education" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="rounded-full p-1">
                    <TabsTrigger
                      value="education"
                      className="rounded-full px-6"
                    >
                      Formal Education
                    </TabsTrigger>
                    <TabsTrigger value="training" className="rounded-full px-6">
                      Nonformal Education
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="education">
                  <div className="space-y-8">
                    {[
                      {
                        degree: "BSc Informatics",
                        school: "AMIKOM University Yogyakarta",
                        period: "2022 - Present",
                        description:
                          "Active student, focused on web app development and software engineering.",
                        achievements: [
                          "Software Engineering focus",
                          "Teamwork & communication",
                          "Industry tools & frameworks",
                        ],
                      },
                      {
                        degree: "Science Major",
                        school: "MA Hubbul Wathan",
                        period: "2019 - 2022",
                        description:
                          "Graduated in Science, strong analytical and problem-solving skills.",
                        achievements: [
                          "Science & Math focus",
                          "Analytical thinking",
                          "Scientific methodology basics",
                        ],
                      },
                    ].map((edu, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <Card className="border-border/40 bg-gradient-to-b from-background to-muted/10">
                          <CardHeader>
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-xl">
                                  {edu.degree}
                                </CardTitle>
                                <p className="text-primary font-medium">
                                  {edu.school}
                                </p>
                              </div>
                              <Badge variant="outline">{edu.period}</Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                              {edu.description}
                            </p>
                            <div className="space-y-2">
                              {edu.achievements.map((achievement, j) => (
                                <div
                                  key={j}
                                  className="flex items-center gap-2"
                                >
                                  <Award className="size-4 text-primary" />
                                  <span className="text-sm">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="training">
                  <div className="space-y-8">
                    {[
                      {
                        title: "Fullstack Software Development",
                        organization: "ProductZilla Academy - MSIB 7",
                        period: "Sep 2024 - Dec 2024",
                        description:
                          "4-month bootcamp, focused on MERN stack and professional workflow.",
                        achievements: [
                          "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
                          "Git workflow & deployment",
                          "Project: RESTful API for water delivery",
                        ],
                      },
                      {
                        title: "Junior Web Developer",
                        organization: "Digital Talent Scholarship - Kominfo",
                        period: "2023",
                        description:
                          "Junior Web Developer certification, focused on PHP & MySQL.",
                        achievements: [
                          "Web dev basics (HTML, CSS, JS, PHP)",
                          "MySQL database",
                          "Project: Simple library system",
                        ],
                      },
                    ].map((cert, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <Card className="border-border/40 bg-gradient-to-b from-background to-muted/10">
                          <CardHeader>
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-xl">
                                  {cert.title}
                                </CardTitle>
                                <p className="text-primary font-medium">
                                  {cert.organization}
                                </p>
                              </div>
                              <Badge variant="outline">{cert.period}</Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                              {cert.description}
                            </p>
                            <div className="space-y-2">
                              {cert.achievements.map((achievement, j) => (
                                <div
                                  key={j}
                                  className="flex items-center gap-2"
                                >
                                  <Award className="size-4 text-primary" />
                                  <span className="text-sm">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden scroll-offset"
        >
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-white/20 text-white border-white/30">
                Contact
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Contact
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl leading-relaxed">
                Interested in working together or have a project idea?
                Let&apos;s connect!
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="size-10 rounded-full bg-white/20 flex items-center justify-center">
                        <Mail className="size-5" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-primary-foreground/80">
                          muhrezkysyaputra100@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="size-10 rounded-full bg-white/20 flex items-center justify-center">
                        <MapPin className="size-5" />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-primary-foreground/80">
                          Sleman, Yogyakarta, Indonesia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                    asChild
                  >
                    <Link
                      href="https://github.com/rezkysyaputra"
                      target="_blank"
                    >
                      <Github className="size-5" />
                    </Link>
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                    asChild
                  >
                    <Link
                      href="https://www.linkedin.com/in/muh-rezky-syaputra-a65a42250/"
                      target="_blank"
                    >
                      <Linkedin className="size-5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-white/10 border-white/20 backdrop-blur">
                  <CardContent className="p-6">
                    <form className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium mb-2"
                          >
                            Name
                          </label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-2"
                          >
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="email@example.com"
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium mb-2"
                        >
                          Subject
                        </label>
                        <Input
                          id="subject"
                          placeholder="About project or collaboration"
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium mb-2"
                        >
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell me about your project or ideas..."
                          rows={5}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        />
                      </div>
                      <Button
                        type="submit"
                        variant="secondary"
                        className="w-full"
                      >
                        Send Message
                        <ArrowRight className="ml-2 size-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 font-bold">
              <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
                RS
              </div>
              <span>Muh. Rezky Syaputra</span>
            </div>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                asChild
              >
                <Link href="https://github.com/rezkysyaputra" target="_blank">
                  <Github className="size-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                asChild
              >
                <Link
                  href="https://www.linkedin.com/in/muh-rezky-syaputra-a65a42250/"
                  target="_blank"
                >
                  <Linkedin className="size-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                asChild
              >
                <Link href="mailto:muhrezkysyaputra100@gmail.com">
                  <Mail className="size-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-border/40 pt-8">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Muh. Rezky Syaputra. All rights
              reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
