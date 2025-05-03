import { Accordion, AccordionItem, Avatar } from "@heroui/react";

export default function App() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion selectionMode="multiple" className="gap-2">
      <AccordionItem
        key="1"
        aria-label="Hector Javier"
        classNames={{
          base: "transition-all duration-300 ease-in-out hover:bg-cyan-50 hover:scale-[1.02]",
          title: "hover:text-cyan-600"
        }}
        startContent={
          <Avatar
            isBordered
            color="primary"
            radius="lg"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
        }
        subtitle="Socio Fundador"
        title="Hector Javier"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Yetmari Carmona"
        classNames={{
          base: "transition-all duration-300 ease-in-out hover:bg-cyan-50 hover:scale-[1.02]",
          title: "hover:text-cyan-600"
        }}
        startContent={
          <Avatar
            isBordered
            color="success"
            radius="lg"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        }
        subtitle="Tesorera"
        title="Yetmari Carmona"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Zoey Lang"
        classNames={{
          base: "transition-all duration-300 ease-in-out hover:bg-cyan-50 hover:scale-[1.02]",
          title: "hover:text-cyan-600"
        }}
        startContent={
          <Avatar
            isBordered
            color="warning"
            radius="lg"
            src="https://i.pravatar.cc/150?u=a04258114e29026702d"
          />
        }
        subtitle="2 issues to fix now"
        title="Zoey Lang"
      >
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}