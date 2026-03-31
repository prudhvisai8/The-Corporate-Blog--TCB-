interface AdSlotProps {
  position: "top" | "inline" | "sidebar";
  className?: string;
}

const AdSlot = ({ position, className = "" }: AdSlotProps) => {
  // Placeholder for future ad integration (Google AdSense, etc.)
  // In production, replace with actual ad network script
  const dimensions = {
    top: "h-24 md:h-28",
    inline: "h-20 md:h-24 my-8",
    sidebar: "h-64",
  };

  return (
    <div
      className={`bg-secondary/30 border border-dashed border-border rounded-xl flex items-center justify-center text-xs text-muted-foreground ${dimensions[position]} ${className}`}
      data-ad-slot={position}
      aria-label="Advertisement"
    >
      <span className="opacity-50">Ad Space — {position}</span>
    </div>
  );
};

export default AdSlot;
