import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FallbackImage } from "@/components/ui/FallbackImage";

function Hero() {
  return (
    <div className="w-full py-4 md:py-6 lg:py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 items-center">
          {/* Images on Left */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 order-2 md:order-1">
            <div className="relative row-span-2">
              <FallbackImage
                src="/smiles.jpg"
                alt="Beautiful healthy smile"
                fill
                sizes="(min-width:1024px) 25vw, 50vw"
                className="object-cover rounded-md shadow-sm"
                priority
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
            <div className="relative aspect-square">
              <FallbackImage
                src="/xray.jpeg"
                alt="Dental x-ray review"
                fill
                sizes="(min-width:1024px) 25vw, 50vw"
                className="object-cover rounded-md shadow-sm"
              />
            </div>
          </div>

          {/* Text on Right */}
          <div className="flex flex-col gap-3 md:gap-4 order-1 md:order-2 md:pl-8">
            <div className="flex flex-col gap-3">
              <h1 className="font-light italic text-5xl md:text-6xl lg:text-7xl max-w-3xl tracking-wide text-left bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 bg-clip-text text-transparent" style={{fontFamily: 'Georgia, serif'}}>
                Welcome to Crystal Cove Orthodontics
              </h1>
              <p className="text-base md:text-lg leading-relaxed tracking-tight text-gray-700 max-w-xl text-left">
                Friendly Staff. Beautiful Smiles. Welcoming Environment.
              </p>
              <p className="text-sm md:text-base leading-relaxed tracking-tight text-gray-700 max-w-xl text-left">
                Welcome to Dr. Russell Choy Orthodontics, Your Orthodontist in Orland Park, IL
              </p>
            </div>
            <div className="flex flex-row gap-3 md:gap-4">
              <Button size="lg" className="gap-3 md:gap-4" variant="outline">
                Jump on a call <PhoneCall className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-3 md:gap-4">
                Appointment Request <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
