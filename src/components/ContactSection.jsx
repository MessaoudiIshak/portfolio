import {
  
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";



export default function ContactSection  ()  {
  
  

  
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="flex flex-col items-center">
          <div className="space-y-8 w-full max-w-2xl">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Contact Information
            </h3>

            <div className="space-y-4">
              <div className="relative flex items-center justify-center bg-card p-4 rounded-lg shadow-xs hover:shadow-md hover:scale-[1.02] hover:bg-card/80 transition-all duration-300 cursor-pointer">
                <div className="absolute left-4 md:left-6 p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:ishakabderrahmane.messaoudi@ynov.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    style={{ fontSize: 'clamp(0.65rem, 2.5vw, 1rem)' }}
                  >
                    ishakabderrahmane.messaoudi@ynov.com
                  </a>
                </div>
              </div>
              <div className="relative flex items-center justify-center bg-card p-4 rounded-lg shadow-xs hover:shadow-md hover:scale-[1.02] hover:bg-card/80 transition-all duration-300 cursor-pointer">
                <div className="absolute left-6 p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center">
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+33635425223"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (+33) 6 35 42 52 23
                  </a>
                </div>
              </div>
              <div className="relative flex items-center justify-center bg-card p-4 rounded-lg shadow-xs hover:shadow-md hover:scale-[1.02] hover:bg-card/80 transition-all duration-300 cursor-pointer">
                <div className="absolute left-6 p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center">
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">
                    Rouen, France
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8 text-center">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/ishak-messaoudi-649701312/" className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-6 w-6 text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};