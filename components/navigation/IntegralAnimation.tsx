import { InlineMath } from 'react-katex'
import { useEffect, useState } from 'react'
import 'katex/dist/katex.min.css'

const formulaClass = "text-3xl sm:text-5xl font-serif my-5"

export default function IntegralAnimation() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (step < 2) {
      const timer = setTimeout(() => setStep(step + 1), 650)
      return () => clearTimeout(timer)
    }
  }, [step])

  return (
    <div className="flex items-center justify-center min-h-[100px] w-full mt-20 gap-8 px-4">
   
      <div
        className={`transition-opacity duration-800 flex-1 text-right ${step >= 1 ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className={`${formulaClass} text-white`}>
          <InlineMath math={'\\int u \\, dv ='} />
        </div>
      </div>

   
      <div className={`flex-1 ${formulaClass} text-blue-200 text-center`}>
        <InlineMath math={'U \\ V'} />
      </div>

    
      <div
        className={`flex-1 transition-opacity duration-800 text-left ${step >= 2 ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className={`${formulaClass} text-white`}>
          <InlineMath math={'- \\int V \\, du'} />
        </div>
      </div>
    </div>
  )
}
