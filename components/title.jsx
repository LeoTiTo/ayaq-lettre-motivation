// components/Title.jsx
import { Search } from 'lucide-react'

export default function Title({ title, symbol }) {
    return (
      <div className="flex items-center justify-center gap-4 mb-4 uppercase">
        <h2 className="text-xl lg:text-2xl font-bold text-center">{title}</h2>
        <span className="material-symbols-rounded text-xl lg:text-2xl">
          {symbol}
        </span>
      </div>
    )
  }
  