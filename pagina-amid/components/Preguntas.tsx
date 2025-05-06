import { Accordion, AccordionItem } from "@heroui/react";
import "../styles/styleAcordeon.css";

export default function Preguntas() {
  const accordionItems = [
    {
      key: "1",
      ariaLabel: "Accordion 1",
      title: "¿Cómo puedo formar parte de la asociación?",
      subtitle: "Haz clic para expandir el primer ítem",
      content: "Explora el contenido del primer accordion, diseñado para proporcionar información clara y específica."
    },
    {
      key: "2",
      ariaLabel: "Accordion 2",
      title: "¿Cúal es su horario de atención?",
      subtitle: (
        <span>
          Toca para ver <strong>más detalles</strong>
        </span>
      ),
      content: "Lunes a viernes de 9:00 a 18:00 horas."
    },
    {
      key: "3",
      ariaLabel: "Accordion 3",
      title: "Tercer Elemento",
      subtitle: "Expande para más información",
      content: "El tercer ítem ofrece contenido personalizado, perfecto para una experiencia de usuario optimizada."
    },
    {
      key: "4",
      ariaLabel: "Accordion 4",
      title: "Cuarto Elemento",
      subtitle: "Presiona para explorar",
      content: "Descubre el contenido del cuarto accordion, con texto adaptado para tus necesidades."
    },
    {
      key: "5",
      ariaLabel: "Accordion 5",
      title: "Quinto Elemento",
      subtitle: "Abre este ítem",
      content: "El último accordion incluye información distintiva, completando la serie de ítems interactivos."
    }
  ];

  return (
    <div className="accordion-container">
      <Accordion>
        {accordionItems.map((item) => (
          <AccordionItem
            key={item.key}
            aria-label={item.ariaLabel}
            subtitle={item.subtitle}
            title={item.title}
          >
            {item.content}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}