import {Card, CardHeader, CardBody, Image} from "@heroui/react";

interface CardProps {
    cargo: string;
    estudio: string;
    nombre: string;
    url: string;
}

export default function App({cargo, estudio, nombre, url}: CardProps) {


  return (
    <Card className="flex py-2 hover:bg-cyan-300 hover:transform hover:scale-105 transition-transform duration-300">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{cargo}</p>
        <small className="text-default-500">{estudio}</small>
        <h4 className="font-bold text-large">{nombre}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={url}
          width={270}
        />
      </CardBody>
    </Card>
  );
}