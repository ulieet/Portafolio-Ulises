import { InlineMath } from 'react-katex'
import { useEffect, useState } from 'react'
import 'katex/dist/katex.min.css'
import { ChevronDown } from 'lucide-react'

const formulaClass = "text-3xl sm:text-5xl font-serif my-5"

export default function IntegralAnimation() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (step < 2) {
      const timer = setTimeout(() => setStep(step + 1), 650)
      return () => clearTimeout(timer)
    }
  }, [step])

  const scrollToContent = () => {
    const contentElement = document.getElementById("about-content")
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="flex flex-col items-center w-full mt-12 gap-8 px-4">
      
      {/* Animación de la integral */}
      <div className="flex items-center justify-center w-full gap-8">
        <div className={`transition-opacity duration-800 flex-1 text-right ${step >= 1 ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`${formulaClass} text-white`}>
            <InlineMath math={'\\int u \\, dv ='} />
          </div>
        </div>

        <div className={`flex-1 ${formulaClass} text-blue-400 text-center`}>
          <InlineMath math={'U \\ V'} />
        </div>

        <div className={`flex-1 transition-opacity duration-800 text-left ${step >= 2 ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`${formulaClass} text-white`}>
            <InlineMath math={'- \\int V \\, du'} />
          </div>
        </div>
      </div>

      {/* Desliza */}
      <div
        onClick={scrollToContent}
        className="flex flex-col items-center justify-center mt-8 cursor-pointer group"
      >
        <p className="text-gray-400 text-sm mb-3 tracking-widest uppercase group-hover:text-blue-400 transition-colors">
          Desliza
        </p>
        <div className="relative">
          <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-xl group-hover:bg-blue-600/40 transition-all"></div>
          <ChevronDown className="relative w-8 h-8 text-blue-600 animate-bounce group-hover:text-blue-500 transition-colors" />
        </div>
      </div>
    </div>
  )
}
