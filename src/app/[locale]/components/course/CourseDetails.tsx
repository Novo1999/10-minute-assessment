import { AboutItem, Section } from '@/app/types'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

interface CourseDetailsProps {
  sectionData: Section
}

const CourseDetails = ({ sectionData }: CourseDetailsProps) => {
  const aboutValues = sectionData?.values as AboutItem[]

  if (!aboutValues || aboutValues.length === 0) {
    return null
  }

  return (
    <div id="about" className="mb-10 pb-16 container">
      <h2 className="mb-6 text-xl font-semibold md:text-2xl">{sectionData?.name}</h2>

      <Accordion type="single" collapsible className="w-full border p-4 rounded-lg">
        {aboutValues.map((item, index) => (
          <AccordionItem className="border-dashed" key={item.id} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              <div dangerouslySetInnerHTML={{ __html: item.title }} className="text-lg font-medium" />
            </AccordionTrigger>
            <AccordionContent>
              <div dangerouslySetInnerHTML={{ __html: item.description }} className="max-w-none [&>p]:mb-4 [&>li]:mb-2 [&>ul]:mb-4 [&>ol]:mb-4" />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default CourseDetails
