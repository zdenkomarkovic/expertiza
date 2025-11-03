"use client";

import { useState } from "react";
import { sendMail } from "@/lib/send-mail";

export default function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const mailText = `Nova prijava na newsletter:\n\nIme: ${name}\nEmail: ${email}`;
      const response = await sendMail({
        email: email,
        subject: "Nova prijava na newsletter",
        text: mailText,
      });

      if (response?.messageId) {
        setStatus("success");
        setMessage("Uspešno ste se prijavili na newsletter!");
        setName("");
        setEmail("");
      } else {
        setStatus("error");
        setMessage("Došlo je do greške. Molimo pokušajte ponovo.");
      }
    } catch {
      setStatus("error");
      setMessage("Došlo je do greške. Molimo pokušajte ponovo.");
    }
  };

  return (
    <section className="py-6 md:py-12 bg-muted text-primary ">
      <div className="max-w-[80rem] mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-5xl font-thin italic text-background mb-4 text-left border-b border-background">
          Newsletter
        </h2>
        <p className=" md:mb-4  mx-auto">
          Budite u toku sa novim člancima, savetima i korisnim informacijama iz
          oblasti psihologije i mentalnog zdravlja. Newsletter je prostor u
          kojem delim uvide iz svog rada, priče iz terapijske prakse, ali i
          refleksije o savremenom životu. Kroz njega težim da vam pružim
          inspiraciju za lično usavršavanje, samospoznaju i dublje razumevanje
          izazova sa kojima se susrećete.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-5xl mx-auto space-y-4 md:space-y-6"
        >
          <div className="grid md:grid-cols-3 md:gap-8 w-fit mx-auto">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Vaše ime"
              required
              disabled={status === "loading"}
              className="px-6 py-3 text-center border-b-2 border-background bg-transparent  placeholder:text-background focus:outline-none focus:border-background/40 disabled:opacity-50"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Vaša email adresa"
              required
              disabled={status === "loading"}
              className="px-6 py-3 text-center border-b-2 border-background bg-transparent placeholder:text-background  focus:outline-none focus:border-background/40  disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full px-8 py-3 border-b-2 border-background bg-transparent text-primary  font-semibold  transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="bg-background rounded-full px-8 py-2 hover:bg-background/80">
                {" "}
                {status === "loading" ? "Slanje..." : "Prijavi se"}
              </span>
            </button>
          </div>

          {status === "success" && (
            <p className="text-center text-background font-medium">{message}</p>
          )}
          {status === "error" && (
            <p className="text-center text-destructive font-medium">
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
