"use client";

import { Share2 } from "lucide-react";
import { useState } from "react";

interface ShareButtonProps {
  title: string;
  slug: string;
}

export default function ShareButton({ title, slug }: ShareButtonProps) {
  const [showMenu, setShowMenu] = useState(false);

  const url =
    typeof window !== "undefined"
      ? `${window.location.origin}/blog/${slug}`
      : "";

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert("Link kopiran!");
    } catch (err) {
      console.error("Greška pri kopiranju:", err);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center gap-2 px-4 py-2 bg-primary text-background rounded-lg hover:bg-primary/90 transition-colors"
        aria-label="Podeli članak"
      >
        <Share2 size={20} />
        Podeli
      </button>

      {showMenu && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setShowMenu(false)}
          />
          <div className="absolute text-primary right-0 mt-2 w-48 bg-background rounded-lg shadow-lg py-2 z-20 border border-gray-200">
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 hover:bg-gray-100 transition-colors"
            >
              Facebook
            </a>
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 hover:bg-gray-100 transition-colors"
            >
              Twitter
            </a>
            <a
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 hover:bg-gray-100 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={shareLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 hover:bg-gray-100 transition-colors"
            >
              WhatsApp
            </a>
            <button
              onClick={copyToClipboard}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
            >
              Kopiraj link
            </button>
          </div>
        </>
      )}
    </div>
  );
}
