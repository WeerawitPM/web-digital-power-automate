import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

export default function CardComponent({ href, src, document, title }: { href: string, src: string, document: string, title: string }) {
    return (
        <div className="d-flex text-center">
            <Link href={href}>
                <Card className="w-[270px]" isPressable isHoverable radius="sm">
                    <CardBody className="bg-[#106ebe]">
                        <Image src={src} width={200} height={200} unoptimized alt='image' className="object-cover w-[100%]" />
                    </CardBody>
                    <CardFooter>
                        <div className="flex flex-col h-16">
                            <div className="text-start font-bold">{document}</div>
                            <div className="text-start text-sm">{title}</div>
                        </div>
                    </CardFooter>
                </Card>
            </Link>
        </div>
    )
}