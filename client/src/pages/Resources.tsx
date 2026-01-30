import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink } from "lucide-react";

export default function Resources() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageHeader 
        title="Resources & Reports" 
        description="Transparency is key. Access our annual reports, research, and community resources."
        image="/images/group-photo.jpg"
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Annual Reports */}
          <div>
            <h2 className="text-2xl font-display font-bold text-primary mb-6">Annual Reports</h2>
            <div className="space-y-4">
              {[2023, 2022, 2021].map((year) => (
                <div key={year} className="flex items-center justify-between p-4 bg-white rounded-lg border border-border hover:shadow-md transition-all">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Annual Report {year}</h3>
                      <p className="text-xs text-muted-foreground">PDF • 4.5 MB</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-accent hover:text-accent/80 hover:bg-accent/10">
                    <Download className="w-5 h-5" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Educational Initiatives */}
          <div>
            <h2 className="text-2xl font-display font-bold text-primary mb-6">Student Initiatives</h2>
            <div className="space-y-6">
              <div className="bg-muted/30 p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold text-primary mb-2">Scholarship Program</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Applications for the 2024-2025 academic year are now open. We support outstanding students from underprivileged backgrounds.
                </p>
                <Button variant="outline" className="w-full">Apply Now <ExternalLink className="w-4 h-4 ml-2" /></Button>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold text-primary mb-2">Mentorship Network</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Connect with professionals and alumni through our mentorship platform designed to guide career development.
                </p>
                <Button variant="outline" className="w-full">Join Network <ExternalLink className="w-4 h-4 ml-2" /></Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
