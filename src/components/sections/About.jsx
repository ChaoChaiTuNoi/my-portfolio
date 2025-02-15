import { RevealOnScroll } from '../RevealOnScroll';

export const About = () => {

    const frontendSkills = [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Vue",
        "Tailwind CSS",
        "Bootstrap",
    ]
    const backendSkills = [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "SQL",
    ]
    return (<section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                {""}
                About me
            </h2>
            <div className="glass rounded-xl p-8 bordor-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    I'm a creative web developer and motion graphic designer based in Thailand. I have a passion for web development and love to create motion graphics. I'm always looking for new challenges and opportunities to learn new things.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> 
                        Frontend
                    </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                      {tech}
                    </span>
                  ))}

                        </div>

                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> 
                        Backend
                    </h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                      {tech}
                    </span>
                  ))}

                        </div>

                    </div>

                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">
                  🏫 Education
                  </h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                        <strong> B.S. in Information Technology </strong> - Sripatum University (2021-2024)
                    </li>
                    <li>
                        <strong> Math-Science </strong> - Mary Immaculate convent school (2017-2020)
                    </li>

                  </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">
                  💼 Work Experience
                  </h3>
                  <div className="space-y-4 text-gray-300">
                  <div>
                        <h4 className="font-semibold">
                            {""}
                            <strong>Freelance at FASTWORK (2021-Present)</strong>{""}
                        </h4>
                        <p>
                            Create a motion graphic, media ads for online platform and create a UX/UI for mock up </p>

                    </div>
                    <div>
                        <h4 className="font-semibold">
                            {""}
                            <strong>Intern at NECTEC (2024)</strong>{""}
                        </h4>
                        <p>
                            Worked as a web developer and motion graphic designer
                        </p>

                    </div>
                    

                  </div>
                </div>
            </div>

        </div>
        </RevealOnScroll>
    </section>
    )
}