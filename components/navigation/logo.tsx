export default function Logo() {
  return (
    <div className="text-foreground font-bold text-lg md:text-xl tracking-tight font-mono">
      u<span className="text-primary">(</span>v<span className="text-primary">)</span>
      <span className="text-muted-foreground/50 ml-1 hidden sm:inline">{"=>"}</span>
    </div>
  )
}
