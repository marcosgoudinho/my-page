import { Reveal } from "@/components/reveal"
import { ActivityGallery } from "@/components/activity-gallery"
import { profile } from "@/lib/portfolio-data"

export function About() {
  return (
    <section id="about" aria-label="About me" className="scroll-mt-24">
      {/* Bio Text */}
      <Reveal>
        <div className="space-y-4 leading-relaxed text-muted-foreground">
          <p>
            {"I'm a Full Stack Software Developer passionate about turning ideas into products that create real impact. I currently work on the development and evolution of enterprise systems, contributing to new features and exploring how Artificial Intelligence can be integrated to make business processes smarter and more efficient."}
          </p>
          <p>
            {"Over the past few months, I've been deeply focused on studying AI integrations, exploring how large language models can be embedded into software products to solve real-world problems and improve user experiences."}
          </p>
          <p>
            {"Beyond my professional work, I'm also building my own mobile application for psychology clinics, combining technology and product thinking to simplify daily operations for mental health professionals."}
          </p>
          <p>
            {"My goal is to build an international career working remotely with teams that value software quality, innovation, and continuous learning. I believe great products are created by combining solid engineering, curiosity, and a constant focus on solving real problems in the simplest and most effective way."}
          </p>
        </div>
      </Reveal>

      {/* Activity Gallery */}
      <div className="mt-12">
        <ActivityGallery photos={profile.activityPhotos} />
      </div>
    </section>
  )
}

