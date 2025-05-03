import { Card, CardHeader, CardBody, Image } from "@heroui/react";

export default function CardComponent({cargo,estudio,nombre,url}: {cargo: string;estudio: string;nombre: string;url: string;}) {
  return (
    <Card 
      className="py-4 w-full sm:w-[280px] transition-all duration-300 ease-in-out 
                hover:scale-105 hover:shadow-lg hover:bg-cyan-100 hover:shadow-cyan-500/20"
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
        <Image
          alt={nombre}
          className="object-cover rounded-full hover:ring-2 hover:ring-cyan-500"
          src={url}
          width={120}
          height={120}
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2 text-center">
        <h4 className="font-bold text-lg group-hover:text-cyan-800">{nombre}</h4>
        <small className="text-default-500 font-semibold group-hover:text-cyan-600">{cargo}</small>
        <p className="text-sm mt-2 group-hover:text-cyan-700">{estudio}</p>
      </CardBody>
    </Card>
  );
}