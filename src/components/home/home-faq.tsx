import { FAQ } from "../../constant/common.constant";
import Container from "../common/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function HomeSectionFaq() {
  return (
    <>
      <Container>
        <div className=" flex flex-col w-full items-center justify-center my-20">
          <div className=" text-center">
            <h1 className=" text-4xl font-semibold leading-relaxed">FAQ</h1>
            <p className=" text-neutral-500 max-w-2xl">
              Berikut merupakan pertanyaan yang sering diajukan seputar Bandar
              Udara Harun Thohir - Gresik.
            </p>
          </div>
          <div className=" flex flex-col w-full mt-10">
            <Accordion type="single" collapsible>
              {FAQ.map((faq) => (
                <>
                  <AccordionItem value={faq.item}>
                    <AccordionTrigger className=" text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                </>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </>
  );
}
