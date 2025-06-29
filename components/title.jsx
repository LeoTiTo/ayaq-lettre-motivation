// components/Title.jsx
export default function Title({ title, symbol }) {
    return (
      <div className="flex items-center justify-center gap-4 mb-2 uppercase">
        <h2 className="text-2xl lg:text-4xl font-bold text-center">{title}</h2>
        <span className="material-symbols-rounded text-xl lg:text-2xl">
          {symbol}
        </span>
      </div>
    )
  }
  