"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { urlFor } from "@/lib/sanityImage";

interface TeamMember {
  _id: string;
  name: string;
  position: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  bio?: string;
  email?: string;
  phone?: string;
  order: number;
  active: boolean;
}

export default function TeamSection() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch("/api/team-members");
        if (!response.ok) {
          throw new Error("Failed to fetch team members");
        }
        const data = await response.json();
        setTeamMembers(data);
      } catch (error) {
        console.error("Error fetching team members:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-primary">
            Naš Tim
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse"
              >
                <div className="bg-gray-200 h-80 w-full"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!teamMembers || teamMembers.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-primary">
            Naš Tim
          </h2>
          <p className="text-lg md:text-xl text-gray-900 text-center max-w-3xl mx-auto mb-16">
            Stručnjaci sa višegodišnjim iskustvom u oblasti ekspertiza i
            veštačenja
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={urlFor(member.image).width(600).height(600).url()}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1 text-left text-white">
                    {member.name}
                  </h3>
                  <p className="text-lg">{member.position}</p>
                </div>
              </div>

              <div className="p-6">
                {member.bio && (
                  <p className="text-gray-900 mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                )}

                {(member.email || member.phone) && (
                  <div className="space-y-2 pt-4 border-t border-gray-200">
                    {member.email && (
                      <div className="flex items-center gap-2 text-sm text-gray-900">
                        <Mail className="w-4 h-4 text-primary" />
                        <a
                          href={`mailto:${member.email}`}
                          className="hover:text-primary transition-colors"
                        >
                          {member.email}
                        </a>
                      </div>
                    )}
                    {member.phone && (
                      <div className="flex items-center gap-2 text-sm text-gray-900">
                        <Phone className="w-4 h-4 text-primary" />
                        <a
                          href={`tel:${member.phone}`}
                          className="hover:text-primary transition-colors"
                        >
                          {member.phone}
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
