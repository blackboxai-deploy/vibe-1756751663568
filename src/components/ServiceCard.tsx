import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ServiceCardProps {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  buttonText: string
  buttonVariant?: 'default' | 'outline'
  features: string[]
}

export default function ServiceCard({ 
  title, 
  description, 
  imageUrl, 
  imageAlt, 
  buttonText, 
  buttonVariant = 'default',
  features 
}: ServiceCardProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-64 object-cover"
        />
      </div>
      
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
        </div>

        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4">
          <Button 
            className={`w-full py-3 text-lg font-medium ${
              buttonVariant === 'outline' 
                ? 'border-2 border-black text-black bg-white hover:bg-black hover:text-white' 
                : 'bg-black text-white hover:bg-gray-800'
            }`}
            variant={buttonVariant}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </Card>
  )
}