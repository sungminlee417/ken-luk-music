import React from 'react'

// Simple portable text renderer for basic content
export function PortableText({ content }: { content: any[] }) {
  if (!content || !Array.isArray(content)) return null

  return (
    <>
      {content.map((block, index) => {
        if (block._type === 'block') {
          const text = block.children?.map((child: any) => {
            let content = child.text || ''
            if (child.marks?.includes('strong')) {
              content = <strong key={child._key}>{content}</strong>
            }
            if (child.marks?.includes('em')) {
              content = <em key={child._key}>{content}</em>
            }
            return content
          })

          if (block.style === 'h2') {
            return <h2 key={block._key} className="text-3xl font-display font-bold text-foreground mb-4">{text}</h2>
          }
          if (block.style === 'h3') {
            return <h3 key={block._key} className="text-2xl font-display font-semibold text-foreground mb-3">{text}</h3>
          }
          if (block.style === 'blockquote') {
            return <blockquote key={block._key} className="text-xl italic text-accent border-l-4 border-accent pl-4 my-4">{text}</blockquote>
          }
          
          return <p key={block._key} className="text-lg text-text-light leading-relaxed mb-6">{text}</p>
        }
        
        return null
      })}
    </>
  )
}

// Helper function to get section by ID
export function getSection(sections: any[], sectionId: string) {
  return sections?.find(section => section.sectionId === sectionId)
}