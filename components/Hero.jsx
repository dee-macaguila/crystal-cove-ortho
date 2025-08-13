import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FallbackImage } from "@/components/ui/FallbackImage";

function Hero() {
  return (
    <div className="w-full py-6 md:py-8 lg:py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 items-start">
          <div className="flex flex-col gap-3 md:gap-4">
            <div className="flex flex-col gap-3">
              <h1 className="font-glacial text-5xl md:text-7xl lg:text-8xl max-w-3xl tracking-tight text-left font-semibold text-blue-900">
                Welcome to Dr. Russell Choy Orthodontics
              </h1>
              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-700 max-w-xl text-left">
                Friendly Staff. Beautiful Smiles. Welcoming Environment.
              </p>
              <p className="text-base md:text-lg leading-relaxed tracking-tight text-gray-700 max-w-xl text-left">
                Welcome to Dr. Cynthia Wong Orthodontics, Your Dentist in Orland Park, IL
              </p>
            </div>
            <div className="flex flex-row gap-3 md:gap-4">
              <Button size="lg" className="gap-3 md:gap-4" variant="outline">
                Jump on a call <PhoneCall className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-3 md:gap-4">
                Sign up here <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="relative aspect-square">
              <FallbackImage
                src="/xray.jpeg"
                alt="Dental x-ray review"
                fill
                sizes="(min-width:1024px) 25vw, 50vw"
                className="object-cover rounded-md shadow-sm"
                priority
              />
            </div>
            <div className="relative row-span-2">
              <FallbackImage
                src="/smiles.jpg"
                alt="Beautiful healthy smile"
                fill
                sizes="(min-width:1024px) 25vw, 50vw"
                className="object-cover rounded-md shadow-sm"
              />
            </div>
            <div className="relative aspect-square">
              <FallbackImage
                src="/braces.jpg"
                alt="Dental braces treatment"
                fill
                sizes="(min-width:1024px) 25vw, 50vw"
                className="object-cover rounded-md shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
