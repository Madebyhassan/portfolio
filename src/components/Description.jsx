export default function Description({ text }) {
  const paragraphs = Array.isArray(text) ? text : [text];
  return paragraphs.map((line, i) => (
    <p key={i} className="text-gray-500 text-sm leading-relaxed mb-3 last:mb-0">
      {line}
    </p>
  ));
}
