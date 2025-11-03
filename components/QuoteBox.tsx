interface QuoteBoxProps {
  children: React.ReactNode;
}

export default function QuoteBox({ children }: QuoteBoxProps) {
  return (
    <div className="border-b border-t py-4 md:py-8 border-primary">
      <p className="text-lg md:text-3xl font-semibold text-primary text-center italic leading-relaxed">
        {children}
      </p>
    </div>
  );
}
