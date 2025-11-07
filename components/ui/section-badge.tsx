interface SectionBadgeProps {
  number: string
  label: string
  dark?: boolean
}

const SectionBadge = ({ number, label, dark = false }: SectionBadgeProps) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
        dark ? "bg-white/20 text-white" : "bg-gray-100 text-gray-700"
      }`}
    >
      <span className="font-display">{number}</span>
      <span>{label}</span>
    </div>
  )
}

export default SectionBadge
