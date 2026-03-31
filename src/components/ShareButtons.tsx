import { Twitter, Linkedin, Facebook, Link2, Check } from "lucide-react";
import { useState } from "react";

interface ShareButtonsProps {
  url: string;
  title: string;
}

const ShareButtons = ({ url, title }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const share = (platform: string) => {
    const urls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    };
    window.open(urls[platform], "_blank", "noopener,noreferrer,width=600,height=400");
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const btnClass =
    "p-2.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors";

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-1">Share</span>
      <button onClick={() => share("twitter")} className={btnClass} aria-label="Share on X/Twitter">
        <Twitter size={16} />
      </button>
      <button onClick={() => share("linkedin")} className={btnClass} aria-label="Share on LinkedIn">
        <Linkedin size={16} />
      </button>
      <button onClick={() => share("facebook")} className={btnClass} aria-label="Share on Facebook">
        <Facebook size={16} />
      </button>
      <button onClick={copyLink} className={btnClass} aria-label="Copy link">
        {copied ? <Check size={16} className="text-primary" /> : <Link2 size={16} />}
      </button>
    </div>
  );
};

export default ShareButtons;
