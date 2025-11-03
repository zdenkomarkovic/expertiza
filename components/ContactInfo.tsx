import { Mail, MapPin, Instagram } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-3 md:space-y-6 md:px-12">
      <div className=" p-4 bg-card rounded-lg border border-border">
        <h3 className="font-semibold text-lg mb-1">Email</h3>
        <div className="flex justify-center gap-2 items-center">
          <a
            href="mailto:ivanapericin.savetovanje@gmail.com"
            className="flex gap-2 items-center text-primary hover:text-secondary  hover:scale-105 transition-transform duration-300"
          >
            <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            ivanapericin.savetovanje@gmail.com
          </a>
        </div>
      </div>
      <div className=" p-4 bg-card rounded-lg border border-border">
        <h3 className="font-semibold text-lg mb-1">Instagram</h3>
        <div className="flex justify-center gap-2 items-center">
          <a
            href="https://www.instagram.com/ivanapericin_path.to.self/"
            className="flex gap-2 items-center text-primary hover:text-secondary  hover:scale-105 transition-transform duration-300"
          >
            <Instagram className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            ivanapericin_path.to.self
          </a>
        </div>
      </div>
      <div className=" p-4 bg-card rounded-lg border border-border">
        <h3 className="font-semibold text-lg mb-1">Lokacija</h3>
        <div className="flex justify-center gap-2 items-center">
          <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          Pančevo, Srbija
        </div>
      </div>
    </div>
  );
}
